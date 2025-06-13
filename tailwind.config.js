/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/*.tsx", "./app/**/*.tsx"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
