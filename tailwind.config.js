module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'emerald': '#E5E5E5',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
