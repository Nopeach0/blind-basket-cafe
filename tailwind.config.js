/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F3EE',
        oat: '#EDE8E3',
        stone: '#D4CEC8',
        'warm-charcoal': '#2C2416',
        'deep-brown': '#3D3228',
        'mid-brown': '#6B5B4E',
        'light-brown': '#9B8B7E',
        gold: '#C9A96E',
        'gold-light': '#E2C99A',
        'gold-dark': '#A8854A',
        'olive-muted': '#8B8B6E',
        'off-white': '#FDFAF7',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        'extra-wide': '0.15em',
      },
      boxShadow: {
        warm: '0 4px 24px rgba(44, 36, 22, 0.08)',
        'warm-lg': '0 8px 48px rgba(44, 36, 22, 0.12)',
        gold: '0 4px 24px rgba(201, 169, 110, 0.2)',
      },
    },
  },
  plugins: [],
}
