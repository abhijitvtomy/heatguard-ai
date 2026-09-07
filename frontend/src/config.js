/**
 * HEATGUARD Cloud & Local API Configuration
 * In local dev: defaults to empty string "" (uses Vite proxy /api -> 127.0.0.1:8000)
 * In cloud production: set VITE_API_BASE_URL in Vercel/Netlify dashboard
 */
export const API_BASE = import.meta.env.VITE_API_BASE_URL || '';
