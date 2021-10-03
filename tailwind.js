module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#725bc2',
        'primary-dark': '#553ea8',
        'primary-light': '#8e7dcf',
        'primary-light-2': '#efecf8',
        'primary-light-3': '#dedaf1',
        'primary-medium': '#9f8fd6',
        'primary-medium-2': '#afa2dd',
        'primary-medium-3': '#bfb5e3',
        'overlay': 'rgba(0, 0, 0, 0.4)',
      },
      maxHeight: {
        '104': '32rem'
      },
      height: {
        'min': 'min-content'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
