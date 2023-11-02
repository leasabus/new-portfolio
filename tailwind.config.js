/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary : '#14141c',
      secondary : '#14b08f',
      terciary : '#f8f8f8',
      text : '#b8b8ba'

    },
    extend: {},
    container : {
      center: true,

    }
  },
  plugins: [],
}

