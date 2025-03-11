/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1a73e8',
        secondary: '#f8fafc',
        'card-shadow': 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} 