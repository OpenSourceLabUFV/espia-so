// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Espia Só',
  siteUrl: 'http://espiaso.oslu.org/',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        shouldTimeTravel: true
      }
      /**
      * These are the default options.

      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
      */
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Disciplines',
        path: './disciplinas/**/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'CodeOfConduct',
        path: './CODE_OF_CONDUCT.md',
      }
    },
  ]
}
