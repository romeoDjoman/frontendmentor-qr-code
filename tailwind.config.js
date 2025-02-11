/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}" // S'assure que Tailwind scanne les fichiers Angular
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
