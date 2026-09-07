import React, { useState } from 'react';
import {
  Smartphone,
  Globe,
  Wifi,
  Copy,
  Check,
  ExternalLink,
  X,
  ShieldCheck,
  Zap,
  Sparkles
} from 'lucide-react';

export default function JudgeAccessModal({ isOpen, onClose }) {
  const [activeMode, setActiveMode] = useState('cloud'); // 'cloud' or 'local'
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Cloudflare Public Tunnel URL
  const publicUrl = 'https://protein-prominent-dealers-clause.trycloudflare.com';
  
  // Local Wi-Fi URL
  const localUrl = 'http://10.40.237.1:5173';

  const currentUrl = activeMode === 'cloud' ? publicUrl : localUrl;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(currentUrl)}&bgcolor=0f172a&color=ffffff&qzone=2`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col items-center text-center space-y-2 mb-6">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 shadow-inner">
            <Smartphone className="w-8 h-8 text-indigo-400 animate-pulse" />
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-extrabold text-white tracking-tight">
              Judge & Evaluator Live Access
            </h2>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
              <Zap className="w-3 h-3 text-emerald-400" /> LIVE
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Judges can open the full interactive platform on their mobile phones right now to test live telemetry and alerts.
          </p>
        </div>

        {/* Mode Selector (Cloud vs Local Wi-Fi) */}
        <div className="grid grid-cols-2 gap-2 w-full p-1 bg-slate-950 rounded-2xl border border-slate-800 mb-6">
          <button
            onClick={() => setActiveMode('cloud')}
            className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition ${
              activeMode === 'cloud'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Any Device (4G/Cloud)</span>
          </button>
          <button
            onClick={() => setActiveMode('local')}
            className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-bold transition ${
              activeMode === 'local'
                ? 'bg-slate-800 text-white border border-slate-700 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Wifi className="w-4 h-4" />
            <span>Same Wi-Fi (Local)</span>
          </button>
        </div>

        {/* Dynamic QR Code Card */}
        <div className="flex flex-col items-center bg-slate-950 p-5 rounded-2xl border border-slate-800 shadow-inner w-full">
          <div className="relative p-2 bg-slate-900 rounded-xl border border-slate-700/60 shadow-lg">
            <img
              src={qrCodeUrl}
              alt="Judge Scan QR Code"
              className="w-52 h-52 object-contain rounded-lg"
            />
            <div className="absolute inset-0 border-2 border-indigo-500/30 rounded-xl pointer-events-none" />
          </div>

          <div className="mt-4 flex items-center gap-1.5 text-xs text-indigo-300 font-semibold text-center">
            <Sparkles className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>Point smartphone camera to open website instantly</span>
          </div>
        </div>

        {/* URL Box with Copy Action */}
        <div className="w-full mt-4 flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl p-2.5">
          <div className="flex-1 truncate font-mono text-xs text-slate-300 px-2 select-all">
            {currentUrl}
          </div>
          <button
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
          <a
            href={currentUrl}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
            title="Open in new tab"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Pitch Hint */}
        <div className="w-full mt-4 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-[11px] text-slate-400 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-300">Pitch Tip:</span> Open this modal and say: 
            <em className="text-slate-300"> "Judges, please scan this QR code on your phones to test our ward downscaling and WhatsApp alert dispatcher live!"</em>
          </div>
        </div>

      </div>
    </div>
  );
}
