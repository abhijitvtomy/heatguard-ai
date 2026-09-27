import json
import os

new_wards = [
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
            "center": [12.926, 77.521]
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [77.508, 12.915],
                    [77.535, 12.915],
                    [77.538, 12.938],
                    [77.510, 12.938],
                    [77.508, 12.915]
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
            "center": [12.942, 77.573]
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [77.562, 12.932],
                    [77.585, 12.932],
                    [77.588, 12.952],
                    [77.564, 12.952],
                    [77.562, 12.932]
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
            "wind_attenuation": 0.50,
            "center": [12.959, 77.601]
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [77.590, 12.950],
                    [77.614, 12.950],
                    [77.616, 12.970],
                    [77.592, 12.970],
                    [77.590, 12.950]
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
            "center": [12.998, 77.618]
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [77.605, 12.988],
                    [77.630, 12.988],
                    [77.632, 13.010],
                    [77.608, 13.010],
                    [77.605, 12.988]
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
            "wind_attenuation": 0.70,
            "center": [12.938, 77.742]
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [77.725, 12.924],
                    [77.760, 12.924],
                    [77.762, 12.952],
                    [77.728, 12.952],
                    [77.725, 12.924]
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
            "wind_attenuation": 0.60,
            "center": [13.012, 77.651]
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [77.638, 13.000],
                    [77.665, 13.000],
                    [77.668, 13.025],
                    [77.640, 13.025],
                    [77.638, 13.000]
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
            "center": [13.082, 77.558]
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [77.545, 13.070],
                    [77.572, 13.070],
                    [77.575, 13.095],
                    [77.548, 13.095],
                    [77.545, 13.070]
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
            "center": [12.912, 77.485]
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [77.468, 12.898],
                    [77.502, 12.898],
                    [77.505, 12.925],
                    [77.472, 12.925],
                    [77.468, 12.898]
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
            "center": [12.958, 77.561]
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [77.550, 12.948],
                    [77.572, 12.948],
                    [77.575, 12.968],
                    [77.552, 12.968],
                    [77.550, 12.948]
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
            "wind_attenuation": 0.70,
            "center": [13.061, 77.581]
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [77.568, 13.048],
                    [77.595, 13.048],
                    [77.598, 13.074],
                    [77.571, 13.074],
                    [77.568, 13.048]
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
            "center": [12.998, 77.761]
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [77.745, 12.985],
                    [77.778, 12.985],
                    [77.780, 13.012],
                    [77.748, 13.012],
                    [77.745, 12.985]
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
            "wind_attenuation": 0.70,
            "center": [12.988, 77.537]
        },
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                [
                    [77.524, 12.976],
                    [77.550, 12.976],
                    [77.552, 13.000],
                    [77.526, 13.000],
                    [77.524, 12.976]
                ]
            ]
        }
    }
]

print("Script template ready with", len(new_wards), "new wards.")
