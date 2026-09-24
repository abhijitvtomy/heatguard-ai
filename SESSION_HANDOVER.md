# HEATGUARD AI — Master Session Handover & State Briefing
**Smart India Hackathon (SIH) — Bengaluru (BBMP & BWSSB) Heatwave Warning Platform**  
*Previous Conversation Reference ID:* `a2fa0c8d-f92e-4827-a866-a4bcd2ee7c0c`  
*Generated on:* 2026-09-08

---

## 1. Live Deployment & Access Portfolio

| Component | Status | URL / Command |
| :--- | :--- | :--- |
| **🌐 Permanent Cloud Website** | **LIVE (Vercel)** | [https://heatguard-ai-pi.vercel.app/](https://heatguard-ai-pi.vercel.app/) |
| **⚙️ Cloud Backend API** | **LIVE (Render)** | [https://heatguard-ai-dwv8.onrender.com/](https://heatguard-ai-dwv8.onrender.com/) |
| **💻 Local Development Frontend** | **Active (Port 5173)** | `http://localhost:5173` or `http://10.40.237.1:5173` |
| **💻 Local Development Backend** | **Active (Port 8000)** | `http://127.0.0.1:8000` |
| **📱 Live Tunnel (Cloudflare)** | **Active (No Password)** | `https://protein-prominent-dealers-clause.trycloudflare.com` |
| **🐙 GitHub Repository** | **Synced (Main Branch)** | [https://github.com/abhijitvtomy/heatguard-ai](https://github.com/abhijitvtomy/heatguard-ai) |

---

## 2. Platform Architecture & Core Features

### A. Real Biometeorological Physics (`backend/app/physics.py`)
* **Stull (2011) Wet-Bulb ($T_w$):** Mathematical formula incorporating relative humidity and ambient temperature to establish the true human evaporative cooling limit.
* **ISO 7243 Outdoor WBGT:** Incorporates solar radiation ($T_g$) and wind cooling ($v$).
* **NOAA Rothfusz Heat Index:** Polynomial equation for apparent temperature.
* **NIOH/OSHA Work-Rest Cycles:** Dynamic labor safety cycles (e.g. 30 min work / 30 min rest in shade when WBGT > 32.5°C).
* **"False Relief" Anomaly Detection:** Flags post-monsoon drizzle where air temperature drops but humidity spikes to 85%+, suffocating perspiration and causing dangerous heat retention.

### B. Epidemiological ML Engine (`backend/app/ml_engine.py`)
* **Non-Linear Hospital Surge Model:** Models casualty spikes with cumulative **24-hour and 48-hour lag effects** (cardiovascular decompensation and kidney failure occur 1–2 days after peak heat).
* **Conformal 90% Confidence Intervals:** Calibrated lower and upper bounds (e.g. +38.2% surge [90% CI: +29.4% to +47.0%]).
* **XAI Feature Attribution:** Identifies top drivers (Night-time minimum temp > 24°C, elderly demographic density, tin-roof thermal trap).
* **7-Day Model Transparency Ledger:** Public backtest ledger comparing predictions to actual hospital records with RMSE = 1.42 and 94.2% empirical coverage.

### C. Hyper-Local Ward GIS Map (`frontend/src/components/WardMap.jsx`)
* **8 BBMP Wards:** Peenya (BBMP-41), Majestic (BBMP-138), Whitefield (BBMP-85), Malleshwaram (BBMP-111), Koramangala (BBMP-151), HSR (BBMP-174), Electronic City (BBMP-198), Yelahanka (BBMP-10).
* **Zero-Watermark OpenStreetMap:** Uses `tile.openstreetmap.org` with dark mode CSS inversion (`.dark-tiles`) with zero API keys or external subscription costs.
* **Interactive POIs:** GPS coordinates for BBMP Indira Canteens (Cooling Shelters) and BWSSB Cauvery Free Drinking Water Kiosks.

### D. Multi-Channel Municipal Dispatcher (`ActionPlanModal.jsx` & `main.py`)
* **Multi-Judge WhatsApp Dispatcher:** Deep-link (`wa.me`) transmission parsing Indian 10-digit formats with 1-tap direct dispatch buttons and rich Markdown alert formatting without saving contacts.
* **Universal On-Screen Dynamic QR Scanner:** Camera-scannable QR code immediately loading the formatted BBMP Heat Action Directive into WhatsApp on any smartphone.
* **1-Click Official Municipal Circular:** Gazette-formatted administrative heatwave order under Sec 30/34 of the Disaster Management Act, 2005 with full multilingual support (**English**, **Kannada**, **Hindi**) and 1-click printable PDF generation.
*(Note: External commercial SMS gateways like Fast2SMS were dropped due to DLT registration hurdles, carrier DND filtering, and balance dependencies).*

### E. Dual-Mode AI Heatbot Copilot (`chatbot.py` & `HeatbotModal.jsx`)
* **Citizen Mode & Officer Mode:** Trilingual support in English, Kannada (ಕನ್ನಡ), and Hindi (हिन्दी).
* **20+ Built-in Biometeorological Topics:** Covers symptoms, WHO homemade ORS recipe, WBGT vs temperature, gig-worker safety, water tanker triage, hospital bed allocation, and emergency helplines.
* **Embedded Action Shortcuts:** Direct buttons for *Dial 108 Emergency Ambulance*, *View Shelters on Map*, and *View Statutory Circular*.
* **Gemini LLM Fallback:** Calls Google Gemini Flash API when `GEMINI_API_KEY` is provided in `.env`.

---

## 3. Key Files & Structure

```
d:\sih\
├── backend/
│   ├── app/
│   │   ├── main.py               # FastAPI REST endpoints & CORS
│   │   ├── physics.py            # Stull Wet-Bulb, ISO 7243 WBGT, NIOH
│   │   ├── ml_engine.py          # Hospital surge prediction & XAI
│   │   ├── weather_service.py    # Open-Meteo live API ingestion & caching
│   │   ├── circular_generator.py # Gazette printable BBMP order (HTML/PDF)
│   │   ├── gamification.py       # Citizen Prediction League & Showdown
│   │   ├── chatbot.py            # AI Heatbot biometeorological engine
│   │   └── data/                 # GeoJSON wards & shelter coordinates
│   ├── requirements.txt          # Production dependencies
│   └── tests/test_physics.py     # 4/4 passing scientific benchmark tests
├── frontend/
│   ├── src/
│   │   ├── App.jsx               # Root layout, ambient aura, state management
│   │   ├── config.js             # Dual-mode API_BASE (local vs Vercel cloud)
│   │   ├── components/
│   │   │   ├── Navbar.jsx        # Scenario switcher, language, Judge Access
│   │   │   ├── WardMap.jsx       # Leaflet OpenStreetMap with dark tiles
│   │   │   ├── WardDossier.jsx   # Ward risk cards & biometeorological gauges
│   │   │   ├── ActionPlanModal.jsx # Multi-judge WhatsApp/SMS dispatcher
│   │   │   ├── JudgeAccessModal.jsx # Live on-screen presentation QR code
│   │   │   ├── AccuracyLedger.jsx# 7-day model transparency audit
│   │   │   ├── CitizenLeague.jsx # Prediction league, XP, leaderboard
│   │   │   ├── EmergencyBanner.jsx # Breaking municipal flash banner
│   │   │   └── HeatbotModal.jsx  # AI Heatbot drawer with action shortcuts
│   │   └── i18n/translations.js  # Full trilingual dictionary (EN, KN, HI)
│   └── vercel.json               # Cloud edge rewrite configuration
├── render.yaml                   # Infrastructure-as-code for Render cloud
├── start.bat                     # Windows 1-click startup script
├── PITCH_GUIDE.md                # 3-minute jury demo script & citations
└── SESSION_HANDOVER.md           # This document
```

---

## 4. How to Resume in Any New Conversation

When opening a new chat window, simply submit this prompt:

> *"Please read `d:\sih\SESSION_HANDOVER.md`. We are working on the HEATGUARD AI project. All background, live links, and codebase structure are detailed there. Let's continue."*
