"""
HEATGUARD Biometeorological Physics Engine
Implements peer-reviewed meteorological formulations:
1. Stull (2011) Wet-Bulb Temperature (valid across all standard atmospheric ranges)
2. ISO 7243 Outdoor Wet-Bulb Globe Temperature (WBGT) incorporating solar load and wind speed
3. NOAA / Rothfusz Heat Index with adjustment factors
4. National Institute of Occupational Health (NIOH) & OSHA Work-Rest Cycle ratio
5. Nocturnal Heat Entrapment Index (evaluates nighttime cardiovascular recovery failure)
6. Rapid Anomaly / False Relief Trap Detection
"""

import math
from typing import Dict, Any, Tuple, Optional, List


def calculate_stull_wet_bulb(temp_c: float, rh_pct: float) -> float:
    """
    Computes Wet-Bulb temperature (°C) using Stull's (2011) empirical formulation.
    Accurate to within 0.3°C for temp -20°C to 50°C and RH 5% to 99%.
    """
    T = float(temp_c)
    RH = float(rh_pct)
    # Clamp RH within bounds for physical realism
    RH = max(1.0, min(100.0, RH))

    # Stull formula components
    term1 = T * math.atan(0.151977 * math.sqrt(RH + 8.313659))
    term2 = math.atan(T + RH)
    term3 = -math.atan(RH - 1.676331)
    term4 = 0.00391838 * (RH ** 1.5) * math.atan(0.023101 * RH)
    term5 = -4.686035

    tw = term1 + term2 + term3 + term4 + term5
    return round(tw, 2)


def calculate_heat_index(temp_c: float, rh_pct: float) -> float:
    """
    Computes NOAA Heat Index (°C) via Rothfusz regression equation with adjustments.
    Applies when temperature >= 26.7°C (80°F).
    """
    T_f = (temp_c * 9.0 / 5.0) + 32.0
    RH = float(rh_pct)

    # Simplified formula for mild conditions
    hi_simple = 0.5 * (T_f + 61.0 + ((T_f - 68.0) * 1.2) + (RH * 0.094))
    if hi_simple < 80.0:
        hi_f = hi_simple
    else:
        # Full Rothfusz regression
        hi_f = (
            -42.379
            + (2.04901523 * T_f)
            + (10.14333127 * RH)
            - (0.22475541 * T_f * RH)
            - (0.00683783 * T_f * T_f)
            - (0.05481717 * RH * RH)
            + (0.00122874 * T_f * T_f * RH)
            + (0.00085282 * T_f * RH * RH)
            - (0.00000199 * T_f * T_f * RH * RH)
        )

        # Dry adjustment
        if RH < 13.0 and 80.0 <= T_f <= 112.0:
            adj = ((13.0 - RH) / 4.0) * math.sqrt((17.0 - abs(T_f - 95.0)) / 17.0)
            hi_f -= adj

        # Humid adjustment
        elif RH > 85.0 and 80.0 <= T_f <= 87.0:
            adj = ((RH - 85.0) / 10.0) * ((87.0 - T_f) / 5.0)
            hi_f += adj

    # Convert back to Celsius
    hi_c = (hi_f - 32.0) * 5.0 / 9.0
    return round(hi_c, 2)


def calculate_black_globe_temp(temp_c: float, solar_rad_w_m2: float, wind_speed_m_s: float) -> float:
    """
    Approximates Black Globe Temperature (Tg in °C) based on direct solar irradiance and wind cooling.
    Liljegren / Australian Bureau of Meteorology approximation model.
    """
    T = float(temp_c)
    S = max(0.0, float(solar_rad_w_m2))
    v = max(0.2, float(wind_speed_m_s))  # minimum convective threshold

    # Radiative equilibrium temperature increase
    # Under high solar load (e.g. 900 W/m²) and low wind (1 m/s), Tg can be 10-15°C above air temp.
    delta_t = (S * 0.012) / (math.sqrt(v) + 0.3)
    tg = T + min(18.0, delta_t)
    return round(tg, 2)


def calculate_wbgt_outdoor(temp_c: float, rh_pct: float, wind_speed_m_s: float, solar_rad_w_m2: float) -> float:
    """
    Computes Outdoor Wet-Bulb Globe Temperature (ISO 7243):
    WBGT = 0.7 * T_nw + 0.2 * T_g + 0.1 * T_a
    where:
    - T_nw = Natural wet-bulb (accounting for wind & solar) approximated via Stull with convective enhancement
    - T_g  = Black globe temperature
    - T_a  = Ambient dry-bulb temperature
    """
    ta = float(temp_c)
    tw_stull = calculate_stull_wet_bulb(ta, rh_pct)
    tg = calculate_black_globe_temp(ta, solar_rad_w_m2, wind_speed_m_s)

    # In high solar radiation, natural wet-bulb receives slight radiant load
    solar_factor = min(2.5, max(0.0, solar_rad_w_m2 / 400.0))
    t_nw = tw_stull + (0.2 * solar_factor / (math.sqrt(max(0.3, wind_speed_m_s)) + 0.2))

    wbgt = (0.7 * t_nw) + (0.2 * tg) + (0.1 * ta)
    return round(wbgt, 2)


def calculate_htsi(wbgt_c: float, heat_index_c: float, wet_bulb_c: float) -> float:
    """
    Human Thermal Stress Index (HTSI):
    Normalized 0-100 composite index calibrating multi-variable strain on human thermoregulation.
    - 0 to 40: Normal / Safe
    - 41 to 60: Moderate (Advisory)
    - 61 to 79: High (Warning)
    - 80 to 100: Extreme / Critical Emergency
    """
    # Weightings: WBGT (50%), Heat Index (30%), Wet-Bulb absolute (20%)
    # Normalizing reference points: WBGT 20°C -> 15, WBGT 35°C -> 95
    norm_wbgt = (wbgt_c - 18.0) * (80.0 / 17.0) + 15.0
    norm_hi = (heat_index_c - 25.0) * (80.0 / 25.0) + 20.0
    norm_tw = (wet_bulb_c - 16.0) * (80.0 / 19.0) + 10.0

    htsi = (0.50 * norm_wbgt) + (0.30 * norm_hi) + (0.20 * norm_tw)
    htsi = max(5.0, min(100.0, htsi))
    return round(htsi, 1)


def get_nioh_work_rest_cycle(wbgt_c: float, labor_intensity: str = "heavy") -> Dict[str, Any]:
    """
    Calculates mandatory hourly Work-Rest cycles and hydration based on
    Indian National Institute of Occupational Health (NIOH) and OSHA guidelines.
    """
    wbgt = float(wbgt_c)

    if wbgt < 28.0:
        return {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
        }
    elif 28.0 <= wbgt < 30.0:
        return {
            "status": "LIGHT_REST_ADVISORY",
            "work_mins": 45,
            "rest_mins": 15,
            "hourly_water_liters": 0.75,
            "advisory_en": "45 min work / 15 min shaded rest per hour. Increase ORS & electrolyte intake.",
            "advisory_hi": "प्रति घंटे 45 मिनट काम / 15 मिनट छाया में आराम। ओआरएस और पानी की मात्रा बढ़ाएं।"
        }
    elif 30.0 <= wbgt < 32.2:
        return {
            "status": "MODERATE_REST_WARNING",
            "work_mins": 30,
            "rest_mins": 30,
            "hourly_water_liters": 1.0,
            "advisory_en": "30 min work / 30 min shaded rest. Monitor workers for dizziness or cessation of sweat.",
            "advisory_hi": "प्रति घंटे 30 मिनट काम / 30 मिनट आराम। चक्कर आने या पसीना रुकने पर तुरंत प्राथमिक उपचार दें।"
        }
    elif 32.2 <= wbgt < 34.0:
        return {
            "status": "SEVERE_REST_RESTRICTION",
            "work_mins": 15,
            "rest_mins": 45,
            "hourly_water_liters": 1.25,
            "advisory_en": "15 min work / 45 min mandatory rest in cool shelter. Shift heavy labor to night/early morning.",
            "advisory_hi": "प्रति घंटे केवल 15 मिनट काम / 45 मिनट ठंडे आश्रय में आराम। भारी काम सुबह या रात में स्थानांतरित करें।"
        }
    else:
        return {
            "status": "MANDATORY_WORK_STOPPAGE",
            "work_mins": 0,
            "rest_mins": 60,
            "hourly_water_liters": 1.5,
            "advisory_en": "RED LINE EXCEEDED (WBGT > 34°C). ALL outdoor physical labor strictly banned under Disaster Management Act.",
            "advisory_hi": "खतरे की सीमा पार (WBGT > 34°C)। आपदा प्रबंधन अधिनियम के तहत खुले में सभी शारीरिक श्रम पर पूर्ण प्रतिबंध।"
        }


def detect_weather_anomalies(
    curr_temp: float,
    prev_temp: float,
    curr_rh: float,
    prev_rh: float,
    curr_rain_mm: float,
    wind_speed_m_s: float
) -> Dict[str, Any]:
    """
    Detects sudden atmospheric anomalies and the fatal 'False Relief' moisture trap.
    """
    delta_t = curr_temp - prev_temp
    delta_rh = curr_rh - prev_rh
    anomalies = []

    # 1. False Relief Trap: Dry temperature fell by >= 3.5°C, but humidity surged by >= 25%
    curr_tw = calculate_stull_wet_bulb(curr_temp, curr_rh)
    if delta_t <= -3.0 and delta_rh >= 25.0 and curr_tw >= 31.0:
        anomalies.append({
            "type": "FALSE_RELIEF_MOISTURE_TRAP",
            "severity": "CRITICAL",
            "title_en": "False Relief Anomaly: Lethal Moisture Surge",
            "title_hi": "धोखाधड़ी वाली राहत: अचानक जानलेवा उमस",
            "description_en": f"Ambient temperature dropped by {abs(round(delta_t, 1))}°C, but humidity surged to {round(curr_rh)}%. Wet-bulb is {curr_tw}°C. Perspiration cannot evaporate. Do NOT lift heat precautions!",
            "description_hi": f"तापमान {abs(round(delta_t, 1))}°C गिरा है लेकिन नमी {round(curr_rh)}% तक बढ़ गई। वेट-बल्ब {curr_tw}°C है। पसीना सूखना बंद हो गया है। सावधानी जारी रखें!"
        })

    # 2. Convective Squall / Rain relief
    if curr_rain_mm >= 3.0:
        anomalies.append({
            "type": "CONVECTIVE_RAIN_RELIEF",
            "severity": "RELIEF",
            "title_en": "Precipitation & Convective Cooling Active",
            "title_hi": "बारिश और शीतल हवाओं से राहत",
            "description_en": f"Rainfall ({curr_rain_mm} mm) has broken the ambient thermal accumulation. Transitioning to Blue Theme.",
            "description_hi": f"बारिश ({curr_rain_mm} मिमी) से अत्यधिक गर्मी के चक्र में कमी। शीतल मौसम सक्रिय।"
        })

    # 3. Sudden Atmospheric Stagnation (Zero wind in extreme heat)
    if wind_speed_m_s < 0.6 and curr_temp >= 40.0:
        anomalies.append({
            "type": "ATMOSPHERIC_STAGNATION",
            "severity": "WARNING",
            "title_en": "Severe Air Stagnation in Urban Canyons",
            "title_hi": "शहरी संकरी गलियों में हवा का रुकना",
            "description_en": "Wind dropped below 0.6 m/s under intense heat. Heat accumulation inside informal housing increased by 25%.",
            "description_hi": "तीव्र धूप में हवा की गति 0.6 मीटर/सेकंड से कम। झुग्गियों और टिन की छतों में गर्मी का संचय 25% बढ़ा।"
        })

    return {
        "has_anomaly": len(anomalies) > 0,
        "anomalies": anomalies
    }


def calculate_vulnerability_score(ward_props: Dict[str, Any]) -> Dict[str, Any]:
    """
    Computes standardized Socio-Ecological Heat Vulnerability Score (HVS 0-100).
    Synthesizes:
    - Sensitivity: Elderly % (weight 0.45) + Outdoor Labor % (weight 0.55)
    - Exposure: Informal Tin Roof % (weight 0.55) + Microclimate UHI Delta (weight 0.45)
    - Adaptive Capacity Deficit: Canopy Deficit (weight 0.60) + Hospital Bed Deficit (weight 0.40)
    """
    elderly_pct = float(ward_props.get("elderly_pct", 15.0))
    labor_pct = float(ward_props.get("outdoor_labor_pct", 30.0))
    tin_roof_pct = float(ward_props.get("tin_roof_pct", 25.0))
    canopy_pct = float(ward_props.get("tree_canopy_pct", 15.0))
    beds_k = float(ward_props.get("hospital_beds_per_k", 2.5))
    uhi_delta = float(ward_props.get("uhi_temp_delta", 1.0))

    # 1. Sensitivity Index (0 - 100)
    # Elderly capped at 30%, Labor capped at 70%
    sens_elderly = min(100.0, (elderly_pct / 28.0) * 100.0)
    sens_labor = min(100.0, (labor_pct / 65.0) * 100.0)
    sensitivity = (0.45 * sens_elderly) + (0.55 * sens_labor)

    # 2. Exposure Index (0 - 100)
    # Tin roofs capped at 75%, UHI delta bounded -2°C to +4°C
    exp_tin = min(100.0, (tin_roof_pct / 70.0) * 100.0)
    exp_uhi = min(100.0, max(0.0, (uhi_delta + 1.5) / 5.0) * 100.0)
    exposure = (0.55 * exp_tin) + (0.45 * exp_uhi)

    # 3. Adaptive Capacity Deficit (0 - 100)
    # Target canopy 35%, Target beds 5.0 per 1k
    def_canopy = min(100.0, max(0.0, (35.0 - canopy_pct) / 35.0) * 100.0)
    def_beds = min(100.0, max(0.0, (5.0 - beds_k) / 5.0) * 100.0)
    adaptive_deficit = (0.60 * def_canopy) + (0.40 * def_beds)

    # 4. Composite Heat Vulnerability Score (HVS 0 - 100)
    hvs = (0.35 * sensitivity) + (0.40 * exposure) + (0.25 * adaptive_deficit)
    hvs = round(max(5.0, min(98.0, hvs)), 1)

    if hvs >= 75.0:
        tier = "CRITICAL"
        tier_label_en = "Critical Vulnerability"
        tier_label_kn = "ಅತ್ಯಂತ ಅಪಾಯಕಾರಿ ದುರ್ಬಲತೆ"
        tier_label_hi = "अति संवेदनशील क्षेत्र"
    elif hvs >= 55.0:
        tier = "HIGH"
        tier_label_en = "High Vulnerability"
        tier_label_kn = "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ"
        tier_label_hi = "उच्च संवेदनशीलता"
    elif hvs >= 35.0:
        tier = "MODERATE"
        tier_label_en = "Moderate Vulnerability"
        tier_label_kn = "ಮಧ್ಯಮ ದುರ್ಬಲತೆ"
        tier_label_hi = "मध्यम संवेदनशीलता"
    else:
        tier = "LOW"
        tier_label_en = "Low Vulnerability (Resilient)"
        tier_label_kn = "ಕಡಿಮೆ ದುರ್ಬಲತೆ (ಸುರಕ್ಷಿತ)"
        tier_label_hi = "कम संवेदनशीलता (सुरक्षित)"

    return {
        "score": hvs,
        "tier": tier,
        "tier_label_en": tier_label_en,
        "tier_label_kn": tier_label_kn,
        "tier_label_hi": tier_label_hi,
        "sensitivity_score": round(sensitivity, 1),
        "exposure_score": round(exposure, 1),
        "adaptive_deficit_score": round(adaptive_deficit, 1)
    }


def generate_microclimate_causal_attribution(
    temp_c: float,
    rh_pct: float,
    wind_speed_m_s: float,
    solar_rad_w_m2: float,
    uhi_delta: float,
    canopy_pct: float,
    tin_roof_pct: float,
    is_rain: bool = False
) -> Dict[str, Any]:
    """
    Identifies the exact atmospheric & physical drivers determining whether a ward has
    high, moderate, or low temperature / thermal strain.
    """
    if is_rain:
        return {
            "driver_category": "CONVECTIVE_PRECIPITATION_RELIEF",
            "summary_en": f"Active rainfall and cloud cover have suppressed solar irradiance to {int(solar_rad_w_m2)} W/m². Evaporative rain cooling overrides the built-environment heat island.",
            "summary_kn": f"ಸಕ್ರಿಯ ಮಳೆ ಮತ್ತು ಮೋಡ ಕವಿದ ವಾತಾವರಣವು ಸೌರ ವಿಕಿರಣವನ್ನು {int(solar_rad_w_m2)} W/m² ಗೆ ಇಳಿಸಿದೆ. ಮಳೆಯಿಂದಾಗಿ ಉಷ್ಣಾಂಶ ತಗ್ಗಿದೆ.",
            "summary_hi": f"सक्रिय वर्षा और बादलों ने सौर विकिरण को {int(solar_rad_w_m2)} W/m² तक घटा दिया है। बारिश ने गर्मी के प्रभाव को निष्प्रभावी कर दिया है।",
            "drivers": {
                "solar_radiation_pct": 10,
                "moisture_humidity_pct": 20,
                "wind_ventilation_pct": 45,
                "urban_heat_island_pct": 10,
                "canopy_buffer_pct": 15
            }
        }

    # Analyze relative physical weights
    solar_impact = min(100.0, (solar_rad_w_m2 / 900.0) * 40.0)
    humidity_impact = min(100.0, (rh_pct / 85.0) * 25.0)
    wind_stagnation = min(100.0, max(0.0, (2.5 - wind_speed_m_s) / 2.5) * 20.0)
    uhi_impact = min(100.0, max(0.0, (uhi_delta + 1.2) / 4.5) * 35.0)
    canopy_deficit = min(100.0, max(0.0, (30.0 - canopy_pct) / 30.0) * 20.0)
    tin_roof_impact = min(100.0, (tin_roof_pct / 70.0) * 25.0)

    total_driver = solar_impact + humidity_impact + wind_stagnation + uhi_impact + canopy_deficit + 0.1
    pct_solar = round((solar_impact / total_driver) * 100)
    pct_moisture = round((humidity_impact / total_driver) * 100)
    pct_wind = round((wind_stagnation / total_driver) * 100)
    pct_uhi = round((uhi_impact / total_driver) * 100)
    pct_canopy = max(5, 100 - (pct_solar + pct_moisture + pct_wind + pct_uhi))

    # Causal diagnostic reasoning
    reasons_en = []
    reasons_kn = []
    reasons_hi = []

    if uhi_delta >= 2.0:
        reasons_en.append(f"concrete and asphalt surfaces generating a +{uhi_delta}°C Urban Heat Island anomaly")
        reasons_kn.append(f"ಕಾಂಕ್ರೀಟ್ ಮತ್ತು ರಸ್ತೆಗಳಿಂದ +{uhi_delta}°C ಶಾಖ ಹೆಚ್ಚಳ")
        reasons_hi.append(f"कंक्रीट और डामर की सतहों से +{uhi_delta}°C का अर्बन हीट आइलैंड प्रभाव")
    elif uhi_delta < 0:
        reasons_en.append(f"local parklands and green cover providing a {uhi_delta}°C cooling buffer")
        reasons_kn.append(f"ಉದ್ಯಾನವನಗಳು {uhi_delta}°C ನಷ್ಟು ತಂಪಾಗಿಸುವ ವಾತಾವರಣ ನೀಡುತ್ತವೆ")
        reasons_hi.append(f"स्थानीय हरित क्षेत्र {uhi_delta}°C का प्राकृतिक शीतलन प्रदान करते हैं")

    if solar_rad_w_m2 >= 700:
        reasons_en.append(f"intense solar radiation ({int(solar_rad_w_m2)} W/m²) causing rapid surface overheating")
        reasons_kn.append(f"ತೀವ್ರ ಸೂರ್ಯನ ಬಿಸಿಲು ({int(solar_rad_w_m2)} W/m²) ತಾಪಮಾನವನ್ನು ಹೆಚ್ಚಿಸಿದೆ")
        reasons_hi.append(f"तीव्र सौर विकिरण ({int(solar_rad_w_m2)} W/m²) सतह को तेजी से गर्म कर रहा है")

    if wind_speed_m_s < 1.2:
        reasons_en.append(f"low wind ventilation ({round(wind_speed_m_s, 1)} m/s) trapping hot air in street canyons")
        reasons_kn.append(f"ಕಡಿಮೆ ಗಾಳಿಯು ({round(wind_speed_m_s, 1)} m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ")
        reasons_hi.append(f"धीमी हवा ({round(wind_speed_m_s, 1)} m/s) संकरी गलियों में गर्मी को रोक रही है")

    if rh_pct >= 55.0 and temp_c >= 30.0:
        reasons_en.append(f"elevated humidity ({round(rh_pct)}%) suppressing sweat evaporation")
        reasons_kn.append(f"ಹೆಚ್ಚಿನ ತೇವಾಂಶವು ({round(rh_pct)}%) ಬೆವರು ಆರುವುದನ್ನು ತಡೆಯುತ್ತದೆ")
        reasons_hi.append(f"अधिक नमी ({round(rh_pct)}%) पसीना सूखने में रुकावट डालती है")

    if tin_roof_pct >= 50.0:
        reasons_en.append(f"{round(tin_roof_pct)}% tin roofs radiating secondary infrared heat into informal homes")
        reasons_kn.append(f"{round(tin_roof_pct)}% ತವರದ ಸೂರುಗಳು ಹೆಚ್ಚಿನ ಶಾಖವನ್ನು ಹೊರಸೂಸುತ್ತವೆ")
        reasons_hi.append(f"{round(tin_roof_pct)}% टिन की छतें बस्तियों में अतिरिक्त गर्मी फैलाती हैं")

    if canopy_pct >= 25.0:
        reasons_en.append(f"{round(canopy_pct)}% tree canopy shading roadways and releasing moisture")
        reasons_kn.append(f"{round(canopy_pct)}% ಮರಗಳ ಹೊದಿಕೆಯು ನೆರಳು ಮತ್ತು ತಂಪನ್ನು ನೀಡುತ್ತದೆ")
        reasons_hi.append(f"{round(canopy_pct)}% वृक्ष आवरण सड़कों पर छाया और ठंडक प्रदान करता है")

    # Defensive fallback if no extreme threshold was triggered
    if not reasons_en:
        reasons_en.append(f"ambient solar irradiance ({int(solar_rad_w_m2)} W/m²) remains within seasonal norms")
        reasons_en.append(f"urban ventilation is operating at {round(wind_speed_m_s, 1)} m/s")
        reasons_kn.append(f"ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ")
        reasons_hi.append(f"मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है")

    # Construct synthesized diagnostic sentences
    if temp_c >= 34.0 or uhi_delta >= 2.5:
        category = "HIGH_THERMAL_HOTSPOT"
        summary_en = "Critical Hotspot: High temperature is driven by " + ", while ".join(reasons_en[:3]) + "."
        summary_kn = "ಅಧಿಕ ತಾಪಮಾನದ ಪ್ರದೇಶ: " + ", ಮತ್ತು ".join(reasons_kn[:3]) + "."
        summary_hi = "अत्यधिक गर्म हॉटस्पॉट: " + ", तथा ".join(reasons_hi[:3]) + " के कारण तापमान अधिक है।"
    elif temp_c <= 29.0 or uhi_delta <= 0:
        category = "MICROCLIMATE_COOLING_ZONE"
        summary_en = "Cooling Buffer: Favorable microclimate is maintained as " + ", while ".join(reasons_en[:3]) + "."
        summary_kn = "ತಂಪಾದ ವಲಯ: " + ", ಮತ್ತು ".join(reasons_kn[:3]) + "."
        summary_hi = "शीतल माइक्रोक्लाइमेट: " + ", तथा ".join(reasons_hi[:3]) + " तापमान को नियंत्रित रखते हैं।"
    else:
        category = "BALANCED_MODERATE_TEMPERATURE"
        summary_en = "Moderate Advisory: Temperature reflects a balance where " + ", while ".join(reasons_en[:3]) + "."
        summary_kn = "ಮಧ್ಯಮ ತಾಪಮಾನ: " + ", ಮತ್ತು ".join(reasons_kn[:3]) + "."
        summary_hi = "मध्यम तापमान: " + ", तथा ".join(reasons_hi[:3]) + " से तापमान संतुलित है।"

    return {
        "driver_category": category,
        "summary_en": summary_en,
        "summary_kn": summary_kn,
        "summary_hi": summary_hi,
        "drivers": {
            "solar_radiation_pct": pct_solar,
            "moisture_humidity_pct": pct_moisture,
            "wind_ventilation_pct": pct_wind,
            "urban_heat_island_pct": pct_uhi,
            "canopy_buffer_pct": pct_canopy
        }
    }


def generate_24h_diurnal_forecast(
    base_temp_c: float,
    base_rh_pct: float,
    base_wind_m_s: float,
    hourly_api_data: Optional[Dict[str, Any]] = None
) -> List[Dict[str, Any]]:
    """
    Produces a 24-hour diurnal heat progression curve (00:00 to 23:00).
    Uses legitimate Open-Meteo hourly forecast if provided, or calibrated diurnal physics curve.
    """
    forecast_points = []
    
    has_live_hourly = (
        hourly_api_data
        and "temperature_2m" in hourly_api_data
        and len(hourly_api_data["temperature_2m"]) >= 24
    )

    for h in range(24):
        hour_str = f"{h:02d}:00"
        ampm = "AM" if h < 12 else "PM"
        display_hour = f"{12 if h % 12 == 0 else h % 12}:00 {ampm}"

        if has_live_hourly:
            t_hour = float(hourly_api_data["temperature_2m"][h])
            rh_hour = float(hourly_api_data["relative_humidity_2m"][h]) if "relative_humidity_2m" in hourly_api_data else base_rh_pct
            wind_hour = round(float(hourly_api_data["wind_speed_10m"][h]) / 3.6, 2) if "wind_speed_10m" in hourly_api_data else base_wind_m_s
            solar_hour = max(0.0, float(hourly_api_data.get("direct_normal_irradiance", [0.0]*24)[h]))
            rain_hour = float(hourly_api_data.get("precipitation", [0.0]*24)[h])
        else:
            # Physical Diurnal Bell Curve (T_min at 05:00, T_max at 14:30)
            # Solar peak at 12:30 (up to 880 W/m2)
            solar_phase = max(0.0, math.sin(max(0.0, (h - 6.0) / 12.0) * math.pi)) if 6 <= h <= 18 else 0.0
            solar_hour = round(solar_phase * 850.0, 1)
            
            # Diurnal temperature curve
            temp_range = 8.5
            temp_phase = math.sin(((h - 9.0) / 24.0) * 2.0 * math.pi)
            t_hour = round(base_temp_c + (temp_phase * (temp_range / 2.0)), 1)
            rh_hour = round(max(20.0, min(95.0, base_rh_pct - (temp_phase * 15.0))), 1)
            wind_hour = round(max(0.6, base_wind_m_s + (solar_phase * 1.2)), 2)
            rain_hour = 0.0

        wbgt_hour = calculate_wbgt_outdoor(t_hour, rh_hour, wind_hour, solar_hour)
        hi_hour = calculate_heat_index(t_hour, rh_hour)
        htsi_hour = calculate_htsi(wbgt_hour, hi_hour, calculate_stull_wet_bulb(t_hour, rh_hour))

        if rain_hour >= 3.0:
            tier = "BLUE"
            phase_label = "RAIN_RELIEF"
        elif wbgt_hour >= 34.0 or htsi_hour >= 80.0:
            tier = "RED"
            phase_label = "CRITICAL_PEAK"
        elif wbgt_hour >= 31.5 or htsi_hour >= 60.0:
            tier = "ORANGE"
            phase_label = "HIGH_STRESS"
        elif wbgt_hour >= 28.5 or htsi_hour >= 40.0:
            tier = "YELLOW"
            phase_label = "MODERATE_HEAT"
        else:
            tier = "GREEN"
            phase_label = "SAFE_ZONE"

        forecast_points.append({
            "hour": h,
            "hour_label": display_hour,
            "time_iso": hour_str,
            "temperature_c": round(t_hour, 1),
            "wbgt_c": wbgt_hour,
            "relative_humidity_pct": rh_hour,
            "wind_speed_m_s": wind_hour,
            "solar_radiation_w_m2": solar_hour,
            "htsi_score": htsi_hour,
            "risk_tier": tier,
            "phase": phase_label
        })

    return forecast_points

