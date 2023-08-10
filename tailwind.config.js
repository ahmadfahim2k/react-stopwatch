/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      scale: ['active'],
      boxShadow: {
        'custom-red': '0 0 5px 5px black, 0 0 35px 5px red'
      },
      height: {
        '600': '600px',
      },
      width: {
        '600': '600px',
        '0.5': '0.5px'
      }
    },
  },
  plugins: [],
}

