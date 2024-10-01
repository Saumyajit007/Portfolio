/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      nameheader:[ "Nerko One","cursive"],
      tagfont:["Handjet", "sans-serif"],
      serif: ['ui-serif', 'Georgia'],
    }
  },
  plugins: [],
}
