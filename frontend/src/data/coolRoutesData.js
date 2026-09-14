// Pre-calculated Metropolitan Driver & Gig-Worker Heat Respite Corridors
// Compares unshaded direct asphalt routes against shaded canopy routes with water kiosks.

export const driverCorridors = [
  {
    id: "majestic-indiranagar",
    title: "Majestic Interchange → Indiranagar 100ft Road",
    title_kn: "ಮೆಜೆಸ್ಟಿಕ್ ಬಸ್ ನಿಲ್ದಾಣ → ಇಂದಿರಾನಗರ 100 ಅಡಿ ರಸ್ತೆ",
    title_hi: "मैजेस्टिक बस स्टैंड → इंदिरानगर 100 फीट रोड",
    zone: "Central - East Delivery Artery",
    distance_km: "7.2 km",
    direct_route: {
      name: "Direct Route (MG Road Asphalt Corridor)",
      description: "Direct concrete expressway with high vehicle exhaust and zero tree canopy.",
      surface_temp_c: 37.4,
      wbgt_c: 34.2,
      canopy_shade_pct: 15,
      water_stops_count: 0,
      duration_mins: 20,
      heat_risk: "CRITICAL",
      coordinates: [
        [12.9775, 77.5720], // Majestic
        [12.9750, 77.5850], // Mysore Bank
        [12.9740, 77.5980], // Corporation / Kasturba
        [12.9735, 77.6080], // Mayo Hall
        [12.9720, 77.6200], // Trinity Circle
        [12.9710, 77.6350], // Indiranagar 100ft
        [12.9680, 77.6410]  // CMH Road
      ]
    },
    cool_route: {
      name: "Recommended Cool Respite Route (Cubbon & Ulsoor Lake Boulevard)",
      description: "Shaded canopy drive through Cubbon Park, Vidhana Soudha avenue, and Ulsoor lake breeze.",
      surface_temp_c: 34.1,
      wbgt_c: 31.2,
      canopy_shade_pct: 72,
      water_stops_count: 3,
      duration_mins: 23,
      heat_risk: "MODERATE",
      temp_savings_c: -3.3,
      wbgt_savings_c: -3.0,
      coordinates: [
        [12.9775, 77.5720], // Majestic
        [12.9800, 77.5820], // Seshadri Road
        [12.9815, 77.5920], // Cubbon Park Shaded Loop
        [12.9790, 77.6050], // Vidhana Soudha / High Court Trees
        [12.9810, 77.6180], // Ulsoor Lake North Promenade
        [12.9750, 77.6320], // HAL 2nd Stage Tree Avenue
        [12.9680, 77.6410]  // CMH Road
      ],
      water_stops: [
        { name: "Cubbon Park Kiosk", lat: 12.9810, lon: 77.5930, desc: "Chilled BWSSB RO Tap" },
        { name: "Ulsoor Lake Water Post", lat: 12.9805, lon: 77.6185, desc: "Free Potable Water Kiosk" },
        { name: "Indira Canteen Indiranagar", lat: 12.9740, lon: 77.6330, desc: "Air-Cooled Respite Hall" }
      ]
    }
  },
  {
    id: "peenya-yeshwanthpur",
    title: "Peenya Industrial Area → Yeshwanthpur APMC",
    title_kn: "ಪೀಣ್ಯ ಕೈಗಾರಿಕಾ ಪ್ರದೇಶ → ಯಶವಂತಪುರ ಎಪಿಎಂಸಿ",
    title_hi: "पीण्या इंडस्ट्रियल एरिया → यशवंतपुर एपीएमसी",
    zone: "North-West Industrial & Freight Belt",
    distance_km: "5.6 km",
    direct_route: {
      name: "Direct Route (Tumkur Highway Concrete Flyover)",
      description: "Heavy freight corridor with dark asphalt heat entrapment and no shade.",
      surface_temp_c: 38.8,
      wbgt_c: 35.1,
      canopy_shade_pct: 8,
      water_stops_count: 0,
      duration_mins: 15,
      heat_risk: "EXTREME_DANGER",
      coordinates: [
        [13.0310, 77.5140], // Peenya 1st Stage
        [13.0280, 77.5250], // Jalahalli Cross
        [13.0240, 77.5380], // Dasarahalli / Goraguntepalya
        [13.0200, 77.5480], // Yeshwanthpur Flyover
        [13.0180, 77.5550]  // APMC Market
      ]
    },
    cool_route: {
      name: "Recommended Cool Respite Route (Jalahalli Green Lane)",
      description: "Dense mature neem tree canopy corridors with industrial cool post access.",
      surface_temp_c: 35.4,
      wbgt_c: 32.0,
      canopy_shade_pct: 65,
      water_stops_count: 2,
      duration_mins: 18,
      heat_risk: "MODERATE",
      temp_savings_c: -3.4,
      wbgt_savings_c: -3.1,
      coordinates: [
        [13.0310, 77.5140], // Peenya
        [13.0350, 77.5260], // Jalahalli Air Force Shaded Avenue
        [13.0320, 77.5390], // BEL Shaded Roadway
        [13.0230, 77.5480], // Yeshwanthpur West Shaded Lane
        [13.0180, 77.5550]  // APMC Market
      ],
      water_stops: [
        { name: "Peenya Labor Water Bowser", lat: 13.0335, lon: 77.5250, desc: "10,000L Chilled Water Post" },
        { name: "Yeshwanthpur Metro Dispenser", lat: 13.0225, lon: 77.5490, desc: "Free ORS & Chilled Water" }
      ]
    }
  },
  {
    id: "koramangala-hsr",
    title: "Koramangala 80ft Rd → HSR Layout & Bellandur",
    title_kn: "ಕೋರಮಂಗಲ 80 ಅಡಿ ರಸ್ತೆ → ಎಚ್‌ಎಸ್‌ಆರ್ ಲೇಔಟ್ ಮತ್ತು ಬೆಳ್ಳಂದೂರು",
    title_hi: "कोरमंगला 80 फीट रोड → एचएसआर लेआउट व बेल्लंदूर",
    zone: "South-East Tech Corridor",
    distance_km: "6.2 km",
    direct_route: {
      name: "Direct Route (Hosur Highway & Silk Board Flyover)",
      description: "Severe traffic gridlock on open asphalt with intense engine heat plumes.",
      surface_temp_c: 37.0,
      wbgt_c: 33.8,
      canopy_shade_pct: 12,
      water_stops_count: 0,
      duration_mins: 18,
      heat_risk: "CRITICAL",
      coordinates: [
        [12.9340, 77.6250], // Koramangala
        [12.9250, 77.6240], // St. John's
        [12.9170, 77.6230], // Silk Board Junction
        [12.9140, 77.6350], // HSR Ring Road
        [12.9120, 77.6450]  // HSR Sector 1
      ]
    },
    cool_route: {
      name: "Recommended Cool Respite Route (Madiwala Lake Breeze Avenue)",
      description: "Lakeside cooling buffer with continuous park trees and public misting.",
      surface_temp_c: 34.3,
      wbgt_c: 31.1,
      canopy_shade_pct: 68,
      water_stops_count: 3,
      duration_mins: 21,
      heat_risk: "MODERATE",
      temp_savings_c: -2.7,
      wbgt_savings_c: -2.7,
      coordinates: [
        [12.9340, 77.6250], // Koramangala
        [12.9280, 77.6180], // Madiwala Lake West Shaded Loop
        [12.9200, 77.6170], // Lake Park Promenade
        [12.9150, 77.6290], // HSR 5th Main Tree Boulevard
        [12.9120, 77.6450]  // HSR Sector 1
      ],
      water_stops: [
        { name: "Koramangala Indira Canteen", lat: 12.9345, lon: 77.6210, desc: "Air-Cooler Hall" },
        { name: "Madiwala Lake Water Post", lat: 12.9220, lon: 77.6175, desc: "BWSSB Filtered Water" },
        { name: "HSR BDA Complex Post", lat: 12.9135, lon: 77.6360, desc: "Free Electrolyte Water" }
      ]
    }
  },
  {
    id: "hebbal-shivajinagar",
    title: "Hebbal Flyover → Shivajinagar Commercial Quarters",
    title_kn: "ಹೆಬ್ಬಾಳ ಮೇಲ್ಸೇತುವೆ → ಶಿವಾಜಿನಗರ ವಾಣಿಜ್ಯ ಪ್ರದೇಶ",
    title_hi: "हेब्बाल फ्लाईओवर → शिवाजीनगर कमर्शियल एरिया",
    zone: "North - Central Gateway",
    distance_km: "7.8 km",
    direct_route: {
      name: "Direct Route (Bellary Road Unshaded Highway)",
      description: "Elevated concrete viaduct with extreme solar exposure and vehicle exhaust.",
      surface_temp_c: 37.6,
      wbgt_c: 34.4,
      canopy_shade_pct: 14,
      water_stops_count: 0,
      duration_mins: 22,
      heat_risk: "CRITICAL",
      coordinates: [
        [13.0380, 77.5920], // Hebbal
        [13.0250, 77.5910], // Ganganagar
        [13.0100, 77.5900], // Mekhri Circle
        [12.9950, 77.5920], // Cantonment
        [12.9840, 77.6010]  // Shivajinagar
      ]
    },
    cool_route: {
      name: "Recommended Cool Respite Route (Palace Grounds Green Canopy)",
      description: "Expansive canopy trees along Jayamahal and Palace Grounds with lower radiant load.",
      surface_temp_c: 34.6,
      wbgt_c: 31.5,
      canopy_shade_pct: 74,
      water_stops_count: 2,
      duration_mins: 25,
      heat_risk: "MODERATE",
      temp_savings_c: -3.0,
      wbgt_savings_c: -2.9,
      coordinates: [
        [13.0380, 77.5920], // Hebbal
        [13.0230, 77.5850], // RT Nagar Green Corridor
        [13.0080, 77.5840], // Palace Grounds West Avenue
        [12.9980, 77.5910], // Jayamahal Road Tree Canopy
        [12.9840, 77.6010]  // Shivajinagar
      ],
      water_stops: [
        { name: "RT Nagar Bus Stand Kiosk", lat: 13.0210, lon: 77.5860, desc: "Potable Chilled Tap" },
        { name: "Cantonment Station Shelter", lat: 12.9960, lon: 77.5930, desc: "Cooling Shelter & ORS" }
      ]
    }
  }
];
