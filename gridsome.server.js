// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const Courses = require('./data/courses.json');

    const collection = actions.addCollection({
      typeName: 'Courses'
    })

    collection.addNode(Courses)
  })

  api.createPages(async ({ createPage, graphql }) => {

    const { data } = await graphql(`{
      allCourses {
        edges {
          node {
            course {
              id
              name
              disciplines {
                Code
                Semester
              }
            }
          }
        }
      }
      allDisciplines {
        edges {
          node {
            title
            periodo
            slug
            content
          }
        }
      }
    }`)

    data.allCourses.edges[0].node.course.forEach(element => {
      createPage({
        path: `/courses/${element.id}`,
        component: './src/templates/Course.vue',
        context: {
          title: element.name
        }
      })
    });

    data.allDisciplines.edges.forEach(element => {
      const sp = element.node.slug.split('/')
      const editLink = "https://github.com/OpenSourceLabUFV/espia-so/edit/main/disciplinas/" + sp[2].toUpperCase() + "/README.md"
      createPage({
        path: element.node.slug,
        component: './src/templates/Discipline.vue',
        context: {
          title: element.node.title,
          content: element.node.content,
          editLink: editLink
        }
      })
    });
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
