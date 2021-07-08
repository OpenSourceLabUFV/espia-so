<template>
    <Layout>
        <h1>{{ $context.title }}</h1>
        <div v-for="disc in $page.disciplines.edges" :key="disc.node.code">
            <a :href="$url('disciplinas/' + disc.code)">
            <Card :name="disc.node.name" :code="disc.node.code"></Card>
            </a>
        </div>
    </Layout>
</template>

<script>
import Card from '../components/Card.vue'

export default {
    components: {
        Card
    }
}
</script>

<page-query>
query($codes: [String]!) {
    disciplines: allDisciplinesRelation(filter: {code: {in: $codes}}) {
        edges {
          node {
            code
            name
          }
        }
      }
}
</page-query>