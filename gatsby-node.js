const { data } = require("autoprefixer")

exports.createPages = async({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const discTemplate = require.resolve(`./src/components/discipline.js`)
    const courseTemplate = require.resolve(`./src/components/course.js`)
    const discs = await graphql(`
      {
        allMarkdownRemark(
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)

    const courses = await graphql (
      `
        {
          allMysqlCourse {
            nodes {
              ID
              Name
              Slug
              courseRelations {
                Code
              }
            }
          }
        }
      `
    )
    // Handle errors
    if (discs.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }

    discs.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: discTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })

    courses.data.allMysqlCourse.nodes.forEach(node => {
      cds = []
      for (di of node.courseRelations) {
        cds.push(di.Code)
      }
      
      createPage({
        path: node.Slug,
        component: courseTemplate,
        context: {
          slug: node.Slug,
          codes: cds,
          name: node.Name,
          id: node.ID
        }
      })
    })
  }