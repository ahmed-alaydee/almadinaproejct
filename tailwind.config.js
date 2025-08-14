/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        base: "#489956",
        base2: "#0b3426",
        base3: "#f2c373",
      },
    },
  },
  plugins: [],
};
