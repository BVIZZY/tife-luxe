/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxuryGold: '#D4AF37', // Elegant gold accent color
        pitchBlack: '#0A0A0A', // Deep luxury black background
      },
    },
  },
  plugins: [],
}
