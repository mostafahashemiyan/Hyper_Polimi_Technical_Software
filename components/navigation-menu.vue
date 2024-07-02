<template>
  <div>
    <ul class="flex flex-wrap justify-around text-sm md:text-base">
      <!-- Each li element represents a navigation link -->
      <li>
        <nuxt-link
          :class="{
            'hover:text-cyan-400 animate-item': !isActive('/Home'),
          }"
          to="/"
          >Home</nuxt-link
        >
      </li>

      <li
        :class="{
          'border-b-2 border-cyan-400 cursor-default relative':
            isActive('/lectures'),
        }"
      >
        <nuxt-link
          :class="{
            'hover:text-cyan-400 animate-item': !isActive('/projects'),
          }"
          to="/projects"
          >projects</nuxt-link
        >
      </li>
      <li
        :class="{
          'border-b-2 border-cyan-400 cursor-default relative':
            isActive('/lectures'),
        }"
      >
        <nuxt-link
          :class="{
            'hover:text-cyan-400 animate-item': !isActive('/service'),
          }"
          to="/services"
          >Services</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          :class="{
            'hover:text-cyan-400 animate-item': !isActive('/speakers'),
          }"
          to="/speaker"
          >Speakers</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          :class="{
            'hover:text-cyan-400 animate-item': !isActive('/activity'),
          }"
          to="/activity"
          >Activities</nuxt-link
        >
      </li>
      <!-- Dropdown Menu Example for Lectures -->

      <li
        :class="{
          'border-b-2 border-cyan-400 cursor-default relative':
            isActive('/More information'),
        }"
      >
        <nuxt-link
          :class="{
            'hover:text-cyan-400 animate-item': !isActive('/pages/about-us'),
          }"
          to="/about-us"
          >About us</nuxt-link
        >
      </li>
      <li>
        <nuxt-link
          :class="{
            'hover:text-cyan-400 animate-item': !isActive(
              '/pages/contact-us.vue'
            ),
          }"
          to="/contact-us"
          >Contact us</nuxt-link
        >

        <!-- Add other navigation links as required -->
      </li>
      <nuxt-link
        :class="{
          'hover:text-cyan-400 animate-item': !isActive('/pages/chat.vue'),
        }"
        to="/chat"
        >Chat with us</nuxt-link
      >
    </ul>
  </div>
</template>

<script>
// from url find which link is active
export default {
  computed: {
    activeLink() {
      return this.$route.path;
    },
  },
  // nuxt-link to is active if activeLink is eqaul to value of to attribute or it starts with value of to attribute except for the home page
  methods: {
    isActive(to) {
      if (to === "/" && this.activeLink === "/") {
        return true;
      } else if (to !== "/" && this.activeLink.startsWith(to)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
/* Tailwind utility classes with additional hover styles */
.dropdown-content {
  display: none; /* Hidden by default */
  min-width: 160px; /* Set a min-width if necessary */
  z-index: 2; /* Positioned above other content */
}

li:hover .dropdown-content {
  display: block; /* Show dropdown when hovering over li element */
}
</style>
