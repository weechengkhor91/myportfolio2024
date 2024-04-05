/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    colors: {
      ...colors,
      // red: "#de3618",
      "my-color": "#252525",
      "link-hover": "#a855f7",
      "big-header": "#e7edfd",
      "overall-bg": "#f4f7ff",
      // primary: colors.purple,
      // secondary: "#000000",
      primary: colors.blue,
      secondary: colors.blue,
    },
  },
  plugins: [],
};
