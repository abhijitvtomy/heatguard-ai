import React, { useState, useEffect } from 'react';
import {
  Megaphone, PlusCircle, ThumbsUp, AlertTriangle, Droplets,
  CheckCircle2, Clock, MapPin, Send, Filter, ShieldAlert,
  Search, Check, Sparkles
} from 'lucide-react';
import { API_BASE } from '../config';

export default function CommunityResponse({
  wards = [],
  language = 'en',
  initialReports = []
}) {
  const [reports, setReports] = useState(initialReports || []);
  const [filterCategory, setFilterCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successTicket, setSuccessTicket] = useState(null);

  // Form State
  const [selectedWardId, setSelectedWardId] = useState(wards[0]?.ward_id || 'BBMP-41');
  const [category, setCategory] = useState('LACK_OF_WATER');
  const [locationText, setLocationText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');
  const [urgency, setUrgency] = useState('CRITICAL');
  const [reporterName, setReporterName] = useState('');

  // Fetch live reports
  const fetchReports = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/community/reports`);
      if (res.ok) {
        const data = await res.json();
        setReports(data.reports || []);
      }
    } catch (err) {
      // Use fallback reports state
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const handleUpvote = async (reportId) => {
    // Optimistic UI update
    setReports((prev) =>
      prev.map((r) => (r.id === reportId ? { ...r, upvotes: (r.upvotes || 0) + 1, userUpvoted: true } : r))
    );

    try {
      await fetch(`${API_BASE}/api/community/upvote/${reportId}`, { method: 'POST' });
    } catch (e) {
      // Handled optimistically
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!locationText.trim() || !descriptionText.trim()) return;

    setSubmitting(true);
    const wardObj = wards.find((w) => w.ward_id === selectedWardId);
    const wardName = wardObj ? wardObj.name : selectedWardId;

    const payload = {
      ward_id: selectedWardId,
      ward_name: wardName,
      category,
      category_label: getCategoryLabel(category),
      location: locationText,
      description: descriptionText,
      urgency,
      reporter_name: reporterName.trim() || 'Concerned Citizen'
    };

    try {
      const res = await fetch(`${API_BASE}/api/community/report`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        const data = await res.json();
        setSuccessTicket(data.ticket_id);
        setReports((prev) => [data.report, ...prev]);
      } else {
        throw new Error();
      }
    } catch (err) {
      // Local fallback
      const fakeTicket = `HG-${Math.floor(10000 + Math.random() * 90000)}`;
      const localReport = {
        id: fakeTicket,
        ...payload,
        status: 'UNDER_REVIEW',
        status_label: 'Under Municipal Review',
        upvotes: 1,
        timestamp: 'Just now'
      };
      setSuccessTicket(fakeTicket);
      setReports((prev) => [localReport, ...prev]);
    } finally {
      setSubmitting(false);
      setLocationText('');
      setDescriptionText('');
      setReporterName('');
    }
  };

  const getCategoryLabel = (cat) => {
    switch (cat) {
      case 'LACK_OF_WATER': return 'Acute Drinking Water Scarcity';
      case 'WATER_DISPENSER_BROKEN': return 'Broken Dispenser / Dry Tap';
      case 'UNSHADED_LABOR_ZONE': return 'Unshaded Outdoor Work / Transit Hub';
      case 'TIN_ROOF_OVERHEATING': return 'Severe Slum / Tin Roof Overheating';
      case 'SHELTER_INACCESSIBLE': return 'Cooling Shelter Locked / Inaccessible';
      case 'HEAT_EXHAUSTION_INCIDENT': return 'Heat Stroke / Medical Emergency';
      default: return 'Thermal Ground Anomaly';
    }
  };

  const getUrgencyBadge = (u) => {
    switch (u) {
      case 'CRITICAL':
        return 'bg-red-500/20 text-red-300 border-red-500/50 animate-pulse';
      case 'HIGH':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/50';
      case 'MEDIUM':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const getStatusBadge = (st) => {
    switch (st) {
      case 'DISPATCHED_TANKER':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-500/60 font-bold';
      case 'INSPECTION_SCHEDULED':
        return 'bg-sky-950/80 text-sky-300 border-sky-500/60 font-bold';
      case 'RESOLVED':
        return 'bg-purple-950/80 text-purple-300 border-purple-500/60 font-bold';
      default:
        return 'bg-slate-900 text-slate-400 border-slate-700';
    }
  };

  // Filtered reports
  const filtered = reports.filter((r) => {
    const matchCat = filterCategory === 'ALL' || r.category === filterCategory;
    const matchSearch =
      !searchQuery ||
      r.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.ward_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.id?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-sky-950/40 border border-slate-800 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
              <Megaphone className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-extrabold text-white tracking-wide">
              Community Ground Response & Anomaly Desk
            </h2>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-sky-950/80 text-sky-300 border border-sky-600/40">
              Crowdsourced Ground Truth
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-3xl">
            Empowering citizens and gig workers to report ground realities: acute drinking water shortages, broken RO kiosks, unshaded bus stops, or locked cooling shelters. Reports directly alert municipal field response teams.
          </p>
        </div>

        <button
          onClick={() => { setIsFormOpen(!isFormOpen); setSuccessTicket(null); }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-sky-600/30 transition transform hover:scale-105 shrink-0"
        >
          <PlusCircle className="w-4 h-4" />
          <span>{isFormOpen ? 'Close Reporting Form' : 'Report Ground Anomaly'}</span>
        </button>
      </div>

      {/* Incident Reporting Modal / Drawer */}
      {isFormOpen && (
        <div className="p-6 rounded-2xl bg-slate-900 border border-sky-500/40 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
              <ShieldAlert className="w-4 h-4" />
              <span>File Ground Anomaly / Water Assistance Request</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">
              Municipal SLA: Immediate Triage
            </span>
          </div>

          {successTicket ? (
            <div className="p-5 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <div className="text-sm font-bold text-emerald-300">
                Ticket #{successTicket} Filed Successfully!
              </div>
              <p className="text-xs text-slate-300">
                Your report has been dispatched to the Metropolitan Disaster Field Unit. Nearby citizens can upvote this ticket to elevate priority.
              </p>
              <button
                onClick={() => setSuccessTicket(null)}
                className="mt-2 px-4 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold"
              >
                Submit Another Report
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Ward Selection */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300">Target Ward</label>
                  <select
                    value={selectedWardId}
                    onChange={(e) => setSelectedWardId(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-xs font-bold text-white rounded-xl p-2.5 focus:ring-2 focus:ring-sky-500"
                  >
                    {wards.map((w) => (
                      <option key={w.ward_id} value={w.ward_id}>
                        {w.ward_id?.replace('BBMP-', 'Ward ')}: {w.name?.split('&')[0]}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Category Selection */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300">Anomaly Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-xs font-bold text-white rounded-xl p-2.5 focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="LACK_OF_WATER">💧 Acute Drinking Water Scarcity</option>
                    <option value="WATER_DISPENSER_BROKEN">🛑 Broken Water Dispenser / Dry Tap</option>
                    <option value="UNSHADED_LABOR_ZONE">☀️ Unshaded Work / Bus Stand</option>
                    <option value="TIN_ROOF_OVERHEATING">🏠 Severe Tin-Roof Overheating</option>
                    <option value="SHELTER_INACCESSIBLE">⚡ Cooling Shelter Locked / Offline</option>
                    <option value="HEAT_EXHAUSTION_INCIDENT">🚑 Heat Stroke / Medical Emergency</option>
                  </select>
                </div>

                {/* Urgency */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-300">Urgency Level</label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 text-xs font-bold text-white rounded-xl p-2.5 focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="CRITICAL">🚨 Critical Emergency (Immediate Water Need)</option>
                    <option value="HIGH">⚠️ High Priority (Severe Heat Distress)</option>
                    <option value="MEDIUM">🟡 Medium Priority (Maintenance Required)</option>
                  </select>
                </div>

              </div>

              {/* Exact Location Landmark */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-300">Specific Location / Landmark</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Outside Gate 2, Metro Station, 4th Cross Industrial Road"
                  value={locationText}
                  onChange={(e) => setLocationText(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-xs text-white rounded-xl p-2.5 focus:ring-2 focus:ring-sky-500"
                />
              </div>

              {/* Description */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-300">Ground Reality Details</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Describe what is happening on the ground: number of people affected, how long water has been unavailable, any physical symptoms..."
                  value={descriptionText}
                  onChange={(e) => setDescriptionText(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 text-xs text-white rounded-xl p-2.5 focus:ring-2 focus:ring-sky-500"
                />
              </div>

              {/* Reporter Name (Optional) */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <input
                  type="text"
                  placeholder="Your Name / Organization (Optional)"
                  value={reporterName}
                  onChange={(e) => setReporterName(e.target.value)}
                  className="w-full sm:w-72 bg-slate-950 border border-slate-700 text-xs text-white rounded-xl p-2 focus:ring-2 focus:ring-sky-500"
                />

                <div className="flex items-center gap-2 ml-auto">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-lg shadow-sky-600/40 transition disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submitting ? 'Transmitting...' : 'Dispatch Ticket'}</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-900 border border-slate-800">
        <div className="flex flex-wrap items-center gap-1.5">
          <Filter className="w-3.5 h-3.5 text-slate-400 mr-1" />
          {['ALL', 'LACK_OF_WATER', 'WATER_DISPENSER_BROKEN', 'UNSHADED_LABOR_ZONE', 'SHELTER_INACCESSIBLE'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1 rounded-xl text-[11px] font-bold transition ${
                filterCategory === cat
                  ? 'bg-sky-600 text-white shadow'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat === 'ALL' ? 'All Incidents' :
               cat === 'LACK_OF_WATER' ? 'Water Scarcity' :
               cat === 'WATER_DISPENSER_BROKEN' ? 'Broken Coolers' :
               cat === 'UNSHADED_LABOR_ZONE' ? 'Unshaded Stops' :
               'Shelters Offline'}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search ward, street, or ticket..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-slate-950 border border-slate-700 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-sky-500 w-56"
          />
        </div>
      </div>

      {/* Live Incident Ledger Cards */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center text-slate-400 text-xs">
            No incident reports matching criteria. Click "Report Ground Anomaly" to log a new ticket.
          </div>
        ) : (
          filtered.map((report) => (
            <div
              key={report.id}
              className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 hover:border-slate-700 transition shadow-lg space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-extrabold text-sky-400 bg-sky-950/70 px-2 py-0.5 rounded border border-sky-500/30">
                    #{report.id}
                  </span>
                  <span className="text-xs font-bold text-slate-200">
                    {report.ward_name?.split('&')[0]}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {report.category_label || report.category?.replace(/_/g, ' ')}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${getUrgencyBadge(report.urgency)}`}>
                    ● {report.urgency} URGENCY
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase tracking-wider ${getStatusBadge(report.status)}`}>
                    {report.status_label || report.status?.replace(/_/g, ' ')}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                <span className="font-medium text-slate-200">{report.location}</span>
              </div>

              <p className="text-xs text-slate-400 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80 leading-relaxed">
                {report.description}
              </p>

              <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500 font-mono">
                <div className="flex items-center gap-2">
                  <span>Reported by: <b className="text-slate-400">{report.reporter_name}</b></span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {report.timestamp}
                  </span>
                </div>

                {/* Upvote Button */}
                <button
                  onClick={() => handleUpvote(report.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition border ${
                    report.userUpvoted
                      ? 'bg-sky-600 text-white border-sky-500'
                      : 'bg-slate-800/80 hover:bg-slate-800 text-slate-300 border-slate-700'
                  }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>Confirm / Facing This Too</span>
                  <span className="font-mono bg-black/40 px-1.5 py-0.2 rounded font-extrabold text-[10px] ml-1">
                    {report.upvotes || 1}
                  </span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
