<template>
    <Layout>
        <div class="mt-8 mb-8 prose prose-blue" v-html=$page.code.edges[0].node.content></div>
    </Layout>
</template>

<script>
export default {
    metaInfo() {
        return {
            title: 'Código de Conduta'
        }
    }
}
</script>


<page-query>
query {
  code: allCodeOfConduct {
    edges {
      node {
        content
      }
    }
  }
}
</page-query>