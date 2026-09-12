import React, { useState } from 'react';
import { Megaphone, Siren, Send, X, Edit3 } from 'lucide-react';

export default function EmergencyBanner({ headline, language, onUpdateHeadline }) {
  const [isEditing, setIsEditing] = useState(false);
  const [customText, setCustomText] = useState(headline?.headline_en || '');

  // Select text based on language
  const displayHeadline =
    language === 'kn' ? (headline?.headline_kn || headline?.headline_en) :
    language === 'hi' ? (headline?.headline_hi || headline?.headline_en) :
    headline?.headline_en;

  const handlePublish = () => {
    if (customText.trim()) {
      onUpdateHeadline({
        headline_en: customText,
        headline_kn: customText,
        headline_hi: customText,
        severity: 'CRITICAL'
      });
      setIsEditing(false);
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-red-950 via-red-900 to-rose-950 border-y border-red-700/60 shadow-lg text-white text-xs sm:text-sm font-medium py-2 px-4">
      <div className="max-w-[1880px] mx-auto flex items-center justify-between gap-3">
        
        {/* Flash Indicator */}
        <div className="flex items-center gap-2 flex-shrink-0 font-extrabold uppercase tracking-wide bg-red-600 px-2.5 py-1 rounded shadow text-white">
          <Siren className="w-4 h-4 animate-spin text-white" />
          <span>FLASH BULLETIN</span>
        </div>

        {/* Marquee / Headline text */}
        <div className="flex-1 overflow-hidden">
          <div className="truncate font-semibold text-slate-100 flex items-center gap-2">
            <span>{displayHeadline}</span>
          </div>
        </div>

        {/* Municipal Officer Broadcast Edit Trigger */}
        <button
          onClick={() => setIsEditing(true)}
          className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/40 hover:bg-black/60 border border-red-500/50 text-[11px] font-bold text-red-200 transition"
          title="Municipal Officer Emergency Broadcast Console"
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Officer Broadcast</span>
        </button>

      </div>

      {/* Municipal Officer Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-red-600/80 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-red-400 font-extrabold text-base">
                <Megaphone className="w-5 h-5" />
                <span>BBMP Emergency Citizen Broadcast Console</span>
              </div>
              <button onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300">
              Publishing here immediately updates the top alert ticker across all citizen screens and initiates SMS/WhatsApp dispatch gateways.
            </p>

            <textarea
              rows={4}
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-red-500 font-sans"
              placeholder="Type urgent public warning advisory..."
            />

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handlePublish}
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-extrabold shadow-lg shadow-red-600/40 transition"
              >
                <Send className="w-4 h-4" />
                Broadcast Live Bulletin
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
