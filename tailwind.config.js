/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "midnight-blue": "#191970",
        "royal-blue": "#4169e1",
        "light-blue": "#add8e6",
        "light-gray": "#d3d3d3",
        "dark-gray": "#1a202c",
      },
      fontFamily: {
        source_sans_pro: ["var(--font-source_sans_pro)"],
      },
    },
  },
  plugins: [],
};
