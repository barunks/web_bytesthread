/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#020408',
        surface: '#060c18',
        card: '#080f1e',
        brand: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        accent: '#00ff88',
        purple: '#8b5cf6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(6,182,212,0.2) 0%, rgba(2,4,8,0) 70%)',
        'card-shine': 'linear-gradient(135deg, rgba(6,182,212,0.05) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
}
