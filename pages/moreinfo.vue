<template>
  <div v-if="!loading">
    <BreadCrumb />
    <div
      class="flex flex-wrap flex-col justify-center max-w-screen-xl m-auto md:px-4 md:py-8 border-b border-gray-400"
    >
      <list-cards :items="items" title="" :isBackgroundDark="false" />
    </div>
  </div>
</template>
