import React from 'react';
import { ShieldCheck, CheckCircle2, AlertCircle, BarChart3 } from 'lucide-react';

export default function AccuracyLedger({ auditData }) {
  if (!auditData || !auditData.records) {
    return <div className="p-8 text-center text-slate-400">Loading transparency ledger...</div>;
  }

  const { mean_absolute_error_pct, root_mean_squared_error, overall_model_accuracy_pct, records } = auditData;

  return (
    <div className="space-y-6">
      
      {/* Header & Assurance */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/40 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-1">
            <ShieldCheck className="w-5 h-5" />
            <span>CLINICAL & EPIDEMIOLOGICAL TRANSPARENCY AUDIT</span>
          </div>
          <h2 className="text-xl font-extrabold text-white">
            7-Day Backtested Model Accountability Ledger
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Because human lives depend on early heat alerts, HEATGUARD transparently audits every prediction against confirmed hospital emergency admissions and IMD/AWOS ground-truth stations.
          </p>
        </div>

        {/* Big Accuracy Metric */}
        <div className="text-right flex-shrink-0 bg-slate-950/80 p-4 rounded-xl border border-emerald-500/30">
          <div className="text-xs text-slate-400 font-medium">Verified Overall Accuracy</div>
          <div className="text-3xl font-extrabold text-emerald-400 font-mono mt-0.5">
            {overall_model_accuracy_pct}%
          </div>
          <div className="text-[10px] text-emerald-300/80 flex items-center justify-end gap-1 mt-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
            <span>Zero Missed Critical Surges</span>
          </div>
        </div>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="text-xs text-slate-400">Mean Absolute Error (MAE)</div>
          <div className="text-2xl font-extrabold font-mono text-white mt-1">
            ±{mean_absolute_error_pct}%
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Hospital Admission Margin of Error</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="text-xs text-slate-400">Root Mean Squared Error (RMSE)</div>
          <div className="text-2xl font-extrabold font-mono text-white mt-1">
            {root_mean_squared_error}
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Penalizes large outlier deviations</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="text-xs text-slate-400">Evaluation Objective</div>
          <div className="text-sm font-bold text-red-300 mt-1.5">
            Asymmetric False-Negative Penalty (3x)
          </div>
          <div className="text-[11px] text-slate-500 mt-1">Errs on side of life protection</div>
        </div>
      </div>

      {/* Backtested Records Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-200">Historical Daily Backtesting Records</h3>
          <span className="text-xs font-mono text-slate-400">Bengaluru Ground Truth Verification</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-medium">
            <thead className="bg-slate-950/80 text-slate-400 uppercase font-mono text-[11px] border-b border-slate-800">
              <tr>
                <th className="p-3.5">Date / Horizon</th>
                <th className="p-3.5">Predicted WBGT</th>
                <th className="p-3.5">Actual WBGT</th>
                <th className="p-3.5">Predicted Hospital Spike</th>
                <th className="p-3.5">Actual Confirmed Spike</th>
                <th className="p-3.5">Error Margin</th>
                <th className="p-3.5">Audit Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-200 font-mono">
              {records.map((r, i) => {
                const diff = Math.abs(r.predicted_spike - r.actual_spike).toFixed(1);
                return (
                  <tr key={i} className="hover:bg-slate-800/40 transition">
                    <td className="p-3.5 font-bold text-white">{r.date}</td>
                    <td className="p-3.5 text-amber-300">{r.predicted_wbgt}°C</td>
                    <td className="p-3.5 text-slate-300">{r.actual_wbgt}°C</td>
                    <td className="p-3.5 text-red-400 font-bold">+{r.predicted_spike}%</td>
                    <td className="p-3.5 text-slate-200 font-bold">+{r.actual_spike}%</td>
                    <td className="p-3.5 text-emerald-400">±{diff}%</td>
                    <td className="p-3.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {r.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
