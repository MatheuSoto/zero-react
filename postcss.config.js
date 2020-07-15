const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.js',
    './src/**/*.js',
    './public/index.html'
  ],
  css: ['./src/assets/css/styles.css'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

const cssnano = require('cssnano')

module.exports = {
  plugins: [
    require('postcss-easy-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    process.env.NODE_ENV.trim() === 'production' ? purgecss : null,
    process.env.NODE_ENV.trim() === 'production' ? cssnano : null
  ]
}
