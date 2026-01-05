import * as url from "node:url";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'woodTexture': "url('./woodTexture.png')",
        'woodSign': "url('./woodSign.webp')",
        'woodPlaque': "url('./woodPlaque.png')",
        'blueCover': "url('./blueCover.png')",
        'blueSpine': "url('./blueSpine.png')",
        'greenCover': "url('./greenCover.png')",
        'greenSpine': "url('./greenSpine.png')",
        'purpleCover': "url('./purpleCover.png')",
        'purpleSpine': "url('./purpleSpine.png')",
        'yellowCover': "url('./yellowCover.png')",
        'yellowSpine': "url('./yellowSpine.png')",
        'pinkCover': "url('./pinkCover.png')",
        'pinkSpine': "url('./pinkSpine.png')",

      },
      colors: {
        pink: {
          50:  "#fdf2f4",
          100: "#fbe3e6",
          200: "#f7c6cd",
          300: "#f3b0b9",
          400: "#f49da6",
          500: "#e8848f",
          600: "#c96a73",
          700: "#a0555d",
          800: "#7a3f45",
          900: "#553032",
        },

        yellow: {
          50:  "#fff8ec",
          100: "#ffedd0",
          200: "#fde1aa",
          300: "#fdd27f",
          400: "#fcbf62",
          500: "#fcc360",
          600: "#e3a94d",
          700: "#b8873d",
          800: "#87652d",
          900: "#5e471f",
        },

        green: {
          50:  '#F6F8F5',
          100: '#EEF3EB',
          200: '#DFE8D9',
          300: '#CFE0C6',
          400: '#BED7B3', // pastel sage
          500: '#AFC9A2',
          600: '#91AE85',
          700: '#748E6B',
          800: '#566A50',
          900: '#3C4A38',
        },
        blue: {
          50:  "#f2f6f9",
          100: "#dce6ef",
          200: "#bfd2e2",
          300: "#9ebbd2",
          400: "#7fa2bf", // book-ready
          500: "#6487a6",
          600: "#4f6c87",
          700: "#3f556a",
          800: "#2f3f4f",
          900: "#222d39",
        },

        purple: {
          50:  "#f6f4fa",
          100: "#ebe6f2",
          200: "#d9d1e6",
          300: "#c8bddb",
          400: "#b093dd",
          500: "#a295c1",
          600: "#857aa7",
          700: "#696089",
          800: "#4e4766",
          900: "#37324a",
        },

        brown: {
          50:  "#fff6ee",
          100: "#fde8d7",
          200: "#fbd6b5",
          300: "#f9c892",
          400: "#f8c693",
          500: "#e2ad78",
          600: "#c48e60",
          700: "#9e704c",
          800: "#745238",
          900: "#523a29",
        },

      parchment: {
        50:  '#FBFAF8',
        100: '#F6F2EC',
        200: '#EEE7DD',
        300: '#E4D9CB',
        400: '#D6C8B6',
        500: '#C6B6A1',
        600: '#A99682',
        700: '#877868',
        800: '#5E544A',
        900: '#3F3832',
        950: '#26211D',
      }
    }
    },
  },
  plugins: [],
};

