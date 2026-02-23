/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f6',
          100: '#d9e2eb',
          200: '#b8c9d9',
          300: '#8ba8c0',
          400: '#5881a2',
          500: '#3c6585',
          600: '#2b4d6a',
          700: '#243e56',
          800: '#203548',
          900: '#1e2d3d',
          950: '#0f1b26',
        },
        gold: {
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}