
module.exports = {
    purge: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.md',
      './src/**/*.html',
    ],
    plugins: [
      require('@tailwindcss/typography')
    ],
  }