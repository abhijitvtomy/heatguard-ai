import React from 'react';
import { Flame, CloudRain, ShieldAlert, Sparkles, Globe, RefreshCw, QrCode } from 'lucide-react';
import { translations } from '../i18n/translations';

export default function Navbar({
  scenario,
  setScenario,
  language,
  setLanguage,
  cityStatus,
  ambientTheme,
  onRefresh,
  loading,
  onOpenJudgeModal,
  onOpenPanicModal
}) {
  const t = translations[language] || translations.en;

  const scenarios = [
    { id: 'LIVE', label: t.liveWeather, icon: RefreshCw, color: 'text-emerald-400' },
    { id: 'HEATWAVE_EXTREME', label: t.simHeatwave, icon: Flame, color: 'text-red-400' },
    { id: 'MONSOON_RAIN', label: t.simRain, icon: CloudRain, color: 'text-sky-400' },
    { id: 'MODERATE_ADVISORY', label: t.simAdvisory, icon: ShieldAlert, color: 'text-amber-400' },
    { id: 'NORMAL_SAFE', label: t.simNormal, icon: Sparkles, color: 'text-green-400' }
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80 shadow-2xl">
      <div className="max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Logo & Platform Name */}
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl border ${ambientTheme.borderColor} ${ambientTheme.badgeBg} shadow-lg transition-all duration-500`}>
            {ambientTheme.isRain ? (
              <CloudRain className="w-6 h-6 text-sky-400 animate-bounce" />
            ) : (
              <Flame className="w-6 h-6 text-red-500 animate-pulse" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                {t.appTitle}
              </span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                ENTERPRISE v2.0
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
              {t.subTitle}
            </p>
          </div>
        </div>

        {/* City Threat Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-inner">
          <span className="relative flex h-3 w-3">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              ambientTheme.tier === 'RED' ? 'bg-red-500' :
              ambientTheme.tier === 'BLUE' ? 'bg-sky-500' :
              ambientTheme.tier === 'YELLOW' ? 'bg-amber-500' : 'bg-emerald-500'
            }`} />
            <span className={`relative inline-flex rounded-full h-3 w-3 ${
              ambientTheme.tier === 'RED' ? 'bg-red-600' :
              ambientTheme.tier === 'BLUE' ? 'bg-sky-600' :
              ambientTheme.tier === 'YELLOW' ? 'bg-amber-600' : 'bg-emerald-600'
            }`} />
          </span>
          <span className="text-xs font-semibold text-slate-300">
            {t.liveCityStatus}:
          </span>
          <span className={`text-xs font-extrabold uppercase font-mono ${ambientTheme.textColor}`}>
            {ambientTheme.label}
          </span>
        </div>

        {/* Right Controls: Scenario Switcher & Language */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Hackathon Scenario Switcher */}
          <div className="flex items-center">
            <select
              value={scenario}
              onChange={(e) => setScenario(e.target.value)}
              className="bg-slate-900 text-xs font-semibold text-slate-200 border border-slate-700/80 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm cursor-pointer"
            >
              {scenarios.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* Refresh Button */}
          <button
            onClick={onRefresh}
            disabled={loading}
            title="Refresh Live Telemetry"
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-red-400' : ''}`} />
          </button>

          {/* Emergency SOS Panic Button */}
          <button
            onClick={onOpenPanicModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-xs shadow-lg shadow-red-600/40 transition transform active:scale-95 border border-red-400/40 animate-pulse"
            title="Emergency Heat Stroke SOS & 108 Ambulance Dispatch"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-ping mr-0.5" />
            <span>🚨 SOS PANIC</span>
          </button>

          {/* Judge Live Link & QR Code Button */}
          <button
            onClick={onOpenJudgeModal}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs shadow-md shadow-indigo-600/30 transition transform active:scale-95 border border-indigo-400/30"
            title="Share live link and QR code with judges"
          >
            <QrCode className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Judge Access</span>
          </button>

          {/* Language Switcher */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded transition ${language === 'en' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('kn')}
              className={`px-2 py-1 rounded transition ${language === 'kn' ? 'bg-red-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
            >
              ಕನ್ನಡ
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-2 py-1 rounded transition ${language === 'hi' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
            >
              हिन्दी
            </button>
          </div>

        </div>

      </div>
    </header>
  );
}
