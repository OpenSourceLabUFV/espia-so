<template>
  <Layout>
    <div class="flex flex-col items-center m-10">
    <p class="max-w-screen-lg text-xl text-center">
      O Espia Só é um lugar que vai te ajudar a passar nas matérias do seu curso. É um espaço onde os próprios alunos colaboram com diversas informações, como: links úteis, resumos, materiais de anos anteriores e dicas.
    </p>
    <g-link class="mt-8" to="/courses">
      <b-button class="px-3 py-2 m-1 text-white bg-blue-800 border-b-4 border-l-2 border-blue-900 rounded shadow-lg hover:shadow-md">
        Acessar Cursos
      </b-button>
    </g-link>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Espia Só'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
