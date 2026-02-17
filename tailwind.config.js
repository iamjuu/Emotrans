/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#FFC000",
        brightColor: "#dd8036",
        backgroundColor: "#36ae9a",
        secondary: "#41a8d1",
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'sans': ['Montserrat', 'Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
