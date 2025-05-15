/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        fashion: {
          beige: '#f8f4f0',
          rose: '#f9e5e5',
          charcoal: '#2e2e2e',
          softgray: '#e5e5e5',
        },
      },
      backgroundImage: {
        'hero-pattern': "radial-gradient(ellipse at top, rgba(245,202,195,0.3) 0%, rgba(255,255,255,0.2) 45%, transparent 100%)"
      },
    },
  },
  plugins: [],
}
