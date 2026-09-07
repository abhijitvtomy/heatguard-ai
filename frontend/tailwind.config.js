/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heat: {
          red: '#dc2626',
          orange: '#ea580c',
          yellow: '#ca8a04',
          green: '#16a34a',
          blue: '#0284c7'
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-red': 'glowRed 2s ease-in-out infinite alternate',
        'glow-blue': 'glowBlue 3s ease-in-out infinite alternate',
      },
      keyframes: {
        glowRed: {
          '0%': { boxShadow: '0 0 15px rgba(220, 38, 38, 0.3)' },
          '100%': { boxShadow: '0 0 35px rgba(220, 38, 38, 0.7)' },
        },
        glowBlue: {
          '0%': { boxShadow: '0 0 15px rgba(2, 132, 199, 0.3)' },
          '100%': { boxShadow: '0 0 35px rgba(2, 132, 199, 0.7)' },
        }
      }
    },
  },
  plugins: [],
}
