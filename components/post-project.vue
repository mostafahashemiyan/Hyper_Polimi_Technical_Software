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

<style scoped>
.animate-item {
  transition: height 0.5s ease;
}

.bto {
  width: 150px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #000000;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in;
  z-index: 1;
}

.bto::before,
.bto::after {
  content: "";
  position: absolute;
  top: 0;
  width: 0;
  height: 100%;
  transform: skew(15deg);
  transition: all 0.5s;
  overflow: hidden;
  z-index: -1;
}

.bto::before {
  left: -10px;
  background: #e4c34c;
}

.bto::after {
  right: -10px;
  background: #ff6600;
}

.bto:hover::before,
.bto:hover::after {
  width: 58%;
}

.bto:hover span {
  color: #ffffff;
  transition: 0.3s;
}

.bto span {
  color: #090909;
  font-size: 18px;
  transition: all 0.3s ease-in;
}
</style>
