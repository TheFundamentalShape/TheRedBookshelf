const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        'tan': '#EEE2D2',
        'primary': '#D0021B',
        'dark-red': '#8D0011',
        'gray': {
          ...colors.gray,
          500:'#4A4A4A'
        }
      }
    },
  },
  variants: {
    margin: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}