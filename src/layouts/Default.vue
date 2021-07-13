<template>
  <div class="flex flex-col items-center mt-10 mb-0">
    <header class="flex flex-col items-center content-center max-w-screen-md mb-8 lg:flex-row">
      <g-link to="/">
        <div class="flex flex-row items-center">
          <g-image alt="Ícone Espia Só" src="~/favicon.png" width="80"/>
          <strong>
            <h1 class="ml-2 text-4xl font-bold">{{ $static.metadata.siteName }}</h1>
          </strong>
        </div>
      </g-link>
      <div class="relative pt-2 mx-8 mt-4 text-gray-600 lg:mt-0">
        <input class="h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
          type="text" id="search" name="search" placeholder="Busque por uma Disciplina" v-model="search">
      </div>
      <!-- <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav> -->
    </header>
    <div v-if="searchResults.length > 0 && search.length > 0">
        <div v-for="disc in searchResults" :key="disc.node.code">
            <Card :name="disc.node.name" :code="disc.node.code" :url="$url('disciplinas/' + disc.node.code.toLowerCase())"/>
        </div>
    </div>
    <div v-else>
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Card from '../components/Card.vue';

export default {
  components: {
    Footer,
    Card
  },
  data() {
        return {
            search: ''
        }
    },
    computed: {
        searchResults() {
            return this.$static.allDisciplinesRelation.edges.filter(discipline => {
                const term = this.search.toLowerCase().trim();
                return discipline.node.name.toLowerCase().includes(term) || discipline.node.code.toLowerCase().includes(term)
            })
        }
    }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
  allDisciplinesRelation {
    edges {
      node {
        code
        name
      }
    }
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  margin: 10px auto 0px auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

h1 {
  margin: auto 20px;
}

a {
  color: inherit;
  text-decoration: none; /* no underline */
}

.nav__link {
  margin-left: 20px;
}
</style>
