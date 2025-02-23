/** @type {import('tailwindcss').Config} */
export default {
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
        'eighth-color': '#4338CA'
      }
    },
  },
  plugins: [],
};
