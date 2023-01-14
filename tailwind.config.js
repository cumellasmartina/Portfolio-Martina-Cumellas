/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgray: "#424043",
        gray: "#5E5B5F",
        lightgray: "#A19FA3",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
