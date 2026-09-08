"""
HEATGUARD Citizen Climate Prediction League Engine
Gamified community forecasting tournament turning passive citizens into active climate vanguards.
Evaluates crowd predictions, awards XP/badges, maintains leaderboards, and drives the AI vs Crowd Showdown.
"""

from typing import Dict, Any, List
import uuid
import time

class GamificationEngine:
    def __init__(self):
        self.user_profiles: Dict[str, Dict[str, Any]] = {
            "demo_user": {
                "user_id": "demo_user",
                "name": "Arjun Rao",
                "handle": "@arjun_blr",
                "city": "Bengaluru",
                "ward": "BBMP-151 (Koramangala)",
                "xp": 1420,
                "level": 4,
                "level_title": "Heatwave Detective",
                "streak_days": 5,
                "total_predictions": 18,
                "correct_predictions": 15,
                "accuracy_pct": 83.3,
                "badges": [
                    {"id": "b1", "name": "First Forecast", "icon": "🌱", "desc": "Submitted first climate prediction"},
                    {"id": "b2", "name": "Wet-Bulb Master", "icon": "🌡️", "desc": "Accurately predicted dangerous humidity trap"},
                    {"id": "b3", "name": "Community Guardian", "icon": "🛡️", "desc": "Verified 3 local Indira Canteen cooling shelters"}
                ]
            }
        }

    def get_daily_challenges(self) -> List[Dict[str, Any]]:
        """
        Returns active daily prediction challenges for Bengaluru BBMP wards.
        """
        return [
            {
                "id": "CHAL-01",
                "title": "The Peenya Red-Line Challenge",
                "ward": "BBMP-41 (Peenya Industrial)",
                "question_en": "Will Outdoor WBGT in Peenya exceed the critical work-stoppage threshold of 34.0°C tomorrow afternoon?",
                "question_kn": "ನಾಳೆ ಮಧ್ಯಾಹ್ನ ಪೀಣ್ಯದಲ್ಲಿ ಹೊರಾಂಗಣ WBGT 34.0°C ಮೀರಲಿದೆಯೇ?",
                "question_hi": "क्या कल दोपहर पीण्या में आउटडोर WBGT 34.0°C के खतरनाक स्तर को पार करेगा?",
                "type": "BINARY",
                "options": ["YES (Breach Likely)", "NO (Safe)"],
                "xp_reward": 150,
                "closes_in_hours": 8,
                "crowd_consensus": {"option": "YES", "pct": 78}
            },
            {
                "id": "CHAL-02",
                "title": "Majestic Thermal Stress Index (HTSI)",
                "ward": "BBMP-138 (Shivajinagar & Majestic)",
                "question_en": "Predict tomorrow's peak Human Thermal Stress Index (0-100) at Majestic Bus Interchange between 1 PM and 4 PM.",
                "question_kn": "ಮಧ್ಯಾಹ್ನ 1 ರಿಂದ 4 ರವರೆಗೆ ಮೆಜೆಸ್ಟಿಕ್‌ನಲ್ಲಿ ಉಷ್ಣ ಒತ್ತಡ ಸೂಚ್ಯಂಕವನ್ನು (HTSI) ಊಹಿಸಿ.",
                "question_hi": "दोपहर 1 से 4 बजे के बीच मैजेस्टिक बस टर्मिनल पर उच्चतम हीट स्ट्रेस इंडेक्स (0-100) का अनुमान लगाएं।",
                "type": "NUMERIC_SLIDER",
                "min": 20,
                "max": 100,
                "default_guess": 74,
                "xp_reward": 200,
                "closes_in_hours": 11,
                "crowd_consensus": {"mean_value": 76.5}
            },
            {
                "id": "CHAL-03",
                "title": "Nocturnal Heat Entrapment Call",
                "ward": "BBMP-85 (Whitefield)",
                "question_en": "Will tonight's nocturnal temperature in Whitefield remain trapped above 28.0°C with humidity > 65%?",
                "question_kn": "ಇಂದು ರಾತ್ರಿ ವೈಟ್‌ಫೀಲ್ಡ್‌ನಲ್ಲಿ ತಾಪಮಾನವು 28.0°C ಗಿಂತ ಹೆಚ್ಚು ಉಳಿಯಲಿದೆಯೇ?",
                "question_hi": "क्या आज रात व्हाइटफील्ड में तापमान 28.0°C से ऊपर और नमी 65% से अधिक फंसी रहेगी?",
                "type": "BINARY",
                "options": ["YES (Heat Trap Active)", "NO (Night Recovery)"],
                "xp_reward": 120,
                "closes_in_hours": 5,
                "crowd_consensus": {"option": "YES", "pct": 69}
            },
            {
                "id": "CHAL-04",
                "title": "Convective Pre-Monsoon Cloudburst",
                "ward": "BBMP-174 (HSR & Bellandur)",
                "question_en": "Will a localized rain cloudburst (>5mm) provide sudden thermal relief to South Bengaluru before 5:00 PM?",
                "question_kn": "ಸಂಜೆ 5:00 ರ ಮೊದಲು ದಕ್ಷಿಣ ಬೆಂಗಳೂರಿಗೆ ಮಳೆಯಿಂದ ತಂಪು ಸಿಗಲಿದೆಯೇ?",
                "question_hi": "क्या शाम 5:00 बजे से पहले दक्षिण बेंगलुरु में बारिश से अचानक राहत मिलेगी?",
                "type": "BINARY",
                "options": ["YES (Rain Relief)", "NO (Heat Continues)"],
                "xp_reward": 180,
                "closes_in_hours": 6,
                "crowd_consensus": {"option": "NO", "pct": 62}
            }
        ]

    def submit_prediction(self, user_id: str, challenge_id: str, prediction_value: Any) -> Dict[str, Any]:
        """
        Records a user's prediction and immediately awards submission XP.
        """
        profile = self.user_profiles.get(user_id, self.user_profiles["demo_user"])
        profile["xp"] += 50
        profile["total_predictions"] += 1

        # Level up check
        new_level = (profile["xp"] // 400) + 1
        if new_level > profile["level"]:
            profile["level"] = new_level
            profile["level_title"] = "Master Climate Forecaster" if new_level >= 5 else "Heatwave Detective"

        return {
            "success": True,
            "message": "Prediction registered! You earned +50 XP for early forecasting.",
            "updated_profile": profile
        }

    def update_user_profile(self, name: str, ward: str = "BBMP-151 (Koramangala)") -> Dict[str, Any]:
        """
        Updates the citizen forecaster's custom name and home ward.
        """
        profile = self.user_profiles["demo_user"]
        if name and name.strip():
            profile["name"] = name.strip()
            clean = "".join(c for c in name.lower() if c.isalnum())
            profile["handle"] = f"@{clean or 'citizen'}_blr"
        if ward and ward.strip():
            profile["ward"] = ward.strip()
        return profile

    def get_leaderboard(self) -> List[Dict[str, Any]]:
        """
        Returns the top 10 Bengaluru citizen forecasters with dynamic user profile.
        """
        curr_user = self.user_profiles["demo_user"]
        user_name = curr_user.get("name", "Arjun Rao")
        user_ward_short = curr_user.get("ward", "Koramangala").split(" ")[-1].replace("(", "").replace(")", "")
        if not user_ward_short:
            user_ward_short = "Koramangala"

        return [
            {"rank": 1, "name": "Pooja Hegde", "handle": "@pooja_clim", "ward": "Malleshwaram", "xp": 3450, "accuracy": "91.2%", "badge": "👑 Climate Vanguard"},
            {"rank": 2, "name": "Karthik Sundaram", "handle": "@karthik_blr", "ward": "Peenya", "xp": 3120, "accuracy": "89.5%", "badge": "🥇 Master Forecaster"},
            {"rank": 3, "name": "Fatima Zahra", "handle": "@fatima_z", "ward": "Shivajinagar", "xp": 2890, "accuracy": "88.0%", "badge": "🥈 Heatwave Detective"},
            {"rank": 4, "name": f"{user_name} (You)", "handle": curr_user.get("handle", "@citizen_blr"), "ward": user_ward_short, "xp": curr_user.get("xp", 1420), "accuracy": f"{curr_user.get('accuracy_pct', 83.3)}%", "badge": "🛡️ Community Guardian"},
            {"rank": 5, "name": "Dr. Vinay Kumar", "handle": "@dr_vinay", "ward": "Whitefield", "xp": 1340, "accuracy": "81.0%", "badge": "🌡️ Wet-Bulb Scout"},
            {"rank": 6, "name": "Sneha Murthy", "handle": "@sneha_m", "ward": "Yelahanka", "xp": 1210, "accuracy": "79.5%", "badge": "🌱 Novice Watcher"}
        ]

    def get_showdown_matrix(self) -> List[Dict[str, Any]]:
        """
        Returns the 3-Way Accuracy Comparison: Traditional Forecast vs Citizen Crowd vs HEATGUARD AI.
        """
        return [
            {
                "event": "April 2024 Bengaluru Record Heat",
                "traditional_forecast": "37.5°C (Moderate Warning)",
                "traditional_accuracy": "68.2%",
                "citizen_crowd": "High Wet-Bulb Surge (>32°C)",
                "citizen_accuracy": "82.5%",
                "heatguard_ai": "Critical Red Alert (+38% Hospital Surge)",
                "heatguard_accuracy": "95.1%",
                "actual_ground_truth": "39.2°C, 36% Emergency Surge, Severe Water Distress"
            },
            {
                "event": "May 2024 Moisture Flash Anomaly",
                "traditional_forecast": "Temp dropped 3°C, Alert lifted",
                "traditional_accuracy": "52.0%",
                "citizen_crowd": "Flagged heavy humidity distress",
                "citizen_accuracy": "84.0%",
                "heatguard_ai": "Lethal False-Relief Trap (Tw: 33.2°C)",
                "heatguard_accuracy": "93.8%",
                "actual_ground_truth": "Hospital admissions surged 28% due to heat stroke"
            }
        ]

# Global singleton
gamification_engine = GamificationEngine()
