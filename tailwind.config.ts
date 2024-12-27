import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { overpass: ["Overpass"], ubuntu: ["Ubuntu"] },
      colors: {
        "red-light-100": "#ff8f70",
        "red-light-200": "#ff525d",
        "red-light-300": "#ff7a85",
        "blue-gray-100": "#c8c8cb",
        "blue-gray-200": "#4b5862",
        "blue-gray-300": "#1f3f5b",
        "blue-gray-400": "#2c2d3f",
        "blue-gray-500": "#3f4164",
        "blue-black-100": "25252d",
      },
      screens: {
        desktop: "1440px",
        mobile: "375px",
      },
    },
  },
  plugins: [],
} satisfies Config;
