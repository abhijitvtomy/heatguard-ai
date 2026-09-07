import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { translations } from '../i18n/translations';
import { MapPin, Shield, Droplets, Info } from 'lucide-react';

export default function WardMap({
  wardsGeojson,
  shelters,
  selectedWard,
  setSelectedWard,
  language,
  showShelters,
  setShowShelters
}) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const geojsonLayerRef = useRef(null);
  const sheltersLayerRef = useRef(null);

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

        featureLayer.bindTooltip(`
          <div style="font-family: system-ui; font-size: 11px; padding: 4px;">
            <div style="font-weight: 800; color: #f8fafc; margin-bottom: 2px;">${wardName}</div>
            <div style="color: #94a3b8;">Temp: <b>${temp}°C</b> | WBGT: <b>${wbgt}°C</b></div>
            <div style="color: #f87171; font-weight: 700;">Hosp Surge: +${spike}% [${tier}]</div>
          </div>
        `, { sticky: true, className: 'leaflet-dark-tooltip' });
      }
    }).addTo(map);

    geojsonLayerRef.current = layer;
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
          <div style="margin-bottom: 4px;"><b>Type:</b> ${isCooling ? 'BBMP Indira Canteen (Cooling)' : 'BWSSB Free Water Post'}</div>
          <div><b>Hours:</b> ${s.operating_hours}</div>
          <div style="margin-top: 6px; font-weight: bold; color: #16a34a;">● Status: ${s.status}</div>
        </div>
      `);
      group.addLayer(marker);
    });

    group.addTo(map);
    sheltersLayerRef.current = group;
  }, [shelters, showShelters, language]);

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
      </div>

      {/* Bottom Floating Legend */}
      <div className="absolute bottom-3 left-3 z-20 bg-slate-950/85 backdrop-blur-md p-2.5 rounded-xl border border-slate-800 shadow-xl text-[11px] text-slate-300">
        <div className="font-bold mb-1.5 text-slate-200 flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-slate-400" />
          <span>{t.mapControls.legend}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_6px_#dc2626]" />
            <span>{"Critical (>34°C)"}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
            <span>High</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <span>Moderate</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
            <span>Safe</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 shadow-[0_0_6px_#0284c7]" />
            <span>Rain Relief</span>
          </div>
        </div>
      </div>
    </div>
  );
}
