<template>
    <div class="m-6">
        <div class="flex flex-col content-center justify-center h-full bg-gray-50 text-black rounded-md shadow-sm p-8 hover:shadow-md hover:text-white hover:bg-blue-800 origin-left transition all 1.0s ease">
            <h2 class="text-xl font-semibold break-normal">{{ name }}</h2>
            <h3 class="mt-1">{{ code }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['name', 'code']
}
</script>