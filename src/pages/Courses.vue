<template>
    <Layout>
        <div v-for="course in $page.courses.edges[0].node.course" :key="course.id">
            <a :href="$url('courses/' + course.id)">
                <Card :name="course.name" code=""/>
            </a>
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