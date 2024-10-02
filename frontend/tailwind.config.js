/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      serif: ['ui-serif', 'Georgia'],
      Teko:['Teko'],
      Bodoni:['Bodoni Moda'],
      ramaraja:['Ramaraja']
    }
  },
  plugins: [],
}
