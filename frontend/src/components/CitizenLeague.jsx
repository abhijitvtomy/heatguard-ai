import React, { useState } from 'react';
import { Trophy, Award, Zap, Flame, Users, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

export default function CitizenLeague({
  challengesData,
  leaderboard,
  showdownData,
  language,
  onSubmitPrediction
}) {
  const [activePredictions, setActivePredictions] = useState({});
  const [submittedCards, setSubmittedCards] = useState({});

  const challenges = challengesData?.challenges || [];
  const profile = challengesData?.user_profile || {
    name: "Arjun Rao",
    xp: 1420,
    level: 4,
    level_title: "Heatwave Detective",
    accuracy_pct: 83.3,
    badges: []
  };

  const handleSelectOption = (chalId, option) => {
    setActivePredictions(prev => ({ ...prev, [chalId]: option }));
  };

  const handlePredict = (chalId) => {
    const val = activePredictions[chalId] || "YES";
    onSubmitPrediction(chalId, val);
    setSubmittedCards(prev => ({ ...prev, [chalId]: true }));
  };

  return (
    <div className="space-y-6">

      {/* User Profile & XP Header Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-slate-900 border border-purple-500/30 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-purple-500/30">
            AR
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-extrabold text-white">{profile.name}</h2>
              <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                Lvl {profile.level} • {profile.level_title}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Bengaluru Ward BBMP-151 • Accuracy: <span className="text-emerald-400 font-bold">{profile.accuracy_pct}%</span>
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
            {leaderboard?.map((u) => (
              <div key={u.rank} className="py-2.5 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <span className={`w-5 font-mono font-bold text-center ${
                    u.rank === 1 ? 'text-amber-400 text-sm' :
                    u.rank === 2 ? 'text-slate-300 text-sm' :
                    u.rank === 3 ? 'text-amber-600 text-sm' : 'text-slate-500'
                  }`}>
                    #{u.rank}
                  </span>
                  <div>
                    <div className="font-bold text-white flex items-center gap-1.5">
                      <span>{u.name}</span>
                      <span className="text-[10px] text-slate-400">({u.ward})</span>
                    </div>
                    <div className="text-[10px] text-purple-300">{u.badge}</div>
                  </div>
                </div>

                <div className="text-right font-mono">
                  <div className="font-bold text-amber-400">{u.xp} XP</div>
                  <div className="text-[10px] text-emerald-400">{u.accuracy} Acc</div>
                </div>
              </div>
            ))}
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
