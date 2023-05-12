/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0055BA",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};
