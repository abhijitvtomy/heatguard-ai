/**
 * HEATGUARD Cloud & Local API Configuration
 * In local dev: defaults to empty string "" (uses Vite proxy /api -> 127.0.0.1:8000)
 * In cloud production (Vercel): points directly to live Render backend
 */
const isLocal = typeof window !== 'undefined' && (
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1' ||
  window.location.hostname.startsWith('192.168.') ||
  window.location.hostname.startsWith('10.')
);

const envUrl = import.meta.env.VITE_API_BASE_URL;
const validEnvUrl = envUrl && envUrl.startsWith('http') && !envUrl.includes('[SENSITIVE]') ? envUrl : null;

export const API_BASE = validEnvUrl || (isLocal ? '' : 'https://heatguard-ai-dwv8.onrender.com');

