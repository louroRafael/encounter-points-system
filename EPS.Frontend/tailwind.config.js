/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#FFFF00',
          secondary: '#FFFFFF',
          background: '#000000'
        }
      }
    }
  },
  plugins: [
    require("tailwindcss-animate")
  ]
}
