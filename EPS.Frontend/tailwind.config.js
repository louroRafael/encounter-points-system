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
      },
      keyframes: {
        pulseCircle: {
          '0%': { transform: 'scale(0.6)', opacity: '0.3' },
          '100%': { transform: 'scale(1.4)', opacity: '0' }
        }
      },
      animation: {
        'pulse-circle': 'pulseCircle 1.2s ease-out infinite'
      }
    }
  },
  plugins: [
    require("tailwindcss-animate")
  ]
}
