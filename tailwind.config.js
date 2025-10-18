/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#37A0AF',
        'main-dark': '#306067',
        'main-light': '#CCE2E5',
        'background-highlights': '#E8E2E0',
        'terciary-warning': '#F8393C',
        'success-green-highlight': '#29D370',
        'text-paragraph': '#1A1A1A',
        'text-secondary': '#4B4B4B',
      },
      borderRadius: {
        '2xl': '20px',
      },
      boxShadow: {
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
