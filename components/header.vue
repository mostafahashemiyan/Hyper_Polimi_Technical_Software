<template>
    <nav class="flex flex-wrap w-full h-20 m-auto p-2 text-white md:justify-between justify-center items-center z-10">
        <!--Image of the summer school logo from public directory if click return to home page-->
        <nuxt-link to="/">
            <img src="/logo.png" alt="Summer School Logo" class="h-20"/>
        </nuxt-link>
        <!--Navigation bar-->
        <navigationMenu class="hidden md:block w-1/2"/>
    </nav>
</template>

<script>
import navigationMenu from "./navigation-menu.vue";
export default {
    components: {
        navigationMenu,
    },
};
</script>