"""
HEATGUARD Municipal Circular & Heat Action Plan (HAP) Generator
Generates official administrative circulars for Bruhat Bengaluru Mahanagara Palike (BBMP)
and Karnataka State Disaster Management Authority (KSDMA).
Supports English (en), Kannada (kn), and Hindi (hi) with 1-click PDF export & language switching.
"""

from typing import Dict, Any, List
import datetime

CIRCULAR_CONTENT = {
    "en": {
        "title": "OFFICIAL CIRCULAR - BBMP HEAT ACTION PLAN",
        "state_emblem": "GOVERNMENT OF KARNATAKA",
        "bbmp_title": "BRUHAT BENGALURU MAHANAGARA PALIKE (BBMP)",
        "dept_title": "DISASTER MANAGEMENT CELL & CHIEF HEALTH DIRECTORATE",
        "sub_address": "N.R. Square, Bengaluru - 560002 | Ref: Disaster Management Act, 2005 (Sec 30/34)",
        "order_no_lbl": "Order No:",
        "date_lbl": "Date of Issue:",
        "classification_lbl": "Classification:",
        "classification_val": "EXTREME EMERGENCY (HEATWAVE LEVEL-3 TRIGGER)",
        "subject": "SUBJECT: MANDATORY ENFORCEMENT OF HEAT ACTION PLAN (HAP) PROTOCOLS & PUBLIC HEALTH INTERVENTIONS IN HIGH-RISK BBMP WARDS UNDER SEVERE WET-BULB THERMAL STRESS.",
        "preamble": "Pursuant to real-time biometeorological telemetric ingestion and the HEATGUARD Predictive Epidemiological System, the Outdoor Wet-Bulb Globe Temperature (WBGT) across identified industrial and high-density zones has breached the statutory safety threshold of 32.2°C, with localized surges exceeding 34.8°C. Epidemiological modeling projects an acute hospital admission surge of +28% to +42% over the next 72 hours.",
        "annexure_title": "ANNEXURE A: HIGH-VULNERABILITY WARD SURGE DIRECTIVES",
        "th_ward": "BBMP Ward & Zone",
        "th_temp": "Ambient Temp",
        "th_wbgt": "WBGT (Heat Stress)",
        "th_surge": "Proj. Hospital Surge",
        "th_beds": "Surge Beds Required",
        "th_status": "Alert Status",
        "sec1_title": "SECTION 1: MANDATORY EXECUTIVE DIRECTIVES (DISASTER MANAGEMENT ACT)",
        "directives": [
            "<strong>Labor & Construction Stoppage:</strong> All ongoing construction projects, road works, and heavy outdoor manual labor across Peenya (BBMP-41), Shivajinagar (BBMP-138), and Whitefield (BBMP-85) are hereby ordered to <strong>cease operations between 11:30 AM and 04:00 PM</strong> daily until further review. Non-compliance shall attract penal action under Section 51 of the Disaster Management Act.",
            "<strong>Emergency Drinking Water Mobilization:</strong> The Chief Engineer, BWSSB, is directed to deploy <strong>25 additional Cauvery water bowsers</strong> immediately to Majestic Bus Interchange, Kalasipalya, and Peenya labor chowks with free chilled drinking water distribution.",
            "<strong>Hospital Surge Capacity:</strong> Medical Superintendents of KC General Hospital, Bowring & Lady Curzon Hospital, and Victoria Hospital shall immediately mobilize <strong>25 dedicated heat-stroke beds per facility</strong> equipped with IV normal saline, ice packs, and oral rehydration salts (ORS).",
            "<strong>BBMP Indira Canteen Activation:</strong> All 175+ Indira Canteens across Bengaluru are designated as <strong>Official Public Heat Respite & Cooling Centers</strong>. Canteens shall remain open continuously from 07:30 AM to 08:30 PM with free drinking water and functional air-coolers/fans.",
            "<strong>Gig-Worker Safety Mandate:</strong> E-commerce and food delivery aggregators (Swiggy, Zomato, Zepto, Blinkit, Amazon) are instructed to enforce mandatory 15-minute rest intervals every hour for delivery executives between 12:00 PM and 04:00 PM."
        ],
        "sec2_title": "SECTION 2: METEOROLOGICAL ETIOLOGY & CLINICAL HARM SPECTRUM",
        "causes_title": "A. Urban Thermodynamic Causes:",
        "causes_body": "The critical biometeorological conditions in Bengaluru are induced by a convergence of anticyclonic boundary-layer subsidence, high solar irradiance (>850 W/m²), and the <strong>Urban Heat Island (UHI) Effect</strong>. Dense impervious surfaces (asphalt albedo 0.10–0.15, dense concrete masonry) store substantial shortwave solar radiation during daylight hours and release it as continuous nocturnal longwave sensible heat flux, preventing nighttime ambient cooling. Coupled with the depletion of vegetative canopies (reduced evapotranspiration) and localized anthropogenic emissions from vehicular congestion, the <strong>Wet-Bulb Globe Temperature (WBGT)</strong> exceeds physiological human thermodynamic equilibrium thresholds.",
        "harms_title": "B. Clinical Spectrum of Heat Illness & Physiological Harms:",
        "harms_list": [
            "<strong>Heat Cramps (Mild):</strong> Profuse diaphoresis causing acute water and sodium depletion, producing painful, involuntary contractions in large skeletal muscle groups.",
            "<strong>Heat Syncope (Mild to Moderate):</strong> Orthostatic pooling of peripheral blood due to intense cutaneous vasodilation, causing transient cerebral hypoxia and sudden fainting episodes.",
            "<strong>Heat Exhaustion (Moderate to Severe):</strong> Core body temperature rises to 38.0°C–40.0°C. Characterized by profuse perspiration, severe cephalalgia (headache), vertigo, nausea, tachycardia, tachypnea, and hypotension.",
            "<strong>Heat Stroke (CRITICAL MEDICAL EMERGENCY):</strong> Core body temperature accelerates past <strong>40.5°C (104.9°F)</strong> with failure of thermoregulatory homeostasis. Manifests through central nervous system dysfunction, delirium, seizures, anhidrosis (cessation of sweating), multi-organ failure, rhabdomyolysis, and acute kidney injury. Fatality risk reaches 40%–70% without immediate immersion in ice baths and rapid emergency intervention."
        ],
        "sec3_title": "SECTION 3: MANDATORY CITIZEN PRECAUTIONS & WORKER MITIGATION PROTOCOLS",
        "th_domain": "Target Domain",
        "th_dos": "Mandatory Life-Saving Actions (DOs)",
        "th_donts": "Prohibited Behaviors (DON'Ts)",
        "precautions_rows": [
            ("Hydration & Electrolytes", "Drink 3.5 to 4.5 liters of clean water daily. Consume natural electrolytes: tender coconut water, buttermilk (majjige), lemon water with salt, and WHO-formula ORS solution even without thirst sensation.", "Do NOT consume alcohol, aerated sugary soft drinks, or excessive caffeinated beverages, which accelerate systemic dehydration."),
            ("Outdoor Commuters & Drivers", "Navigate via cool canopy-shaded transit routes. Utilize reflective vehicle windshield screens. Schedule mandatory 15-minute rest breaks in shaded zones or Indira Canteen cooling centers every 60 minutes.", "Do NOT remain stationary in parked unventilated motor vehicles under direct sunlight. Never leave children or pets inside locked cars."),
            ("Clothing & Sun Protection", "Wear lightweight, loose-fitting, light-colored, breathable cotton garments. Wear wide-brimmed hats, carry umbrellas, and wear UV400-rated sunglasses when outdoors.", "Avoid dark synthetic, tight-fitting fabrics (polyester/nylon) that trap sensible heat and prevent dermal perspiration evaporation."),
            ("Vulnerable Demographics", "Senior citizens (65+), infants, pregnant mothers, and individuals with cardiovascular or renal comorbidities must remain inside ventilated, shaded rooms between 11:30 AM and 04:00 PM.", "Do NOT engage in strenuous physical exercise or heavy manual exertion during peak solar irradiance hours."),
            ("Emergency SOS Protocol", "Immediately dial <strong>108 (State Ambulance Emergency Service)</strong> if any individual exhibits confusion, slurred speech, unconsciousness, or skin that feels burning hot and dry. Apply cold wet towels to the neck, groin, and axillae while awaiting emergency dispatch.", "Do NOT administer oral fluids to an unconscious or vomiting patient to prevent acute pulmonary aspiration.")
        ],
        "sig1_name": "(Dr. K. V. Trilok Chandra, IAS)",
        "sig1_title": "Special Commissioner (Health)",
        "sig1_dept": "Bruhat Bengaluru Mahanagara Palike",
        "sig2_name": "(Tushar Giri Nath, IAS)",
        "sig2_title": "Chief Commissioner & Chairman, DDMA",
        "sig2_dept": "Bruhat Bengaluru Mahanagara Palike",
        "print_btn": "🖨️ Print / Save as PDF",
        "lang_switch_lbl": "Language / ಭಾಷೆ / भाषा:"
    },
    "kn": {
        "title": "ಅಧಿಕೃತ ಸುತ್ತೋಲೆ - ಬಿಬಿಎಂಪಿ ಬಿಸಿಗಾಳಿ ಕ್ರಿಯಾ ಯೋಜನೆ (HAP)",
        "state_emblem": "ಕರ್ನಾಟಕ ಸರ್ಕಾರ",
        "bbmp_title": "ಬೃಹತ್ ಬೆಂಗಳೂರು ಮಹಾನಗರ ಪಾಲಿಕೆ (ಬಿಬಿಎಂಪಿ)",
        "dept_title": "ವಿಪತ್ತು ನಿರ್ವಹಣಾ ಕೋಶ ಮತ್ತು ಮುಖ್ಯ ಆರೋಗ್ಯ ನಿರ್ದೇಶನಾಲಯ",
        "sub_address": "ಎನ್.ಆರ್. ಚೌಕ, ಬೆಂಗಳೂರು - 560002 | ಉಲ್ಲೇಖ: ವಿಪತ್ತು ನಿರ್ವಹಣಾ ಕಾಯ್ದೆ, 2005 (ಸೆಕ್ಷನ್ 30/34)",
        "order_no_lbl": "ಆದೇಶ ಸಂಖ್ಯೆ:",
        "date_lbl": "ಹೊರಡಿಸಿದ ದಿನಾಂಕ:",
        "classification_lbl": "ವರ್ಗೀಕರಣ:",
        "classification_val": "ತೀವ್ರ ತುರ್ತು ಪರಿಸ್ಥಿತಿ (ಬಿಸಿಗಾಳಿ ಹಂತ-3 ರೆಡ್ ಅಲರ್ಟ್)",
        "subject": "ವಿಷಯ: ತೀವ್ರ ವೆಟ್-ಬಲ್ಬ್ ಉಷ್ಣ ಒತ್ತಡದ ಹಿನ್ನೆಲೆಯಲ್ಲಿ ಹೆಚ್ಚಿನ ಅಪಾಯವಿರುವ ಬಿಬಿಎಂಪಿ ವಾರ್ಡ್‌ಗಳಲ್ಲಿ ಬಿಸಿಗಾಳಿ ಕ್ರಿಯಾ ಯೋಜನೆ (HAP) ನಿಯಮಾವಳಿಗಳು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಆರೋಗ್ಯ ಕ್ರಮಗಳ ಕಡ್ಡಾಯ ಜಾರಿ ಕುರಿತು.",
        "preamble": "ನೈಜ-ಸಮಯದ ಬಯೋಮೀಟಿಯೊರೊಲಾಜಿಕಲ್ ಟೆಲಿಮೆಟ್ರಿ ಮತ್ತು ಹೀಟ್‌ಗಾರ್ಡ್ ಮುನ್ಸೂಚನಾ ಸಾಂಕ್ರಾಮಿಕ ರೋಗಶಾಸ್ತ್ರ ವ್ಯವಸ್ಥೆಯ ಪ್ರಕಾರ, ಕೈಗಾರಿಕಾ ಮತ್ತು ಜನದಟ್ಟಣೆಯ ವಲಯಗಳಲ್ಲಿ ಹೊರಾಂಗಣ ವೆಟ್-ಬಲ್ಬ್ ಗ್ಲೋಬ್ ತಾಪಮಾನವು (WBGT) 32.2°C ನ ಶಾಸನಬದ್ಧ ಮಿತಿಯನ್ನು ಮೀರಿದ್ದು, ಸ್ಥಳೀಯವಾಗಿ 34.8°C ಗಿಂತ ಹೆಚ್ಚಾಗಿದೆ. ಮುಂದಿನ 72 ಗಂಟೆಗಳಲ್ಲಿ ಆಸ್ಪತ್ರೆ ದಾಖಲಾತಿಯು +28% ರಿಂದ +42% ವರೆಗೆ ತೀವ್ರವಾಗಿ ಹೆಚ್ಚಾಗುವ ನಿರೀಕ್ಷೆಯಿದೆ.",
        "annexure_title": "ಅನುಬಂಧ ಎ: ಹೆಚ್ಚಿನ ಅಪಾಯವಿರುವ ವಾರ್ಡ್‌ಗಳ ವಿವರ ಮತ್ತು ತುರ್ತು ನಿರ್ದೇಶನಗಳು",
        "th_ward": "ಬಿಬಿಎಂಪಿ ವಾರ್ಡ್ ಮತ್ತು ವಲಯ",
        "th_temp": "ವಾತಾವರಣ ತಾಪಮಾನ",
        "th_wbgt": "ಡಬ್ಲ್ಯೂಬಿಜಿಟಿ (ಶಾಖ ಒತ್ತಡ)",
        "th_surge": "ನಿರೀಕ್ಷಿತ ಆಸ್ಪತ್ರೆ ಹೆಚ್ಚಳ",
        "th_beds": "ಹೆಚ್ಚುವರಿ ತುರ್ತು ಬೆಡ್‌ಗಳು",
        "th_status": "ಎಚ್ಚರಿಕೆಯ ಸ್ಥಿತಿ",
        "sec1_title": "ವಿಭಾಗ 1: ಕಡ್ಡಾಯ ಕಾರ್ಯಾಂಗ ನಿರ್ದೇಶನಗಳು (ವಿಪತ್ತು ನಿರ್ವಹಣಾ ಕಾಯ್ದೆ)",
        "directives": [
            "<strong>ಕಾರ್ಮಿಕ ಮತ್ತು ನಿರ್ಮಾಣ ಕಾರ್ಯ ಸ್ಥಗಿತ:</strong> ಪೀಣ್ಯ (ವಾರ್ಡ್ 41), ಶಿವಾಜಿನಗರ (ವಾರ್ಡ್ 138), ಮತ್ತು ವೈಟ್‌ಫೀಲ್ಡ್ (ವಾರ್ಡ್ 85) ಸೇರಿದಂತೆ ಎಲ್ಲಾ ಸಾರ್ವಜನಿಕ ಹಾಗೂ ಖಾಸಗಿ ನಿರ್ಮಾಣ ಕಾಮಗಾರಿಗಳು, ರಸ್ತೆ ಕೆಲಸಗಳು ಮತ್ತು ಹೊರಾಂಗಣ ಶ್ರಮದ ಕೆಲಸಗಳನ್ನು ಪ್ರತಿದಿನ <strong>ಬೆಳಿಗ್ಗೆ 11:30 ರಿಂದ ಮಧ್ಯಾಹ್ನ 04:00 ರವರೆಗೆ ಕಡ್ಡಾಯವಾಗಿ ಸ್ಥಗಿತಗೊಳಿಸಲು ಆದೇಶಿಸಲಾಗಿದೆ</strong>. ಉಲ್ಲಂಘಿಸುವವರ ವಿರುದ್ಧ ವಿಪತ್ತು ನಿರ್ವಹಣಾ ಕಾಯ್ದೆಯ ಸೆಕ್ಷನ್ 51 ರ ಅಡಿಯಲ್ಲಿ ಕಠಿಣ ಕ್ರಮ ಕೈಗೊಳ್ಳಲಾಗುವುದು.",
            "<strong>ತುರ್ತು ಕುಡಿಯುವ ನೀರಿನ ಪೂರೈಕೆ:</strong> ಬಿಡಬ್ಲ್ಯೂಎಸ್‌ಎಸ್‌ಬಿ ಮುಖ್ಯ ಎಂಜಿನಿಯರ್‌ಗೆ ಮೆಜೆಸ್ಟಿಕ್ ಬಸ್ ನಿಲ್ದಾಣ, ಕಲಾಸಿಪಾಳ್ಯ, ಪೀಣ್ಯ ಕಾರ್ಮಿಕ ಚೌಕಗಳಲ್ಲಿ ತಕ್ಷಣವೇ <strong>25 ಹೆಚ್ಚುವರಿ ಕಾವೇರಿ ನೀರಿನ ಬೌಸರ್‌ಗಳನ್ನು</strong> ನಿಯೋಜಿಸಿ ಉಚಿತ ತಣ್ಣೀರು ವಿತರಿಸಲು ಆದೇಶಿಸಲಾಗಿದೆ.",
            "<strong>ಆಸ್ಪತ್ರೆಗಳ ಸನ್ನದ್ಧತೆ ಮತ್ತು ಹೀಟ್ ಬೆಡ್‌ಗಳು:</strong> ಕೆ.ಸಿ. ಜನರಲ್ ಆಸ್ಪತ್ರೆ, ಬೌರಿಂಗ್ ಮತ್ತು ಲೇಡಿ ಕರ್ಜನ್ ಆಸ್ಪತ್ರೆ, ಹಾಗೂ ವಿಕ್ಟೋರಿಯಾ ಆಸ್ಪತ್ರೆಗಳ ಮುಖ್ಯಸ್ಥರು ತಕ್ಷಣವೇ <strong>ತಲಾ 25 ಮೀಸಲಾದ ಹೀಟ್-ಸ್ಟ್ರೋಕ್ ತುರ್ತು ಬೆಡ್‌ಗಳನ್ನು</strong> ಐವಿ ಸಲೈನ್, ಐಸ್ ಪ್ಯಾಕ್‌ಗಳು ಮತ್ತು ಓಆರ್‌ಎಸ್‌ನೊಂದಿಗೆ ಸಜ್ಜುಗೊಳಿಸಬೇಕು.",
            "<strong>ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್ ಶೀತಲ ಕೇಂದ್ರಗಳನ್ನಾಗಿ ಪರಿವರ್ತನೆ:</strong> ಬೆಂಗಳೂರಿನ ಎಲ್ಲಾ 175+ ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್‌ಗಳನ್ನು <strong>ಅಧಿಕೃತ ಸಾರ್ವಜನಿಕ ತಂಪು ವಿಶ್ರಾಂತಿ ಕೇಂದ್ರಗಳನ್ನಾಗಿ</strong> ಘೋಷಿಸಲಾಗಿದೆ. ಕ್ಯಾಂಟೀನ್‌ಗಳು ಬೆಳಿಗ್ಗೆ 07:30 ರಿಂದ ರಾತ್ರಿ 08:30 ರವರೆಗೆ ನಿರಂತರವಾಗಿ ತೆರೆದಿದ್ದು, ಉಚಿತ ಕುಡಿಯುವ ನೀರು ಮತ್ತು ಫ್ಯಾನ್‌ಗಳ ಸೌಲಭ್ಯ ಒದಗಿಸಬೇಕು.",
            "<strong>ಡೆಲಿವರಿ ರೈಡರ್ಸ್ ಮತ್ತು ಗಿಗ್-ವರ್ಕರ್ಸ್ ಸುರಕ್ಷತೆ:</strong> ಸ್ವಿಗ್ಗಿ, ಜೊಮಾಟೊ, ಜೆಪ್ಟೊ, ಬ್ಲಿಂಕಿಟ್, ಅಮೆಜಾನ್ ಮುಂತಾದ ಎಲ್ಲಾ ಇ-ಕಾಮರ್ಸ್ ಮತ್ತು ಡೆಲಿವರಿ ಕಂಪನಿಗಳು ಮಧ್ಯಾಹ್ನ 12:00 ರಿಂದ 04:00 ರವರೆಗೆ ತಮ್ಮ ಡೆಲಿವರಿ ಸಿಬ್ಬಂದಿಗೆ ಪ್ರತಿ ಗಂಟೆಗೆ ಕಡ್ಡಾಯವಾಗಿ 15 ನಿಮಿಷಗಳ ನೆರಳಿನ ವಿಶ್ರಾಂತಿ ಒದಗಿಸಬೇಕು."
        ],
        "sec2_title": "ವಿಭಾಗ 2: ಹವಾಮಾನ ಕಾರಣಗಳು ಮತ್ತು ಕ್ಲಿನಿಕಲ್ ಹಾನಿಯ ವೈಜ್ಞಾನಿಕ ವಿವರಣೆ",
        "causes_title": "ಎ. ನಗರ ಉಷ್ಣತೆಯ ಭೌತಿಕ ಕಾರಣಗಳು:",
        "causes_body": "ಬೆಂಗಳೂರಿನಲ್ಲಿ ತೀವ್ರ ಉಷ್ಣತೆಯು ಹೆಚ್ಚಿನ ಸೌರ ವಿಕಿರಣ (>850 W/m²) ಮತ್ತು <strong>ನಗರ ಶಾಖ ದ್ವೀಪ (Urban Heat Island - UHI) ಪರಿಣಾಮದಿಂದ</strong> ಉಂಟಾಗಿದೆ. ಡಾಂಬರು ರಸ್ತೆಗಳು ಮತ್ತು ಕಾಂಕ್ರೀಟ್ ಕಟ್ಟಡಗಳು ಹಗಲಿನಲ್ಲಿ ಸೌರ ಶಾಖವನ್ನು ಹೀರಿಕೊಂಡು ರಾತ್ರಿಯಿಡೀ ಹೊರಸೂಸುತ್ತವೆ, ಇದರಿಂದಾಗಿ ರಾತ್ರಿಯ ತಾಪಮಾನವು ತಂಪಾಗುವುದಿಲ್ಲ. ಇದರೊಂದಿಗೆ ಮರಗಳ ಹೊದಿಕೆಯ ನಾಶ (ಕಡಿಮೆ ಬಾಷ್ಪೀಕರಣ) ಮತ್ತು ವಾಹನಗಳ ಎಸಿ ಹೊರಸೂಸುವಿಕೆ ಸೇರಿಕೊಂಡು <strong>ವೆಟ್-ಬಲ್ಬ್ ಗ್ಲೋಬ್ ತಾಪಮಾನವನ್ನು (WBGT)</strong> ಅಪಾಯಕಾರಿ ಮಟ್ಟಕ್ಕೆ ಹೆಚ್ಚಿಸಿವೆ.",
        "harms_title": "ಬಿ. ಶಾಖದ ಕಾಯಿಲೆಗಳು ಮತ್ತು ಶಾರೀರಿಕ ಹಾನಿಯ ಹಂತಗಳು:",
        "harms_list": [
            "<strong>ಹೀಟ್ ರಾಶ್ (ಬೆವರುಸಾಲೆ - ಸೌಮ್ಯ):</strong> ಬೆವರು ಗ್ರಂಥಿಗಳ ಕಟ್ಟುವಿಕೆಯಿಂದ ಚರ್ಮದ ಮೇಲೆ ಕೆಂಪು ಗುಳ್ಳೆಗಳು ಮತ್ತು ನವೆ ಉಂಟಾಗುವುದು.",
            "<strong>ಹೀಟ್ ಕ್ರ್ಯಾಂಪ್ಸ್ (ಸ್ನಾಯು ಸೆಳೆತ):</strong> ವಿಪರೀತ ಬೆವರುವಿಕೆಯಿಂದ ಉಪ್ಪು ಮತ್ತು ನೀರಿನ ಅಂಶ ಕಡಿಮೆಯಾಗಿ ಕಾಲು ಮತ್ತು ಹೊಟ್ಟೆಯ ಸ್ನಾಯುಗಳಲ್ಲಿ ತೀವ್ರ ನೋವಿನ ಸೆಳೆತ ಉಂಟಾಗುವುದು.",
            "<strong>ಹೀಟ್ ಸಿಂಕೋಪ್ (ಮೂರ್ಛೆ / ತಲೆತಿರುಗುವಿಕೆ):</strong> ರಕ್ತನಾಳಗಳ ಹಿಗ್ಗುವಿಕೆಯಿಂದ ಮೆದುಳಿಗೆ ರಕ್ತ ಸಂಚಾರ ತಾತ್ಕಾಲಿಕವಾಗಿ ಕಡಿಮೆಯಾಗಿ ಹಠಾತ್ ಪ್ರಜ್ಞೆ ತಪ್ಪುವುದು.",
            "<strong>ಹೀಟ್ ಎಕ್ಸಾಷನ್ (ತೀವ್ರ ನಿಶ್ಯಕ್ತಿ):</strong> ದೇಹದ ತಾಪಮಾನ 38°C–40°C ಗೆ ಏರುವುದು, ಅತಿಯಾದ ಬೆವರು, ವಾಂತಿ, ತಲೆನೋವು, ವೇಗದ ನಾಡಿಮಿಡಿತ ಮತ್ತು ದೌರ್ಬಲ್ಯ.",
            "<strong>ಹೀಟ್ ಸ್ಟ್ರೋಕ್ (ಪ್ರಾಣಾಪಾಯದ ಸ್ಥಿತಿ):</strong> ದೇಹದ ತಾಪಮಾನವು <strong>40.5°C ಗಿಂತ ಹೆಚ್ಚಾಗುವುದು</strong>, ಬೆವರುವುದು ನಿಲ್ಲುವುದು (ಒಣ ಚರ್ಮ), ಮಾನಸಿಕ ಗೊಂದಲ, ನಡುಕ ಮತ್ತು ಮೂರ್ಛೆ. ತಕ್ಷಣ ಐಸ್ ನೀರಿನಲ್ಲಿ ತಂಪಾಗಿಸದಿದ್ದರೆ ಮತ್ತು ಆಸ್ಪತ್ರೆಗೆ ಸೇರಿಸದಿದ್ದರೆ ಅಂಗಾಂಗ ವೈಫಲ್ಯ ಮತ್ತು ಪ್ರಾಣಾಪಾಯ ಉಂಟಾಗಬಹುದು."
        ],
        "sec3_title": "ವಿಭಾಗ 3: ಕಡ್ಡಾಯ ನಾಗರಿಕ ಮುನ್ನೆಚ್ಚರಿಕೆಗಳು ಮತ್ತು ಕಾರ್ಮಿಕ ಸುರಕ್ಷತಾ ಕ್ರಮಗಳು",
        "th_domain": "ವಿಷಯ / ಕ್ಷೇತ್ರ",
        "th_dos": "ಕಡ್ಡಾಯವಾಗಿ ಮಾಡಬೇಕಾದ ಕ್ರಮಗಳು (ಮಾಡಬೇಕಾದುದು)",
        "th_donts": "ಮಾಡಬಾರದ ನಿಷೇಧಿತ ಕ್ರಮಗಳು (ಮಾಡಬಾರದು)",
        "precautions_rows": [
            ("ಜಲಸಂಚಯನ ಮತ್ತು ಲವಣಾಂಶ", "ದಿನಕ್ಕೆ ಕನಿಷ್ಠ 3.5 ರಿಂದ 4.5 ಲೀಟರ್ ಶುದ್ಧ ನೀರು ಕುಡಿಯಿರಿ. ಎಳನೀರು, ಮಜ್ಜಿಗೆ, ನಿಂಬೆ ಪಾನಕ ಮತ್ತು ಓಆರ್‌ಎಸ್ ದ್ರಾವಣವನ್ನು ನಿಯಮಿತವಾಗಿ ಸೇವಿಸಿ.", "ಆಲ್ಕೋಹಾಲ್, ಅತಿಯಾದ ಸಕ್ಕರೆಯುಕ್ತ ತಂಪು ಪಾನೀಯಗಳು ಮತ್ತು ಚಹಾ/ಕಾಫಿ ಕುಡಿಯಬೇಡಿ; ಇವು ದೇಹದಲ್ಲಿ ನಿರ್ಜಲೀಕರಣವನ್ನು ಹೆಚ್ಚಿಸುತ್ತವೆ."),
            ("ಪ್ರಯಾಣಿಕರು ಮತ್ತು ಚಾಲಕರು", "ಮರಗಳ ನೆರಳಿರುವ ತಂಪು ಮಾರ್ಗಗಳಲ್ಲಿ ಪ್ರಯಾಣಿಸಿ. ವಾಹನಗಳಲ್ಲಿ ಬಿಸಿಲ ಪರದೆಗಳನ್ನು ಬಳಸಿ. ಪ್ರತಿ 60 ನಿಮಿಷಕ್ಕೊಮ್ಮೆ ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್ ಅಥವಾ ನೆರಳಿನಲ್ಲಿ 15 ನಿಮಿಷ ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ.", "ನೇರ ಬಿಸಿಲಿನಲ್ಲಿ ನಿಲ್ಲಿಸಿದ ಮುಚ್ಚಿದ ವಾಹನಗಳಲ್ಲಿ ಕುಳಿತುಕೊಳ್ಳಬೇಡಿ. ಮಕ್ಕಳನ್ನು ಅಥವಾ ಸಾಕುಪ್ರಾಣಿಗಳನ್ನು ಲಾಕ್ ಮಾಡಿದ ಕಾರಿನಲ್ಲಿ ಬಿಡಬೇಡಿ."),
            ("ಉಡುಪು ಮತ್ತು ಬಿಸಿಲಿನಿಂದ ರಕ್ಷಣೆ", "ತಿಳಿ ಬಣ್ಣದ, ಸಡಿಲವಾದ ಹತ್ತಿ ಬಟ್ಟೆಗಳನ್ನು ಧರಿಸಿ. ಹೊರಗೆ ಹೋಗುವಾಗ ಅಗಲವಾದ ಟೋಪಿ, ಛತ್ರಿ ಮತ್ತು ಯುವಿ ಕನ್ನಡಕಗಳನ್ನು ಬಳಸಿ.", "ಗಾಢ ಬಣ್ಣದ ಅಥವಾ ದೇಹಕ್ಕೆ ಅಂಟಿಕೊಳ್ಳುವ ಸಿಂಥೆಟಿಕ್ (ಪಾಲಿಯೆಸ್ಟರ್/ನೈಲಾನ್) ಬಟ್ಟೆಗಳನ್ನು ಧರಿಸಬೇಡಿ; ಇವು ಶಾಖವನ್ನು ಹಿಡಿದಿಡುತ್ತವೆ."),
            ("ದುರ್ಬಲ ವರ್ಗದವರು", "ಹಿರಿಯ ನಾಗರಿಕರು (65+), ಮಕ್ಕಳು, ಗರ್ಭಿಣಿಯರು ಮತ್ತು ಹೃದ್ರೋಗಿಗಳು ಬೆಳಿಗ್ಗೆ 11:30 ರಿಂದ ಸಂಜೆ 04:00 ರವರೆಗೆ ಮನೆಯೊಳಗೆ ತಂಪಾದ ಜಾಗದಲ್ಲಿರಬೇಕು.", "ಗರಿಷ್ಠ ಬಿಸಿಲಿನ ಸಮಯದಲ್ಲಿ ಕಠಿಣ ದೈಹಿಕ ವ್ಯಾಯಾಮ ಅಥವಾ ಭಾರವಾದ ಕೆಲಸಗಳನ್ನು ಮಾಡಬೇಡಿ."),
            ("ತುರ್ತು ಎಸ್‌ಒಎಸ್ ಕ್ರಮ", "ಯಾರಿಗಾದರೂ ಪ್ರಜ್ಞೆ ತಪ್ಪಿದರೆ ಅಥವಾ ಚರ್ಮ ವಿಪರೀತ ಬಿಸಿಯಾಗಿ ಒಣಗಿದ್ದರೆ ತಕ್ಷಣ <strong>108 (ಆಂಬ್ಯುಲೆನ್ಸ್ ತುರ್ತು ಸೇವೆ)</strong> ಗೆ ಕರೆ ಮಾಡಿ. ಆಂಬ್ಯುಲೆನ್ಸ್ ಬರುವವರೆಗೆ ಕುತ್ತಿಗೆ, ಕಂಕುಳು ಮತ್ತು ತೊಡೆಯ ಭಾಗಕ್ಕೆ ತಣ್ಣೀರಿನ ಬಟ್ಟೆ ಹಾಕಿ ತಂಪಾಗಿಸಿ.", "ಪ್ರಜ್ಞೆ ತಪ್ಪಿದ ಅಥವಾ ವಾಂತಿ ಮಾಡುತ್ತಿರುವ ವ್ಯಕ್ತಿಗೆ ಬಲವಂತವಾಗಿ ನೀರು ಕುಡಿಸಬೇಡಿ.")
        ],
        "sig1_name": "(ಡಾ. ಕೆ. ವಿ. ತ್ರಿಲೋಕ್ ಚಂದ್ರ, ಐಎಎಸ್)",
        "sig1_title": "ವಿಶೇಷ ಆಯುಕ್ತರು (ಆರೋಗ್ಯ)",
        "sig1_dept": "ಬೃಹತ್ ಬೆಂಗಳೂರು ಮಹಾನಗರ ಪಾಲಿಕೆ",
        "sig2_name": "(ತುಷಾರ್ ಗಿರಿ ನಾಥ್, ಐಎಎಸ್)",
        "sig2_title": "ಮುಖ್ಯ ಆಯುಕ್ತರು ಮತ್ತು ಅಧ್ಯಕ್ಷರು, ಡಿಡಿಎಂಎ",
        "sig2_dept": "ಬೃಹತ್ ಬೆಂಗಳೂರು ಮಹಾನಗರ ಪಾಲಿಕೆ",
        "print_btn": "🖨️ ಮುದ್ರಿಸಿ / PDF ರೂಪದಲ್ಲಿ ಉಳಿಸಿ",
        "lang_switch_lbl": "Language / ಭಾಷೆ / भाषा:"
    },
    "hi": {
        "title": "आधिकारिक परिपत्र - बीबीएमपी हीट एक्शन प्लान (HAP)",
        "state_emblem": "कर्नाटक सरकार",
        "bbmp_title": "बृहत् बेंगलुरु महानगर पालिका (बीबीएमपी)",
        "dept_title": "आपदा प्रबंधन प्रकोष्ठ एवं मुख्य स्वास्थ्य निदेशालय",
        "sub_address": "एन.आर. स्क्वायर, बेंगलुरु - 560002 | संदर्भ: आपदा प्रबंधन अधिनियम, 2005 (धारा 30/34)",
        "order_no_lbl": "आदेश संख्या:",
        "date_lbl": "जारी करने की तिथि:",
        "classification_lbl": "वर्गीकरण:",
        "classification_val": "अति गंभीर आपातकाल (लू स्तर-3 रेड अलर्ट)",
        "subject": "विषय: गंभीर वेट-बल्ब हीट स्ट्रेस के तहत उच्च जोखिम वाले बीबीएमपी वार्डों में हीट एक्शन प्लान (HAP) प्रोटोकॉल और सार्वजनिक स्वास्थ्य आपातकालीन उपायों का अनिवार्य प्रवर्तन।",
        "preamble": "रियल-टाइम बायो-मौसम विज्ञान टेलीमेट्री और हीटगार्ड प्रेडिक्टिव एपिडेमियोलॉजिकल सिस्टम के अनुसार, चिह्नित औद्योगिक और उच्च घनत्व वाले क्षेत्रों में आउटडोर वेट-बल्ब ग्लोब तापमान (WBGT) 32.2°C की वैधानिक सुरक्षा सीमा को पार कर 34.8°C तक पहुंच गया है। अगले 72 घंटों में अस्पताल भर्ती में +28% से +42% की तीव्र वृद्धि का अनुमान है।",
        "annexure_title": "अनुलग्नक क: उच्च संवेदनशीलता वाले वार्डों का विवरण एवं आपात निर्देश",
        "th_ward": "बीबीएमपी वार्ड व जोन",
        "th_temp": "परिवेशी तापमान",
        "th_wbgt": "WBGT (लू तनाव)",
        "th_surge": "अनुमानित अस्पताल वृद्धि",
        "th_beds": "आवश्यक अतिरिक्त बेड",
        "th_status": "अलर्ट स्थिति",
        "sec1_title": "खंड 1: अनिवार्य कार्यकारी निर्देश (आपदा प्रबंधन अधिनियम)",
        "directives": [
            "<strong>श्रमिक व निर्माण कार्य पर रोक:</strong> पीण्या (वार्ड 41), शिवाजीनगर (वार्ड 138) और व्हाइटफील्ड (वार्ड 85) सहित सभी निर्माण कार्यों और भारी शारीरिक श्रम को प्रतिदिन <strong>पूर्वाह्न 11:30 बजे से अपराह्न 04:00 बजे तक अनिवार्य रूप से रोकने का आदेश दिया जाता है</strong>। आदेश का उल्लंघन करने पर आपदा प्रबंधन अधिनियम की धारा 51 के तहत दंडात्मक कार्रवाई की जाएगी।",
            "<strong>आपातकालीन पेयजल आपूर्ति:</strong> बीडब्ल्यूएसएसबी को मैजेस्टिक बस स्टैंड, कलासीपाल्या और पीण्या लेबर चौकों पर तुरंत <strong>25 अतिरिक्त कावेरी वाटर टैंकर</strong> तैनात कर मुफ्त ठंडा पानी वितरित करने का निर्देश दिया जाता है।",
            "<strong>अस्पताल आपातकालीन क्षमता:</strong> केसी जनरल अस्पताल, बॉरिंग एंड लेडी कर्जन अस्पताल और विक्टोरिया अस्पताल तुरंत <strong>25 समर्पित हीट-स्ट्रोक बेड</strong> आईवी सेलाइन, आइस पैक और ओआरएस के साथ तैयार रखेंगे।",
            "<strong>इंदिरा कैंटीन शेल्टर सक्रियण:</strong> बेंगलुरु की सभी 175+ इंदिरा कैंटीन को <strong>आधिकारिक सार्वजनिक शीतलन केंद्र</strong> घोषित किया जाता है। ये सुबह 07:30 से रात 08:30 बजे तक मुफ्त पेयजल और पंखों/कूलरों के साथ खुली रहेंगी।",
            "<strong>गिग-वर्कर सुरक्षा अधिदेश:</strong> स्विगी, जोमैटो, जेप्टो, ब्लिंकिट और अमेजन दोपहर 12:00 से 04:00 बजे के बीच अपने डिलीवरी कर्मियों को प्रति घंटे 15 मिनट का अनिवार्य विश्राम अंतराल प्रदान करेंगे।"
        ],
        "sec2_title": "खंड 2: मौसम विज्ञान संबंधी कारण और क्लिनिकल नुकसान का विवरण",
        "causes_title": "क. शहरी ताप वृद्धि के भौतिक कारण:",
        "causes_body": "बेंगलुरु में अत्यधिक गर्मी का कारण उच्च सौर विकिरण (>850 W/m²) और <strong>शहरी ताप द्वीप (Urban Heat Island - UHI) प्रभाव</strong> का संयोजन है। डामर की सड़कें और कंक्रीट इमारतें दिन में भारी सौर ऊर्जा अवशोषित कर रात में उत्सर्जित करती हैं, जिससे रात का तापमान ठंडा नहीं हो पाता। वृक्षों के आवरण में कमी और वाहनों व एसी से निकलने वाली गर्मी ने मिलकर <strong>वेट-बल्ब ग्लोब तापमान (WBGT)</strong> को मानवीय सीमा से अधिक बढ़ा दिया है।",
        "harms_title": "ख. लू से होने वाली बीमारियां और शारीरिक प्रभाव:",
        "harms_list": [
            "<strong>हीट रैश (घमौरियां - सामान्य):</strong> पसीने की नलियां बंद होने से त्वचा पर लाल दाने और खुजली होना।",
            "<strong>हीट क्रैम्प्स (मांसपेशियों में ऐंठन):</strong> अत्यधिक पसीने से नमक और पानी की कमी के कारण पैरों और पेट की मांसपेशियों में दर्दनाक खिंचाव होना।",
            "<strong>हीट सिंकोप (बेहोशी / चक्कर):</strong> रक्त वाहिकाओं के फैलने से मस्तिष्क में रक्त प्रवाह कम होना और खड़े होने पर अचानक चक्कर खाकर गिरना।",
            "<strong>हीट एग्जॉशन (गंभीर थकावट):</strong> शरीर का तापमान 38°C–40°C होना, भारी पसीना, उल्टी, तेज सिरदर्द, कमजोरी और तेज धड़कन।",
            "<strong>हीट स्ट्रोक (घातक आपातकाल):</strong> शरीर का तापमान <strong>40.5°C से अधिक होना</strong>, पसीना पूरी तरह बंद होना (सूखी गर्म त्वचा), मानसिक भ्रम, प्रलाप और अचेत होना। तुरंत बर्फ के पानी से ठंडा न करने पर मल्टी-ऑर्गन फेलियर और मृत्यु का खतरा रहता है।"
        ],
        "sec3_title": "खंड 3: अनिवार्य नागरिक सावधानियां और श्रमिक सुरक्षा दिशानिर्देश",
        "th_domain": "क्षेत्र / विषय",
        "th_dos": "अनिवार्य जीवन रक्षक उपाय (क्या करें)",
        "th_donts": "प्रतिबंधित गतिविधियां (क्या न करें)",
        "precautions_rows": [
            ("हाइड्रेशन व इलेक्ट्रोलाइट्स", "प्रतिदिन 3.5 से 4.5 लीटर स्वच्छ पानी पिएं। नारियल पानी, छाछ/मठ्ठा, नमक-नींबू पानी और डब्ल्यूएचओ-ओआरएस का नियमित सेवन करें।", "शराब, अत्यधिक शर्करा युक्त कोल्ड ड्रिंक और अत्यधिक चाय/कॉफी का सेवन न करें; ये निर्जलीकरण बढ़ाते हैं।"),
            ("यात्री व वाहन चालक", "छायादार ठंडे मार्गों का उपयोग करें। वाहनों में सनशेड लगाएं। प्रत्येक 60 मिनट में इंदिरा कैंटीन या छाया में 15 मिनट विश्राम करें।", "धूप में खड़ी बंद गाड़ी में न बैठें। बच्चों या पालतू जानवरों को बंद कार में अकेला न छोड़ें।"),
            ("पोशाक व धूप से बचाव", "हल्के रंग के, ढीले सूती कपड़े पहनें। धूप में निकलते समय चौड़ी टोपी, छाता और यूवी चश्मा लगाएं।", "गहरे रंग के या टाइट सिंथेटिक (पॉलिएस्टर/नायलॉन) कपड़े न पहनें, जो गर्मी को रोकते हैं।"),
            ("संवेदनशील नागरिक", "वरिष्ठ नागरिक (65+), छोटे बच्चे, गर्भवती महिलाएं व हृदय रोगी पूर्वाह्न 11:30 से अपराह्न 04:00 बजे तक घर के अंदर रहें।", "चरम दोपहर के समय भारी शारीरिक व्यायाम या कड़ी मेहनत न करें।"),
            ("आपातकालीन एसओएस", "यदि कोई व्यक्ति भ्रमित हो या अचेत हो जाए, तो तुरंत <strong>108 (एम्बुलेंस सेवा)</strong> पर कॉल करें। गर्दन और बगल पर ठंडा पानी या बर्फ लगाएं।", "बेहोश या उल्टी कर रहे व्यक्ति को जबरन पानी पिलाने का प्रयास न करें।")
        ],
        "sig1_name": "(डॉ. के. वी. त्रिलोक चंद्र, आईएएस)",
        "sig1_title": "विशेष आयुक्त (स्वास्थ्य)",
        "sig1_dept": "बृहत् बेंगलुरु महानगर पालिका",
        "sig2_name": "(तुषार गिरि नाथ, आईएएस)",
        "sig2_title": "मुख्य आयुक्त एवं अध्यक्ष, डीडीएमए",
        "sig2_dept": "बृहत् बेंगलुरु महानगर पालिका",
        "print_btn": "🖨️ प्रिंट करें / PDF सेव करें",
        "lang_switch_lbl": "Language / ಭಾಷೆ / भाषा:"
    }
}

def generate_bbmp_official_circular_html(
    ward_data: List[Dict[str, Any]],
    city_weather: Dict[str, Any],
    circular_no: str = "BBMP/DMA/HAP-2025/CR-104",
    language: str = "en",
    scenario: str = "LIVE"
) -> str:
    """
    Renders an authentic, printable government circular in official BBMP format in English, Kannada, or Hindi.
    """
    lang = language.lower() if language and language.lower() in CIRCULAR_CONTENT else "en"
    c = CIRCULAR_CONTENT[lang]

    now = datetime.datetime.now()
    date_str = now.strftime("%d %B %Y")
    time_str = now.strftime("%I:%M %p")

    # Filter critical & warning wards
    critical_wards = [w for w in ward_data if w.get("effective_alert_tier") in ["RED", "ORANGE"]]
    if not critical_wards:
        critical_wards = ward_data[:3]  # fallback to top 3 for preview

    crit_rows = ""
    for w in critical_wards:
        temp_val = w.get('microclimate', {}).get('temperature_c', 36.5)
        wbgt_val = w.get('microclimate', {}).get('wbgt_c', 33.2)
        surge_val = w.get('health_risk', {}).get('expected_surge_pct', 35)
        beds_val = w.get('health_risk', {}).get('additional_emergency_beds_needed', 15)
        tier_val = w.get('effective_alert_tier', 'RED')
        
        tier_label = tier_val
        if lang == "kn":
            tier_label = "ರೆಡ್ ಅಲರ್ಟ್ (ತೀವ್ರ)" if tier_val == "RED" else "ಆರೆಂಜ್ ಅಲರ್ಟ್ (ಎಚ್ಚರಿಕೆ)"
        elif lang == "hi":
            tier_label = "रेड अलर्ट (अति गंभीर)" if tier_val == "RED" else "ऑरेंज अलर्ट (गंभीर)"

        crit_rows += f"""
        <tr>
            <td style="border: 1px solid #333; padding: 6px; font-weight: bold;">{w.get('ward_id')} - {w.get('name')}</td>
            <td style="border: 1px solid #333; padding: 6px; text-align: center;">{temp_val}°C</td>
            <td style="border: 1px solid #333; padding: 6px; text-align: center; color: #b91c1c; font-weight: bold;">{wbgt_val}°C</td>
            <td style="border: 1px solid #333; padding: 6px; text-align: center; font-weight: bold;">+{surge_val}%</td>
            <td style="border: 1px solid #333; padding: 6px; text-align: center;">+{beds_val} Beds</td>
            <td style="border: 1px solid #333; padding: 6px; color: #b91c1c; font-weight: bold;">{tier_label}</td>
        </tr>
        """

    directives_html = "".join([f"<li>{d}</li>" for d in c["directives"]])
    harms_html = "".join([f"<li>{h}</li>" for h in c["harms_list"]])

    precautions_html = ""
    for domain, dos, donts in c["precautions_rows"]:
        precautions_html += f"""
        <tr>
            <td><strong>{domain}</strong></td>
            <td>{dos}</td>
            <td>{donts}</td>
        </tr>
        """

    html = f"""<!DOCTYPE html>
<html lang="{lang}">
<head>
    <meta charset="UTF-8">
    <title>{c['title']}</title>
    <style>
        body {{
            font-family: 'Times New Roman', 'Noto Sans Kannada', 'Noto Sans Devanagari', Times, serif;
            color: #111;
            background: #fff;
            padding: 30px;
            max-width: 860px;
            margin: auto;
            line-height: 1.45;
        }}
        .header {{
            text-align: center;
            border-bottom: 2px solid #000;
            padding-bottom: 12px;
            margin-bottom: 20px;
        }}
        .emblem {{
            font-size: 13px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
        }}
        .bbmp-title {{
            font-size: 20px;
            font-weight: bold;
            margin: 4px 0;
            color: #8b0000;
        }}
        .dept-title {{
            font-size: 14px;
            font-weight: bold;
        }}
        .meta-table {{
            width: 100%;
            margin-bottom: 15px;
            font-size: 13.5px;
        }}
        .meta-table td {{
            padding: 2px 0;
        }}
        .subject {{
            background: #f3f4f6;
            border-left: 4px solid #8b0000;
            padding: 10px;
            margin: 15px 0;
            font-size: 13.5px;
            font-weight: bold;
            line-height: 1.4;
        }}
        .data-table {{
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
            font-size: 13px;
        }}
        .data-table th {{
            background: #e5e7eb;
            border: 1px solid #333;
            padding: 7px;
            font-weight: bold;
        }}
        .directives ol {{
            padding-left: 20px;
            font-size: 13px;
        }}
        .directives li {{
            margin-bottom: 8px;
            line-height: 1.4;
        }}
        .signature-block {{
            margin-top: 35px;
            display: flex;
            justify-content: space-between;
        }}
        .sig {{
            text-align: center;
            width: 250px;
        }}
        .lang-btn {{
            text-decoration: none;
            padding: 6px 12px;
            font-size: 12px;
            font-weight: bold;
            border-radius: 4px;
            border: 1px solid #cbd5e1;
            background: #f8fafc;
            color: #1e293b;
            margin-left: 4px;
            cursor: pointer;
        }}
        .lang-btn.active {{
            background: #8b0000;
            color: white;
            border-color: #8b0000;
        }}
        @media print {{
            body {{ padding: 0; }}
            .no-print {{ display: none; }}
        }}
    </style>
</head>
<body>
    <div class="no-print" style="margin-bottom: 15px; display: flex; justify-content: space-between; align-items: center;">
        <div>
            <span style="font-size: 12px; font-weight: bold; color: #475569;">{c['lang_switch_lbl']}</span>
            <a href="?scenario={scenario}&language=en" class="lang-btn {'active' if lang == 'en' else ''}">English</a>
            <a href="?scenario={scenario}&language=kn" class="lang-btn {'active' if lang == 'kn' else ''}">ಕನ್ನಡ</a>
            <a href="?scenario={scenario}&language=hi" class="lang-btn {'active' if lang == 'hi' else ''}">हिन्दी</a>
        </div>
        <button onclick="window.print()" style="background: #b91c1c; color: white; border: none; padding: 8px 18px; font-size: 13px; font-weight: bold; cursor: pointer; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.15);">
            {c['print_btn']}
        </button>
    </div>

    <div class="header">
        <div class="emblem">{c['state_emblem']}</div>
        <div class="bbmp-title">{c['bbmp_title']}</div>
        <div class="dept-title">{c['dept_title']}</div>
        <div style="font-size: 12px; color: #444;">{c['sub_address']}</div>
    </div>

    <table class="meta-table">
        <tr>
            <td><strong>{c['order_no_lbl']}</strong> {circular_no}</td>
            <td style="text-align: right;"><strong>{c['date_lbl']}</strong> {date_str} ({time_str})</td>
        </tr>
        <tr>
            <td colspan="2"><strong>{c['classification_lbl']}</strong> <span style="color: #b91c1c; font-weight: bold;">{c['classification_val']}</span></td>
        </tr>
    </table>

    <div class="subject">
        {c['subject']}
    </div>

    <p style="font-size: 13px; text-align: justify;">
        {c['preamble']}
    </p>

    <div style="font-weight: bold; font-size: 13.5px; margin-top: 15px;">{c['annexure_title']}</div>
    <table class="data-table">
        <thead>
            <tr>
                <th>{c['th_ward']}</th>
                <th>{c['th_temp']}</th>
                <th>{c['th_wbgt']}</th>
                <th>{c['th_surge']}</th>
                <th>{c['th_beds']}</th>
                <th>{c['th_status']}</th>
            </tr>
        </thead>
        <tbody>
            {crit_rows}
        </tbody>
    </table>

    <div class="directives">
        <div style="font-weight: bold; font-size: 13.5px; margin-top: 15px; color: #111;">{c['sec1_title']}</div>
        <ol>
            {directives_html}
        </ol>
    </div>

    <div style="margin-top: 18px; border-top: 1px dashed #666; padding-top: 12px;">
        <div style="font-weight: bold; font-size: 13.5px; color: #8b0000; text-transform: uppercase;">
            {c['sec2_title']}
        </div>
        <div style="font-size: 12.5px; margin-top: 8px; text-align: justify; line-height: 1.45;">
            <strong>{c['causes_title']}</strong> {c['causes_body']}
        </div>
        <div style="font-size: 12.5px; margin-top: 8px; text-align: justify; line-height: 1.45;">
            <strong>{c['harms_title']}</strong>
            <ul style="margin: 6px 0; padding-left: 20px;">
                {harms_html}
            </ul>
        </div>
    </div>

    <div style="margin-top: 18px; border-top: 1px dashed #666; padding-top: 12px;">
        <div style="font-weight: bold; font-size: 13.5px; color: #1e3a8a; text-transform: uppercase;">
            {c['sec3_title']}
        </div>
        <table class="data-table" style="font-size: 12px;">
            <thead>
                <tr>
                    <th style="width: 25%;">{c['th_domain']}</th>
                    <th style="width: 40%;">{c['th_dos']}</th>
                    <th style="width: 35%;">{c['th_donts']}</th>
                </tr>
            </thead>
            <tbody>
                {precautions_html}
            </tbody>
        </table>
    </div>

    <div class="signature-block">
        <div class="sig">
            <div style="height: 30px;"></div>
            <div style="border-top: 1px solid #000; padding-top: 4px; font-weight: bold; font-size: 13px;">{c['sig1_name']}</div>
            <div style="font-size: 12px;">{c['sig1_title']}</div>
            <div style="font-size: 11px;">{c['sig1_dept']}</div>
        </div>
        <div class="sig">
            <div style="height: 30px;"></div>
            <div style="border-top: 1px solid #000; padding-top: 4px; font-weight: bold; font-size: 13px;">{c['sig2_name']}</div>
            <div style="font-size: 12px;">{c['sig2_title']}</div>
            <div style="font-size: 11px;">{c['sig2_dept']}</div>
        </div>
    </div>
</body>
</html>"""
    return html
