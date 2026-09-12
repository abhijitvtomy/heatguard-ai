import React from 'react';
import {
  Flame,
  Thermometer,
  Activity,
  AlertTriangle,
  Clock,
  Droplet,
  Users,
  Building,
  HeartPulse,
  FileText
} from 'lucide-react';
import { translations } from '../i18n/translations';

export default function WardDossier({ ward, language, forecast5Days, onOpenCircular }) {
  const t = translations[language] || translations.en;

  if (!ward) {
    return (
      <div className="h-full flex items-center justify-center p-8 bg-slate-900/60 rounded-2xl border border-slate-800 text-center">
        <div>
          <Building className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <p className="text-sm font-semibold text-slate-400">{t.mapControls.clickWard}</p>
        </div>
      </div>
    );
  }

  const wardName =
    language === 'kn' ? (ward.name_kn || ward.name) :
    language === 'hi' ? (ward.name_hi || ward.name) :
    ward.name;

  const micro = ward.microclimate || {};
  const health = ward.health_risk || {};
  const labor = ward.work_rest_safety || {};
  const xai = health.xai_attribution || {};
  const ci = health.confidence_interval_90 || {};
  const tier = ward.effective_alert_tier || 'GREEN';

  // Labor advisory localized
  const laborAdvisory =
    language === 'kn' ? (labor.advisory_kn || labor.advisory_en) :
    language === 'hi' ? (labor.advisory_hi || labor.advisory_en) :
    labor.advisory_en;

  return (
    <div className="space-y-4">
      
      {/* Ward Header Banner */}
      <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              {ward.ward_id}
            </span>
            <h2 className="text-lg font-extrabold text-white">{wardName}</h2>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Zone: <span className="text-slate-300 font-semibold">{ward.zone}</span> • Population: <span className="text-slate-300 font-semibold">{(ward.population || 0).toLocaleString()}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className={`text-xs font-extrabold font-mono px-3 py-1.5 rounded-xl border uppercase tracking-wider ${
            tier === 'RED' ? 'bg-red-600/30 text-red-200 border-red-500/60 shadow-[0_0_15px_#dc2626]' :
            tier === 'ORANGE' ? 'bg-orange-600/30 text-orange-200 border-orange-500/60' :
            tier === 'YELLOW' ? 'bg-yellow-600/30 text-yellow-200 border-yellow-500/60' :
            tier === 'BLUE' ? 'bg-sky-600/30 text-sky-200 border-sky-500/60' :
            'bg-emerald-600/30 text-emerald-200 border-emerald-500/60'
          }`}>
            ● {tier} ALERT
          </span>

          <button
            onClick={onOpenCircular}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-lg shadow-red-600/30 transition"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>PDF Circular</span>
          </button>
        </div>
      </div>

      {/* 5 Biometeorological Gauges */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col justify-between">
          <div className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
            <Thermometer className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="whitespace-nowrap font-medium">Air Temperature</span>
          </div>
          <div className="text-xl font-extrabold text-amber-300 mt-1 font-mono">
            {micro.temperature_c != null ? Number(micro.temperature_c).toFixed(1) : '--'}°C
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5 whitespace-nowrap">Dry-Bulb Ambient</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col justify-between">
          <div className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-red-400 shrink-0" />
            <span className="whitespace-nowrap font-medium">WBGT Stress</span>
          </div>
          <div className="text-xl font-extrabold text-red-400 mt-1 font-mono">
            {micro.wbgt_c != null ? Number(micro.wbgt_c).toFixed(1) : '--'}°C
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5 whitespace-nowrap">ISO 7243 Outdoor</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col justify-between">
          <div className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-orange-400 shrink-0" />
            <span className="whitespace-nowrap font-medium">Heat Index</span>
          </div>
          <div className="text-xl font-extrabold text-orange-400 mt-1 font-mono">
            {micro.heat_index_c != null ? Number(micro.heat_index_c).toFixed(1) : '--'}°C
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5 whitespace-nowrap">NOAA Feels-Like</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex flex-col justify-between">
          <div className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5">
            <Droplet className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="whitespace-nowrap font-medium">Humidity</span>
          </div>
          <div className="text-xl font-extrabold text-sky-300 mt-1 font-mono">
            {micro.relative_humidity_pct != null ? Math.round(micro.relative_humidity_pct) : '--'}%
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5 whitespace-nowrap">Relative Moisture</div>
        </div>

        {/* 5. HTSI Index Widget */}
        {(() => {
          const score = micro.htsi_score != null ? Number(micro.htsi_score) : null;
          let tier = 'SAFE';
          let badgeColor = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
          let textColor = 'text-emerald-300';
          let iconColor = 'text-emerald-400';
          let barColor = 'bg-emerald-500';

          if (score != null) {
            if (score >= 80) {
              tier = 'CRITICAL';
              badgeColor = 'text-red-400 bg-red-500/10 border-red-500/30';
              textColor = 'text-red-400';
              iconColor = 'text-red-400';
              barColor = 'bg-red-500';
            } else if (score >= 60) {
              tier = 'HIGH';
              badgeColor = 'text-orange-400 bg-orange-500/10 border-orange-500/30';
              textColor = 'text-orange-400';
              iconColor = 'text-orange-400';
              barColor = 'bg-orange-500';
            } else if (score >= 40) {
              tier = 'MODERATE';
              badgeColor = 'text-amber-400 bg-amber-500/10 border-amber-500/30';
              textColor = 'text-amber-300';
              iconColor = 'text-amber-400';
              barColor = 'bg-amber-500';
            }
          }

          return (
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 col-span-2 sm:col-span-1 lg:col-span-1 flex flex-col justify-between">
              <div>
                <div className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5 whitespace-nowrap">
                  <HeartPulse className={`w-3.5 h-3.5 shrink-0 ${iconColor}`} />
                  <span className="font-semibold text-slate-300">HTSI Index</span>
                </div>
                <div className="flex items-baseline gap-1 mt-1 font-mono">
                  <span className={`text-xl font-extrabold ${textColor}`}>
                    {score != null ? Number(score).toFixed(1) : '--'}
                  </span>
                  <span className="text-[10px] text-slate-500 font-semibold">/100</span>
                </div>
              </div>

              <div className="mt-1">
                <div className="w-full bg-slate-800/80 rounded-full h-1 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${barColor}`}
                    style={{ width: `${Math.min(100, Math.max(5, score || 0))}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] mt-1 whitespace-nowrap">
                  <span className="text-slate-500 text-[9px] font-medium">Strain</span>
                  <span className={`text-[7.5px] font-mono font-bold px-1.5 py-0.5 rounded border uppercase tracking-wider leading-none shrink-0 ${badgeColor}`}>
                    {tier}
                  </span>
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Epidemiological Hospital Admission Surge Box */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-red-950/40 border border-slate-800 shadow-xl space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-xs font-bold text-slate-200">
              {t.metrics.hospitalSurge} (Next 72 Hours)
            </span>
          </div>
          <span className="text-xs font-mono font-bold text-red-400">
            +{health.additional_emergency_beds_needed || 0} Beds Needed
          </span>
        </div>

        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-extrabold font-mono text-red-500">
            +{health.expected_surge_pct || 0}%
          </span>
          <span className="text-xs text-slate-400 font-mono">
            90% Conf Interval: [{ci.lower_bound_pct || 0}% – {ci.upper_bound_pct || 0}%]
          </span>
        </div>

        {/* XAI Attribution Breakdown Bar */}
        <div className="space-y-1.5 pt-1">
          <div className="text-[11px] text-slate-400 flex justify-between font-medium">
            <span>Explainable AI (XAI) Attribution Drivers</span>
            <span>WBGT: {xai.direct_thermal_stress_pct || 0}% | Slum/Labor: {xai.vulnerable_demographics_pct || 0}%</span>
          </div>
          <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex">
            <div style={{ width: `${xai.direct_thermal_stress_pct || 40}%` }} className="bg-red-500" title="Direct WBGT Stress" />
            <div style={{ width: `${xai.vulnerable_demographics_pct || 30}%` }} className="bg-orange-500" title="Vulnerable Demographics & Tin Roofs" />
            <div style={{ width: `${xai.lagged_cumulative_dose_pct || 15}%` }} className="bg-amber-500" title="48h Lagged Heat Dose" />
            <div style={{ width: `${xai.nocturnal_heat_entrapment_pct || 15}%` }} className="bg-purple-500" title="Nocturnal Heat Entrapment" />
          </div>
        </div>
      </div>

      {/* NIOH Gig-Worker & Labor Safety Card */}
      <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-2.5">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-sky-400" />
            <span className="text-xs font-bold text-slate-200">{t.labor.title}</span>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
            {labor.status}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center pt-1">
          <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800/80">
            <div className="text-[10px] text-slate-400">{t.labor.workMins}</div>
            <div className="text-base font-extrabold text-emerald-400 font-mono mt-0.5">
              {labor.work_mins}m/hr
            </div>
          </div>
          <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800/80">
            <div className="text-[10px] text-slate-400">{t.labor.restMins}</div>
            <div className="text-base font-extrabold text-amber-400 font-mono mt-0.5">
              {labor.rest_mins}m/hr
            </div>
          </div>
          <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800/80">
            <div className="text-[10px] text-slate-400">{t.labor.waterPerHour}</div>
            <div className="text-base font-extrabold text-sky-400 font-mono mt-0.5">
              {labor.hourly_water_liters} L/hr
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-300 bg-slate-950/60 p-2 rounded-lg border border-slate-800/60 mt-1">
          {laborAdvisory}
        </p>
      </div>

      {/* 5-Day Plain Risk Horizon */}
      {forecast5Days && forecast5Days.length > 0 && (
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-2">
          <div className="text-xs font-bold text-slate-200 mb-2">5-Day Plain Risk Trajectory</div>
          <div className="grid grid-cols-5 gap-1.5 text-center">
            {forecast5Days.map((d, i) => (
              <div key={i} className="p-2 rounded-xl bg-slate-950/80 border border-slate-800/60 flex flex-col items-center">
                <span className="text-[11px] font-bold text-slate-300">{d.day}</span>
                <span className={`text-[10px] font-bold font-mono px-1.5 py-0.5 rounded my-1 ${
                  d.risk_tier === 'RED' ? 'bg-red-600/30 text-red-300' :
                  d.risk_tier === 'ORANGE' ? 'bg-orange-600/30 text-orange-300' :
                  d.risk_tier === 'YELLOW' ? 'bg-yellow-600/30 text-yellow-300' :
                  d.risk_tier === 'BLUE' ? 'bg-sky-600/30 text-sky-300' :
                  'bg-emerald-600/30 text-emerald-300'
                }`}>
                  {d.risk_tier}
                </span>
                <span className="text-[11px] font-mono text-slate-200 font-bold">{d.temp_max}°C</span>
                <span className="text-[10px] font-mono text-red-400">+{d.hospital_spike}%</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
