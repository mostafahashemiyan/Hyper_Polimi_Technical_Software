<template>
  <div class="w-full flex flex-col flex-wrap justify-center items-center">
    <div
      class="p-4 max-w-screen-xl w-full items-center justify-center flex flex-col flex-wrap"
    >
      <h1
        class="text-4xl mb-4 border-b-2 border-cyan-400 pb-2"
        :class="{ 'text-white': isBackgroundDark }"
      >
        {{ title }}
      </h1>
      <div class="w-full flex flex-row flex-wrap justify-center" v-if="items">
        <!-- add post-card loop on top speakers-->
        <post-project
          class="lg:w-1/5 md:w-1/3 w-10/12 my-2 mx-4"
          v-for="item in items"
          :image_url="item.image_url"
          :link="item.link"
          :title="item.title"
        >
          {{ item.subtitle }}
        </post-project>
      </div>
    </div>
  </div>
</template>

<script>
import postproject from "@/components/post-project.vue";
export default {
  components: {
    postproject,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    isBackgroundDark: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
