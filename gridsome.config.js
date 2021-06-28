// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Espia Só',
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
        typeName: 'Courses',
        path: './data/courses.json',
      }
    }
  ]
}
