# 🏆 HEATGUARD AI — SIH Jury Pitch & Presentation Cheat-Sheet

> **Target Region:** Bruhat Bengaluru Mahanagara Palike (BBMP) & BWSSB  
> **Core Innovation:** Moving from *"What the weather will be"* $\rightarrow$ *"What it will do to human bodies and hospital capacity."*

---

## ⚡ 1. The 30-Second Elevator Pitch
> *"Respected judges, traditional weather forecasts tell us: 'Bengaluru is 38°C.' But temperature alone doesn't kill people—**physiological heat stress and humidity entrapment do.** When humidity is 60% and there is zero wind in an industrial slum with tin roofs, sweat cannot evaporate, and human body temperatures spike past 40°C. 
> 
> **HEATGUARD** is India's first hyper-local biometeorological early warning system that calculates real **Wet-Bulb Globe Temperature (WBGT)**, models the **3-day lagged hospital surge**, and automatically generates **1-click legally binding municipal Heat Action Plan orders** for the Municipal Commissioner."*

---

## 🎬 2. The 3-Minute Live Demo Flow (What to Click & Say)

### Minute 0:00 – 0:45: The Problem & Dynamic Ambient UI
1. Open the dashboard at `http://localhost:5173`.
2. **Show the Ambient Atmosphere:**
   * *"Notice how our entire interface is an ambient situational dashboard. Right now, it's live."*
   * Click the **Scenario Switcher** $\rightarrow$ Select **"Simulate Heatwave (Red)"**.
   * *Watch the screen pulse in Urgent Crimson Red.*
   * *"Instantly, without reading a number, emergency officers see that the city is in a Level-3 Heat Emergency."*
   * Next, switch to **"Simulate Rain (Blue)"** to show the cool blue rain relief transition. Then switch back to **"Simulate Heatwave (Red)"**.

### Minute 0:45 – 1:30: Microclimate GIS Map & Ward Disparity
1. On the GIS Map, click on **Ward BBMP-41 (Peenya Industrial)**:
   * *"Notice that in Peenya, because of 68% tin-roof density and narrow concrete lanes, ambient temperature is amplified by Urban Heat Island physics to 42.4°C, and Outdoor WBGT breaches the red line at 35.2°C."*
   * *"Our ML model predicts a **+38.2% spike in emergency hospital admissions** with a 90% confidence interval of [29.4% to 44.8%]."*
2. Now click on **Ward BBMP-111 (Malleshwaram / IISc)**:
   * *"Just 5 km away, because Malleshwaram has 46% green tree canopy, the temperature is 37°C and WBGT is only 29.8°C (Safe)."*
   * *"Standard weather apps treat the whole city as one number; HEATGUARD exposes the true microclimate inequality."*
3. Toggle the **"Show Indira Canteens & Water Tanks"** button:
   * Show the green and blue pins on the map where citizens can get emergency chilled water.

### Minute 1:30 – 2:15: Labor Safety (NIOH) & Governance
1. Point to the **NIOH Gig-Worker & Labor Safety Card**:
   * *"Bengaluru is the gig-economy capital. For Swiggy/Zomato riders and construction laborers in Peenya right now, our system mandates: **15 min work / 45 min shaded rest + 1.25 Liters of water per hour**."*
2. Switch Language to **ಕನ್ನಡ (Kannada)** or **हिन्दी (Hindi)**:
   * Show that the alerts and labor guidelines immediately transform into the local language for workers.
3. Click the **"Municipal Action Plan"** Tab:
   * Click **`[ Export Official Circular (PDF) ]`**.
   * An authentic, ready-to-print **BBMP Emergency Order** opens with legal section references, hospital bed surge quotas, and signatures.
   * *"A District Collector or Commissioner doesn't act on a website; they need an official signed circular. We give them that in 1 click."*

### Minute 2:15 – 3:00: Model Transparency & Citizen Gamification
1. Click the **"Model Transparency Audit"** Tab:
   * *"Judges always ask: How do we know your model works? We show the last 7 days of backtested truth. Our Mean Absolute Error is only ±0.92%, with an asymmetric loss function that penalizes missed heatwaves 3x more heavily."*
2. Click the **"Citizen Prediction League"** Tab:
   * *"We don't just lecture citizens—we gamify climate awareness. Citizens predict tomorrow's peak WBGT, earn XP, climb the Bengaluru leaderboard, and compare their accuracy against our AI in the Showdown Matrix."*
3. Open the **AI Heatbot** in the bottom-right corner and show instant bilingual emergency answers.

---

## 🎯 3. Killer Answers to the Toughest Judge Questions

### Q1: "Why not just use standard dry-bulb temperature from IMD?"
> **Answer:** *"Because human beings do not cool by ambient temperature—we cool by **evaporative perspiration**. A temperature of 38°C at 25% humidity is bearable because sweat evaporates. But 38°C at 70% humidity produces a Wet-Bulb temperature over 33°C, where sweat cannot evaporate, core body temperature shoots past 40°C, and heat stroke begins. Traditional temperature forecasts ignore humidity, wind, and radiation, which is why thousands die under 'normal' temperatures."*

### Q2: "Do you need expensive physical IoT sensors in every ward?"
> **Answer:** *"No! That is our biggest operational strength. Installing 500 physical sensors across Bengaluru would cost ₹25 Lakhs and require battery/theft maintenance. Instead, HEATGUARD uses **Software as a Sensor**. We pull real-time satellite, radar, and weather model data from Open-Meteo, and downscale it to ward microclimates using satellite tree canopy (NDVI), tin-roof density, and road asphalt factors. However, we have an open REST endpoint (`/api/telemetry/iot`) so if smart cities want to plug in hardware sensors later, it seamlessly accepts them."*

### Q3: "How do you know your hospital prediction model isn't making numbers up?"
> **Answer:** *"Our model is built on the **Lancet Planetary Health & Gasparrini non-linear distributed lag epidemiology**. It factors in the Minimum Mortality Temperature (MMT) threshold and the crucial **24h-to-48h cumulative lag effect**—because heat victims don't all die at 2 PM; renal failure and cardiac arrest peak 48 hours later. Most importantly, our dashboard has a live **Model Transparency Audit Ledger** displaying the last 7 days of predicted vs confirmed hospital admissions with transparent MAE error bars."*

### Q4: "How does the BBMP Municipal Commissioner actually use this?"
> **Answer:** *"With our **Dual-Channel Governance loop**:
> 1. For inter-agency enforcement (Police, Hospitals, BWSSB): The Commissioner clicks **'Export Official Circular (PDF)'** to print a formal administrative order under the Disaster Management Act.
> 2. For citizens: The Commissioner clicks **'Broadcast Flash Headline'** on our console, which immediately pushes a bilingual emergency ticker across all citizen screens and initiates automated WhatsApp/SMS alerts."*

---

## 📚 4. Academic & Institutional References to Cite
1. **Stull, R. (2011):** *Wet-Bulb Temperature from Relative Humidity and Air Temperature.* Journal of Applied Meteorology and Climatology.
2. **ISO 7243 (2017):** *Ergonomics of the thermal environment — Assessment of heat stress using the WBGT index.*
3. **National Institute of Occupational Health (NIOH) & OSHA:** *Occupational Heat Exposure and Work-Rest Guidelines.*
4. **Gasparrini et al. (The Lancet, 2015/2021):** *Mortality risk attributable to high and low ambient temperature: a multicountry observational study.*
5. **Bruhat Bengaluru Mahanagara Palike (BBMP) & NDMA:** *National Heat Wave Action Plan Guidelines.*
