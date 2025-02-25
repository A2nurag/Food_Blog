module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        ubu: ['Ubuntu', 'sans-serif'],
        jos: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
