/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx}",  
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '480px',
      },
    },
  },
  plugins: [],
};
