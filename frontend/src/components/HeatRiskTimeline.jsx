import React, { useState, useEffect } from 'react';
import { Clock, Play, Pause, RotateCcw, Flame, Sun, Moon, CloudRain, AlertTriangle, ShieldCheck } from 'lucide-react';
import { translations } from '../i18n/translations';

export default function HeatRiskTimeline({
  timelineData = [],
  selectedHour = null,
  onSelectHour,
  language = 'en'
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1200); // ms per hour

  const t = translations[language] || translations.en;

  // Find current actual hour index (default to current local hour or 14:00 peak)
  const currentActualHour = new Date().getHours();
  const activeHourIndex = selectedHour !== null ? selectedHour : currentActualHour;

  // Auto-play animation
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        onSelectHour((prev) => {
          const current = prev !== null ? prev : currentActualHour;
          const next = (current + 1) % 24;
          return next;
        });
      }, playbackSpeed);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, playbackSpeed, onSelectHour, currentActualHour]);

  if (!timelineData || timelineData.length === 0) {
    return null;
  }

  const activePoint = timelineData[activeHourIndex] || timelineData[0];

  const getTierColor = (tier) => {
    switch (tier) {
      case 'RED': return 'bg-red-500 text-red-100 border-red-500/80 shadow-[0_0_12px_#ef4444]';
      case 'ORANGE': return 'bg-orange-500 text-orange-100 border-orange-500/80';
      case 'YELLOW': return 'bg-yellow-500 text-yellow-100 border-yellow-500/80';
      case 'BLUE': return 'bg-sky-500 text-sky-100 border-sky-500/80';
      case 'GREEN':
      default: return 'bg-emerald-500 text-emerald-100 border-emerald-500/80';
    }
  };

  const getPhaseIcon = (hour) => {
    if (hour >= 6 && hour <= 17) {
      return <Sun className="w-3.5 h-3.5 text-amber-400" />;
    }
    return <Moon className="w-3.5 h-3.5 text-indigo-400" />;
  };

  return (
    <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-xl space-y-3">
      {/* Header with Title and Simulation Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xs font-bold text-slate-100 uppercase tracking-wide">
                {t.timelineTitle || "24-Hour Diurnal Heat Risk Progression"}
              </h3>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                Hourly Resolution
              </span>
            </div>
            <p className="text-[10px] text-slate-400 mt-0.5 hidden sm:block">
              {t.timelineSubtitle || "Scrub or play through 24h diurnal curve to inspect thermal strain from morning to peak afternoon and night entrapment."}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-md ${
              isPlaying
                ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-amber-600/30'
                : 'bg-red-600 hover:bg-red-500 text-white shadow-red-600/30'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>{t.pauseSimulation || "Pause"}</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{t.playSimulation || "Play Diurnal Simulation"}</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              setIsPlaying(false);
              onSelectHour(currentActualHour);
            }}
            title="Reset to current actual hour"
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Active Hour Snapshot Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-3.5 py-2 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs font-medium">
        <div className="flex items-center gap-2">
          {getPhaseIcon(activePoint.hour)}
          <span className="text-slate-300 font-bold font-mono">
            {activePoint.hour_label}
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-[11px] text-slate-400 font-mono uppercase">
            {activePoint.phase?.replace(/_/g, ' ')}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-1">
            <span className="text-slate-400">Ambient:</span>
            <span className="font-extrabold text-amber-300">{activePoint.temperature_c}°C</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-slate-400">WBGT:</span>
            <span className="font-extrabold text-red-400">{activePoint.wbgt_c}°C</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-slate-400">Solar:</span>
            <span className="font-bold text-yellow-400">{Math.round(activePoint.solar_radiation_w_m2 || 0)} W/m²</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-slate-400">Humidity:</span>
            <span className="font-bold text-sky-400">{Math.round(activePoint.relative_humidity_pct || 0)}%</span>
          </div>

          <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
            getTierColor(activePoint.risk_tier)
          }`}>
            ● {activePoint.risk_tier} RISK
          </span>
        </div>
      </div>

      {/* 24-Hour Scrubbable Timeline Grid */}
      <div className="grid grid-cols-12 sm:grid-cols-24 gap-1 pt-1">
        {timelineData.map((pt, idx) => {
          const isActive = idx === activeHourIndex;
          const isPeak = pt.hour === 14;
          const isNow = pt.hour === currentActualHour;

          let blockColor = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
          if (pt.risk_tier === 'RED') {
            blockColor = 'bg-red-500/25 text-red-300 border-red-500/40';
          } else if (pt.risk_tier === 'ORANGE') {
            blockColor = 'bg-orange-500/25 text-orange-300 border-orange-500/40';
          } else if (pt.risk_tier === 'YELLOW') {
            blockColor = 'bg-yellow-500/25 text-yellow-300 border-yellow-500/40';
          } else if (pt.risk_tier === 'BLUE') {
            blockColor = 'bg-sky-500/25 text-sky-300 border-sky-500/40';
          }

          return (
            <button
              key={idx}
              onClick={() => {
                setIsPlaying(false);
                onSelectHour(idx);
              }}
              className={`relative flex flex-col items-center justify-between py-2 px-0.5 rounded-lg border transition-all duration-200 ${blockColor} ${
                isActive
                  ? 'ring-2 ring-white border-white scale-105 z-10 shadow-lg'
                  : 'hover:brightness-125 opacity-80 hover:opacity-100'
              }`}
            >
              {isNow && (
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" title="Current Hour" />
              )}

              <span className="text-[9px] font-mono font-bold">
                {pt.hour.toString().padStart(2, '0')}
              </span>

              <div
                className={`w-full rounded-sm my-1 transition-all ${
                  pt.risk_tier === 'RED' ? 'bg-red-500' :
                  pt.risk_tier === 'ORANGE' ? 'bg-orange-500' :
                  pt.risk_tier === 'YELLOW' ? 'bg-yellow-500' :
                  pt.risk_tier === 'BLUE' ? 'bg-sky-500' : 'bg-emerald-500'
                }`}
                style={{ height: `${Math.max(4, (pt.temperature_c - 18) * 1.8)}px` }}
              />

              <span className="text-[8px] font-mono font-medium">
                {Math.round(pt.temperature_c)}°
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
