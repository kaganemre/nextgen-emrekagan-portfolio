/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#3730A3',
        'secondary-color': '#4731D3',
        'tertiary-color': '#6B7280',
        'fourth-color': '#777777',
        'fifth-color': '#FFE86E',
        'sixth-color': '#EEEBFF',
        'seventh-color': '#7B61FF',
        'eighth-color': '#4338CA',
        'ninth-color': '#1F2937',
        'tenth-color': '#000000',
        'eleventh-color': '#BAB2E7',
        'twelfth-color': '#AF0C48',

        'dark-primary-color': '#BAB2E7',
        'dark-secondary-color': '#777777',
        'dark-tertiary-color': '#8F88FF',
        'dark-fourth-color': '#4731D3',
        'dark-fifth-color': '#6B7280',
        'dark-sixth-color': '#FFFFFF',
        'dark-seventh-color':'#B7AAFF',
        'dark-eighth-color': '#E1E1FF',
        'dark-ninth-color': '#000000',
        'dark-tenth-color': '#383838',
        'dark-eleventh-color': '#E1E1FF',
        'dark-twelfth-color': '#AEBCCF',
        'dark-thirteenth-color': '#CFCBFF'

      }
    },
  },
  plugins: [],
};
