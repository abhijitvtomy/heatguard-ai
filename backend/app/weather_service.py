"""
HEATGUARD Weather Service
Handles real-time Open-Meteo ingestion, in-memory caching, microclimate downscaling,
and 4 robust hackathon demo scenarios for Bruhat Bengaluru Mahanagara Palike (BBMP).
"""

import time
import json
import logging
from typing import Dict, Any, List
import httpx

from app.physics import (
    calculate_stull_wet_bulb,
    calculate_heat_index,
    calculate_wbgt_outdoor,
    calculate_htsi,
    get_nioh_work_rest_cycle,
    detect_weather_anomalies
)
from app.ml_engine import risk_engine

logger = logging.getLogger(__name__)

# Bengaluru Coordinates
BLR_LAT = 12.9716
BLR_LON = 77.5946

class WeatherService:
    def __init__(self):
        self.cache: Dict[str, Any] = {}
        self.cache_timestamp: float = 0.0
        self.cache_ttl_seconds: int = 1800  # 30 minutes
        self.active_scenario: str = "LIVE"

    def get_preset_scenario_data(self, scenario_name: str) -> Dict[str, Any]:
        """
        Returns guaranteed offline simulation datasets calibrated for Bengaluru.
        """
        now_ts = int(time.time())
        hours = [f"+{i}h" for i in range(24)]
        days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"]

        if scenario_name == "HEATWAVE_EXTREME":
            # Record-breaking Bengaluru Heatwave (e.g. April 2024: 39.2°C, UHI peak, dry Cauvery basin)
            return {
                "city": "Bengaluru (BBMP)",
                "mode": "SIMULATED_HEATWAVE_CRITICAL",
                "ambient_temp_c": 39.2,
                "relative_humidity_pct": 58.0,
                "wind_speed_m_s": 1.4,
                "solar_radiation_w_m2": 920.0,
                "precipitation_mm": 0.0,
                "prev_hour_temp_c": 37.8,
                "prev_hour_rh_pct": 52.0,
                "forecast_5_days": [
                    {"day": "Today", "temp_max": 39.2, "temp_min": 28.5, "wbgt_max": 34.8, "risk_tier": "RED", "hospital_spike": 34.5},
                    {"day": "Tomorrow", "temp_max": 39.8, "temp_min": 29.1, "wbgt_max": 35.4, "risk_tier": "RED", "hospital_spike": 38.2},
                    {"day": "Day +2", "temp_max": 40.2, "temp_min": 29.5, "wbgt_max": 35.9, "risk_tier": "RED", "hospital_spike": 42.0},
                    {"day": "Day +3", "temp_max": 38.5, "temp_min": 28.0, "wbgt_max": 33.6, "risk_tier": "ORANGE", "hospital_spike": 29.4},
                    {"day": "Day +4", "temp_max": 36.8, "temp_min": 26.5, "wbgt_max": 31.2, "risk_tier": "YELLOW", "hospital_spike": 18.5},
                ]
            }

        elif scenario_name == "MONSOON_RAIN":
            # Bengaluru Monsoon Cloudburst & Thermal Relief
            return {
                "city": "Bengaluru (BBMP)",
                "mode": "SIMULATED_MONSOON_RELIEF",
                "ambient_temp_c": 24.5,
                "relative_humidity_pct": 92.0,
                "wind_speed_m_s": 6.2,
                "solar_radiation_w_m2": 140.0,
                "precipitation_mm": 18.5,  # Active heavy rain
                "prev_hour_temp_c": 31.0,
                "prev_hour_rh_pct": 65.0,
                "forecast_5_days": [
                    {"day": "Today", "temp_max": 25.0, "temp_min": 21.0, "wbgt_max": 23.5, "risk_tier": "BLUE", "hospital_spike": 1.2},
                    {"day": "Tomorrow", "temp_max": 26.2, "temp_min": 21.5, "wbgt_max": 24.2, "risk_tier": "BLUE", "hospital_spike": 2.0},
                    {"day": "Day +2", "temp_max": 27.5, "temp_min": 22.0, "wbgt_max": 25.1, "risk_tier": "GREEN", "hospital_spike": 3.1},
                    {"day": "Day +3", "temp_max": 28.0, "temp_min": 22.5, "wbgt_max": 25.8, "risk_tier": "GREEN", "hospital_spike": 4.0},
                    {"day": "Day +4", "temp_max": 29.0, "temp_min": 23.0, "wbgt_max": 26.5, "risk_tier": "GREEN", "hospital_spike": 5.2},
                ]
            }

        elif scenario_name == "MODERATE_ADVISORY":
            # Typical Pre-Monsoon warm afternoon in Bengaluru
            return {
                "city": "Bengaluru (BBMP)",
                "mode": "SIMULATED_MODERATE_ADVISORY",
                "ambient_temp_c": 33.8,
                "relative_humidity_pct": 44.0,
                "wind_speed_m_s": 2.8,
                "solar_radiation_w_m2": 760.0,
                "precipitation_mm": 0.0,
                "prev_hour_temp_c": 32.5,
                "prev_hour_rh_pct": 48.0,
                "forecast_5_days": [
                    {"day": "Today", "temp_max": 33.8, "temp_min": 23.5, "wbgt_max": 29.2, "risk_tier": "YELLOW", "hospital_spike": 12.5},
                    {"day": "Tomorrow", "temp_max": 34.2, "temp_min": 24.0, "wbgt_max": 29.8, "risk_tier": "YELLOW", "hospital_spike": 14.1},
                    {"day": "Day +2", "temp_max": 34.5, "temp_min": 24.2, "wbgt_max": 30.1, "risk_tier": "YELLOW", "hospital_spike": 15.0},
                    {"day": "Day +3", "temp_max": 33.0, "temp_min": 23.8, "wbgt_max": 28.9, "risk_tier": "YELLOW", "hospital_spike": 11.2},
                    {"day": "Day +4", "temp_max": 32.0, "temp_min": 23.0, "wbgt_max": 27.8, "risk_tier": "GREEN", "hospital_spike": 7.5},
                ]
            }

        else:  # NORMAL_SAFE
            return {
                "city": "Bengaluru (BBMP)",
                "mode": "SIMULATED_NORMAL_SAFE",
                "ambient_temp_c": 27.2,
                "relative_humidity_pct": 52.0,
                "wind_speed_m_s": 3.4,
                "solar_radiation_w_m2": 540.0,
                "precipitation_mm": 0.0,
                "prev_hour_temp_c": 26.8,
                "prev_hour_rh_pct": 54.0,
                "forecast_5_days": [
                    {"day": "Today", "temp_max": 27.2, "temp_min": 20.0, "wbgt_max": 24.8, "risk_tier": "GREEN", "hospital_spike": 2.5},
                    {"day": "Tomorrow", "temp_max": 28.0, "temp_min": 20.5, "wbgt_max": 25.2, "risk_tier": "GREEN", "hospital_spike": 3.0},
                    {"day": "Day +2", "temp_max": 28.5, "temp_min": 21.0, "wbgt_max": 25.8, "risk_tier": "GREEN", "hospital_spike": 3.8},
                    {"day": "Day +3", "temp_max": 27.8, "temp_min": 20.2, "wbgt_max": 25.0, "risk_tier": "GREEN", "hospital_spike": 2.8},
                    {"day": "Day +4", "temp_max": 27.5, "temp_min": 19.8, "wbgt_max": 24.6, "risk_tier": "GREEN", "hospital_spike": 2.2},
                ]
            }

    async def fetch_live_open_meteo(self) -> Dict[str, Any]:
        """
        Queries Open-Meteo API for real-time and 7-day forecast for Bengaluru.
        Falls back seamlessly to cached or realistic data if offline.
        """
        now = time.time()
        if self.cache and (now - self.cache_timestamp < self.cache_ttl_seconds):
            return self.cache

        url = (
            f"https://api.open-meteo.com/v1/forecast?"
            f"latitude={BLR_LAT}&longitude={BLR_LON}"
            f"&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation"
            f"&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,direct_normal_irradiance,precipitation"
            f"&daily=temperature_2m_max,temperature_2m_min,precipitation_sum"
            f"&timezone=Asia%2FKolkata&forecast_days=7"
        )

        try:
            async with httpx.AsyncClient(timeout=4.0) as client:
                res = await client.get(url)
                if res.status_code == 200:
                    data = res.json()
                    curr = data.get("current", {})
                    hourly = data.get("hourly", {})
                    daily = data.get("daily", {})

                    # Extract current conditions
                    temp_curr = float(curr.get("temperature_2m", 31.5))
                    rh_curr = float(curr.get("relative_humidity_2m", 55.0))
                    wind_curr = round(float(curr.get("wind_speed_10m", 10.0)) / 3.6, 2)  # km/h to m/s
                    rain_curr = float(curr.get("precipitation", 0.0))

                    # Solar radiation (approximate from hourly if day)
                    solar_curr = 650.0
                    if "direct_normal_irradiance" in hourly and len(hourly["direct_normal_irradiance"]) > 12:
                        solar_curr = max(0.0, float(hourly["direct_normal_irradiance"][12]))

                    # Format 5-day trajectory
                    days_traj = []
                    d_names = ["Today", "Tomorrow", "Day +2", "Day +3", "Day +4"]
                    d_maxs = daily.get("temperature_2m_max", [temp_curr] * 5)
                    d_mins = daily.get("temperature_2m_min", [22.0] * 5)

                    for idx in range(min(5, len(d_maxs))):
                        t_max = float(d_maxs[idx])
                        t_min = float(d_mins[idx])
                        tw_approx = calculate_stull_wet_bulb(t_max, 50.0)
                        wbgt_est = calculate_wbgt_outdoor(t_max, 50.0, 2.5, 750.0)
                        spike = max(0.0, round((wbgt_est - 26.5) * 4.2, 1))

                        tier = "GREEN"
                        if wbgt_est >= 34.0 or spike >= 30.0:
                            tier = "RED"
                        elif wbgt_est >= 31.5 or spike >= 20.0:
                            tier = "ORANGE"
                        elif wbgt_est >= 28.5 or spike >= 10.0:
                            tier = "YELLOW"

                        days_traj.append({
                            "day": d_names[idx],
                            "temp_max": round(t_max, 1),
                            "temp_min": round(t_min, 1),
                            "wbgt_max": wbgt_est,
                            "risk_tier": tier,
                            "hospital_spike": spike
                        })

                    weather_pack = {
                        "city": "Bengaluru (BBMP)",
                        "mode": "LIVE_OPEN_METEO",
                        "ambient_temp_c": temp_curr,
                        "relative_humidity_pct": rh_curr,
                        "wind_speed_m_s": wind_curr,
                        "solar_radiation_w_m2": solar_curr,
                        "precipitation_mm": rain_curr,
                        "prev_hour_temp_c": temp_curr - 0.6,
                        "prev_hour_rh_pct": rh_curr - 3.0,
                        "forecast_5_days": days_traj
                    }

                    self.cache = weather_pack
                    self.cache_timestamp = now
                    return weather_pack
        except Exception as e:
            logger.warning(f"Open-Meteo live call failed ({str(e)}). Using robust pre-cached Bengaluru data.")

        # Fallback to moderate summer advisory if API call is unreachable
        return self.get_preset_scenario_data("MODERATE_ADVISORY")

    async def get_weather(self, scenario: str = "LIVE") -> Dict[str, Any]:
        """
        Dispatches either live Open-Meteo or requested scenario preset.
        """
        self.active_scenario = scenario
        if scenario == "LIVE":
            return await self.fetch_live_open_meteo()
        return self.get_preset_scenario_data(scenario)

    def downscale_to_wards(self, base_weather: Dict[str, Any], wards_geojson: Dict[str, Any]) -> List[Dict[str, Any]]:
        """
        Applies biometeorological physics downscaling to each ward in Bengaluru
        using its unique Urban Heat Island, tree canopy, and built-environment attributes.
        """
        t_base = base_weather["ambient_temp_c"]
        rh_base = base_weather["relative_humidity_pct"]
        wind_base = base_weather["wind_speed_m_s"]
        solar_base = base_weather["solar_radiation_w_m2"]
        rain_base = base_weather["precipitation_mm"]

        evaluated_wards = []

        for feat in wards_geojson.get("features", []):
            props = feat.get("properties", {})
            ward_id = props.get("ward_id")

            # 1. Microclimate Adjustment
            delta_uhi = props.get("uhi_temp_delta", 0.0)
            wind_atten = props.get("wind_attenuation", 1.0)

            # In heavy rain, microclimatic differences flatten out
            if rain_base >= 5.0:
                t_ward = t_base + (delta_uhi * 0.15)
                wind_ward = max(1.5, wind_base)
            else:
                t_ward = t_base + delta_uhi
                wind_ward = max(0.4, wind_base * wind_atten)

            rh_ward = rh_base

            # 2. Compute Biometeorological Indices
            wet_bulb = calculate_stull_wet_bulb(t_ward, rh_ward)
            heat_index = calculate_heat_index(t_ward, rh_ward)
            wbgt = calculate_wbgt_outdoor(t_ward, rh_ward, wind_ward, solar_base)
            htsi = calculate_htsi(wbgt, heat_index, wet_bulb)

            # 3. Labor Work-Rest Cycle (NIOH Standard)
            work_rest = get_nioh_work_rest_cycle(wbgt)

            # 4. Predict Health & Hospital Impact via ML Engine
            health_impact = risk_engine.predict_ward_health_impact(
                wbgt_curr=wbgt,
                wbgt_lag24=wbgt - 0.8,
                wbgt_lag48=wbgt - 1.2,
                wet_bulb_curr=wet_bulb,
                nocturnal_min_temp=max(20.0, t_ward - 9.0),
                ward_props=props
            )

            # 5. Anomaly Sentinel
            anomalies = detect_weather_anomalies(
                curr_temp=t_ward,
                prev_temp=base_weather["prev_hour_temp_c"],
                curr_rh=rh_ward,
                prev_rh=base_weather["prev_hour_rh_pct"],
                curr_rain_mm=rain_base,
                wind_speed_m_s=wind_ward
            )

            # Override tier if raining
            effective_tier = health_impact["alert_tier"]
            if rain_base >= 3.0:
                effective_tier = "BLUE"

            evaluated_wards.append({
                "ward_id": ward_id,
                "name": props.get("name"),
                "name_kn": props.get("name_kn"),
                "name_hi": props.get("name_hi"),
                "zone": props.get("zone"),
                "population": props.get("population"),
                "center": props.get("center"),
                "microclimate": {
                    "temperature_c": round(t_ward, 1),
                    "relative_humidity_pct": round(rh_ward, 1),
                    "wind_speed_m_s": round(wind_ward, 2),
                    "wet_bulb_c": wet_bulb,
                    "heat_index_c": heat_index,
                    "wbgt_c": wbgt,
                    "htsi_score": htsi,
                    "precipitation_mm": rain_base
                },
                "vulnerability": {
                    "elderly_pct": props.get("elderly_pct"),
                    "outdoor_labor_pct": props.get("outdoor_labor_pct"),
                    "tin_roof_pct": props.get("tin_roof_pct"),
                    "tree_canopy_pct": props.get("tree_canopy_pct"),
                    "hospital_beds_per_k": props.get("hospital_beds_per_k")
                },
                "health_risk": health_impact,
                "effective_alert_tier": effective_tier,
                "work_rest_safety": work_rest,
                "anomaly_alert": anomalies
            })

        return evaluated_wards

# Singleton
weather_service = WeatherService()
