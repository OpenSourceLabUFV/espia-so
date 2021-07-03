<template>
    <Layout>
        <h1>{{ $context.title }}</h1>
        <div class="prose prose-blue mt-8 mb-8" v-html=$context.content></div>
        <a :href=$context.editLink target="_blank" rel="noreferrer" class="mt-16 mb-8 bg-gray-100 border-gray-50 hover:bg-blue-50">
              Edite essa Página
        </a>
    </Layout>
</template>
