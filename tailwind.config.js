/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*.tsx",
    "./app/**/*.tsx",
    "./components/*.tsx",
    "./components/**/*.tsx",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
