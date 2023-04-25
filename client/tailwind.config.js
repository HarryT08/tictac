/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gris: {
          50: "#A8A8A8",
          30: "#C6C6C6",
          100: "#6B6B6B",
        },
        azul: {
          50: "#186ADE",
          100: "#0D4EA6",
        },
      },
    },
  },
  plugins: [],
};
