<template>
  <Layout>
    <div class="flex flex-col items-center m-10">
    <p class="text-xl text-center">
      O Espia Só é um lugar que vai te ajudar a passar nas matérias do seu curso. É um espaço onde os próprios alunos colaboram com diversas informações, como: links úteis, resumos, materiais de anos anteriores e dicas.
    </p>
    <g-link class="mt-8" to="/courses">
      <b-button class="px-3 py-2 m-1 text-white bg-blue-800 border-b-4 border-l-2 border-blue-900 rounded shadow-lg hover:shadow-md">
        Acessar Cursos
      </b-button>
    </g-link>

    <div class="grid grid-flow-row mt-24 lg:grid-flow-col gap-y-6 lg:gap-x-4 auto-cols-auto">
      <Callout title="Primeiro">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget bibendum nisi. Donec lorem tortor, aliquet sit amet arcu in, eleifend suscipit eros. Suspendisse sed vulputate ipsum. In in dui congue, efficitur libero vitae, pellentesque massa. Suspendisse potenti. Quisque mattis diam vitae lorem luctus consectetur. Duis rutrum purus vel augue bibendum semper sed at diam. </p>
      </Callout>
      <Callout title="Segundo">
        <p>Suspendisse non viverra orci, porttitor accumsan dui. Duis cursus lorem justo, et bibendum nisi posuere ac. Vestibulum non sapien vitae nisl varius eleifend vitae vitae enim. Integer at accumsan erat, quis varius nulla. Nullam lobortis orci at libero condimentum pellentesque. Nunc quis magna in nunc lacinia vehicula. Curabitur sit amet metus quis felis volutpat convallis at nec orci. Donec vitae nulla quis elit tincidunt porttitor a vel est. Curabitur tempus, lectus at sagittis commodo, dui enim bibendum magna, quis vulputate erat metus eget mi. Fusce auctor nulla quis congue tristique. Suspendisse potenti. Fusce sodales neque id mi faucibus ultricies sit amet sit amet sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
      </Callout>
      <Callout title="Terceiro">
        <p>Nunc vel massa a lorem consequat elementum sit amet accumsan ligula. Praesent auctor orci eget venenatis mollis. Suspendisse feugiat, tortor et commodo faucibus, lectus dui fringilla lorem, at tincidunt metus libero at dui. Donec consectetur pellentesque magna lacinia sollicitudin. Aenean venenatis aliquam lacus. Cras nec faucibus risus. Nam porta ligula urna, id interdum tortor porttitor eget. Donec venenatis aliquet tempus. Nullam venenatis, turpis in sollicitudin ullamcorper, leo turpis ultricies velit, quis vulputate metus erat ac neque. Quisque consectetur eros quis imperdiet fermentum. Nulla facilisi. Phasellus volutpat, lacus sit amet sodales fringilla, neque nisl porta ante, dictum maximus nisi dolor non erat. </p>
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
