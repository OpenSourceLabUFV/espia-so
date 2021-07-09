<template>
    <Layout>
      <div class="grid items-center grid-flow-row grid-cols-1 auto-rows-max lg:grid-cols-4">
        <div v-for="course in $page.courses.edges[0].node.course" :key="course.id">
          <Card :name="course.name" code="" :url="$url('courses/' + course.id)"/>
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
  courses: allCourses {
    edges {
      node {
        course {
          id
          name
        }
      }
    }
  }
}
</page-query>

<style>

</style>