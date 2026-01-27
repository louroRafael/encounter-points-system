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
        },
        epcategory: {
          sports: '#FF0000',
          boardgames: '#005CFF',
          videogames: '#00DD64',
          esports: '#FC7E00',
          leisure: '#8800FF',
          diy: '#ED1E79'
        }
      }
    }
  },
  plugins: [
    require("tailwindcss-animate")
  ]
}
