/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "main":"#6e237e",
        "sec":"#573589",
        "mainDark":"#14141f"
      }
    },
  },
  plugins: [],
}

