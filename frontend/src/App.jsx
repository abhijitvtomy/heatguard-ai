import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import EmergencyBanner from './components/EmergencyBanner';
import WardMap from './components/WardMap';
import WardDossier from './components/WardDossier';
import ActionPlanModal from './components/ActionPlanModal';
import AccuracyLedger from './components/AccuracyLedger';
import CitizenLeague from './components/CitizenLeague';
import HeatbotModal from './components/HeatbotModal';
import JudgeAccessModal from './components/JudgeAccessModal';

import { getAmbientTheme } from './utils/ambientTheme';
import { translations } from './i18n/translations';
import { Map, FileCheck, ShieldCheck, Trophy, Bot } from 'lucide-react';
import { API_BASE } from './config';
import { fallbackWardsData, fallbackWeatherData, fallbackSheltersData } from './data/fallbackData';

export default function App() {
  const [scenario, setScenario] = useState('LIVE');
  const [language, setLanguage] = useState('en');
  const [activeTab, setActiveTab] = useState('map'); // map, actionPlan, audit, league
  const [selectedWard, setSelectedWard] = useState(fallbackWardsData?.wards?.[0] || null);
  const [showShelters, setShowShelters] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isJudgeModalOpen, setIsJudgeModalOpen] = useState(false);

  // Live Data States (Instant ground-truth fallback for zero-latency rendering)
  const [weatherData, setWeatherData] = useState(fallbackWeatherData);
  const [wardsGeojson, setWardsGeojson] = useState(fallbackWardsData?.geojson || null);
  const [shelters, setShelters] = useState(fallbackSheltersData || []);
  const [auditData, setAuditData] = useState(null);
  const [challengesData, setChallengesData] = useState(null);
  const [leaderboard, setLeaderboard] = useState([]);
  const [showdownData, setShowdownData] = useState([]);
  const [flashHeadline, setFlashHeadline] = useState(null);
  const [loading, setLoading] = useState(false);

  const t = translations[language] || translations.en;

  // Fetch all endpoints
  const loadData = async (targetScenario) => {
    setLoading(true);
    const scen = targetScenario || scenario;

    try {
      // 1. Fetch Wards Evaluation
      const wardsRes = await fetch(`${API_BASE}/api/wards?scenario=${scen}`);
      if (wardsRes.ok) {
        const wData = await wardsRes.json();
        setWardsGeojson(wData.geojson);
        
        // Select first ward by default if none selected or scenario changed
        if (!selectedWard || !wData.wards.some(w => w.ward_id === selectedWard.ward_id)) {
          setSelectedWard(wData.wards[0]);
        } else {
          const updated = wData.wards.find(w => w.ward_id === selectedWard.ward_id);
          if (updated) setSelectedWard(updated);
        }
      }

      // 2. Fetch Weather
      const weatherRes = await fetch(`${API_BASE}/api/weather?scenario=${scen}`);
      if (weatherRes.ok) {
        setWeatherData(await weatherRes.json());
      }

      // 3. Fetch Shelters
      const sheltersRes = await fetch(`${API_BASE}/api/shelters`);
      if (sheltersRes.ok) {
        setShelters(await sheltersRes.json());
      }

      // 4. Fetch Audit
      const auditRes = await fetch(`${API_BASE}/api/audit`);
      if (auditRes.ok) {
        setAuditData(await auditRes.json());
      }

      // 5. Fetch Broadcast
      const broadcastRes = await fetch(`${API_BASE}/api/broadcast`);
      if (broadcastRes.ok) {
        setFlashHeadline(await broadcastRes.json());
      }

      // 6. Fetch Gamification
      const chalRes = await fetch(`${API_BASE}/api/gamification/challenges`);
      if (chalRes.ok) {
        setChallengesData(await chalRes.json());
      }

      const lboardRes = await fetch(`${API_BASE}/api/gamification/leaderboard`);
      if (lboardRes.ok) {
        setLeaderboard(await lboardRes.json());
      }

      const showdownRes = await fetch(`${API_BASE}/api/gamification/showdown`);
      if (showdownRes.ok) {
        setShowdownData(await showdownRes.json());
      }

    } catch (e) {
      console.warn("Backend loading failed, using robust fallback state:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(scenario);

    // Auto-sync real-time weather telemetry every 60 seconds when in LIVE mode
    // (Ensures fresh data and keeps Render cloud backend warm during presentation)
    let syncTimer = null;
    if (scenario === 'LIVE') {
      syncTimer = setInterval(() => {
        loadData('LIVE');
      }, 60000);
    }

    return () => {
      if (syncTimer) clearInterval(syncTimer);
    };
  }, [scenario]);

  // Compute City Status & Ambient Atmospheric UI Theme
  const cityTier =
    weatherData?.precipitation_mm >= 3.0 ? 'BLUE' :
    selectedWard?.effective_alert_tier || 'GREEN';

  const isRaining = (weatherData?.precipitation_mm || 0) >= 3.0 || scenario === 'MONSOON_RAIN';
  const ambientTheme = getAmbientTheme(cityTier, isRaining);

  const handleUpdateHeadline = async (newHeadline) => {
    try {
      const res = await fetch(`${API_BASE}/api/broadcast`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newHeadline)
      });
      if (res.ok) {
        const data = await res.json();
        setFlashHeadline(data.updated_headline);
      }
    } catch (e) {
      setFlashHeadline({ ...newHeadline, is_active: true, timestamp: "Just now" });
    }
  };

  const handleSubmitPrediction = async (chalId, value) => {
    try {
      await fetch(`${API_BASE}/api/gamification/predict`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: 'demo_user',
          challenge_id: chalId,
          prediction_value: value
        })
      });
    } catch (e) {
      console.log("Recorded locally");
    }
  };

  return (
    <div className={`min-h-screen ${ambientTheme.bgGradient} transition-colors duration-700 relative text-slate-100 flex flex-col`}>
      
      {/* Dynamic Radial Ambient Aura */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-700"
        style={{ background: ambientTheme.radialAura }}
      />

      {/* Rain Effect Particles Overlay (If Raining) */}
      {ambientTheme.isRain && (
        <div className="pointer-events-none fixed inset-0 z-0 opacity-20 rain-container" />
      )}

      {/* Top Navbar */}
      <Navbar
        scenario={scenario}
        setScenario={setScenario}
        language={language}
        setLanguage={setLanguage}
        cityStatus={cityTier}
        ambientTheme={ambientTheme}
        onRefresh={() => loadData(scenario)}
        loading={loading}
        onOpenJudgeModal={() => setIsJudgeModalOpen(true)}
      />

      {/* Emergency Flash Bulletin Ticker */}
      <EmergencyBanner
        headline={flashHeadline}
        language={language}
        onUpdateHeadline={handleUpdateHeadline}
      />

      {/* Main Container */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-800/80 text-xs font-bold">
          <button
            onClick={() => setActiveTab('map')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition ${
              activeTab === 'map'
                ? 'bg-slate-800 text-white border border-slate-700 shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
            }`}
          >
            <Map className="w-4 h-4 text-red-400" />
            <span>{t.tabs.map}</span>
          </button>

          <button
            onClick={() => setActiveTab('actionPlan')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition ${
              activeTab === 'actionPlan'
                ? 'bg-slate-800 text-white border border-slate-700 shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
            }`}
          >
            <FileCheck className="w-4 h-4 text-amber-400" />
            <span>{t.tabs.actionPlan}</span>
          </button>

          <button
            onClick={() => setActiveTab('audit')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition ${
              activeTab === 'audit'
                ? 'bg-slate-800 text-white border border-slate-700 shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>{t.tabs.audit}</span>
          </button>

          <button
            onClick={() => setActiveTab('league')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition ${
              activeTab === 'league'
                ? 'bg-slate-800 text-white border border-slate-700 shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
            }`}
          >
            <Trophy className="w-4 h-4 text-purple-400" />
            <span>{t.tabs.league}</span>
          </button>
        </div>

        {/* Tab 1: GIS Map & Ward Dossier */}
        {activeTab === 'map' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7">
              <WardMap
                wardsGeojson={wardsGeojson}
                shelters={shelters}
                selectedWard={selectedWard}
                setSelectedWard={setSelectedWard}
                language={language}
                showShelters={showShelters}
                setShowShelters={setShowShelters}
              />
            </div>

            <div className="lg:col-span-5">
              <WardDossier
                ward={selectedWard}
                language={language}
                forecast5Days={weatherData?.forecast_5_days}
                onOpenCircular={() => setActiveTab('actionPlan')}
              />
            </div>
          </div>
        )}

        {/* Tab 2: Municipal Action Plan & Circular */}
        {activeTab === 'actionPlan' && (
          <ActionPlanModal
            scenario={scenario}
            language={language}
            onClose={() => setActiveTab('map')}
          />
        )}

        {/* Tab 3: Model Transparency & Accuracy Ledger */}
        {activeTab === 'audit' && (
          <AccuracyLedger auditData={auditData} />
        )}

        {/* Tab 4: Citizen Climate Prediction League */}
        {activeTab === 'league' && (
          <CitizenLeague
            challengesData={challengesData}
            leaderboard={leaderboard}
            showdownData={showdownData}
            language={language}
            onSubmitPrediction={handleSubmitPrediction}
          />
        )}

      </main>

      {/* Floating AI Heatbot Trigger */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-2xl shadow-red-600/40 border border-red-400/40 flex items-center gap-2 font-bold text-xs transition transform hover:scale-105"
      >
        <Bot className="w-5 h-5" />
        <span className="hidden sm:inline">AI Heatbot Copilot</span>
      </button>

      {/* Floating AI Heatbot Drawer */}
      <HeatbotModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        language={language}
        selectedWard={selectedWard}
      />

      {/* Judge & Evaluator Live Access Modal */}
      <JudgeAccessModal
        isOpen={isJudgeModalOpen}
        onClose={() => setIsJudgeModalOpen(false)}
      />

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-900 bg-slate-950/80 py-4 text-center text-xs text-slate-500 font-mono">
        HEATGUARD AI • Developed for Smart India Hackathon (SIH) • Bruhat Bengaluru Mahanagara Palike (BBMP)
      </footer>

    </div>
  );
}
