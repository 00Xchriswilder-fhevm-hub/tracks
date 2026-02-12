/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        // Zama brand colors (kept for FHE-specific UI)
        'zama-yellow': '#FFD208',
        'zama-black': '#000000',
        'zama-gray': {
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#888888',
          300: '#666666',
          400: '#333333',
          500: '#2a2a2a',
          600: '#1a1a1a',
          700: '#000000',
        },
        'zama-green': '#4caf50',
        'zama-red': '#f44336',
        'zama-orange': '#ff9800',
        'zama-blue': '#007bff',

        // Pink/black neo‑brutalist palette from sample app
        maza: {
          pink: '#EC9AA6',
          dark: '#1A1A1A',
          green: '#A6EC9A',
          blue: '#9AA6EC',
          cream: '#FFF9F0',
        },
      },
      fontFamily: {
        // Existing system stack
        system: ['system-ui', '-apple-system', 'sans-serif'],

        // Sample design fonts
        sans: ['"Lexend Mega"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        // Existing shadow
        zama: '0 4px 12px rgba(0, 0, 0, 0.3)',

        // Neo‑brutalist shadows from sample app
        neo: '5px 5px 0px 0px rgba(0,0,0,1)',
        'neo-hover': '2px 2px 0px 0px rgba(0,0,0,1)',
        'neo-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
    },
  },
  plugins: [],
}
