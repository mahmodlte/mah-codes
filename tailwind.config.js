/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OsWald: ["Oswald", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        carmine: "#D70040",
      },
    },
  },
  plugins: [],
};
