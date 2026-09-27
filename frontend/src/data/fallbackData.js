export const fallbackWardsData = {
  "scenario": "LIVE",
  "city_wide_status": {
    "tier": "GREEN",
    "max_wbgt_c": 21.0,
    "mean_hospital_surge_pct": 0.0,
    "total_additional_beds_needed": 0,
    "rain_mm": 0.0,
    "total_monitored_wards": 42,
    "ground_truth_accuracy": {
      "source": "Google Weather & IMD Bengaluru AWS Network",
      "station": "Bengaluru City Observatory (Palace Road / Majestic)",
      "benchmark_stations": [
        {
          "name": "Bengaluru City Observatory (Palace Road)",
          "lat": 12.978,
          "lon": 77.585,
          "observed_temp_c": 20.6
        },
        {
          "name": "HAL Airport Weather Station",
          "lat": 12.95,
          "lon": 77.668,
          "observed_temp_c": 20.2
        },
        {
          "name": "Kempegowda International Airport (KIA)",
          "lat": 13.198,
          "lon": 77.706,
          "observed_temp_c": 19.9
        }
      ],
      "observed_benchmark_temp_c": 20.6,
      "mean_ward_temp_c": 21.2,
      "mae_variance_c": 0.65,
      "max_variance_c": 1.2,
      "overall_accuracy_pct": 99.3,
      "status": "VERIFIED_ACCURATE",
      "wards_verified": 42
    }
  },
  "accuracy_ledger": {
    "source": "Google Weather & IMD Bengaluru AWS Network",
    "station": "Bengaluru City Observatory (Palace Road / Majestic)",
    "benchmark_stations": [
      {
        "name": "Bengaluru City Observatory (Palace Road)",
        "lat": 12.978,
        "lon": 77.585,
        "observed_temp_c": 20.6
      },
      {
        "name": "HAL Airport Weather Station",
        "lat": 12.95,
        "lon": 77.668,
        "observed_temp_c": 20.2
      },
      {
        "name": "Kempegowda International Airport (KIA)",
        "lat": 13.198,
        "lon": 77.706,
        "observed_temp_c": 19.9
      }
    ],
    "observed_benchmark_temp_c": 20.6,
    "mean_ward_temp_c": 21.2,
    "mae_variance_c": 0.65,
    "max_variance_c": 1.2,
    "overall_accuracy_pct": 99.3,
    "status": "VERIFIED_ACCURATE",
    "wards_verified": 42
  },
  "weather": {
    "city": "Bengaluru Metropolitan Region",
    "authority": "Metropolitan Heat Resilience Network",
    "mode": "LIVE_OPEN_METEO",
    "ambient_temp_c": 20.6,
    "relative_humidity_pct": 91.0,
    "wind_speed_m_s": 2.03,
    "solar_radiation_w_m2": 0.0,
    "precipitation_mm": 0.0,
    "prev_hour_temp_c": 20.0,
    "prev_hour_rh_pct": 88.0,
    "forecast_5_days": [
      {
        "day": "Today",
        "temp_max": 29.9,
        "temp_min": 19.2,
        "wbgt_max": 25.62,
        "risk_tier": "GREEN",
        "hospital_spike": 0.0
      },
      {
        "day": "Tomorrow",
        "temp_max": 30.7,
        "temp_min": 20.3,
        "wbgt_max": 26.34,
        "risk_tier": "GREEN",
        "hospital_spike": 0.0
      },
      {
        "day": "Day +2",
        "temp_max": 30.1,
        "temp_min": 20.4,
        "wbgt_max": 25.8,
        "risk_tier": "GREEN",
        "hospital_spike": 0.0
      },
      {
        "day": "Day +3",
        "temp_max": 28.5,
        "temp_min": 19.2,
        "wbgt_max": 24.36,
        "risk_tier": "GREEN",
        "hospital_spike": 0.0
      },
      {
        "day": "Day +4",
        "temp_max": 29.0,
        "temp_min": 19.3,
        "wbgt_max": 24.81,
        "risk_tier": "GREEN",
        "hospital_spike": 0.0
      }
    ],
    "diurnal_forecast_24h": [
      {
        "hour": 0,
        "hour_label": "12:00 AM",
        "time_iso": "00:00",
        "temperature_c": 21.1,
        "wbgt_c": 19.96,
        "relative_humidity_pct": 87.0,
        "wind_speed_m_s": 2.0,
        "solar_radiation_w_m2": 0.0,
        "htsi_score": 19.7,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 1,
        "hour_label": "1:00 AM",
        "time_iso": "01:00",
        "temperature_c": 20.6,
        "wbgt_c": 19.82,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 2.03,
        "solar_radiation_w_m2": 0.0,
        "htsi_score": 19.0,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 2,
        "hour_label": "2:00 AM",
        "time_iso": "02:00",
        "temperature_c": 20.2,
        "wbgt_c": 19.51,
        "relative_humidity_pct": 92.0,
        "wind_speed_m_s": 1.97,
        "solar_radiation_w_m2": 0.0,
        "htsi_score": 17.6,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 3,
        "hour_label": "3:00 AM",
        "time_iso": "03:00",
        "temperature_c": 19.8,
        "wbgt_c": 19.29,
        "relative_humidity_pct": 94.0,
        "wind_speed_m_s": 1.89,
        "solar_radiation_w_m2": 0.0,
        "htsi_score": 16.6,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 4,
        "hour_label": "4:00 AM",
        "time_iso": "04:00",
        "temperature_c": 19.4,
        "wbgt_c": 18.97,
        "relative_humidity_pct": 95.0,
        "wind_speed_m_s": 1.72,
        "solar_radiation_w_m2": 0.0,
        "htsi_score": 15.2,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 5,
        "hour_label": "5:00 AM",
        "time_iso": "05:00",
        "temperature_c": 19.3,
        "wbgt_c": 18.87,
        "relative_humidity_pct": 95.0,
        "wind_speed_m_s": 1.67,
        "solar_radiation_w_m2": 0.0,
        "htsi_score": 14.8,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 6,
        "hour_label": "6:00 AM",
        "time_iso": "06:00",
        "temperature_c": 19.2,
        "wbgt_c": 18.8,
        "relative_humidity_pct": 95.0,
        "wind_speed_m_s": 1.42,
        "solar_radiation_w_m2": 15.9,
        "htsi_score": 14.4,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 7,
        "hour_label": "7:00 AM",
        "time_iso": "07:00",
        "temperature_c": 20.4,
        "wbgt_c": 20.21,
        "relative_humidity_pct": 90.0,
        "wind_speed_m_s": 1.44,
        "solar_radiation_w_m2": 364.4,
        "htsi_score": 19.4,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 8,
        "hour_label": "8:00 AM",
        "time_iso": "08:00",
        "temperature_c": 22.5,
        "wbgt_c": 21.88,
        "relative_humidity_pct": 81.0,
        "wind_speed_m_s": 1.64,
        "solar_radiation_w_m2": 617.4,
        "htsi_score": 26.1,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 9,
        "hour_label": "9:00 AM",
        "time_iso": "09:00",
        "temperature_c": 24.9,
        "wbgt_c": 23.19,
        "relative_humidity_pct": 68.0,
        "wind_speed_m_s": 1.67,
        "solar_radiation_w_m2": 763.3,
        "htsi_score": 31.8,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 10,
        "hour_label": "10:00 AM",
        "time_iso": "10:00",
        "temperature_c": 27.0,
        "wbgt_c": 24.25,
        "relative_humidity_pct": 58.0,
        "wind_speed_m_s": 1.64,
        "solar_radiation_w_m2": 831.2,
        "htsi_score": 37.2,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 11,
        "hour_label": "11:00 AM",
        "time_iso": "11:00",
        "temperature_c": 28.4,
        "wbgt_c": 24.58,
        "relative_humidity_pct": 49.0,
        "wind_speed_m_s": 1.47,
        "solar_radiation_w_m2": 838.0,
        "htsi_score": 38.6,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 12,
        "hour_label": "12:00 PM",
        "time_iso": "12:00",
        "temperature_c": 29.5,
        "wbgt_c": 24.71,
        "relative_humidity_pct": 42.0,
        "wind_speed_m_s": 1.58,
        "solar_radiation_w_m2": 880.0,
        "htsi_score": 39.2,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 13,
        "hour_label": "1:00 PM",
        "time_iso": "13:00",
        "temperature_c": 29.9,
        "wbgt_c": 24.69,
        "relative_humidity_pct": 40.0,
        "wind_speed_m_s": 1.56,
        "solar_radiation_w_m2": 813.9,
        "htsi_score": 39.3,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 14,
        "hour_label": "2:00 PM",
        "time_iso": "14:00",
        "temperature_c": 29.9,
        "wbgt_c": 24.45,
        "relative_humidity_pct": 40.0,
        "wind_speed_m_s": 1.67,
        "solar_radiation_w_m2": 702.9,
        "htsi_score": 38.7,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 15,
        "hour_label": "3:00 PM",
        "time_iso": "15:00",
        "temperature_c": 29.8,
        "wbgt_c": 24.37,
        "relative_humidity_pct": 40.0,
        "wind_speed_m_s": 1.58,
        "solar_radiation_w_m2": 685.8,
        "htsi_score": 38.4,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 16,
        "hour_label": "4:00 PM",
        "time_iso": "16:00",
        "temperature_c": 29.5,
        "wbgt_c": 24.15,
        "relative_humidity_pct": 41.0,
        "wind_speed_m_s": 1.61,
        "solar_radiation_w_m2": 643.1,
        "htsi_score": 37.6,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 17,
        "hour_label": "5:00 PM",
        "time_iso": "17:00",
        "temperature_c": 28.6,
        "wbgt_c": 23.46,
        "relative_humidity_pct": 44.0,
        "wind_speed_m_s": 1.42,
        "solar_radiation_w_m2": 457.9,
        "htsi_score": 35.2,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 18,
        "hour_label": "6:00 PM",
        "time_iso": "18:00",
        "temperature_c": 27.0,
        "wbgt_c": 23.07,
        "relative_humidity_pct": 58.0,
        "wind_speed_m_s": 0.81,
        "solar_radiation_w_m2": 120.1,
        "htsi_score": 34.5,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 19,
        "hour_label": "7:00 PM",
        "time_iso": "19:00",
        "temperature_c": 26.0,
        "wbgt_c": 22.29,
        "relative_humidity_pct": 62.0,
        "wind_speed_m_s": 1.28,
        "solar_radiation_w_m2": 0.0,
        "htsi_score": 30.8,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 20,
        "hour_label": "8:00 PM",
        "time_iso": "20:00",
        "temperature_c": 25.3,
        "wbgt_c": 21.84,
        "relative_humidity_pct": 64.0,
        "wind_speed_m_s": 1.33,
        "solar_radiation_w_m2": 0.0,
        "htsi_score": 28.7,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 21,
        "hour_label": "9:00 PM",
        "time_iso": "21:00",
        "temperature_c": 24.5,
        "wbgt_c": 21.39,
        "relative_humidity_pct": 67.0,
        "wind_speed_m_s": 1.14,
        "solar_radiation_w_m2": 0.0,
        "htsi_score": 26.6,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 22,
        "hour_label": "10:00 PM",
        "time_iso": "22:00",
        "temperature_c": 24.2,
        "wbgt_c": 21.2,
        "relative_humidity_pct": 68.0,
        "wind_speed_m_s": 0.78,
        "solar_radiation_w_m2": 0.0,
        "htsi_score": 25.8,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      },
      {
        "hour": 23,
        "hour_label": "11:00 PM",
        "time_iso": "23:00",
        "temperature_c": 23.8,
        "wbgt_c": 20.92,
        "relative_humidity_pct": 69.0,
        "wind_speed_m_s": 1.81,
        "solar_radiation_w_m2": 0.0,
        "htsi_score": 24.5,
        "risk_tier": "GREEN",
        "phase": "SAFE_ZONE"
      }
    ]
  },
  "diurnal_forecast_24h": [
    {
      "hour": 0,
      "hour_label": "12:00 AM",
      "time_iso": "00:00",
      "temperature_c": 21.1,
      "wbgt_c": 19.96,
      "relative_humidity_pct": 87.0,
      "wind_speed_m_s": 2.0,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 19.7,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 1,
      "hour_label": "1:00 AM",
      "time_iso": "01:00",
      "temperature_c": 20.6,
      "wbgt_c": 19.82,
      "relative_humidity_pct": 91.0,
      "wind_speed_m_s": 2.03,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 19.0,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 2,
      "hour_label": "2:00 AM",
      "time_iso": "02:00",
      "temperature_c": 20.2,
      "wbgt_c": 19.51,
      "relative_humidity_pct": 92.0,
      "wind_speed_m_s": 1.97,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 17.6,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 3,
      "hour_label": "3:00 AM",
      "time_iso": "03:00",
      "temperature_c": 19.8,
      "wbgt_c": 19.29,
      "relative_humidity_pct": 94.0,
      "wind_speed_m_s": 1.89,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 16.6,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 4,
      "hour_label": "4:00 AM",
      "time_iso": "04:00",
      "temperature_c": 19.4,
      "wbgt_c": 18.97,
      "relative_humidity_pct": 95.0,
      "wind_speed_m_s": 1.72,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 15.2,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 5,
      "hour_label": "5:00 AM",
      "time_iso": "05:00",
      "temperature_c": 19.3,
      "wbgt_c": 18.87,
      "relative_humidity_pct": 95.0,
      "wind_speed_m_s": 1.67,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 14.8,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 6,
      "hour_label": "6:00 AM",
      "time_iso": "06:00",
      "temperature_c": 19.2,
      "wbgt_c": 18.8,
      "relative_humidity_pct": 95.0,
      "wind_speed_m_s": 1.42,
      "solar_radiation_w_m2": 15.9,
      "htsi_score": 14.4,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 7,
      "hour_label": "7:00 AM",
      "time_iso": "07:00",
      "temperature_c": 20.4,
      "wbgt_c": 20.21,
      "relative_humidity_pct": 90.0,
      "wind_speed_m_s": 1.44,
      "solar_radiation_w_m2": 364.4,
      "htsi_score": 19.4,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 8,
      "hour_label": "8:00 AM",
      "time_iso": "08:00",
      "temperature_c": 22.5,
      "wbgt_c": 21.88,
      "relative_humidity_pct": 81.0,
      "wind_speed_m_s": 1.64,
      "solar_radiation_w_m2": 617.4,
      "htsi_score": 26.1,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 9,
      "hour_label": "9:00 AM",
      "time_iso": "09:00",
      "temperature_c": 24.9,
      "wbgt_c": 23.19,
      "relative_humidity_pct": 68.0,
      "wind_speed_m_s": 1.67,
      "solar_radiation_w_m2": 763.3,
      "htsi_score": 31.8,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 10,
      "hour_label": "10:00 AM",
      "time_iso": "10:00",
      "temperature_c": 27.0,
      "wbgt_c": 24.25,
      "relative_humidity_pct": 58.0,
      "wind_speed_m_s": 1.64,
      "solar_radiation_w_m2": 831.2,
      "htsi_score": 37.2,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 11,
      "hour_label": "11:00 AM",
      "time_iso": "11:00",
      "temperature_c": 28.4,
      "wbgt_c": 24.58,
      "relative_humidity_pct": 49.0,
      "wind_speed_m_s": 1.47,
      "solar_radiation_w_m2": 838.0,
      "htsi_score": 38.6,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 12,
      "hour_label": "12:00 PM",
      "time_iso": "12:00",
      "temperature_c": 29.5,
      "wbgt_c": 24.71,
      "relative_humidity_pct": 42.0,
      "wind_speed_m_s": 1.58,
      "solar_radiation_w_m2": 880.0,
      "htsi_score": 39.2,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 13,
      "hour_label": "1:00 PM",
      "time_iso": "13:00",
      "temperature_c": 29.9,
      "wbgt_c": 24.69,
      "relative_humidity_pct": 40.0,
      "wind_speed_m_s": 1.56,
      "solar_radiation_w_m2": 813.9,
      "htsi_score": 39.3,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 14,
      "hour_label": "2:00 PM",
      "time_iso": "14:00",
      "temperature_c": 29.9,
      "wbgt_c": 24.45,
      "relative_humidity_pct": 40.0,
      "wind_speed_m_s": 1.67,
      "solar_radiation_w_m2": 702.9,
      "htsi_score": 38.7,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 15,
      "hour_label": "3:00 PM",
      "time_iso": "15:00",
      "temperature_c": 29.8,
      "wbgt_c": 24.37,
      "relative_humidity_pct": 40.0,
      "wind_speed_m_s": 1.58,
      "solar_radiation_w_m2": 685.8,
      "htsi_score": 38.4,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 16,
      "hour_label": "4:00 PM",
      "time_iso": "16:00",
      "temperature_c": 29.5,
      "wbgt_c": 24.15,
      "relative_humidity_pct": 41.0,
      "wind_speed_m_s": 1.61,
      "solar_radiation_w_m2": 643.1,
      "htsi_score": 37.6,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 17,
      "hour_label": "5:00 PM",
      "time_iso": "17:00",
      "temperature_c": 28.6,
      "wbgt_c": 23.46,
      "relative_humidity_pct": 44.0,
      "wind_speed_m_s": 1.42,
      "solar_radiation_w_m2": 457.9,
      "htsi_score": 35.2,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 18,
      "hour_label": "6:00 PM",
      "time_iso": "18:00",
      "temperature_c": 27.0,
      "wbgt_c": 23.07,
      "relative_humidity_pct": 58.0,
      "wind_speed_m_s": 0.81,
      "solar_radiation_w_m2": 120.1,
      "htsi_score": 34.5,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 19,
      "hour_label": "7:00 PM",
      "time_iso": "19:00",
      "temperature_c": 26.0,
      "wbgt_c": 22.29,
      "relative_humidity_pct": 62.0,
      "wind_speed_m_s": 1.28,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 30.8,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 20,
      "hour_label": "8:00 PM",
      "time_iso": "20:00",
      "temperature_c": 25.3,
      "wbgt_c": 21.84,
      "relative_humidity_pct": 64.0,
      "wind_speed_m_s": 1.33,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 28.7,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 21,
      "hour_label": "9:00 PM",
      "time_iso": "21:00",
      "temperature_c": 24.5,
      "wbgt_c": 21.39,
      "relative_humidity_pct": 67.0,
      "wind_speed_m_s": 1.14,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 26.6,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 22,
      "hour_label": "10:00 PM",
      "time_iso": "22:00",
      "temperature_c": 24.2,
      "wbgt_c": 21.2,
      "relative_humidity_pct": 68.0,
      "wind_speed_m_s": 0.78,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 25.8,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 23,
      "hour_label": "11:00 PM",
      "time_iso": "23:00",
      "temperature_c": 23.8,
      "wbgt_c": 20.92,
      "relative_humidity_pct": 69.0,
      "wind_speed_m_s": 1.81,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 24.5,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    }
  ],
  "wards": [
    {
      "ward_id": "BBMP-138",
      "name": "Shivajinagar & Majestic Bus Interchange",
      "name_kn": "ಶಿವಾಜಿನಗರ ಮತ್ತು ಮೆಜೆಸ್ಟಿಕ್ ಬಸ್ ನಿಲ್ದಾಣ",
      "name_hi": "शिवाजीनगर और मैजेस्टिक बस स्टैंड",
      "zone": "East / Central Zone",
      "population": 185000,
      "center": [
        12.978,
        77.585
      ],
      "microclimate": {
        "temperature_c": 21.6,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 0.81,
        "wet_bulb_c": 20.45,
        "heat_index_c": 22.17,
        "wbgt_c": 20.79,
        "htsi_score": 23.1,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.6,
        "variance_c": 1.0,
        "accuracy_score_pct": 98.8,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 18.2,
        "outdoor_labor_pct": 48.5,
        "tin_roof_pct": 52.0,
        "tree_canopy_pct": 5.4,
        "hospital_beds_per_k": 2.1
      },
      "vulnerability_score": 74.9,
      "vulnerability_tier": "HIGH",
      "vulnerability_details": {
        "score": 74.9,
        "tier": "HIGH",
        "tier_label_en": "High Vulnerability",
        "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
        "tier_label_hi": "उच्च संवेदनशीलता",
        "sensitivity_score": 70.3,
        "exposure_score": 79.6,
        "adaptive_deficit_score": 73.9
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as low wind ventilation (0.8 m/s) trapping hot air in street canyons, while 52% tin roofs radiating secondary infrared heat into informal homes.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಕಡಿಮೆ ಗಾಳಿಯು (0.8 m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು 52% ತವರದ ಸೂರುಗಳು ಹೆಚ್ಚಿನ ಶಾಖವನ್ನು ಹೊರಸೂಸುತ್ತವೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: धीमी हवा (0.8 m/s) संकरी गलियों में गर्मी को रोक रही है, तथा 52% टिन की छतें बस्तियों में अतिरिक्त गर्मी फैलाती हैं तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 36,
          "wind_ventilation_pct": 18,
          "urban_heat_island_pct": 23,
          "canopy_buffer_pct": 23
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-41",
      "name": "Peenya Industrial Area & Jalahalli",
      "name_kn": "ಪೀಣ್ಯ ಕೈಗಾರಿಕಾ ಪ್ರದೇಶ ಮತ್ತು ಜಾಲಹಳ್ಳಿ",
      "name_hi": "पीण्या औद्योगिक क्षेत्र और जलाहल्ली",
      "zone": "Rajarajeshwari Nagar Zone",
      "population": 240000,
      "center": [
        13.0285,
        77.518
      ],
      "microclimate": {
        "temperature_c": 21.7,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.01,
        "wet_bulb_c": 20.59,
        "heat_index_c": 22.32,
        "wbgt_c": 20.93,
        "htsi_score": 23.7,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.7,
        "variance_c": 1.1,
        "accuracy_score_pct": 98.7,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 11.5,
        "outdoor_labor_pct": 58.0,
        "tin_roof_pct": 68.0,
        "tree_canopy_pct": 4.1,
        "hospital_beds_per_k": 1.2
      },
      "vulnerability_score": 82.8,
      "vulnerability_tier": "CRITICAL",
      "vulnerability_details": {
        "score": 82.8,
        "tier": "CRITICAL",
        "tier_label_en": "Critical Vulnerability",
        "tier_label_kn": "ಅತ್ಯಂತ ಅಪಾಯಕಾರಿ ದುರ್ಬಲತೆ",
        "tier_label_hi": "अति संवेदनशील क्षेत्र",
        "sensitivity_score": 67.6,
        "exposure_score": 95.7,
        "adaptive_deficit_score": 83.4
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as low wind ventilation (1.0 m/s) trapping hot air in street canyons, while 68% tin roofs radiating secondary infrared heat into informal homes.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಕಡಿಮೆ ಗಾಳಿಯು (1.0 m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು 68% ತವರದ ಸೂರುಗಳು ಹೆಚ್ಚಿನ ಶಾಖವನ್ನು ಹೊರಸೂಸುತ್ತವೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: धीमी हवा (1.0 m/s) संकरी गलियों में गर्मी को रोक रही है, तथा 68% टिन की छतें बस्तियों में अतिरिक्त गर्मी फैलाती हैं तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 36,
          "wind_ventilation_pct": 16,
          "urban_heat_island_pct": 24,
          "canopy_buffer_pct": 24
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-85",
      "name": "Whitefield & ITPL Tech Corridor",
      "name_kn": "ವೈಟ್‌ಫೀಲ್ಡ್ ಮತ್ತು ಐಟಿಪಿಎಲ್ ಟೆಕ್ ಕಾರಿಡಾರ್",
      "name_hi": "व्हाइटफील्ड और आईटीपीएल टेक कॉरिडोर",
      "zone": "Mahadevapura Zone",
      "population": 290000,
      "center": [
        12.9698,
        77.7499
      ],
      "microclimate": {
        "temperature_c": 21.4,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.52,
        "wet_bulb_c": 20.25,
        "heat_index_c": 21.94,
        "wbgt_c": 20.59,
        "htsi_score": 22.2,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.4,
        "variance_c": 0.8,
        "accuracy_score_pct": 99.0,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 12.0,
        "outdoor_labor_pct": 34.0,
        "tin_roof_pct": 36.0,
        "tree_canopy_pct": 9.2,
        "hospital_beds_per_k": 2.8
      },
      "vulnerability_score": 56.9,
      "vulnerability_tier": "HIGH",
      "vulnerability_details": {
        "score": 56.9,
        "tier": "HIGH",
        "tier_label_en": "High Vulnerability",
        "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
        "tier_label_hi": "उच्च संवेदनशीलता",
        "sensitivity_score": 48.1,
        "exposure_score": 61.6,
        "adaptive_deficit_score": 61.8
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.5 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 42,
          "wind_ventilation_pct": 12,
          "urban_heat_island_pct": 24,
          "canopy_buffer_pct": 22
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-111",
      "name": "Malleshwaram & IISc Green Canopy",
      "name_kn": "ಮಲ್ಲೇಶ್ವರಂ ಮತ್ತು ಐಐಎಸ್‌ಸಿ ಹಸಿರು ವಲಯ",
      "name_hi": "मल्लेश्वरम और आईआईएससी ग्रीन बेल्ट",
      "zone": "West Zone",
      "population": 115000,
      "center": [
        13.0031,
        77.567
      ],
      "microclimate": {
        "temperature_c": 19.8,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 2.23,
        "wet_bulb_c": 18.73,
        "heat_index_c": 20.24,
        "wbgt_c": 19.06,
        "htsi_score": 15.7,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 19.8,
        "variance_c": -0.8,
        "accuracy_score_pct": 99.0,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 21.4,
        "outdoor_labor_pct": 8.5,
        "tin_roof_pct": 4.0,
        "tree_canopy_pct": 46.2,
        "hospital_beds_per_k": 7.4
      },
      "vulnerability_score": 15.8,
      "vulnerability_tier": "LOW",
      "vulnerability_details": {
        "score": 15.8,
        "tier": "LOW",
        "tier_label_en": "Low Vulnerability (Resilient)",
        "tier_label_kn": "ಕಡಿಮೆ ದುರ್ಬಲತೆ (ಸುರಕ್ಷಿತ)",
        "tier_label_hi": "कम संवेदनशीलता (सुरक्षित)",
        "sensitivity_score": 41.6,
        "exposure_score": 3.1,
        "adaptive_deficit_score": 0.0
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as local parklands and green cover providing a -0.77°C cooling buffer, while 46% tree canopy shading roadways and releasing moisture.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಉದ್ಯಾನವನಗಳು -0.77°C ನಷ್ಟು ತಂಪಾಗಿಸುವ ವಾತಾವರಣ ನೀಡುತ್ತವೆ, ಮತ್ತು 46% ಮರಗಳ ಹೊದಿಕೆಯು ನೆರಳು ಮತ್ತು ತಂಪನ್ನು ನೀಡುತ್ತದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: स्थानीय हरित क्षेत्र -0.77°C का प्राकृतिक शीतलन प्रदान करते हैं, तथा 46% वृक्ष आवरण सड़कों पर छाया और ठंडक प्रदान करता है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 83,
          "wind_ventilation_pct": 7,
          "urban_heat_island_pct": 10,
          "canopy_buffer_pct": 5
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-151",
      "name": "Koramangala Commercial & Gig Hub",
      "name_kn": "ಕೋರಮಂಗಲ ವಾಣಿಜ್ಯ ಮತ್ತು ಗಿಗ್ ಹಬ್",
      "name_hi": "कोरमंगला वाणिज्यिक और गिग हब",
      "zone": "South Zone",
      "population": 160000,
      "center": [
        12.9352,
        77.6245
      ],
      "microclimate": {
        "temperature_c": 21.1,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.73,
        "wet_bulb_c": 19.97,
        "heat_index_c": 21.63,
        "wbgt_c": 20.31,
        "htsi_score": 21.0,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.1,
        "variance_c": 0.5,
        "accuracy_score_pct": 99.4,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 14.2,
        "outdoor_labor_pct": 44.0,
        "tin_roof_pct": 18.0,
        "tree_canopy_pct": 21.0,
        "hospital_beds_per_k": 4.6
      },
      "vulnerability_score": 43.9,
      "vulnerability_tier": "MODERATE",
      "vulnerability_details": {
        "score": 43.9,
        "tier": "MODERATE",
        "tier_label_en": "Moderate Vulnerability",
        "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
        "tier_label_hi": "मध्यम संवेदनशीलता",
        "sensitivity_score": 60.1,
        "exposure_score": 40.2,
        "adaptive_deficit_score": 27.2
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.7 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 51,
          "wind_ventilation_pct": 12,
          "urban_heat_island_pct": 25,
          "canopy_buffer_pct": 12
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-174",
      "name": "HSR Layout & Bellandur Lake Basin",
      "name_kn": "ಎಚ್‌ಎಸ್‌ಆರ್ ಲೇಔಟ್ ಮತ್ತು ಬೆಳ್ಳಂದೂರು ಕೆರೆ ಪ್ರದೇಶ",
      "name_hi": "एचएसआर लेआउट और बेलंदूर बेसिन",
      "zone": "Bommanahalli Zone",
      "population": 210000,
      "center": [
        12.9121,
        77.6446
      ],
      "microclimate": {
        "temperature_c": 21.2,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.83,
        "wet_bulb_c": 20.04,
        "heat_index_c": 21.71,
        "wbgt_c": 20.38,
        "htsi_score": 21.3,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.2,
        "variance_c": 0.6,
        "accuracy_score_pct": 99.3,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 13.0,
        "outdoor_labor_pct": 32.0,
        "tin_roof_pct": 24.0,
        "tree_canopy_pct": 14.5,
        "hospital_beds_per_k": 3.1
      },
      "vulnerability_score": 48.1,
      "vulnerability_tier": "MODERATE",
      "vulnerability_details": {
        "score": 48.1,
        "tier": "MODERATE",
        "tier_label_en": "Moderate Vulnerability",
        "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
        "tier_label_hi": "मध्यम संवेदनशीलता",
        "sensitivity_score": 48.0,
        "exposure_score": 46.8,
        "adaptive_deficit_score": 50.3
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.8 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 48,
          "wind_ventilation_pct": 10,
          "urban_heat_island_pct": 24,
          "canopy_buffer_pct": 18
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-198",
      "name": "Electronic City Phase 1 & Konappana",
      "name_kn": "ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿ ಫೇಸ್ 1 ಮತ್ತು ಕೋನಪ್ಪನ",
      "name_hi": "इलेक्ट्रॉनिक सिटी फेज 1",
      "zone": "Anekal / South Outskirts",
      "population": 175000,
      "center": [
        12.8452,
        77.6602
      ],
      "microclimate": {
        "temperature_c": 21.2,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.93,
        "wet_bulb_c": 20.11,
        "heat_index_c": 21.78,
        "wbgt_c": 20.45,
        "htsi_score": 21.6,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.2,
        "variance_c": 0.6,
        "accuracy_score_pct": 99.3,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 9.8,
        "outdoor_labor_pct": 38.0,
        "tin_roof_pct": 35.0,
        "tree_canopy_pct": 16.0,
        "hospital_beds_per_k": 2.2
      },
      "vulnerability_score": 53.4,
      "vulnerability_tier": "MODERATE",
      "vulnerability_details": {
        "score": 53.4,
        "tier": "MODERATE",
        "tier_label_en": "Moderate Vulnerability",
        "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
        "tier_label_hi": "मध्यम संवेदनशीलता",
        "sensitivity_score": 47.9,
        "exposure_score": 57.2,
        "adaptive_deficit_score": 55.0
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.9 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 49,
          "wind_ventilation_pct": 8,
          "urban_heat_island_pct": 26,
          "canopy_buffer_pct": 17
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-10",
      "name": "Yelahanka Satellite Town & Kogilu",
      "name_kn": "ಯಲಹಂಕ ಉಪನಗರ ಮತ್ತು ಕೋಗಿಲು",
      "name_hi": "यलहंका उपनगर और कोगिलु",
      "zone": "Yelahanka Zone",
      "population": 165000,
      "center": [
        13.1007,
        77.5963
      ],
      "microclimate": {
        "temperature_c": 20.7,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 2.13,
        "wet_bulb_c": 19.56,
        "heat_index_c": 21.17,
        "wbgt_c": 19.89,
        "htsi_score": 19.3,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 20.7,
        "variance_c": 0.1,
        "accuracy_score_pct": 99.9,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 17.0,
        "outdoor_labor_pct": 28.0,
        "tin_roof_pct": 20.0,
        "tree_canopy_pct": 28.5,
        "hospital_beds_per_k": 3.8
      },
      "vulnerability_score": 35.4,
      "vulnerability_tier": "MODERATE",
      "vulnerability_details": {
        "score": 35.4,
        "tier": "MODERATE",
        "tier_label_en": "Moderate Vulnerability",
        "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
        "tier_label_hi": "मध्यम संवेदनशीलता",
        "sensitivity_score": 51.0,
        "exposure_score": 31.0,
        "adaptive_deficit_score": 20.7
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as 28% tree canopy shading roadways and releasing moisture.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: 28% ಮರಗಳ ಹೊದಿಕೆಯು ನೆರಳು ಮತ್ತು ತಂಪನ್ನು ನೀಡುತ್ತದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: 28% वृक्ष आवरण सड़कों पर छाया और ठंडक प्रदान करता है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 66,
          "wind_ventilation_pct": 7,
          "urban_heat_island_pct": 24,
          "canopy_buffer_pct": 5
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-153",
      "name": "Jayanagar & Basavanagudi Heritage Parklands",
      "name_kn": "ಜಯನಗರ ಮತ್ತು ಬಸವನಗುಡಿ ಹಸಿರು ವಲಯ",
      "name_hi": "जयनगर और बसवनगुडी ग्रीन बेल्ट",
      "zone": "South Zone",
      "population": 175000,
      "center": [
        12.925,
        77.5938
      ],
      "microclimate": {
        "temperature_c": 20.2,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.93,
        "wet_bulb_c": 19.07,
        "heat_index_c": 20.63,
        "wbgt_c": 19.4,
        "htsi_score": 17.2,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 20.2,
        "variance_c": -0.4,
        "accuracy_score_pct": 99.5,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 23.5,
        "outdoor_labor_pct": 18.0,
        "tin_roof_pct": 6.0,
        "tree_canopy_pct": 34.8,
        "hospital_beds_per_k": 6.8
      },
      "vulnerability_score": 21.6,
      "vulnerability_tier": "LOW",
      "vulnerability_details": {
        "score": 21.6,
        "tier": "LOW",
        "tier_label_en": "Low Vulnerability (Resilient)",
        "tier_label_kn": "ಕಡಿಮೆ ದುರ್ಬಲತೆ (ಸುರಕ್ಷಿತ)",
        "tier_label_hi": "कम संवेदनशीलता (सुरक्षित)",
        "sensitivity_score": 53.0,
        "exposure_score": 7.4,
        "adaptive_deficit_score": 0.3
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as local parklands and green cover providing a -0.42°C cooling buffer, while 35% tree canopy shading roadways and releasing moisture.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಉದ್ಯಾನವನಗಳು -0.42°C ನಷ್ಟು ತಂಪಾಗಿಸುವ ವಾತಾವರಣ ನೀಡುತ್ತವೆ, ಮತ್ತು 35% ಮರಗಳ ಹೊದಿಕೆಯು ನೆರಳು ಮತ್ತು ತಂಪನ್ನು ನೀಡುತ್ತದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: स्थानीय हरित क्षेत्र -0.42°C का प्राकृतिक शीतलन प्रदान करते हैं, तथा 35% वृक्ष आवरण सड़कों पर छाया और ठंडक प्रदान करता है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 71,
          "wind_ventilation_pct": 12,
          "urban_heat_island_pct": 16,
          "canopy_buffer_pct": 5
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-139",
      "name": "K.R. Market & Chickpet Commercial Quarters",
      "name_kn": "ಕೆ.ಆರ್. ಮಾರುಕಟ್ಟೆ ಮತ್ತು ಚಿಕ್ಕಪೇಟೆ ವ್ಯಾಪಾರ ವಲಯ",
      "name_hi": "के.आर. मार्केट और चिकपेट बाजार",
      "zone": "South / Central Zone",
      "population": 215000,
      "center": [
        12.966,
        77.575
      ],
      "microclimate": {
        "temperature_c": 21.8,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 0.71,
        "wet_bulb_c": 20.66,
        "heat_index_c": 22.4,
        "wbgt_c": 21.0,
        "htsi_score": 24.0,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.8,
        "variance_c": 1.2,
        "accuracy_score_pct": 98.6,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 14.8,
        "outdoor_labor_pct": 64.0,
        "tin_roof_pct": 62.0,
        "tree_canopy_pct": 3.2,
        "hospital_beds_per_k": 2.4
      },
      "vulnerability_score": 83.2,
      "vulnerability_tier": "CRITICAL",
      "vulnerability_details": {
        "score": 83.2,
        "tier": "CRITICAL",
        "tier_label_en": "Critical Vulnerability",
        "tier_label_kn": "ಅತ್ಯಂತ ಅಪಾಯಕಾರಿ ದುರ್ಬಲತೆ",
        "tier_label_hi": "अति संवेदनशील क्षेत्र",
        "sensitivity_score": 77.9,
        "exposure_score": 92.8,
        "adaptive_deficit_score": 75.3
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as low wind ventilation (0.7 m/s) trapping hot air in street canyons, while 62% tin roofs radiating secondary infrared heat into informal homes.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಕಡಿಮೆ ಗಾಳಿಯು (0.7 m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು 62% ತವರದ ಸೂರುಗಳು ಹೆಚ್ಚಿನ ಶಾಖವನ್ನು ಹೊರಸೂಸುತ್ತವೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: धीमी हवा (0.7 m/s) संकरी गलियों में गर्मी को रोक रही है, तथा 62% टिन की छतें बस्तियों में अतिरिक्त गर्मी फैलाती हैं तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 34,
          "wind_ventilation_pct": 18,
          "urban_heat_island_pct": 24,
          "canopy_buffer_pct": 24
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-82",
      "name": "Indiranagar & HAL Defence Aerospace Hub",
      "name_kn": "ಇಂದಿರಾನಗರ ಮತ್ತು ಎಚ್‌ಎಎಲ್ ವಲಯ",
      "name_hi": "इंदिरानगर और एचएएल डिफेंस हब",
      "zone": "East Zone",
      "population": 155000,
      "center": [
        12.9719,
        77.6412
      ],
      "microclimate": {
        "temperature_c": 21.0,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.73,
        "wet_bulb_c": 19.87,
        "heat_index_c": 21.52,
        "wbgt_c": 20.21,
        "htsi_score": 20.6,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.0,
        "variance_c": 0.4,
        "accuracy_score_pct": 99.5,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 16.5,
        "outdoor_labor_pct": 28.0,
        "tin_roof_pct": 14.0,
        "tree_canopy_pct": 22.4,
        "hospital_beds_per_k": 5.2
      },
      "vulnerability_score": 36.7,
      "vulnerability_tier": "MODERATE",
      "vulnerability_details": {
        "score": 36.7,
        "tier": "MODERATE",
        "tier_label_en": "Moderate Vulnerability",
        "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
        "tier_label_hi": "मध्यम संवेदनशीलता",
        "sensitivity_score": 50.2,
        "exposure_score": 34.4,
        "adaptive_deficit_score": 21.6
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.7 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 53,
          "wind_ventilation_pct": 12,
          "urban_heat_island_pct": 24,
          "canopy_buffer_pct": 11
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-21",
      "name": "Hebbal Flyover & Manyata Tech Basin",
      "name_kn": "ಹೆಬ್ಬಾಳ ಮತ್ತು ಮಾನ್ಯತಾ ಟೆಕ್ ಪಾರ್ಕ್",
      "name_hi": "हेब्बाल और मान्यता टेक पार्क",
      "zone": "Byatarayanapura / North Zone",
      "population": 225000,
      "center": [
        13.0358,
        77.597
      ],
      "microclimate": {
        "temperature_c": 21.3,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.83,
        "wet_bulb_c": 20.14,
        "heat_index_c": 21.82,
        "wbgt_c": 20.48,
        "htsi_score": 21.8,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.3,
        "variance_c": 0.7,
        "accuracy_score_pct": 99.2,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 11.8,
        "outdoor_labor_pct": 42.0,
        "tin_roof_pct": 32.0,
        "tree_canopy_pct": 12.6,
        "hospital_beds_per_k": 3.5
      },
      "vulnerability_score": 54.0,
      "vulnerability_tier": "MODERATE",
      "vulnerability_details": {
        "score": 54.0,
        "tier": "MODERATE",
        "tier_label_en": "Moderate Vulnerability",
        "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
        "tier_label_hi": "मध्यम संवेदनशीलता",
        "sensitivity_score": 54.5,
        "exposure_score": 55.7,
        "adaptive_deficit_score": 50.4
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.8 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 46,
          "wind_ventilation_pct": 9,
          "urban_heat_island_pct": 25,
          "canopy_buffer_pct": 20
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-128",
      "name": "Rajajinagar Industrial & Metro Interchange",
      "name_kn": "ರಾಜಾಜಿನಗರ ಕೈಗಾರಿಕಾ ಮತ್ತು ಮೆಟ್ರೋ ನಿಲ್ದಾಣ",
      "name_hi": "राजाजीनगर औद्योगिक व मेट्रो इंटरचेंज",
      "zone": "West Zone",
      "population": 210000,
      "center": [
        12.998,
        77.555
      ],
      "microclimate": {
        "temperature_c": 21.3,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.32,
        "wet_bulb_c": 20.21,
        "heat_index_c": 21.9,
        "wbgt_c": 20.55,
        "htsi_score": 22.1,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.3,
        "variance_c": 0.7,
        "accuracy_score_pct": 99.2,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 16.5,
        "outdoor_labor_pct": 42.0,
        "tin_roof_pct": 44.0,
        "tree_canopy_pct": 8.5,
        "hospital_beds_per_k": 2.9
      },
      "vulnerability_score": 64.1,
      "vulnerability_tier": "HIGH",
      "vulnerability_details": {
        "score": 64.1,
        "tier": "HIGH",
        "tier_label_en": "High Vulnerability",
        "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
        "tier_label_hi": "उच्च संवेदनशीलता",
        "sensitivity_score": 62.1,
        "exposure_score": 67.0,
        "adaptive_deficit_score": 62.2
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.3 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 41,
          "wind_ventilation_pct": 14,
          "urban_heat_island_pct": 23,
          "canopy_buffer_pct": 22
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-165",
      "name": "Banashankari & Padmanabhanagar Cultural Hub",
      "name_kn": "ಬನಶಂಕರಿ ಮತ್ತು ಪದ್ಮನಾಭನಗರ ಸಾಂಸ್ಕೃತಿಕ ಕೇಂದ್ರ",
      "name_hi": "बनशंकरी और पद्मनाभनगर सांस्कृतिक केंद्र",
      "zone": "South Zone",
      "population": 225000,
      "center": [
        12.923,
        77.552
      ],
      "microclimate": {
        "temperature_c": 20.7,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.73,
        "wet_bulb_c": 19.62,
        "heat_index_c": 21.25,
        "wbgt_c": 19.96,
        "htsi_score": 19.6,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 20.7,
        "variance_c": 0.1,
        "accuracy_score_pct": 99.9,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 21.0,
        "outdoor_labor_pct": 28.0,
        "tin_roof_pct": 22.0,
        "tree_canopy_pct": 24.5,
        "hospital_beds_per_k": 3.4
      },
      "vulnerability_score": 41.6,
      "vulnerability_tier": "MODERATE",
      "vulnerability_details": {
        "score": 41.6,
        "tier": "MODERATE",
        "tier_label_en": "Moderate Vulnerability",
        "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
        "tier_label_hi": "मध्यम संवेदनशीलता",
        "sensitivity_score": 57.4,
        "exposure_score": 34.4,
        "adaptive_deficit_score": 30.8
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.7 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 57,
          "wind_ventilation_pct": 13,
          "urban_heat_island_pct": 22,
          "canopy_buffer_pct": 8
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-36",
      "name": "Yeshwanthpur APMC Grain Market & Rail Basin",
      "name_kn": "ಯಶವಂತಪುರ ಎಪಿಎಂಸಿ ಮಾರುಕಟ್ಟೆ ಮತ್ತು ರೈಲು ನಿಲ್ದಾಣ",
      "name_hi": "यशवंतपुर एपीएमसी अनाज मंडी व रेलवे जंक्शन",
      "zone": "West / North-West Zone",
      "population": 195000,
      "center": [
        13.023,
        77.546
      ],
      "microclimate": {
        "temperature_c": 21.6,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.01,
        "wet_bulb_c": 20.49,
        "heat_index_c": 22.21,
        "wbgt_c": 20.83,
        "htsi_score": 23.3,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.6,
        "variance_c": 1.0,
        "accuracy_score_pct": 98.8,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 14.0,
        "outdoor_labor_pct": 56.0,
        "tin_roof_pct": 58.0,
        "tree_canopy_pct": 6.2,
        "hospital_beds_per_k": 2.2
      },
      "vulnerability_score": 76.5,
      "vulnerability_tier": "CRITICAL",
      "vulnerability_details": {
        "score": 76.5,
        "tier": "CRITICAL",
        "tier_label_en": "Critical Vulnerability",
        "tier_label_kn": "ಅತ್ಯಂತ ಅಪಾಯಕಾರಿ ದುರ್ಬಲತೆ",
        "tier_label_hi": "अति संवेदनशील क्षेत्र",
        "sensitivity_score": 69.9,
        "exposure_score": 85.2,
        "adaptive_deficit_score": 71.8
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as low wind ventilation (1.0 m/s) trapping hot air in street canyons, while 58% tin roofs radiating secondary infrared heat into informal homes.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಕಡಿಮೆ ಗಾಳಿಯು (1.0 m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು 58% ತವರದ ಸೂರುಗಳು ಹೆಚ್ಚಿನ ಶಾಖವನ್ನು ಹೊರಸೂಸುತ್ತವೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: धीमी हवा (1.0 m/s) संकरी गलियों में गर्मी को रोक रही है, तथा 58% टिन की छतें बस्तियों में अतिरिक्त गर्मी फैलाती हैं तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 37,
          "wind_ventilation_pct": 17,
          "urban_heat_island_pct": 24,
          "canopy_buffer_pct": 22
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-89",
      "name": "Marathahalli Outer Ring Road & Tech Junction",
      "name_kn": "ಮಾರತಹಳ್ಳಿ ಔಟರ್ ರಿಂಗ್ ರೋಡ್ ಮತ್ತು ಟೆಕ್ ಕಾರಿಡಾರ್",
      "name_hi": "मराठाहल्ली आउटर रिंग रोड व टेक जंक्शन",
      "zone": "Mahadevapura Zone",
      "population": 260000,
      "center": [
        12.956,
        77.702
      ],
      "microclimate": {
        "temperature_c": 21.5,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.22,
        "wet_bulb_c": 20.38,
        "heat_index_c": 22.09,
        "wbgt_c": 20.72,
        "htsi_score": 22.8,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.5,
        "variance_c": 0.9,
        "accuracy_score_pct": 98.9,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 11.0,
        "outdoor_labor_pct": 49.0,
        "tin_roof_pct": 61.0,
        "tree_canopy_pct": 7.0,
        "hospital_beds_per_k": 1.8
      },
      "vulnerability_score": 73.0,
      "vulnerability_tier": "HIGH",
      "vulnerability_details": {
        "score": 73.0,
        "tier": "HIGH",
        "tier_label_en": "High Vulnerability",
        "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
        "tier_label_hi": "उच्च संवेदनशीलता",
        "sensitivity_score": 59.1,
        "exposure_score": 84.8,
        "adaptive_deficit_score": 73.6
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as 61% tin roofs radiating secondary infrared heat into informal homes.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: 61% ತವರದ ಸೂರುಗಳು ಹೆಚ್ಚಿನ ಶಾಖವನ್ನು ಹೊರಸೂಸುತ್ತವೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: 61% टिन की छतें बस्तियों में अतिरिक्त गर्मी फैलाती हैं तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 39,
          "wind_ventilation_pct": 15,
          "urban_heat_island_pct": 24,
          "canopy_buffer_pct": 22
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-176",
      "name": "BTM Layout & Madiwala Lake Market Corridor",
      "name_kn": "ಬಿಟಿಎಂ ಲೇಔಟ್ ಮತ್ತು ಮಡಿವಾಳ ಸರೋವರ ಕಾರಿಡಾರ್",
      "name_hi": "बीटीएम लेआउट और मदिवाला लेक मार्केट कॉरिडोर",
      "zone": "South Zone",
      "population": 235000,
      "center": [
        12.9165,
        77.611
      ],
      "microclimate": {
        "temperature_c": 21.0,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.52,
        "wet_bulb_c": 19.9,
        "heat_index_c": 21.55,
        "wbgt_c": 20.24,
        "htsi_score": 20.7,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.0,
        "variance_c": 0.4,
        "accuracy_score_pct": 99.5,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 13.5,
        "outdoor_labor_pct": 35.0,
        "tin_roof_pct": 32.0,
        "tree_canopy_pct": 18.0,
        "hospital_beds_per_k": 2.7
      },
      "vulnerability_score": 49.6,
      "vulnerability_tier": "MODERATE",
      "vulnerability_details": {
        "score": 49.6,
        "tier": "MODERATE",
        "tier_label_en": "Moderate Vulnerability",
        "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
        "tier_label_hi": "मध्यम संवेदनशीलता",
        "sensitivity_score": 51.3,
        "exposure_score": 49.4,
        "adaptive_deficit_score": 47.5
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.5 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 48,
          "wind_ventilation_pct": 14,
          "urban_heat_island_pct": 23,
          "canopy_buffer_pct": 15
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-175",
      "name": "Bommanahalli Garment Cluster & Silk Board",
      "name_kn": "ಬೊಮ್ಮನಹಳ್ಳಿ ಗಾರ್ಮೆಂಟ್ ಕ್ಲಸ್ಟರ್ ಮತ್ತು ಸಿಲ್ಕ್ ಬೋರ್ಡ್",
      "name_hi": "बोम्मनहल्ली गारमेंट क्लस्टर व सिल्क बोर्ड",
      "zone": "Bommanahalli Zone",
      "population": 275000,
      "center": [
        12.901,
        77.631
      ],
      "microclimate": {
        "temperature_c": 21.7,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 0.91,
        "wet_bulb_c": 20.56,
        "heat_index_c": 22.29,
        "wbgt_c": 20.9,
        "htsi_score": 23.6,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.7,
        "variance_c": 1.1,
        "accuracy_score_pct": 98.7,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 12.0,
        "outdoor_labor_pct": 62.0,
        "tin_roof_pct": 66.0,
        "tree_canopy_pct": 4.8,
        "hospital_beds_per_k": 1.5
      },
      "vulnerability_score": 82.4,
      "vulnerability_tier": "CRITICAL",
      "vulnerability_details": {
        "score": 82.4,
        "tier": "CRITICAL",
        "tier_label_en": "Critical Vulnerability",
        "tier_label_kn": "ಅತ್ಯಂತ ಅಪಾಯಕಾರಿ ದುರ್ಬಲತೆ",
        "tier_label_hi": "अति संवेदनशील क्षेत्र",
        "sensitivity_score": 71.7,
        "exposure_score": 93.3,
        "adaptive_deficit_score": 79.8
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as low wind ventilation (0.9 m/s) trapping hot air in street canyons, while 66% tin roofs radiating secondary infrared heat into informal homes.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಕಡಿಮೆ ಗಾಳಿಯು (0.9 m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು 66% ತವರದ ಸೂರುಗಳು ಹೆಚ್ಚಿನ ಶಾಖವನ್ನು ಹೊರಸೂಸುತ್ತವೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: धीमी हवा (0.9 m/s) संकरी गलियों में गर्मी को रोक रही है, तथा 66% टिन की छतें बस्तियों में अतिरिक्त गर्मी फैलाती हैं तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 36,
          "wind_ventilation_pct": 17,
          "urban_heat_island_pct": 24,
          "canopy_buffer_pct": 23
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-112",
      "name": "Domlur & Indiranagar 100ft Commercial Belt",
      "name_kn": "ದೋಮ್ಲೂರು ಮತ್ತು ಇಂದಿರಾನಗರ ವಾಣಿಜ್ಯ ಪಟ್ಟಿ",
      "name_hi": "डोम्लूर और इंदिरानगर कमर्शियल बेल्ट",
      "zone": "East Zone",
      "population": 155000,
      "center": [
        12.961,
        77.638
      ],
      "microclimate": {
        "temperature_c": 21.2,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.32,
        "wet_bulb_c": 20.11,
        "heat_index_c": 21.78,
        "wbgt_c": 20.45,
        "htsi_score": 21.6,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.2,
        "variance_c": 0.6,
        "accuracy_score_pct": 99.3,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 16.5,
        "outdoor_labor_pct": 42.0,
        "tin_roof_pct": 32.0,
        "tree_canopy_pct": 14.2,
        "hospital_beds_per_k": 3.2
      },
      "vulnerability_score": 56.2,
      "vulnerability_tier": "HIGH",
      "vulnerability_details": {
        "score": 56.2,
        "tier": "HIGH",
        "tier_label_en": "High Vulnerability",
        "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
        "tier_label_hi": "उच्च संवेदनशीलता",
        "sensitivity_score": 62.1,
        "exposure_score": 54.8,
        "adaptive_deficit_score": 50.1
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.3 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 44,
          "wind_ventilation_pct": 15,
          "urban_heat_island_pct": 23,
          "canopy_buffer_pct": 18
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-7",
      "name": "Byatarayanapura Bellary Road Airport Gateway",
      "name_kn": "ಬ್ಯಾಟರಾಯನಪುರ ಬಳ್ಳಾರಿ ರಸ್ತೆ ಹೆದ್ದಾರಿ ಕಾರಿಡಾರ್",
      "name_hi": "ब्याटरायनपुरा बेल्लारी रोड हाईवे कॉरिडोर",
      "zone": "Yelahanka Zone",
      "population": 210000,
      "center": [
        13.062,
        77.592
      ],
      "microclimate": {
        "temperature_c": 21.4,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.52,
        "wet_bulb_c": 20.25,
        "heat_index_c": 21.94,
        "wbgt_c": 20.59,
        "htsi_score": 22.2,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.4,
        "variance_c": 0.8,
        "accuracy_score_pct": 99.0,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 13.5,
        "outdoor_labor_pct": 54.0,
        "tin_roof_pct": 48.0,
        "tree_canopy_pct": 8.5,
        "hospital_beds_per_k": 1.8
      },
      "vulnerability_score": 69.7,
      "vulnerability_tier": "HIGH",
      "vulnerability_details": {
        "score": 69.7,
        "tier": "HIGH",
        "tier_label_en": "High Vulnerability",
        "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
        "tier_label_hi": "उच्च संवेदनशीलता",
        "sensitivity_score": 67.4,
        "exposure_score": 71.0,
        "adaptive_deficit_score": 71.0
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.5 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 42,
          "wind_ventilation_pct": 12,
          "urban_heat_island_pct": 24,
          "canopy_buffer_pct": 22
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-159",
      "name": "J.P. Nagar Cultural & Sarakki Lake Enclave",
      "name_kn": "ಜೆ.ಪಿ. ನಗರ ಮತ್ತು ಸಾರಕ್ಕಿ ಕೆರೆ ಪರಿಸರ",
      "name_hi": "जेपी नगर और सारक्की झील एन्क्लेव",
      "zone": "South Zone",
      "population": 195000,
      "center": [
        12.908,
        77.585
      ],
      "microclimate": {
        "temperature_c": 21.0,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.42,
        "wet_bulb_c": 19.9,
        "heat_index_c": 21.55,
        "wbgt_c": 20.24,
        "htsi_score": 20.7,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.0,
        "variance_c": 0.4,
        "accuracy_score_pct": 99.5,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 19.5,
        "outdoor_labor_pct": 35.0,
        "tin_roof_pct": 26.0,
        "tree_canopy_pct": 18.4,
        "hospital_beds_per_k": 3.8
      },
      "vulnerability_score": 48.7,
      "vulnerability_tier": "MODERATE",
      "vulnerability_details": {
        "score": 48.7,
        "tier": "MODERATE",
        "tier_label_en": "Moderate Vulnerability",
        "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
        "tier_label_hi": "मध्यम संवेदनशीलता",
        "sensitivity_score": 61.0,
        "exposure_score": 44.7,
        "adaptive_deficit_score": 38.1
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.4 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 48,
          "wind_ventilation_pct": 15,
          "urban_heat_island_pct": 23,
          "canopy_buffer_pct": 14
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-14",
      "name": "Bagalgunte & Dasarahalli Industrial Corridor",
      "name_kn": "ಬಾಗಲಗುಂಟೆ ಮತ್ತು ದಾಸರಹಳ್ಳಿ ಕೈಗಾರಿಕಾ ಕಾರಿಡಾರ್",
      "name_hi": "बागलकुंटे और दासरहल्ली इंडस्ट्रियल कॉरिडोर",
      "zone": "Dasarahalli Zone",
      "population": 245000,
      "center": [
        13.045,
        77.512
      ],
      "microclimate": {
        "temperature_c": 21.6,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.01,
        "wet_bulb_c": 20.49,
        "heat_index_c": 22.21,
        "wbgt_c": 20.83,
        "htsi_score": 23.3,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.6,
        "variance_c": 1.0,
        "accuracy_score_pct": 98.8,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 11.2,
        "outdoor_labor_pct": 65.0,
        "tin_roof_pct": 68.0,
        "tree_canopy_pct": 4.2,
        "hospital_beds_per_k": 1.4
      },
      "vulnerability_score": 83.2,
      "vulnerability_tier": "CRITICAL",
      "vulnerability_details": {
        "score": 83.2,
        "tier": "CRITICAL",
        "tier_label_en": "Critical Vulnerability",
        "tier_label_kn": "ಅತ್ಯಂತ ಅಪಾಯಕಾರಿ ದುರ್ಬಲತೆ",
        "tier_label_hi": "अति संवेदनशील क्षेत्र",
        "sensitivity_score": 73.0,
        "exposure_score": 93.0,
        "adaptive_deficit_score": 81.6
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as low wind ventilation (1.0 m/s) trapping hot air in street canyons, while 68% tin roofs radiating secondary infrared heat into informal homes.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಕಡಿಮೆ ಗಾಳಿಯು (1.0 m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು 68% ತವರದ ಸೂರುಗಳು ಹೆಚ್ಚಿನ ಶಾಖವನ್ನು ಹೊರಸೂಸುತ್ತವೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: धीमी हवा (1.0 m/s) संकरी गलियों में गर्मी को रोक रही है, तथा 68% टिन की छतें बस्तियों में अतिरिक्त गर्मी फैलाती हैं तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 37,
          "wind_ventilation_pct": 16,
          "urban_heat_island_pct": 24,
          "canopy_buffer_pct": 23
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-118",
      "name": "Vijayanagar & Magadi Road Wholesale Trade Hub",
      "name_kn": "ವಿಜಯನಗರ ಮತ್ತು ಮಾಗಡಿ ರಸ್ತೆ ಸಗಟು ವಾಣಿಜ್ಯ ಕೇಂದ್ರ",
      "name_hi": "विजयनगर और मागड़ी रोड होलसेल ट्रेड हब",
      "zone": "West Zone",
      "population": 220000,
      "center": [
        12.971,
        77.538
      ],
      "microclimate": {
        "temperature_c": 21.3,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.12,
        "wet_bulb_c": 20.21,
        "heat_index_c": 21.9,
        "wbgt_c": 20.55,
        "htsi_score": 22.1,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.3,
        "variance_c": 0.7,
        "accuracy_score_pct": 99.2,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 17.8,
        "outdoor_labor_pct": 46.0,
        "tin_roof_pct": 44.0,
        "tree_canopy_pct": 9.8,
        "hospital_beds_per_k": 2.7
      },
      "vulnerability_score": 65.8,
      "vulnerability_tier": "HIGH",
      "vulnerability_details": {
        "score": 65.8,
        "tier": "HIGH",
        "tier_label_en": "High Vulnerability",
        "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
        "tier_label_hi": "उच्च संवेदनशीलता",
        "sensitivity_score": 67.5,
        "exposure_score": 67.0,
        "adaptive_deficit_score": 61.6
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as low wind ventilation (1.1 m/s) trapping hot air in street canyons.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಕಡಿಮೆ ಗಾಳಿಯು (1.1 m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: धीमी हवा (1.1 m/s) संकरी गलियों में गर्मी को रोक रही है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 40,
          "wind_ventilation_pct": 17,
          "urban_heat_island_pct": 23,
          "canopy_buffer_pct": 20
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-150",
      "name": "Bellandur Eco-Park & Lake Technology Corridor",
      "name_kn": "ಬೆಳ್ಳಂದೂರು ಇಕೋ-ಪಾರ್ಕ್ ಮತ್ತು ಕೆರೆ ತಂತ್ರಜ್ಞಾನ ಕಾರಿಡಾರ್",
      "name_hi": "बेल्लंदूर इको-पार्क और लेक टेक्नोलॉजी कॉरिडोर",
      "zone": "Mahadevapura Zone",
      "population": 260000,
      "center": [
        12.935,
        77.674
      ],
      "microclimate": {
        "temperature_c": 21.4,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.22,
        "wet_bulb_c": 20.28,
        "heat_index_c": 21.98,
        "wbgt_c": 20.62,
        "htsi_score": 22.4,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.4,
        "variance_c": 0.8,
        "accuracy_score_pct": 99.0,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 10.5,
        "outdoor_labor_pct": 52.0,
        "tin_roof_pct": 40.0,
        "tree_canopy_pct": 11.0,
        "hospital_beds_per_k": 2.4
      },
      "vulnerability_score": 63.0,
      "vulnerability_tier": "HIGH",
      "vulnerability_details": {
        "score": 63.0,
        "tier": "HIGH",
        "tier_label_en": "High Vulnerability",
        "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
        "tier_label_hi": "उच्च संवेदनशीलता",
        "sensitivity_score": 60.9,
        "exposure_score": 65.6,
        "adaptive_deficit_score": 61.9
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.2 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 41,
          "wind_ventilation_pct": 16,
          "urban_heat_island_pct": 24,
          "canopy_buffer_pct": 19
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-60",
      "name": "Vasanth Nagar & High Grounds Cantonment",
      "name_kn": "ವಸಂತ ನಗರ ಮತ್ತು ಹೈಗ್ರೌಂಡ್ಸ್ ಕಂಟೋನ್ಮೆಂಟ್",
      "name_hi": "वसंत नगर व हाई ग्राउंड्स छावनी",
      "zone": "Central Zone",
      "population": 165000,
      "center": [
        12.99,
        77.588
      ],
      "microclimate": {
        "temperature_c": 20.9,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.79,
        "wet_bulb_c": 19.76,
        "heat_index_c": 21.4,
        "wbgt_c": 20.1,
        "htsi_score": 20.2,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 20.9,
        "variance_c": 0.3,
        "accuracy_score_pct": 99.6,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 22.5,
        "outdoor_labor_pct": 24.0,
        "tin_roof_pct": 18.0,
        "tree_canopy_pct": 28.0,
        "hospital_beds_per_k": 4.5
      },
      "vulnerability_score": 37.7,
      "vulnerability_tier": "MODERATE",
      "vulnerability_details": {
        "score": 37.7,
        "tier": "MODERATE",
        "tier_label_en": "Moderate Vulnerability",
        "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
        "tier_label_hi": "मध्यम संवेदनशीलता",
        "sensitivity_score": 56.5,
        "exposure_score": 34.8,
        "adaptive_deficit_score": 16.0
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as 28% tree canopy shading roadways and releasing moisture.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: 28% ಮರಗಳ ಹೊದಿಕೆಯು ನೆರಳು ಮತ್ತು ತಂಪನ್ನು ನೀಡುತ್ತದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: 28% वृक्ष आवरण सड़कों पर छाया और ठंडक प्रदान करता है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 59,
          "wind_ventilation_pct": 13,
          "urban_heat_island_pct": 25,
          "canopy_buffer_pct": 5
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-177",
      "name": "J.P. Nagar 7th Phase & Puttenahalli",
      "name_kn": "ಜೆ.ಪಿ. ನಗರ 7ನೇ ಹಂತ ಮತ್ತು ಪುಟ್ಟೇನಹಳ್ಳಿ",
      "name_hi": "जेपी नगर 7वां चरण व पुट्टेनाहल्ली",
      "zone": "South Zone",
      "population": 215000,
      "center": [
        12.895,
        77.575
      ],
      "microclimate": {
        "temperature_c": 21.2,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.46,
        "wet_bulb_c": 20.11,
        "heat_index_c": 21.78,
        "wbgt_c": 20.45,
        "htsi_score": 21.6,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.2,
        "variance_c": 0.6,
        "accuracy_score_pct": 99.3,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 18.0,
        "outdoor_labor_pct": 32.0,
        "tin_roof_pct": 28.0,
        "tree_canopy_pct": 14.5,
        "hospital_beds_per_k": 3.0
      },
      "vulnerability_score": 53.1,
      "vulnerability_tier": "MODERATE",
      "vulnerability_details": {
        "score": 53.1,
        "tier": "MODERATE",
        "tier_label_en": "Moderate Vulnerability",
        "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
        "tier_label_hi": "मध्यम संवेदनशीलता",
        "sensitivity_score": 56.0,
        "exposure_score": 51.7,
        "adaptive_deficit_score": 51.1
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.5 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 45,
          "wind_ventilation_pct": 14,
          "urban_heat_island_pct": 24,
          "canopy_buffer_pct": 17
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-113",
      "name": "Konena Agrahara & Old Airport Road",
      "name_kn": "ಕೋನೇನ ಅಗ್ರಹಾರ ಮತ್ತು ಹಳೆ ವಿಮಾನ ನಿಲ್ದಾಣ ರಸ್ತೆ",
      "name_hi": "कोनेना अग्रहारा व पुराना एयरपोर्ट रोड",
      "zone": "East Zone",
      "population": 190000,
      "center": [
        12.958,
        77.658
      ],
      "microclimate": {
        "temperature_c": 21.4,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.22,
        "wet_bulb_c": 20.32,
        "heat_index_c": 22.02,
        "wbgt_c": 20.66,
        "htsi_score": 22.5,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.4,
        "variance_c": 0.8,
        "accuracy_score_pct": 99.0,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 13.5,
        "outdoor_labor_pct": 46.0,
        "tin_roof_pct": 48.0,
        "tree_canopy_pct": 9.2,
        "hospital_beds_per_k": 3.2
      },
      "vulnerability_score": 65.0,
      "vulnerability_tier": "HIGH",
      "vulnerability_details": {
        "score": 65.0,
        "tier": "HIGH",
        "tier_label_en": "High Vulnerability",
        "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
        "tier_label_hi": "उच्च संवेदनशीलता",
        "sensitivity_score": 60.6,
        "exposure_score": 72.8,
        "adaptive_deficit_score": 58.6
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.2 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 40,
          "wind_ventilation_pct": 15,
          "urban_heat_island_pct": 24,
          "canopy_buffer_pct": 21
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-12",
      "name": "Shettihalli & Chikkabanavara Lake Basin",
      "name_kn": "ಶೆಟ್ಟಿಹಳ್ಳಿ ಮತ್ತು ಚಿಕ್ಕಬಾಣಾವರ ಕೆರೆ ಪ್ರದೇಶ",
      "name_hi": "शेट्टीहल्ली व चिक्काबाणवारा झील बेसिन",
      "zone": "Dasarahalli Zone",
      "population": 178000,
      "center": [
        13.068,
        77.512
      ],
      "microclimate": {
        "temperature_c": 21.3,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.32,
        "wet_bulb_c": 20.18,
        "heat_index_c": 21.86,
        "wbgt_c": 20.52,
        "htsi_score": 21.9,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.3,
        "variance_c": 0.7,
        "accuracy_score_pct": 99.2,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 12.0,
        "outdoor_labor_pct": 52.0,
        "tin_roof_pct": 52.0,
        "tree_canopy_pct": 8.0,
        "hospital_beds_per_k": 2.1
      },
      "vulnerability_score": 68.5,
      "vulnerability_tier": "HIGH",
      "vulnerability_details": {
        "score": 68.5,
        "tier": "HIGH",
        "tier_label_en": "High Vulnerability",
        "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
        "tier_label_hi": "उच्च संवेदनशीलता",
        "sensitivity_score": 63.3,
        "exposure_score": 72.4,
        "adaptive_deficit_score": 69.5
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as 52% tin roofs radiating secondary infrared heat into informal homes.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: 52% ತವರದ ಸೂರುಗಳು ಹೆಚ್ಚಿನ ಶಾಖವನ್ನು ಹೊರಸೂಸುತ್ತವೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: 52% टिन की छतें बस्तियों में अतिरिक्त गर्मी फैलाती हैं तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 41,
          "wind_ventilation_pct": 14,
          "urban_heat_island_pct": 22,
          "canopy_buffer_pct": 23
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-197",
      "name": "Begur & Hulimavu Bannerghatta Corridor",
      "name_kn": "ಬೇಗೂರು ಮತ್ತು ಹುಳಿಮಾವು ಬನ್ನೇರುಘಟ್ಟ ರಸ್ತೆ",
      "name_hi": "बेगूर व हुलीमावू बन्नेरघट्टा कॉरिडोर",
      "zone": "Bommanahalli Zone",
      "population": 230000,
      "center": [
        12.875,
        77.625
      ],
      "microclimate": {
        "temperature_c": 21.4,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.38,
        "wet_bulb_c": 20.25,
        "heat_index_c": 21.94,
        "wbgt_c": 20.59,
        "htsi_score": 22.2,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.4,
        "variance_c": 0.8,
        "accuracy_score_pct": 99.0,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 14.5,
        "outdoor_labor_pct": 44.0,
        "tin_roof_pct": 42.0,
        "tree_canopy_pct": 11.0,
        "hospital_beds_per_k": 2.8
      },
      "vulnerability_score": 62.4,
      "vulnerability_tier": "HIGH",
      "vulnerability_details": {
        "score": 62.4,
        "tier": "HIGH",
        "tier_label_en": "High Vulnerability",
        "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
        "tier_label_hi": "उच्च संवेदनशीलता",
        "sensitivity_score": 60.5,
        "exposure_score": 66.3,
        "adaptive_deficit_score": 58.7
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.4 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 42,
          "wind_ventilation_pct": 14,
          "urban_heat_island_pct": 24,
          "canopy_buffer_pct": 20
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-18",
      "name": "Radhakrishna Temple & Sanjaynagar BEL Road",
      "name_kn": "ರಾಧಾಕೃಷ್ಣ ದೇವಸ್ಥಾನ ಮತ್ತು ಸಂಜಯನಗರ ಬಿಇಎಲ್ ರಸ್ತೆ",
      "name_hi": "राधाकृष्ण मंदिर व संजयनगर बीईएल रोड",
      "zone": "North Zone",
      "population": 182000,
      "center": [
        13.035,
        77.575
      ],
      "microclimate": {
        "temperature_c": 21.0,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.62,
        "wet_bulb_c": 19.87,
        "heat_index_c": 21.52,
        "wbgt_c": 20.21,
        "htsi_score": 20.6,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.0,
        "variance_c": 0.4,
        "accuracy_score_pct": 99.5,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 20.0,
        "outdoor_labor_pct": 29.0,
        "tin_roof_pct": 20.0,
        "tree_canopy_pct": 22.0,
        "hospital_beds_per_k": 4.8
      },
      "vulnerability_score": 41.5,
      "vulnerability_tier": "MODERATE",
      "vulnerability_details": {
        "score": 41.5,
        "tier": "MODERATE",
        "tier_label_en": "Moderate Vulnerability",
        "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
        "tier_label_hi": "मध्यम संवेदनशीलता",
        "sensitivity_score": 56.7,
        "exposure_score": 39.1,
        "adaptive_deficit_score": 23.9
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.6 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 52,
          "wind_ventilation_pct": 14,
          "urban_heat_island_pct": 24,
          "canopy_buffer_pct": 10
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-160",
      "name": "Rajarajeshwari Nagar & Ideal Homes",
      "name_kn": "ರಾಜರಾಜೇಶ್ವರಿ ನಗರ ಮತ್ತು ಐಡಿಯಲ್ ಹೋಮ್ಸ್",
      "name_hi": "राजराजेश्वरी नगर और आइडियल होम्स",
      "zone": "Rajarajeshwari Nagar Zone",
      "population": 142000,
      "center": [
        12.926,
        77.521
      ],
      "microclimate": {
        "temperature_c": 20.9,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.52,
        "wet_bulb_c": 19.76,
        "heat_index_c": 21.4,
        "wbgt_c": 20.1,
        "htsi_score": 20.2,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 20.9,
        "variance_c": 0.3,
        "accuracy_score_pct": 99.6,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 16.5,
        "outdoor_labor_pct": 32.0,
        "tin_roof_pct": 24.0,
        "tree_canopy_pct": 22.5,
        "hospital_beds_per_k": 2.8
      },
      "vulnerability_score": 44.3,
      "vulnerability_tier": "MODERATE",
      "vulnerability_details": {
        "score": 44.3,
        "tier": "MODERATE",
        "tier_label_en": "Moderate Vulnerability",
        "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
        "tier_label_hi": "मध्यम संवेदनशीलता",
        "sensitivity_score": 53.6,
        "exposure_score": 39.6,
        "adaptive_deficit_score": 39.0
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.5 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 52,
          "wind_ventilation_pct": 15,
          "urban_heat_island_pct": 22,
          "canopy_buffer_pct": 11
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-154",
      "name": "Basavanagudi & Gandhi Bazaar Heritage Cultural Hub",
      "name_kn": "ಬಸವನಗುಡಿ ಮತ್ತು ಗಾಂಧಿ ಬಜಾರ್ ಸಾಂಸ್ಕೃತಿಕ ಕೇಂದ್ರ",
      "name_hi": "बसवनगुडी और गांधी बाजार सांस्कृतिक केंद्र",
      "zone": "South Zone",
      "population": 118000,
      "center": [
        12.942,
        77.573
      ],
      "microclimate": {
        "temperature_c": 20.8,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.32,
        "wet_bulb_c": 19.69,
        "heat_index_c": 21.32,
        "wbgt_c": 20.03,
        "htsi_score": 19.9,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 20.8,
        "variance_c": 0.2,
        "accuracy_score_pct": 99.8,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 21.4,
        "outdoor_labor_pct": 34.0,
        "tin_roof_pct": 18.0,
        "tree_canopy_pct": 26.8,
        "hospital_beds_per_k": 3.5
      },
      "vulnerability_score": 41.8,
      "vulnerability_tier": "MODERATE",
      "vulnerability_details": {
        "score": 41.8,
        "tier": "MODERATE",
        "tier_label_en": "Moderate Vulnerability",
        "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
        "tier_label_hi": "मध्यम संवेदनशीलता",
        "sensitivity_score": 63.2,
        "exposure_score": 33.0,
        "adaptive_deficit_score": 26.1
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as 27% tree canopy shading roadways and releasing moisture.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: 27% ಮರಗಳ ಹೊದಿಕೆಯು ನೆರಳು ಮತ್ತು ತಂಪನ್ನು ನೀಡುತ್ತದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: 27% वृक्ष आवरण सड़कों पर छाया और ठंडक प्रदान करता है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 54,
          "wind_ventilation_pct": 19,
          "urban_heat_island_pct": 22,
          "canopy_buffer_pct": 5
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-117",
      "name": "Shanthi Nagar & Richmond Town Cantonment",
      "name_kn": "ಶಾಂತಿ ನಗರ ಮತ್ತು ರಿಚ್ಮಂಡ್ ಟೌನ್ ಕಂಟೋನ್ಮೆಂಟ್",
      "name_hi": "शांति नगर और रिचमंड टाउन छावनी",
      "zone": "East / Central Zone",
      "population": 135000,
      "center": [
        12.959,
        77.601
      ],
      "microclimate": {
        "temperature_c": 21.3,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.01,
        "wet_bulb_c": 20.21,
        "heat_index_c": 21.9,
        "wbgt_c": 20.55,
        "htsi_score": 22.1,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.3,
        "variance_c": 0.7,
        "accuracy_score_pct": 99.2,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 15.8,
        "outdoor_labor_pct": 42.0,
        "tin_roof_pct": 28.0,
        "tree_canopy_pct": 14.5,
        "hospital_beds_per_k": 4.2
      },
      "vulnerability_score": 53.5,
      "vulnerability_tier": "MODERATE",
      "vulnerability_details": {
        "score": 53.5,
        "tier": "MODERATE",
        "tier_label_en": "Moderate Vulnerability",
        "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
        "tier_label_hi": "मध्यम संवेदनशीलता",
        "sensitivity_score": 60.9,
        "exposure_score": 54.4,
        "adaptive_deficit_score": 41.5
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as low wind ventilation (1.0 m/s) trapping hot air in street canyons.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಕಡಿಮೆ ಗಾಳಿಯು (1.0 m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: धीमी हवा (1.0 m/s) संकरी गलियों में गर्मी को रोक रही है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 42,
          "wind_ventilation_pct": 19,
          "urban_heat_island_pct": 23,
          "canopy_buffer_pct": 16
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-78",
      "name": "Frazer Town & Pulakeshinagar Victorian Belt",
      "name_kn": "ಫ್ರೇಜರ್ ಟೌನ್ ಮತ್ತು ಪುಲಕೇಶಿನಗರ",
      "name_hi": "फ्रेजर टाउन और पुलकेशीनगर",
      "zone": "East Zone",
      "population": 125000,
      "center": [
        12.998,
        77.618
      ],
      "microclimate": {
        "temperature_c": 21.2,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.12,
        "wet_bulb_c": 20.11,
        "heat_index_c": 21.78,
        "wbgt_c": 20.45,
        "htsi_score": 21.6,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.2,
        "variance_c": 0.6,
        "accuracy_score_pct": 99.3,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 17.2,
        "outdoor_labor_pct": 39.5,
        "tin_roof_pct": 31.0,
        "tree_canopy_pct": 16.0,
        "hospital_beds_per_k": 3.1
      },
      "vulnerability_score": 54.9,
      "vulnerability_tier": "MODERATE",
      "vulnerability_details": {
        "score": 54.9,
        "tier": "MODERATE",
        "tier_label_en": "Moderate Vulnerability",
        "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
        "tier_label_hi": "मध्यम संवेदनशीलता",
        "sensitivity_score": 61.1,
        "exposure_score": 54.1,
        "adaptive_deficit_score": 47.8
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as low wind ventilation (1.1 m/s) trapping hot air in street canyons.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಕಡಿಮೆ ಗಾಳಿಯು (1.1 m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: धीमी हवा (1.1 m/s) संकरी गलियों में गर्मी को रोक रही है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 44,
          "wind_ventilation_pct": 18,
          "urban_heat_island_pct": 23,
          "canopy_buffer_pct": 15
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-84",
      "name": "Varthur & Sarjapur Road Agro-Tech Basin",
      "name_kn": "ವರ್ತೂರು ಮತ್ತು ಸರ್ಜಾಪುರ ರಸ್ತೆ ಅಗ್ರೋ-ಟೆಕ್ ಕಾರಿಡಾರ್",
      "name_hi": "वरथूर और सरजापुर रोड एग्रो-टेक कॉरिडोर",
      "zone": "Mahadevapura Zone",
      "population": 168000,
      "center": [
        12.938,
        77.742
      ],
      "microclimate": {
        "temperature_c": 21.5,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.42,
        "wet_bulb_c": 20.42,
        "heat_index_c": 22.13,
        "wbgt_c": 20.76,
        "htsi_score": 23.0,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.5,
        "variance_c": 0.9,
        "accuracy_score_pct": 98.9,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 10.2,
        "outdoor_labor_pct": 54.0,
        "tin_roof_pct": 46.0,
        "tree_canopy_pct": 8.5,
        "hospital_beds_per_k": 1.5
      },
      "vulnerability_score": 69.7,
      "vulnerability_tier": "HIGH",
      "vulnerability_details": {
        "score": 69.7,
        "tier": "HIGH",
        "tier_label_en": "High Vulnerability",
        "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
        "tier_label_hi": "उच्च संवेदनशीलता",
        "sensitivity_score": 62.1,
        "exposure_score": 73.9,
        "adaptive_deficit_score": 73.4
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.4 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 40,
          "wind_ventilation_pct": 13,
          "urban_heat_island_pct": 25,
          "canopy_buffer_pct": 22
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-27",
      "name": "Banaswadi & HRBR Layout / Kalyan Nagar",
      "name_kn": "ಬಾಣಸವಾಡಿ ಮತ್ತು ಎಚ್‌ಆರ್‌ಬಿಆರ್ ಲೇಔಟ್ ಕಲ್ಯಾಣ ನಗರ",
      "name_hi": "बाणसवाड़ी और एचआरबीआर लेआउट कल्याण नगर",
      "zone": "East Zone",
      "population": 155000,
      "center": [
        13.012,
        77.651
      ],
      "microclimate": {
        "temperature_c": 21.1,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.22,
        "wet_bulb_c": 20.0,
        "heat_index_c": 21.67,
        "wbgt_c": 20.34,
        "htsi_score": 21.2,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.1,
        "variance_c": 0.5,
        "accuracy_score_pct": 99.4,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 14.8,
        "outdoor_labor_pct": 36.5,
        "tin_roof_pct": 22.0,
        "tree_canopy_pct": 18.0,
        "hospital_beds_per_k": 2.4
      },
      "vulnerability_score": 49.3,
      "vulnerability_tier": "MODERATE",
      "vulnerability_details": {
        "score": 49.3,
        "tier": "MODERATE",
        "tier_label_en": "Moderate Vulnerability",
        "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
        "tier_label_hi": "मध्यम संवेदनशीलता",
        "sensitivity_score": 54.7,
        "exposure_score": 44.3,
        "adaptive_deficit_score": 49.9
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.2 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 46,
          "wind_ventilation_pct": 18,
          "urban_heat_island_pct": 23,
          "canopy_buffer_pct": 13
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-9",
      "name": "Vidyaranyapura & Doddaballapur State Highway",
      "name_kn": "ವಿದ್ಯಾರಣ್ಯಪುರ ಮತ್ತು ದೊಡ್ಡಬಳ್ಳಾಪುರ ಹೆದ್ದಾರಿ",
      "name_hi": "विद्यारण्यपुरा और डोड्डाबल्लापुर राजमार्ग",
      "zone": "Yelahanka Zone",
      "population": 130000,
      "center": [
        13.082,
        77.558
      ],
      "microclimate": {
        "temperature_c": 20.9,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.52,
        "wet_bulb_c": 19.8,
        "heat_index_c": 21.44,
        "wbgt_c": 20.14,
        "htsi_score": 20.3,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 20.9,
        "variance_c": 0.3,
        "accuracy_score_pct": 99.6,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 16.0,
        "outdoor_labor_pct": 31.0,
        "tin_roof_pct": 20.0,
        "tree_canopy_pct": 21.0,
        "hospital_beds_per_k": 2.0
      },
      "vulnerability_score": 45.1,
      "vulnerability_tier": "MODERATE",
      "vulnerability_details": {
        "score": 45.1,
        "tier": "MODERATE",
        "tier_label_en": "Moderate Vulnerability",
        "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
        "tier_label_hi": "मध्यम संवेदनशीलता",
        "sensitivity_score": 51.9,
        "exposure_score": 37.3,
        "adaptive_deficit_score": 48.0
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.5 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 51,
          "wind_ventilation_pct": 15,
          "urban_heat_island_pct": 22,
          "canopy_buffer_pct": 12
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-158",
      "name": "Kengeri Satellite Town & Mysore Road Transit Hub",
      "name_kn": "ಕೆಂಗೇರಿ ಉಪನಗರ ಮತ್ತು ಮೈಸೂರು ರಸ್ತೆ ಸಾರಿಗೆ ಕೇಂದ್ರ",
      "name_hi": "केंगेरी उपनगर और मैसूर रोड ट्रांजिट हब",
      "zone": "Rajarajeshwari Nagar Zone",
      "population": 162000,
      "center": [
        12.912,
        77.485
      ],
      "microclimate": {
        "temperature_c": 21.4,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.32,
        "wet_bulb_c": 20.32,
        "heat_index_c": 22.02,
        "wbgt_c": 20.66,
        "htsi_score": 22.5,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.4,
        "variance_c": 0.8,
        "accuracy_score_pct": 99.0,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 14.2,
        "outdoor_labor_pct": 49.0,
        "tin_roof_pct": 41.0,
        "tree_canopy_pct": 12.0,
        "hospital_beds_per_k": 2.2
      },
      "vulnerability_score": 64.9,
      "vulnerability_tier": "HIGH",
      "vulnerability_details": {
        "score": 64.9,
        "tier": "HIGH",
        "tier_label_en": "High Vulnerability",
        "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
        "tier_label_hi": "उच्च संवेदनशीलता",
        "sensitivity_score": 64.3,
        "exposure_score": 67.3,
        "adaptive_deficit_score": 61.8
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.3 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 42,
          "wind_ventilation_pct": 15,
          "urban_heat_island_pct": 25,
          "canopy_buffer_pct": 18
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-142",
      "name": "Chamarajpet & Cottonpet Traditional Textile Hub",
      "name_kn": "ಚಾಮರಾಜಪೇಟೆ ಮತ್ತು ಕಾಟನ್‌ಪೇಟೆ ಸಾಂಪ್ರದಾಯಿಕ ಮಾರುಕಟ್ಟೆ",
      "name_hi": "चामराजपेट और कॉटनपेट पारंपरिक कपड़ा बाजार",
      "zone": "South / West Zone",
      "population": 172000,
      "center": [
        12.958,
        77.561
      ],
      "microclimate": {
        "temperature_c": 21.7,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 0.71,
        "wet_bulb_c": 20.56,
        "heat_index_c": 22.29,
        "wbgt_c": 20.9,
        "htsi_score": 23.6,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.7,
        "variance_c": 1.1,
        "accuracy_score_pct": 98.7,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 19.5,
        "outdoor_labor_pct": 52.0,
        "tin_roof_pct": 55.0,
        "tree_canopy_pct": 6.2,
        "hospital_beds_per_k": 3.2
      },
      "vulnerability_score": 76.2,
      "vulnerability_tier": "CRITICAL",
      "vulnerability_details": {
        "score": 76.2,
        "tier": "CRITICAL",
        "tier_label_en": "Critical Vulnerability",
        "tier_label_kn": "ಅತ್ಯಂತ ಅಪಾಯಕಾರಿ ದುರ್ಬಲತೆ",
        "tier_label_hi": "अति संवेदनशील क्षेत्र",
        "sensitivity_score": 75.3,
        "exposure_score": 84.6,
        "adaptive_deficit_score": 63.8
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as low wind ventilation (0.7 m/s) trapping hot air in street canyons, while 55% tin roofs radiating secondary infrared heat into informal homes.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಕಡಿಮೆ ಗಾಳಿಯು (0.7 m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು 55% ತವರದ ಸೂರುಗಳು ಹೆಚ್ಚಿನ ಶಾಖವನ್ನು ಹೊರಸೂಸುತ್ತವೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: धीमी हवा (0.7 m/s) संकरी गलियों में गर्मी को रोक रही है, तथा 55% टिन की छतें बस्तियों में अतिरिक्त गर्मी फैलाती हैं तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 36,
          "wind_ventilation_pct": 19,
          "urban_heat_island_pct": 24,
          "canopy_buffer_pct": 21
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-8",
      "name": "Sahakar Nagar & Kodigehalli Residential Hub",
      "name_kn": "ಸಹಕಾರ ನಗರ ಮತ್ತು ಕೋಡಿಗೇಹಳ್ಳಿ",
      "name_hi": "सहकार नगर और कोडिगेहल्ली",
      "zone": "Byatarayanapura / North Zone",
      "population": 128000,
      "center": [
        13.061,
        77.581
      ],
      "microclimate": {
        "temperature_c": 21.0,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.42,
        "wet_bulb_c": 19.9,
        "heat_index_c": 21.55,
        "wbgt_c": 20.24,
        "htsi_score": 20.7,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.0,
        "variance_c": 0.4,
        "accuracy_score_pct": 99.5,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 15.2,
        "outdoor_labor_pct": 33.0,
        "tin_roof_pct": 23.0,
        "tree_canopy_pct": 17.5,
        "hospital_beds_per_k": 2.5
      },
      "vulnerability_score": 47.8,
      "vulnerability_tier": "MODERATE",
      "vulnerability_details": {
        "score": 47.8,
        "tier": "MODERATE",
        "tier_label_en": "Moderate Vulnerability",
        "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
        "tier_label_hi": "मध्यम संवेदनशीलता",
        "sensitivity_score": 52.4,
        "exposure_score": 42.4,
        "adaptive_deficit_score": 50.0
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.4 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 47,
          "wind_ventilation_pct": 15,
          "urban_heat_island_pct": 22,
          "canopy_buffer_pct": 16
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-83",
      "name": "Kadugodi & Hope Farm Tech Gateway",
      "name_kn": "ಕಾಡುಗೋಡಿ ಮತ್ತು ಹೋಪ್ ಫಾರ್ಮ್ ಟೆಕ್ ಗೇಟ್‌ವೇ",
      "name_hi": "काडुगोडी और होप फार्म टेक गेटवे",
      "zone": "Mahadevapura Zone",
      "population": 145000,
      "center": [
        12.998,
        77.761
      ],
      "microclimate": {
        "temperature_c": 21.5,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.32,
        "wet_bulb_c": 20.35,
        "heat_index_c": 22.05,
        "wbgt_c": 20.69,
        "htsi_score": 22.7,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.5,
        "variance_c": 0.9,
        "accuracy_score_pct": 98.9,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 11.0,
        "outdoor_labor_pct": 51.0,
        "tin_roof_pct": 44.0,
        "tree_canopy_pct": 10.5,
        "hospital_beds_per_k": 1.8
      },
      "vulnerability_score": 66.4,
      "vulnerability_tier": "HIGH",
      "vulnerability_details": {
        "score": 66.4,
        "tier": "HIGH",
        "tier_label_en": "High Vulnerability",
        "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
        "tier_label_hi": "उच्च संवेदनशीलता",
        "sensitivity_score": 60.8,
        "exposure_score": 70.6,
        "adaptive_deficit_score": 67.6
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.3 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 41,
          "wind_ventilation_pct": 14,
          "urban_heat_island_pct": 25,
          "canopy_buffer_pct": 20
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    },
    {
      "ward_id": "BBMP-131",
      "name": "Basaveshwaranagar & Shankar Matt Tree-Covered Ridge",
      "name_kn": "ಬಸವೇಶ್ವರನಗರ ಮತ್ತು ಶಂಕರ ಮಠ",
      "name_hi": "बसवेश्वरनगर और शंकर मठ",
      "zone": "West Zone",
      "population": 138000,
      "center": [
        12.988,
        77.537
      ],
      "microclimate": {
        "temperature_c": 21.0,
        "relative_humidity_pct": 91.0,
        "wind_speed_m_s": 1.42,
        "wet_bulb_c": 19.83,
        "heat_index_c": 21.48,
        "wbgt_c": 20.17,
        "htsi_score": 20.5,
        "precipitation_mm": 0.0
      },
      "ground_truth_verification": {
        "source": "Google Weather & IMD Bengaluru AWS Network",
        "station": "Bengaluru City Observatory (Palace Road / Majestic)",
        "observed_benchmark_temp_c": 20.6,
        "ward_temp_c": 21.0,
        "variance_c": 0.4,
        "accuracy_score_pct": 99.5,
        "status": "VERIFIED_ACCURATE"
      },
      "vulnerability": {
        "elderly_pct": 18.0,
        "outdoor_labor_pct": 32.5,
        "tin_roof_pct": 21.0,
        "tree_canopy_pct": 20.0,
        "hospital_beds_per_k": 2.6
      },
      "vulnerability_score": 46.6,
      "vulnerability_tier": "MODERATE",
      "vulnerability_details": {
        "score": 46.6,
        "tier": "MODERATE",
        "tier_label_en": "Moderate Vulnerability",
        "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
        "tier_label_hi": "मध्यम संवेदनशीलता",
        "sensitivity_score": 56.4,
        "exposure_score": 39.0,
        "adaptive_deficit_score": 44.9
      },
      "causal_attribution": {
        "driver_category": "MICROCLIMATE_COOLING_ZONE",
        "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.4 m/s.",
        "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
        "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
        "drivers": {
          "solar_radiation_pct": 0,
          "moisture_humidity_pct": 49,
          "wind_ventilation_pct": 16,
          "urban_heat_island_pct": 22,
          "canopy_buffer_pct": 13
        }
      },
      "is_hotspot": false,
      "health_risk": {
        "expected_surge_pct": 0.0,
        "confidence_interval_90": {
          "lower_bound_pct": 0.0,
          "expected_pct": 0.0,
          "upper_bound_pct": 2.5
        },
        "additional_emergency_beds_needed": 0,
        "alert_tier": "GREEN",
        "tier_label_en": "NORMAL / LOW HEALTH RISK",
        "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
        "xai_attribution": {
          "direct_thermal_stress_pct": 0.0,
          "vulnerable_demographics_pct": 100.0,
          "lagged_cumulative_dose_pct": 0.0,
          "nocturnal_heat_entrapment_pct": 0.0
        }
      },
      "effective_alert_tier": "GREEN",
      "work_rest_safety": {
        "status": "NORMAL_OPERATIONS",
        "work_mins": 60,
        "rest_mins": 0,
        "hourly_water_liters": 0.5,
        "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
        "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
      },
      "anomaly_alert": {
        "has_anomaly": false,
        "anomalies": []
      }
    }
  ],
  "geojson": {
    "type": "FeatureCollection",
    "city": "Bengaluru Metropolitan Region",
    "features": [
      {
        "type": "Feature",
        "id": "BBMP-138",
        "properties": {
          "ward_id": "BBMP-138",
          "name": "Shivajinagar & Majestic Bus Interchange",
          "name_kn": "ಶಿವಾಜಿನಗರ ಮತ್ತು ಮೆಜೆಸ್ಟಿಕ್ ಬಸ್ ನಿಲ್ದಾಣ",
          "name_hi": "शिवाजीनगर और मैजेस्टिक बस स्टैंड",
          "zone": "East / Central Zone",
          "population": 185000,
          "elderly_pct": 18.2,
          "outdoor_labor_pct": 48.5,
          "tin_roof_pct": 52.0,
          "tree_canopy_pct": 5.4,
          "hospital_beds_per_k": 2.1,
          "baseline_daily_admissions": 38,
          "uhi_temp_delta": 2.8,
          "wind_attenuation": 0.4,
          "center": [
            12.978,
            77.585
          ],
          "microclimate": {
            "temperature_c": 21.6,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 0.81,
            "wet_bulb_c": 20.45,
            "heat_index_c": 22.17,
            "wbgt_c": 20.79,
            "htsi_score": 23.1,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.6,
            "variance_c": 1.0,
            "accuracy_score_pct": 98.8,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 18.2,
            "outdoor_labor_pct": 48.5,
            "tin_roof_pct": 52.0,
            "tree_canopy_pct": 5.4,
            "hospital_beds_per_k": 2.1
          },
          "vulnerability_score": 74.9,
          "vulnerability_tier": "HIGH",
          "vulnerability_details": {
            "score": 74.9,
            "tier": "HIGH",
            "tier_label_en": "High Vulnerability",
            "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
            "tier_label_hi": "उच्च संवेदनशीलता",
            "sensitivity_score": 70.3,
            "exposure_score": 79.6,
            "adaptive_deficit_score": 73.9
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as low wind ventilation (0.8 m/s) trapping hot air in street canyons, while 52% tin roofs radiating secondary infrared heat into informal homes.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಕಡಿಮೆ ಗಾಳಿಯು (0.8 m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು 52% ತವರದ ಸೂರುಗಳು ಹೆಚ್ಚಿನ ಶಾಖವನ್ನು ಹೊರಸೂಸುತ್ತವೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: धीमी हवा (0.8 m/s) संकरी गलियों में गर्मी को रोक रही है, तथा 52% टिन की छतें बस्तियों में अतिरिक्त गर्मी फैलाती हैं तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 36,
              "wind_ventilation_pct": 18,
              "urban_heat_island_pct": 23,
              "canopy_buffer_pct": 23
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.568,
                12.968
              ],
              [
                77.602,
                12.968
              ],
              [
                77.605,
                12.992
              ],
              [
                77.571,
                12.992
              ],
              [
                77.568,
                12.968
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-41",
        "properties": {
          "ward_id": "BBMP-41",
          "name": "Peenya Industrial Area & Jalahalli",
          "name_kn": "ಪೀಣ್ಯ ಕೈಗಾರಿಕಾ ಪ್ರದೇಶ ಮತ್ತು ಜಾಲಹಳ್ಳಿ",
          "name_hi": "पीण्या औद्योगिक क्षेत्र और जलाहल्ली",
          "zone": "Rajarajeshwari Nagar Zone",
          "population": 240000,
          "elderly_pct": 11.5,
          "outdoor_labor_pct": 58.0,
          "tin_roof_pct": 68.0,
          "tree_canopy_pct": 4.1,
          "hospital_beds_per_k": 1.2,
          "baseline_daily_admissions": 42,
          "uhi_temp_delta": 3.2,
          "wind_attenuation": 0.5,
          "center": [
            13.0285,
            77.518
          ],
          "microclimate": {
            "temperature_c": 21.7,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.01,
            "wet_bulb_c": 20.59,
            "heat_index_c": 22.32,
            "wbgt_c": 20.93,
            "htsi_score": 23.7,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.7,
            "variance_c": 1.1,
            "accuracy_score_pct": 98.7,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 11.5,
            "outdoor_labor_pct": 58.0,
            "tin_roof_pct": 68.0,
            "tree_canopy_pct": 4.1,
            "hospital_beds_per_k": 1.2
          },
          "vulnerability_score": 82.8,
          "vulnerability_tier": "CRITICAL",
          "vulnerability_details": {
            "score": 82.8,
            "tier": "CRITICAL",
            "tier_label_en": "Critical Vulnerability",
            "tier_label_kn": "ಅತ್ಯಂತ ಅಪಾಯಕಾರಿ ದುರ್ಬಲತೆ",
            "tier_label_hi": "अति संवेदनशील क्षेत्र",
            "sensitivity_score": 67.6,
            "exposure_score": 95.7,
            "adaptive_deficit_score": 83.4
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as low wind ventilation (1.0 m/s) trapping hot air in street canyons, while 68% tin roofs radiating secondary infrared heat into informal homes.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಕಡಿಮೆ ಗಾಳಿಯು (1.0 m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು 68% ತವರದ ಸೂರುಗಳು ಹೆಚ್ಚಿನ ಶಾಖವನ್ನು ಹೊರಸೂಸುತ್ತವೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: धीमी हवा (1.0 m/s) संकरी गलियों में गर्मी को रोक रही है, तथा 68% टिन की छतें बस्तियों में अतिरिक्त गर्मी फैलाती हैं तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 36,
              "wind_ventilation_pct": 16,
              "urban_heat_island_pct": 24,
              "canopy_buffer_pct": 24
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.502,
                13.012
              ],
              [
                77.535,
                13.012
              ],
              [
                77.538,
                13.045
              ],
              [
                77.505,
                13.045
              ],
              [
                77.502,
                13.012
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-85",
        "properties": {
          "ward_id": "BBMP-85",
          "name": "Whitefield & ITPL Tech Corridor",
          "name_kn": "ವೈಟ್‌ಫೀಲ್ಡ್ ಮತ್ತು ಐಟಿಪಿಎಲ್ ಟೆಕ್ ಕಾರಿಡಾರ್",
          "name_hi": "व्हाइटफील्ड और आईटीपीएल टेक कॉरिडोर",
          "zone": "Mahadevapura Zone",
          "population": 290000,
          "elderly_pct": 12.0,
          "outdoor_labor_pct": 34.0,
          "tin_roof_pct": 36.0,
          "tree_canopy_pct": 9.2,
          "hospital_beds_per_k": 2.8,
          "baseline_daily_admissions": 32,
          "uhi_temp_delta": 2.2,
          "wind_attenuation": 0.75,
          "center": [
            12.9698,
            77.7499
          ],
          "microclimate": {
            "temperature_c": 21.4,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.52,
            "wet_bulb_c": 20.25,
            "heat_index_c": 21.94,
            "wbgt_c": 20.59,
            "htsi_score": 22.2,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.4,
            "variance_c": 0.8,
            "accuracy_score_pct": 99.0,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 12.0,
            "outdoor_labor_pct": 34.0,
            "tin_roof_pct": 36.0,
            "tree_canopy_pct": 9.2,
            "hospital_beds_per_k": 2.8
          },
          "vulnerability_score": 56.9,
          "vulnerability_tier": "HIGH",
          "vulnerability_details": {
            "score": 56.9,
            "tier": "HIGH",
            "tier_label_en": "High Vulnerability",
            "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
            "tier_label_hi": "उच्च संवेदनशीलता",
            "sensitivity_score": 48.1,
            "exposure_score": 61.6,
            "adaptive_deficit_score": 61.8
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.5 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 42,
              "wind_ventilation_pct": 12,
              "urban_heat_island_pct": 24,
              "canopy_buffer_pct": 22
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.73,
                12.952
              ],
              [
                77.77,
                12.952
              ],
              [
                77.772,
                12.988
              ],
              [
                77.732,
                12.988
              ],
              [
                77.73,
                12.952
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-111",
        "properties": {
          "ward_id": "BBMP-111",
          "name": "Malleshwaram & IISc Green Canopy",
          "name_kn": "ಮಲ್ಲೇಶ್ವರಂ ಮತ್ತು ಐಐಎಸ್‌ಸಿ ಹಸಿರು ವಲಯ",
          "name_hi": "मल्लेश्वरम और आईआईएससी ग्रीन बेल्ट",
          "zone": "West Zone",
          "population": 115000,
          "elderly_pct": 21.4,
          "outdoor_labor_pct": 8.5,
          "tin_roof_pct": 4.0,
          "tree_canopy_pct": 46.2,
          "hospital_beds_per_k": 7.4,
          "baseline_daily_admissions": 20,
          "uhi_temp_delta": -2.2,
          "wind_attenuation": 1.1,
          "center": [
            13.0031,
            77.567
          ],
          "microclimate": {
            "temperature_c": 19.8,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 2.23,
            "wet_bulb_c": 18.73,
            "heat_index_c": 20.24,
            "wbgt_c": 19.06,
            "htsi_score": 15.7,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 19.8,
            "variance_c": -0.8,
            "accuracy_score_pct": 99.0,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 21.4,
            "outdoor_labor_pct": 8.5,
            "tin_roof_pct": 4.0,
            "tree_canopy_pct": 46.2,
            "hospital_beds_per_k": 7.4
          },
          "vulnerability_score": 15.8,
          "vulnerability_tier": "LOW",
          "vulnerability_details": {
            "score": 15.8,
            "tier": "LOW",
            "tier_label_en": "Low Vulnerability (Resilient)",
            "tier_label_kn": "ಕಡಿಮೆ ದುರ್ಬಲತೆ (ಸುರಕ್ಷಿತ)",
            "tier_label_hi": "कम संवेदनशीलता (सुरक्षित)",
            "sensitivity_score": 41.6,
            "exposure_score": 3.1,
            "adaptive_deficit_score": 0.0
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as local parklands and green cover providing a -0.77°C cooling buffer, while 46% tree canopy shading roadways and releasing moisture.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಉದ್ಯಾನವನಗಳು -0.77°C ನಷ್ಟು ತಂಪಾಗಿಸುವ ವಾತಾವರಣ ನೀಡುತ್ತವೆ, ಮತ್ತು 46% ಮರಗಳ ಹೊದಿಕೆಯು ನೆರಳು ಮತ್ತು ತಂಪನ್ನು ನೀಡುತ್ತದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: स्थानीय हरित क्षेत्र -0.77°C का प्राकृतिक शीतलन प्रदान करते हैं, तथा 46% वृक्ष आवरण सड़कों पर छाया और ठंडक प्रदान करता है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 83,
              "wind_ventilation_pct": 7,
              "urban_heat_island_pct": 10,
              "canopy_buffer_pct": 5
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.552,
                12.99
              ],
              [
                77.582,
                12.99
              ],
              [
                77.585,
                13.018
              ],
              [
                77.555,
                13.018
              ],
              [
                77.552,
                12.99
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-151",
        "properties": {
          "ward_id": "BBMP-151",
          "name": "Koramangala Commercial & Gig Hub",
          "name_kn": "ಕೋರಮಂಗಲ ವಾಣಿಜ್ಯ ಮತ್ತು ಗಿಗ್ ಹಬ್",
          "name_hi": "कोरमंगला वाणिज्यिक और गिग हब",
          "zone": "South Zone",
          "population": 160000,
          "elderly_pct": 14.2,
          "outdoor_labor_pct": 44.0,
          "tin_roof_pct": 18.0,
          "tree_canopy_pct": 21.0,
          "hospital_beds_per_k": 4.6,
          "baseline_daily_admissions": 26,
          "uhi_temp_delta": 1.4,
          "wind_attenuation": 0.85,
          "center": [
            12.9352,
            77.6245
          ],
          "microclimate": {
            "temperature_c": 21.1,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.73,
            "wet_bulb_c": 19.97,
            "heat_index_c": 21.63,
            "wbgt_c": 20.31,
            "htsi_score": 21.0,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.1,
            "variance_c": 0.5,
            "accuracy_score_pct": 99.4,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 14.2,
            "outdoor_labor_pct": 44.0,
            "tin_roof_pct": 18.0,
            "tree_canopy_pct": 21.0,
            "hospital_beds_per_k": 4.6
          },
          "vulnerability_score": 43.9,
          "vulnerability_tier": "MODERATE",
          "vulnerability_details": {
            "score": 43.9,
            "tier": "MODERATE",
            "tier_label_en": "Moderate Vulnerability",
            "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
            "tier_label_hi": "मध्यम संवेदनशीलता",
            "sensitivity_score": 60.1,
            "exposure_score": 40.2,
            "adaptive_deficit_score": 27.2
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.7 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 51,
              "wind_ventilation_pct": 12,
              "urban_heat_island_pct": 25,
              "canopy_buffer_pct": 12
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.61,
                12.92
              ],
              [
                77.64,
                12.92
              ],
              [
                77.642,
                12.95
              ],
              [
                77.612,
                12.95
              ],
              [
                77.61,
                12.92
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-174",
        "properties": {
          "ward_id": "BBMP-174",
          "name": "HSR Layout & Bellandur Lake Basin",
          "name_kn": "ಎಚ್‌ಎಸ್‌ಆರ್ ಲೇಔಟ್ ಮತ್ತು ಬೆಳ್ಳಂದೂರು ಕೆರೆ ಪ್ರದೇಶ",
          "name_hi": "एचएसआर लेआउट और बेलंदूर बेसिन",
          "zone": "Bommanahalli Zone",
          "population": 210000,
          "elderly_pct": 13.0,
          "outdoor_labor_pct": 32.0,
          "tin_roof_pct": 24.0,
          "tree_canopy_pct": 14.5,
          "hospital_beds_per_k": 3.1,
          "baseline_daily_admissions": 28,
          "uhi_temp_delta": 1.6,
          "wind_attenuation": 0.9,
          "center": [
            12.9121,
            77.6446
          ],
          "microclimate": {
            "temperature_c": 21.2,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.83,
            "wet_bulb_c": 20.04,
            "heat_index_c": 21.71,
            "wbgt_c": 20.38,
            "htsi_score": 21.3,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.2,
            "variance_c": 0.6,
            "accuracy_score_pct": 99.3,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 13.0,
            "outdoor_labor_pct": 32.0,
            "tin_roof_pct": 24.0,
            "tree_canopy_pct": 14.5,
            "hospital_beds_per_k": 3.1
          },
          "vulnerability_score": 48.1,
          "vulnerability_tier": "MODERATE",
          "vulnerability_details": {
            "score": 48.1,
            "tier": "MODERATE",
            "tier_label_en": "Moderate Vulnerability",
            "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
            "tier_label_hi": "मध्यम संवेदनशीलता",
            "sensitivity_score": 48.0,
            "exposure_score": 46.8,
            "adaptive_deficit_score": 50.3
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.8 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 48,
              "wind_ventilation_pct": 10,
              "urban_heat_island_pct": 24,
              "canopy_buffer_pct": 18
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.63,
                12.898
              ],
              [
                77.662,
                12.898
              ],
              [
                77.665,
                12.926
              ],
              [
                77.632,
                12.926
              ],
              [
                77.63,
                12.898
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-198",
        "properties": {
          "ward_id": "BBMP-198",
          "name": "Electronic City Phase 1 & Konappana",
          "name_kn": "ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿ ಫೇಸ್ 1 ಮತ್ತು ಕೋನಪ್ಪನ",
          "name_hi": "इलेक्ट्रॉनिक सिटी फेज 1",
          "zone": "Anekal / South Outskirts",
          "population": 175000,
          "elderly_pct": 9.8,
          "outdoor_labor_pct": 38.0,
          "tin_roof_pct": 35.0,
          "tree_canopy_pct": 16.0,
          "hospital_beds_per_k": 2.2,
          "baseline_daily_admissions": 24,
          "uhi_temp_delta": 1.8,
          "wind_attenuation": 0.95,
          "center": [
            12.8452,
            77.6602
          ],
          "microclimate": {
            "temperature_c": 21.2,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.93,
            "wet_bulb_c": 20.11,
            "heat_index_c": 21.78,
            "wbgt_c": 20.45,
            "htsi_score": 21.6,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.2,
            "variance_c": 0.6,
            "accuracy_score_pct": 99.3,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 9.8,
            "outdoor_labor_pct": 38.0,
            "tin_roof_pct": 35.0,
            "tree_canopy_pct": 16.0,
            "hospital_beds_per_k": 2.2
          },
          "vulnerability_score": 53.4,
          "vulnerability_tier": "MODERATE",
          "vulnerability_details": {
            "score": 53.4,
            "tier": "MODERATE",
            "tier_label_en": "Moderate Vulnerability",
            "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
            "tier_label_hi": "मध्यम संवेदनशीलता",
            "sensitivity_score": 47.9,
            "exposure_score": 57.2,
            "adaptive_deficit_score": 55.0
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.9 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 49,
              "wind_ventilation_pct": 8,
              "urban_heat_island_pct": 26,
              "canopy_buffer_pct": 17
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.645,
                12.83
              ],
              [
                77.678,
                12.83
              ],
              [
                77.68,
                12.86
              ],
              [
                77.648,
                12.86
              ],
              [
                77.645,
                12.83
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-10",
        "properties": {
          "ward_id": "BBMP-10",
          "name": "Yelahanka Satellite Town & Kogilu",
          "name_kn": "ಯಲಹಂಕ ಉಪನಗರ ಮತ್ತು ಕೋಗಿಲು",
          "name_hi": "यलहंका उपनगर और कोगिलु",
          "zone": "Yelahanka Zone",
          "population": 165000,
          "elderly_pct": 17.0,
          "outdoor_labor_pct": 28.0,
          "tin_roof_pct": 20.0,
          "tree_canopy_pct": 28.5,
          "hospital_beds_per_k": 3.8,
          "baseline_daily_admissions": 22,
          "uhi_temp_delta": 0.2,
          "wind_attenuation": 1.05,
          "center": [
            13.1007,
            77.5963
          ],
          "microclimate": {
            "temperature_c": 20.7,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 2.13,
            "wet_bulb_c": 19.56,
            "heat_index_c": 21.17,
            "wbgt_c": 19.89,
            "htsi_score": 19.3,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 20.7,
            "variance_c": 0.1,
            "accuracy_score_pct": 99.9,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 17.0,
            "outdoor_labor_pct": 28.0,
            "tin_roof_pct": 20.0,
            "tree_canopy_pct": 28.5,
            "hospital_beds_per_k": 3.8
          },
          "vulnerability_score": 35.4,
          "vulnerability_tier": "MODERATE",
          "vulnerability_details": {
            "score": 35.4,
            "tier": "MODERATE",
            "tier_label_en": "Moderate Vulnerability",
            "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
            "tier_label_hi": "मध्यम संवेदनशीलता",
            "sensitivity_score": 51.0,
            "exposure_score": 31.0,
            "adaptive_deficit_score": 20.7
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as 28% tree canopy shading roadways and releasing moisture.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: 28% ಮರಗಳ ಹೊದಿಕೆಯು ನೆರಳು ಮತ್ತು ತಂಪನ್ನು ನೀಡುತ್ತದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: 28% वृक्ष आवरण सड़कों पर छाया और ठंडक प्रदान करता है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 66,
              "wind_ventilation_pct": 7,
              "urban_heat_island_pct": 24,
              "canopy_buffer_pct": 5
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.58,
                13.085
              ],
              [
                77.615,
                13.085
              ],
              [
                77.618,
                13.116
              ],
              [
                77.582,
                13.116
              ],
              [
                77.58,
                13.085
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-153",
        "properties": {
          "ward_id": "BBMP-153",
          "name": "Jayanagar & Basavanagudi Heritage Parklands",
          "name_kn": "ಜಯನಗರ ಮತ್ತು ಬಸವನಗುಡಿ ಹಸಿರು ವಲಯ",
          "name_hi": "जयनगर और बसवनगुडी ग्रीन बेल्ट",
          "zone": "South Zone",
          "population": 175000,
          "elderly_pct": 23.5,
          "outdoor_labor_pct": 18.0,
          "tin_roof_pct": 6.0,
          "tree_canopy_pct": 34.8,
          "hospital_beds_per_k": 6.8,
          "baseline_daily_admissions": 22,
          "uhi_temp_delta": -1.2,
          "wind_attenuation": 0.95,
          "center": [
            12.925,
            77.5938
          ],
          "microclimate": {
            "temperature_c": 20.2,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.93,
            "wet_bulb_c": 19.07,
            "heat_index_c": 20.63,
            "wbgt_c": 19.4,
            "htsi_score": 17.2,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 20.2,
            "variance_c": -0.4,
            "accuracy_score_pct": 99.5,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 23.5,
            "outdoor_labor_pct": 18.0,
            "tin_roof_pct": 6.0,
            "tree_canopy_pct": 34.8,
            "hospital_beds_per_k": 6.8
          },
          "vulnerability_score": 21.6,
          "vulnerability_tier": "LOW",
          "vulnerability_details": {
            "score": 21.6,
            "tier": "LOW",
            "tier_label_en": "Low Vulnerability (Resilient)",
            "tier_label_kn": "ಕಡಿಮೆ ದುರ್ಬಲತೆ (ಸುರಕ್ಷಿತ)",
            "tier_label_hi": "कम संवेदनशीलता (सुरक्षित)",
            "sensitivity_score": 53.0,
            "exposure_score": 7.4,
            "adaptive_deficit_score": 0.3
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as local parklands and green cover providing a -0.42°C cooling buffer, while 35% tree canopy shading roadways and releasing moisture.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಉದ್ಯಾನವನಗಳು -0.42°C ನಷ್ಟು ತಂಪಾಗಿಸುವ ವಾತಾವರಣ ನೀಡುತ್ತವೆ, ಮತ್ತು 35% ಮರಗಳ ಹೊದಿಕೆಯು ನೆರಳು ಮತ್ತು ತಂಪನ್ನು ನೀಡುತ್ತದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: स्थानीय हरित क्षेत्र -0.42°C का प्राकृतिक शीतलन प्रदान करते हैं, तथा 35% वृक्ष आवरण सड़कों पर छाया और ठंडक प्रदान करता है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 71,
              "wind_ventilation_pct": 12,
              "urban_heat_island_pct": 16,
              "canopy_buffer_pct": 5
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.575,
                12.91
              ],
              [
                77.608,
                12.91
              ],
              [
                77.61,
                12.94
              ],
              [
                77.577,
                12.94
              ],
              [
                77.575,
                12.91
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-139",
        "properties": {
          "ward_id": "BBMP-139",
          "name": "K.R. Market & Chickpet Commercial Quarters",
          "name_kn": "ಕೆ.ಆರ್. ಮಾರುಕಟ್ಟೆ ಮತ್ತು ಚಿಕ್ಕಪೇಟೆ ವ್ಯಾಪಾರ ವಲಯ",
          "name_hi": "के.आर. मार्केट और चिकपेट बाजार",
          "zone": "South / Central Zone",
          "population": 215000,
          "elderly_pct": 14.8,
          "outdoor_labor_pct": 64.0,
          "tin_roof_pct": 62.0,
          "tree_canopy_pct": 3.2,
          "hospital_beds_per_k": 2.4,
          "baseline_daily_admissions": 48,
          "uhi_temp_delta": 3.4,
          "wind_attenuation": 0.35,
          "center": [
            12.966,
            77.575
          ],
          "microclimate": {
            "temperature_c": 21.8,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 0.71,
            "wet_bulb_c": 20.66,
            "heat_index_c": 22.4,
            "wbgt_c": 21.0,
            "htsi_score": 24.0,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.8,
            "variance_c": 1.2,
            "accuracy_score_pct": 98.6,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 14.8,
            "outdoor_labor_pct": 64.0,
            "tin_roof_pct": 62.0,
            "tree_canopy_pct": 3.2,
            "hospital_beds_per_k": 2.4
          },
          "vulnerability_score": 83.2,
          "vulnerability_tier": "CRITICAL",
          "vulnerability_details": {
            "score": 83.2,
            "tier": "CRITICAL",
            "tier_label_en": "Critical Vulnerability",
            "tier_label_kn": "ಅತ್ಯಂತ ಅಪಾಯಕಾರಿ ದುರ್ಬಲತೆ",
            "tier_label_hi": "अति संवेदनशील क्षेत्र",
            "sensitivity_score": 77.9,
            "exposure_score": 92.8,
            "adaptive_deficit_score": 75.3
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as low wind ventilation (0.7 m/s) trapping hot air in street canyons, while 62% tin roofs radiating secondary infrared heat into informal homes.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಕಡಿಮೆ ಗಾಳಿಯು (0.7 m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು 62% ತವರದ ಸೂರುಗಳು ಹೆಚ್ಚಿನ ಶಾಖವನ್ನು ಹೊರಸೂಸುತ್ತವೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: धीमी हवा (0.7 m/s) संकरी गलियों में गर्मी को रोक रही है, तथा 62% टिन की छतें बस्तियों में अतिरिक्त गर्मी फैलाती हैं तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 34,
              "wind_ventilation_pct": 18,
              "urban_heat_island_pct": 24,
              "canopy_buffer_pct": 24
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.562,
                12.955
              ],
              [
                77.585,
                12.955
              ],
              [
                77.588,
                12.975
              ],
              [
                77.565,
                12.975
              ],
              [
                77.562,
                12.955
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-82",
        "properties": {
          "ward_id": "BBMP-82",
          "name": "Indiranagar & HAL Defence Aerospace Hub",
          "name_kn": "ಇಂದಿರಾನಗರ ಮತ್ತು ಎಚ್‌ಎಎಲ್ ವಲಯ",
          "name_hi": "इंदिरानगर और एचएएल डिफेंस हब",
          "zone": "East Zone",
          "population": 155000,
          "elderly_pct": 16.5,
          "outdoor_labor_pct": 28.0,
          "tin_roof_pct": 14.0,
          "tree_canopy_pct": 22.4,
          "hospital_beds_per_k": 5.2,
          "baseline_daily_admissions": 25,
          "uhi_temp_delta": 1.1,
          "wind_attenuation": 0.85,
          "center": [
            12.9719,
            77.6412
          ],
          "microclimate": {
            "temperature_c": 21.0,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.73,
            "wet_bulb_c": 19.87,
            "heat_index_c": 21.52,
            "wbgt_c": 20.21,
            "htsi_score": 20.6,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.0,
            "variance_c": 0.4,
            "accuracy_score_pct": 99.5,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 16.5,
            "outdoor_labor_pct": 28.0,
            "tin_roof_pct": 14.0,
            "tree_canopy_pct": 22.4,
            "hospital_beds_per_k": 5.2
          },
          "vulnerability_score": 36.7,
          "vulnerability_tier": "MODERATE",
          "vulnerability_details": {
            "score": 36.7,
            "tier": "MODERATE",
            "tier_label_en": "Moderate Vulnerability",
            "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
            "tier_label_hi": "मध्यम संवेदनशीलता",
            "sensitivity_score": 50.2,
            "exposure_score": 34.4,
            "adaptive_deficit_score": 21.6
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.7 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 53,
              "wind_ventilation_pct": 12,
              "urban_heat_island_pct": 24,
              "canopy_buffer_pct": 11
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.625,
                12.958
              ],
              [
                77.658,
                12.958
              ],
              [
                77.66,
                12.985
              ],
              [
                77.627,
                12.985
              ],
              [
                77.625,
                12.958
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-21",
        "properties": {
          "ward_id": "BBMP-21",
          "name": "Hebbal Flyover & Manyata Tech Basin",
          "name_kn": "ಹೆಬ್ಬಾಳ ಮತ್ತು ಮಾನ್ಯತಾ ಟೆಕ್ ಪಾರ್ಕ್",
          "name_hi": "हेब्बाल और मान्यता टेक पार्क",
          "zone": "Byatarayanapura / North Zone",
          "population": 225000,
          "elderly_pct": 11.8,
          "outdoor_labor_pct": 42.0,
          "tin_roof_pct": 32.0,
          "tree_canopy_pct": 12.6,
          "hospital_beds_per_k": 3.5,
          "baseline_daily_admissions": 30,
          "uhi_temp_delta": 1.9,
          "wind_attenuation": 0.9,
          "center": [
            13.0358,
            77.597
          ],
          "microclimate": {
            "temperature_c": 21.3,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.83,
            "wet_bulb_c": 20.14,
            "heat_index_c": 21.82,
            "wbgt_c": 20.48,
            "htsi_score": 21.8,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.3,
            "variance_c": 0.7,
            "accuracy_score_pct": 99.2,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 11.8,
            "outdoor_labor_pct": 42.0,
            "tin_roof_pct": 32.0,
            "tree_canopy_pct": 12.6,
            "hospital_beds_per_k": 3.5
          },
          "vulnerability_score": 54.0,
          "vulnerability_tier": "MODERATE",
          "vulnerability_details": {
            "score": 54.0,
            "tier": "MODERATE",
            "tier_label_en": "Moderate Vulnerability",
            "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
            "tier_label_hi": "मध्यम संवेदनशीलता",
            "sensitivity_score": 54.5,
            "exposure_score": 55.7,
            "adaptive_deficit_score": 50.4
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.8 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 46,
              "wind_ventilation_pct": 9,
              "urban_heat_island_pct": 25,
              "canopy_buffer_pct": 20
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.585,
                13.02
              ],
              [
                77.622,
                13.02
              ],
              [
                77.625,
                13.052
              ],
              [
                77.588,
                13.052
              ],
              [
                77.585,
                13.02
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-128",
        "properties": {
          "ward_id": "BBMP-128",
          "name": "Rajajinagar Industrial & Metro Interchange",
          "name_kn": "ರಾಜಾಜಿನಗರ ಕೈಗಾರಿಕಾ ಮತ್ತು ಮೆಟ್ರೋ ನಿಲ್ದಾಣ",
          "name_hi": "राजाजीनगर औद्योगिक व मेट्रो इंटरचेंज",
          "zone": "West Zone",
          "population": 210000,
          "elderly_pct": 16.5,
          "outdoor_labor_pct": 42.0,
          "tin_roof_pct": 44.0,
          "tree_canopy_pct": 8.5,
          "hospital_beds_per_k": 2.9,
          "baseline_daily_admissions": 34,
          "uhi_temp_delta": 2.1,
          "wind_attenuation": 0.65,
          "center": [
            12.998,
            77.555
          ],
          "microclimate": {
            "temperature_c": 21.3,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.32,
            "wet_bulb_c": 20.21,
            "heat_index_c": 21.9,
            "wbgt_c": 20.55,
            "htsi_score": 22.1,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.3,
            "variance_c": 0.7,
            "accuracy_score_pct": 99.2,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 16.5,
            "outdoor_labor_pct": 42.0,
            "tin_roof_pct": 44.0,
            "tree_canopy_pct": 8.5,
            "hospital_beds_per_k": 2.9
          },
          "vulnerability_score": 64.1,
          "vulnerability_tier": "HIGH",
          "vulnerability_details": {
            "score": 64.1,
            "tier": "HIGH",
            "tier_label_en": "High Vulnerability",
            "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
            "tier_label_hi": "उच्च संवेदनशीलता",
            "sensitivity_score": 62.1,
            "exposure_score": 67.0,
            "adaptive_deficit_score": 62.2
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.3 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 41,
              "wind_ventilation_pct": 14,
              "urban_heat_island_pct": 23,
              "canopy_buffer_pct": 22
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.54,
                12.985
              ],
              [
                77.57,
                12.985
              ],
              [
                77.572,
                13.01
              ],
              [
                77.542,
                13.01
              ],
              [
                77.54,
                12.985
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-165",
        "properties": {
          "ward_id": "BBMP-165",
          "name": "Banashankari & Padmanabhanagar Cultural Hub",
          "name_kn": "ಬನಶಂಕರಿ ಮತ್ತು ಪದ್ಮನಾಭನಗರ ಸಾಂಸ್ಕೃತಿಕ ಕೇಂದ್ರ",
          "name_hi": "बनशंकरी और पद्मनाभनगर सांस्कृतिक केंद्र",
          "zone": "South Zone",
          "population": 225000,
          "elderly_pct": 21.0,
          "outdoor_labor_pct": 28.0,
          "tin_roof_pct": 22.0,
          "tree_canopy_pct": 24.5,
          "hospital_beds_per_k": 3.4,
          "baseline_daily_admissions": 28,
          "uhi_temp_delta": 0.4,
          "wind_attenuation": 0.85,
          "center": [
            12.923,
            77.552
          ],
          "microclimate": {
            "temperature_c": 20.7,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.73,
            "wet_bulb_c": 19.62,
            "heat_index_c": 21.25,
            "wbgt_c": 19.96,
            "htsi_score": 19.6,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 20.7,
            "variance_c": 0.1,
            "accuracy_score_pct": 99.9,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 21.0,
            "outdoor_labor_pct": 28.0,
            "tin_roof_pct": 22.0,
            "tree_canopy_pct": 24.5,
            "hospital_beds_per_k": 3.4
          },
          "vulnerability_score": 41.6,
          "vulnerability_tier": "MODERATE",
          "vulnerability_details": {
            "score": 41.6,
            "tier": "MODERATE",
            "tier_label_en": "Moderate Vulnerability",
            "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
            "tier_label_hi": "मध्यम संवेदनशीलता",
            "sensitivity_score": 57.4,
            "exposure_score": 34.4,
            "adaptive_deficit_score": 30.8
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.7 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 57,
              "wind_ventilation_pct": 13,
              "urban_heat_island_pct": 22,
              "canopy_buffer_pct": 8
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.535,
                12.91
              ],
              [
                77.568,
                12.91
              ],
              [
                77.57,
                12.935
              ],
              [
                77.538,
                12.935
              ],
              [
                77.535,
                12.91
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-36",
        "properties": {
          "ward_id": "BBMP-36",
          "name": "Yeshwanthpur APMC Grain Market & Rail Basin",
          "name_kn": "ಯಶವಂತಪುರ ಎಪಿಎಂಸಿ ಮಾರುಕಟ್ಟೆ ಮತ್ತು ರೈಲು ನಿಲ್ದಾಣ",
          "name_hi": "यशवंतपुर एपीएमसी अनाज मंडी व रेलवे जंक्शन",
          "zone": "West / North-West Zone",
          "population": 195000,
          "elderly_pct": 14.0,
          "outdoor_labor_pct": 56.0,
          "tin_roof_pct": 58.0,
          "tree_canopy_pct": 6.2,
          "hospital_beds_per_k": 2.2,
          "baseline_daily_admissions": 38,
          "uhi_temp_delta": 2.9,
          "wind_attenuation": 0.5,
          "center": [
            13.023,
            77.546
          ],
          "microclimate": {
            "temperature_c": 21.6,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.01,
            "wet_bulb_c": 20.49,
            "heat_index_c": 22.21,
            "wbgt_c": 20.83,
            "htsi_score": 23.3,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.6,
            "variance_c": 1.0,
            "accuracy_score_pct": 98.8,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 14.0,
            "outdoor_labor_pct": 56.0,
            "tin_roof_pct": 58.0,
            "tree_canopy_pct": 6.2,
            "hospital_beds_per_k": 2.2
          },
          "vulnerability_score": 76.5,
          "vulnerability_tier": "CRITICAL",
          "vulnerability_details": {
            "score": 76.5,
            "tier": "CRITICAL",
            "tier_label_en": "Critical Vulnerability",
            "tier_label_kn": "ಅತ್ಯಂತ ಅಪಾಯಕಾರಿ ದುರ್ಬಲತೆ",
            "tier_label_hi": "अति संवेदनशील क्षेत्र",
            "sensitivity_score": 69.9,
            "exposure_score": 85.2,
            "adaptive_deficit_score": 71.8
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as low wind ventilation (1.0 m/s) trapping hot air in street canyons, while 58% tin roofs radiating secondary infrared heat into informal homes.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಕಡಿಮೆ ಗಾಳಿಯು (1.0 m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು 58% ತವರದ ಸೂರುಗಳು ಹೆಚ್ಚಿನ ಶಾಖವನ್ನು ಹೊರಸೂಸುತ್ತವೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: धीमी हवा (1.0 m/s) संकरी गलियों में गर्मी को रोक रही है, तथा 58% टिन की छतें बस्तियों में अतिरिक्त गर्मी फैलाती हैं तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 37,
              "wind_ventilation_pct": 17,
              "urban_heat_island_pct": 24,
              "canopy_buffer_pct": 22
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.53,
                13.01
              ],
              [
                77.56,
                13.01
              ],
              [
                77.562,
                13.035
              ],
              [
                77.532,
                13.035
              ],
              [
                77.53,
                13.01
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-89",
        "properties": {
          "ward_id": "BBMP-89",
          "name": "Marathahalli Outer Ring Road & Tech Junction",
          "name_kn": "ಮಾರತಹಳ್ಳಿ ಔಟರ್ ರಿಂಗ್ ರೋಡ್ ಮತ್ತು ಟೆಕ್ ಕಾರಿಡಾರ್",
          "name_hi": "मराठाहल्ली आउटर रिंग रोड व टेक जंक्शन",
          "zone": "Mahadevapura Zone",
          "population": 260000,
          "elderly_pct": 11.0,
          "outdoor_labor_pct": 49.0,
          "tin_roof_pct": 61.0,
          "tree_canopy_pct": 7.0,
          "hospital_beds_per_k": 1.8,
          "baseline_daily_admissions": 36,
          "uhi_temp_delta": 2.6,
          "wind_attenuation": 0.6,
          "center": [
            12.956,
            77.702
          ],
          "microclimate": {
            "temperature_c": 21.5,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.22,
            "wet_bulb_c": 20.38,
            "heat_index_c": 22.09,
            "wbgt_c": 20.72,
            "htsi_score": 22.8,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.5,
            "variance_c": 0.9,
            "accuracy_score_pct": 98.9,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 11.0,
            "outdoor_labor_pct": 49.0,
            "tin_roof_pct": 61.0,
            "tree_canopy_pct": 7.0,
            "hospital_beds_per_k": 1.8
          },
          "vulnerability_score": 73.0,
          "vulnerability_tier": "HIGH",
          "vulnerability_details": {
            "score": 73.0,
            "tier": "HIGH",
            "tier_label_en": "High Vulnerability",
            "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
            "tier_label_hi": "उच्च संवेदनशीलता",
            "sensitivity_score": 59.1,
            "exposure_score": 84.8,
            "adaptive_deficit_score": 73.6
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as 61% tin roofs radiating secondary infrared heat into informal homes.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: 61% ತವರದ ಸೂರುಗಳು ಹೆಚ್ಚಿನ ಶಾಖವನ್ನು ಹೊರಸೂಸುತ್ತವೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: 61% टिन की छतें बस्तियों में अतिरिक्त गर्मी फैलाती हैं तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 39,
              "wind_ventilation_pct": 15,
              "urban_heat_island_pct": 24,
              "canopy_buffer_pct": 22
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.685,
                12.94
              ],
              [
                77.72,
                12.94
              ],
              [
                77.722,
                12.97
              ],
              [
                77.688,
                12.97
              ],
              [
                77.685,
                12.94
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-176",
        "properties": {
          "ward_id": "BBMP-176",
          "name": "BTM Layout & Madiwala Lake Market Corridor",
          "name_kn": "ಬಿಟಿಎಂ ಲೇಔಟ್ ಮತ್ತು ಮಡಿವಾಳ ಸರೋವರ ಕಾರಿಡಾರ್",
          "name_hi": "बीटीएम लेआउट और मदिवाला लेक मार्केट कॉरिडोर",
          "zone": "South Zone",
          "population": 235000,
          "elderly_pct": 13.5,
          "outdoor_labor_pct": 35.0,
          "tin_roof_pct": 32.0,
          "tree_canopy_pct": 18.0,
          "hospital_beds_per_k": 2.7,
          "baseline_daily_admissions": 30,
          "uhi_temp_delta": 1.2,
          "wind_attenuation": 0.75,
          "center": [
            12.9165,
            77.611
          ],
          "microclimate": {
            "temperature_c": 21.0,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.52,
            "wet_bulb_c": 19.9,
            "heat_index_c": 21.55,
            "wbgt_c": 20.24,
            "htsi_score": 20.7,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.0,
            "variance_c": 0.4,
            "accuracy_score_pct": 99.5,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 13.5,
            "outdoor_labor_pct": 35.0,
            "tin_roof_pct": 32.0,
            "tree_canopy_pct": 18.0,
            "hospital_beds_per_k": 2.7
          },
          "vulnerability_score": 49.6,
          "vulnerability_tier": "MODERATE",
          "vulnerability_details": {
            "score": 49.6,
            "tier": "MODERATE",
            "tier_label_en": "Moderate Vulnerability",
            "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
            "tier_label_hi": "मध्यम संवेदनशीलता",
            "sensitivity_score": 51.3,
            "exposure_score": 49.4,
            "adaptive_deficit_score": 47.5
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.5 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 48,
              "wind_ventilation_pct": 14,
              "urban_heat_island_pct": 23,
              "canopy_buffer_pct": 15
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.595,
                12.905
              ],
              [
                77.625,
                12.905
              ],
              [
                77.628,
                12.928
              ],
              [
                77.598,
                12.928
              ],
              [
                77.595,
                12.905
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-175",
        "properties": {
          "ward_id": "BBMP-175",
          "name": "Bommanahalli Garment Cluster & Silk Board",
          "name_kn": "ಬೊಮ್ಮನಹಳ್ಳಿ ಗಾರ್ಮೆಂಟ್ ಕ್ಲಸ್ಟರ್ ಮತ್ತು ಸಿಲ್ಕ್ ಬೋರ್ಡ್",
          "name_hi": "बोम्मनहल्ली गारमेंट क्लस्टर व सिल्क बोर्ड",
          "zone": "Bommanahalli Zone",
          "population": 275000,
          "elderly_pct": 12.0,
          "outdoor_labor_pct": 62.0,
          "tin_roof_pct": 66.0,
          "tree_canopy_pct": 4.8,
          "hospital_beds_per_k": 1.5,
          "baseline_daily_admissions": 44,
          "uhi_temp_delta": 3.1,
          "wind_attenuation": 0.45,
          "center": [
            12.901,
            77.631
          ],
          "microclimate": {
            "temperature_c": 21.7,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 0.91,
            "wet_bulb_c": 20.56,
            "heat_index_c": 22.29,
            "wbgt_c": 20.9,
            "htsi_score": 23.6,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.7,
            "variance_c": 1.1,
            "accuracy_score_pct": 98.7,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 12.0,
            "outdoor_labor_pct": 62.0,
            "tin_roof_pct": 66.0,
            "tree_canopy_pct": 4.8,
            "hospital_beds_per_k": 1.5
          },
          "vulnerability_score": 82.4,
          "vulnerability_tier": "CRITICAL",
          "vulnerability_details": {
            "score": 82.4,
            "tier": "CRITICAL",
            "tier_label_en": "Critical Vulnerability",
            "tier_label_kn": "ಅತ್ಯಂತ ಅಪಾಯಕಾರಿ ದುರ್ಬಲತೆ",
            "tier_label_hi": "अति संवेदनशील क्षेत्र",
            "sensitivity_score": 71.7,
            "exposure_score": 93.3,
            "adaptive_deficit_score": 79.8
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as low wind ventilation (0.9 m/s) trapping hot air in street canyons, while 66% tin roofs radiating secondary infrared heat into informal homes.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಕಡಿಮೆ ಗಾಳಿಯು (0.9 m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು 66% ತವರದ ಸೂರುಗಳು ಹೆಚ್ಚಿನ ಶಾಖವನ್ನು ಹೊರಸೂಸುತ್ತವೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: धीमी हवा (0.9 m/s) संकरी गलियों में गर्मी को रोक रही है, तथा 66% टिन की छतें बस्तियों में अतिरिक्त गर्मी फैलाती हैं तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 36,
              "wind_ventilation_pct": 17,
              "urban_heat_island_pct": 24,
              "canopy_buffer_pct": 23
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.615,
                12.89
              ],
              [
                77.645,
                12.89
              ],
              [
                77.648,
                12.912
              ],
              [
                77.618,
                12.912
              ],
              [
                77.615,
                12.89
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-112",
        "properties": {
          "ward_id": "BBMP-112",
          "name": "Domlur & Indiranagar 100ft Commercial Belt",
          "name_kn": "ದೋಮ್ಲೂರು ಮತ್ತು ಇಂದಿರಾನಗರ ವಾಣಿಜ್ಯ ಪಟ್ಟಿ",
          "name_hi": "डोम्लूर और इंदिरानगर कमर्शियल बेल्ट",
          "zone": "East Zone",
          "population": 155000,
          "elderly_pct": 16.5,
          "outdoor_labor_pct": 42.0,
          "tin_roof_pct": 32.0,
          "tree_canopy_pct": 14.2,
          "hospital_beds_per_k": 3.2,
          "baseline_daily_admissions": 26,
          "uhi_temp_delta": 1.8,
          "wind_attenuation": 0.65,
          "center": [
            12.961,
            77.638
          ],
          "microclimate": {
            "temperature_c": 21.2,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.32,
            "wet_bulb_c": 20.11,
            "heat_index_c": 21.78,
            "wbgt_c": 20.45,
            "htsi_score": 21.6,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.2,
            "variance_c": 0.6,
            "accuracy_score_pct": 99.3,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 16.5,
            "outdoor_labor_pct": 42.0,
            "tin_roof_pct": 32.0,
            "tree_canopy_pct": 14.2,
            "hospital_beds_per_k": 3.2
          },
          "vulnerability_score": 56.2,
          "vulnerability_tier": "HIGH",
          "vulnerability_details": {
            "score": 56.2,
            "tier": "HIGH",
            "tier_label_en": "High Vulnerability",
            "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
            "tier_label_hi": "उच्च संवेदनशीलता",
            "sensitivity_score": 62.1,
            "exposure_score": 54.8,
            "adaptive_deficit_score": 50.1
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.3 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 44,
              "wind_ventilation_pct": 15,
              "urban_heat_island_pct": 23,
              "canopy_buffer_pct": 18
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.625,
                12.951
              ],
              [
                77.652,
                12.951
              ],
              [
                77.655,
                12.972
              ],
              [
                77.628,
                12.972
              ],
              [
                77.625,
                12.951
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-7",
        "properties": {
          "ward_id": "BBMP-7",
          "name": "Byatarayanapura Bellary Road Airport Gateway",
          "name_kn": "ಬ್ಯಾಟರಾಯನಪುರ ಬಳ್ಳಾರಿ ರಸ್ತೆ ಹೆದ್ದಾರಿ ಕಾರಿಡಾರ್",
          "name_hi": "ब्याटरायनपुरा बेल्लारी रोड हाईवे कॉरिडोर",
          "zone": "Yelahanka Zone",
          "population": 210000,
          "elderly_pct": 13.5,
          "outdoor_labor_pct": 54.0,
          "tin_roof_pct": 48.0,
          "tree_canopy_pct": 8.5,
          "hospital_beds_per_k": 1.8,
          "baseline_daily_admissions": 32,
          "uhi_temp_delta": 2.2,
          "wind_attenuation": 0.75,
          "center": [
            13.062,
            77.592
          ],
          "microclimate": {
            "temperature_c": 21.4,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.52,
            "wet_bulb_c": 20.25,
            "heat_index_c": 21.94,
            "wbgt_c": 20.59,
            "htsi_score": 22.2,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.4,
            "variance_c": 0.8,
            "accuracy_score_pct": 99.0,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 13.5,
            "outdoor_labor_pct": 54.0,
            "tin_roof_pct": 48.0,
            "tree_canopy_pct": 8.5,
            "hospital_beds_per_k": 1.8
          },
          "vulnerability_score": 69.7,
          "vulnerability_tier": "HIGH",
          "vulnerability_details": {
            "score": 69.7,
            "tier": "HIGH",
            "tier_label_en": "High Vulnerability",
            "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
            "tier_label_hi": "उच्च संवेदनशीलता",
            "sensitivity_score": 67.4,
            "exposure_score": 71.0,
            "adaptive_deficit_score": 71.0
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.5 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 42,
              "wind_ventilation_pct": 12,
              "urban_heat_island_pct": 24,
              "canopy_buffer_pct": 22
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.575,
                13.048
              ],
              [
                77.608,
                13.048
              ],
              [
                77.612,
                13.076
              ],
              [
                77.578,
                13.076
              ],
              [
                77.575,
                13.048
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-159",
        "properties": {
          "ward_id": "BBMP-159",
          "name": "J.P. Nagar Cultural & Sarakki Lake Enclave",
          "name_kn": "ಜೆ.ಪಿ. ನಗರ ಮತ್ತು ಸಾರಕ್ಕಿ ಕೆರೆ ಪರಿಸರ",
          "name_hi": "जेपी नगर और सारक्की झील एन्क्लेव",
          "zone": "South Zone",
          "population": 195000,
          "elderly_pct": 19.5,
          "outdoor_labor_pct": 35.0,
          "tin_roof_pct": 26.0,
          "tree_canopy_pct": 18.4,
          "hospital_beds_per_k": 3.8,
          "baseline_daily_admissions": 28,
          "uhi_temp_delta": 1.2,
          "wind_attenuation": 0.7,
          "center": [
            12.908,
            77.585
          ],
          "microclimate": {
            "temperature_c": 21.0,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.42,
            "wet_bulb_c": 19.9,
            "heat_index_c": 21.55,
            "wbgt_c": 20.24,
            "htsi_score": 20.7,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.0,
            "variance_c": 0.4,
            "accuracy_score_pct": 99.5,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 19.5,
            "outdoor_labor_pct": 35.0,
            "tin_roof_pct": 26.0,
            "tree_canopy_pct": 18.4,
            "hospital_beds_per_k": 3.8
          },
          "vulnerability_score": 48.7,
          "vulnerability_tier": "MODERATE",
          "vulnerability_details": {
            "score": 48.7,
            "tier": "MODERATE",
            "tier_label_en": "Moderate Vulnerability",
            "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
            "tier_label_hi": "मध्यम संवेदनशीलता",
            "sensitivity_score": 61.0,
            "exposure_score": 44.7,
            "adaptive_deficit_score": 38.1
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.4 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 48,
              "wind_ventilation_pct": 15,
              "urban_heat_island_pct": 23,
              "canopy_buffer_pct": 14
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.572,
                12.895
              ],
              [
                77.602,
                12.895
              ],
              [
                77.605,
                12.922
              ],
              [
                77.575,
                12.922
              ],
              [
                77.572,
                12.895
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-14",
        "properties": {
          "ward_id": "BBMP-14",
          "name": "Bagalgunte & Dasarahalli Industrial Corridor",
          "name_kn": "ಬಾಗಲಗುಂಟೆ ಮತ್ತು ದಾಸರಹಳ್ಳಿ ಕೈಗಾರಿಕಾ ಕಾರಿಡಾರ್",
          "name_hi": "बागलकुंटे और दासरहल्ली इंडस्ट्रियल कॉरिडोर",
          "zone": "Dasarahalli Zone",
          "population": 245000,
          "elderly_pct": 11.2,
          "outdoor_labor_pct": 65.0,
          "tin_roof_pct": 68.0,
          "tree_canopy_pct": 4.2,
          "hospital_beds_per_k": 1.4,
          "baseline_daily_admissions": 41,
          "uhi_temp_delta": 2.9,
          "wind_attenuation": 0.5,
          "center": [
            13.045,
            77.512
          ],
          "microclimate": {
            "temperature_c": 21.6,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.01,
            "wet_bulb_c": 20.49,
            "heat_index_c": 22.21,
            "wbgt_c": 20.83,
            "htsi_score": 23.3,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.6,
            "variance_c": 1.0,
            "accuracy_score_pct": 98.8,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 11.2,
            "outdoor_labor_pct": 65.0,
            "tin_roof_pct": 68.0,
            "tree_canopy_pct": 4.2,
            "hospital_beds_per_k": 1.4
          },
          "vulnerability_score": 83.2,
          "vulnerability_tier": "CRITICAL",
          "vulnerability_details": {
            "score": 83.2,
            "tier": "CRITICAL",
            "tier_label_en": "Critical Vulnerability",
            "tier_label_kn": "ಅತ್ಯಂತ ಅಪಾಯಕಾರಿ ದುರ್ಬಲತೆ",
            "tier_label_hi": "अति संवेदनशील क्षेत्र",
            "sensitivity_score": 73.0,
            "exposure_score": 93.0,
            "adaptive_deficit_score": 81.6
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as low wind ventilation (1.0 m/s) trapping hot air in street canyons, while 68% tin roofs radiating secondary infrared heat into informal homes.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಕಡಿಮೆ ಗಾಳಿಯು (1.0 m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು 68% ತವರದ ಸೂರುಗಳು ಹೆಚ್ಚಿನ ಶಾಖವನ್ನು ಹೊರಸೂಸುತ್ತವೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: धीमी हवा (1.0 m/s) संकरी गलियों में गर्मी को रोक रही है, तथा 68% टिन की छतें बस्तियों में अतिरिक्त गर्मी फैलाती हैं तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 37,
              "wind_ventilation_pct": 16,
              "urban_heat_island_pct": 24,
              "canopy_buffer_pct": 23
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.495,
                13.031
              ],
              [
                77.528,
                13.031
              ],
              [
                77.532,
                13.059
              ],
              [
                77.498,
                13.059
              ],
              [
                77.495,
                13.031
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-118",
        "properties": {
          "ward_id": "BBMP-118",
          "name": "Vijayanagar & Magadi Road Wholesale Trade Hub",
          "name_kn": "ವಿಜಯನಗರ ಮತ್ತು ಮಾಗಡಿ ರಸ್ತೆ ಸಗಟು ವಾಣಿಜ್ಯ ಕೇಂದ್ರ",
          "name_hi": "विजयनगर और मागड़ी रोड होलसेल ट्रेड हब",
          "zone": "West Zone",
          "population": 220000,
          "elderly_pct": 17.8,
          "outdoor_labor_pct": 46.0,
          "tin_roof_pct": 44.0,
          "tree_canopy_pct": 9.8,
          "hospital_beds_per_k": 2.7,
          "baseline_daily_admissions": 35,
          "uhi_temp_delta": 2.1,
          "wind_attenuation": 0.55,
          "center": [
            12.971,
            77.538
          ],
          "microclimate": {
            "temperature_c": 21.3,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.12,
            "wet_bulb_c": 20.21,
            "heat_index_c": 21.9,
            "wbgt_c": 20.55,
            "htsi_score": 22.1,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.3,
            "variance_c": 0.7,
            "accuracy_score_pct": 99.2,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 17.8,
            "outdoor_labor_pct": 46.0,
            "tin_roof_pct": 44.0,
            "tree_canopy_pct": 9.8,
            "hospital_beds_per_k": 2.7
          },
          "vulnerability_score": 65.8,
          "vulnerability_tier": "HIGH",
          "vulnerability_details": {
            "score": 65.8,
            "tier": "HIGH",
            "tier_label_en": "High Vulnerability",
            "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
            "tier_label_hi": "उच्च संवेदनशीलता",
            "sensitivity_score": 67.5,
            "exposure_score": 67.0,
            "adaptive_deficit_score": 61.6
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as low wind ventilation (1.1 m/s) trapping hot air in street canyons.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಕಡಿಮೆ ಗಾಳಿಯು (1.1 m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: धीमी हवा (1.1 m/s) संकरी गलियों में गर्मी को रोक रही है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 40,
              "wind_ventilation_pct": 17,
              "urban_heat_island_pct": 23,
              "canopy_buffer_pct": 20
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.522,
                12.958
              ],
              [
                77.554,
                12.958
              ],
              [
                77.558,
                12.985
              ],
              [
                77.525,
                12.985
              ],
              [
                77.522,
                12.958
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-150",
        "properties": {
          "ward_id": "BBMP-150",
          "name": "Bellandur Eco-Park & Lake Technology Corridor",
          "name_kn": "ಬೆಳ್ಳಂದೂರು ಇಕೋ-ಪಾರ್ಕ್ ಮತ್ತು ಕೆರೆ ತಂತ್ರಜ್ಞಾನ ಕಾರಿಡಾರ್",
          "name_hi": "बेल्लंदूर इको-पार्क और लेक टेक्नोलॉजी कॉरिडोर",
          "zone": "Mahadevapura Zone",
          "population": 260000,
          "elderly_pct": 10.5,
          "outdoor_labor_pct": 52.0,
          "tin_roof_pct": 40.0,
          "tree_canopy_pct": 11.0,
          "hospital_beds_per_k": 2.4,
          "baseline_daily_admissions": 36,
          "uhi_temp_delta": 2.3,
          "wind_attenuation": 0.6,
          "center": [
            12.935,
            77.674
          ],
          "microclimate": {
            "temperature_c": 21.4,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.22,
            "wet_bulb_c": 20.28,
            "heat_index_c": 21.98,
            "wbgt_c": 20.62,
            "htsi_score": 22.4,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.4,
            "variance_c": 0.8,
            "accuracy_score_pct": 99.0,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 10.5,
            "outdoor_labor_pct": 52.0,
            "tin_roof_pct": 40.0,
            "tree_canopy_pct": 11.0,
            "hospital_beds_per_k": 2.4
          },
          "vulnerability_score": 63.0,
          "vulnerability_tier": "HIGH",
          "vulnerability_details": {
            "score": 63.0,
            "tier": "HIGH",
            "tier_label_en": "High Vulnerability",
            "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
            "tier_label_hi": "उच्च संवेदनशीलता",
            "sensitivity_score": 60.9,
            "exposure_score": 65.6,
            "adaptive_deficit_score": 61.9
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.2 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 41,
              "wind_ventilation_pct": 16,
              "urban_heat_island_pct": 24,
              "canopy_buffer_pct": 19
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.658,
                12.921
              ],
              [
                77.692,
                12.921
              ],
              [
                77.695,
                12.948
              ],
              [
                77.661,
                12.948
              ],
              [
                77.658,
                12.921
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-60",
        "properties": {
          "ward_id": "BBMP-60",
          "name": "Vasanth Nagar & High Grounds Cantonment",
          "name_kn": "ವಸಂತ ನಗರ ಮತ್ತು ಹೈಗ್ರೌಂಡ್ಸ್ ಕಂಟೋನ್ಮೆಂಟ್",
          "name_hi": "वसंत नगर व हाई ग्राउंड्स छावनी",
          "zone": "Central Zone",
          "population": 165000,
          "elderly_pct": 22.5,
          "outdoor_labor_pct": 24.0,
          "tin_roof_pct": 18.0,
          "tree_canopy_pct": 28.0,
          "hospital_beds_per_k": 4.5,
          "baseline_daily_admissions": 25,
          "uhi_temp_delta": 0.8,
          "wind_attenuation": 0.88,
          "center": [
            12.99,
            77.588
          ],
          "microclimate": {
            "temperature_c": 20.9,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.79,
            "wet_bulb_c": 19.76,
            "heat_index_c": 21.4,
            "wbgt_c": 20.1,
            "htsi_score": 20.2,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 20.9,
            "variance_c": 0.3,
            "accuracy_score_pct": 99.6,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 22.5,
            "outdoor_labor_pct": 24.0,
            "tin_roof_pct": 18.0,
            "tree_canopy_pct": 28.0,
            "hospital_beds_per_k": 4.5
          },
          "vulnerability_score": 37.7,
          "vulnerability_tier": "MODERATE",
          "vulnerability_details": {
            "score": 37.7,
            "tier": "MODERATE",
            "tier_label_en": "Moderate Vulnerability",
            "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
            "tier_label_hi": "मध्यम संवेदनशीलता",
            "sensitivity_score": 56.5,
            "exposure_score": 34.8,
            "adaptive_deficit_score": 16.0
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as 28% tree canopy shading roadways and releasing moisture.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: 28% ಮರಗಳ ಹೊದಿಕೆಯು ನೆರಳು ಮತ್ತು ತಂಪನ್ನು ನೀಡುತ್ತದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: 28% वृक्ष आवरण सड़कों पर छाया और ठंडक प्रदान करता है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 59,
              "wind_ventilation_pct": 13,
              "urban_heat_island_pct": 25,
              "canopy_buffer_pct": 5
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.575,
                12.978
              ],
              [
                77.602,
                12.978
              ],
              [
                77.604,
                13.002
              ],
              [
                77.577,
                13.002
              ],
              [
                77.575,
                12.978
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-177",
        "properties": {
          "ward_id": "BBMP-177",
          "name": "J.P. Nagar 7th Phase & Puttenahalli",
          "name_kn": "ಜೆ.ಪಿ. ನಗರ 7ನೇ ಹಂತ ಮತ್ತು ಪುಟ್ಟೇನಹಳ್ಳಿ",
          "name_hi": "जेपी नगर 7वां चरण व पुट्टेनाहल्ली",
          "zone": "South Zone",
          "population": 215000,
          "elderly_pct": 18.0,
          "outdoor_labor_pct": 32.0,
          "tin_roof_pct": 28.0,
          "tree_canopy_pct": 14.5,
          "hospital_beds_per_k": 3.0,
          "baseline_daily_admissions": 30,
          "uhi_temp_delta": 1.8,
          "wind_attenuation": 0.72,
          "center": [
            12.895,
            77.575
          ],
          "microclimate": {
            "temperature_c": 21.2,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.46,
            "wet_bulb_c": 20.11,
            "heat_index_c": 21.78,
            "wbgt_c": 20.45,
            "htsi_score": 21.6,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.2,
            "variance_c": 0.6,
            "accuracy_score_pct": 99.3,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 18.0,
            "outdoor_labor_pct": 32.0,
            "tin_roof_pct": 28.0,
            "tree_canopy_pct": 14.5,
            "hospital_beds_per_k": 3.0
          },
          "vulnerability_score": 53.1,
          "vulnerability_tier": "MODERATE",
          "vulnerability_details": {
            "score": 53.1,
            "tier": "MODERATE",
            "tier_label_en": "Moderate Vulnerability",
            "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
            "tier_label_hi": "मध्यम संवेदनशीलता",
            "sensitivity_score": 56.0,
            "exposure_score": 51.7,
            "adaptive_deficit_score": 51.1
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.5 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 45,
              "wind_ventilation_pct": 14,
              "urban_heat_island_pct": 24,
              "canopy_buffer_pct": 17
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.56,
                12.88
              ],
              [
                77.59,
                12.88
              ],
              [
                77.592,
                12.91
              ],
              [
                77.562,
                12.91
              ],
              [
                77.56,
                12.88
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-113",
        "properties": {
          "ward_id": "BBMP-113",
          "name": "Konena Agrahara & Old Airport Road",
          "name_kn": "ಕೋನೇನ ಅಗ್ರಹಾರ ಮತ್ತು ಹಳೆ ವಿಮಾನ ನಿಲ್ದಾಣ ರಸ್ತೆ",
          "name_hi": "कोनेना अग्रहारा व पुराना एयरपोर्ट रोड",
          "zone": "East Zone",
          "population": 190000,
          "elderly_pct": 13.5,
          "outdoor_labor_pct": 46.0,
          "tin_roof_pct": 48.0,
          "tree_canopy_pct": 9.2,
          "hospital_beds_per_k": 3.2,
          "baseline_daily_admissions": 32,
          "uhi_temp_delta": 2.4,
          "wind_attenuation": 0.6,
          "center": [
            12.958,
            77.658
          ],
          "microclimate": {
            "temperature_c": 21.4,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.22,
            "wet_bulb_c": 20.32,
            "heat_index_c": 22.02,
            "wbgt_c": 20.66,
            "htsi_score": 22.5,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.4,
            "variance_c": 0.8,
            "accuracy_score_pct": 99.0,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 13.5,
            "outdoor_labor_pct": 46.0,
            "tin_roof_pct": 48.0,
            "tree_canopy_pct": 9.2,
            "hospital_beds_per_k": 3.2
          },
          "vulnerability_score": 65.0,
          "vulnerability_tier": "HIGH",
          "vulnerability_details": {
            "score": 65.0,
            "tier": "HIGH",
            "tier_label_en": "High Vulnerability",
            "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
            "tier_label_hi": "उच्च संवेदनशीलता",
            "sensitivity_score": 60.6,
            "exposure_score": 72.8,
            "adaptive_deficit_score": 58.6
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.2 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 40,
              "wind_ventilation_pct": 15,
              "urban_heat_island_pct": 24,
              "canopy_buffer_pct": 21
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.642,
                12.945
              ],
              [
                77.674,
                12.945
              ],
              [
                77.676,
                12.972
              ],
              [
                77.644,
                12.972
              ],
              [
                77.642,
                12.945
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-12",
        "properties": {
          "ward_id": "BBMP-12",
          "name": "Shettihalli & Chikkabanavara Lake Basin",
          "name_kn": "ಶೆಟ್ಟಿಹಳ್ಳಿ ಮತ್ತು ಚಿಕ್ಕಬಾಣಾವರ ಕೆರೆ ಪ್ರದೇಶ",
          "name_hi": "शेट्टीहल्ली व चिक्काबाणवारा झील बेसिन",
          "zone": "Dasarahalli Zone",
          "population": 178000,
          "elderly_pct": 12.0,
          "outdoor_labor_pct": 52.0,
          "tin_roof_pct": 52.0,
          "tree_canopy_pct": 8.0,
          "hospital_beds_per_k": 2.1,
          "baseline_daily_admissions": 29,
          "uhi_temp_delta": 2.0,
          "wind_attenuation": 0.65,
          "center": [
            13.068,
            77.512
          ],
          "microclimate": {
            "temperature_c": 21.3,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.32,
            "wet_bulb_c": 20.18,
            "heat_index_c": 21.86,
            "wbgt_c": 20.52,
            "htsi_score": 21.9,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.3,
            "variance_c": 0.7,
            "accuracy_score_pct": 99.2,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 12.0,
            "outdoor_labor_pct": 52.0,
            "tin_roof_pct": 52.0,
            "tree_canopy_pct": 8.0,
            "hospital_beds_per_k": 2.1
          },
          "vulnerability_score": 68.5,
          "vulnerability_tier": "HIGH",
          "vulnerability_details": {
            "score": 68.5,
            "tier": "HIGH",
            "tier_label_en": "High Vulnerability",
            "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
            "tier_label_hi": "उच्च संवेदनशीलता",
            "sensitivity_score": 63.3,
            "exposure_score": 72.4,
            "adaptive_deficit_score": 69.5
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as 52% tin roofs radiating secondary infrared heat into informal homes.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: 52% ತವರದ ಸೂರುಗಳು ಹೆಚ್ಚಿನ ಶಾಖವನ್ನು ಹೊರಸೂಸುತ್ತವೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: 52% टिन की छतें बस्तियों में अतिरिक्त गर्मी फैलाती हैं तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 41,
              "wind_ventilation_pct": 14,
              "urban_heat_island_pct": 22,
              "canopy_buffer_pct": 23
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.495,
                13.052
              ],
              [
                77.528,
                13.052
              ],
              [
                77.53,
                13.084
              ],
              [
                77.498,
                13.084
              ],
              [
                77.495,
                13.052
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-197",
        "properties": {
          "ward_id": "BBMP-197",
          "name": "Begur & Hulimavu Bannerghatta Corridor",
          "name_kn": "ಬೇಗೂರು ಮತ್ತು ಹುಳಿಮಾವು ಬನ್ನೇರುಘಟ್ಟ ರಸ್ತೆ",
          "name_hi": "बेगूर व हुलीमावू बन्नेरघट्टा कॉरिडोर",
          "zone": "Bommanahalli Zone",
          "population": 230000,
          "elderly_pct": 14.5,
          "outdoor_labor_pct": 44.0,
          "tin_roof_pct": 42.0,
          "tree_canopy_pct": 11.0,
          "hospital_beds_per_k": 2.8,
          "baseline_daily_admissions": 36,
          "uhi_temp_delta": 2.2,
          "wind_attenuation": 0.68,
          "center": [
            12.875,
            77.625
          ],
          "microclimate": {
            "temperature_c": 21.4,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.38,
            "wet_bulb_c": 20.25,
            "heat_index_c": 21.94,
            "wbgt_c": 20.59,
            "htsi_score": 22.2,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.4,
            "variance_c": 0.8,
            "accuracy_score_pct": 99.0,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 14.5,
            "outdoor_labor_pct": 44.0,
            "tin_roof_pct": 42.0,
            "tree_canopy_pct": 11.0,
            "hospital_beds_per_k": 2.8
          },
          "vulnerability_score": 62.4,
          "vulnerability_tier": "HIGH",
          "vulnerability_details": {
            "score": 62.4,
            "tier": "HIGH",
            "tier_label_en": "High Vulnerability",
            "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
            "tier_label_hi": "उच्च संवेदनशीलता",
            "sensitivity_score": 60.5,
            "exposure_score": 66.3,
            "adaptive_deficit_score": 58.7
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.4 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 42,
              "wind_ventilation_pct": 14,
              "urban_heat_island_pct": 24,
              "canopy_buffer_pct": 20
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.608,
                12.858
              ],
              [
                77.642,
                12.858
              ],
              [
                77.645,
                12.892
              ],
              [
                77.61,
                12.892
              ],
              [
                77.608,
                12.858
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-18",
        "properties": {
          "ward_id": "BBMP-18",
          "name": "Radhakrishna Temple & Sanjaynagar BEL Road",
          "name_kn": "ರಾಧಾಕೃಷ್ಣ ದೇವಸ್ಥಾನ ಮತ್ತು ಸಂಜಯನಗರ ಬಿಇಎಲ್ ರಸ್ತೆ",
          "name_hi": "राधाकृष्ण मंदिर व संजयनगर बीईएल रोड",
          "zone": "North Zone",
          "population": 182000,
          "elderly_pct": 20.0,
          "outdoor_labor_pct": 29.0,
          "tin_roof_pct": 20.0,
          "tree_canopy_pct": 22.0,
          "hospital_beds_per_k": 4.8,
          "baseline_daily_admissions": 26,
          "uhi_temp_delta": 1.1,
          "wind_attenuation": 0.8,
          "center": [
            13.035,
            77.575
          ],
          "microclimate": {
            "temperature_c": 21.0,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.62,
            "wet_bulb_c": 19.87,
            "heat_index_c": 21.52,
            "wbgt_c": 20.21,
            "htsi_score": 20.6,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.0,
            "variance_c": 0.4,
            "accuracy_score_pct": 99.5,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 20.0,
            "outdoor_labor_pct": 29.0,
            "tin_roof_pct": 20.0,
            "tree_canopy_pct": 22.0,
            "hospital_beds_per_k": 4.8
          },
          "vulnerability_score": 41.5,
          "vulnerability_tier": "MODERATE",
          "vulnerability_details": {
            "score": 41.5,
            "tier": "MODERATE",
            "tier_label_en": "Moderate Vulnerability",
            "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
            "tier_label_hi": "मध्यम संवेदनशीलता",
            "sensitivity_score": 56.7,
            "exposure_score": 39.1,
            "adaptive_deficit_score": 23.9
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.6 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 52,
              "wind_ventilation_pct": 14,
              "urban_heat_island_pct": 24,
              "canopy_buffer_pct": 10
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.56,
                13.02
              ],
              [
                77.59,
                13.02
              ],
              [
                77.592,
                13.05
              ],
              [
                77.562,
                13.05
              ],
              [
                77.56,
                13.02
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-160",
        "properties": {
          "ward_id": "BBMP-160",
          "name": "Rajarajeshwari Nagar & Ideal Homes",
          "name_kn": "ರಾಜರಾಜೇಶ್ವರಿ ನಗರ ಮತ್ತು ಐಡಿಯಲ್ ಹೋಮ್ಸ್",
          "name_hi": "राजराजेश्वरी नगर और आइडियल होम्स",
          "zone": "Rajarajeshwari Nagar Zone",
          "population": 142000,
          "elderly_pct": 16.5,
          "outdoor_labor_pct": 32.0,
          "tin_roof_pct": 24.0,
          "tree_canopy_pct": 22.5,
          "hospital_beds_per_k": 2.8,
          "baseline_daily_admissions": 22,
          "uhi_temp_delta": 0.8,
          "wind_attenuation": 0.75,
          "center": [
            12.926,
            77.521
          ],
          "microclimate": {
            "temperature_c": 20.9,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.52,
            "wet_bulb_c": 19.76,
            "heat_index_c": 21.4,
            "wbgt_c": 20.1,
            "htsi_score": 20.2,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 20.9,
            "variance_c": 0.3,
            "accuracy_score_pct": 99.6,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 16.5,
            "outdoor_labor_pct": 32.0,
            "tin_roof_pct": 24.0,
            "tree_canopy_pct": 22.5,
            "hospital_beds_per_k": 2.8
          },
          "vulnerability_score": 44.3,
          "vulnerability_tier": "MODERATE",
          "vulnerability_details": {
            "score": 44.3,
            "tier": "MODERATE",
            "tier_label_en": "Moderate Vulnerability",
            "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
            "tier_label_hi": "मध्यम संवेदनशीलता",
            "sensitivity_score": 53.6,
            "exposure_score": 39.6,
            "adaptive_deficit_score": 39.0
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.5 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 52,
              "wind_ventilation_pct": 15,
              "urban_heat_island_pct": 22,
              "canopy_buffer_pct": 11
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.508,
                12.915
              ],
              [
                77.535,
                12.915
              ],
              [
                77.538,
                12.938
              ],
              [
                77.51,
                12.938
              ],
              [
                77.508,
                12.915
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-154",
        "properties": {
          "ward_id": "BBMP-154",
          "name": "Basavanagudi & Gandhi Bazaar Heritage Cultural Hub",
          "name_kn": "ಬಸವನಗುಡಿ ಮತ್ತು ಗಾಂಧಿ ಬಜಾರ್ ಸಾಂಸ್ಕೃತಿಕ ಕೇಂದ್ರ",
          "name_hi": "बसवनगुडी और गांधी बाजार सांस्कृतिक केंद्र",
          "zone": "South Zone",
          "population": 118000,
          "elderly_pct": 21.4,
          "outdoor_labor_pct": 34.0,
          "tin_roof_pct": 18.0,
          "tree_canopy_pct": 26.8,
          "hospital_beds_per_k": 3.5,
          "baseline_daily_admissions": 28,
          "uhi_temp_delta": 0.6,
          "wind_attenuation": 0.65,
          "center": [
            12.942,
            77.573
          ],
          "microclimate": {
            "temperature_c": 20.8,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.32,
            "wet_bulb_c": 19.69,
            "heat_index_c": 21.32,
            "wbgt_c": 20.03,
            "htsi_score": 19.9,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 20.8,
            "variance_c": 0.2,
            "accuracy_score_pct": 99.8,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 21.4,
            "outdoor_labor_pct": 34.0,
            "tin_roof_pct": 18.0,
            "tree_canopy_pct": 26.8,
            "hospital_beds_per_k": 3.5
          },
          "vulnerability_score": 41.8,
          "vulnerability_tier": "MODERATE",
          "vulnerability_details": {
            "score": 41.8,
            "tier": "MODERATE",
            "tier_label_en": "Moderate Vulnerability",
            "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
            "tier_label_hi": "मध्यम संवेदनशीलता",
            "sensitivity_score": 63.2,
            "exposure_score": 33.0,
            "adaptive_deficit_score": 26.1
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as 27% tree canopy shading roadways and releasing moisture.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: 27% ಮರಗಳ ಹೊದಿಕೆಯು ನೆರಳು ಮತ್ತು ತಂಪನ್ನು ನೀಡುತ್ತದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: 27% वृक्ष आवरण सड़कों पर छाया और ठंडक प्रदान करता है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 54,
              "wind_ventilation_pct": 19,
              "urban_heat_island_pct": 22,
              "canopy_buffer_pct": 5
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.562,
                12.932
              ],
              [
                77.585,
                12.932
              ],
              [
                77.588,
                12.952
              ],
              [
                77.564,
                12.952
              ],
              [
                77.562,
                12.932
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-117",
        "properties": {
          "ward_id": "BBMP-117",
          "name": "Shanthi Nagar & Richmond Town Cantonment",
          "name_kn": "ಶಾಂತಿ ನಗರ ಮತ್ತು ರಿಚ್ಮಂಡ್ ಟೌನ್ ಕಂಟೋನ್ಮೆಂಟ್",
          "name_hi": "शांति नगर और रिचमंड टाउन छावनी",
          "zone": "East / Central Zone",
          "population": 135000,
          "elderly_pct": 15.8,
          "outdoor_labor_pct": 42.0,
          "tin_roof_pct": 28.0,
          "tree_canopy_pct": 14.5,
          "hospital_beds_per_k": 4.2,
          "baseline_daily_admissions": 30,
          "uhi_temp_delta": 2.1,
          "wind_attenuation": 0.5,
          "center": [
            12.959,
            77.601
          ],
          "microclimate": {
            "temperature_c": 21.3,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.01,
            "wet_bulb_c": 20.21,
            "heat_index_c": 21.9,
            "wbgt_c": 20.55,
            "htsi_score": 22.1,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.3,
            "variance_c": 0.7,
            "accuracy_score_pct": 99.2,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 15.8,
            "outdoor_labor_pct": 42.0,
            "tin_roof_pct": 28.0,
            "tree_canopy_pct": 14.5,
            "hospital_beds_per_k": 4.2
          },
          "vulnerability_score": 53.5,
          "vulnerability_tier": "MODERATE",
          "vulnerability_details": {
            "score": 53.5,
            "tier": "MODERATE",
            "tier_label_en": "Moderate Vulnerability",
            "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
            "tier_label_hi": "मध्यम संवेदनशीलता",
            "sensitivity_score": 60.9,
            "exposure_score": 54.4,
            "adaptive_deficit_score": 41.5
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as low wind ventilation (1.0 m/s) trapping hot air in street canyons.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಕಡಿಮೆ ಗಾಳಿಯು (1.0 m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: धीमी हवा (1.0 m/s) संकरी गलियों में गर्मी को रोक रही है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 42,
              "wind_ventilation_pct": 19,
              "urban_heat_island_pct": 23,
              "canopy_buffer_pct": 16
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.59,
                12.95
              ],
              [
                77.614,
                12.95
              ],
              [
                77.616,
                12.97
              ],
              [
                77.592,
                12.97
              ],
              [
                77.59,
                12.95
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-78",
        "properties": {
          "ward_id": "BBMP-78",
          "name": "Frazer Town & Pulakeshinagar Victorian Belt",
          "name_kn": "ಫ್ರೇಜರ್ ಟೌನ್ ಮತ್ತು ಪುಲಕೇಶಿನಗರ",
          "name_hi": "फ्रेजर टाउन और पुलकेशीनगर",
          "zone": "East Zone",
          "population": 125000,
          "elderly_pct": 17.2,
          "outdoor_labor_pct": 39.5,
          "tin_roof_pct": 31.0,
          "tree_canopy_pct": 16.0,
          "hospital_beds_per_k": 3.1,
          "baseline_daily_admissions": 26,
          "uhi_temp_delta": 1.8,
          "wind_attenuation": 0.55,
          "center": [
            12.998,
            77.618
          ],
          "microclimate": {
            "temperature_c": 21.2,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.12,
            "wet_bulb_c": 20.11,
            "heat_index_c": 21.78,
            "wbgt_c": 20.45,
            "htsi_score": 21.6,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.2,
            "variance_c": 0.6,
            "accuracy_score_pct": 99.3,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 17.2,
            "outdoor_labor_pct": 39.5,
            "tin_roof_pct": 31.0,
            "tree_canopy_pct": 16.0,
            "hospital_beds_per_k": 3.1
          },
          "vulnerability_score": 54.9,
          "vulnerability_tier": "MODERATE",
          "vulnerability_details": {
            "score": 54.9,
            "tier": "MODERATE",
            "tier_label_en": "Moderate Vulnerability",
            "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
            "tier_label_hi": "मध्यम संवेदनशीलता",
            "sensitivity_score": 61.1,
            "exposure_score": 54.1,
            "adaptive_deficit_score": 47.8
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as low wind ventilation (1.1 m/s) trapping hot air in street canyons.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಕಡಿಮೆ ಗಾಳಿಯು (1.1 m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: धीमी हवा (1.1 m/s) संकरी गलियों में गर्मी को रोक रही है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 44,
              "wind_ventilation_pct": 18,
              "urban_heat_island_pct": 23,
              "canopy_buffer_pct": 15
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.605,
                12.988
              ],
              [
                77.63,
                12.988
              ],
              [
                77.632,
                13.01
              ],
              [
                77.608,
                13.01
              ],
              [
                77.605,
                12.988
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-84",
        "properties": {
          "ward_id": "BBMP-84",
          "name": "Varthur & Sarjapur Road Agro-Tech Basin",
          "name_kn": "ವರ್ತೂರು ಮತ್ತು ಸರ್ಜಾಪುರ ರಸ್ತೆ ಅಗ್ರೋ-ಟೆಕ್ ಕಾರಿಡಾರ್",
          "name_hi": "वरथूर और सरजापुर रोड एग्रो-टेक कॉरिडोर",
          "zone": "Mahadevapura Zone",
          "population": 168000,
          "elderly_pct": 10.2,
          "outdoor_labor_pct": 54.0,
          "tin_roof_pct": 46.0,
          "tree_canopy_pct": 8.5,
          "hospital_beds_per_k": 1.5,
          "baseline_daily_admissions": 32,
          "uhi_temp_delta": 2.7,
          "wind_attenuation": 0.7,
          "center": [
            12.938,
            77.742
          ],
          "microclimate": {
            "temperature_c": 21.5,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.42,
            "wet_bulb_c": 20.42,
            "heat_index_c": 22.13,
            "wbgt_c": 20.76,
            "htsi_score": 23.0,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.5,
            "variance_c": 0.9,
            "accuracy_score_pct": 98.9,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 10.2,
            "outdoor_labor_pct": 54.0,
            "tin_roof_pct": 46.0,
            "tree_canopy_pct": 8.5,
            "hospital_beds_per_k": 1.5
          },
          "vulnerability_score": 69.7,
          "vulnerability_tier": "HIGH",
          "vulnerability_details": {
            "score": 69.7,
            "tier": "HIGH",
            "tier_label_en": "High Vulnerability",
            "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
            "tier_label_hi": "उच्च संवेदनशीलता",
            "sensitivity_score": 62.1,
            "exposure_score": 73.9,
            "adaptive_deficit_score": 73.4
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.4 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 40,
              "wind_ventilation_pct": 13,
              "urban_heat_island_pct": 25,
              "canopy_buffer_pct": 22
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.725,
                12.924
              ],
              [
                77.76,
                12.924
              ],
              [
                77.762,
                12.952
              ],
              [
                77.728,
                12.952
              ],
              [
                77.725,
                12.924
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-27",
        "properties": {
          "ward_id": "BBMP-27",
          "name": "Banaswadi & HRBR Layout / Kalyan Nagar",
          "name_kn": "ಬಾಣಸವಾಡಿ ಮತ್ತು ಎಚ್‌ಆರ್‌ಬಿಆರ್ ಲೇಔಟ್ ಕಲ್ಯಾಣ ನಗರ",
          "name_hi": "बाणसवाड़ी और एचआरबीआर लेआउट कल्याण नगर",
          "zone": "East Zone",
          "population": 155000,
          "elderly_pct": 14.8,
          "outdoor_labor_pct": 36.5,
          "tin_roof_pct": 22.0,
          "tree_canopy_pct": 18.0,
          "hospital_beds_per_k": 2.4,
          "baseline_daily_admissions": 24,
          "uhi_temp_delta": 1.5,
          "wind_attenuation": 0.6,
          "center": [
            13.012,
            77.651
          ],
          "microclimate": {
            "temperature_c": 21.1,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.22,
            "wet_bulb_c": 20.0,
            "heat_index_c": 21.67,
            "wbgt_c": 20.34,
            "htsi_score": 21.2,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.1,
            "variance_c": 0.5,
            "accuracy_score_pct": 99.4,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 14.8,
            "outdoor_labor_pct": 36.5,
            "tin_roof_pct": 22.0,
            "tree_canopy_pct": 18.0,
            "hospital_beds_per_k": 2.4
          },
          "vulnerability_score": 49.3,
          "vulnerability_tier": "MODERATE",
          "vulnerability_details": {
            "score": 49.3,
            "tier": "MODERATE",
            "tier_label_en": "Moderate Vulnerability",
            "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
            "tier_label_hi": "मध्यम संवेदनशीलता",
            "sensitivity_score": 54.7,
            "exposure_score": 44.3,
            "adaptive_deficit_score": 49.9
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.2 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 46,
              "wind_ventilation_pct": 18,
              "urban_heat_island_pct": 23,
              "canopy_buffer_pct": 13
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.638,
                13.0
              ],
              [
                77.665,
                13.0
              ],
              [
                77.668,
                13.025
              ],
              [
                77.64,
                13.025
              ],
              [
                77.638,
                13.0
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-9",
        "properties": {
          "ward_id": "BBMP-9",
          "name": "Vidyaranyapura & Doddaballapur State Highway",
          "name_kn": "ವಿದ್ಯಾರಣ್ಯಪುರ ಮತ್ತು ದೊಡ್ಡಬಳ್ಳಾಪುರ ಹೆದ್ದಾರಿ",
          "name_hi": "विद्यारण्यपुरा और डोड्डाबल्लापुर राजमार्ग",
          "zone": "Yelahanka Zone",
          "population": 130000,
          "elderly_pct": 16.0,
          "outdoor_labor_pct": 31.0,
          "tin_roof_pct": 20.0,
          "tree_canopy_pct": 21.0,
          "hospital_beds_per_k": 2.0,
          "baseline_daily_admissions": 19,
          "uhi_temp_delta": 0.9,
          "wind_attenuation": 0.75,
          "center": [
            13.082,
            77.558
          ],
          "microclimate": {
            "temperature_c": 20.9,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.52,
            "wet_bulb_c": 19.8,
            "heat_index_c": 21.44,
            "wbgt_c": 20.14,
            "htsi_score": 20.3,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 20.9,
            "variance_c": 0.3,
            "accuracy_score_pct": 99.6,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 16.0,
            "outdoor_labor_pct": 31.0,
            "tin_roof_pct": 20.0,
            "tree_canopy_pct": 21.0,
            "hospital_beds_per_k": 2.0
          },
          "vulnerability_score": 45.1,
          "vulnerability_tier": "MODERATE",
          "vulnerability_details": {
            "score": 45.1,
            "tier": "MODERATE",
            "tier_label_en": "Moderate Vulnerability",
            "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
            "tier_label_hi": "मध्यम संवेदनशीलता",
            "sensitivity_score": 51.9,
            "exposure_score": 37.3,
            "adaptive_deficit_score": 48.0
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.5 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 51,
              "wind_ventilation_pct": 15,
              "urban_heat_island_pct": 22,
              "canopy_buffer_pct": 12
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.545,
                13.07
              ],
              [
                77.572,
                13.07
              ],
              [
                77.575,
                13.095
              ],
              [
                77.548,
                13.095
              ],
              [
                77.545,
                13.07
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-158",
        "properties": {
          "ward_id": "BBMP-158",
          "name": "Kengeri Satellite Town & Mysore Road Transit Hub",
          "name_kn": "ಕೆಂಗೇರಿ ಉಪನಗರ ಮತ್ತು ಮೈಸೂರು ರಸ್ತೆ ಸಾರಿಗೆ ಕೇಂದ್ರ",
          "name_hi": "केंगेरी उपनगर और मैसूर रोड ट्रांजिट हब",
          "zone": "Rajarajeshwari Nagar Zone",
          "population": 162000,
          "elderly_pct": 14.2,
          "outdoor_labor_pct": 49.0,
          "tin_roof_pct": 41.0,
          "tree_canopy_pct": 12.0,
          "hospital_beds_per_k": 2.2,
          "baseline_daily_admissions": 34,
          "uhi_temp_delta": 2.4,
          "wind_attenuation": 0.65,
          "center": [
            12.912,
            77.485
          ],
          "microclimate": {
            "temperature_c": 21.4,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.32,
            "wet_bulb_c": 20.32,
            "heat_index_c": 22.02,
            "wbgt_c": 20.66,
            "htsi_score": 22.5,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.4,
            "variance_c": 0.8,
            "accuracy_score_pct": 99.0,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 14.2,
            "outdoor_labor_pct": 49.0,
            "tin_roof_pct": 41.0,
            "tree_canopy_pct": 12.0,
            "hospital_beds_per_k": 2.2
          },
          "vulnerability_score": 64.9,
          "vulnerability_tier": "HIGH",
          "vulnerability_details": {
            "score": 64.9,
            "tier": "HIGH",
            "tier_label_en": "High Vulnerability",
            "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
            "tier_label_hi": "उच्च संवेदनशीलता",
            "sensitivity_score": 64.3,
            "exposure_score": 67.3,
            "adaptive_deficit_score": 61.8
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.3 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 42,
              "wind_ventilation_pct": 15,
              "urban_heat_island_pct": 25,
              "canopy_buffer_pct": 18
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.468,
                12.898
              ],
              [
                77.502,
                12.898
              ],
              [
                77.505,
                12.925
              ],
              [
                77.472,
                12.925
              ],
              [
                77.468,
                12.898
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-142",
        "properties": {
          "ward_id": "BBMP-142",
          "name": "Chamarajpet & Cottonpet Traditional Textile Hub",
          "name_kn": "ಚಾಮರಾಜಪೇಟೆ ಮತ್ತು ಕಾಟನ್‌ಪೇಟೆ ಸಾಂಪ್ರದಾಯಿಕ ಮಾರುಕಟ್ಟೆ",
          "name_hi": "चामराजपेट और कॉटनपेट पारंपरिक कपड़ा बाजार",
          "zone": "South / West Zone",
          "population": 172000,
          "elderly_pct": 19.5,
          "outdoor_labor_pct": 52.0,
          "tin_roof_pct": 55.0,
          "tree_canopy_pct": 6.2,
          "hospital_beds_per_k": 3.2,
          "baseline_daily_admissions": 42,
          "uhi_temp_delta": 3.1,
          "wind_attenuation": 0.35,
          "center": [
            12.958,
            77.561
          ],
          "microclimate": {
            "temperature_c": 21.7,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 0.71,
            "wet_bulb_c": 20.56,
            "heat_index_c": 22.29,
            "wbgt_c": 20.9,
            "htsi_score": 23.6,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.7,
            "variance_c": 1.1,
            "accuracy_score_pct": 98.7,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 19.5,
            "outdoor_labor_pct": 52.0,
            "tin_roof_pct": 55.0,
            "tree_canopy_pct": 6.2,
            "hospital_beds_per_k": 3.2
          },
          "vulnerability_score": 76.2,
          "vulnerability_tier": "CRITICAL",
          "vulnerability_details": {
            "score": 76.2,
            "tier": "CRITICAL",
            "tier_label_en": "Critical Vulnerability",
            "tier_label_kn": "ಅತ್ಯಂತ ಅಪಾಯಕಾರಿ ದುರ್ಬಲತೆ",
            "tier_label_hi": "अति संवेदनशील क्षेत्र",
            "sensitivity_score": 75.3,
            "exposure_score": 84.6,
            "adaptive_deficit_score": 63.8
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as low wind ventilation (0.7 m/s) trapping hot air in street canyons, while 55% tin roofs radiating secondary infrared heat into informal homes.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಕಡಿಮೆ ಗಾಳಿಯು (0.7 m/s) ಶಾಖವನ್ನು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು 55% ತವರದ ಸೂರುಗಳು ಹೆಚ್ಚಿನ ಶಾಖವನ್ನು ಹೊರಸೂಸುತ್ತವೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: धीमी हवा (0.7 m/s) संकरी गलियों में गर्मी को रोक रही है, तथा 55% टिन की छतें बस्तियों में अतिरिक्त गर्मी फैलाती हैं तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 36,
              "wind_ventilation_pct": 19,
              "urban_heat_island_pct": 24,
              "canopy_buffer_pct": 21
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.55,
                12.948
              ],
              [
                77.572,
                12.948
              ],
              [
                77.575,
                12.968
              ],
              [
                77.552,
                12.968
              ],
              [
                77.55,
                12.948
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-8",
        "properties": {
          "ward_id": "BBMP-8",
          "name": "Sahakar Nagar & Kodigehalli Residential Hub",
          "name_kn": "ಸಹಕಾರ ನಗರ ಮತ್ತು ಕೋಡಿಗೇಹಳ್ಳಿ",
          "name_hi": "सहकार नगर और कोडिगेहल्ली",
          "zone": "Byatarayanapura / North Zone",
          "population": 128000,
          "elderly_pct": 15.2,
          "outdoor_labor_pct": 33.0,
          "tin_roof_pct": 23.0,
          "tree_canopy_pct": 17.5,
          "hospital_beds_per_k": 2.5,
          "baseline_daily_admissions": 20,
          "uhi_temp_delta": 1.2,
          "wind_attenuation": 0.7,
          "center": [
            13.061,
            77.581
          ],
          "microclimate": {
            "temperature_c": 21.0,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.42,
            "wet_bulb_c": 19.9,
            "heat_index_c": 21.55,
            "wbgt_c": 20.24,
            "htsi_score": 20.7,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.0,
            "variance_c": 0.4,
            "accuracy_score_pct": 99.5,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 15.2,
            "outdoor_labor_pct": 33.0,
            "tin_roof_pct": 23.0,
            "tree_canopy_pct": 17.5,
            "hospital_beds_per_k": 2.5
          },
          "vulnerability_score": 47.8,
          "vulnerability_tier": "MODERATE",
          "vulnerability_details": {
            "score": 47.8,
            "tier": "MODERATE",
            "tier_label_en": "Moderate Vulnerability",
            "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
            "tier_label_hi": "मध्यम संवेदनशीलता",
            "sensitivity_score": 52.4,
            "exposure_score": 42.4,
            "adaptive_deficit_score": 50.0
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.4 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 47,
              "wind_ventilation_pct": 15,
              "urban_heat_island_pct": 22,
              "canopy_buffer_pct": 16
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.568,
                13.048
              ],
              [
                77.595,
                13.048
              ],
              [
                77.598,
                13.074
              ],
              [
                77.571,
                13.074
              ],
              [
                77.568,
                13.048
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-83",
        "properties": {
          "ward_id": "BBMP-83",
          "name": "Kadugodi & Hope Farm Tech Gateway",
          "name_kn": "ಕಾಡುಗೋಡಿ ಮತ್ತು ಹೋಪ್ ಫಾರ್ಮ್ ಟೆಕ್ ಗೇಟ್‌ವೇ",
          "name_hi": "काडुगोडी और होप फार्म टेक गेटवे",
          "zone": "Mahadevapura Zone",
          "population": 145000,
          "elderly_pct": 11.0,
          "outdoor_labor_pct": 51.0,
          "tin_roof_pct": 44.0,
          "tree_canopy_pct": 10.5,
          "hospital_beds_per_k": 1.8,
          "baseline_daily_admissions": 29,
          "uhi_temp_delta": 2.5,
          "wind_attenuation": 0.65,
          "center": [
            12.998,
            77.761
          ],
          "microclimate": {
            "temperature_c": 21.5,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.32,
            "wet_bulb_c": 20.35,
            "heat_index_c": 22.05,
            "wbgt_c": 20.69,
            "htsi_score": 22.7,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.5,
            "variance_c": 0.9,
            "accuracy_score_pct": 98.9,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 11.0,
            "outdoor_labor_pct": 51.0,
            "tin_roof_pct": 44.0,
            "tree_canopy_pct": 10.5,
            "hospital_beds_per_k": 1.8
          },
          "vulnerability_score": 66.4,
          "vulnerability_tier": "HIGH",
          "vulnerability_details": {
            "score": 66.4,
            "tier": "HIGH",
            "tier_label_en": "High Vulnerability",
            "tier_label_kn": "ಹೆಚ್ಚಿನ ದುರ್ಬಲತೆ",
            "tier_label_hi": "उच्च संवेदनशीलता",
            "sensitivity_score": 60.8,
            "exposure_score": 70.6,
            "adaptive_deficit_score": 67.6
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.3 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 41,
              "wind_ventilation_pct": 14,
              "urban_heat_island_pct": 25,
              "canopy_buffer_pct": 20
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.745,
                12.985
              ],
              [
                77.778,
                12.985
              ],
              [
                77.78,
                13.012
              ],
              [
                77.748,
                13.012
              ],
              [
                77.745,
                12.985
              ]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "id": "BBMP-131",
        "properties": {
          "ward_id": "BBMP-131",
          "name": "Basaveshwaranagar & Shankar Matt Tree-Covered Ridge",
          "name_kn": "ಬಸವೇಶ್ವರನಗರ ಮತ್ತು ಶಂಕರ ಮಠ",
          "name_hi": "बसवेश्वरनगर और शंकर मठ",
          "zone": "West Zone",
          "population": 138000,
          "elderly_pct": 18.0,
          "outdoor_labor_pct": 32.5,
          "tin_roof_pct": 21.0,
          "tree_canopy_pct": 20.0,
          "hospital_beds_per_k": 2.6,
          "baseline_daily_admissions": 21,
          "uhi_temp_delta": 1.0,
          "wind_attenuation": 0.7,
          "center": [
            12.988,
            77.537
          ],
          "microclimate": {
            "temperature_c": 21.0,
            "relative_humidity_pct": 91.0,
            "wind_speed_m_s": 1.42,
            "wet_bulb_c": 19.83,
            "heat_index_c": 21.48,
            "wbgt_c": 20.17,
            "htsi_score": 20.5,
            "precipitation_mm": 0.0
          },
          "ground_truth_verification": {
            "source": "Google Weather & IMD Bengaluru AWS Network",
            "station": "Bengaluru City Observatory (Palace Road / Majestic)",
            "observed_benchmark_temp_c": 20.6,
            "ward_temp_c": 21.0,
            "variance_c": 0.4,
            "accuracy_score_pct": 99.5,
            "status": "VERIFIED_ACCURATE"
          },
          "vulnerability": {
            "elderly_pct": 18.0,
            "outdoor_labor_pct": 32.5,
            "tin_roof_pct": 21.0,
            "tree_canopy_pct": 20.0,
            "hospital_beds_per_k": 2.6
          },
          "vulnerability_score": 46.6,
          "vulnerability_tier": "MODERATE",
          "vulnerability_details": {
            "score": 46.6,
            "tier": "MODERATE",
            "tier_label_en": "Moderate Vulnerability",
            "tier_label_kn": "ಮಧ್ಯಮ ದುರ್ಬಲತೆ",
            "tier_label_hi": "मध्यम संवेदनशीलता",
            "sensitivity_score": 56.4,
            "exposure_score": 39.0,
            "adaptive_deficit_score": 44.9
          },
          "causal_attribution": {
            "driver_category": "MICROCLIMATE_COOLING_ZONE",
            "summary_en": "Cooling Buffer: Favorable microclimate is maintained as ambient solar irradiance (0 W/m²) remains within seasonal norms, while urban ventilation is operating at 1.4 m/s.",
            "summary_kn": "ತಂಪಾದ ವಲಯ: ಸಾಮಾನ್ಯ ಸೂರ್ಯನ ಬಿಸಿಲು ಮತ್ತು ಗಾಳಿಯ ಸಂಚಾರ ಸಮತೋಲನದಲ್ಲಿದೆ.",
            "summary_hi": "शीतल माइक्रोक्लाइमेट: मौसमी सौर विकिरण और सामान्य वायु प्रवाह बना हुआ है तापमान को नियंत्रित रखते हैं।",
            "drivers": {
              "solar_radiation_pct": 0,
              "moisture_humidity_pct": 49,
              "wind_ventilation_pct": 16,
              "urban_heat_island_pct": 22,
              "canopy_buffer_pct": 13
            }
          },
          "is_hotspot": false,
          "health_risk": {
            "expected_surge_pct": 0.0,
            "confidence_interval_90": {
              "lower_bound_pct": 0.0,
              "expected_pct": 0.0,
              "upper_bound_pct": 2.5
            },
            "additional_emergency_beds_needed": 0,
            "alert_tier": "GREEN",
            "tier_label_en": "NORMAL / LOW HEALTH RISK",
            "tier_label_hi": "सामान्य / न्यूनतम स्वास्थ्य जोखिम",
            "xai_attribution": {
              "direct_thermal_stress_pct": 0.0,
              "vulnerable_demographics_pct": 100.0,
              "lagged_cumulative_dose_pct": 0.0,
              "nocturnal_heat_entrapment_pct": 0.0
            }
          },
          "effective_alert_tier": "GREEN",
          "work_rest_safety": {
            "status": "NORMAL_OPERATIONS",
            "work_mins": 60,
            "rest_mins": 0,
            "hourly_water_liters": 0.5,
            "advisory_en": "Continuous outdoor work permitted. Drink 500ml water per hour.",
            "advisory_hi": "खुले में सामान्य काम जारी रखा जा सकता है। प्रति घंटे आधा लीटर पानी पिएं।"
          },
          "anomaly_alert": {
            "has_anomaly": false,
            "anomalies": []
          }
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [
                77.524,
                12.976
              ],
              [
                77.55,
                12.976
              ],
              [
                77.552,
                13.0
              ],
              [
                77.526,
                13.0
              ],
              [
                77.524,
                12.976
              ]
            ]
          ]
        }
      }
    ]
  }
};

export const fallbackWeatherData = {
  "city": "Bengaluru Metropolitan Region",
  "authority": "Metropolitan Heat Resilience Network",
  "mode": "LIVE_OPEN_METEO",
  "ambient_temp_c": 20.6,
  "relative_humidity_pct": 91.0,
  "wind_speed_m_s": 2.03,
  "solar_radiation_w_m2": 0.0,
  "precipitation_mm": 0.0,
  "prev_hour_temp_c": 20.0,
  "prev_hour_rh_pct": 88.0,
  "forecast_5_days": [
    {
      "day": "Today",
      "temp_max": 29.9,
      "temp_min": 19.2,
      "wbgt_max": 25.62,
      "risk_tier": "GREEN",
      "hospital_spike": 0.0
    },
    {
      "day": "Tomorrow",
      "temp_max": 30.7,
      "temp_min": 20.3,
      "wbgt_max": 26.34,
      "risk_tier": "GREEN",
      "hospital_spike": 0.0
    },
    {
      "day": "Day +2",
      "temp_max": 30.1,
      "temp_min": 20.4,
      "wbgt_max": 25.8,
      "risk_tier": "GREEN",
      "hospital_spike": 0.0
    },
    {
      "day": "Day +3",
      "temp_max": 28.5,
      "temp_min": 19.2,
      "wbgt_max": 24.36,
      "risk_tier": "GREEN",
      "hospital_spike": 0.0
    },
    {
      "day": "Day +4",
      "temp_max": 29.0,
      "temp_min": 19.3,
      "wbgt_max": 24.81,
      "risk_tier": "GREEN",
      "hospital_spike": 0.0
    }
  ],
  "diurnal_forecast_24h": [
    {
      "hour": 0,
      "hour_label": "12:00 AM",
      "time_iso": "00:00",
      "temperature_c": 21.1,
      "wbgt_c": 19.96,
      "relative_humidity_pct": 87.0,
      "wind_speed_m_s": 2.0,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 19.7,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 1,
      "hour_label": "1:00 AM",
      "time_iso": "01:00",
      "temperature_c": 20.6,
      "wbgt_c": 19.82,
      "relative_humidity_pct": 91.0,
      "wind_speed_m_s": 2.03,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 19.0,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 2,
      "hour_label": "2:00 AM",
      "time_iso": "02:00",
      "temperature_c": 20.2,
      "wbgt_c": 19.51,
      "relative_humidity_pct": 92.0,
      "wind_speed_m_s": 1.97,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 17.6,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 3,
      "hour_label": "3:00 AM",
      "time_iso": "03:00",
      "temperature_c": 19.8,
      "wbgt_c": 19.29,
      "relative_humidity_pct": 94.0,
      "wind_speed_m_s": 1.89,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 16.6,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 4,
      "hour_label": "4:00 AM",
      "time_iso": "04:00",
      "temperature_c": 19.4,
      "wbgt_c": 18.97,
      "relative_humidity_pct": 95.0,
      "wind_speed_m_s": 1.72,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 15.2,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 5,
      "hour_label": "5:00 AM",
      "time_iso": "05:00",
      "temperature_c": 19.3,
      "wbgt_c": 18.87,
      "relative_humidity_pct": 95.0,
      "wind_speed_m_s": 1.67,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 14.8,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 6,
      "hour_label": "6:00 AM",
      "time_iso": "06:00",
      "temperature_c": 19.2,
      "wbgt_c": 18.8,
      "relative_humidity_pct": 95.0,
      "wind_speed_m_s": 1.42,
      "solar_radiation_w_m2": 15.9,
      "htsi_score": 14.4,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 7,
      "hour_label": "7:00 AM",
      "time_iso": "07:00",
      "temperature_c": 20.4,
      "wbgt_c": 20.21,
      "relative_humidity_pct": 90.0,
      "wind_speed_m_s": 1.44,
      "solar_radiation_w_m2": 364.4,
      "htsi_score": 19.4,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 8,
      "hour_label": "8:00 AM",
      "time_iso": "08:00",
      "temperature_c": 22.5,
      "wbgt_c": 21.88,
      "relative_humidity_pct": 81.0,
      "wind_speed_m_s": 1.64,
      "solar_radiation_w_m2": 617.4,
      "htsi_score": 26.1,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 9,
      "hour_label": "9:00 AM",
      "time_iso": "09:00",
      "temperature_c": 24.9,
      "wbgt_c": 23.19,
      "relative_humidity_pct": 68.0,
      "wind_speed_m_s": 1.67,
      "solar_radiation_w_m2": 763.3,
      "htsi_score": 31.8,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 10,
      "hour_label": "10:00 AM",
      "time_iso": "10:00",
      "temperature_c": 27.0,
      "wbgt_c": 24.25,
      "relative_humidity_pct": 58.0,
      "wind_speed_m_s": 1.64,
      "solar_radiation_w_m2": 831.2,
      "htsi_score": 37.2,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 11,
      "hour_label": "11:00 AM",
      "time_iso": "11:00",
      "temperature_c": 28.4,
      "wbgt_c": 24.58,
      "relative_humidity_pct": 49.0,
      "wind_speed_m_s": 1.47,
      "solar_radiation_w_m2": 838.0,
      "htsi_score": 38.6,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 12,
      "hour_label": "12:00 PM",
      "time_iso": "12:00",
      "temperature_c": 29.5,
      "wbgt_c": 24.71,
      "relative_humidity_pct": 42.0,
      "wind_speed_m_s": 1.58,
      "solar_radiation_w_m2": 880.0,
      "htsi_score": 39.2,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 13,
      "hour_label": "1:00 PM",
      "time_iso": "13:00",
      "temperature_c": 29.9,
      "wbgt_c": 24.69,
      "relative_humidity_pct": 40.0,
      "wind_speed_m_s": 1.56,
      "solar_radiation_w_m2": 813.9,
      "htsi_score": 39.3,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 14,
      "hour_label": "2:00 PM",
      "time_iso": "14:00",
      "temperature_c": 29.9,
      "wbgt_c": 24.45,
      "relative_humidity_pct": 40.0,
      "wind_speed_m_s": 1.67,
      "solar_radiation_w_m2": 702.9,
      "htsi_score": 38.7,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 15,
      "hour_label": "3:00 PM",
      "time_iso": "15:00",
      "temperature_c": 29.8,
      "wbgt_c": 24.37,
      "relative_humidity_pct": 40.0,
      "wind_speed_m_s": 1.58,
      "solar_radiation_w_m2": 685.8,
      "htsi_score": 38.4,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 16,
      "hour_label": "4:00 PM",
      "time_iso": "16:00",
      "temperature_c": 29.5,
      "wbgt_c": 24.15,
      "relative_humidity_pct": 41.0,
      "wind_speed_m_s": 1.61,
      "solar_radiation_w_m2": 643.1,
      "htsi_score": 37.6,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 17,
      "hour_label": "5:00 PM",
      "time_iso": "17:00",
      "temperature_c": 28.6,
      "wbgt_c": 23.46,
      "relative_humidity_pct": 44.0,
      "wind_speed_m_s": 1.42,
      "solar_radiation_w_m2": 457.9,
      "htsi_score": 35.2,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 18,
      "hour_label": "6:00 PM",
      "time_iso": "18:00",
      "temperature_c": 27.0,
      "wbgt_c": 23.07,
      "relative_humidity_pct": 58.0,
      "wind_speed_m_s": 0.81,
      "solar_radiation_w_m2": 120.1,
      "htsi_score": 34.5,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 19,
      "hour_label": "7:00 PM",
      "time_iso": "19:00",
      "temperature_c": 26.0,
      "wbgt_c": 22.29,
      "relative_humidity_pct": 62.0,
      "wind_speed_m_s": 1.28,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 30.8,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 20,
      "hour_label": "8:00 PM",
      "time_iso": "20:00",
      "temperature_c": 25.3,
      "wbgt_c": 21.84,
      "relative_humidity_pct": 64.0,
      "wind_speed_m_s": 1.33,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 28.7,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 21,
      "hour_label": "9:00 PM",
      "time_iso": "21:00",
      "temperature_c": 24.5,
      "wbgt_c": 21.39,
      "relative_humidity_pct": 67.0,
      "wind_speed_m_s": 1.14,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 26.6,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 22,
      "hour_label": "10:00 PM",
      "time_iso": "22:00",
      "temperature_c": 24.2,
      "wbgt_c": 21.2,
      "relative_humidity_pct": 68.0,
      "wind_speed_m_s": 0.78,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 25.8,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    },
    {
      "hour": 23,
      "hour_label": "11:00 PM",
      "time_iso": "23:00",
      "temperature_c": 23.8,
      "wbgt_c": 20.92,
      "relative_humidity_pct": 69.0,
      "wind_speed_m_s": 1.81,
      "solar_radiation_w_m2": 0.0,
      "htsi_score": 24.5,
      "risk_tier": "GREEN",
      "phase": "SAFE_ZONE"
    }
  ]
};

export const fallbackSheltersData = [
  {
    "id": "BBMP-IC-01",
    "ward_id": "BBMP-138",
    "name": "Majestic Bus Station BBMP Indira Canteen & Cooling Center",
    "name_kn": "ಮೆಜೆಸ್ಟಿಕ್ ಬಸ್ ನಿಲ್ದಾಣ ಬಿಬಿಎಂಪಿ ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್ ಮತ್ತು ಶೀತಲ ವಿಶ್ರಾಂತಿ ಕೇಂದ್ರ",
    "name_hi": "मैजेस्टिक बस स्टेशन बीबीएमपी इंदिरा कैंटीन व कूलिंग सेंटर",
    "type": "COOLING_SHELTER",
    "address": "Opposite KSRTC Platform 1, Majestic, Bengaluru",
    "lat": 12.9775,
    "lon": 77.572,
    "capacity_persons": 350,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": true,
    "operating_hours": "07:30 AM - 08:30 PM",
    "status": "OPEN"
  },
  {
    "id": "BWSSB-TK-01",
    "ward_id": "BBMP-138",
    "name": "BWSSB Cauvery Free Drinking Water Kiosk",
    "name_kn": "ಬಿಡಬ್ಲ್ಯೂಎಸ್‌ಎಸ್‌ಬಿ ಕಾವೇರಿ ಉಚಿತ ಕುಡಿಯುವ ನೀರಿನ ಕಿಯೋಸ್ಕ್",
    "name_hi": "बीडब्ल्यूएसएसबी कावेरी निःशुल्क पेयजल केंद्र",
    "type": "WATER_KIOSK",
    "address": "Shivajinagar Bus Depot Entrance",
    "lat": 12.984,
    "lon": 77.601,
    "capacity_liters": 12000,
    "chilled_water": true,
    "operating_hours": "24 Hours (Continuous)",
    "status": "ACTIVE"
  },
  {
    "id": "BBMP-IC-02",
    "ward_id": "BBMP-41",
    "name": "Peenya 1st Stage Labor Welfare & Heat Respite Hall",
    "name_kn": "ಪೀಣ್ಯ 1ನೇ ಹಂತದ ಕಾರ್ಮಿಕ ಕಲ್ಯಾಣ ಮತ್ತು ಉಷ್ಣ ಪರಿಹಾರ ಭವನ",
    "name_hi": "पीण्या प्रथम चरण श्रमिक कल्याण एवं शीतलन केंद्र",
    "type": "COOLING_SHELTER",
    "address": "4th Cross, Peenya Industrial Area Phase 1",
    "lat": 13.031,
    "lon": 77.514,
    "capacity_persons": 450,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": true,
    "operating_hours": "08:00 AM - 09:00 PM",
    "status": "OPEN"
  },
  {
    "id": "BWSSB-TK-02",
    "ward_id": "BBMP-41",
    "name": "BWSSB Industrial Zone Heavy Water Bowser",
    "name_kn": "ಬಿಡಬ್ಲ್ಯೂಎಸ್‌ಎಸ್‌ಬಿ ಕೈಗಾರಿಕಾ ವಲಯ ನೀರು ವಿತರಣಾ ವಾಹನ",
    "name_hi": "बीडब्ल्यूएसएसबी औद्योगिक जल वितरण टैंकर",
    "type": "WATER_KIOSK",
    "address": "Near Peenya Metro Station Junction",
    "lat": 13.0335,
    "lon": 77.525,
    "capacity_liters": 15000,
    "chilled_water": true,
    "operating_hours": "06:00 AM - 08:00 PM",
    "status": "ACTIVE"
  },
  {
    "id": "BBMP-IC-03",
    "ward_id": "BBMP-85",
    "name": "Whitefield Kadugodi AC Transit Respite Hub",
    "name_kn": "ವೈಟ್‌ಫೀಲ್ಡ್ ಕಾಡುಗೋಡಿ ಹವಾನಿಯಂತ್ರಿತ ವಿಶ್ರಾಂತಿ ಕೇಂದ್ರ",
    "name_hi": "व्हाइटफील्ड काडुगोडी वातानुकूलित राहत केंद्र",
    "type": "COOLING_SHELTER",
    "address": "Whitefield Kadugodi Metro Station Concourse",
    "lat": 12.996,
    "lon": 77.76,
    "capacity_persons": 300,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": false,
    "operating_hours": "06:00 AM - 10:30 PM",
    "status": "OPEN"
  },
  {
    "id": "BWSSB-TK-03",
    "ward_id": "BBMP-85",
    "name": "Mahadevapura Drought & Heat Emergency Water Post",
    "name_kn": "ಮಹದೇವಪುರ ಬರ ಮತ್ತು ಶಾಖ ತುರ್ತು ನೀರು ಸರಬರಾಜು ಪೋಸ್ಟ್",
    "name_hi": "महादेवपुरा आपातकालीन जल वितरण केंद्र",
    "type": "WATER_KIOSK",
    "address": "ITPL Main Road, Hoodi Circle",
    "lat": 12.991,
    "lon": 77.715,
    "capacity_liters": 10000,
    "chilled_water": true,
    "operating_hours": "07:00 AM - 07:00 PM",
    "status": "ACTIVE"
  },
  {
    "id": "BBMP-IC-04",
    "ward_id": "BBMP-151",
    "name": "Koramangala Gig-Rider Rest & Rehydration Center",
    "name_kn": "ಕೋರಮಂಗಲ ಡೆಲಿವರಿ ರೈಡರ್ ವಿಶ್ರಾಂತಿ ಮತ್ತು ಜಲಸಂಚಯನ ಕೇಂದ್ರ",
    "name_hi": "कोरमंगला गिग-वर्कर्स विश्राम व जल केंद्र",
    "type": "COOLING_SHELTER",
    "address": "80 Feet Road, 6th Block, Koramangala",
    "lat": 12.936,
    "lon": 77.621,
    "capacity_persons": 200,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": true,
    "operating_hours": "10:00 AM - 08:00 PM",
    "status": "OPEN"
  },
  {
    "id": "BBMP-IC-05",
    "ward_id": "BBMP-198",
    "name": "Electronic City Toll Plaza Worker Cooling Camp",
    "name_kn": "ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಸಿಟಿ ಟೋಲ್ ಪ್ಲಾಜಾ ಕಾರ್ಮಿಕ ತಂಪು ಶಿಬಿರ",
    "name_hi": "इलेक्ट्रॉनिक सिटी टोल प्लाजा श्रमिक राहत कैंप",
    "type": "COOLING_SHELTER",
    "address": "Hosur Road, Near Phase 1 Elevated Toll",
    "lat": 12.851,
    "lon": 77.658,
    "capacity_persons": 220,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": true,
    "operating_hours": "09:00 AM - 07:00 PM",
    "status": "OPEN"
  },
  {
    "id": "BBMP-IC-06",
    "ward_id": "BBMP-153",
    "name": "Jayanagar 4th Block Complex Indira Canteen & Cooling Oasis",
    "name_kn": "ಜಯನಗರ 4ನೇ ಬ್ಲಾಕ್ ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್ ಮತ್ತು ಶೀತಲ ಕೇಂದ್ರ",
    "name_hi": "जयनगर 4th ब्लॉक इंदिरा कैंटीन व कूलिंग ओएसिस",
    "type": "COOLING_SHELTER",
    "address": "Opposite BDA Complex, 4th Block Jayanagar",
    "lat": 12.926,
    "lon": 77.5925,
    "capacity_persons": 320,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": true,
    "operating_hours": "07:30 AM - 08:30 PM",
    "status": "OPEN"
  },
  {
    "id": "BWSSB-TK-06",
    "ward_id": "BBMP-153",
    "name": "BWSSB Ashoka Pillar Chilled Drinking Water Kiosk",
    "name_kn": "ಬಿಡಬ್ಲ್ಯೂಎಸ್‌ಎಸ್‌ಬಿ ಅಶೋಕ ಪಿಲ್ಲರ್ ಕುಡಿಯುವ ನೀರಿನ ಕೇಂದ್ರ",
    "name_hi": "बीडब्ल्यूएसएसबी अशोक पिलर पेयजल केंद्र",
    "type": "WATER_KIOSK",
    "address": "Near Ashoka Pillar Circle, Jayanagar 1st Block",
    "lat": 12.932,
    "lon": 77.587,
    "capacity_liters": 10000,
    "chilled_water": true,
    "operating_hours": "24 Hours (Continuous)",
    "status": "ACTIVE"
  },
  {
    "id": "BBMP-IC-07",
    "ward_id": "BBMP-139",
    "name": "K.R. Market City Wholesale Indira Canteen & High-Capacity Hydration Post",
    "name_kn": "ಕೆ.ಆರ್. ಮಾರುಕಟ್ಟೆ ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್ ಮತ್ತು ತುರ್ತು ಜಲ ಸೇವಾ ಕೇಂದ್ರ",
    "name_hi": "के.आर. मार्केट इंदिरा कैंटीन व आपातकालीन जलयोजन केंद्र",
    "type": "COOLING_SHELTER",
    "address": "Flower Market Yard, Kalasipalya, Bengaluru",
    "lat": 12.9645,
    "lon": 77.574,
    "capacity_persons": 550,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": true,
    "operating_hours": "06:30 AM - 09:30 PM",
    "status": "OPEN"
  },
  {
    "id": "BWSSB-TK-07",
    "ward_id": "BBMP-139",
    "name": "BWSSB Avenue Road / Chickpet High-Flow Water Dispenser",
    "name_kn": "ಬಿಡಬ್ಲ್ಯೂಎಸ್‌ಎಸ್‌ಬಿ ಅವೆನ್ಯೂ ರಸ್ತೆ ಕುಡಿಯುವ ನೀರಿನ ಕಿಯೋಸ್ಕ್",
    "name_hi": "बीडब्ल्यूएसएसबी एवेन्यू रोड पेयजल केंद्र",
    "type": "WATER_KIOSK",
    "address": "Avenue Road Junction, Chickpet",
    "lat": 12.968,
    "lon": 77.5765,
    "capacity_liters": 15000,
    "chilled_water": true,
    "operating_hours": "24 Hours (Continuous)",
    "status": "ACTIVE"
  },
  {
    "id": "BBMP-IC-08",
    "ward_id": "BBMP-82",
    "name": "Indiranagar CMH Road Transit Indira Canteen",
    "name_kn": "ಇಂದಿರಾನಗರ ಸಿಎಂಎಚ್ ರಸ್ತೆ ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್",
    "name_hi": "इंदिरानगर सीएमएच रोड इंदिरा कैंटीन",
    "type": "COOLING_SHELTER",
    "address": "Near Indiranagar Metro Station, CMH Road",
    "lat": 12.9785,
    "lon": 77.643,
    "capacity_persons": 280,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": true,
    "operating_hours": "07:30 AM - 08:30 PM",
    "status": "OPEN"
  },
  {
    "id": "BWSSB-TK-08",
    "ward_id": "BBMP-82",
    "name": "BWSSB 100ft Road Gig-Worker Hydration Station",
    "name_kn": "ಬಿಡಬ್ಲ್ಯೂಎಸ್‌ಎಸ್‌ಬಿ 100 ಅಡಿ ರಸ್ತೆ ಜಲ ಕೇಂದ್ರ",
    "name_hi": "बीडब्ल्यूएसएसबी 100 फीट रोड पेयजल स्टेशन",
    "type": "WATER_KIOSK",
    "address": "12th Main Junction, 100ft Road Indiranagar",
    "lat": 12.9719,
    "lon": 77.6412,
    "capacity_liters": 8000,
    "chilled_water": true,
    "operating_hours": "24 Hours (Continuous)",
    "status": "ACTIVE"
  },
  {
    "id": "BBMP-IC-09",
    "ward_id": "BBMP-21",
    "name": "Hebbal Flyover Transit Hub Indira Canteen & Paramedic Aid Camp",
    "name_kn": "ಹೆಬ್ಬಾಳ ಫ್ಲೈಓವರ್ ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್ ಮತ್ತು ಪ್ರಾಥಮಿಕ ಚಿಕಿತ್ಸಾ ಶಿಬಿರ",
    "name_hi": "हेब्बाल फ्लाईओवर इंदिरा कैंटीन व प्राथमिक उपचार शिविर",
    "type": "COOLING_SHELTER",
    "address": "Under Hebbal Flyover Loop, Bellary Road",
    "lat": 13.034,
    "lon": 77.596,
    "capacity_persons": 380,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": true,
    "operating_hours": "07:00 AM - 09:00 PM",
    "status": "OPEN"
  },
  {
    "id": "BWSSB-TK-09",
    "ward_id": "BBMP-21",
    "name": "BWSSB Manyata Tech Park Entrance Chilled Water Bowser",
    "name_kn": "ಬಿಡಬ್ಲ್ಯೂಎಸ್‌ಎಸ್‌ಬಿ ಮಾನ್ಯತಾ ಟೆಕ್ ಪಾರ್ಕ್ ನೀರು ವಿತರಣಾ ವಾಹನ",
    "name_hi": "बीडब्ल्यूएसएसबी मान्यता टेक पार्क पेयजल केंद्र",
    "type": "WATER_KIOSK",
    "address": "Outer Ring Road, Gate 1 Manyata Tech Park",
    "lat": 13.045,
    "lon": 77.618,
    "capacity_liters": 12000,
    "chilled_water": true,
    "operating_hours": "24 Hours (Continuous)",
    "status": "ACTIVE"
  },
  {
    "id": "SHELTER-128",
    "ward_id": "BBMP-128",
    "name": "Rajajinagar Metro Transit Cooling Shelter",
    "name_kn": "ರಾಜಾಜಿನಗರ ಮೆಟ್ರೋ ಶೀತಲ ವಿಶ್ರಾಂತಿ ಕೇಂದ್ರ",
    "name_hi": "राजाजीनगर मेट्रो शीतलन केंद्र",
    "type": "COOLING_SHELTER",
    "address": "Opposite Rajajinagar Metro Station Exit B",
    "lat": 12.999,
    "lon": 77.556,
    "capacity_persons": 300,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": true,
    "operating_hours": "07:00 AM - 08:30 PM",
    "status": "OPEN"
  },
  {
    "id": "WATER-128",
    "ward_id": "BBMP-128",
    "name": "Rajajinagar Industrial Area Chilled Water Kiosk",
    "name_kn": "ರಾಜಾಜಿನಗರ ಕೈಗಾರಿಕಾ ಪ್ರದೇಶ ಕುಡಿಯುವ ನೀರಿನ ಕಿಯೋಸ್ಕ್",
    "name_hi": "राजाजीनगर औद्योगिक क्षेत्र शीतल जल केंद्र",
    "type": "WATER_KIOSK",
    "address": "1st Block Industrial Main Road",
    "lat": 12.997,
    "lon": 77.554,
    "capacity_liters": 8000,
    "chilled_water": true,
    "operating_hours": "24 Hours (Continuous)",
    "status": "ACTIVE"
  },
  {
    "id": "SHELTER-165",
    "ward_id": "BBMP-165",
    "name": "Banashankari BDA Complex Heat Respite Center",
    "name_kn": "ಬನಶಂಕರಿ ಬಿಡಿಎ ಕಾಂಪ್ಲೆಕ್ಸ್ ಉಷ್ಣ ಪರಿಹಾರ ಕೇಂದ್ರ",
    "name_hi": "बनशंकरी बीडीए कॉम्प्लेक्स शीतलन केंद्र",
    "type": "COOLING_SHELTER",
    "address": "BDA Complex Ground Floor, Banashankari 2nd Stage",
    "lat": 12.924,
    "lon": 77.553,
    "capacity_persons": 250,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": true,
    "operating_hours": "08:00 AM - 08:00 PM",
    "status": "OPEN"
  },
  {
    "id": "SHELTER-36",
    "ward_id": "BBMP-36",
    "name": "Yeshwanthpur APMC Labor Heat Relief Hall",
    "name_kn": "ಯಶವಂತಪುರ ಎಪಿಎಂಸಿ ಕಾರ್ಮಿಕ ವಿಶ್ರಾಂತಿ ಭವನ",
    "name_hi": "यशवंतपुर एपीएमसी मंडी श्रमिक राहत केंद्र",
    "type": "COOLING_SHELTER",
    "address": "Gate 2, APMC Yard, Yeshwanthpur",
    "lat": 13.024,
    "lon": 77.547,
    "capacity_persons": 500,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": true,
    "operating_hours": "06:00 AM - 09:00 PM",
    "status": "OPEN"
  },
  {
    "id": "WATER-89",
    "ward_id": "BBMP-89",
    "name": "Marathahalli Bridge Free Chilled Water Dispenser",
    "name_kn": "ಮಾರತಹಳ್ಳಿ ಸೇತುವೆ ಉಚಿತ ಕುಡಿಯುವ ನೀರಿನ ಕಿಯೋಸ್ಕ್",
    "name_hi": "मराठाहल्ली ब्रिज शीतल जल केंद्र",
    "type": "WATER_KIOSK",
    "address": "Under Marathahalli Flyover, ORR Junction",
    "lat": 12.9565,
    "lon": 77.7015,
    "capacity_liters": 15000,
    "chilled_water": true,
    "operating_hours": "24 Hours (Continuous)",
    "status": "ACTIVE"
  },
  {
    "id": "SHELTER-175",
    "ward_id": "BBMP-175",
    "name": "Silk Board Junction Gig-Worker & Labor Cooling Hall",
    "name_kn": "ಸಿಲ್ಕ್ ಬೋರ್ಡ್ ಜಂಕ್ಷನ್ ಕಾರ್ಮಿಕ ಶೀತಲ ವಿಶ್ರಾಂತಿ ಕೇಂದ್ರ",
    "name_hi": "सिल्क बोर्ड जंक्शन श्रमिक शीतलन केंद्र",
    "type": "COOLING_SHELTER",
    "address": "Hosur Main Road, Silk Board Junction",
    "lat": 12.902,
    "lon": 77.632,
    "capacity_persons": 400,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": true,
    "operating_hours": "07:00 AM - 09:00 PM",
    "status": "OPEN"
  },
  {
    "id": "BBMP-IC-23",
    "ward_id": "BBMP-112",
    "name": "Domlur Flyover Transit Cooling & Hydration Center",
    "name_kn": "ದೋಮ್ಲೂರು ಮೇಲ್ಸೇತುವೆ ಶೀತಲ ಮತ್ತು ಕುಡಿಯುವ ನೀರಿನ ಕೇಂದ್ರ",
    "name_hi": "डोम्लूर फ्लाईओवर ट्रांजिट कूलिंग व जल केंद्र",
    "type": "COOLING_SHELTER",
    "address": "Intermediate Ring Road, Domlur Junction",
    "lat": 12.961,
    "lon": 77.638,
    "capacity_persons": 220,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": false,
    "operating_hours": "08:00 AM - 08:00 PM",
    "status": "OPEN"
  },
  {
    "id": "BWSSB-TK-24",
    "ward_id": "BBMP-7",
    "name": "Byatarayanapura Bellary Highway Free Water Post",
    "name_kn": "ಬ್ಯಾಟರಾಯನಪುರ ಹೆದ್ದಾರಿ ಉಚಿತ ಕುಡಿಯುವ ನೀರಿನ ಪೋಸ್ಟ್",
    "name_hi": "ब्याटरायनपुरा हाईवे निःशुल्क पेयजल पोस्ट",
    "type": "WATER_KIOSK",
    "address": "Near Byatarayanapura BBMP Sub-division Office",
    "lat": 13.062,
    "lon": 77.592,
    "capacity_liters": 8000,
    "chilled_water": true,
    "operating_hours": "24 Hours",
    "status": "ACTIVE"
  },
  {
    "id": "BBMP-IC-25",
    "ward_id": "BBMP-159",
    "name": "J.P. Nagar Cultural Center Senior Respite Zone",
    "name_kn": "ಜೆ.ಪಿ. ನಗರ ಸಾಂಸ್ಕೃತಿಕ ಕೇಂದ್ರ ಹಿರಿಯ ನಾಗರಿಕರ ವಿಶ್ರಾಂತಿ ತಾಣ",
    "name_hi": "जेपी नगर सांस्कृतिक केंद्र वरिष्ठ नागरिक शीतलन क्षेत्र",
    "type": "COOLING_SHELTER",
    "address": "24th Main, 5th Phase, J.P. Nagar",
    "lat": 12.908,
    "lon": 77.585,
    "capacity_persons": 280,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": true,
    "operating_hours": "08:00 AM - 09:00 PM",
    "status": "OPEN"
  },
  {
    "id": "BWSSB-TK-26",
    "ward_id": "BBMP-14",
    "name": "Dasarahalli Heavy Fabrication Labor Water Dispenser",
    "name_kn": "ದಾಸರಹಳ್ಳಿ ಕಾರ್ಮಿಕ ಕುಡಿಯುವ ನೀರಿನ ಕಿಯೋಸ್ಕ್",
    "name_hi": "दासरहल्ली श्रमिक पेयजल डिस्पेंसर",
    "type": "WATER_KIOSK",
    "address": "Tumkur Road Service Line, Dasarahalli",
    "lat": 13.045,
    "lon": 77.512,
    "capacity_liters": 10000,
    "chilled_water": true,
    "operating_hours": "24 Hours",
    "status": "ACTIVE"
  },
  {
    "id": "BBMP-IC-27",
    "name": "Indira Canteen Vasanth Nagar",
    "ward_id": "BBMP-60",
    "type": "INDIRA_CANTEEN",
    "capacity_people": 160,
    "chilled_water_available": true,
    "ac_present": true,
    "lat": 12.992,
    "lon": 77.589,
    "status": "OPEN",
    "hours": "07:30 - 20:30"
  },
  {
    "id": "BWSSB-TK-28",
    "name": "BWSSB Cauvery Kiosk Puttenahalli Lake",
    "ward_id": "BBMP-177",
    "type": "BWSSB_WATER_KIOSK",
    "capacity_people": 250,
    "chilled_water_available": true,
    "ac_present": false,
    "lat": 12.897,
    "lon": 77.577,
    "status": "OPEN",
    "hours": "24/7"
  },
  {
    "id": "BBMP-IC-29",
    "name": "Indira Canteen Murugeshpalya (Old Airport Rd)",
    "ward_id": "BBMP-113",
    "type": "INDIRA_CANTEEN",
    "capacity_people": 180,
    "chilled_water_available": true,
    "ac_present": true,
    "lat": 12.959,
    "lon": 77.659,
    "status": "OPEN",
    "hours": "07:30 - 20:30"
  },
  {
    "id": "BWSSB-TK-30",
    "name": "BWSSB RO Dispenser New BEL Road",
    "ward_id": "BBMP-18",
    "type": "BWSSB_WATER_KIOSK",
    "capacity_people": 220,
    "chilled_water_available": true,
    "ac_present": false,
    "lat": 13.036,
    "lon": 77.576,
    "status": "OPEN",
    "hours": "24/7"
  },
  {
    "id": "BBMP-IC-31",
    "ward_id": "BBMP-160",
    "name": "RR Nagar Indira Canteen & Cooling Pavilion",
    "name_kn": "ರಾಜರಾಜೇಶ್ವರಿ ನಗರ ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್ ಮತ್ತು ಶೀತಲ ಕೇಂದ್ರ",
    "name_hi": "आरआर नगर इंदिरा कैंटीन व कूलिंग पवेलियन",
    "type": "COOLING_SHELTER",
    "address": "Ideal Homes Township, 8th Main Rd, RR Nagar, Bengaluru",
    "lat": 12.926,
    "lon": 77.521,
    "capacity_persons": 220,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": true,
    "operating_hours": "08:00 AM - 08:00 PM",
    "status": "OPEN"
  },
  {
    "id": "BWSSB-TK-32",
    "ward_id": "BBMP-154",
    "name": "Gandhi Bazaar Water Post & Bugle Rock Respite Shelter",
    "name_kn": "ಗಾಂಧಿ ಬಜಾರ್ ಜಲ ಕೇಂದ್ರ ಮತ್ತು ಬ್ಯೂಗಲ್ ರಾಕ್ ವಿಶ್ರಾಂತಿ ಕೇಂದ್ರ",
    "name_hi": "गांधी बाजार वाटर पोस्ट व ब्युगल रॉक आश्रय",
    "type": "WATER_POINT",
    "address": "DVG Road, Gandhi Bazaar, Basavanagudi, Bengaluru",
    "lat": 12.942,
    "lon": 77.573,
    "capacity_persons": 180,
    "has_ac": false,
    "has_ors": true,
    "has_paramedic": false,
    "operating_hours": "06:00 AM - 09:00 PM",
    "status": "OPEN"
  },
  {
    "id": "BBMP-IC-33",
    "ward_id": "BBMP-117",
    "name": "Shanthi Nagar KSRTC Terminus AC Transit Shelter",
    "name_kn": "ಶಾಂತಿ ನಗರ ಕೆಎಸ್‌ಆರ್‌ಟಿಸಿ ಟರ್ಮಿನಲ್ ಎಸಿ ಶೀತಲ ಕೇಂದ್ರ",
    "name_hi": "शांति नगर केएसआरटीसी टर्मिनल एसी कूलिंग शेल्टर",
    "type": "COOLING_SHELTER",
    "address": "KSRTC Satellite Bus Station, Shanthi Nagar, Bengaluru",
    "lat": 12.959,
    "lon": 77.601,
    "capacity_persons": 300,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": true,
    "operating_hours": "24 HOURS",
    "status": "OPEN"
  },
  {
    "id": "BWSSB-TK-34",
    "ward_id": "BBMP-78",
    "name": "Frazer Town Coles Park Hydration Post & Indira Kiosk",
    "name_kn": "ಫ್ರೇಜರ್ ಟೌನ್ ಕೋಲ್ಸ್ ಪಾರ್ಕ್ ಜಲ ಕೇಂದ್ರ",
    "name_hi": "फ्रेजर टाउन कोल्स पार्क हाइड्रेशन पोस्ट",
    "type": "WATER_POINT",
    "address": "Promenade Road, Pulakeshinagar, Bengaluru",
    "lat": 12.998,
    "lon": 77.618,
    "capacity_persons": 160,
    "has_ac": false,
    "has_ors": true,
    "has_paramedic": false,
    "operating_hours": "07:00 AM - 08:30 PM",
    "status": "OPEN"
  },
  {
    "id": "BBMP-IC-35",
    "ward_id": "BBMP-84",
    "name": "Varthur Lake Emergency Water Tanker & Misting Hub",
    "name_kn": "ವರ್ತೂರು ತುರ್ತು ನೀರು ಟ್ಯಾಂಕರ್ ಮತ್ತು ಮಿಸ್ಟಿಂಗ್ ಕೇಂದ್ರ",
    "name_hi": "वरथूर झील आपातकालीन पानी टैंकर व मिस्टिंग हब",
    "type": "WATER_POINT",
    "address": "Varthur Main Road, Near Government School, Bengaluru",
    "lat": 12.938,
    "lon": 77.742,
    "capacity_persons": 280,
    "has_ac": false,
    "has_ors": true,
    "has_paramedic": true,
    "operating_hours": "08:00 AM - 07:00 PM",
    "status": "OPEN"
  },
  {
    "id": "BWSSB-TK-36",
    "ward_id": "BBMP-27",
    "name": "Banaswadi HRBR Outer Ring Road Transit Respite Station",
    "name_kn": "ಬಾಣಸವಾಡಿ ಎಚ್‌ಆರ್‌ಬಿಆರ್ ರಿಂಗ್ ರೋಡ್ ವಿಶ್ರಾಂತಿ ಕೇಂದ್ರ",
    "name_hi": "बाणसवाड़ी एचआरबीआर रिंग रोड ट्रांजिट शेल्टर",
    "type": "COOLING_SHELTER",
    "address": "HRBR Layout 2nd Block, Outer Ring Road, Kalyan Nagar, Bengaluru",
    "lat": 13.012,
    "lon": 77.651,
    "capacity_persons": 200,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": false,
    "operating_hours": "08:00 AM - 09:00 PM",
    "status": "OPEN"
  },
  {
    "id": "BBMP-IC-37",
    "ward_id": "BBMP-9",
    "name": "Vidyaranyapura Sambhram Eco-Park Water Shelter",
    "name_kn": "ವಿದ್ಯಾರಣ್ಯಪುರ ಸಂಭ್ರಮ್ ಇಕೋ ಪಾರ್ಕ್ ಜಲ ಕೇಂದ್ರ",
    "name_hi": "विद्यारण्यपुरा संभ्रम इको-पार्क जल आश्रय",
    "type": "WATER_POINT",
    "address": "BEL North Colony, Vidyaranyapura, Bengaluru",
    "lat": 13.082,
    "lon": 77.558,
    "capacity_persons": 150,
    "has_ac": false,
    "has_ors": true,
    "has_paramedic": false,
    "operating_hours": "07:30 AM - 08:00 PM",
    "status": "OPEN"
  },
  {
    "id": "BWSSB-TK-38",
    "ward_id": "BBMP-158",
    "name": "Kengeri Metro Station AC Respite Center & BWSSB Dispenser",
    "name_kn": "ಕೆಂಗೇರಿ ಮೆಟ್ರೋ ನಿಲ್ದಾಣ ಎಸಿ ಶೀತಲ ಕೇಂದ್ರ",
    "name_hi": "केंगेरी मेट्रो स्टेशन एसी कूलिंग शेल्टर",
    "type": "COOLING_SHELTER",
    "address": "Mysore Road Metro Terminal, Kengeri, Bengaluru",
    "lat": 12.912,
    "lon": 77.485,
    "capacity_persons": 320,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": true,
    "operating_hours": "06:00 AM - 10:30 PM",
    "status": "OPEN"
  },
  {
    "id": "BBMP-IC-39",
    "ward_id": "BBMP-142",
    "name": "Chamarajpet Wholesale Market Hydration Post & Misting Tent",
    "name_kn": "ಚಾಮರಾಜಪೇಟೆ ಮಾರುಕಟ್ಟೆ ಜಲ ಕೇಂದ್ರ ಮತ್ತು ಮಿಸ್ಟಿಂಗ್ ಟೆಂಟ್",
    "name_hi": "चामराजपेट थोक बाजार हाइड्रेशन पोस्ट व मिस्टिंग टेंट",
    "type": "WATER_POINT",
    "address": "Bull Temple Rd & 5th Main Junction, Chamarajpet, Bengaluru",
    "lat": 12.958,
    "lon": 77.561,
    "capacity_persons": 350,
    "has_ac": false,
    "has_ors": true,
    "has_paramedic": true,
    "operating_hours": "07:00 AM - 08:00 PM",
    "status": "OPEN"
  },
  {
    "id": "BWSSB-TK-40",
    "ward_id": "BBMP-8",
    "name": "Sahakar Nagar Bellary Road Pedestrian Relief Station",
    "name_kn": "ಸಹಕಾರ ನಗರ ಬಳ್ಳಾರಿ ರಸ್ತೆ ಪಾದಚಾರಿ ಶೀತಲ ಕೇಂದ್ರ",
    "name_hi": "सहकार नगर बेल्लारी रोड पैदल यात्री राहत केंद्र",
    "type": "COOLING_SHELTER",
    "address": "F Block, Sahakar Nagar, Near Aster CMI, Bengaluru",
    "lat": 13.061,
    "lon": 77.581,
    "capacity_persons": 175,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": false,
    "operating_hours": "08:00 AM - 08:30 PM",
    "status": "OPEN"
  },
  {
    "id": "BBMP-IC-41",
    "ward_id": "BBMP-83",
    "name": "Kadugodi Container Depot Labor Hydration Camp",
    "name_kn": "ಕಾಡುಗೋಡಿ ಕಂಟೈನರ್ ಡಿಪೋ ಕಾರ್ಮಿಕರ ಜಲ ಶಿಬಿರ",
    "name_hi": "काडुगोडी कंटेनर डिपो श्रमिक हाइड्रेशन कैंप",
    "type": "WATER_POINT",
    "address": "Whitefield Railway Station Rd, Kadugodi, Bengaluru",
    "lat": 12.998,
    "lon": 77.761,
    "capacity_persons": 260,
    "has_ac": false,
    "has_ors": true,
    "has_paramedic": true,
    "operating_hours": "07:00 AM - 07:30 PM",
    "status": "OPEN"
  },
  {
    "id": "BWSSB-TK-42",
    "ward_id": "BBMP-131",
    "name": "Basaveshwaranagar 80ft Road Indira Canteen & ORS Center",
    "name_kn": "ಬಸವೇಶ್ವರನಗರ 80 ಅಡಿ ರಸ್ತೆ ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್ ಮತ್ತು ಓಆರ್‌ಎಸ್ ಕೇಂದ್ರ",
    "name_hi": "बसवेश्वरनगर 80 फीट रोड इंदिरा कैंटीन व ओआरएस केंद्र",
    "type": "COOLING_SHELTER",
    "address": "80 Feet Road, 3rd Stage 4th Block, Basaveshwaranagar, Bengaluru",
    "lat": 12.988,
    "lon": 77.537,
    "capacity_persons": 210,
    "has_ac": true,
    "has_ors": true,
    "has_paramedic": false,
    "operating_hours": "07:30 AM - 08:30 PM",
    "status": "OPEN"
  }
];

export const fallbackCommunityReports = [
  {
    "id": "HG-87562",
    "ward_id": "BBMP-138",
    "ward_name": "Shivajinagar & Majestic Bus Interchange",
    "category": "LACK_OF_WATER",
    "category_label": "Lack Of Water",
    "location": "Near Metro Station",
    "description": "Water dispenser is empty",
    "urgency": "HIGH",
    "status": "UNDER_REVIEW",
    "status_label": "Under Municipal Review",
    "reporter_name": "Anonymous Citizen",
    "upvotes": 2,
    "timestamp": "Just now",
    "created_at": "2026-09-14T17:36:02Z"
  },
  {
    "id": "HG-8812",
    "ward_id": "BBMP-41",
    "ward_name": "Peenya Industrial Area & Jalahalli",
    "category": "WATER_DISPENSER_BROKEN",
    "category_label": "Broken Water Dispenser / Dry Post",
    "location": "Near Metro Gate 2 & 4th Cross Bus Shelter",
    "description": "Free drinking water tap has been non-functional since morning. Over 300 industrial laborers queuing in extreme heat.",
    "urgency": "CRITICAL",
    "status": "DISPATCHED_TANKER",
    "status_label": "Emergency Tanker Dispatched",
    "reporter_name": "Ganesh K.",
    "upvotes": 42,
    "timestamp": "35 mins ago",
    "created_at": "2026-09-14T11:45:00Z"
  },
  {
    "id": "HG-8809",
    "ward_id": "BBMP-138",
    "ward_name": "Shivajinagar & Majestic Bus Interchange",
    "category": "UNSHADED_LABOR_ZONE",
    "category_label": "Unshaded Outdoor Work / Transit Hub",
    "location": "Russell Market Wholesale Loading Docks",
    "description": "Headloaders and cart pullers operating under direct solar radiation. Need immediate temporary canopy and ORS packets.",
    "urgency": "HIGH",
    "status": "INSPECTION_SCHEDULED",
    "status_label": "Municipal Team On-Site",
    "reporter_name": "Naveen R.",
    "upvotes": 28,
    "timestamp": "1 hour ago",
    "created_at": "2026-09-14T11:15:00Z"
  },
  {
    "id": "HG-8805",
    "ward_id": "BBMP-36",
    "ward_name": "Yeshwanthpur APMC Grain Market & Rail Basin",
    "category": "LACK_OF_WATER",
    "category_label": "Acute Drinking Water Scarcity",
    "location": "Sub-yard 3, Loading Gate B",
    "description": "Borewell pump failure. Wholesale market workers have no drinking water access in heavy physical work environment.",
    "urgency": "CRITICAL",
    "status": "DISPATCHED_TANKER",
    "status_label": "12,000L Potable Bowser En Route",
    "reporter_name": "Suresh Gowda",
    "upvotes": 56,
    "timestamp": "2 hours ago",
    "created_at": "2026-09-14T10:30:00Z"
  },
  {
    "id": "HG-8798",
    "ward_id": "BBMP-89",
    "ward_name": "Marathahalli Outer Ring Road & Tech Junction",
    "category": "UNSHADED_LABOR_ZONE",
    "category_label": "Unshaded Bus Stand & Labor Crossing",
    "location": "Kalamandir Underpass Bus Stop",
    "description": "Tin roof removed during flyover work, passengers and gig delivery workers waiting without any thermal respite.",
    "urgency": "MEDIUM",
    "status": "UNDER_REVIEW",
    "status_label": "Under Ward Engineer Review",
    "reporter_name": "Priya S.",
    "upvotes": 19,
    "timestamp": "3 hours ago",
    "created_at": "2026-09-14T09:15:00Z"
  },
  {
    "id": "HG-8791",
    "ward_id": "BBMP-175",
    "ward_name": "Bommanahalli Garment Cluster & Silk Board",
    "category": "SHELTER_INACCESSIBLE",
    "category_label": "Cooling Shelter Locked / Offline",
    "location": "Indira Canteen Respite Hall, Silk Board Junction",
    "description": "Cooling shelter hall was temporarily closed for sanitization during peak 1:00 PM heat.",
    "urgency": "HIGH",
    "status": "RESOLVED",
    "status_label": "Reopened & Restocked with ORS",
    "reporter_name": "Anand M.",
    "upvotes": 35,
    "timestamp": "4 hours ago",
    "created_at": "2026-09-14T08:00:00Z"
  }
];

export const fallbackFeedbackData = {
  "total_reviews": 0,
  "average_rating": 0.0,
  "accuracy_satisfaction_pct": 0.0,
  "verified_audits_count": 0,
  "recent_reviews": []
};
