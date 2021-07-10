<template>
    <div class="relative w-full border border-black border-opacity-100 rounded-md">
        <div class="-mt-4 text-center text-white">
            <span class="inline-block px-12 pt-2 pb-4 text-base font-medium tracking-wider bg-blue-800 rounded">{{ title }}</span>
        </div>
        <div class="relative p-6 overflow-hidden">
            <slot></slot>
        </div>
    </div>
</template>

<script>

// https://github.com/gridsome/gridsome.org/blob/cb7352107899df8ddf06f48f74f969268ace2de7/src/components/Card.vue

export default {
    name: 'Callout',
    props: ['title']
}
</script>
