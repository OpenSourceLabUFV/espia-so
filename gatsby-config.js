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
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: 'localhost',
          user: 'root',
          password: 'mJjlmnu3uO/o',
          database: 'espiaso'
        },
        queries: [
          {
            statement: 'SELECT * FROM Course',
            idFieldName: 'ID',
            name: 'course'
          },
          {
            statement: 'SELECT * FROM DiscCourse',
            idFieldName: 'ID',
            name: 'courseRelation',
            parentName: 'course',
            foreignKey: 'CourseID',
            cardinality: 'OneToMany'
          },
          {
            statement: 'SELECT * FROM Discipline',
            idFieldName: 'Code',
            name: 'discipline',
          },
        ]
      }
    },
    `gatsby-transformer-remark`
  ],
}
