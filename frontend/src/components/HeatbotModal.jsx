import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  User,
  Send,
  X,
  Sparkles,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  PhoneCall
} from 'lucide-react';
import { API_BASE } from '../config';

// Helper to format bold, code, and lists in chat messages
function FormattedChatText({ text }) {
  if (!text) return null;
  const lines = text.split('\n');

  return (
    <div className="space-y-1">
      {lines.map((line, idx) => {
        if (!line.trim()) {
          return <div key={idx} className="h-1.5" />;
        }

        // Parse inline bold (**bold**) and inline code (`code`)
        const parts = line.split(/(\*\*.*?\*\*|`.*?`)/g);

        return (
          <div key={idx} className="min-h-[1.15rem]">
            {parts.map((part, pIdx) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return (
                  <strong key={pIdx} className="font-extrabold text-white">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              if (part.startsWith('`') && part.endsWith('`')) {
                return (
                  <code key={pIdx} className="px-1 py-0.5 rounded bg-slate-950 font-mono text-[11px] text-amber-300 border border-slate-700/60">
                    {part.slice(1, -1)}
                  </code>
                );
              }
              return part;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default function HeatbotModal({ isOpen, onClose, language, selectedWard }) {
  const [mode, setMode] = useState('CITIZEN'); // CITIZEN or OFFICER
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content_en: "Hello! I am HEATGUARD AI, your localized biometeorological safety assistant for Bengaluru. How can I protect you or your ward today?",
      content_kn: "ನಮಸ್ಕಾರ! ನಾನು ಹೀಟ್‌ಗಾರ್ಡ್ ಎಐ, ಬೆಂಗಳೂರಿನ ನಿಮ್ಮ ಸ್ಥಳೀಯ ಹವಾಮಾನ ಸುರಕ್ಷತಾ ಸಹಾಯಕ. ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?",
      content_hi: "नमस्ते! मैं हीटगार्ड एआई हूँ, बेंगलुरु का आपका स्थानीय स्वास्थ्य सुरक्षा सहायक। मैं आज आपकी क्या सहायता करूँ?"
    }
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const quickQuestions = mode === 'CITIZEN' ? [
    "Hi, how can you help me?",
    "How to stay cool today?",
    "How much water should I drink?",
    "What should I eat in hot weather?",
    "What is the best AC temperature?",
    "Tips for baby & elderly heat safety",
    "Where is the nearest Indira Canteen / water point?",
    "Safe working hours for delivery riders?",
    "What is WBGT and why is regular temp misleading?",
    "Heat stroke warning symptoms & first aid?"
  ] : [
    "Which wards need water tankers right now?",
    "How do you predict hospital admission surge?",
    "Draft an emergency work-stoppage SMS for contractors",
    "Explain the False Relief anomaly and rain trap",
    "Statutory municipal circular & legal basis under Sec 34",
    "Are physical sensors or hardware required?"
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    // Append user message
    const userMsg = { role: 'user', content_en: query, content_kn: query, content_hi: query };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          mode: mode,
          language: language,
          ward_id: selectedWard?.ward_id || 'BBMP-138'
        })
      });

      if (res.ok) {
        const reply = await res.json();
        setMessages(prev => [...prev, reply]);
      } else {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content_en: "I am having trouble reaching the server. Please check your network.",
          content_kn: "ಸರ್ವರ್ ಸಂಪರ್ಕದಲ್ಲಿ ದೋಷವಿದೆ. ದಯವಿಟ್ಟು ನೆಟ್‌ವರ್ಕ್ ಪರಿಶೀಲಿಸಿ.",
          content_hi: "सर्वर से संपर्क करने में त्रुटि। कृपया अपना नेटवर्क जांचें।"
        }]);
      }
    } catch (e) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content_en: "Emergency service is operating offline. For immediate heat stroke emergencies, dial 108.",
        content_kn: "ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ದಯವಿಟ್ಟು 108 ಗೆ ಕರೆ ಮಾಡಿ.",
        content_hi: "आपातकालीन स्थिति में तुरंत 108 डायल करें।"
      }]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-md bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[560px] animate-in fade-in slide-in-from-bottom-6">
      
      {/* Chat Header */}
      <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-white flex items-center gap-1.5">
              <span>HEATGUARD AI Copilot</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300">ONLINE</span>
            </h3>
            <p className="text-[11px] text-slate-400">Bengaluru Biometeorological Advisor</p>
          </div>
        </div>

        <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Role Switcher: Citizen vs Municipal Commander */}
      <div className="flex bg-slate-950/80 p-1 border-b border-slate-800 text-xs font-bold">
        <button
          onClick={() => setMode('CITIZEN')}
          className={`flex-1 py-1.5 rounded-lg transition ${mode === 'CITIZEN' ? 'bg-red-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
        >
          Citizen & Worker Mode
        </button>
        <button
          onClick={() => setMode('OFFICER')}
          className={`flex-1 py-1.5 rounded-lg transition ${mode === 'OFFICER' ? 'bg-purple-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
        >
          Officer Command Mode
        </button>
      </div>

      {/* Messages List */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
        {messages.map((m, i) => {
          const isUser = m.role === 'user';
          const content =
            language === 'kn' ? (m.content_kn || m.content_en) :
            language === 'hi' ? (m.content_hi || m.content_en) :
            m.content_en;

          return (
            <div key={i} className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}>
              {!isUser && (
                <div className="w-7 h-7 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 flex-shrink-0 mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div className={`p-3 rounded-2xl max-w-[85%] leading-relaxed shadow-sm ${
                isUser
                  ? 'bg-red-600 text-white rounded-tr-none'
                  : 'bg-slate-800 text-slate-100 rounded-tl-none border border-slate-700/60'
              }`}>
                {isUser ? (
                  <div className="whitespace-pre-wrap">{content}</div>
                ) : (
                  <FormattedChatText text={content} />
                )}

                {/* Contextual Action Shortcut */}
                {!isUser && m.action_suggested === 'CALL_108_SOS' && (
                  <div className="pt-2">
                    <a
                      href="tel:108"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-extrabold text-[11px] shadow-lg shadow-red-600/40 transition"
                    >
                      <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
                      <span>Dial 108 Emergency Ambulance</span>
                    </a>
                  </div>
                )}

                {!isUser && m.action_suggested === 'HIGHLIGHT_SHELTERS_ON_MAP' && (
                  <div className="pt-2">
                    <button
                      onClick={onClose}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-[11px] shadow-md transition"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>View Indira Canteens on GIS Map</span>
                    </button>
                  </div>
                )}

                {!isUser && m.action_suggested === 'OPEN_CIRCULAR_MODAL' && (
                  <div className="pt-2">
                    <a
                      href={`${API_BASE}/api/circular/html`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-[11px] shadow-md transition"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>View Official Heat Action Circular</span>
                    </a>
                  </div>
                )}
              </div>

              {isUser && (
                <div className="w-7 h-7 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 flex-shrink-0 mt-0.5">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}
        {loading && (
          <div className="flex gap-2 items-center text-xs text-slate-400">
            <Bot className="w-4 h-4 text-red-400 animate-spin" />
            <span>Analyzing biometeorological telemetry...</span>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Quick Question Chips */}
      <div className="p-2 bg-slate-950/60 border-t border-slate-800/80 flex gap-1.5 overflow-x-auto text-[11px]">
        {quickQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(q)}
            className="flex-shrink-0 px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-3 bg-slate-950 border-t border-slate-800 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder={mode === 'CITIZEN' ? "Ask about symptoms, nearest shelter, safety..." : "Type municipal command or query..."}
          className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          onClick={() => handleSend()}
          disabled={!input.trim() || loading}
          className="p-2 rounded-xl bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white transition"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
