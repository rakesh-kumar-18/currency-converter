/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('https://wallpaperaccess.com/full/7268968.jpg')"
      }
    },
  },
  plugins: [],
};
