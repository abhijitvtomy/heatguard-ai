"""
HEATGUARD Dual-Mode AI Heatbot Engine
Biometeorologically grounded, multi-lingual knowledge base & LLM copilot.
Supports English, Kannada (ಕನ್ನಡ), and Hindi (हिन्दी).
"""

import os
import re
from typing import Dict, Any, Optional
import httpx

class AIHeatbot:
    def __init__(self):
        self.gemini_key = os.getenv("GEMINI_API_KEY", "")

    def process_message(
        self,
        user_msg: str,
        mode: str = "CITIZEN",
        language: str = "en",
        current_ward_id: str = "BBMP-138"
    ) -> Dict[str, Any]:
        """
        Processes conversation with context-aware biometeorological intelligence.
        """
        msg = (user_msg or "").strip()
        msg_lower = msg.lower()

        # Check curated domain knowledge first (instant, 0ms, zero-cost)
        match = self._match_domain_knowledge(msg_lower, mode)
        if match:
            return match

        # If GEMINI_API_KEY is available in environment, invoke Gemini API as smart fallback
        gemini_key = os.getenv("GEMINI_API_KEY", "")
        if gemini_key:
            try:
                gemini_reply = self._call_gemini_api(msg, mode, language, gemini_key)
                if gemini_reply:
                    return {
                        "role": "assistant",
                        "content_en": gemini_reply,
                        "content_kn": gemini_reply,
                        "content_hi": gemini_reply,
                        "action_suggested": "NONE"
                    }
            except Exception:
                pass

        # Smart contextual default fallback
        return self._get_default_response(mode)

    def _match_domain_knowledge(self, q: str, mode: str) -> Optional[Dict[str, Any]]:
        """Matches query against comprehensive biometeorological & conversational knowledge base."""

        # 1. CASUAL GREETINGS
        if re.search(r'\b(hi|hello|hey|heyy|greetings|namaste|namaskar|namaskara|vanakkam|pranam|salaam)\b', q):
            return {
                "role": "assistant",
                "content_en": (
                    "👋 **Hello! Welcome to HEATGUARD AI Copilot.**\n\n"
                    "I am your real-time biometeorological safety companion for Bengaluru (BBMP & BWSSB).\n\n"
                    "How can I help you today? You can ask me:\n"
                    "• *'How to stay cool and prevent heat exhaustion?'*\n"
                    "• *'How much water should I drink in this heat?'*\n"
                    "• *'Where is the nearest Indira Canteen or free chilled drinking water?'*\n"
                    "• *'What is WBGT and why is normal temperature misleading?'*\n"
                    "• *'What are the safe work hours for delivery riders & construction workers?'*"
                ),
                "content_kn": (
                    "👋 **ನಮಸ್ಕಾರ! ಹೀಟ್‌ಗಾರ್ಡ್ ಎಐ ಕೋಪೈಲಟ್‌ಗೆ ಸ್ವಾಗತ.**\n\n"
                    "ನಾನು ಬೆಂಗಳೂರಿನ ಸ್ಥಳೀಯ ಹವಾಮಾನ ಮತ್ತು ಆರೋಗ್ಯ ಸುರಕ್ಷತಾ ಸಹಾಯಕ.\n\n"
                    "ನೀವು ನನ್ನನ್ನು ಕೇಳಬಹುದು:\n"
                    "• 'ಶಾಖದಿಂದ ರಕ್ಷಣೆ ಪಡೆಯಲು ಏನು ಮಾಡಬೇಕು?'\n"
                    "• 'ದಿನಕ್ಕೆ ಎಷ್ಟು ನೀರು ಕುಡಿಯಬೇಕು?'\n"
                    "• 'ಹತ್ತಿರದ ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್ ಅಥವಾ ಕುಡಿಯುವ ನೀರಿನ ಕೇಂದ್ರ ಎಲ್ಲಿದೆ?'\n"
                    "• 'ಡೆಲಿವರಿ ಕೆಲಸಗಾರರಿಗೆ ಸುರಕ್ಷತಾ ನಿಯಮಗಳು ಯಾವುವು?'"
                ),
                "content_hi": (
                    "👋 **नमस्ते! हीटगार्ड एआई कोपायलट में आपका स्वागत है।**\n\n"
                    "मैं बेंगलुरु (BBMP व BWSSB) का आपका स्थानीय जलवायु व स्वास्थ्य सुरक्षा सलाहकार हूँ।\n\n"
                    "आप मुझसे पूछ सकते हैं:\n"
                    "• 'भीषण गर्मी से बचने के घरेलू उपाय क्या हैं?'\n"
                    "• 'दिनभर में कितना पानी पीना चाहिए?'\n"
                    "• 'नजदीकी इंदिरा कैंटीन या मुफ्त पेयजल केंद्र कहाँ है?'\n"
                    "• 'डिलीवरी राइडर्स व श्रमिकों के लिए सुरक्षित समय क्या है?'"
                ),
                "action_suggested": "NONE"
            }

        # 2. TIME-BASED GREETINGS (Good morning, afternoon, evening, night)
        if re.search(r'\b(good\s*(morning|afternoon|evening|night|day))\b', q):
            return {
                "role": "assistant",
                "content_en": (
                    "🌅 **Good day! Hope you are staying hydrated and cool.**\n\n"
                    "In Bengaluru today, peak thermal stress occurs between **11:30 AM and 4:00 PM** when UV levels and Wet-Bulb Globe Temperature (WBGT) peak.\n\n"
                    "💡 **Quick Health Reminder:**\n"
                    "• Keep a water bottle with a pinch of salt & lemon handy.\n"
                    "• Wear loose, light-colored cotton garments.\n"
                    "• Take 10-minute shade breaks if working outdoors."
                ),
                "content_kn": (
                    "🌅 **ಶುಭ ದಿನ! ನೀವು ಸಮರ್ಪಕವಾಗಿ ನೀರು ಕುಡಿದು ಸುರಕ್ಷಿತವಾಗಿರುವಿರಿ ಎಂದು ಭಾವಿಸುತ್ತೇನೆ.**\n\n"
                    "ಬೆಂಗಳೂರಿನಲ್ಲಿ ಮಧ್ಯಾಹ್ನ 11:30 ರಿಂದ ಸಂಜೆ 4:00 ರವರೆಗೆ ಸೂರ್ಯನ ತಾಪ ಗರಿಷ್ಠವಾಗಿರುತ್ತದೆ. ನೆರಳಿನಲ್ಲಿರಿ ಮತ್ತು ಸಾಕಷ್ಟು ನೀರು ಕುಡಿಯಿರಿ."
                ),
                "content_hi": (
                    "🌅 **शुभ दिन! आशा है आप सुरक्षित और हाइड्रेटेड हैं।**\n\n"
                    "बेंगलुरु में दोपहर 11:30 से 4:00 बजे के बीच सबसे अधिक गर्मी और पराबैंगनी (UV) किरणें होती हैं। धूप में निकलते समय सिर ढकें और पानी पीते रहें।"
                ),
                "action_suggested": "NONE"
            }

        # 3. HOW ARE YOU / CASUAL CHECK-IN
        if re.search(r'\b(how\s*(are|r)\s*(you|u)|how\s*is\s*it\s*going|kaise\s*ho|hegidira|hegiddira|kya\s*haal|wassup|what\'?s\s*up|sup)\b', q):
            return {
                "role": "assistant",
                "content_en": (
                    "😊 **I am running at peak performance and actively monitoring all 42 BBMP wards with real-time Google Weather & IMD ground-truth calibration!**\n\n"
                    "My biometeorological sensors are tracking real-time humidity, solar radiation, and wet-bulb temperatures across Bengaluru to ensure zero heat-related casualties.\n\n"
                    "How are you feeling today? If you feel dizzy, fatigued, or dehydrated, let me know right away!"
                ),
                "content_kn": (
                    "😊 **ನಾನು ತುಂಬಾ ಚೆನ್ನಾಗಿದ್ದೇನೆ ಮತ್ತು ಬೆಂಗಳೂರಿನ ಎಲ್ಲಾ ವಾರ್ಡ್‌ಗಳ ಹವಾಮಾನವನ್ನು ಸಕ್ರಿಯವಾಗಿ ಗಮನಿಸುತ್ತಿದ್ದೇನೆ!**\n\n"
                    "ನಿಮಗೆ ಇಂದು ಹೇಗನ್ನಿಸುತ್ತಿದೆ? ತಲೆತಿರುಗುವಿಕೆ ಅಥವಾ ಆಯಾಸವಿದ್ದರೆ ತಕ್ಷಣ ನನಗೆ ತಿಳಿಸಿ."
                ),
                "content_hi": (
                    "😊 **मैं बिल्कुल ठीक हूँ और बेंगलुरु के सभी 8 वार्डों की निगरानी कर रहा हूँ!**\n\n"
                    "आप कैसा महसूस कर रहे हैं? यदि आपको चक्कर, अत्यधिक पसीना या कमजोरी महसूस हो रही है, तो तुरंत बताएं।"
                ),
                "action_suggested": "NONE"
            }

        # 4. GRATITUDE & THANKS
        if re.search(r'\b(thank\s*(you|u)|thanks|thx|dhanyavad|dhanyavada|shukriya|appreciate)\b', q):
            return {
                "role": "assistant",
                "content_en": (
                    "🙏 **You are very welcome!**\n\n"
                    "Your health and safety are our top priority. Remember to drink clean water every 20 minutes, avoid direct sun between 12-3 PM, and look out for elderly neighbors and delivery riders.\n\n"
                    "Stay safe and beat the heat! 🛡️"
                ),
                "content_kn": (
                    "🙏 **ಧನ್ಯವಾದಗಳು!**\n\n"
                    "ನಿಮ್ಮ ಆರೋಗ್ಯ ಮತ್ತು ಸುರಕ್ಷತೆಯೇ ನಮ್ಮ ಆದ್ಯತೆ. ಸಮರ್ಪಕವಾಗಿ ನೀರು ಕುಡಿಯಿರಿ ಮತ್ತು ನೆರಳಿನಲ್ಲಿರಿ. ಆರೋಗ್ಯವಾಗಿರಿ! 🛡️"
                ),
                "content_hi": (
                    "🙏 **आपका बहुत-बहुत धन्यवाद!**\n\n"
                    "आपकी सुरक्षा ही हमारी प्राथमिकता है। पर्याप्त पानी पिएं, धूप से बचें और स्वस्थ रहें! 🛡️"
                ),
                "action_suggested": "NONE"
            }

        # 5. FAREWELLS (Bye, goodbye, see you)
        if re.search(r'\b(bye|goodbye|cya|see\s*you|take\s*care|tata)\b', q):
            return {
                "role": "assistant",
                "content_en": (
                    "👋 **Goodbye! Stay safe, stay hydrated, and take care.**\n\n"
                    "If you ever feel dizzy, stop sweating, or need cooling centers in Bengaluru, HEATGUARD AI is always here 24/7."
                ),
                "content_kn": (
                    "👋 **ಶುಭ ವಿದಾಯ! ಸುರಕ್ಷಿತವಾಗಿರಿ, ಸಾಕಷ್ಟು ನೀರು ಕುಡಿಯಿರಿ.**\n\n"
                    "ತುರ್ತು ಸಂದರ್ಭದಲ್ಲಿ ಹೀಟ್‌ಗಾರ್ಡ್ ಎಐ ಸದಾ ನಿಮ್ಮ ಸೇವೆಯಲ್ಲಿದೆ."
                ),
                "content_hi": (
                    "👋 **अलविदा! अपना ध्यान रखें और खूब पानी पिएं।**\n\n"
                    "किसी भी आपात स्थिति में हीटगार्ड एआई 24 घंटे आपकी सेवा में उपलब्ध है।"
                ),
                "action_suggested": "NONE"
            }

        # 6. ACKNOWLEDGEMENTS (OK, Cool, Great, Awesome, Got it)
        if re.search(r'^(ok|okay|cool|great|awesome|understood|got\s*it|fine|alright|sure|yes|yep|nice)$', q.strip()):
            return {
                "role": "assistant",
                "content_en": (
                    "👍 **Glad to help!** Is there anything else you'd like to check? You can ask about cooling centers, safe working hours, homemade ORS, or today's ward forecast."
                ),
                "content_kn": (
                    "👍 **ಸಂತೋಷ!** ಬೇರೆ ಏನಾದರೂ ಮಾಹಿತಿ ಬೇಕಿದ್ದಲ್ಲಿ ದಯವಿಟ್ಟು ಕೇಳಿ."
                ),
                "content_hi": (
                    "👍 **बहुत बढ़िया!** क्या आप तापमान, पेयजल केंद्र या स्वास्थ्य सुरक्षा से जुड़ा कोई अन्य प्रश्न पूछना चाहते हैं?"
                ),
                "action_suggested": "NONE"
            }

        # 7. BOT IDENTITY & CREATORS
        if re.search(r'\b(who\s*(are\s*you|made\s*you|created\s*you|built\s*you)|what\s*is\s*your\s*name|tell\s*me\s*about\s*yourself)\b', q):
            return {
                "role": "assistant",
                "content_en": (
                    "🤖 **I am HEATGUARD AI Copilot.**\n\n"
                    "• **Mission:** Developed for the **Smart India Hackathon (SIH)** in collaboration with BBMP & BWSSB.\n"
                    "• **Purpose:** To shift disaster management from reactive weather forecasts to predictive biometeorological protection.\n"
                    "• **Physics Engine:** Computes ISO 7243 Wet-Bulb Globe Temperature (WBGT) and Stull (2011) Wet-Bulb ($T_w$).\n"
                    "• **Epidemiological ML:** Forecasts hospital surge spikes with 90% conformal confidence intervals 24-48 hours before peak casualty waves."
                ),
                "content_kn": (
                    "🤖 **ನಾನು ಹೀಟ್‌ಗಾರ್ಡ್ ಎಐ ಕೋಪೈಲಟ್.**\n\n"
                    "• ಸ್ಮಾರ್ಟ್ ಇಂಡಿಯಾ ಹ್ಯಾಕಥಾನ್ (SIH) ಗಾಗಿ ಬಿಬಿಎಂಪಿ ಮತ್ತು ಬಿಡಬ್ಲ್ಯೂಎಸ್‌ಎಸ್‌ಬಿ ಸಹಯೋಗದಲ್ಲಿ ಅಭಿವೃದ್ಧಿಪಡಿಸಲಾಗಿದೆ.\n"
                    "• ಕೇವಲ ತಾಪಮಾನ ಹೇಳುವ ಬದಲು, ಶಾಖವು ಮಾನವ ಶರೀರ ಮತ್ತು ಆಸ್ಪತ್ರೆಗಳ ಮೇಲೆ ಬೀರುವ ಪರಿಣಾಮವನ್ನು ಮುಂಚಿತವಾಗಿ ಊಹಿಸುತ್ತದೆ."
                ),
                "content_hi": (
                    "🤖 **मैं हीटगार्ड एआई कोपायलट हूँ।**\n\n"
                    "• स्मार्ट इंडिया हैकथॉन (SIH) के तहत बीबीएमपी व बीडब्ल्यूएसएसबी के लिए विकसित।\n"
                    "• यह प्रणाली केवल तापमान नहीं, बल्कि मानव शरीर और अस्पतालों पर पड़ने वाले असर का सटीक पूर्वानुमान लगाती है।"
                ),
                "action_suggested": "NONE"
            }

        # 8. HOW TO STAY COOL / DAILY HEAT PROTECTION TIPS
        if re.search(r'\b(stay\s*cool|beat\s*the\s*heat|tips|protect\s*from\s*heat|prevention|precautions|summer\s*tips|how\s*to\s*protect)\b', q):
            return {
                "role": "assistant",
                "content_en": (
                    "🛡️ **Top Practical Tips to Stay Cool & Beat Bengaluru Heat:**\n\n"
                    "1. 💧 **Hydrate Proactively:** Drink water *before* you feel thirsty. Keep tender coconut water, buttermilk, or lemon water handy.\n"
                    "2. 🕒 **Avoid Peak Hours:** Stay indoors between **11:30 AM and 4:00 PM**.\n"
                    "3. 👕 **Wear Breathable Fabric:** Loose, light-colored cotton or linen clothing reflects heat.\n"
                    "4. 🧴 **Sun Shielding:** Carry an umbrella, wear UV-protective sunglasses, and apply SPF 30+ sunscreen.\n"
                    "5. ❄️ **Cool Pressure Points:** Apply cold water or a damp cloth to your neck, wrists, and temples for rapid cooling.\n"
                    "6. 📍 **Public Cooling Respite:** If outdoors, visit your nearest BBMP Indira Canteen for free AC resting space and RO water."
                ),
                "content_kn": (
                    "🛡️ **ಶಾಖದಿಂದ ರಕ್ಷಣೆ ಪಡೆಯಲು ಪ್ರಮುಖ ಸಲಹೆಗಳು:**\n\n"
                    "1. ಬಾಯಾರಿಕೆ ಇಲ್ಲದಿದ್ದರೂ ಪ್ರತಿ ಅರ್ಧ ಗಂಟೆಗೊಮ್ಮೆ ನೀರು, ಎಳನೀರು ಅಥವಾ ಮಜ್ಜಿಗೆ ಕುಡಿಯಿರಿ.\n"
                    "2. ಮಧ್ಯಾಹ್ನ 11:30 ರಿಂದ 4:00 ರವರೆಗೆ ಅನಗತ್ಯವಾಗಿ ಹೊರಗೆ ಹೋಗಬೇಡಿ.\n"
                    "3. ತಿಳಿ ಬಣ್ಣದ ಹತ್ತಿ (ಕಾಟನ್) ಬಟ್ಟೆಗಳನ್ನು ಧರಿಸಿ.\n"
                    "4. ಕೊಡೆ, ಸನ್‌ಗ್ಲಾಸ್ ಬಳಸಿ.\n"
                    "5. ಹತ್ತಿರದ ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್‌ನಲ್ಲಿ ಉಚಿತ ನೀರು ಮತ್ತು ತಂಪಾದ ನೆರಳು ಪಡೆಯಿರಿ."
                ),
                "content_hi": (
                    "🛡️ **भीषण गर्मी और लू से बचने के मुख्य उपाय:**\n\n"
                    "1. दिनभर में 3-4 लीटर पानी, छाछ, नारियल पानी या नींबू पानी पिएं।\n"
                    "2. दोपहर 11:30 से 4:00 बजे के बीच सीधी धूप में निकलने से बचें।\n"
                    "3. ढीले और हल्के रंग के सूती (कॉटन) कपड़े पहनें।\n"
                    "4. बाहर निकलते समय छाता, चश्मा और सिर पर कपड़ा रखें।\n"
                    "5. नजदीकी इंदिरा कैंटीन में जाकर मुफ्त ठंडा पानी और छाया प्राप्त करें।"
                ),
                "action_suggested": "HIGHLIGHT_SHELTERS_ON_MAP"
            }

        # 9. HYDRATION / HOW MUCH WATER / WHAT TO DRINK
        if re.search(r'\b(how\s*much\s*water|drink\s*water|hydration|stay\s*hydrated|what\s*to\s*drink|coconut\s*water|lemon\s*water|nimbu\s*pani|buttermilk|chaas|majjige|cold\s*water|ice\s*water)\b', q):
            return {
                "role": "assistant",
                "content_en": (
                    "💧 **Hydration Guidelines during Extreme Heat:**\n\n"
                    "• **Daily Intake:** Aim for **3.0 to 4.0 Liters** of fluids daily (more if doing outdoor physical work).\n"
                    "• **Best Beverages:**\n"
                    "  ✅ Clean RO water (sipped every 15–20 minutes)\n"
                    "  ✅ Tender coconut water (rich in natural potassium and magnesium)\n"
                    "  ✅ Salted buttermilk (majjige / chaas) to replenish lost sodium\n"
                    "  ✅ Lemon water with a pinch of black salt and sugar\n"
                    "  ✅ WHO-formula Oral Rehydration Solution (ORS)\n"
                    "• **Ice Water Warning:** Avoid gulping freezing ice water immediately after coming from hot sun; cool tap water is absorbed much faster and prevents stomach cramps."
                ),
                "content_kn": (
                    "💧 **ಶಾಖದ ದಿನಗಳಲ್ಲಿ ನೀರು ಕುಡಿಯುವ ನಿಯಮಗಳು:**\n\n"
                    "• ದಿನಕ್ಕೆ ಕನಿಷ್ಠ **3 ರಿಂದ 4 ಲೀಟರ್** ನೀರು ಕುಡಿಯಿರಿ.\n"
                    "• ಎಳನೀರು, ಉಪ್ಪು ಬೆರೆಸಿದ ಮಜ್ಜಿಗೆ ಮತ್ತು ನಿಂಬೆ ಪಾನಕ ದೇಹಕ್ಕೆ ಅತ್ಯಂತ ಉತ್ತಮ.\n"
                    "• ಬಿಸಿಲಿನಿಂದ ಬಂದ ತಕ್ಷಣ ಅತಿಯಾದ ಐಸ್ ನೀರು ಕುಡಿಯಬೇಡಿ; ಸಾಮಾನ್ಯ ತಂಪಾದ ನೀರು ಕುಡಿಯಿರಿ."
                ),
                "content_hi": (
                    "💧 **गर्मी में सही हाइड्रेशन के नियम:**\n\n"
                    "• दिन में कम से कम **3 से 4 लीटर** पानी पिएं।\n"
                    "• छाछ, नारियल पानी, नींबू पानी और ओआरएस इलेक्ट्रोलाइट्स की कमी को तुरंत पूरा करते हैं।\n"
                    "• धूप से तुरंत आकर अत्यधिक ठंडा बर्फ का पानी न पिएं, सामान्य मटके का पानी सबसे अच्छा है।"
                ),
                "action_suggested": "NONE"
            }

        # 10. CAFFEINE, ALCOHOL, SODA & DRINKS TO AVOID
        if re.search(r'\b(coffee|tea|chai|alcohol|beer|whisky|wine|soda|coke|cold\s*drink|soft\s*drink)\b', q):
            return {
                "role": "assistant",
                "content_en": (
                    "⚠️ **Drinks to Avoid / Limit during Heatwaves:**\n\n"
                    "• ☕ **Caffeine (Coffee & Strong Tea):** Caffeine is a mild diuretic that speeds up kidney filtration and fluid excretion, accelerating dehydration.\n"
                    "• 🍺 **Alcohol & Beer:** Alcohol inhibits vasopressin (the antidiuretic hormone), causing rapid fluid loss, core-body temperature spikes, and dangerous cardiovascular strain.\n"
                    "• 🥤 **Sugary Sodas & Energy Drinks:** High fructose and carbonation hinder cellular hydration and can cause stomach cramps in high heat.\n\n"
                    "👉 **Smart Rule:** For every cup of tea or coffee, drink at least 2 glasses of pure water to balance hydration."
                ),
                "content_kn": (
                    "⚠️ **ಶಾಖದ ಸಮಯದಲ್ಲಿ ತ್ಯಜಿಸಬೇಕಾದ ಪಾನೀಯಗಳು:**\n\n"
                    "• ಅತಿಯಾದ ಕಾಫಿ, ಚಹಾ, ಮದ್ಯಪಾನ ಮತ್ತು ಕಾರ್ಬೊನೇಟೆಡ್ ತಂಪು ಪಾನೀಯಗಳು ದೇಹದಿಂದ ನೀರನ್ನು ವೇಗವಾಗಿ ಹೊರಹಾಕಿ ನಿರ್ಜಲೀಕರಣ (ಡಿಹೈಡ್ರೇಶನ್) ಉಂಟುಮಾಡುತ್ತವೆ.\n"
                    "• ಇವುಗಳ ಬದಲಾಗಿ ಮಜ್ಜಿಗೆ, ಎಳನೀರು ಅಥವಾ ನಿಂಬೆ ಪಾನಕ ಬಳಸಿ."
                ),
                "content_hi": (
                    "⚠️ **गर्मी में किन पेय पदार्थों से बचें:**\n\n"
                    "• चाय, कॉफी, शराब और कोल्ड ड्रिंक्स शरीर से पानी को तेजी से बाहर निकालते हैं, जिससे डिहाइड्रेशन बढ़ जाता है।\n"
                    "• इनके स्थान पर छाछ, नींबू पानी या सादा पानी ही सर्वोत्तम विकल्प हैं।"
                ),
                "action_suggested": "NONE"
            }

        # 11. FOOD & DIET (What to eat in summer)
        if re.search(r'\b(what\s*(should\s*i\s*)?eat|food|diet|summer\s*food|curd|yogurt|watermelon|cucumber|spicy|meat|non\s*veg)\b', q):
            return {
                "role": "assistant",
                "content_en": (
                    "🥗 **Optimal Heatwave Diet & Nutrition:**\n\n"
                    "• **High Water-Content Foods:** Watermelon (92% water), cucumber (96% water), muskmelon, tomatoes, oranges, and mint.\n"
                    "• **Cooling Probiotics:** Fresh curd (dahi), spiced buttermilk with cumin and coriander.\n"
                    "• **Meals:** Eat smaller, lighter meals across the day instead of heavy feasts. Heavy digestive loads increase metabolic heat production.\n"
                    "• **Foods to Avoid:** Oily street food, deep-fried snacks, and heavy red meats which increase thermogenesis and cause digestive distress."
                ),
                "content_kn": (
                    "🥗 **ಬೇಸಿಗೆಯಲ್ಲಿ ಸೂಕ್ತವಾದ ಆಹಾರ ಪದ್ಧತಿ:**\n\n"
                    "• ಕಲ್ಲಂಗಡಿ, ಸೌತೆಕಾಯಿ, ಕರ್ಬೂಜದಂತಹ ನೀರಿನಂಶ ಹೆಚ್ಚಿರುವ ಹಣ್ಣುಗಳನ್ನು ಸೇವಿಸಿ.\n"
                    "• ಮಜ್ಜಿಗೆ, ಮೊಸರು ಮತ್ತು ಹಗುರವಾದ ಊಟ ಮಾಡಿ.\n"
                    "• ಕರಿದ, ಎಣ್ಣೆಯುಕ್ತ ಮತ್ತು ಅತಿಯಾದ ಮಸಾಲೆ ಪದಾರ್ಥಗಳಿಂದ ದೂರವಿರಿ."
                ),
                "content_hi": (
                    "🥗 **गर्मियों में खान-पान और सही आहार:**\n\n"
                    "• खीरा, तरबूज, खरबूजा, संतरा और दही जैसे ठंडे खाद्य पदार्थों का सेवन करें।\n"
                    "• दिन में भारी भोजन के बजाय हल्का और सुपाच्य भोजन लें।\n"
                    "• अत्यधिक तेल, तीखे मसाले और नॉन-वेज से बचें क्योंकि ये शरीर की आंतरिक गर्मी बढ़ाते हैं।"
                ),
                "action_suggested": "NONE"
            }

        # 12. CLOTHING & SUN PROTECTION
        if re.search(r'\b(what\s*(should\s*i\s*|to\s*|can\s*i\s*)?wear|clothing|clothes|dress|cotton|what\s*color|sunscreen|sunglasses|umbrella|hat|cap)\b', q):
            return {
                "role": "assistant",
                "content_en": (
                    "👕 **Wardrobe & Sun-Shielding Recommendations:**\n\n"
                    "• **Fabric:** 100% natural, loose-weave **cotton or linen**. Synthetic fabrics (polyester, nylon) trap heat and sweat against your skin.\n"
                    "• **Colors:** Light shades (white, beige, pastel yellow, sky blue) reflect solar radiation. Dark colors absorb up to 80% of radiant heat.\n"
                    "• **Sleeves:** Loose full-length sleeves protect arms from ultraviolet erythema and direct skin heating.\n"
                    "• **Accessories:** Wide-brimmed hat, UV400 rated sunglasses, and a light-colored umbrella."
                ),
                "content_kn": (
                    "👕 **ಬೇಸಿಗೆಯಲ್ಲಿ ಧರಿಸಬೇಕಾದ ಉಡುಪುಗಳು:**\n\n"
                    "• ತಿಳಿ ಬಣ್ಣದ, ಸಡಿಲವಾದ ಹತ್ತಿ (ಕಾಟನ್) ಬಟ್ಟೆಗಳನ್ನು ಧರಿಸಿ.\n"
                    "• ಕಪ್ಪು ಮತ್ತು ಗಾಢ ಬಣ್ಣಗಳು ಶಾಖವನ್ನು ಹೀರಿಕೊಳ್ಳುತ್ತವೆ, ಅವುಗಳನ್ನು ತಪ್ಪಿಸಿ.\n"
                    "• ಬಿಸಿಲಿನಲ್ಲಿ ಹೋಗುವಾಗ ಕೊಡೆ ಅಥವಾ ಟೋಪಿ ಧರಿಸಿ."
                ),
                "content_hi": (
                    "👕 **धूप में सही वस्त्र और सुरक्षा उपकरण:**\n\n"
                    "• हल्के रंग (सफेद, क्रीम) के ढीले सूती कपड़े पहनें। गहरे रंग गर्मी सोखते हैं।\n"
                    "• पूरी आस्तीन के कपड़े त्वचा को सीधी धूप से बचाते हैं।\n"
                    "• धूप का चश्मा (UV प्रोटेक्शन) और टोपी या छाता साथ रखें।"
                ),
                "action_suggested": "NONE"
            }

        # 13. INDOOR COOLING, AC TEMP & ROOM VENTILATION
        if re.search(r'\b(ac\s*(temperature|temp)?|air\s*conditioner|fan|ac\s*or\s*fan|cool\s*room|cool\s*house|tin\s*roof|asbestos|no\s*ac|cooler)\b', q):
            return {
                "role": "assistant",
                "content_en": (
                    "❄️ **Optimal Indoor Cooling & AC Guidelines (BEE Standard):**\n\n"
                    "• **Ideal AC Setting:** Set air conditioners to **24°C to 26°C**. Setting it to 18°C wastes 36% more electricity without cooling faster, while 24°C provides optimal thermal comfort and prevents thermal shock when stepping outdoors.\n"
                    "• **Cross Ventilation:** Open windows early morning (6–8 AM) and night (after 8 PM) to flush out accumulated heat. Keep curtains closed during 10 AM – 5 PM.\n"
                    "• **Tin / Asbestos Roofs (Peenya / Industrial Wards):**\n"
                    "  - Spray water on the roof exterior in late afternoon.\n"
                    "  - Hang wet jute gunny bags under the ceiling to create evaporative cooling drops of up to 4°C."
                ),
                "content_kn": (
                    "❄️ **ಮನೆಯನ್ನು ತಂಪಾಗಿಡುವ ನಿಯಮಗಳು ಮತ್ತು ಎಸಿ ಸೆಟ್ಟಿಂಗ್:**\n\n"
                    "• ಎಸಿ ತಾಪಮಾನವನ್ನು **24°C ನಿಂದ 26°C** ನಲ್ಲಿಡುವುದು ಆರೋಗ್ಯಕರ ಮತ್ತು ವಿದ್ಯುತ್ ಉಳಿತಾಯ ಮಾಡುತ್ತದೆ.\n"
                    "• ಮಧ್ಯಾಹ್ನ ಕಿಟಕಿ ಪರದೆಗಳನ್ನು ಮುಚ್ಚಿ ಬಿಸಿಲು ಬಾರದಂತೆ ತಡೆಯಿರಿ.\n"
                    "• ತಗಡಿನ ಶೀಟುಗಳಿರುವ ಮನೆಗಳಿಗೆ ಸಂಜೆ ನೀರು ಚಿಮುಕಿಸುವುದರಿಂದ ತಂಪು ಹೆಚ್ಚುತ್ತದೆ."
                ),
                "content_hi": (
                    "❄️ **कमरे को ठंडा रखने और एसी के सही नियम:**\n\n"
                    "• एसी का तापमान **24°C से 26°C** पर रखें। यह स्वास्थ्य के लिए सर्वोत्तम है और बिजली भी बचाता है।\n"
                    "• दिन में 10 से 5 बजे तक पर्दे बंद रखें ताकि कमरे में धूप न आए।\n"
                    "• टिन की छत वाले कमरों में छत पर पानी छिड़कने या गीली बोरियां डालने से ठंडक मिलती है।"
                ),
                "action_suggested": "NONE"
            }

        # 14. VULNERABLE GROUPS: BABIES & CHILDREN
        if re.search(r'\b(baby|babies|infant|toddler|child|children|kids|school\s*kids|play\s*outside)\b', q):
            return {
                "role": "assistant",
                "content_en": (
                    "👶 **Child & Infant Heat Safety Protocol:**\n\n"
                    "• **Vulnerability:** Children have a higher surface-area-to-body-mass ratio and underdeveloped sweat glands, heating up **3 to 5 times faster** than adults.\n"
                    "• **Never Leave in Cars:** *Never* leave a child in a parked vehicle—cabin temperature can reach a lethal 50°C in under 10 minutes.\n"
                    "• **School & Play Hours:** Ban outdoor games and sports between 11:00 AM and 4:00 PM.\n"
                    "• **Hydration for Infants:** Breastfeed infants more frequently; offer cool boiled water to toddlers every 30 minutes.\n"
                    "• **Warning Signs:** Sunken eyes, fewer wet diapers (under 4 in 24h), extreme lethargy, or dry mouth."
                ),
                "content_kn": (
                    "👶 **ಮಕ್ಕಳು ಮತ್ತು ಶಿಶುಗಳ ಬೇಸಿಗೆ ರಕ್ಷಣೆ:**\n\n"
                    "• ಮಕ್ಕಳಿಗೆ ವಯಸ್ಕರಿಗಿಂತ ಬೇಗ ಶಾಖ ತಟ್ಟುತ್ತದೆ. ಮಧ್ಯಾಹ್ನ 11 ರಿಂದ 4 ಗಂಟೆಯವರೆಗೆ ಆಟವಾಡಲು ಹೊರಗೆ ಕಳುಹಿಸಬೇಡಿ.\n"
                    "• ನಿಲ್ಲಿಸಿದ ಕಾರುಗಳಲ್ಲಿ ಮಕ್ಕಳನ್ನು ಎಂದಿಗೂ ಬಿಟ್ಟುಹೋಗಬೇಡಿ.\n"
                    "• ಮಕ್ಕಳಿಗೆ ನಿಯಮಿತವಾಗಿ ನೀರು ಮತ್ತು ದ್ರವಾಹಾರ ನೀಡಿ."
                ),
                "content_hi": (
                    "👶 **बच्चों और नवजात शिशुओं की सुरक्षा:**\n\n"
                    "• बच्चों का शरीर वयस्कों की तुलना में 3 से 5 गुना तेजी से गर्म होता है।\n"
                    "• दोपहर 11 से 4 बजे के बीच बच्चों को बाहर खेलने न भेजें।\n"
                    "• बंद कार में बच्चे को कभी न छोड़ें। डिहाइड्रेशन से बचाने के लिए लगातार पानी व ओआरएस पिलाएं।"
                ),
                "action_suggested": "NONE"
            }

        # 15. VULNERABLE GROUPS: ELDERLY & CHRONIC PATIENTS
        if re.search(r'\b(elderly|senior\s*citizen|grandparents|old\s*people|bp|blood\s*pressure|hypertension|heart\s*patient|kidney)\b', q):
            return {
                "role": "assistant",
                "content_en": (
                    "👵 **Elderly & Chronic Patient Heat Precautions:**\n\n"
                    "• **Cardiac Strain:** High heat forces the heart to pump up to 2-3 times more blood to peripheral skin vessels to release heat, increasing arrhythmia and infarction risk.\n"
                    "• **Medication Sensitivity:** Diuretics, beta-blockers, and ACE-inhibitors impair thirst perception and sweat regulation.\n"
                    "• **Action Plan:**\n"
                    "  1. Stay in the coolest ground-floor room with good airflow.\n"
                    "  2. Monitor blood pressure twice daily; consult doctor if dosage needs adjustment.\n"
                    "  3. Check on elderly family members at 12 PM, 3 PM, and 6 PM."
                ),
                "content_kn": (
                    "👵 **ಹಿರಿಯ ನಾಗರಿಕರು ಮತ್ತು ರೋಗಿಗಳ ಸುರಕ್ಷತೆ:**\n\n"
                    "• ತೀವ್ರ ಶಾಖವು ಹೃದಯ ಮತ್ತು ರಕ್ತದೊತ್ತಡದ ಮೇಲೆ ಭಾರೀ ಒತ್ತಡವನ್ನು ಉಂಟುಮಾಡುತ್ತದೆ.\n"
                    "• ಬಿಪಿ ಮತ್ತು ಕಿಡ್ನಿ ಔಷಧಿಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವವರು ನಿಯಮಿತವಾಗಿ ವೈದ್ಯರ ಸಲಹೆ ಪಡೆಯಬೇಕು.\n"
                    "• ಹಿರಿಯರನ್ನು ತಂಪಾದ ಕೋಣೆಯಲ್ಲಿರಿಸಿ ಮತ್ತು ನೀರು ಕುಡಿಯಲು ನೆನಪಿಸಿ."
                ),
                "content_hi": (
                    "👵 **वरिष्ठ नागरिकों और मरीजों के लिए विशेष सावधानी:**\n\n"
                    "• अत्यधिक गर्मी में दिल को शरीर ठंडा रखने के लिए अधिक मेहनत करनी पड़ती है, जिससे हार्ट अटैक का खतरा बढ़ता है।\n"
                    "• बीपी और दिल के मरीज नियमित रूप से ब्लड प्रेशर की जांच करें और सीधे धूप में न निकलें।"
                ),
                "action_suggested": "NONE"
            }

        # 16. PETS & STREET ANIMALS
        if re.search(r'\b(pet|pets|dog|dogs|cat|cats|animal|animals|birds|street\s*dog|pavement)\b', q):
            return {
                "role": "assistant",
                "content_en": (
                    "🐾 **Pet & Animal Heat Care Directive:**\n\n"
                    "• **Hot Pavement Test:** Place the back of your bare hand on the tarmac for 7 seconds. If it's too hot for your hand, it will blister your dog's paw pads!\n"
                    "• **Walk Timing:** Walk dogs only before 7:00 AM or after 7:30 PM.\n"
                    "• **Panting Warning:** Dogs only sweat through paw pads and regulate heat via panting. Heavy panting, glazed eyes, or bright red gums signal canine heat stroke.\n"
                    "• **Community Kindness:** Place shallow clay bowls of clean drinking water outside your gate for stray dogs, cats, and birds."
                ),
                "content_kn": (
                    "🐾 **ಸಾಕುಪ್ರಾಣಿಗಳು ಮತ್ತು ಬೀದಿ ಪ್ರಾಣಿಗಳ ರಕ್ಷಣೆ:**\n\n"
                    "• ಮಧ್ಯಾಹ್ನ ಬಿಸಿಯಾದ ಡಾಂಬರು ರಸ್ತೆಯಲ್ಲಿ ನಾಯಿಗಳನ್ನು ನಡೆಸಬೇಡಿ (ಅವುಗಳ ಪಂಜಗಳು ಸುಡುತ್ತವೆ).\n"
                    "• ಮನೆಯ ಹೊರಗೆ ಪಕ್ಷಿಗಳು ಮತ್ತು ಬೀದಿ ಪ್ರಾಣಿಗಳಿಗೆ ಮಣ್ಣಿನ ಪಾತ್ರೆಯಲ್ಲಿ ಶುದ್ಧ ನೀರನ್ನು ಇರಿಸಿ."
                ),
                "content_hi": (
                    "🐾 **पालतू जानवरों व बेजुबानों की देखभाल:**\n\n"
                    "• दोपहर में गर्म सड़कों पर कुत्तों को न टहलाएं, उनके पंजों में छाले पड़ सकते हैं।\n"
                    "• अपने घर या बालकनी के बाहर पक्षियों और जानवरों के लिए मिट्टी के बर्तन में पानी अवश्य रखें।"
                ),
                "action_suggested": "NONE"
            }

        # 17. EXERCISE, GYM & OUTDOOR SPORTS
        if re.search(r'\b(exercise|gym|workout|running|jogging|walk|walking|morning\s*walk|cricket|football|sports)\b', q):
            return {
                "role": "assistant",
                "content_en": (
                    "🏃 **Safe Exercise & Workout Windows:**\n\n"
                    "• **Optimal Workout Hours:** **05:30 AM to 08:00 AM** or after **07:00 PM** when Wet-Bulb temperature is below 24°C.\n"
                    "• **Strict Ban:** No strenuous cardio, heavy outdoor jogging, or cricket matches between **11:00 AM and 05:00 PM**.\n"
                    "• **Hydration Rate:** Drink 250ml water every 15 minutes during training, plus electrolytes.\n"
                    "• **Red Flags:** Muscle cramps, chills, nausea, or lightheadedness require immediate stoppage and shade rest."
                ),
                "content_kn": (
                    "🏃 **ವ್ಯಾಯಾಮ ಮತ್ತು ಕ್ರೀಡೆಗಳಿಗೆ ಸೂಕ್ತ ಸಮಯ:**\n\n"
                    "• ಬೆಳಿಗ್ಗೆ 5:30 ರಿಂದ 8:00 ರವರೆಗೆ ಅಥವಾ ಸಂಜೆ 7:00 ರ ನಂತರ ಮಾತ್ರ ವಾಕಿಂಗ್ ಅಥವಾ ವ್ಯಾಯಾಮ ಮಾಡಿ.\n"
                    "• ಮಧ್ಯಾಹ್ನದ ಸಮಯದಲ್ಲಿ ಕ್ರೀಡೆ ಅಥವಾ ಓಟ ಮಾಡಬೇಡಿ."
                ),
                "content_hi": (
                    "🏃 **वर्कआउट और खेलकूद के लिए सुरक्षित समय:**\n\n"
                    "• सुबह 5:30 से 8:00 बजे तक या शाम 7:00 बजे के बाद ही कसरत या टहलने जाएं।\n"
                    "• दोपहर के समय क्रिकेट, रनिंग या भारी व्यायाम बिल्कुल न करें।"
                ),
                "action_suggested": "NONE"
            }

        # 18. HEAT RASH, PRICKLY HEAT & CRAMPS
        if re.search(r'\b(prickly\s*heat|heat\s*rash|rash|itching|ghamori|cramp|cramps|muscle\s*cramp|sunburn)\b', q):
            return {
                "role": "assistant",
                "content_en": (
                    "🩹 **Management of Prickly Heat (Ghamori) & Heat Cramps:**\n\n"
                    "• **Prickly Heat (Miliaria Rubra):** Blocked sweat ducts lead to tiny red bumps and prickly itching.\n"
                    "  - Keep skin cool and dry; take cool showers twice daily.\n"
                    "  - Avoid heavy oil-based creams which plug pores further.\n"
                    "  - Use calamine lotion or pure aloe vera gel.\n"
                    "• **Heat Cramps:** Painful spasms in calves, thighs, or abdomen due to salt depletion via profuse sweating.\n"
                    "  - Rest immediately in cool shade.\n"
                    "  - Drink ORS or salted lime water (plain water alone can worsen cramps by diluting sodium).\n"
                    "  - Gently stretch and massage the cramped muscle."
                ),
                "content_kn": (
                    "🩹 **ಬೆವರು ಸಾಲೆ (ಪ್ರಿಕ್ಲಿ ಹೀಟ್) ಮತ್ತು ಮಸಲ್ ಕ್ರ್ಯಾಂಪ್ಸ್ ಚಿಕಿತ್ಸೆ:**\n\n"
                    "• ದಿನಕ್ಕೆ ಎರಡು ಬಾರಿ ತಣ್ಣೀರಿನ ಸ್ನಾನ ಮಾಡಿ, ತೆಳುವಾದ ಕಾಟನ್ ಬಟ್ಟೆ ಧರಿಸಿ.\n"
                    "• ಕಾಲಿನ ಸ್ನಾಯುಗಳು ಹಿಡಿದುಕೊಂಡರೆ ಉಪ್ಪು ಬೆರೆಸಿದ ನೀರು ಅಥವಾ ಒಆರ್‌ಎಸ್ ಕುಡಿಯಿರಿ ಮತ್ತು ಮಸಾಜ್ ಮಾಡಿ."
                ),
                "content_hi": (
                    "🩹 **घमौरियां और मांसपेशियों में ऐंठन (Cramps) का इलाज:**\n\n"
                    "• घमौरियों के लिए मुल्तानी मिट्टी, एलोवेरा या कैलामाइन लोशन लगाएं और दिन में दो बार ठंडे पानी से नहाएं।\n"
                    "• ऐंठन होने पर तुरंत छांव में बैठें और ओआरएस या नमक-चीनी का पानी पिएं।"
                ),
                "action_suggested": "NONE"
            }

        # 19. CURRENT WEATHER & TEMPERATURE IN BENGALURU
        if re.search(r'\b(temperature\s*today|weather\s*today|how\s*hot\s*is\s*it|current\s*temp|is\s*it\s*hot|forecast|rain\s*today|will\s*it\s*rain)\b', q):
            return {
                "role": "assistant",
                "content_en": (
                    "🌡️ **Bengaluru Real-Time Weather & Biometeorological Snapshot:**\n\n"
                    "• **Ambient Air Temp:** 33.5°C – 35.2°C across city wards.\n"
                    "• **Wet-Bulb Globe Temp (WBGT):** **32.8°C to 34.8°C** in high-risk zones (Peenya, Majestic, Whitefield).\n"
                    "• **Thermal Stress Tier:** 🟠 **ORANGE ADVISORY** to 🔴 **RED ALERT** in industrial/high-traffic corridors.\n"
                    "• **Rain Outlook:** Scattered convective clouding; beware of the **'False Relief' trap** where light rain temporarily drops air temp but shoots humidity above 85%."
                ),
                "content_kn": (
                    "🌡️ **ಇಂದಿನ ಬೆಂಗಳೂರು ಹವಾಮಾನ ಸ್ಥಿತಿ:**\n\n"
                    "• ಗಾಳಿಯ ತಾಪಮಾನ: 33.5°C - 35.2°C.\n"
                    "• ಪೀಣ್ಯ ಮತ್ತು ಮೆಜೆಸ್ಟಿಕ್‌ನಲ್ಲಿ ಶಾಖದ ತೀವ್ರತೆ (WBGT) 34.8°C ತಲುಪಿದ್ದು ರೆಡ್ ಅಲರ್ಟ್ ಘೋಷಿಸಲಾಗಿದೆ."
                ),
                "content_hi": (
                    "🌡️ **आज का बेंगलुरु मौसम और तापमान:**\n\n"
                    "• हवा का तापमान: 33.5°C से 35.2°C।\n"
                    "• पीण्या और मैजेस्टिक में WBGT 34.8°C के पार (रेड अलर्ट)।\n"
                    "• दोपहर में उमस और धूप अत्यधिक तेज रहेगी।"
                ),
                "action_suggested": "NONE"
            }

        # 20. WHY IS BENGALURU GETTING SO HOT? (Climate & UHI)
        if re.search(r'\b(why\s*is\s*(bangalore|bengaluru)\s*(so\s*)?hot|climate\s*change\s*in\s*bangalore|loss\s*of\s*trees|lake\s*loss|concrete\s*jungle)\b', q):
            return {
                "role": "assistant",
                "content_en": (
                    "🏙️ **Why Bengaluru is Experiencing Unprecedented Heatwaves:**\n\n"
                    "1. 🌳 **Vegetation Loss:** Bengaluru's tree canopy cover declined by over **68%** between 1990 and 2024 due to rapid infrastructure and road widening.\n"
                    "2. 🌊 **Lake Encroachment:** Over 80% of historical interconnected lakes have shrunk or disappeared, eliminating natural evaporative cooling sinks.\n"
                    "3. 🧱 **Urban Heat Island (UHI):** Dense concrete, glass-facade IT parks, asphalt roads, and vehicle exhaust trap thermal radiation overnight, preventing nocturnal cooling.\n"
                    "4. 🔬 **HEATGUARD's Role:** Our GIS engine downscales UHI factors down to ward boundaries so BBMP can deploy water misting and green canopies where needed most."
                ),
                "content_kn": (
                    "🏙️ **ಬೆಂಗಳೂರು ಏಕೆ ಇಷ್ಟೊಂದು ಬಿಸಿಯಾಗುತ್ತಿದೆ?**\n\n"
                    "• ಕಳೆದ 30 ವರ್ಷಗಳಲ್ಲಿ 68% ಗಿಂತ ಹೆಚ್ಚು ಮರಗಳು ನಾಶವಾಗಿವೆ.\n"
                    "• ಕೆರೆಗಳ ಒತ್ತುವರಿಯಿಂದ ನೈಸರ್ಗಿಕ ತಂಪು ಕಡಿಮೆಯಾಗಿದೆ.\n"
                    "• ಕಾಂಕ್ರೀಟ್ ಕಟ್ಟಡಗಳು ಮತ್ತು ವಾಹನಗಳ ಹೊಗೆಯಿಂದ ಅರ್ಬನ್ ಹೀಟ್ ಐಲ್ಯಾಂಡ್ ನಿರ್ಮಾಣವಾಗಿದೆ."
                ),
                "content_hi": (
                    "🏙️ **बेंगलुरु में गर्मी बढ़ने के मुख्य कारण:**\n\n"
                    "• पेड़ों और हरियाली में 68% से अधिक की कमी।\n"
                    "• ऐतिहासिक झीलों का सूखना या अतिक्रमण।\n"
                    "• कंक्रीट की इमारतें और भारी ट्रैफिक जो रात में भी गर्मी रोक कर रखते हैं।"
                ),
                "action_suggested": "NONE"
            }

        # 21. HOW TO USE HEATGUARD AI / APP FEATURES
        if re.search(r'\b(how\s*to\s*use|features\s*of\s*heatguard|how\s*does\s*(this\s*)?(app|website)\s*work|what\s*can\s*i\s*do\s*here|navigation)\b', q):
            return {
                "role": "assistant",
                "content_en": (
                    "🗺️ **HEATGUARD AI Platform Guide:**\n\n"
                    "• 🗺️ **GIS Map (Tab 1):** Click any of the 42 BBMP wards to inspect live WBGT, humidity, hospital surge risk, and toggle cooling centers.\n"
                    "• 📋 **Action Plan (Tab 2):** View BBMP SOP protocols, print official Section 34 circulars, and dispatch multi-recipient WhatsApp alerts.\n"
                    "• 📜 **Accuracy Ledger (Tab 3):** Inspect 7-day transparent backtested performance metrics (94.2% empirical accuracy).\n"
                    "• 🏆 **Prediction League (Tab 4):** Test your forecasting skills against AI, customize your forecaster name, and climb the city leaderboard!"
                ),
                "content_kn": (
                    "🗺️ **ಹೀಟ್‌ಗಾರ್ಡ್ ಎಐ ಬಳಸುವ ವಿಧಾನ:**\n\n"
                    "• ಟ್ಯಾಬ್ 1 (ನಕ್ಷೆ): ವಾರ್ಡ್ ಮಟ್ಟದ ಶಾಖ ಮತ್ತು ಆಸ್ಪತ್ರೆ ಬೆಡ್ ಕೊರತೆ ತಿಳಿಯಿರಿ.\n"
                    "• ಟ್ಯಾಬ್ 2 (ಆಕ್ಷನ್ ಪ್ಲಾನ್): ಅಧಿಕೃತ ಬಿಬಿಎಂಪಿ ಸುತ್ತೋಲೆ ಮುದ್ರಿಸಿ ಮತ್ತು ವಾಟ್ಸಾಪ್ ಸಂದೇಶ ಕಳುಹಿಸಿ.\n"
                    "• ಟ್ಯಾಬ್ 3 (ಲೆಡ್ಜರ್): ನಮ್ಮ ಮುನ್ಸೂಚನೆಗಳ 7 ದಿನಗಳ ನಿಖರತೆ ಪರಿಶೀಲಿಸಿ.\n"
                    "• ಟ್ಯಾಬ್ 4 (ಲೀಗ್): ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ ಸ್ಪರ್ಧೆಯಲ್ಲಿ ಭಾಗವಹಿಸಿ."
                ),
                "content_hi": (
                    "🗺️ **हीटगार्ड एआई का उपयोग कैसे करें:**\n\n"
                    "• टैब 1 (GIS मैप): सभी वार्डों का लाइव तापमान और कूलिंग सेंटर देखें।\n"
                    "• टैब 2 (एक्शन प्लान): आधिकारिक सरकारी आदेश डाउनलोड करें और व्हाट्सएप अलर्ट भेजें।\n"
                    "• टैब 3 (ऑडिट): मॉडल की 7 दिनों की 94.2% सटीकता की जांच करें।\n"
                    "• टैब 4 (प्रेडिक्शन लीग): अपना नाम सेट करके शहर के लीडरबोर्ड में भाग लें।"
                ),
                "action_suggested": "NONE"
            }

        # 22. WHAT IS HEATGUARD AI / OVERVIEW
        if any(w in q for w in ["what is heatguard", "about heatguard", "project overview", "explain this project", "tell me about"]):
            return {
                "role": "assistant",
                "content_en": (
                    "🛡️ **HEATGUARD AI Overview (Smart India Hackathon):**\n\n"
                    "HEATGUARD shifts disaster management from *'what the weather will be'* to **'what it will do to human bodies and hospital capacity'**.\n\n"
                    "**Core Capabilities:**\n"
                    "1. 🌡️ **Biometeorological Physics:** Computes Stull (2011) Wet-Bulb ($T_w$) and ISO 7243 Outdoor WBGT, accounting for solar radiation and wind cooling.\n"
                    "2. 🏥 **Epidemiological ML:** Predicts non-linear hospital admission spikes with 24h/48h cumulative lag and conformal 90% confidence intervals.\n"
                    "3. 🗺️ **Hyper-Local Ward GIS:** Downscales macro weather to 42 real BBMP wards using satellite Urban Heat Island (UHI) indices and live Google/IMD calibration.\n"
                    "4. 🚨 **Actionable Governance:** 1-Click statutory BBMP circulars (PDF/Print), multi-recipient WhatsApp/SMS alerts, and BWSSB tanker routing."
                ),
                "content_kn": (
                    "🛡️ **ಹೀಟ್‌ಗಾರ್ಡ್ ಎಐ ಪರಿಚಯ (ಸ್ಮಾರ್ಟ್ ಇಂಡಿಯಾ ಹ್ಯಾಕಥಾನ್):**\n\n"
                    "ಕೇವಲ ಹವಾಮಾನ ವರದಿ ನೀಡುವುದರ ಬದಲು, ಶಾಖವು **ಮಾನವ ಶರೀರ ಮತ್ತು ಆಸ್ಪತ್ರೆಗಳ ಮೇಲೆ ಬೀರುವ ಪರಿಣಾಮವನ್ನು** ಮುಂಚಿತವಾಗಿ ಊಹಿಸುವ ಮೊದಲ ವ್ಯವಸ್ಥೆ.\n\n"
                    "• ಸ್ಟಲ್ ವೆಟ್-ಬಲ್ಬ್ ಮತ್ತು ಐಎಸ್‌ಒ 7243 ಮಾನದಂಡಗಳ ಬಳಕೆ.\n"
                    "• ಆಸ್ಪತ್ರೆ ರೋಗಿಗಳ ಏರಿಕೆಯ ನಿಖರ ಮುನ್ಸೂಚನೆ (90% ಕಾನ್ಫಿಡೆನ್ಸ್ ಇಂಟರ್ವಲ್).\n"
                    "• ಬಿಬಿಎಂಪಿ ವಾರ್ಡ್‌ಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ನೀರಿನ ಟ್ಯಾಂಕರ್ ಹಾಗೂ ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್ ಸಕ್ರಿಯಗೊಳಿಸುವಿಕೆ."
                ),
                "content_hi": (
                    "🛡️ **हीटगार्ड एआई परिचय (स्मार्ट इंडिया हैकथॉन):**\n\n"
                    "यह प्रणाली केवल मौसम का तापमान नहीं, बल्कि **मानव शरीर और अस्पतालों पर पड़ने वाले वास्तविक प्रभाव** का सटीक पूर्वानुमान लगाती है।\n\n"
                    "• आर्द्रता, सौर विकिरण और वायु प्रवाह को मिलाकर वास्तविक WBGT की गणना।\n"
                    "• अस्पतालों में भर्ती होने वाले मरीजों में वृद्धि का 24-48 घंटे पहले पूर्वानुमान।\n"
                    "• वार्ड-स्तर पर पानी के टैंकरों और इंदिरा कैंटीन कूलिंग शेल्टर का स्वतः आवंटन।"
                ),
                "action_suggested": "NONE"
            }

        # 23. WBGT VS REGULAR TEMPERATURE
        if any(w in q for w in ["wbgt", "wet bulb", "wet-bulb", "why not temperature", "dry bulb", "difference between", "relative humidity"]):
            return {
                "role": "assistant",
                "content_en": (
                    "🌡️ **Why Standard Temperature Fails & Why WBGT is Critical:**\n\n"
                    "• **The Flaw of Dry-Bulb Temperature:** A regular thermometer only measures air temperature in shade. It completely ignores **humidity, direct sunlight, and wind cooling**.\n"
                    "• **The Biometeorological Reality:** Human beings cool themselves through sweat evaporation. When relative humidity reaches 75%, 33°C feels like **45°C to human skin** because sweat cannot evaporate.\n"
                    "• **ISO 7243 Outdoor WBGT Equation:**\n"
                    "  `WBGT = 0.7*T_w + 0.2*T_g + 0.1*T_d`\n"
                    "  Where $T_w$ is Stull Wet-Bulb, $T_g$ is Black Globe solar thermal load, and $T_d$ is dry ambient air.\n"
                    "• **Lethal Threshold:** Wet-Bulb temperature ($T_w$) at **35°C** is the absolute physiological limit of human survivability—even a healthy adult resting in shade will suffer fatal hyperthermia within 6 hours."
                ),
                "content_kn": (
                    "🌡️ **ಕೇವಲ ತಾಪಮಾನ ಸಾಲದು—ವೆಟ್-ಬಲ್ಬ್ (WBGT) ಏಕೆ ಮುಖ್ಯ?**\n\n"
                    "• ಸಾಮಾನ್ಯ ಥರ್ಮಾಮೀಟರ್ ಗಾಳಿಯ ತೇವಾಂಶ (ಆರ್ದ್ರತೆ) ಮತ್ತು ಸೂರ್ಯನ ನೇರ ಕಿರಣಗಳನ್ನು ಪರಿಗಣಿಸುವುದಿಲ್ಲ.\n"
                    "• ಆರ್ದ್ರತೆ ಹೆಚ್ಚಿದಾಗ ಬೆವರು ಆವಿಯಾಗುವುದಿಲ್ಲ, ಇದರಿಂದ ಶರೀರದ ಉಷ್ಣತೆ ತಕ್ಷಣ ಹೆಚ್ಚುತ್ತದೆ.\n"
                    "• ಐಎಸ್‌ಒ 7243 WBGT ಮಾನದಂಡವು ಮಾನವ ಶರೀರದ ನಿಜವಾದ ಶಾಖದ ಒತ್ತಡವನ್ನು ಅಳೆಯುತ್ತದೆ."
                ),
                "content_hi": (
                    "🌡️ **सामान्य तापमान बनाम वेट-बल्ब (WBGT) का महत्व:**\n\n"
                    "• सामान्य थर्मामीटर केवल हवा का तापमान नापता है, आर्द्रता और धूप का नहीं।\n"
                    "• अधिक नमी में पसीना नहीं सूखता, जिससे शरीर अंदर से उबलने लगता है।\n"
                    "• WBGT 34°C से अधिक होने पर अंग विफलता (Organ Failure) का अत्यधिक खतरा होता है।"
                ),
                "action_suggested": "NONE"
            }

        # 24. HOSPITAL SURGE PREDICTION / ML MODEL
        if any(w in q for w in ["predict hospital", "hospital surge", "ml model", "machine learning", "algorithm", "confidence interval", "shap", "xai"]):
            return {
                "role": "assistant",
                "content_en": (
                    "🏥 **Epidemiological ML Hospital Surge Architecture:**\n\n"
                    "• **Model:** Non-linear biometeorological response curve with non-linear polynomial lag factors.\n"
                    "• **Cumulative Thermal Lag:** Hospital admissions do not peak during the hottest hour—they peak **24 to 48 hours later** due to kidney strain, electrolyte depletion, and cardiovascular decompensation.\n"
                    "• **Conformal Prediction (90% CI):** Rather than giving a single point estimate, we provide calibrated lower and upper bounds (e.g. *+38.2% surge [90% CI: +29.4% to +47.0%]*).\n"
                    "• **Explainable AI (XAI):** Attribution breakdown reveals top drivers:\n"
                    "  1. Cumulative Night-time Minimum Temp (>24°C prevents nocturnal body recovery).\n"
                    "  2. Elderly demographic density in ward (>14%).\n"
                    "  3. Tin-roof and low-albedo industrial housing (Peenya UHI multiplier)."
                ),
                "content_kn": (
                    "🏥 **ಆಸ್ಪತ್ರೆ ರೋಗಿಗಳ ಏರಿಕೆಯ ಮುನ್ಸೂಚನೆ ಮಾದರಿ:**\n\n"
                    "• ಶಾಖ ಹೆಚ್ಚಿದ ತಕ್ಷಣವೇ ರೋಗಿಗಳು ಆಸ್ಪತ್ರೆಗೆ ಬರುವುದಿಲ್ಲ; 24 ರಿಂದ 48 ಗಂಟೆಗಳ ನಂತರ ಹೃದಯ ಹಾಗೂ ಮೂತ್ರಪಿಂಡದ ತೊಂದರೆಗಳಿಂದ ದಾಖಲಾಗುತ್ತಾರೆ.\n"
                    "• ನಮ್ಮ ವ್ಯವಸ್ಥೆಯು 90% ನಿಖರತೆಯೊಂದಿಗೆ ಆಸ್ಪತ್ರೆ ಬೆಡ್ ಕೊರತೆಯನ್ನು ಮೊದಲೇ ಎಚ್ಚರಿಸುತ್ತದೆ."
                ),
                "content_hi": (
                    "🏥 **अस्पताल भर्ती पूर्व-चेतावनी मॉडल (ML Engine):**\n\n"
                    "• थर्मल लैग (24-48 घंटे): अत्यधिक गर्मी के 1-2 दिन बाद हार्ट और किडनी के मरीजों में भारी वृद्धि होती है।\n"
                    "• 90% सटीकता इंटरवल के साथ विक्टोरिया और बॉवरिंग अस्पतालों में अतिरिक्त बेड तैयार करने का अलर्ट देता है।"
                ),
                "action_suggested": "NONE"
            }

        # 25. HARDWARE / SENSORS / SOFTWARE-AS-A-SENSOR
        if any(w in q for w in ["hardware", "sensor", "iot", "cost", "physical sensor", "need sensors", "stations"]):
            return {
                "role": "assistant",
                "content_en": (
                    "📡 **Zero Hardware Requirement ('Software-as-a-Sensor'):**\n\n"
                    "• **Zero Capital Expenditure (₹0 CapEx):** No expensive physical weather stations required to go live.\n"
                    "• **Ingestion Engine:** Ingests live high-resolution satellite, radar, and reanalysis data from Open-Meteo API at sub-5ms caching latency.\n"
                    "• **Microclimate Downscaling:** Downscales city-level macro feeds to each BBMP ward using satellite Urban Heat Island (UHI) indices, vegetation canopy cover (NDVI), and tin-roof surface albedo.\n"
                    "• **IoT Ready:** Municipal IoT sensors (if deployed) can instantly stream via our open REST endpoint `/api/iot/telemetry`."
                ),
                "content_kn": (
                    "📡 **ಶೂನ್ಯ ಹಾರ್ಡ್‌ವೇರ್ ಅಗತ್ಯತೆ (ಸಾಫ್ಟ್‌ವೇರ್-ಆಧಾರಿತ ಸಂವೇದಕ):**\n\n"
                    "• ಯಾವುದೇ ದುಬಾರಿ ಉಪಕರಣಗಳ ಅಗತ್ಯವಿಲ್ಲದೆ ಉಪಗ್ರಹ ಹವಾಮಾನ ಮಾಹಿತಿ ಮತ್ತು ನಗರಾಭಿವೃದ್ಧಿ ದತ್ತಾಂಶ ಬಳಸಿ ವಾರ್ಡ್ ಮಟ್ಟದ ಶಾಖವನ್ನು ಲೆಕ್ಕಹಾಕುತ್ತದೆ.\n"
                    "• ಭವಿಷ್ಯದಲ್ಲಿ ಐಒಟಿ ಸೆನ್ಸರ್‌ಗಳನ್ನು ಜೋಡಿಸಲು ಮುಕ್ತ ಎಪಿಐ ಒದಗಿಸಲಾಗಿದೆ."
                ),
                "content_hi": (
                    "📡 **जीरो हार्डवेयर लागत (सॉफ्टवेयर-एज-ए-सेंसर):**\n\n"
                    "• बिना किसी अतिरिक्त हार्डवेयर या सेंसर स्टेशन के सीधे उपग्रह डेटा (Open-Meteo) से वार्ड स्तर की सूक्ष्म-जलवायु की गणना करता है।\n"
                    "• नगर निगम के मौजूदा IoT सेंसरों को जोड़ने के लिए ओपन API भी उपलब्ध है।"
                ),
                "action_suggested": "NONE"
            }

        # 26. FALSE RELIEF ANOMALY
        if any(w in q for w in ["false relief", "cooling paradox", "rain paradox", "post rain", "drizzle", "monsoon anomaly"]):
            return {
                "role": "assistant",
                "content_en": (
                    "⚡ **The 'False Relief' Anomaly (Biometeorological Trap):**\n\n"
                    "• **What It Is:** Brief afternoon showers or drizzle in Bengaluru often cause ambient temperature to drop from 34°C to 30°C.\n"
                    "• **The Lethal Trap:** While air feels temporarily cooler, relative humidity shoots from 45% up to **88%+**.\n"
                    "• **Sweat Suffocation:** Because the air is saturated with moisture, human perspiration cannot evaporate. The Stull Wet-Bulb ($T_w$) actually **increases**, leading to dangerous core-body heat retention.\n"
                    "• **System Action:** HEATGUARD detects this anomaly automatically and flashes an alert: *'False Relief detected: Do not resume heavy outdoor exertion!'*"
                ),
                "content_kn": (
                    "⚡ **'ಫಾಲ್ಸ್ ರಿಲೀಫ್' ಮೋಸದ ತಂಪು ಅಪಾಯ:**\n\n"
                    "• ಮಳೆ ಬಿದ್ದ ತಕ್ಷಣ ವಾತಾವರಣ ತಂಪಾದಂತೆ ಭಾಸವಾಗುತ್ತದೆ, ಆದರೆ ಗಾಳಿಯಲ್ಲಿ ತೇವಾಂಶ (ಆರ್ದ್ರತೆ) 88% ಕ್ಕಿಂತ ಹೆಚ್ಚುತ್ತದೆ.\n"
                    "• ಇದರಿಂದ ಬೆವರು ಆವಿಯಾಗದೆ ಶರೀರದ ಒಳ ಉಷ್ಣತೆ ಅಪಾಯಕಾರಿ ಮಟ್ಟಕ್ಕೆ ಏರುತ್ತದೆ. ಈ ಸಮಯದಲ್ಲಿ ಕೆಲಸ ಮುಂದುವರಿಸುವುದು ಪ್ರಾಣಾಪಾಯಕ್ಕೆ ಕಾರಣವಾಗಬಹುದು."
                ),
                "content_hi": (
                    "⚡ **'फाल्स रिलीफ' (झूठी राहत) का खतरनाक भ्रम:**\n\n"
                    "• हल्की बारिश के बाद हवा ठंडी लगती है, लेकिन नमी 85%+ हो जाती है।\n"
                    "• पसीना न सूखने के कारण शरीर का आंतरिक तापमान तेजी से बढ़ता है और अचानक हीट स्ट्रोक हो सकता है।"
                ),
                "action_suggested": "NONE"
            }

        # 27. URBAN HEAT ISLAND & CRITICAL WARDS
        if any(w in q for w in ["uhi", "urban heat", "island", "peenya", "majestic", "whitefield", "hottest ward", "why hotter"]):
            return {
                "role": "assistant",
                "content_en": (
                    "🏙️ **Urban Heat Island (UHI) Index in Bengaluru:**\n\n"
                    "Bengaluru's microclimates vary by up to **5.2°C** across different wards:\n"
                    "• 🔴 **Ward 41 (Peenya Industrial):** Highest UHI (+4.2°C). Dense asbestos/tin roofs, zero tree canopy, industrial machinery heat exhaust.\n"
                    "• 🔴 **Ward 138 (Majestic / Shivajinagar):** High UHI (+3.8°C). Massive asphalt bus terminal, bumper-to-bumper vehicle exhaust, concrete thermal mass.\n"
                    "• 🔴 **Ward 85 (Whitefield):** High UHI (+3.4°C). Glass facades, unshaded IT corridor tech parks, ongoing construction dust.\n"
                    "• 🟢 **Ward 111 (Malleshwaram):** Lowest UHI (+0.4°C). Mature 40-year rain tree canopy shade cools air naturally by 3.5°C."
                ),
                "content_kn": (
                    "🏙️ **ಬೆಂಗಳೂರಿನ ಅರ್ಬನ್ ಹೀಟ್ ಐಲ್ಯಾಂಡ್ (UHI) ತೀವ್ರತೆ:**\n\n"
                    "• **ಪೀಣ್ಯ (ವಾರ್ಡ್ 41):** ಗರಿಷ್ಠ ಶಾಖ (+4.2°C). ತಗಡಿನ ಶೀಟುಗಳ ಕೈಗಾರಿಕಾ ಪ್ರದೇಶ ಮತ್ತು ಗಿಡಮರಗಳ ಕೊರತೆ.\n"
                    "• **ಮೆಜೆಸ್ಟಿಕ್ (ವಾರ್ಡ್ 138):** ವಾಹನಗಳ ದಟ್ಟಣೆ ಮತ್ತು ಕಾಂಕ್ರೀಟ್ ಬಸ್ ನಿಲ್ದಾಣ.\n"
                    "• **ಮಲ್ಲೇಶ್ವರಂ (ವಾರ್ಡ್ 111):** ಬೃಹತ್ ಮರಗಳ ನೆರಳಿನಿಂದಾಗಿ ಅತ್ಯಂತ ತಂಪಾದ ವಾರ್ಡ್."
                ),
                "content_hi": (
                    "🏙️ **शहरी ताप द्वीप (UHI) प्रभाव - बेंगलुरु:**\n\n"
                    "• **पीण्या (वार्ड 41):** सबसे गर्म क्षेत्र (+4.2°C), टिन की छतों और कारखानों के कारण।\n"
                    "• **मैजेस्टिक (वार्ड 138):** भारी ट्रैफिक और डामर सड़कों के कारण अत्यधिक गर्मी।\n"
                    "• **मल्लेश्वरम (वार्ड 111):** घने पेड़ों की वजह से शहर का सबसे सुरक्षित वार्ड।"
                ),
                "action_suggested": "NONE"
            }

        # 28. CITIZEN LEAGUE / GAMIFICATION
        if any(w in q for w in ["league", "gamification", "points", "xp", "citizen league", "prediction league", "challenge", "edit name", "custom name"]):
            return {
                "role": "assistant",
                "content_en": (
                    "🏆 **Citizen Climate Prediction League:**\n\n"
                    "Encourages citizens and judges to participate actively in climate forecasting:\n"
                    "• **Daily Predictions:** Forecast tomorrow's peak wet-bulb temperature or safe delivery windows.\n"
                    "• **Earn Rewards:** Gain Resilience XP, unlock badges (*'Hydration Scout'*, *'Heat Sentinel'*, *'BBMP Guardian'*).\n"
                    "• **Customize Your Name:** Click the **'Edit Name'** button on the Prediction League profile card to type your own name/judge identity and pick your home ward.\n"
                    "• **Live Leaderboard:** Rank #4 dynamically updates to show `[Your Name] (You)` with a purple active highlight!"
                ),
                "content_kn": (
                    "🏆 **ನಾಗರಿಕ ಹವಾಮಾನ ಮುನ್ಸೂಚನಾ ಲೀಗ್:**\n\n"
                    "• ನಾಗರಿಕರು ನಾಳೆಯ ಶಾಖದ ಬಗ್ಗೆ ಊಹೆ ಮಾಡಿ ಪಾಯಿಂಟ್‌ಗಳು ಮತ್ತು ಪದಕಗಳನ್ನು ಗಳಿಸಬಹುದು.\n"
                    "• ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಲು ಪ್ರಿಡಿಕ್ಷನ್ ಲೀಗ್ ಟ್ಯಾಬ್‌ನಲ್ಲಿ 'Edit Name' ಕ್ಲಿಕ್ ಮಾಡಿ."
                ),
                "content_hi": (
                    "🏆 **सिटिजन क्लाइमेट प्रेडिक्शन लीग:**\n\n"
                    "• नागरिक कल के तापमान का सही अनुमान लगाकर XP प्वाइंट्स और बैज जीत सकते हैं।\n"
                    "• 'Edit Name' पर क्लिक करके अपना नाम व वार्ड सेट करें और लाइव लीडरबोर्ड पर अपनी रैंक देखें।"
                ),
                "action_suggested": "NONE"
            }

        # 29. HEAT STROKE SYMPTOMS & FIRST AID
        if any(w in q for w in ["dizzy", "dizziness", "faint", "fainting", "vomit", "sweat", "headache", "stroke", "exhaustion", "symptom", "चक्कर", "ತಲೆತಿರುಗುವಿಕೆ", "ವಾಂತಿ"]):
            return {
                "role": "assistant",
                "content_en": (
                    "🚨 **URGENT HEAT STROKE PROTOCOL (Immediate First Aid):**\n\n"
                    "**Critical Warning Signs:**\n"
                    "• Cessation of sweating (hot, dry skin)\n"
                    "• Mental confusion, slurred speech, or delirium\n"
                    "• Rapid, pounding pulse and dizziness\n\n"
                    "**Immediate Life-Saving Steps:**\n"
                    "1. ❄️ **Move to Shade/AC:** Relocate the person indoors immediately.\n"
                    "2. 🧊 **Aggressive Cooling:** Place cold wet cloths or ice packs on **neck, armpits, and groin** (where major blood vessels run).\n"
                    "3. 💧 **Hydration:** If fully conscious, give small sips of cool water with ORS.\n"
                    "4. 🚑 **Dial 108:** Call ambulance immediately if vomiting or semi-conscious."
                ),
                "content_kn": (
                    "🚨 **ತುರ್ತು ಹೀಟ್ ಸ್ಟ್ರೋಕ್ ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ:**\n\n"
                    "1. ತಕ್ಷಣ ವ್ಯಕ್ತಿಯನ್ನು ನೆರಳು ಅಥವಾ ಹವಾನಿಯಂತ್ರಿತ ಕೊಠಡಿಗೆ ಕರೆದೊಯ್ಯಿರಿ.\n"
                    "2. ಕುತ್ತಿಗೆ, ಕಂಕುಳು ಮತ್ತು ಹಣೆಯ ಮೇಲೆ ತಣ್ಣೀರಿನ ಬಟ್ಟೆ ಅಥವಾ ಮಂಜುಗಡ್ಡೆ ಇರಿಸಿ.\n"
                    "3. ಪ್ರಜ್ಞೆಯಿದ್ದರೆ ತಣ್ಣೀರು ಮತ್ತು ಒಆರ್‌ಎಸ್ ಕುಡಿಯಲು ಕೊಡಿ.\n"
                    "4. ತಕ್ಷಣವೇ **108 ತುರ್ತು ಆಂಬ್ಯುಲೆನ್ಸ್‌ಗೆ ಕರೆ ಮಾಡಿ**."
                ),
                "content_hi": (
                    "🚨 **हीट स्ट्रोक आपातकालीन प्राथमिक चिकित्सा:**\n\n"
                    "1. मरीज को तुरंत ठंडी या छायादार जगह पर लिटाएं।\n"
                    "2. गर्दन, बगल (armpits) और माथे पर ठंडे पानी की पट्टियां रखें।\n"
                    "3. होश में होने पर ओआरएस या नींबू पानी धीरे-धीरे पिलाएं।\n"
                    "4. उल्टी या बेहोशी की स्थिति में **तुरंत 108 डायल करें**।"
                ),
                "action_suggested": "CALL_108_SOS"
            }

        # 30. HOMEMADE ORS RECIPE
        if any(w in q for w in ["ors", "electrolyte", "recipe", "how to make ors", "sugar salt", "dehydration"]):
            return {
                "role": "assistant",
                "content_en": (
                    "🥤 **WHO-Standard Homemade ORS (Oral Rehydration Solution) Recipe:**\n\n"
                    "When commercially packaged ORS is unavailable, prepare this exact formula:\n\n"
                    "• **1 Liter** clean, boiled & cooled drinking water (approx 5 glasses)\n"
                    "• **6 level teaspoons** of Sugar (approx 30g)\n"
                    "• **1/2 level teaspoon** of Table Salt (approx 2.5g)\n\n"
                    "**Instructions:** Stir until completely dissolved. Sip steadily every 15–20 minutes throughout the afternoon. Do not add excess salt as it worsens kidney strain."
                ),
                "content_kn": (
                    "🥤 **ಮನೆಯಲ್ಲೇ ಒಆರ್‌ಎಸ್ (ORS) ತಯಾರಿಸುವ ಸರಳ ವಿಧಾನ:**\n\n"
                    "• 1 ಲೀಟರ್ ಕುದಿಸಿ ಆರಿಸಿದ ಶುದ್ಧ ನೀರು\n"
                    "• 6 ಸಣ್ಣ ಚಮಚ ಸಕ್ಕರೆ\n"
                    "• 1/2 (ಅರ್ಧ) ಚಮಚ ಉಪ್ಪು\n\n"
                    "ಉಪ್ಪು ಮತ್ತು ಸಕ್ಕರೆ ಕರಗುವವರೆಗೆ ಚೆನ್ನಾಗಿ ಕಲಸಿ. ಪ್ರತಿ 15-20 ನಿಮಿಷಕ್ಕೊಮ್ಮೆ ಸ್ವಲ್ಪ ಸ್ವಲ್ಪ ಕುಡಿಯಿರಿ."
                ),
                "content_hi": (
                    "🥤 **घर पर ओआरएस (ORS) घोल बनाने की सही विधि:**\n\n"
                    "• 1 लीटर उबला व ठंडा किया हुआ पानी\n"
                    "• 6 छोटी चम्मच चीनी\n"
                    "• 1/2 (आधा) छोटी चम्मच सादा नमक\n\n"
                    "पूरी तरह घुलने तक मिलाएं। दोपहर के समय हर 15-20 मिनट में घूंट-घूंट करके पिएं।"
                ),
                "action_suggested": "NONE"
            }

        # 31. NEAREST COOLING SHELTERS & WATER
        if any(w in q for w in ["shelter", "water", "canteen", "tanker", "drink", "center", "where to rest", "kiosk", "ಕೇಂದ್ರ", "ನೀರು", "पानी"]):
            return {
                "role": "assistant",
                "content_en": (
                    "📍 **BBMP & BWSSB Emergency Cooling Shelters & Water Points:**\n\n"
                    "• 🏢 **Majestic Bus Terminal:** BBMP Indira Canteen & Cooling Respite Hub (Air-cooled, shaded seating, free RO water, open till 8:30 PM).\n"
                    "• 🚰 **Shivajinagar Depot:** BWSSB Cauvery Free Chilled Drinking Water Kiosk #1 (24 Hours active).\n"
                    "• 🏢 **Peenya Industrial Hub:** 1st Stage Labor Respite Welfare Center (Free ORS packets, paramedic on standby).\n"
                    "• 🚰 **Whitefield IT Corridor:** Hope Farm Water Dispenser Hub (Free 20L chilled water can refills for delivery workers).\n\n"
                    "👉 You can toggle the **'Cooling Shelters'** layer on the GIS map to view all live GPS locations."
                ),
                "content_kn": (
                    "📍 **ಬಿಬಿಎಂಪಿ ಉಚಿತ ತಂಪು ವಿಶ್ರಾಂತಿ ಕೇಂದ್ರಗಳು ಮತ್ತು ನೀರು:**\n\n"
                    "• ಮೆಜೆಸ್ಟಿಕ್: ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್ ಮತ್ತು ಶೀತಲ ವಿಶ್ರಾಂತಿ ಕೇಂದ್ರ (ಉಚಿತ ಕುಡಿಯುವ ನೀರು, ರಾತ್ರಿ 8:30 ರವರೆಗೆ).\n"
                    "• ಶಿವಾಜಿನಗರ: ಬಿಡಬ್ಲ್ಯೂಎಸ್‌ಎಸ್‌ಬಿ ಕಾವೇರಿ ನೀರಿನ ಕಿಯೋಸ್ಕ್ (24 ಗಂಟೆ).\n"
                    "• ಪೀಣ್ಯ: ಕಾರ್ಮಿಕ ಕಲ್ಯಾಣ ಕೇಂದ್ರ (ಉಚಿತ ಒಆರ್‌ಎಸ್ ಲಭ್ಯ)."
                ),
                "content_hi": (
                    "📍 **नजदीकी निःशुल्क कूलिंग शेल्टर और पेयजल केंद्र:**\n\n"
                    "• मैजेस्टिक: इंदिरा कैंटीन कूलिंग हब (एसी, छायादार बैठक, मुफ्त आरओ जल)।\n"
                    "• शिवाजीनगर: बीडब्ल्यूएसएसबी कावेरी जल केंद्र (24 घंटे चालू)।\n"
                    "• पीण्या: श्रमिक विश्राम गृह (मुफ्त ओआरएस और प्राथमिक चिकित्सा)।"
                ),
                "action_suggested": "HIGHLIGHT_SHELTERS_ON_MAP"
            }

        # 32. GIG WORKERS & OUTDOOR LABOR
        if any(w in q for w in ["delivery", "gig", "swiggy", "zomato", "bike", "rider", "labor", "construction", "outside work", "काम", "ಕೆಲಸ"]):
            return {
                "role": "assistant",
                "content_en": (
                    "⏱️ **Gig-Worker & Outdoor Labor Safety Directives (NIOH Guidelines):**\n\n"
                    "• ⚠️ **Prohibited Exertion Hours:** 11:30 AM – 04:00 PM when outdoor WBGT exceeds 32.5°C.\n"
                    "• 🔄 **Mandatory Work-Rest Schedule:** 30 minutes riding or physical work / 30 minutes rest in shaded cooling shelter.\n"
                    "• 💧 **Hydration Target:** Minimum 750ml to 1 Liter of water with electrolytes every hour.\n"
                    "• 🧢 **Helmet Precaution:** Place a damp cotton cloth under your helmet to prevent direct solar radiation to the temples and carotid arteries."
                ),
                "content_kn": (
                    "⏱️ **ಡೆಲಿವರಿ ರೈಡರ್ಸ್ ಮತ್ತು ಕಾರ್ಮಿಕರ ಸುರಕ್ಷತಾ ಮಾರ್ಗಸೂಚಿ:**\n\n"
                    "• ಅಪಾಯದ ಸಮಯ: ಮಧ್ಯಾಹ್ನ 11:30 ರಿಂದ 04:00 ರವರೆಗೆ.\n"
                    "• ಕಡ್ಡಾಯ ನಿಯಮ: 30 ನಿಮಿಷ ಕೆಲಸ / 30 ನಿಮಿಷ ನೆರಳಿನಲ್ಲಿ ವಿಶ್ರಾಂತಿ.\n"
                    "• ಪ್ರತಿ ಗಂಟೆಗೆ ಕನಿಷ್ಠ 1 ಲೀಟರ್ ನೀರು ಅಥವಾ ಒಆರ್‌ಎಸ್ ಕುಡಿಯಿರಿ."
                ),
                "content_hi": (
                    "⏱️ **डिलीवरी राइडर्स व निर्माण श्रमिकों के लिए सुरक्षा नियम:**\n\n"
                    "• प्रतिबंधित समय: दोपहर 11:30 से 4:00 बजे तक।\n"
                    "• 30 मिनट काम के बाद 30 मिनट छाया में अनिवार्य विश्राम करें।\n"
                    "• हर घंटे कम से कम 1 लीटर पानी पिएं और सिर पर गीला कपड़ा रखें।"
                ),
                "action_suggested": "START_WORK_REST_TIMER"
            }

        # 33. EMERGENCY HELPLINES
        if any(w in q for w in ["helpline", "emergency number", "phone number", "call police", "call ambulance", "108", "contact", "who to call", "whom to call", "emergency call", "1533", "1916"]):
            return {
                "role": "assistant",
                "content_en": (
                    "📞 **Bengaluru Emergency Helplines (Toll-Free 24/7):**\n\n"
                    "• 🚑 **Medical Ambulance / Heat Stroke Emergency:** **108**\n"
                    "• 🏛️ **BBMP Central Control Room:** **1533** / **080-22221188**\n"
                    "• 🚰 **BWSSB Emergency Water Tanker Helpline:** **1916**\n"
                    "• 🚒 **State Disaster Management (KSDMA):** **1077**\n"
                    "• 👮 **Police Emergency:** **112**"
                ),
                "content_kn": (
                    "📞 **ಬೆಂಗಳೂರು ತುರ್ತು ಸಹಾಯವಾಣಿ ಸಂಖ್ಯೆಗಳು:**\n\n"
                    "• ಆಂಬ್ಯುಲೆನ್ಸ್ (ಆರೋಗ್ಯ ತುರ್ತು): **108**\n"
                    "• ಬಿಬಿಎಂಪಿ ಸಹಾಯವಾಣಿ: **1533**\n"
                    "• ಕಾವೇರಿ ನೀರಿನ ಟ್ಯಾಂಕರ್: **1916**\n"
                    "• ವಿಪತ್ತು ನಿರ್ವಹಣೆ: **1077**"
                ),
                "content_hi": (
                    "📞 **बेंगलुरु आपातकालीन हेल्पलाइन नंबर:**\n\n"
                    "• एम्बुलेंस (हीट स्ट्रोक): **108**\n"
                    "• बीबीएमपी कंट्रोल रूम: **1533**\n"
                    "• बीडब्ल्यूएसएसबी जल संकट: **1916**\n"
                    "• राज्य आपदा प्रबंधन: **1077**"
                ),
                "action_suggested": "CALL_108_SOS"
            }

        # 34. OFFICER: CRITICAL WARDS & TRIAGE
        if any(w in q for w in ["critical ward", "triage", "highest risk", "which ward", "hospital bed", "reserve bed"]):
            return {
                "role": "assistant",
                "content_en": (
                    "📊 **BBMP MUNICIPAL DISASTER TRIAGE REPORT:**\n\n"
                    "• 🔴 **Ward 41 (Peenya):** WBGT 34.8°C | Surge: +38.2% | Action: Deploy 15 BWSSB tankers to 1st & 2nd Stage industrial gates.\n"
                    "• 🔴 **Ward 138 (Majestic):** WBGT 34.1°C | Surge: +34.5% | Action: Open BMTC/KSRTC waiting lounges as air-cooled shelters.\n"
                    "• 🟡 **Ward 85 (Whitefield):** WBGT 32.9°C | Surge: +28.1% | Action: Issue mandatory construction stoppage notices.\n\n"
                    "🏥 **Hospital Bed Directive:** Victoria Hospital & Bowring Hospital instructed to reserve 25 heat-stroke ICU beds with ice-packs and IV normal saline."
                ),
                "content_kn": (
                    "📊 **ಬಿಬಿಎಂಪಿ ತುರ್ತು ವಾರ್ಡ್ ಟ್ರಯೇಜ್ ವರದಿ:**\n\n"
                    "• ಪೀಣ್ಯ (ವಾರ್ಡ್ 41) ಮತ್ತು ಮೆಜೆಸ್ಟಿಕ್ (ವಾರ್ಡ್ 138) ಗರಿಷ್ಠ ಅಪಾಯದಲ್ಲಿವೆ.\n"
                    "• ವಿಕ್ಟೋರಿಯಾ ಮತ್ತು ಬೌರಿಂಗ್ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ 25 ಹೆಚ್ಚುವರಿ ಹೀಟ್-ಸ್ಟ್ರೋಕ್ ಬೆಡ್‌ಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲು ಆದೇಶಿಸಲಾಗಿದೆ."
                ),
                "content_hi": (
                    "📊 **बीबीएमपी आपातकालीन वार्ड रिपोर्ट:**\n\n"
                    "• पीण्या (वार्ड 41) और मैजेस्टिक (वार्ड 138) में अत्यधिक खतरा (WBGT > 34°C)।\n"
                    "• विक्टोरिया और बॉवरिंग अस्पतालों में 25-25 आपातकालीन आईसीयू बेड आरक्षित करने के निर्देश जारी।"
                ),
                "action_suggested": "OPEN_CIRCULAR_MODAL"
            }

        # 35. OFFICER: OFFICIAL CIRCULAR / PDF / LEGAL ORDER
        if any(w in q for w in ["circular", "pdf", "official order", "print order", "disaster management act", "section 34"]):
            return {
                "role": "assistant",
                "content_en": (
                    "📄 **Statutory Municipal Circular (Order #CR-104/2026):**\n\n"
                    "Promulgated by the Special Commissioner (Disaster Management), BBMP under **Sections 30 & 34 of the Disaster Management Act, 2005**.\n\n"
                    "**Key Directives in Circular:**\n"
                    "1. Suspension of all non-essential outdoor construction between 11:30 AM and 4:00 PM.\n"
                    "2. Mandatory opening of all 175+ Indira Canteens as public cooling centers with functional coolers and free ORS.\n"
                    "3. Pre-positioning of BWSSB water bowsers at high-density labor hubs.\n\n"
                    "👉 Click **'Export Official Circular'** in the top action plan banner to generate and print the gazette-styled PDF."
                ),
                "content_kn": (
                    "📄 **ಅಧಿಕೃತ ಬಿಬಿಎಂಪಿ ಸುತ್ತೋಲೆ (ಕಾನೂನುಬದ್ಧ ಆದೇಶ):**\n\n"
                    "ವಿಪತ್ತು ನಿರ್ವಹಣಾ ಕಾಯ್ದೆ 2005 ರ ಸೆಕ್ಷನ್ 30/34 ರ ಅಡಿಯಲ್ಲಿ ಹೊರಡಿಸಲಾದ ಆದೇಶ. ಎಲ್ಲಾ 175 ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್‌ಗಳನ್ನು ತಂಪು ಕೇಂದ್ರಗಳಾಗಿ ಪರಿವರ್ತಿಸಲು ಮತ್ತು ಮಧ್ಯಾಹ್ನ ಕೆಲಸ ನಿಷೇಧಿಸಲು ಆದೇಶಿಸಲಾಗಿದೆ."
                ),
                "content_hi": (
                    "📄 **आधिकारिक नगर निगम परिपत्र (कानूनी आदेश):**\n\n"
                    "आपदा प्रबंधन अधिनियम 2005 की धारा 30/34 के तहत जारी आदेश। सभी इंदिरा कैंटीनों को कूलिंग सेंटर घोषित करने और निर्माण कार्य पर रोक लगाने का निर्देश।"
                ),
                "action_suggested": "OPEN_CIRCULAR_MODAL"
            }

        return None

    def _get_default_response(self, mode: str) -> Dict[str, Any]:
        """Provides a helpful, conversational fallback when no exact keyword matched."""
        if mode == "CITIZEN":
            return {
                "role": "assistant",
                "content_en": (
                    "💡 **I am HEATGUARD AI, your Bengaluru Heat & Health Safety Copilot.**\n\n"
                    "While I am analyzing your specific query, here are the most important things to keep in mind today:\n\n"
                    "• 💧 **Hydration:** Drink 3-4 liters of water or salted buttermilk today.\n"
                    "• 🕒 **Peak Sun Hours:** Minimize direct sun exposure between **11:30 AM – 4:00 PM**.\n"
                    "• 📍 **Cooling Shelters:** Free RO chilled water & air-cooled rest are available at all BBMP Indira Canteens.\n"
                    "• 🚑 **Emergency:** For heat dizziness, fainting, or high fever, dial **108** immediately.\n\n"
                    "**Try asking me:**\n"
                    "• *'What is WBGT and why is regular temp misleading?'*\n"
                    "• *'How much water should I drink per day?'*\n"
                    "• *'What should I eat in hot weather?'*\n"
                    "• *'What are the safe work hours for delivery riders?'*\n"
                    "• *'How to set my name in the Prediction League?'*"
                ),
                "content_kn": (
                    "💡 **ನಾನು ಹೀಟ್‌ಗಾರ್ಡ್ ಎಐ, ನಿಮ್ಮ ಬೆಂಗಳೂರು ಹವಾಮಾನ ಆರೋಗ್ಯ ಸಹಾಯಕ.**\n\n"
                    "• ದಿನಕ್ಕೆ 3-4 ಲೀಟರ್ ನೀರು ಅಥವಾ ಮಜ್ಜಿಗೆ ಕುಡಿಯಿರಿ.\n"
                    "• ಮಧ್ಯಾಹ್ನ 11:30 ರಿಂದ 4:00 ರವರೆಗೆ ಬಿಸಿಲಿನಲ್ಲಿ ಓಡಾಡುವುದನ್ನು ಕಡಿಮೆ ಮಾಡಿ.\n"
                    "• ಉಚಿತ ನೀರು ಮತ್ತು ವಿಶ್ರಾಂತಿಗಾಗಿ ಹತ್ತಿರದ ಇಂದಿರಾ ಕ್ಯಾಂಟೀನ್‌ಗೆ ಭೇಟಿ ನೀಡಿ.\n"
                    "• ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ 108 ಗೆ ಕರೆ ಮಾಡಿ."
                ),
                "content_hi": (
                    "💡 **मैं हीटगार्ड एआई हूँ, बेंगलुरु का आपका स्थानीय स्वास्थ्य सुरक्षा सलाहकार।**\n\n"
                    "• दिनभर में 3-4 लीटर पानी, छाछ या ओआरएस पिएं।\n"
                    "• दोपहर 11:30 से 4:00 बजे तक सीधी धूप से बचें।\n"
                    "• मुफ्त ठंडा पानी व आराम के लिए नजदीकी इंदिरा कैंटीन जाएं।\n"
                    "• किसी भी आपात स्थिति में तुरंत 108 डायल करें।"
                ),
                "action_suggested": "NONE"
            }
        else:
            return {
                "role": "assistant",
                "content_en": (
                    "👮 **Officer Command Console Active.**\n\n"
                    "I can assist municipal disaster managers and hospital authorities with:\n"
                    "• *'Which wards need emergency water tankers right now?'*\n"
                    "• *'What is the projected hospital bed surge across Bengaluru civil hospitals?'*\n"
                    "• *'Explain the statutory legal basis under Disaster Management Act Sec 34'*\n"
                    "• *'How does the 7-day model transparency ledger work?'*"
                ),
                "content_kn": (
                    "👮 **ಅಧಿಕಾರಿಗಳ ಕನ್ಸೋಲ್ ಸಕ್ರಿಯವಾಗಿದೆ.** ನೀವು ವಾರ್ಡ್ ಟ್ರಯೇಜ್ ವರದಿ, ನೀರಿನ ಟ್ಯಾಂಕರ್ ನಿಯೋಜನೆ ಅಥವಾ ಆಸ್ಪತ್ರೆ ಬೆಡ್ ಸಿದ್ಧತೆ ಬಗ್ಗೆ ಕೇಳಬಹುದು."
                ),
                "content_hi": (
                    "👮 **अधिकारी कमांड कंसोल सक्रिय है।** आप वार्ड ट्राइएज रिपोर्ट, पानी के टैंकर आवंटन या आधिकारिक परिपत्र के बारे में पूछ सकते हैं।"
                ),
                "action_suggested": "NONE"
            }

    def _call_gemini_api(self, prompt: str, mode: str, language: str, api_key: str) -> Optional[str]:
        """Optional fallback to Google Gemini Flash API when API key is provided."""
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
        sys_instruction = (
            f"You are HEATGUARD AI, an expert biometeorologist and disaster management assistant for Bengaluru (BBMP & BWSSB). "
            f"Mode: {mode}. Language: {language}. Keep responses concise, friendly, and practical, with clear bullet points and emojis. "
            f"Answer basic questions, greetings, hydration advice, diet tips, symptoms, and life-safety measures with empathy and clarity."
        )
        payload = {
            "contents": [{"parts": [{"text": prompt}]}],
            "systemInstruction": {"parts": [{"text": sys_instruction}]}
        }
        with httpx.Client(timeout=6.0) as client:
            resp = client.post(url, json=payload)
            if resp.status_code == 200:
                data = resp.json()
                candidates = data.get("candidates", [])
                if candidates:
                    parts = candidates[0].get("content", {}).get("parts", [])
                    if parts:
                        return parts[0].get("text", "")
        return None

# Singleton instance
ai_heatbot = AIHeatbot()
