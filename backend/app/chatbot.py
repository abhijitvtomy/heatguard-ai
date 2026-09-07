"""
HEATGUARD Dual-Mode AI Heatbot
Serves two roles:
1. Citizen Life-Safety Assistant (symptoms, hydration tips, nearest cooling centers, gig-worker guidance)
2. Municipal Emergency Commander (ward triage, resource dispatch, bilingual SMS drafting)
Supports English, Kannada (ಕನ್ನಡ), and Hindi (हिन्दी).
"""

from typing import Dict, Any, List
import os
import re

class AIHeatbot:
    def __init__(self):
        self.gemini_key = os.getenv("GEMINI_API_KEY", "")

    def process_message(self, user_msg: str, mode: str = "CITIZEN", language: str = "en", current_ward_id: str = "BBMP-138") -> Dict[str, Any]:
        """
        Processes conversation with context-aware biometeorological intelligence.
        """
        msg_lower = user_msg.lower()

        # CITIZEN MODE INTENTS
        if mode == "CITIZEN":
            # 1. Heat Stroke Emergency Symptoms
            if any(w in msg_lower for w in ["dizzy", "dizziness", "faint", "vomit", "sweat", "headache", "stroke", "चक्कर", "ತಲೆತಿರುಗುವಿಕೆ", "ವಾಂತಿ"]):
                return {
                    "role": "assistant",
                    "content_en": "🚨 URGENT HEAT STROKE WARNING:\nIf you or someone nearby has stopped sweating, has a rapid pulse, confusion, or dizziness:\n1. Move to shade or an air-conditioned room immediately.\n2. Loosen clothing and apply cool, wet cloths to the neck, armpits, and groin.\n3. Sip cool water with ORS (electrolytes) if conscious.\n4. Call 108 Emergency Ambulance immediately if vomiting or losing consciousness.",
                    "content_kn": "🚨 ತುರ್ತು ಹೀಟ್ ಸ್ಟ್ರೋಕ್ ಎಚ್ಚರಿಕೆ:\nನಿಮಗೆ ಅಥವಾ ಯಾರಿಗಾದರೂ ತಲೆತಿರುಗುವಿಕೆ, ವಾಂತಿ ಅಥವಾ ಬೆವರು ನಿಂತಿದ್ದರೆ:\n1. ತಕ್ಷಣವೇ ನೆರಳು ಅಥವಾ ಹವಾನಿಯಂತ್ರಿತ ಕೊಠಡಿಗೆ ತೆರಳಿ.\n2. ಕುತ್ತಿಗೆ ಮತ್ತು ಕಂಕುಳಿಗೆ ತಣ್ಣನೆಯ ನೀರಿನ ಬಟ್ಟೆ ಹಾಕಿ.\n3. ಪ್ರಜ್ಞೆಯಿದ್ದರೆ ತಣ್ಣೀರು ಮತ್ತು ಒಆರ್‌ಎಸ್ ಕುಡಿಯಿರಿ.\n4. ತಕ್ಷಣ 108 ತುರ್ತು ಆಂಬ್ಯುಲೆನ್ಸ್‌ಗೆ ಕರೆ ಮಾಡಿ.",
                    "content_hi": "🚨 आपातकालीन हीट स्ट्रोक चेतावनी:\nयदि आपको या किसी को चक्कर, उल्टी, या पसीना आना बंद हो गया है:\n1. तुरंत छायादार या ठंडे कमरे में जाएं।\n2. गर्दन और माथे पर ठंडे पानी की पट्टी रखें।\n3. ओआरएस (ORS) युक्त पानी धीरे-धीरे पिएं।\n4. बेहोशी की स्थिति में तुरंत 108 एम्बुलेंस को कॉल करें।",
                    "action_suggested": "CALL_108_SOS"
                }

            # 2. Nearest Cooling Shelter / Water
            elif any(w in msg_lower for w in ["shelter", "water", "canteen", "tanker", "drink", "center", "ಕೇಂದ್ರ", "ನೀರು", "पानी", "शेल्टर"]):
                return {
                    "role": "assistant",
                    "content_en": "📍 NEAREST COOLING CENTERS & WATER POINTS (BBMP):\n• Majestic Bus Terminal: BBMP Indira Canteen & Cooling Center (Open until 8:30 PM, AC & Free RO Water).\n• Shivajinagar Bus Depot: BWSSB Cauvery Free Drinking Water Kiosk #1 (24 Hours Chilled Water).\n• Peenya Industrial: 1st Stage Labor Welfare Respite Hall (Free ORS & Paramedic on standby).\n👉 You can view all map pins directly by toggling the 'Cooling Shelters' layer on the map.",
                    "content_kn": "📍 ಹತ್ತಿರದ ತಂಪು ಕೇಂದ್ರಗಳು ಮತ್ತು ಕುಡಿಯುವ ನೀರು:\n• ಮೆಜೆಸ್ಟಿಕ್: ಬಿಬಿಎಂಪಿ ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್ ಮತ್ತು ಶೀತಲ ವಿಶ್ರಾಂತಿ ಕೇಂದ್ರ (ರಾತ್ರಿ 8:30 ರವರೆಗೆ, ಉಚಿತ ನೀರು).\n• ಶಿವಾಜಿನಗರ: ಬಿಡಬ್ಲ್ಯೂಎಸ್‌ಎಸ್‌ಬಿ ಕಾವೇರಿ ಕುಡಿಯುವ ನೀರಿನ ಕಿಯೋಸ್ಕ್ (24 ಗಂಟೆ ಲಭ್ಯ).\n• ಪೀಣ್ಯ: 1ನೇ ಹಂತದ ಕಾರ್ಮಿಕ ಕಲ್ಯಾಣ ಭವನ (ಉಚಿತ ಒಆರ್‌ಎಸ್ ಲಭ್ಯ).",
                    "content_hi": "📍 नजदीकी शीतलन केंद्र और पेयजल:\n• मैजेस्टिक: बीबीएमपी इंदिरा कैंटीन व कूलिंग सेंटर (रात 8:30 बजे तक, एसी व निःशुल्क आरओ पानी)।\n• शिवाजीनगर बस डिपो: बीडब्ल्यूएसएसबी कावेरी निःशुल्क जल कियोस्क (24 घंटे ठंडा पानी)।\n• पीण्या: प्रथम चरण श्रमिक कल्याण केंद्र (मुफ्त ओआरएस और प्राथमिक चिकित्सा)।",
                    "action_suggested": "HIGHLIGHT_SHELTERS_ON_MAP"
                }

            # 3. Delivery Gig Worker / Outdoor Labor
            elif any(w in msg_lower for w in ["delivery", "swiggy", "zomato", "bike", "rider", "work", "outside", "labor", "ಕೆಲಸ", "काम"]):
                return {
                    "role": "assistant",
                    "content_en": "⏱️ GIG-WORKER & OUTDOOR LABOR SAFETY ADVISORY (NIOH):\n• Peak Danger Hours: 12:00 PM – 04:00 PM.\n• Mandatory Work-Rest Cycle: 30 minutes riding / 30 minutes rest in shade.\n• Hydration Rule: Drink at least 1 Liter of water with electrolytes every hour.\n• Keep wet cotton cloth under helmet to prevent direct solar radiation to the temples.",
                    "content_kn": "⏱️ ಡೆಲಿವರಿ ರೈಡರ್ಸ್ ಮತ್ತು ಕಾರ್ಮಿಕರ ಸುರಕ್ಷತಾ ಮಾರ್ಗಸೂಚಿ:\n• ಅಪಾಯದ ಸಮಯ: ಮಧ್ಯಾಹ್ನ 12:00 ರಿಂದ 04:00 ರವರೆಗೆ.\n• ಕೆಲಸದ ನಿಯಮ: 30 ನಿಮಿಷ ಕೆಲಸ / 30 ನಿಮಿಷ ನೆರಳಿನಲ್ಲಿ ಕಡ್ಡಾಯ ವಿಶ್ರಾಂತಿ.\n• ಪ್ರತಿ ಗಂಟೆಗೆ ಕನಿಷ್ಠ 1 ಲೀಟರ್ ನೀರು ಅಥವಾ ಎಲೆಕ್ಟ್ರೋಲೈಟ್ ಕುಡಿಯಿರಿ.",
                    "content_hi": "⏱️ डिलीवरी राइडर्स और मजदूरों के लिए सुरक्षा नियम:\n• सबसे खतरनाक समय: दोपहर 12:00 से 04:00 बजे तक।\n• कार्य-विश्राम चक्र: 30 मिनट काम / 30 मिनट छाया में आराम।\n• हर घंटे कम से कम 1 लीटर पानी या ओआरएस पिएं।\n• हेलमेट के नीचे गीला सूती कपड़ा रखें।",
                    "action_suggested": "START_WORK_REST_TIMER"
                }

            # Default Citizen Advice
            return {
                "role": "assistant",
                "content_en": "Hello! I am HEATGUARD AI, your hyper-local climate safety companion for Bengaluru.\nYou can ask me:\n• 'Where is the nearest cooling shelter or drinking water?'\n• 'Is it safe to do delivery work this afternoon?'\n• 'What are heat stroke symptoms and first aid?'",
                "content_kn": "ನಮಸ್ಕಾರ! ನಾನು ಹೀಟ್‌ಗಾರ್ಡ್ ಎಐ, ಬೆಂಗಳೂರಿನ ನಿಮ್ಮ ಹವಾಮಾನ ಸುರಕ್ಷತಾ ಸಹಾಯಕ.\nನೀವು ನನ್ನನ್ನು ಕೇಳಬಹುದು:\n• 'ಹತ್ತಿರದ ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್ ಅಥವಾ ಕುಡಿಯುವ ನೀರಿನ ಕೇಂದ್ರ ಎಲ್ಲಿದೆ?'\n• 'ಮಧ್ಯಾಹ್ನ ಹೊರಗೆ ಕೆಲಸ ಮಾಡುವುದು ಸುರಕ್ಷಿತವೇ?'\n• 'ಹೀಟ್ ಸ್ಟ್ರೋಕ್ ಲಕ್ಷಣಗಳು ಯಾವುವು?'",
                "content_hi": "नमस्ते! मैं हीटगार्ड एआई हूँ, बेंगलुरु का स्थानीय स्वास्थ्य सुरक्षा सहायक।\nआप मुझसे पूछ सकते हैं:\n• 'नजदीकी कूलिंग सेंटर या पीने का पानी कहाँ है?'\n• 'दोपहर में डिलीवरी या बाहर काम करना सुरक्षित है?'\n• 'हीट स्ट्रोक के लक्षण और प्राथमिक उपचार क्या हैं?'",
                "action_suggested": "NONE"
            }

        # EMERGENCY COMMANDER / MUNICIPAL OFFICER MODE
        else:
            # 1. Triage & Critical Wards
            if any(w in msg_lower for w in ["critical", "ward", "triage", "highest", "risk", "hospital", "tanker"]):
                return {
                    "role": "assistant",
                    "content_en": "📊 BBMP EMERGENCY TRIAGE REPORT:\n• Top 3 Red Wards: Peenya Industrial (BBMP-41), Shivajinagar & Majestic (BBMP-138), Whitefield (BBMP-85).\n• Primary Bottlenecks: Peenya has 68% tin-roof density; WBGT is 34.8°C. Expected hospital admission surge is +38.2%.\n• Action: Divert 15 BWSSB water bowsers immediately to Majestic & Peenya labor hubs. Alert KC General & Bowring Hospital to prepare 40 extra heat beds.",
                    "content_kn": "📊 ಬಿಬಿಎಂಪಿ ತುರ್ತು ಟ್ರಯೇಜ್ ವರದಿ:\n• ಗರಿಷ್ಠ ಅಪಾಯದ ವಾರ್ಡ್‌ಗಳು: ಪೀಣ್ಯ (BBMP-41), ಮೆಜೆಸ್ಟಿಕ್ (BBMP-138), ವೈಟ್‌ಫೀಲ್ಡ್ (BBMP-85).\n• ಆಸ್ಪತ್ರೆ ರೋಗಿಗಳ ಸಂಖ್ಯೆಯಲ್ಲಿ +38% ಹೆಚ್ಚಳದ ಮುನ್ಸೂಚನೆ.\n• ತುರ್ತು ಕ್ರಮ: ಪೀಣ್ಯ ಮತ್ತು ಮೆಜೆಸ್ಟಿಕ್‌ಗೆ 15 ನೀರಿನ ಟ್ಯಾಂಕರ್‌ಗಳನ್ನು ತಕ್ಷಣ ರವಾನಿಸಿ.",
                    "content_hi": "📊 बीबीएमपी आपातकालीन रिपोर्ट:\n• सर्वाधिक प्रभावित वार्ड: पीण्या (BBMP-41), मैजेस्टिक (BBMP-138), व्हाइटफील्ड (BBMP-85)।\n• अस्पताल भर्ती में +38% की वृद्धि का अनुमान।\n• निर्देश: तुरंत 15 पानी के टैंकर रवाना करें और विक्टोरिया व बॉवरिंग अस्पतालों में अतिरिक्त बेड आरक्षित करें।",
                    "action_suggested": "OPEN_CIRCULAR_MODAL"
                }

            # 2. Draft SMS / WhatsApp Alert
            elif any(w in msg_lower for w in ["sms", "draft", "broadcast", "whatsapp", "message", "alert"]):
                return {
                    "role": "assistant",
                    "content_en": "📝 DRAFT CITIZEN FLASH SMS (READY FOR BROADCAST):\n[BBMP-KSDMA ALERT]: Extreme Heatwave Red Alert in Ward 41 (Peenya). Outdoor labor prohibited 11:30 AM - 4:00 PM. Free drinking water & AC cooling shelters active at Peenya Labor Hall & Metro. Stay hydrated. Call 108 for medical help.",
                    "content_kn": "📝 ನಾಗರಿಕ ಸಂದೇಶ ಕರಡು:\n[ಬಿಬಿಎಂಪಿ ಎಚ್ಚರಿಕೆ]: ಪೀಣ್ಯ ವಾರ್ಡ್ 41 ರಲ್ಲಿ ತೀವ್ರ ಬಿಸಿಗಾಳಿ ರೆಡ್ ಅಲರ್ಟ್. ಮಧ್ಯಾಹ್ನ 11:30 ರಿಂದ 4:00 ರವರೆಗೆ ಹೊರಾಂಗಣ ಕೆಲಸ ನಿಷೇಧಿಸಲಾಗಿದೆ. ಉಚಿತ ಕುಡಿಯುವ ನೀರು ಪೀಣ್ಯ ಕಾರ್ಮಿಕ ಭವನದಲ್ಲಿ ಲಭ್ಯವಿದೆ. ತುರ್ತು ಚಿಕಿತ್ಸೆಗೆ 108 ಕರೆ ಮಾಡಿ.",
                    "content_hi": "📝 नागरिक संदेश ड्राफ्ट:\n[बीबीएमपी चेतावनी]: पीण्या वार्ड 41 में भीषण लू का रेड अलर्ट। दोपहर 11:30 से 4:00 बजे तक बाहरी काम पर प्रतिबंध। पीण्या लेबर हॉल में मुफ्त ठंडा पानी व शेल्टर उपलब्ध है। सहायता हेतु 108 मिलाएं।",
                    "action_suggested": "PUBLISH_FLASH_BROADCAST"
                }

            # Default Officer Guidance
            return {
                "role": "assistant",
                "content_en": "Officer Console Active. I can assist you with:\n• 'Which wards need water tankers right now?'\n• 'Draft an emergency work-stoppage SMS for contractors'\n• 'What is the projected hospital surge in Victoria & Bowring Hospital?'\n• 'Generate 1-Click Official Municipal Circular (PDF)'",
                "content_kn": "ಅಧಿಕಾರಿಗಳ ಕನ್ಸೋಲ್ ಸಕ್ರಿಯವಾಗಿದೆ. ನೀವು ಆದೇಶಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಬಹುದು ಅಥವಾ ವಾರ್ಡ್ ವರದಿಗಳನ್ನು ಕೇಳಬಹುದು.",
                "content_hi": "अधिकारी कमांड सक्रिय है। आप आपातकालीन आदेश, टैंकर आवंटन या अस्पतालों के लिए निर्देश जारी कर सकते हैं।",
                "action_suggested": "NONE"
            }

# Singleton
ai_heatbot = AIHeatbot()
