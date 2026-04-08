import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/nvis-fe-cms-libs/dist/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class',
  plugins: [
    forms,
  ],
};