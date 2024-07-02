<template>
  <div
    class="flex flex-wrap justify-center text-white m-auto mb-10 md:mb-4 pt-4 text-sm"
  >
    <div class="flex flex-wrap w-full justify-between items-center">
      <div
        class="flex flex-wrap flex-col w-full md:w-1/3 text-center md:text-left mb-2"
      >
        <p>
          <span
            ><font-awesome-icon icon="fa-solid fa-map-marker-alt" class="mr-2"
          /></span>
          <span>Piazza Leonardo da Vinci, 32 20133 Milano</span>
        </p>
        <p>
          <span
            ><font-awesome-icon icon="fa-solid fa-phone" class="mr-2"
          /></span>
          <span>+39 02 2399 1</span>
        </p>
        <p>
          <span
            ><font-awesome-icon icon="fa-solid fa-envelope" class="mr-2"
          /></span>
          <span>summer.school@polimi.it</span>
        </p>
      </div>
      <nav class="flex flex-wrap justify-center w-full md:w-1/3 mb-2">
        <!-- link to About us page -->
        <nuxt-link to="/about-us" class="mx-2 hover:text-cyan-400 animate-item"
          >About us</nuxt-link
        >
        |
        <!-- link to Contact us page -->
        <nuxt-link
          to="/contact-us"
          class="mx-2 hover:text-cyan-400 animate-item"
          >Contact us</nuxt-link
        >
        |
        <!-- link to Schedule page -->
        <nuxt-link to="/schedule" class="mx-2 hover:text-cyan-400 animate-item"
          >Schedule</nuxt-link
        >
      </nav>
      <div class="w-full md:w-1/3 text-center md:text-right mb-2">
        Copyright © 2024
      </div>
    </div>
  </div>
</template>
