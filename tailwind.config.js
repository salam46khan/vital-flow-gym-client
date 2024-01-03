/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NormalText :[ 'Josefin Sans', 'sans-serif'],
        BannerTitle :['Russo One', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
}

