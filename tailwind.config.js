/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {       
       iran: 'var(--font-iran-yekan)',
      },
      colors: {
        primary: "#005B9E",
        accent: "#FFD700",
      },
      fontFamily: {
        sans: ["IRANYekan", "Yekan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
