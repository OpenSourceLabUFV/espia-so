<template>
    <Layout>
        <h1 class="text-xl font-semibold">{{ $context.title }}</h1>
        <div class="grid items-center grid-flow-row grid-cols-1 auto-rows-max lg:grid-cols-4">
            <div v-for="disc in $page.disciplines.edges" :key="disc.node.code">
                <Card :name="disc.node.name" :code="disc.node.code" :url="$url('disciplinas/' + disc.node.code.toLowerCase())"></Card>
            </div>
        </div>
    </Layout>
</template>

<script>
import Card from '../components/Card.vue'

export default {
    // https://gridsome.org/docs/head/
    metaInfo() {
        return {
            title: this.$context.title
        }
    },
    components: {
        Card
    }
}
</script>

<page-query>
query($codes: [String]!) {
    disciplines: allDisciplinesRelation(filter: {code: {in: $codes}}, sortBy: "name", order: ASC) {
        edges {
          node {
            code
            name
          }
        }
      }
}
</page-query>