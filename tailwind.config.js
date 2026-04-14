/** @type {import('tailwindcss').Config} */
export default {
  // 1. Hier sagen wir Tailwind, wo deine Dateien liegen (damit es nichts übersieht)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}" // Findet auch Dateien direkt im Hauptordner
  ],
  theme: {
    // 2. WICHTIG: "extend" behält die Standards (wie Bildschirmgrößen) bei!
    // Wenn "extend" fehlt, funktionieren lg:hidden oder md:flex nicht mehr.
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: '#ea580c', 
          black: '#0a0a0a',
          dark: '#171717',
          gray: '#262626'
        }
      }
    },
  },
  plugins: [],
}