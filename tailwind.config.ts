import type { Config } from "tailwindcss";

const config: Config = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    colors:{
      white:'#FFFFFF',
      nav_green:'#01F0D0',
      black:'#072635',
      grey:'#707070',
      lightGrey:'#EDEDED',
      lightGreen:'#D8FCF7',
      lightPink:'#F4F0FE',
      lightBlue:'#E0F3FA',
      lightRed:'#FFE6E9',
      lightPinkSecond:'#FFE6F1',
      lightLightGray:'#F6F7F8',
      pinkChart:'#C26EB4',
      purple:'#7E6CAB',
      chartSideGray:'#CBC8D4',
      chartSidePurple:'#8C6FE6'
    },
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
