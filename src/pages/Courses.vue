<template>
    <Layout>
      <div class="grid items-center grid-flow-row grid-cols-1 auto-rows-max lg:grid-cols-4">
        <div v-for="course in $page.courses.edges" :key="course.node.id">
          <LazyHydrate when-visible>
            <Card :name="course.node.name" code="" :url="$url('courses/' + course.node.id)"/>
          </LazyHydrate>
        </div>
      </div>
    </Layout>
</template>

<script>
import Card from '../components/Card.vue';
import LazyHydrate from 'vue-lazy-hydration';

export default {
  metaInfo: {
    title: 'Cursos'
  },
  components: {
      Card,
      LazyHydrate
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