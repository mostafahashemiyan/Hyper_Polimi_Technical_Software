<template>
    <nuxt-link :to="link" class="relative aspect-[9/16] rounded-lg overflow-hidden border border-black border-opacity-20"  @mouseenter="hover" @mouseleave="unhover">
        <!-- image cover that fill the whole width and height of element-->
        <img :src="image_url" :alt="title" class="w-full h-full object-cover"/>
        <div class="absolute bottom-0 w-full flex flex-wrap flex-col bg-black/50 p-2 text-white">
            <h3 class="text-2xl">{{ title }}</h3>
            <!--subtitle show subtitle by animation when isHovered is true-->
            <div class="overflow-hidden animate-item" :class="{'h-0': !isHovered, 'h-40': isHovered}">
                <slot class="text-base"></slot>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        image_url: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            isHovered: false,
        };
    },
    methods: {
        hover() {
            this.isHovered = true;
        },
        unhover() {
            this.isHovered = false;
        },
    },

};
</script>
