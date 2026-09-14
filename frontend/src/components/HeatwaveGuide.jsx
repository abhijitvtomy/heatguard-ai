import React, { useState } from 'react';
import { 
  Flame, ShieldAlert, HeartPulse, Droplets, Sun, Wind, 
  Activity, CheckCircle2, AlertTriangle, HelpCircle, Thermometer, 
  Trees, Building2, Car, Compass, FileText, PhoneCall, Zap,
  Layers, ArrowRight, ShieldCheck, Check
} from 'lucide-react';

export default function HeatwaveGuide({ language = 'en', onOpenPanicModal, onNavigateTab }) {
  const [activeSection, setActiveSection] = useState('what'); // 'what', 'causes', 'harms', 'precautions'
  const [selectedHarmStage, setSelectedHarmStage] = useState(3); // 0: Rash, 1: Cramps, 2: Syncope, 3: Exhaustion, 4: Stroke
  const [selectedRiskScore, setSelectedRiskScore] = useState({
    sweating: false,
    confusion: false,
    dizziness: false,
    headache: false,
    outdoorExertion: false
  });

  const clinicalStages = [
    {
      stage: 'Stage 1',
      title: 'Heat Rash & Heat Edema',
      severity: 'Mild (Early Warning)',
      coreTemp: '< 37.5°C (99.5°F)',
      badgeColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40',
      description: 'Sweat duct blockage causing pruritic erythematous papules (prickly heat). Mild orthostatic swelling in hands and feet due to cutaneous vasodilation.',
      symptoms: ['Red prickly skin bumps', 'Mild itching/stinging', 'Swollen ankles or fingers'],
      action: 'Move to a shaded or air-conditioned area, keep skin dry, wear loose cotton clothing, avoid heavy lotions.'
    },
    {
      stage: 'Stage 2',
      title: 'Heat Cramps',
      severity: 'Moderate Stress',
      coreTemp: '37.5°C – 38.0°C',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      description: 'Acute sodium, potassium, and magnesium depletion resulting from copious diaphoresis (sweating) without electrolyte replenishment during strenuous exertion.',
      symptoms: ['Severe involuntary muscle spasms (calves, thighs, shoulders)', 'Abdominal cramping', 'Intense thirst'],
      action: 'Immediately halt all physical labor. Rest in cool shade. Ingest 500ml of oral rehydration salts (ORS), buttermilk (majjige), or salted lemon water. Gently stretch cramped muscles.'
    },
    {
      stage: 'Stage 3',
      title: 'Heat Syncope (Fainting)',
      severity: 'Moderate Neurological',
      coreTemp: '37.8°C – 38.5°C',
      badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
      description: 'Orthostatic pooling of blood in dilated peripheral cutaneous vascular beds combined with dehydration, causing transient reduction in cerebral perfusion.',
      symptoms: ['Sudden dizziness or lightheadedness upon standing', 'Tunnel vision or blurred vision', 'Brief collapse / fainting episode'],
      action: 'Lay patient flat on their back and elevate legs 12 inches above heart level. Loosen tight neckbands and waistbands. Fan vigorously. Sip cool water once fully conscious.'
    },
    {
      stage: 'Stage 4',
      title: 'Heat Exhaustion',
      severity: 'Severe Systemic Collapse',
      coreTemp: '38.0°C – 40.0°C (100.4°F – 104.0°F)',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
      description: 'Extensive cardiovascular strain as cardiac output struggles to sustain vital organs while circulating blood to the skin for heat dissipation. Dehydration exceeds 3%–5% body weight.',
      symptoms: ['Profuse, drenching cold sweat', 'Severe throbbing headache', 'Nausea, vomiting, loss of appetite', 'Tachycardia (fast pulse >110 bpm)', 'Extreme physical weakness and clumsiness'],
      action: 'Urgent intervention required. Move to cool air-conditioned space. Apply cold water compress or ice towels to neck and armpits. Rehydrate with electrolyte fluid. If vomiting prevents drinking, transport immediately to hospital.'
    },
    {
      stage: 'Stage 5',
      title: 'Heat Stroke (Hyperpyrexia)',
      severity: 'CRITICAL MEDICAL EMERGENCY • FATAL RISK',
      coreTemp: '> 40.5°C (105°F)',
      badgeColor: 'bg-red-600/30 text-red-400 border-red-500/80 animate-pulse',
      description: 'Catastrophic failure of hypothalamic thermoregulatory homeostasis. Cellular proteins denature, triggering systemic inflammatory response syndrome (SIRS), rhabdomyolysis, and multi-organ failure. Fatality is 40%–70% without rapid ice immersion within 30 minutes.',
      symptoms: ['Hot, flushed, DRY skin (anhidrosis) or paradoxical cold clammy skin', 'Confusion, delirium, slurred speech, hallucinations', 'Seizures, loss of consciousness, coma', 'Rapid, shallow respiration and hyperthermia'],
      action: 'DIAL 108 IMMEDIATELY! Strip heavy clothing. Immerse body up to neck in cold ice bath or pack ice bags in groin, armpits, and neck. Fan continuously while spraying cold water. DO NOT give oral fluids.'
    }
  ];

  const urbanCauses = [
    {
      title: 'Urban Heat Island (UHI) Effect',
      tag: 'Thermodynamics',
      icon: Building2,
      color: 'text-amber-400 border-amber-500/30 bg-amber-950/20',
      desc: 'Bengaluru has experienced explosive urbanization with extensive asphalt roads (albedo 0.10) and concrete masonry (albedo 0.20). These dark, high thermal mass materials absorb intense shortwave solar radiation during the day and re-radiate it all night as longwave infrared energy, keeping night temperatures up to 4.5°C hotter than surrounding rural districts.'
    },
    {
      title: 'Depletion of Tree Canopy & Lakes',
      tag: 'Ecosystem Loss',
      icon: Trees,
      color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20',
      desc: 'Scientific satellite telemetry shows Bengaluru lost over 66% of its urban tree canopy and 79% of its water bodies over four decades. Living tree canopies dissipate heat through evapotranspiration (converting sensible heat into latent heat), cooling ambient air by 2.5°C to 4°C. Loss of vegetation removes this natural air conditioning.'
    },
    {
      title: 'Anthropogenic Heat Flux',
      tag: 'Human Emissions',
      icon: Car,
      color: 'text-sky-400 border-sky-500/30 bg-sky-950/20',
      desc: 'Dense vehicular congestion (over 1.1 crore registered vehicles), millions of high-tonnage HVAC air conditioning compressors venting 45°C condenser exhaust into narrow street corridors, and thousands of diesel generators pump massive amounts of waste heat directly into the human breathing zone.'
    },
    {
      title: 'Anticyclonic Atmospheric Subsidence',
      tag: 'Meteorology',
      icon: Wind,
      color: 'text-rose-400 border-rose-500/30 bg-rose-950/20',
      desc: 'Subtropical high-pressure ridges create descending columns of dry air that compress adiabatically, warming the lower planetary boundary layer. This atmospheric inversion acts as a thermal lid, trapping pollutants, suppressing cloud formation, and exposing the metropolitan ground surface to unrelenting peak solar radiation.'
    }
  ];

  const precautions = [
    {
      category: '1. Hydration & Electrolytes',
      icon: Droplets,
      color: 'text-sky-400',
      items: [
        'Drink 3.5 to 4.5 liters of clean water spread evenly throughout the day, even if not thirsty.',
        'Drink natural electrolytes: majjige (salted buttermilk with ginger and curry leaves), tender coconut water, and lime juice with salt.',
        'Carry WHO-formula Oral Rehydration Salts (ORS) in your vehicle or backpack.',
        'Avoid alcohol, sugary fizzy sodas, and excessive coffee/tea as they accelerate fluid loss through diuresis.'
      ]
    },
    {
      category: '2. Gig-Workers & Commuter Drivers',
      icon: Compass,
      color: 'text-emerald-400',
      items: [
        'Navigate via the platform’s Driver Cool Routes (canopy-shaded boulevards with free water stops).',
        'Enforce mandatory 15-minute shaded rest breaks every hour between 11:30 AM and 04:00 PM.',
        'Utilize BBMP Indira Canteens and Metro concourses as free air-cooled heat respite hubs.',
        'Install reflective sunshades in auto-rickshaws and delivery vehicles to prevent cockpit heat buildup.'
      ]
    },
    {
      category: '3. Clothing & Personal Defense',
      icon: Sun,
      color: 'text-amber-400',
      items: [
        'Wear loose-fitting, light-colored, breathable cotton or linen fabrics that allow sweat to evaporate.',
        'Cover your head with a wide-brimmed cotton hat or light-colored umbrella when outdoors.',
        'Wear UV400-rated sunglasses to protect corneas from solar glare and prevent heat headaches.',
        'Apply SPF 30+ broad-spectrum sunscreen to exposed skin 20 minutes before outdoor exposure.'
      ]
    },
    {
      category: '4. Indoor & Architectural Cooling Hacks',
      icon: Building2,
      color: 'text-purple-400',
      items: [
        'Paint concrete roofs with white high-albedo solar-reflective lime wash to drop indoor temps by 3°C–5°C.',
        'Open windows during late evening and early dawn for cross-ventilation; keep curtains closed during peak sunlight.',
        'Hang damp woven vetiver (khus) or cotton curtains over windows to induce natural evaporative cooling.',
        'Place wide bowls of water in front of table fans to increase localized humidity and evaporative chill.'
      ]
    }
  ];

  const toggleQuiz = (key) => {
    setSelectedRiskScore(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const calculatedRiskCount = Object.values(selectedRiskScore).filter(Boolean).length;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-red-950 via-slate-900 to-amber-950/60 border border-red-500/40 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/40 text-xs font-mono font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-red-400 animate-pulse" />
              <span>Public Health Biometeorology & Urban Resilience Guide</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
              Understanding Heatwaves: Science, Clinical Harms & Life-Saving Protocols
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Extreme heat is India’s silent disaster. Learn what constitutes a meteorological heatwave, 
              how the Urban Heat Island multiplies thermal stress, the clinical progression from mild cramps to fatal heat stroke, 
              and how citizens, drivers, and municipal bodies can stay resilient.
            </p>
          </div>

          {/* Quick Action CTA Cards */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <button
              onClick={onOpenPanicModal}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-xs shadow-xl shadow-red-600/40 flex items-center justify-center gap-2 transition transform hover:scale-105"
            >
              <PhoneCall className="w-4 h-4 animate-bounce" />
              <span>EMERGENCY SOS (108 AMBULANCE)</span>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('actionPlan')}
              className="px-5 py-3 rounded-2xl bg-slate-800/90 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 shadow-md flex items-center justify-center gap-2 transition"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>OFFICIAL MUNICIPAL CIRCULAR (PDF)</span>
            </button>
          </div>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
          {[
            { id: 'what', label: '1. What is a Heatwave?', icon: Flame },
            { id: 'causes', label: '2. Urban Causes & Physics', icon: Building2 },
            { id: 'harms', label: '3. Clinical Spectrum of Harms', icon: HeartPulse },
            { id: 'precautions', label: '4. Precautions & Life-Hacks', icon: ShieldCheck },
            { id: 'quiz', label: '5. Heat Triage Self-Check', icon: Activity }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition ${
                  isActive 
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30' 
                    : 'bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SECTION 1: WHAT IS A HEATWAVE? */}
      {activeSection === 'what' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in duration-200">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Sun className="w-5 h-5 text-amber-400" />
                <span>Meteorological Definition (IMD Criteria)</span>
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                According to the <strong>India Meteorological Department (IMD)</strong>, a heatwave is officially declared when the maximum temperature of a station satisfies either of the following conditions:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 space-y-2">
                  <div className="text-xs font-mono font-bold text-amber-400 uppercase">
                    Criterion 1: Departure from Normal
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                    <li><strong>Heatwave:</strong> Maximum temperature departure is <span className="text-amber-400 font-bold">+4.5°C to +6.4°C</span> above historical climatological normal.</li>
                    <li><strong>Severe Heatwave:</strong> Maximum temperature departure exceeds <span className="text-red-400 font-bold">+6.4°C</span> above normal.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-red-950/30 border border-red-500/30 space-y-2">
                  <div className="text-xs font-mono font-bold text-red-400 uppercase">
                    Criterion 2: Absolute Thresholds
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                    <li><strong>Plains:</strong> Maximum temperature reaches <span className="text-amber-400 font-bold">40.0°C</span> or more.</li>
                    <li><strong>Plateau & Coastal Stations:</strong> Maximum temperature reaches <span className="text-amber-400 font-bold">37.0°C</span>.</li>
                    <li><strong>Hills / High Elevation:</strong> Maximum temperature breaches <span className="text-amber-400 font-bold">30.0°C</span>.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* The Modern Biometeorological Reality: Wet-Bulb */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-red-500/30 space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Thermometer className="w-5 h-5 text-red-400" />
                <span>Why Ambient Temp Alone is Inadequate: The Wet-Bulb Reality</span>
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Traditional weather apps show dry-bulb temperature (e.g., 35°C), which completely ignores 
                <strong>relative humidity, wind stagnation, and solar radiation</strong>. The human body regulates core temperature at 37°C 
                by sweating. When sweat evaporates into dry air, it consumes latent heat of vaporization (~2,430 kJ/kg), cooling our skin.
              </p>
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs text-slate-200 leading-relaxed">
                <span className="font-bold text-red-400">The Wet-Bulb Globe Temperature (WBGT) Limit:</span> When high humidity saturates the air, 
                the vapor pressure gradient approaches zero. Sweat can no longer evaporate—it merely rolls off the skin without any cooling effect. 
                At a <strong>Wet-Bulb Temperature of 32.2°C</strong>, continuous outdoor exertion leads to hyperthermia within 45 minutes even in healthy adults. 
                At <strong>35°C Wet-Bulb</strong>, human thermodynamic cooling becomes physically impossible, leading to rapid systemic organ failure.
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-400" />
                <span>Heatwave Alert Warning Levels</span>
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 mt-1 shrink-0" />
                  <div>
                    <div className="font-bold text-emerald-300">GREEN: Normal & Safe</div>
                    <p className="text-slate-400 mt-0.5">Maximum temps within normal seasonal envelope. No advisory required.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mt-1 shrink-0" />
                  <div>
                    <div className="font-bold text-amber-300">YELLOW: Watch & Stay Updated</div>
                    <p className="text-slate-400 mt-0.5">Moderate heat stress persisting for 2 consecutive days. High risk for vulnerable demographics.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-orange-950/40 border border-orange-500/40 flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-orange-500 mt-1 shrink-0" />
                  <div>
                    <div className="font-bold text-orange-300">ORANGE: Be Prepared (Severe Heat)</div>
                    <p className="text-slate-400 mt-0.5">Severe heat conditions continuing for 2+ days or WBGT &gt;30°C. Increased likelihood of heat illness.</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-red-950/60 border border-red-500/60 flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 mt-1 shrink-0 animate-pulse" />
                  <div>
                    <div className="font-bold text-red-300">RED: Extreme Emergency Action Required</div>
                    <p className="text-slate-400 mt-0.5">Extreme heatwave persisting &gt;2 days or WBGT &gt;32.2°C. High probability of fatal heat stroke across all age groups.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-950/60 to-purple-950/40 border border-indigo-500/30 space-y-3 text-xs">
              <h3 className="font-bold text-indigo-300 flex items-center gap-2">
                <Zap className="w-4 h-4 text-indigo-400" />
                <span>Diurnal Heat Entrapment</span>
              </h3>
              <p className="text-slate-300 leading-relaxed">
                In metropolitan cities, heatwaves are not just an afternoon hazard. Concrete and tar store sensible heat during the day and discharge it back between 8:00 PM and 2:00 AM, elevating midnight minimum temperatures above 26°C. The human cardiovascular system receives zero recovery window during sleep.
              </p>
            </div>
          </div>

        </div>
      )}

      {/* SECTION 2: URBAN CAUSES & PHYSICS */}
      {activeSection === 'causes' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">
              Why Cities Suffer More: The Physics of Urban Heat Generation
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
              Natural rural terrains with soil, grass, and tree canopies reflect light and continuously chill the air via plant perspiration. 
              Modern metropolitan centers replace this living blanket with artificial heat batteries that amplify regional climate warmth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {urbanCauses.map((cause, idx) => {
              const Icon = cause.icon;
              return (
                <div key={idx} className={`p-6 rounded-3xl border transition ${cause.color}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-2xl bg-black/40 border border-white/10">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-base font-extrabold text-white">{cause.title}</h3>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                          {cause.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {cause.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SECTION 3: CLINICAL SPECTRUM OF HARMS */}
      {activeSection === 'harms' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">
              Pathophysiology: How Hyperthermia Attacks the Human Body
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
              Heat illness is not a sudden accident—it is a progressive biological breakdown. 
              Inspect the five clinical phases of thermal decompensation from mild heat rash to fatal heat stroke.
            </p>
          </div>

          {/* Interactive Harm Stage Tabs */}
          <div className="flex overflow-x-auto gap-2 pb-2">
            {clinicalStages.map((stage, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedHarmStage(idx)}
                className={`px-4 py-3 rounded-2xl border text-xs font-bold shrink-0 transition flex flex-col items-start gap-1 ${
                  selectedHarmStage === idx
                    ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/30'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono opacity-80">{stage.stage}</span>
                  <span>{stage.title.split('(')[0]}</span>
                </div>
                <span className="text-[10px] font-mono opacity-75">{stage.coreTemp}</span>
              </button>
            ))}
          </div>

          {/* Detailed Stage Card */}
          {clinicalStages[selectedHarmStage] && (
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border-2 border-slate-800 space-y-6 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
                    {clinicalStages[selectedHarmStage].stage} • Pathological Breakdown
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">
                    {clinicalStages[selectedHarmStage].title}
                  </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${clinicalStages[selectedHarmStage].badgeColor}`}>
                    {clinicalStages[selectedHarmStage].severity}
                  </span>
                  <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-slate-800 text-slate-200 border border-slate-700">
                    Core Temp: {clinicalStages[selectedHarmStage].coreTemp}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Internal Physiological Mechanism
                    </h4>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {clinicalStages[selectedHarmStage].description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Recognizable Clinical Symptoms
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {clinicalStages[selectedHarmStage].symptoms.map((symp, i) => (
                        <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-200">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{symp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="p-5 rounded-2xl bg-red-950/30 border border-red-500/40 space-y-3">
                    <div className="text-xs font-mono font-bold text-red-400 uppercase flex items-center gap-1.5">
                      <HeartPulse className="w-4 h-4" />
                      <span>Immediate Medical & First-Aid Action</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {clinicalStages[selectedHarmStage].action}
                    </p>
                    {selectedHarmStage >= 3 && (
                      <button
                        onClick={onOpenPanicModal}
                        className="w-full mt-2 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs shadow-md transition flex items-center justify-center gap-2"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>Dispatch 108 Ambulance</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* SECTION 4: PRECAUTIONS & LIFE-HACKS */}
      {activeSection === 'precautions' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-2">
              Citizen, Worker & Commuter Life-Saving Precautions
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
              Practical scientific countermeasures for individuals, delivery gig-workers, drivers, and families facing extreme urban heat stress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {precautions.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-2xl bg-slate-800 border border-slate-700 ${p.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">{p.category}</h3>
                  </div>

                  <ul className="space-y-2.5">
                    {p.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SECTION 5: HEAT TRIAGE SELF-CHECK */}
      {activeSection === 'quiz' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6 animate-in fade-in duration-200">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
              Interactive Clinical Self-Assessment
            </span>
            <h2 className="text-2xl font-black text-white">
              Do You or Someone Near You Need Emergency Care?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Check all symptoms currently being experienced by the individual. 
              Our biometeorological algorithm will estimate the clinical urgency level.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              { key: 'sweating', label: 'Person has stopped sweating, skin is burning hot and dry' },
              { key: 'confusion', label: 'Confusion, slurred speech, delirium, or irrational behavior' },
              { key: 'dizziness', label: 'Severe dizziness, blackout, fainting, or inability to stand' },
              { key: 'headache', label: 'Pounding throbbing headache with nausea or vomiting' },
              { key: 'outdoorExertion', label: 'Active outdoor labor or driving for >2 hours without water' }
            ].map((q) => (
              <button
                key={q.key}
                type="button"
                onClick={() => toggleQuiz(q.key)}
                className={`p-4 rounded-2xl border text-left text-xs font-semibold transition flex items-center justify-between gap-3 ${
                  selectedRiskScore[q.key]
                    ? 'bg-red-950/60 border-red-500 text-white'
                    : 'bg-slate-800/40 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span>{q.label}</span>
                <div className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 ${
                  selectedRiskScore[q.key]
                    ? 'bg-red-600 border-red-500 text-white'
                    : 'border-slate-700 bg-slate-900'
                }`}>
                  {selectedRiskScore[q.key] && <Check className="w-3 h-3" />}
                </div>
              </button>
            ))}
          </div>

          {/* Assessment Result */}
          <div className={`p-6 rounded-2xl border transition ${
            calculatedRiskCount >= 2
              ? 'bg-red-950/60 border-red-500/80 text-red-200'
              : calculatedRiskCount === 1
              ? 'bg-amber-950/40 border-amber-500/60 text-amber-200'
              : 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider">
                  {calculatedRiskCount >= 2 ? '🚨 HIGH PROBABILITY OF HEAT STROKE / EXHAUSTION' :
                   calculatedRiskCount === 1 ? '⚠️ MODERATE HEAT DEHYDRATION DETECTED' :
                   '✅ NO IMMEDIATE LIFE-THREATENING SYMPTOMS'}
                </div>
                <p className="text-xs mt-1 text-slate-300">
                  {calculatedRiskCount >= 2
                    ? 'The person requires immediate rapid cooling and medical evacuation. Do not delay.'
                    : calculatedRiskCount === 1
                    ? 'Move person immediately to shaded rest, provide 500ml of ORS or majjige, and monitor for 20 minutes.'
                    : 'Maintain regular hydration (250ml water every 30 minutes) and use shaded routes.'}
                </p>
              </div>

              {calculatedRiskCount >= 2 && (
                <button
                  onClick={onOpenPanicModal}
                  className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs shadow-lg shadow-red-600/40 shrink-0 flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>TRIGGER SOS (CALL 108)</span>
                </button>
              )}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
