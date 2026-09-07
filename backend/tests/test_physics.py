"""
Unit Tests for HEATGUARD Biometeorological Physics & ML Engine
Verifies Stull (2011) Wet-Bulb, ISO 7243 WBGT, and NIOH Work-Rest ratios.
"""

import math
from app.physics import (
    calculate_stull_wet_bulb,
    calculate_heat_index,
    calculate_wbgt_outdoor,
    get_nioh_work_rest_cycle
)
from app.ml_engine import risk_engine

def test_stull_wet_bulb_accuracy():
    """
    Test against standard meteorological benchmark test points from Stull (2011).
    At T = 20.0°C and RH = 50.0%, Stull Tw is approximately 13.7°C.
    At T = 40.0°C and RH = 50.0%, Stull Tw is approximately 30.6°C.
    """
    tw_mild = calculate_stull_wet_bulb(20.0, 50.0)
    assert abs(tw_mild - 13.7) < 0.4, f"Expected ~13.7°C, got {tw_mild}"

    tw_hot = calculate_stull_wet_bulb(40.0, 50.0)
    assert abs(tw_hot - 30.6) < 0.5, f"Expected ~30.6°C, got {tw_hot}"
    print("✅ Stull Wet-Bulb Benchmark: PASSED")

def test_wbgt_outdoor_physics():
    """
    Outdoor WBGT incorporates radiant solar load and wind speed cooling.
    Under 40°C, 60% RH, and 850 W/m² solar load, WBGT must cross 33.0°C (Extreme Danger).
    """
    wbgt = calculate_wbgt_outdoor(temp_c=40.0, rh_pct=60.0, wind_speed_m_s=1.5, solar_rad_w_m2=850.0)
    assert wbgt >= 33.0, f"Expected WBGT >= 33.0°C under severe radiant load, got {wbgt}"
    print(f"✅ Outdoor WBGT Calculation ({wbgt}°C): PASSED")

def test_nioh_work_rest_mandate():
    """
    When WBGT > 34.0°C, NIOH/OSHA statutory guidelines mandate WORK STOPPAGE.
    """
    cycle = get_nioh_work_rest_cycle(34.8)
    assert cycle["status"] == "MANDATORY_WORK_STOPPAGE"
    assert cycle["work_mins"] == 0
    assert cycle["rest_mins"] == 60
    print("✅ NIOH Work-Rest Stoppage Rule: PASSED")

def test_ml_health_risk_prediction():
    """
    Verifies that high WBGT (35°C) and vulnerable demographics in Peenya produce
    a critical alert tier with 90% confidence intervals.
    """
    ward_props = {
        "elderly_pct": 18.0,
        "outdoor_labor_pct": 55.0,
        "tin_roof_pct": 65.0,
        "tree_canopy_pct": 4.0,
        "hospital_beds_per_k": 1.2,
        "baseline_daily_admissions": 40
    }
    pred = risk_engine.predict_ward_health_impact(
        wbgt_curr=35.2,
        wbgt_lag24=34.5,
        wbgt_lag48=33.8,
        wet_bulb_curr=33.0,
        nocturnal_min_temp=29.8,
        ward_props=ward_props
    )
    assert pred["alert_tier"] == "RED"
    assert pred["expected_surge_pct"] >= 25.0
    assert pred["confidence_interval_90"]["upper_bound_pct"] > pred["expected_surge_pct"]
    assert pred["additional_emergency_beds_needed"] > 0
    print(f"✅ ML Epidemiological Surge Model (+{pred['expected_surge_pct']}%): PASSED")

if __name__ == "__main__":
    test_stull_wet_bulb_accuracy()
    test_wbgt_outdoor_physics()
    test_nioh_work_rest_mandate()
    test_ml_health_risk_prediction()
    print("🎯 ALL 4 BACKEND SCIENTIFIC & ML TESTS PASSED!")
