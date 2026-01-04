/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50:  '#F7F2EE',
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
        },
        pink: {
          50:  '#FAF4F5',
          100: '#F2E3E6',
          200: '#E4C5CB',
          300: '#D4A9B2',
          400: '#C48E9A', // NEW base — muted rose, less brown
          500: '#AD7684',
          600: '#8F5E6E',
          700: '#724956',
          800: '#573741',
          900: '#3F282F',
          950: '#26181C',
        },
        purple: {
          50:  '#F6F4F8',
          100: '#E9E4EE',
          200: '#D6CBDF',
          300: '#C2B4CF',
          400: '#AF9EBE', // yours
          500: '#9784A8',
          600: '#7F6B90',
          700: '#665675',
          800: '#4E4259',
          900: '#3A3242',
          950: '#221E28',
        },
        green: {
          50:  '#F3F6F2',
          100: '#DEE6DA',
          200: '#C3D2BC',
          300: '#A9BFA1',
          400: '#8FA983', // NEW 400 — clearer, more present sage
          500: '#78936D',
          600: '#607A56',
          700: '#4A5F43',
          800: '#364533',
          900: '#283425',
          950: '#161F16',
        },

        blue: {
          50:  '#EEF4F6',
          100: '#D9E7ED',
          200: '#B9D1DC',
          300: '#9BBACC',
          400: '#6F9EB4', // NEW 400 — clearer, more saturated
          500: '#5A879D',
          600: '#466E81',
          700: '#355866',
          800: '#27424D',
          900: '#1D333B',
          950: '#0F1E23',
        },
        yellow: {
          50:  '#FBF9F3',
          100: '#F3EDDA',
          200: '#E6DBB4',
          300: '#D6C68E',
          400: '#C2AD63', // base — dusty gold, not bright
          500: '#A9944F',
          600: '#8C7A3F',
          700: '#6E5F32',
          800: '#524726',
          900: '#3A321B',
          950: '#231E11',
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

