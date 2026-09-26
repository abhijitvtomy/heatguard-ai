import React, { useEffect, useRef, useState, useMemo } from 'react';
import L from 'leaflet';
import { translations } from '../i18n/translations';
import { 
  MapPin, Shield, Droplets, Info, Flame, AlertCircle, Navigation, 
  Compass, ShieldCheck, TreePine, Clock, Maximize2, Minimize2, 
  ChevronDown, ChevronUp, X, Sparkles, ArrowUpDown, RotateCcw, Locate
} from 'lucide-react';
import { driverCorridors } from '../data/coolRoutesData';
import { calculateDynamicCoolRoute, BENGALURU_LOCATIONS } from '../utils/coolRoutingService';

export default function WardMap({
  wardsGeojson,
  shelters,
  selectedWard,
  setSelectedWard,
  language,
  showShelters,
  setShowShelters,
  showHotspots: propShowHotspots,
  setShowHotspots: propSetShowHotspots,
  isMaximized = false,
  onToggleMaximize
}) {
  const [localShowHotspots, setLocalShowHotspots] = useState(true);
  const showHotspots = propShowHotspots !== undefined ? propShowHotspots : localShowHotspots;
  const setShowHotspots = propSetShowHotspots || setLocalShowHotspots;
  
  const [showCoolRoutes, setShowCoolRoutes] = useState(false);
  const [activeCorridorId, setActiveCorridorId] = useState(driverCorridors[0]?.id || 'majestic-indiranagar');
  const [isHotspotsExpanded, setIsHotspotsExpanded] = useState(false);

  // Dynamic Point-to-Point A -> B Route States
  const [routeTab, setRouteTab] = useState('CUSTOM'); // 'CUSTOM' | 'PRESET'
  const [customStart, setCustomStart] = useState([12.9772, 77.5713]); // Majestic default
  const [customEnd, setCustomEnd] = useState([12.9784, 77.6434]); // Indiranagar default
  const [customStartLabel, setCustomStartLabel] = useState('Majestic Kempegowda Bus Station');
  const [customEndLabel, setCustomEndLabel] = useState('Indiranagar 100ft Road');
  const [pickMode, setPickMode] = useState(null); // null | 'A' | 'B'
  const [customRouteResult, setCustomRouteResult] = useState(() => {
    const corridor = driverCorridors[0];
    if (!corridor) return null;
    return {
      origin: { label: 'Majestic Kempegowda Bus Station', coords: [12.9772, 77.5713] },
      destination: { label: 'Indiranagar 100ft Road', coords: [12.9784, 77.6434] },
      via_name: 'Cubbon Park West Promenade & Tree-Canopy Boulevard',
      direct_route: corridor.direct_route,
      cool_route: corridor.cool_route
    };
  });
  const [isCalculatingRoute, setIsCalculatingRoute] = useState(false);

  const pickModeRef = useRef(null);
  pickModeRef.current = pickMode;

  const onMapClickRef = useRef(null);

  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const geojsonLayerRef = useRef(null);
  const labelsLayerRef = useRef(null);
  const sheltersLayerRef = useRef(null);
  const hotspotsLayerRef = useRef(null);
  const routesLayerRef = useRef(null);

  const t = translations[language] || translations.en;

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      // Center over Bengaluru (BBMP)
      const map = L.map(mapContainerRef.current, {
        center: [12.9716, 77.5946],
        zoom: 11,
        zoomControl: false,
        attributionControl: false
      });

      // Position Zoom Control at bottomright so it never clashes with top controls
      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // Create dedicated Leaflet panes with strict z-index hierarchies
      // Pane for cool routes (above ward polygon overlay)
      if (!map.getPane('coolRoutesPane')) {
        const coolRoutesPane = map.createPane('coolRoutesPane');
        coolRoutesPane.style.zIndex = '650';
      }

      // Pane for labels and markers
      if (!map.getPane('customMarkersPane')) {
        const markersPane = map.createPane('customMarkersPane');
        markersPane.style.zIndex = '670';
      }

      // Native High-Contrast Dark Tiles (CartoDB Dark Matter) - Crisp streets, zero pitch-black filter
      const tileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
      });
      tileLayer.on('tileerror', function(error, tile) {
        if (tile && !tile._fallback) {
          tile._fallback = true;
          tile.src = `https://tile.openstreetmap.org/${error.coords.z}/${error.coords.x}/${error.coords.y}.png`;
        }
      });
      tileLayer.addTo(map);

      // Crucial: Invalidate size after layout completes to guarantee tiles render immediately
      setTimeout(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize();
        }
      }, 100);
      setTimeout(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize();
        }
      }, 400);

      // Listen for map clicks for interactive A -> B cool route picking
      map.on('click', (e) => {
        if (pickModeRef.current && onMapClickRef.current) {
          onMapClickRef.current(e.latlng);
        }
      });

      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Map Click handler for interactive Origin (A) / Destination (B) selection
  const handleMapClick = (latlng) => {
    if (!latlng) return;
    const lat = Number(latlng.lat.toFixed(5));
    const lon = Number(latlng.lng.toFixed(5));

    if (pickModeRef.current === 'A') {
      setCustomStart([lat, lon]);
      setCustomStartLabel(`Point A (${lat.toFixed(3)}, ${lon.toFixed(3)})`);
      if (!customEnd) {
        setPickMode('B');
      } else {
        setPickMode(null);
      }
    } else if (pickModeRef.current === 'B') {
      setCustomEnd([lat, lon]);
      setCustomEndLabel(`Point B (${lat.toFixed(3)}, ${lon.toFixed(3)})`);
      setPickMode(null);
    }
  };
  onMapClickRef.current = handleMapClick;

  // Calculate dynamic Point-to-Point Cool Route on mount and whenever customStart or customEnd changes
  useEffect(() => {
    if (routeTab !== 'CUSTOM' || !customStart || !customEnd) return;

    let isMounted = true;
    setIsCalculatingRoute(true);

    calculateDynamicCoolRoute(customStart, customEnd, shelters, customStartLabel, customEndLabel)
      .then((res) => {
        if (isMounted) {
          setCustomRouteResult(res);
          setIsCalculatingRoute(false);
        }
      })
      .catch((err) => {
        console.warn('Cool route calculation failed:', err);
        if (isMounted) setIsCalculatingRoute(false);
      });

    return () => {
      isMounted = false;
    };
  }, [customStart, customEnd, routeTab, shelters]);

  // Invalidate Map size when Maximized, Minimized, or toggling Cool Routes
  useEffect(() => {
    if (mapInstanceRef.current) {
      const timer = setTimeout(() => {
        mapInstanceRef.current?.invalidateSize();
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isMaximized, showCoolRoutes]);

  // Update Ward Polygons when GeoJSON or Language changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !wardsGeojson?.features?.length) return;

    if (geojsonLayerRef.current) {
      map.removeLayer(geojsonLayerRef.current);
    }
    if (labelsLayerRef.current) {
      map.removeLayer(labelsLayerRef.current);
      labelsLayerRef.current = null;
    }

    const getColor = (tier) => {
      switch (tier) {
        case 'RED': return '#dc2626';
        case 'ORANGE': return '#ea580c';
        case 'YELLOW': return '#eab308';
        case 'BLUE': return '#0284c7';
        case 'GREEN':
        default: return '#16a34a';
      }
    };

    const layer = L.geoJSON(wardsGeojson, {
      style: (feature) => {
        const props = feature.properties || {};
        const isSelected = selectedWard && selectedWard.ward_id === props.ward_id;
        const tier = props.effective_alert_tier || props.health_risk?.alert_tier || 'GREEN';

        return {
          fillColor: getColor(tier),
          weight: isSelected ? 3.5 : 1.8,
          opacity: 0.9,
          color: isSelected ? '#ffffff' : '#0f172a',
          fillOpacity: isSelected ? 0.75 : 0.52
        };
      },
      onEachFeature: (feature, l) => {
        const props = feature.properties || {};
        const wardName =
          language === 'kn' ? (props.name_kn || props.name) :
          language === 'hi' ? (props.name_hi || props.name) :
          props.name;

        // Interactive hover & selection
        l.on({
          click: (e) => {
            if (pickModeRef.current && onMapClickRef.current) {
              L.DomEvent.stopPropagation(e);
              onMapClickRef.current(e.latlng);
              return;
            }
            setSelectedWard(props);
          },
          mouseover: (e) => {
            const target = e.target;
            target.setStyle({
              fillOpacity: 0.85,
              weight: 3,
              color: '#38bdf8'
            });
            target.bringToFront();
          },
          mouseout: (e) => {
            if (geojsonLayerRef.current) {
              geojsonLayerRef.current.resetStyle(e.target);
            }
          }
        });

        // Tooltip
        l.bindTooltip(`
          <div style="font-family: system-ui; font-size: 11px; padding: 2px;">
            <div style="font-weight: 800; color: #0f172a;">${props.ward_id}: ${wardName}</div>
            <div style="color: #475569;">Temp: <b>${props.microclimate?.temperature_c != null ? props.microclimate.temperature_c : '--'}°C</b> | WBGT: <b>${props.microclimate?.wbgt_c != null ? props.microclimate.wbgt_c : '--'}°C</b></div>
            <div style="color: #0f172a; font-weight: 600;">Status: <span style="color: ${getColor(props.effective_alert_tier)}; font-weight: 800;">${props.effective_alert_tier || 'SAFE'}</span></div>
          </div>
        `, { sticky: true, className: 'leaflet-custom-tooltip' });
      }
    });

    layer.addTo(map);
    geojsonLayerRef.current = layer;

    // Add Ward Number Badges
    const labelsGroup = L.layerGroup();
    wardsGeojson.features.forEach((feature) => {
      const props = feature.properties || {};
      if (props.center) {
        const wardNum = props.ward_id.replace('BBMP-', '');
        const labelIcon = L.divIcon({
          className: 'ward-map-label',
          html: `
            <div style="
              background: rgba(15, 23, 42, 0.85);
              color: #f8fafc;
              border: 1px solid rgba(255, 255, 255, 0.3);
              border-radius: 6px;
              padding: 1px 4px;
              font-size: 9px;
              font-weight: 700;
              text-align: center;
              white-space: nowrap;
              pointer-events: none;
              box-shadow: 0 1px 3px rgba(0,0,0,0.5);
            ">
              W-${wardNum}
            </div>
          `,
          iconSize: [28, 16],
          iconAnchor: [14, 8]
        });
        labelsGroup.addLayer(L.marker(props.center, { icon: labelIcon, interactive: false }));
      }
    });

    labelsGroup.addTo(map);
    labelsLayerRef.current = labelsGroup;

    // Pan to selected ward if chosen
    if (selectedWard && selectedWard.center) {
      map.flyTo(selectedWard.center, 12, { duration: 0.8 });
    }
  }, [wardsGeojson, selectedWard, language]);

  // Render Shelters & Water Points
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (sheltersLayerRef.current) {
      map.removeLayer(sheltersLayerRef.current);
      sheltersLayerRef.current = null;
    }

    if (!showShelters || !shelters?.length) return;

    const group = L.layerGroup();

    shelters.forEach((s) => {
      if (!s.lat || !s.lon) return;

      const isCooling = s.type === 'INDIRA_CANTEEN' || s.type === 'COMMUNITY_COOLING_SHELTER';
      const customIcon = L.divIcon({
        className: 'shelter-marker-icon',
        html: `
          <div style="
            background: ${isCooling ? '#059669' : '#0284c7'};
            border: 1.5px solid #ffffff;
            border-radius: 9999px;
            width: 22px;
            height: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 8px rgba(0,0,0,0.35);
            cursor: pointer;
            color: #ffffff;
            font-size: 11px;
          ">
            ${isCooling ? '❄️' : '💧'}
          </div>
        `,
        iconSize: [22, 22],
        iconAnchor: [11, 11]
      });

      const sName =
        language === 'kn' ? (s.name_kn || s.name) :
        language === 'hi' ? (s.name_hi || s.name) :
        s.name;

      const marker = L.marker([s.lat, s.lon], { icon: customIcon });
      marker.bindPopup(`
        <div style="font-family: system-ui; padding: 6px; font-size: 12px; color: #1e293b; max-width: 220px;">
          <div style="font-weight: 800; font-size: 13px; color: #0f172a; margin-bottom: 4px;">${sName}</div>
          <div style="font-size: 11px; color: #475569; margin-bottom: 6px;">${s.address}</div>
          <div style="margin-bottom: 4px;"><b>Type:</b> ${isCooling ? 'Designated Public Cooling Shelter' : 'Potable Public Water Post'}</div>
          <div><b>Hours:</b> ${s.operating_hours}</div>
          <div style="margin-top: 6px; font-weight: bold; color: #16a34a;">● Status: ${s.status}</div>
        </div>
      `);
      group.addLayer(marker);
    });

    group.addTo(map);
    sheltersLayerRef.current = group;
  }, [shelters, showShelters, language]);

  // Compute Top 3 Real-Time Thermal Hotspots
  const topHotspots = useMemo(() => {
    if (!wardsGeojson?.features?.length) return [];
    const list = [...wardsGeojson.features].map(f => f.properties || {});
    list.sort((a, b) => {
      const tempA = a.microclimate?.temperature_c || 0;
      const tempB = b.microclimate?.temperature_c || 0;
      return tempB - tempA;
    });
    return list.slice(0, 3);
  }, [wardsGeojson]);

  // Render Real-Time Hotspot Pulsating Halos
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (hotspotsLayerRef.current) {
      map.removeLayer(hotspotsLayerRef.current);
      hotspotsLayerRef.current = null;
    }

    if (!showHotspots || !wardsGeojson?.features?.length) return;

    const group = L.layerGroup();
    wardsGeojson.features.forEach(f => {
      const p = f.properties || {};
      const isHot = p.is_hotspot || (p.microclimate?.temperature_c >= 33.5) || (p.uhi_temp_delta >= 2.0);
      if (isHot && p.center) {
        const pulseIcon = L.divIcon({
          className: 'hotspot-pulse-icon',
          html: `
            <div style="position: relative; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
              <div style="position: absolute; width: 22px; height: 22px; border-radius: 9999px; background: rgba(239, 68, 68, 0.35); animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
              <div style="position: relative; width: 18px; height: 18px; border-radius: 9999px; background: linear-gradient(135deg, #dc2626, #ea580c); border: 1.5px solid #fef08a; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 8px #dc2626; font-size: 9px;">🔥</div>
            </div>
          `,
          iconSize: [22, 22],
          iconAnchor: [11, 11]
        });

        const m = L.marker(p.center, { icon: pulseIcon });
        m.on('click', () => setSelectedWard(p));
        m.bindTooltip(`
          <div style="font-family: system-ui; font-size: 11px; padding: 4px;">
            <div style="font-weight: 800; color: #ef4444; margin-bottom: 2px;">🔥 Active Thermal Hotspot</div>
            <div style="font-weight: 700; color: #f8fafc;">${p.name}</div>
            <div style="color: #fbbf24;">Temp: <b>${p.microclimate?.temperature_c}°C</b> (+${p.uhi_temp_delta}°C UHI)</div>
            <div style="color: #f87171;">Vulnerability: <b>${p.vulnerability_score || '--'}</b></div>
          </div>
        `, { className: 'leaflet-dark-tooltip' });
        group.addLayer(m);
      }
    });

    group.addTo(map);
    hotspotsLayerRef.current = group;
  }, [wardsGeojson, showHotspots]);

  // Render Driver Cool Corridors (Custom Point-to-Point OR Preset Corridor) in DEDICATED HIGH-PRIORITY PANE
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (routesLayerRef.current) {
      map.removeLayer(routesLayerRef.current);
      routesLayerRef.current = null;
    }

    if (!showCoolRoutes) return;

    // Ensure pane exists
    if (!map.getPane('coolRoutesPane')) {
      const pane = map.createPane('coolRoutesPane');
      pane.style.zIndex = '650';
    }

    const group = L.layerGroup();

    if (routeTab === 'CUSTOM' && customRouteResult) {
      const res = customRouteResult;

      // 1. Direct Asphalt Route (Red dashed line)
      const directLine = L.polyline(res.direct_route.coordinates, {
        color: '#ef4444',
        weight: 5,
        dashArray: '10, 10',
        opacity: 0.95,
        pane: 'coolRoutesPane'
      });
      directLine.bindTooltip(`
        <div style="font-family: system-ui; padding: 5px; font-size: 11px;">
          <b style="color: #ef4444;">🔴 Direct Asphalt Route (Solar Heat Trap)</b><br/>
          Distance: <b>${res.direct_route.distance_km} km</b> • ETA: <b>${res.direct_route.duration_mins} mins</b><br/>
          Road Surface Temp: <b>${res.direct_route.surface_temp_c}°C</b><br/>
          WBGT Heat Strain: <b>${res.direct_route.wbgt_c}°C</b><br/>
          Canopy Shade: <b>${res.direct_route.canopy_shade_pct}%</b>
        </div>
      `, { sticky: true });
      group.addLayer(directLine);

      // 2. Recommended Cool Route: Glowing background halo + solid emerald line
      const coolGlow = L.polyline(res.cool_route.coordinates, {
        color: '#34d399',
        weight: 12,
        opacity: 0.4,
        pane: 'coolRoutesPane'
      });
      group.addLayer(coolGlow);

      const coolLine = L.polyline(res.cool_route.coordinates, {
        color: '#10b981',
        weight: 6,
        opacity: 1.0,
        pane: 'coolRoutesPane'
      });
      coolLine.bindTooltip(`
        <div style="font-family: system-ui; padding: 5px; font-size: 11px;">
          <b style="color: #10b981;">🟢 Recommended Cool Respite Route</b><br/>
          <span style="color:#059669; font-weight:600;">${res.via_name}</span><br/>
          Distance: <b>${res.cool_route.distance_km} km</b> • ETA: <b>${res.cool_route.duration_mins} mins</b><br/>
          Road Temp: <b>${res.cool_route.surface_temp_c}°C (-${Math.abs(res.cool_route.temp_savings_c)}°C Relief)</b><br/>
          Canopy Shade: <b>${res.cool_route.canopy_shade_pct}%</b> • Hydration Stops: <b>${res.cool_route.water_stops_count}</b>
        </div>
      `, { sticky: true });
      group.addLayer(coolLine);

      // 3. Draggable Marker A (Origin)
      const startIcon = L.divIcon({
        className: 'route-start-icon',
        html: `<div style="background: #10b981; color: white; font-weight: 900; font-size: 12px; border-radius: 9999px; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; border: 2.5px solid white; box-shadow: 0 0 14px #10b981; cursor: grab;">A</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });
      const mStart = L.marker(customStart, { icon: startIcon, draggable: true, pane: 'coolRoutesPane' });
      mStart.on('dragend', (e) => {
        const p = e.target.getLatLng();
        setCustomStart([Number(p.lat.toFixed(5)), Number(p.lng.toFixed(5))]);
        setCustomStartLabel(`Point A (${p.lat.toFixed(3)}, ${p.lng.toFixed(3)})`);
      });
      mStart.bindPopup(`<b>Start (A):</b> ${customStartLabel}<br/><span style="font-size:10px; color:#64748b;">(Drag marker to move origin)</span>`);
      group.addLayer(mStart);

      // 4. Draggable Marker B (Destination)
      const endIcon = L.divIcon({
        className: 'route-end-icon',
        html: `<div style="background: #6366f1; color: white; font-weight: 900; font-size: 12px; border-radius: 9999px; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; border: 2.5px solid white; box-shadow: 0 0 14px #6366f1; cursor: grab;">B</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });
      const mEnd = L.marker(customEnd, { icon: endIcon, draggable: true, pane: 'coolRoutesPane' });
      mEnd.on('dragend', (e) => {
        const p = e.target.getLatLng();
        setCustomEnd([Number(p.lat.toFixed(5)), Number(p.lng.toFixed(5))]);
        setCustomEndLabel(`Point B (${p.lat.toFixed(3)}, ${p.lng.toFixed(3)})`);
      });
      mEnd.bindPopup(`<b>Destination (B):</b> ${customEndLabel}<br/><span style="font-size:10px; color:#64748b;">(Drag marker to move destination)</span>`);
      group.addLayer(mEnd);

      // 5. Water Kiosks along cool route
      (res.cool_route.water_stops || []).forEach(ws => {
        const waterIcon = L.divIcon({
          className: 'route-water-icon',
          html: `<div style="background: #0284c7; color: white; font-size: 14px; border-radius: 9999px; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; border: 2px solid #bae6fd; box-shadow: 0 0 10px #38bdf8; cursor: pointer;">💧</div>`,
          iconSize: [26, 26],
          iconAnchor: [13, 13]
        });
        const wm = L.marker([ws.lat, ws.lon], { icon: waterIcon, pane: 'coolRoutesPane' });
        wm.bindPopup(`
          <div style="font-family: system-ui; padding: 4px; font-size: 11px;">
            <b style="color: #0284c7;">💧 ${ws.name}</b><br/>
            <span>${ws.desc}</span>
            ${ws.distanceMeters != null ? `<div style="color:#64748b; font-size:10px; margin-top:2px;">~${ws.distanceMeters}m from cool route</div>` : ''}
          </div>
        `);
        group.addLayer(wm);
      });

      group.addTo(map);
      routesLayerRef.current = group;

      const allCoords = [
        ...res.cool_route.coordinates,
        ...res.direct_route.coordinates
      ];
      if (allCoords.length > 0) {
        const bounds = L.latLngBounds(allCoords);
        map.fitBounds(bounds, { padding: [60, 60], maxZoom: 14, animate: true });
      }

    } else if (routeTab === 'PRESET') {
      const corridor = driverCorridors.find(c => c.id === activeCorridorId) || driverCorridors[0];
      if (corridor) {
        // Direct
        const directLine = L.polyline(corridor.direct_route.coordinates, {
          color: '#ef4444',
          weight: 5,
          dashArray: '10, 10',
          opacity: 0.95,
          pane: 'coolRoutesPane'
        });
        directLine.bindTooltip(`
          <div style="font-family: system-ui; padding: 5px; font-size: 11px;">
            <b style="color: #ef4444;">🔴 Direct Asphalt Route (Heat Trap)</b><br/>
            Road Surface Temp: <b>${corridor.direct_route.surface_temp_c}°C</b><br/>
            WBGT Heat Strain: <b>${corridor.direct_route.wbgt_c}°C</b><br/>
            Zero shade • High vehicle exhaust
          </div>
        `, { sticky: true });
        group.addLayer(directLine);

        // Cool
        const coolGlow = L.polyline(corridor.cool_route.coordinates, {
          color: '#34d399',
          weight: 12,
          opacity: 0.4,
          pane: 'coolRoutesPane'
        });
        group.addLayer(coolGlow);

        const coolLine = L.polyline(corridor.cool_route.coordinates, {
          color: '#10b981',
          weight: 6,
          opacity: 1.0,
          pane: 'coolRoutesPane'
        });
        coolLine.bindTooltip(`
          <div style="font-family: system-ui; padding: 5px; font-size: 11px;">
            <b style="color: #10b981;">🟢 Recommended Cool Respite Route</b><br/>
            Road Temp: <b>${corridor.cool_route.surface_temp_c}°C (-${Math.abs(corridor.cool_route.temp_savings_c)}°C Relief)</b><br/>
            Canopy Shade: <b>${corridor.cool_route.canopy_shade_pct}%</b> • Water Posts: <b>${corridor.cool_route.water_stops_count}</b><br/>
            Leaves asphalt corridors for tree-lined avenues
          </div>
        `, { sticky: true });
        group.addLayer(coolLine);

        // Markers A and B
        const startCoord = corridor.cool_route.coordinates[0];
        const endCoord = corridor.cool_route.coordinates[corridor.cool_route.coordinates.length - 1];

        const startIcon = L.divIcon({
          className: 'route-start-icon',
          html: `<div style="background: #10b981; color: white; font-weight: 900; font-size: 11px; border-radius: 9999px; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; border: 2.5px solid white; box-shadow: 0 0 12px #10b981;">A</div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14]
        });
        const endIcon = L.divIcon({
          className: 'route-end-icon',
          html: `<div style="background: #6366f1; color: white; font-weight: 900; font-size: 11px; border-radius: 9999px; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; border: 2.5px solid white; box-shadow: 0 0 12px #6366f1;">B</div>`,
          iconSize: [28, 28],
          iconAnchor: [14, 14]
        });

        const mStart = L.marker(startCoord, { icon: startIcon, pane: 'coolRoutesPane' });
        mStart.bindPopup(`<b>Start Location:</b> ${corridor.title.split('→')[0]}`);
        group.addLayer(mStart);

        const mEnd = L.marker(endCoord, { icon: endIcon, pane: 'coolRoutesPane' });
        mEnd.bindPopup(`<b>Destination:</b> ${corridor.title.split('→')[1]}`);
        group.addLayer(mEnd);

        // Water stops
        (corridor.cool_route.water_stops || []).forEach(ws => {
          const waterIcon = L.divIcon({
            className: 'route-water-icon',
            html: `<div style="background: #0284c7; color: white; font-size: 14px; border-radius: 9999px; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; border: 2px solid #bae6fd; box-shadow: 0 0 10px #38bdf8; cursor: pointer;">💧</div>`,
            iconSize: [26, 26],
            iconAnchor: [13, 13]
          });
          const wm = L.marker([ws.lat, ws.lon], { icon: waterIcon, pane: 'coolRoutesPane' });
          wm.bindPopup(`
            <div style="font-family: system-ui; padding: 4px; font-size: 11px;">
              <b style="color: #0284c7;">💧 ${ws.name}</b><br/>
              <span>${ws.desc}</span>
            </div>
          `);
          group.addLayer(wm);
        });

        group.addTo(map);
        routesLayerRef.current = group;

        const allCoords = [
          ...corridor.cool_route.coordinates,
          ...corridor.direct_route.coordinates
        ];
        const bounds = L.latLngBounds(allCoords);
        map.fitBounds(bounds, { padding: [60, 60], maxZoom: 14, animate: true });
      }
    }
  }, [showCoolRoutes, routeTab, activeCorridorId, customRouteResult, customStart, customEnd, customStartLabel, customEndLabel]);

  return (
    <div className={`relative w-full ${isMaximized ? 'h-[740px]' : 'h-[560px]'} rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 transition-all duration-300`}>
      {/* Leaflet Map Canvas */}
      <div ref={mapContainerRef} className={`w-full h-full z-10 dark-tiles ${pickMode ? 'cursor-crosshair' : ''}`} />

      {/* Top Floating Navigation Bar: Single cohesive, non-wrapping row across map */}
      <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between gap-2 pointer-events-none">
        {/* Left Segmented Control Pill */}
        <div className="pointer-events-auto flex items-center gap-1 bg-slate-950/90 backdrop-blur-md p-1 rounded-xl border border-slate-800/90 shadow-xl">
          {/* Toggle Shelters */}
          <button
            onClick={() => setShowShelters(!showShelters)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${
              showShelters
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
            title="Toggle cooling shelters and hydration kiosks"
          >
            <Droplets className="w-3.5 h-3.5 text-sky-400" />
            <span>Kiosks</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${showShelters ? 'bg-emerald-700 text-white' : 'bg-slate-800 text-slate-400'}`}>
              {shelters?.length || 30}
            </span>
          </button>

          {/* Toggle Hotspots */}
          <button
            onClick={() => setShowHotspots(!showHotspots)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${
              showHotspots
                ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
            title="Toggle live thermal hotspots"
          >
            <Flame className="w-3.5 h-3.5 text-amber-300" />
            <span>Hotspots</span>
          </button>

          {/* Driver Cool Routes */}
          <button
            onClick={() => setShowCoolRoutes(!showCoolRoutes)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold transition ${
              showCoolRoutes
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
            title="Toggle driver cool respite routes"
          >
            <Navigation className="w-3.5 h-3.5 text-indigo-400" />
            <span>Cool Routes</span>
          </button>
        </div>

        {/* Right Group: Hotspots Flyout & Maximize Controls */}
        <div className="pointer-events-auto flex items-center gap-1.5">
          {showHotspots && topHotspots.length > 0 && (
            <div className="relative">
              <button
                onClick={() => setIsHotspotsExpanded(!isHotspotsExpanded)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-bold shadow-xl backdrop-blur-md transition ${
                  isHotspotsExpanded
                    ? 'bg-red-600 text-white border-red-500 shadow-red-600/30'
                    : 'bg-slate-950/90 text-red-400 border-red-900/60 hover:bg-slate-900'
                }`}
                title="View Top 3 Thermal Hotspots ranking"
              >
                <Flame className="w-3.5 h-3.5 text-red-400" />
                <span className="hidden sm:inline">Top 3</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isHotspotsExpanded ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Flyout Card */}
              {isHotspotsExpanded && (
                <div className="absolute top-11 right-0 z-30 bg-slate-950/95 backdrop-blur-md p-3 rounded-2xl border border-red-900/70 shadow-2xl text-xs w-[250px] space-y-2 animate-in fade-in zoom-in-95 duration-150">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                    <div className="flex items-center gap-1.5 font-extrabold text-red-400 text-xs">
                      <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                      <span>Top Thermal Hotspots</span>
                    </div>
                    <button
                      onClick={() => setIsHotspotsExpanded(false)}
                      className="p-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="space-y-1">
                    {topHotspots.map((h, i) => (
                      <button
                        key={h.ward_id || i}
                        onClick={() => {
                          setSelectedWard(h);
                          if (h.center && mapInstanceRef.current) {
                            mapInstanceRef.current.flyTo(h.center, 13);
                          }
                          setIsHotspotsExpanded(false);
                        }}
                        className="w-full text-left flex items-center justify-between gap-2 p-1.5 rounded-lg hover:bg-slate-800/70 transition"
                      >
                        <div className="truncate text-[11px] text-slate-200 font-medium">
                          <span className="text-red-400 font-bold mr-1">#{i + 1}</span>
                          {h.name?.split('&')[0]?.trim()}
                        </div>
                        <span className="font-mono text-[10px] font-extrabold text-amber-300 shrink-0">
                          {h.microclimate?.temperature_c != null ? `${Number(h.microclimate.temperature_c).toFixed(1)}°C` : '--'}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {onToggleMaximize && (
            <button
              onClick={onToggleMaximize}
              title={isMaximized ? "Restore split view" : "Maximize map to full width"}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-950/90 text-slate-200 border border-slate-700/80 hover:border-indigo-400 text-xs font-bold shadow-xl backdrop-blur-md transition hover:bg-slate-900"
            >
              {isMaximized ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="hidden sm:inline">Restore</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="hidden sm:inline">Maximize</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Interactive Map Picking Instruction Banner */}
      {pickMode && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 z-30 bg-emerald-950/95 border border-emerald-400 text-emerald-100 px-4 py-2 rounded-xl shadow-2xl backdrop-blur-md flex items-center gap-3 animate-bounce">
          <MapPin className="w-4 h-4 text-emerald-400 animate-pulse shrink-0" />
          <span className="text-xs font-bold whitespace-nowrap">
            {pickMode === 'A'
              ? (t.coolRoutes?.pickStartPrompt || '📍 Click anywhere on map to set Origin (Point A)...')
              : (t.coolRoutes?.pickDestPrompt || '🏁 Click anywhere on map to set Destination (Point B)...')}
          </span>
          <button
            onClick={() => setPickMode(null)}
            className="ml-1 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2 py-0.5 rounded-lg border border-slate-700 transition"
          >
            {t.coolRoutes?.cancel || 'Cancel'}
          </button>
        </div>
      )}

      {/* Floating Driver Cool Route Navigation Comparison Drawer */}
      {showCoolRoutes && (
        <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-[440px] max-h-[85%] overflow-y-auto z-30 bg-slate-950/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-emerald-500/50 shadow-2xl text-xs space-y-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <Navigation className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-white uppercase text-[11px] tracking-wide">
                {t.coolRoutes?.title || 'Cool Respite Route Navigation'}
              </span>
            </div>
            <button
              onClick={() => {
                setShowCoolRoutes(false);
                setPickMode(null);
              }}
              className="text-slate-400 hover:text-white p-1 rounded-md bg-slate-800 hover:bg-slate-700 transition"
              title="Close cool routes"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="grid grid-cols-2 p-0.5 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => {
                setRouteTab('CUSTOM');
                setPickMode(null);
              }}
              className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-bold transition ${
                routeTab === 'CUSTOM'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>{t.coolRoutes?.mapsMode || 'Maps A → B Route'}</span>
            </button>
            <button
              onClick={() => {
                setRouteTab('PRESET');
                setPickMode(null);
              }}
              className={`flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-bold transition ${
                routeTab === 'PRESET'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>{t.coolRoutes?.presetMode || 'Fixed Arteries'}</span>
            </button>
          </div>

          {routeTab === 'CUSTOM' ? (
            <div className="space-y-2.5">
              {/* Point A (Origin) */}
              <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                    <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px]">A</span>
                    <span>{t.coolRoutes?.originA || 'Origin (Point A)'}</span>
                  </div>
                  <button
                    onClick={() => setPickMode(pickMode === 'A' ? null : 'A')}
                    className={`flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-bold border transition ${
                      pickMode === 'A'
                        ? 'bg-emerald-600 text-white border-emerald-400 shadow-md shadow-emerald-600/30 animate-pulse'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
                    }`}
                    title="Click on map to choose origin point"
                  >
                    <Locate className="w-3 h-3" />
                    <span>{pickMode === 'A' ? 'Picking...' : (t.coolRoutes?.pickOnMap || 'Pick on Map')}</span>
                  </button>
                </div>

                <div className="flex items-center gap-1.5">
                  <select
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-2 py-1 text-slate-200 text-xs focus:outline-none focus:border-emerald-500"
                    value={
                      BENGALURU_LOCATIONS.find(l => 
                        Math.abs(l.coords[0] - customStart[0]) < 0.001 &&
                        Math.abs(l.coords[1] - customStart[1]) < 0.001
                      )?.id || 'custom'
                    }
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val !== 'custom') {
                        const loc = BENGALURU_LOCATIONS.find(l => l.id === val);
                        if (loc) {
                          setCustomStart(loc.coords);
                          setCustomStartLabel(loc.name);
                        }
                      }
                    }}
                  >
                    {!BENGALURU_LOCATIONS.some(l => 
                      Math.abs(l.coords[0] - customStart[0]) < 0.001 &&
                      Math.abs(l.coords[1] - customStart[1]) < 0.001
                    ) && (
                      <option value="custom">📍 {customStartLabel}</option>
                    )}
                    {BENGALURU_LOCATIONS.map(loc => (
                      <option key={loc.id} value={loc.id}>
                        {loc.name} ({loc.zone})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Swap Origin & Destination Button */}
              <div className="flex items-center justify-between px-2">
                <span className="text-[10px] text-slate-500 font-mono">Real-Road OSRM Snapping</span>
                <button
                  onClick={() => {
                    const tmpCoord = [...customStart];
                    const tmpLabel = customStartLabel;
                    setCustomStart([...customEnd]);
                    setCustomStartLabel(customEndLabel);
                    setCustomEnd(tmpCoord);
                    setCustomEndLabel(tmpLabel);
                  }}
                  className="flex items-center gap-1 text-[10px] font-bold text-indigo-400 hover:text-indigo-300 bg-slate-900 hover:bg-slate-800 px-2 py-1 rounded-lg border border-slate-800 transition"
                  title="Swap Origin and Destination"
                >
                  <ArrowUpDown className="w-3 h-3" />
                  <span>{t.coolRoutes?.swapPoints || 'Swap (A ⇄ B)'}</span>
                </button>
              </div>

              {/* Point B (Destination) */}
              <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-indigo-400">
                    <span className="w-4 h-4 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px]">B</span>
                    <span>{t.coolRoutes?.destB || 'Destination (Point B)'}</span>
                  </div>
                  <button
                    onClick={() => setPickMode(pickMode === 'B' ? null : 'B')}
                    className={`flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-bold border transition ${
                      pickMode === 'B'
                        ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/30 animate-pulse'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
                    }`}
                    title="Click on map to choose destination point"
                  >
                    <Locate className="w-3 h-3" />
                    <span>{pickMode === 'B' ? 'Picking...' : (t.coolRoutes?.pickOnMap || 'Pick on Map')}</span>
                  </button>
                </div>

                <div className="flex items-center gap-1.5">
                  <select
                    className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-2 py-1 text-slate-200 text-xs focus:outline-none focus:border-indigo-500"
                    value={
                      BENGALURU_LOCATIONS.find(l => 
                        Math.abs(l.coords[0] - customEnd[0]) < 0.001 &&
                        Math.abs(l.coords[1] - customEnd[1]) < 0.001
                      )?.id || 'custom'
                    }
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val !== 'custom') {
                        const loc = BENGALURU_LOCATIONS.find(l => l.id === val);
                        if (loc) {
                          setCustomEnd(loc.coords);
                          setCustomEndLabel(loc.name);
                        }
                      }
                    }}
                  >
                    {!BENGALURU_LOCATIONS.some(l => 
                      Math.abs(l.coords[0] - customEnd[0]) < 0.001 &&
                      Math.abs(l.coords[1] - customEnd[1]) < 0.001
                    ) && (
                      <option value="custom">🏁 {customEndLabel}</option>
                    )}
                    {BENGALURU_LOCATIONS.map(loc => (
                      <option key={loc.id} value={loc.id}>
                        {loc.name} ({loc.zone})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Loader or Comparison Results */}
              {isCalculatingRoute ? (
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center gap-2.5 text-emerald-400">
                  <Clock className="w-4 h-4 animate-spin" />
                  <span className="text-xs font-semibold">{t.coolRoutes?.calculating || 'Routing through coolest urban tree canopies...'}</span>
                </div>
              ) : customRouteResult ? (
                <div className="space-y-2 pt-1">
                  {/* Via Banner */}
                  <div className="text-[10px] font-medium text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-500/30 flex items-center justify-between">
                    <span className="truncate">🌿 {t.coolRoutes?.via || 'Via'}: <b>{customRouteResult.via_name}</b></span>
                    <span className="font-mono font-bold shrink-0 text-emerald-200">-${Math.abs(customRouteResult.cool_route.temp_savings_c)}°C {t.coolRoutes?.cooler || 'Relief'}</span>
                  </div>

                  {/* Direct vs Cool Comparison Cards */}
                  <div className="grid grid-cols-2 gap-2 text-center">
                    {/* Direct Asphalt */}
                    <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-500/30 space-y-1">
                      <div className="text-[10px] font-bold text-red-300 uppercase">
                        {t.coolRoutes?.directHighway || '🔴 Direct Asphalt'}
                      </div>
                      <div className="text-sm font-extrabold text-red-400 font-mono">
                        {customRouteResult.direct_route.surface_temp_c}°C
                      </div>
                      <div className="text-[9px] text-slate-400">
                        {customRouteResult.direct_route.distance_km} km • {customRouteResult.direct_route.duration_mins} min
                      </div>
                      <div className="text-[9px] text-red-300/80 font-medium">
                        WBGT: {customRouteResult.direct_route.wbgt_c}°C • Shade: {customRouteResult.direct_route.canopy_shade_pct}%
                      </div>
                    </div>

                    {/* Recommended Cool */}
                    <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 space-y-1">
                      <div className="text-[10px] font-bold text-emerald-300 uppercase">
                        {t.coolRoutes?.recommendedCool || '🟢 Cool Respite'}
                      </div>
                      <div className="text-sm font-extrabold text-emerald-400 font-mono">
                        {customRouteResult.cool_route.surface_temp_c}°C <span className="text-[10px]">(-${Math.abs(customRouteResult.cool_route.temp_savings_c)}°C)</span>
                      </div>
                      <div className="text-[9px] text-slate-300">
                        {customRouteResult.cool_route.distance_km} km • {customRouteResult.cool_route.duration_mins} min
                      </div>
                      <div className="text-[9px] text-emerald-300 font-medium">
                        Shade: {customRouteResult.cool_route.canopy_shade_pct}% • {customRouteResult.cool_route.water_stops_count} {t.coolRoutes?.waterStops || 'Water Kiosks'}
                      </div>
                    </div>
                  </div>

                  {/* Summary Bar */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-800">
                    <span>Detour: +{(customRouteResult.cool_route.distance_km - customRouteResult.direct_route.distance_km).toFixed(1)} km</span>
                    <span className="text-emerald-400 font-bold">WBGT -{(customRouteResult.direct_route.wbgt_c - customRouteResult.cool_route.wbgt_c).toFixed(1)}°C</span>
                    <span className="text-sky-400">{customRouteResult.cool_route.water_stops_count} Free Kiosks</span>
                  </div>

                  {/* Draggable hint */}
                  <div className="text-[9.5px] text-slate-400 flex items-center gap-1.5 px-1">
                    <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>{t.coolRoutes?.dragHint || 'Tip: Drag markers [A] and [B] on the map to recalculate in real-time!'}</span>
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="space-y-2.5">
              {/* Corridor Selection Tabs */}
              <div className="grid grid-cols-2 gap-1.5">
                {driverCorridors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveCorridorId(c.id)}
                    className={`p-1.5 rounded-lg text-[10px] font-bold transition text-left border ${
                      activeCorridorId === c.id
                        ? 'bg-emerald-600 text-white border-emerald-400 shadow-md shadow-emerald-600/30'
                        : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    <div className="truncate font-semibold">{c.title}</div>
                    <div className="text-[9px] text-emerald-300 opacity-90 font-mono">-${Math.abs(c.cool_route.temp_savings_c)}°C Cooler</div>
                  </button>
                ))}
              </div>

              {/* Direct vs Cool Route Stats Grid */}
              {(() => {
                const activeCorridor = driverCorridors.find(c => c.id === activeCorridorId) || driverCorridors[0];
                return (
                  <div className="space-y-2.5">
                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-500/30 space-y-1">
                        <div className="text-[10px] font-bold text-red-300 uppercase">🔴 Direct Asphalt Route</div>
                        <div className="text-sm font-extrabold text-red-400 font-mono">{activeCorridor.direct_route.surface_temp_c}°C</div>
                        <div className="text-[9px] text-slate-400">WBGT: {activeCorridor.direct_route.wbgt_c}°C • 0 Water</div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 space-y-1">
                        <div className="text-[10px] font-bold text-emerald-300 uppercase">🟢 Recommended Cool Route</div>
                        <div className="text-sm font-extrabold text-emerald-400 font-mono">
                          {activeCorridor.cool_route.surface_temp_c}°C <span className="text-[10px]">(-${Math.abs(activeCorridor.cool_route.temp_savings_c)}°C)</span>
                        </div>
                        <div className="text-[9px] text-slate-300">
                          {activeCorridor.cool_route.canopy_shade_pct}% Tree Shade • {activeCorridor.cool_route.water_stops_count} Free Water Posts
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1.5 rounded-lg border border-slate-800">
                      <span>Drive: +{activeCorridor.cool_route.duration_mins - activeCorridor.direct_route.duration_mins} mins</span>
                      <span className="text-emerald-400 font-bold">✓ Avoids Asphalt Solar Trap</span>
                      <span className="text-sky-400">{activeCorridor.cool_route.water_stops_count} Hydration Stops</span>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      )}

      {/* Bottom Floating Legend (Neat, horizontal, non-intrusive) */}
      {!showCoolRoutes && (
        <div className="absolute bottom-3 left-3 z-20 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 shadow-xl text-[10px] text-slate-300 max-w-[calc(100%-80px)] flex flex-wrap items-center gap-2">
          <div className="font-bold text-slate-200 flex items-center gap-1 shrink-0">
            <Info className="w-3 h-3 text-slate-400" />
            <span className="hidden sm:inline">Risk:</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_6px_#dc2626]" />
              <span className="font-bold text-red-400">&gt;34°C</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-orange-300">32–34°C</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-yellow-500" />
              <span className="text-yellow-300">28–32°C</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span className="text-emerald-300">&lt;28°C</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_6px_#0284c7]" />
              <span className="text-sky-300">&lt;24°C</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
