<template>
    <div class="flex flex-row items-center justify-between w-full shadow-md bg-gray-50">
        <g-image src="../../static/oslu.png" width="80" class="m-8"/>
        <div class="flex flex-row m-6 text-4xl">
            <a href="https://github.com/OpenSourceLabUFV" class="m-2" target="_blank" rel="noreferrer noopener">
                <font-awesome :icon="['fab', 'github']"/>
            </a>
            <a href="https://twitter.com/opensourceufv" class="m-2" target="_blank" rel="noreferrer noopener">
                <font-awesome :icon="['fab', 'twitter']"/>
            </a>
            <a href="https://discord.gg/9YUxHqDMDA" class="m-2" target="_blank" rel="noreferrer noopener">
                <font-awesome :icon="['fab', 'discord']"/>
            </a>
            <a href="https://www.instagram.com/opensourcelabufv/" class="m-2" target="_blank" rel="noreferrer noopener">
                <font-awesome :icon="['fab', 'instagram']"/>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>
