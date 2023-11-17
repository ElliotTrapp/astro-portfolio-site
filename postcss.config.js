module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    'postcss-inline-svg': {
      paths: ['src/assets/images/icons'],
    },
  },
};