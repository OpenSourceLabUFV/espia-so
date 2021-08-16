const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: 'Espia Só',
  siteUrl: 'https://espiaso.oslu.org/',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ]
      }
    }
  },
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
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
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'G-EQGSDVFY42'
      }
    }
  ]
}
