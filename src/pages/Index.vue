<template>
  <Layout>
    <div class="flex flex-col items-center m-10">
    <p class="text-xl text-center">
      O Espia Só é sua wikipédia das matérias da UFV. É um espaço onde os próprios alunos colaboram com diversas informações, como: links úteis, resumos, materiais de anos anteriores e dicas.
    </p>
    <g-link class="mt-8" to="/courses">
      <b-button class="px-3 py-2 m-1 text-white bg-blue-800 border-b-4 border-l-2 border-blue-900 rounded shadow-lg hover:shadow-md">
        Acessar Cursos
      </b-button>
    </g-link>

    <div class="grid grid-flow-row mt-24 lg:grid-flow-col gap-y-6 lg:gap-x-4 auto-cols-auto">
      <Callout title="Como Funciona?">
        <p>Bem vindo! Esse site é uma enciclopédia online das mateŕias da UFV. Os prṕrios alunos da universidade colaboram com informações e conteúdos que eles têm. Todos os alunos podem contribuir! Então, se você tem algo para contribuir, confira nosso <strong><a href="https://github.com/OpenSourceLabUFV/espia-so/wiki">Guia de Contribuição.</a></strong></p>
      </Callout>
      <Callout title="Regras Gerais">
        <p>Para a contribuição no Espia Só, algumas regras devem ser seguidas: </p>
        <ul class="mt-4 list-disc list-inside">
          <li>O <strong><g-link to="/code-of-conduct">Código de Conduta</g-link></strong> deve ser seguido.</li>
          <li>Opiniões pessoais sobre os professores devem ser evitadas.</li>
          <li>Tente não publicar conteúdos que repetem todo semestre das disciplinas. Os professores sempre podem pedir para retirarmos conteúdo.</li>
        </ul>
      </Callout>
    </div>
    </div>
  </Layout>
</template>

<script>
import Callout from '../components/Callout.vue';
//https://github.com/gridsome/gridsome.org/blob/master/src/components/home/HomeHowItWorkSimple.vue
export default {
  metaInfo: {
    title: 'Espia Só'
  },
  components: {
    Callout
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
