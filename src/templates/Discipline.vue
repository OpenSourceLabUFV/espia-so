<template>
    <Layout>
        <h1 class="text-xl font-semibold">{{ $context.title }}</h1>
        <div class="mt-8 mb-8 prose prose-blue" v-html=$context.content></div>
        <a :href=$context.editLink target="_blank" rel="noreferrer" class="mt-16 mb-8 bg-gray-100 border-gray-50 hover:bg-blue-50">
              Edite essa Página
        </a>
    </Layout>
</template>

<script>

export default {
    metaInfo() {
        return {
            title: this.$context.title
        }
    }
}
</script>

