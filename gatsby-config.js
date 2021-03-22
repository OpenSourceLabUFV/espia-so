/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: "/espia-so",
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `disciplinas`,
        path: `${__dirname}/disciplinas`,
      },
    },
    `gatsby-transformer-remark`
  ],
}
