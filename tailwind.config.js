/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'woodTexture': "url('./WoodTexture.png')",
      },
      colors: {
        /*brown: {
          50: '#F7F2EE',
          100: '#E6D6C9',
          200: '#BE8C67', // yours (moved slightly darker than typical 100)
          300: '#A6795A',
          400: '#987053', // yours (better fit here)
          500: '#71533E', // yours (this reads more like a true 500)
          600: '#5E4635',
          700: '#4B382A',
          800: '#3C2E24',
          900: '#322923', // yours
          950: '#1F1915',
        },*/
        brown: {
          50:  "#f6f2ee",
          100: "#e8ded4",
          200: "#d3c1ae",
          300: "#bda386",
          400: "#a07f5f", // wood & accents
          500: "#86664b",
          600: "#6d523d",
          700: "#574132",
          800: "#402f25",
          900: "#2e221b",
        },
        pink: {
          50:  "#fbf3f6",
          100: "#f6dfe7",
          200: "#edbccd",
          300: "#e099b1",
          400: "#cf6f8f", // book-ready
          500: "#b85778",
          600: "#9d4664",
          700: "#7f384f",
          800: "#612a3c",
          900: "#441f2c",
        },
        purple: {
          50:  "#f6f3f8",
          100: "#e6deee",
          200: "#cfc0dc",
          300: "#b49fc8",
          400: "#9a7fb3", // book-ready
          500: "#7f6598",
          600: "#654f7a",
          700: "#503e5f",
          800: "#3b2e45",
          900: "#2a2232",
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
        yellow: {
          50:  "#fbf9f3",
          100: "#f6eed9",
          200: "#eddcab",
          300: "#e1c97a",
          400: "#cfb053", // warmer, clearer yellow
          500: "#b89743",
          600: "#9a7d37",
          700: "#7a632c",
          800: "#594820",
          900: "#403417",
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
        },
        text: {
          primary: '#322923',   // brown-900 (your existing color)
          secondary: '#4B382A', // brown-700
          muted: '#665F59',     // parchment/brown blend
        }


      }
    },
  },
  plugins: [],
};

