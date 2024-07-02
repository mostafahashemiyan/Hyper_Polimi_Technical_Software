<template>
  <div class="w-full flex flex-wrap justify-center">
    <NuxtLoadingIndicator />
    <div class="w-full h-24 justify-center w-full bg-indigo-950 z-10">
      <div>
        <Header class="max-w-screen-xl w-full" />
      </div>
    </div>
    <div class="flex justify-center w-full bg-white">
      <NuxtPage class="w-full" />
    </div>
    <div class="flex justify-center w-full bg-indigo-950">
      <Footer class="max-w-screen-xl w-full" />
    </div>
    <div
      class="fixed bottom-0 w-full bg-indigo-950 md:hidden p-2 border-t border-white/10 text-white animate-item h-10"
    >
      <NavigationMenu />
    </div>
  </div>
</template>
