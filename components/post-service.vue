<template>
  <div class="hidden md:block md:w-1/3">
    <img
      :src="image_url"
      :alt="title"
      class="rounded-xl w-full aspect-square object-cover"
    />
  </div>

  <div class="flex flex-wrap flex-col p-4 md:pl-8 rounded w-10/12 md:w-2/3">
    <h1 class="text-4xl">
      <span class="border-b-2 border-cyan-400 pb-2">
        <h3>{{ title }}</h3></span
      >
    </h1>
    <!-- add start and end time-->

    <p class="text-lg mt-4"></p>
    <p class="text-lg mb-2">
      <slot class="text-base"></slot>
    </p>
    <button class="bto">
      <span> <nuxt-link :to="link" >Open this service</nuxt-link> </span>
    </button>
  </div>
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

<style scoped>
.animate-item {
  transition: height 0.5s ease;
}
</style>
