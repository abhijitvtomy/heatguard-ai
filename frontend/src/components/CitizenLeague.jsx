import React, { useState } from 'react';
import { Trophy, Award, Zap, Flame, Users, CheckCircle2, ChevronRight, HelpCircle, Edit3, Check, X, User } from 'lucide-react';
import { API_BASE } from '../config';

export default function CitizenLeague({
  challengesData,
  leaderboard,
  showdownData,
  language,
  onSubmitPrediction
}) {
  const [activePredictions, setActivePredictions] = useState({});
  const [submittedCards, setSubmittedCards] = useState({});

  // User Profile Customization (Persisted to localStorage)
  const initialName = localStorage.getItem('heatguard_user_name') || challengesData?.user_profile?.name || "Arjun Rao";
  const initialWard = localStorage.getItem('heatguard_user_ward') || challengesData?.user_profile?.ward || "Ward 151 (Koramangala)";

  const [customName, setCustomName] = useState(initialName);
  const [customWard, setCustomWard] = useState(initialWard);
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(initialName);
  const [tempWard, setTempWard] = useState(initialWard);

  const challenges = challengesData?.challenges || [];
  const profile = challengesData?.user_profile || {
    name: customName,
    xp: 1420,
    level: 4,
    level_title: "Heatwave Detective",
    accuracy_pct: 83.3,
    badges: []
  };

  const getInitials = (name) => {
    if (!name) return "AR";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const handleStartEdit = () => {
    setTempName(customName);
    setTempWard(customWard);
    setIsEditing(true);
  };

  const handleSaveProfile = async (e) => {
    if (e) e.preventDefault();
    const cleanName = tempName.trim() || customName;
    const cleanWard = tempWard.trim() || customWard;

    setCustomName(cleanName);
    setCustomWard(cleanWard);
    localStorage.setItem('heatguard_user_name', cleanName);
    localStorage.setItem('heatguard_user_ward', cleanWard);
    setIsEditing(false);

    try {
      await fetch(`${API_BASE}/api/gamification/profile`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: cleanName, ward: cleanWard })
      });
    } catch (err) {
      console.log('Saved custom forecaster profile locally');
    }
  };

  const handleSelectOption = (chalId, option) => {
    setActivePredictions(prev => ({ ...prev, [chalId]: option }));
  };

  const handlePredict = (chalId) => {
    const val = activePredictions[chalId] || "YES";
    onSubmitPrediction(chalId, val);
    setSubmittedCards(prev => ({ ...prev, [chalId]: true }));
  };

  const wardOptions = [
    "Ward 151 (Koramangala)",
    "Ward 41 (Peenya Industrial)",
    "Ward 138 (Shivajinagar & Majestic)",
    "Ward 85 (Whitefield IT Corridor)",
    "Ward 111 (Malleshwaram)",
    "Ward 174 (HSR & Bellandur)",
    "Ward 198 (Electronic City)",
    "Ward 10 (Yelahanka Satellite Town)",
    "Ward 153 (Jayanagar 4th Block)",
    "Ward 139 (K.R. Market & Chamarajpet)",
    "Ward 82 (Ulsoor Lake & MG Road)",
    "Ward 21 (Hebbal Flyover & Outer Ring)",
    "Ward 128 (Rajajinagar Industrial & Metro)",
    "Ward 165 (Banashankari & Padmanabhanagar)",
    "Ward 36 (Yeshwanthpur APMC Grain Market)",
    "Ward 89 (Marathahalli Outer Ring Road)",
    "Ward 176 (BTM Layout & Madiwala Lake)",
    "Ward 175 (Bommanahalli Garment Cluster)"
  ];

  return (
    <div className="space-y-6">

      {/* User Profile & XP Header Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-slate-900 border border-purple-500/30 shadow-2xl flex flex-col gap-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-xl font-extrabold text-white shadow-lg shadow-purple-500/30 tracking-wider">
              {getInitials(customName)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-extrabold text-white">{customName}</h2>
                <button
                  onClick={handleStartEdit}
                  className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/40 transition"
                  title="Change your forecaster display name and ward"
                >
                  <Edit3 className="w-3 h-3" />
                  <span>Edit Name</span>
                </button>
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                  Lvl {profile.level} • {profile.level_title}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Bengaluru Ward: <span className="text-purple-300 font-semibold">{customWard}</span> • Accuracy: <span className="text-emerald-400 font-bold">{profile.accuracy_pct}%</span>
              </p>
            </div>
          </div>

          {/* XP Progress Bar */}
          <div className="w-full md:w-72 space-y-1.5">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-purple-300 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>{profile.xp} XP Earned</span>
              </span>
              <span className="text-slate-400">Next Level: 1600 XP</span>
            </div>
            <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                style={{ width: `${Math.min(100, (profile.xp % 400) / 4)}%` }}
                className="h-full bg-gradient-to-r from-purple-500 to-amber-400 rounded-full"
              />
            </div>
          </div>

          {/* User Badges */}
          <div className="flex items-center gap-2">
            {profile.badges?.map((b, i) => (
              <div
                key={i}
                className="p-2 rounded-xl bg-slate-950/80 border border-slate-800 text-center"
                title={`${b.name}: ${b.desc}`}
              >
                <span className="text-xl">{b.icon}</span>
                <div className="text-[9px] text-slate-400 font-semibold mt-0.5 truncate max-w-[65px]">{b.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Inline Profile Customization Form */}
        {isEditing && (
          <form 
            onSubmit={handleSaveProfile}
            className="p-4 rounded-xl bg-slate-950 border border-purple-500/50 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 animate-in fade-in"
          >
            <div className="flex-1 space-y-1">
              <label className="text-[11px] font-bold text-purple-300 uppercase tracking-wider">
                Your Forecaster Name / Judge Name
              </label>
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                placeholder="e.g. Abhijit Tomy, Judge Sharma"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                autoFocus
              />
            </div>

            <div className="sm:w-64 space-y-1">
              <label className="text-[11px] font-bold text-purple-300 uppercase tracking-wider">
                Your Home Ward
              </label>
              <select
                value={tempWard}
                onChange={(e) => setTempWard(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
              >
                {wardOptions.map((w) => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2 pt-2 sm:pt-4">
              <button
                type="submit"
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/30 transition"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Save</span>
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs font-bold transition"
              >
                <X className="w-3.5 h-3.5" />
                <span>Cancel</span>
              </button>
            </div>
          </form>
        )}

      </div>

      {/* Daily Prediction Challenges */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-extrabold text-white flex items-center gap-2">
            <Flame className="w-4 h-4 text-red-400" />
            <span>Today's Climate Prediction Challenges</span>
          </h3>
          <span className="text-xs text-slate-400 font-medium">Earn +150 XP per correct forecast</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {challenges.map((c) => {
            const isSubmitted = submittedCards[c.id];
            const qText =
              language === 'kn' ? (c.question_kn || c.question_en) :
              language === 'hi' ? (c.question_hi || c.question_en) :
              c.question_en;

            return (
              <div
                key={c.id}
                className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-xl space-y-3 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-red-300">
                      {c.ward}
                    </span>
                    <span className="text-amber-400 font-bold font-mono">+{c.xp_reward} XP</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">{c.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{qText}</p>
                </div>

                <div className="space-y-2 pt-2">
                  {c.type === 'BINARY' ? (
                    <div className="grid grid-cols-2 gap-2">
                      {c.options.map((opt, idx) => {
                        const selected = (activePredictions[c.id] || c.options[0]) === opt;
                        return (
                          <button
                            key={idx}
                            disabled={isSubmitted}
                            onClick={() => handleSelectOption(c.id, opt)}
                            className={`py-2 px-3 rounded-xl text-xs font-bold transition border ${
                              selected
                                ? 'bg-red-600/30 text-red-200 border-red-500 shadow-[0_0_12px_rgba(220,38,38,0.3)]'
                                : 'bg-slate-950/80 text-slate-400 border-slate-800 hover:border-slate-700'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-mono text-slate-300">
                        <span>Your Guess (HTSI):</span>
                        <span className="text-amber-400 font-bold">{activePredictions[c.id] || c.default_guess}/100</span>
                      </div>
                      <input
                        type="range"
                        min={c.min}
                        max={c.max}
                        disabled={isSubmitted}
                        value={activePredictions[c.id] || c.default_guess}
                        onChange={(e) => handleSelectOption(c.id, Number(e.target.value))}
                        className="w-full accent-amber-500 cursor-pointer"
                      />
                    </div>
                  )}

                  <button
                    disabled={isSubmitted}
                    onClick={() => handlePredict(c.id)}
                    className={`w-full py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                      isSubmitted
                        ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 cursor-default'
                        : 'bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-lg shadow-red-600/25'
                    }`}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Forecast Submitted (+50 XP)</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Prediction</span>
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Leaderboard and Showdown side-by-side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* City Leaderboard */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              <h3 className="text-sm font-bold text-white">Bengaluru Citizen Forecaster Leaderboard</h3>
            </div>
            <span className="text-xs font-mono text-slate-400">Weekly Cycle</span>
          </div>

          <div className="divide-y divide-slate-800/80">
            {leaderboard?.map((u) => {
              const isCurrentUser = u.rank === 4 || (u.name && u.name.includes('(You)'));
              const displayName = isCurrentUser ? `${customName} (You)` : u.name;
              const displayWard = isCurrentUser ? (customWard.split(' ')[0] || u.ward) : u.ward;

              return (
                <div 
                  key={u.rank} 
                  className={`py-2.5 px-2 rounded-xl flex items-center justify-between text-xs transition ${
                    isCurrentUser ? 'bg-purple-950/40 border border-purple-500/40 shadow-sm my-0.5' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-5 font-mono font-bold text-center ${
                      u.rank === 1 ? 'text-amber-400 text-sm' :
                      u.rank === 2 ? 'text-slate-300 text-sm' :
                      u.rank === 3 ? 'text-amber-600 text-sm' : 
                      isCurrentUser ? 'text-purple-400 font-extrabold' : 'text-slate-500'
                    }`}>
                      #{u.rank}
                    </span>
                    <div>
                      <div className="font-bold text-white flex items-center gap-1.5">
                        <span className={isCurrentUser ? 'text-purple-200 font-extrabold' : ''}>{displayName}</span>
                        <span className="text-[10px] text-slate-400">({displayWard})</span>
                        {isCurrentUser && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-500/30 text-purple-200 border border-purple-400/40 font-mono font-bold">
                            YOU
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-purple-300">{u.badge}</div>
                    </div>
                  </div>

                  <div className="text-right font-mono">
                    <div className="font-bold text-amber-400">{u.xp} XP</div>
                    <div className="text-[10px] text-emerald-400">{u.accuracy} Acc</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3-Way Forecasting Showdown Matrix */}
        <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-400" />
              <h3 className="text-sm font-bold text-white">The Accuracy Showdown: AI vs Crowd vs IMD</h3>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 font-bold">HEATGUARD Leads</span>
          </div>

          <div className="space-y-3">
            {showdownData?.map((item, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2 text-xs">
                <div className="font-bold text-white text-xs flex justify-between">
                  <span>{item.event}</span>
                  <span className="text-slate-400 text-[11px] font-mono">Ground Truth: {item.actual_ground_truth}</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center pt-1">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Traditional IMD</div>
                    <div className="text-xs font-bold text-slate-300 mt-0.5">{item.traditional_accuracy}</div>
                    <div className="text-[9px] text-slate-500 truncate">{item.traditional_forecast}</div>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-[10px] text-slate-400">Citizen Crowd</div>
                    <div className="text-xs font-bold text-amber-300 mt-0.5">{item.citizen_accuracy}</div>
                    <div className="text-[9px] text-slate-500 truncate">{item.citizen_crowd}</div>
                  </div>

                  <div className="p-2 rounded-lg bg-red-950/40 border border-red-500/40 shadow-sm">
                    <div className="text-[10px] text-red-300 font-bold">HEATGUARD AI</div>
                    <div className="text-xs font-extrabold text-emerald-400 mt-0.5">{item.heatguard_accuracy}</div>
                    <div className="text-[9px] text-slate-300 truncate">{item.heatguard_ai}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
