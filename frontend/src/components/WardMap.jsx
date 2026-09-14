import React, { useEffect, useRef, useState, useMemo } from 'react';
import L from 'leaflet';
import { translations } from '../i18n/translations';
import { MapPin, Shield, Droplets, Info, Flame, AlertCircle, Navigation, Compass, ShieldCheck, TreePine, Clock } from 'lucide-react';
import { driverCorridors } from '../data/coolRoutesData';

export default function WardMap({
  wardsGeojson,
  shelters,
  selectedWard,
  setSelectedWard,
  language,
  showShelters,
  setShowShelters,
  showHotspots: propShowHotspots,
  setShowHotspots: propSetShowHotspots
}) {
  const [localShowHotspots, setLocalShowHotspots] = useState(true);
  const showHotspots = propShowHotspots !== undefined ? propShowHotspots : localShowHotspots;
  const setShowHotspots = propSetShowHotspots || setLocalShowHotspots;
  const [showCoolRoutes, setShowCoolRoutes] = useState(false);
  const [activeCorridorId, setActiveCorridorId] = useState(driverCorridors[0]?.id || 'majestic-indiranagar');

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

      L.control.zoom({ position: 'topright' }).addTo(map);

      // 100% Free OpenStreetMap tiles (Zero API Key required)
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      mapInstanceRef.current = map;
    }

    return () => {
      // Cleanup on unmount
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

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
          color: isSelected ? '#ffffff' : '#334155',
          fillOpacity: isSelected ? 0.65 : 0.45,
          dashArray: isSelected ? '' : '3'
        };
      },
      onEachFeature: (feature, featureLayer) => {
        const props = feature.properties || {};
        const wardName =
          language === 'kn' ? (props.name_kn || props.name) :
          language === 'hi' ? (props.name_hi || props.name) :
          props.name;

        // Hover effect
        featureLayer.on({
          mouseover: (e) => {
            const l = e.target;
            l.setStyle({ fillOpacity: 0.8, weight: 3 });
          },
          mouseout: (e) => {
            if (!selectedWard || selectedWard.ward_id !== props.ward_id) {
              layer.resetStyle(e.target);
            }
          },
          click: () => {
            setSelectedWard(props);
          }
        });

        // Popup content
        const wbgt = props.microclimate?.wbgt_c || '--';
        const temp = props.microclimate?.temperature_c || '--';
        const spike = props.health_risk?.expected_surge_pct || 0;
        const tier = props.effective_alert_tier || 'GREEN';
        const vuln = props.vulnerability_score != null ? `${props.vulnerability_score} [${props.vulnerability_tier || 'MED'}]` : '--';

        featureLayer.bindTooltip(`
          <div style="font-family: system-ui; font-size: 11px; padding: 4px;">
            <div style="font-weight: 800; color: #f8fafc; margin-bottom: 2px;">${wardName}</div>
            <div style="color: #94a3b8;">Temp: <b>${temp}°C</b> | WBGT: <b>${wbgt}°C</b></div>
            <div style="color: #fbbf24;">Vulnerability Score: <b>${vuln}</b></div>
            <div style="color: #f87171; font-weight: 700;">Hosp Surge: +${spike}% [${tier}]</div>
          </div>
        `, { sticky: true, className: 'leaflet-dark-tooltip' });
      }
    }).addTo(map);

    geojsonLayerRef.current = layer;

    // Add Floating Ward Temperature Badges across the Map
    const labelsGroup = L.layerGroup();
    wardsGeojson.features.forEach((feature) => {
      const props = feature.properties || {};
      const center = props.center;
      if (!center || center.length !== 2) return;

      const tier = props.effective_alert_tier || props.health_risk?.alert_tier || 'GREEN';
      const temp = props.microclimate?.temperature_c != null ? props.microclimate.temperature_c : '--';
      const isSelected = selectedWard && selectedWard.ward_id === props.ward_id;
      const wardName =
        language === 'kn' ? (props.name_kn || props.name) :
        language === 'hi' ? (props.name_hi || props.name) :
        props.name;
      const shortName = wardName.split('&')[0].trim();

      const badgeIcon = L.divIcon({
        className: 'ward-temp-badge',
        html: `
          <div style="
            background: rgba(15, 23, 42, 0.90);
            backdrop-filter: blur(8px);
            border: ${isSelected ? '2px solid #ffffff' : `1.5px solid ${getColor(tier)}`};
            color: white;
            padding: 3px 8px;
            border-radius: 9999px;
            font-family: system-ui, -apple-system, sans-serif;
            font-size: 10.5px;
            font-weight: 800;
            white-space: nowrap;
            display: flex;
            align-items: center;
            gap: 5px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.6);
            cursor: pointer;
            pointer-events: auto;
            transform: translate(-50%, -50%);
          ">
            <span style="width: 7px; height: 7px; border-radius: 50%; background: ${getColor(tier)}; box-shadow: 0 0 6px ${getColor(tier)}; flex-shrink: 0;"></span>
            <span style="color: #f1f5f9; font-weight: 700;">${shortName}</span>
            <span style="color: #fbbf24; font-weight: 900; font-family: monospace;">${temp}°C</span>
          </div>
        `,
        iconSize: [0, 0],
        iconAnchor: [0, 0]
      });

      const marker = L.marker(center, { icon: badgeIcon, interactive: true });
      marker.on('click', () => {
        setSelectedWard(props);
      });
      labelsGroup.addLayer(marker);
    });

    labelsGroup.addTo(map);
    labelsLayerRef.current = labelsGroup;
  }, [wardsGeojson, selectedWard, language]);

  // Update Cooling Shelters & Water Points Pins
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
      const isCooling = s.type === 'COOLING_SHELTER';
      const color = isCooling ? '#10b981' : '#38bdf8';

      const customIcon = L.divIcon({
        className: 'custom-shelter-marker',
        html: `
          <div style="
            background: ${color};
            width: 26px;
            height: 26px;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 0 10px ${color};
            display: flex;
            align-items: center;
            justify-content: center;
            color: black;
            font-size: 13px;
          ">
            ${isCooling ? '❄️' : '💧'}
          </div>
        `,
        iconSize: [26, 26],
        iconAnchor: [13, 13]
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
            <div style="position: relative; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
              <div style="position: absolute; width: 28px; height: 28px; border-radius: 9999px; background: rgba(239, 68, 68, 0.45); animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
              <div style="position: relative; width: 22px; height: 22px; border-radius: 9999px; background: linear-gradient(135deg, #dc2626, #ea580c); border: 2px solid #fef08a; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 12px #dc2626; font-size: 11px;">🔥</div>
            </div>
          `,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
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

  // Render Driver Cool Corridors & Asphalt Trap Overlay
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (routesLayerRef.current) {
      map.removeLayer(routesLayerRef.current);
      routesLayerRef.current = null;
    }

    if (!showCoolRoutes) return;

    const corridor = driverCorridors.find(c => c.id === activeCorridorId) || driverCorridors[0];
    if (!corridor) return;

    const group = L.layerGroup();

    // 1. Direct Asphalt Route (Red dashed polyline)
    const directLine = L.polyline(corridor.direct_route.coordinates, {
      color: '#ef4444',
      weight: 4,
      dashArray: '8, 8',
      opacity: 0.85
    });
    directLine.bindTooltip(`
      <div style="font-family: system-ui; padding: 4px; font-size: 11px;">
        <b style="color: #ef4444;">🔴 Direct Asphalt Route (Heat Trap)</b><br/>
        Road Temp: <b>${corridor.direct_route.surface_temp_c}°C</b><br/>
        WBGT: <b>${corridor.direct_route.wbgt_c}°C</b> (High Strain)
      </div>
    `, { sticky: true });
    group.addLayer(directLine);

    // 2. Recommended Cool Respite Route (Emerald solid polyline with glow)
    const coolLine = L.polyline(corridor.cool_route.coordinates, {
      color: '#10b981',
      weight: 6,
      opacity: 0.95
    });
    coolLine.bindTooltip(`
      <div style="font-family: system-ui; padding: 4px; font-size: 11px;">
        <b style="color: #10b981;">🟢 Recommended Driver Cool Respite Route</b><br/>
        Road Temp: <b>${corridor.cool_route.surface_temp_c}°C (${corridor.cool_route.temp_savings_c}°C Cooler)</b><br/>
        Canopy Shade: <b>${corridor.cool_route.canopy_shade_pct}%</b> • Water Posts: <b>${corridor.cool_route.water_stops_count}</b>
      </div>
    `, { sticky: true });
    group.addLayer(coolLine);

    // 3. Start and End Waypoint Markers
    const startCoord = corridor.cool_route.coordinates[0];
    const endCoord = corridor.cool_route.coordinates[corridor.cool_route.coordinates.length - 1];

    const startIcon = L.divIcon({
      className: 'route-start-icon',
      html: `<div style="background: #10b981; color: white; font-weight: 800; font-size: 10px; border-radius: 9999px; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 0 8px #10b981;">A</div>`,
      iconSize: [22, 22],
      iconAnchor: [11, 11]
    });
    const endIcon = L.divIcon({
      className: 'route-end-icon',
      html: `<div style="background: #6366f1; color: white; font-weight: 800; font-size: 10px; border-radius: 9999px; width: 22px; height: 22px; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 0 8px #6366f1;">B</div>`,
      iconSize: [22, 22],
      iconAnchor: [11, 11]
    });

    group.addLayer(L.marker(startCoord, { icon: startIcon }));
    group.addLayer(L.marker(endCoord, { icon: endIcon }));

    // 4. Water Waypoints along cool route
    (corridor.cool_route.water_stops || []).forEach(ws => {
      const waterIcon = L.divIcon({
        className: 'route-water-icon',
        html: `<div style="background: #0284c7; color: white; font-size: 12px; border-radius: 9999px; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; border: 2px solid #bae6fd; box-shadow: 0 0 8px #38bdf8;">💧</div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });
      const wm = L.marker([ws.lat, ws.lon], { icon: waterIcon });
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

    // Zoom and pan to corridor bounds
    const bounds = L.latLngBounds(corridor.cool_route.coordinates);
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
  }, [showCoolRoutes, activeCorridorId]);

  return (
    <div className="relative w-full h-[520px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950">
      {/* Map Element */}
      <div ref={mapContainerRef} className="w-full h-full z-10 dark-tiles" />

      {/* Top Floating Controls */}
      <div className="absolute top-3 left-3 z-20 flex flex-wrap items-center gap-2">
        <button
          onClick={() => setShowShelters(!showShelters)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-lg backdrop-blur-md border ${
            showShelters
              ? 'bg-emerald-600/90 text-white border-emerald-400 shadow-emerald-600/30'
              : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:bg-slate-800'
          }`}
        >
          <Droplets className="w-3.5 h-3.5 text-sky-400" />
          <span>{t.mapControls.showShelters}</span>
        </button>

        <button
          onClick={() => setShowHotspots(!showHotspots)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-lg backdrop-blur-md border ${
            showHotspots
              ? 'bg-red-600/90 text-white border-red-400 shadow-red-600/30'
              : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:bg-slate-800'
          }`}
        >
          <Flame className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span>{t.mapControls.showHotspots || "Live Hotspots"}</span>
        </button>

        {/* Driver Cool Routes Mode Toggle */}
        <button
          onClick={() => setShowCoolRoutes(!showCoolRoutes)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-lg backdrop-blur-md border ${
            showCoolRoutes
              ? 'bg-emerald-600/90 text-white border-emerald-400 shadow-emerald-600/30 ring-2 ring-emerald-400/50'
              : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:bg-slate-800'
          }`}
        >
          <Navigation className="w-3.5 h-3.5 text-emerald-400" />
          <span>🚗 Driver Cool Routes</span>
        </button>
      </div>

      {/* Floating Driver Cool Route Navigation Comparison Drawer */}
      {showCoolRoutes && (
        <div className="absolute bottom-4 left-3 right-3 sm:right-auto sm:max-w-md z-30 bg-slate-950/95 backdrop-blur-md p-4 rounded-2xl border border-emerald-500/50 shadow-2xl text-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <Navigation className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-white uppercase text-[11px] tracking-wide">
                Driver Heat Respite Navigation
              </span>
            </div>
            <select
              value={activeCorridorId}
              onChange={(e) => setActiveCorridorId(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-white text-[11px] font-bold rounded-lg px-2 py-1 focus:ring-1 focus:ring-emerald-500 cursor-pointer"
            >
              {driverCorridors.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title.split('→')[0].trim()} → {c.title.split('→')[1]?.trim()}
                </option>
              ))}
            </select>
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
                      {activeCorridor.cool_route.surface_temp_c}°C <span className="text-[10px]">({activeCorridor.cool_route.temp_savings_c}°C)</span>
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

      {/* Top Right Floating Hotspots Leaderboard */}
      {showHotspots && topHotspots.length > 0 && (
        <div className="absolute top-3 right-3 z-20 bg-slate-950/90 backdrop-blur-md p-2.5 rounded-xl border border-red-900/50 shadow-xl text-xs hidden sm:block max-w-[250px]">
          <div className="flex items-center gap-1.5 font-bold text-red-400 mb-1.5 pb-1 border-b border-slate-800">
            <Flame className="w-3.5 h-3.5 text-red-500 animate-pulse" />
            <span>{t.topHotspots || "Top Thermal Hotspots"}</span>
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

      {/* Bottom Floating Legend */}
      <div className="absolute bottom-3 left-3 z-20 bg-slate-950/90 backdrop-blur-md p-2.5 rounded-xl border border-slate-800 shadow-xl text-[11px] text-slate-300 max-w-[calc(100%-24px)]">
        <div className="font-bold mb-1.5 text-slate-200 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>{t.mapControls.legend}</span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">(WBGT / Microclimate)</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_6px_#dc2626]" />
            <span className="font-bold text-red-400">Critical (&gt;34°C)</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
            <span className="text-orange-300">High (32–34°C)</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <span className="text-yellow-300">Moderate (28–32°C)</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            <span className="text-emerald-300">Safe (&lt;28°C)</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 shadow-[0_0_6px_#0284c7]" />
            <span className="text-sky-300">Rain Relief (&lt;24°C)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
