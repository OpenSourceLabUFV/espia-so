<template>
    <Layout>
      <div class="grid items-center grid-flow-row grid-cols-1 auto-rows-max lg:grid-cols-4">
        <div v-for="course in $page.courses.edges" :key="course.node.id">
          <Card :name="course.node.name" code="" :url="$url('courses/' + course.node.id)"/>
        </div>
      </div>
    </Layout>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  metaInfo: {
    title: 'Cursos'
  },
  components: {
      Card
  }
}
</script>

<page-query>
query {
  courses: allCourses(sortBy: "name", order: ASC) {
    edges {
      node {
          id
          name
      }
    }
  }
}
</page-query>