<template>
    <!-- assume in crumbs we have object {'name': '', 'link': ''} now make a crumb name1 > name2 > name3-->
    <div class="flex flex-wrap justify-center w-full bg-indigo-900 text-gray-400 text-sm">
        <div class="max-w-screen-xl w-full">
            <nav class="w-full px-4 py-2">
            <!--loop over crumbs -->
                <nuxt-link v-for="(crumb, index) in realCrumbs" :key="index" :to="crumb.link">
                    <span class="hover:text-cyan-400 animate-item" >{{ crumb.name }}</span>
                    <span v-if="index < realCrumbs.length - 1"> > </span>
                </nuxt-link>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        crumbs: {
            type: Array,
            required: false,
            default: []
        },
    },
    computed: {
        realCrumbs() {
            // if crumbs is not empty return crumbs else return computed crumbs
            return this.crumbs.length > 0 ? this.crumbs : this.computedCrumbs;
        },
        computedCrumbs() {
            // split route path by '/' and remove empty string name is Home and link is '/'
            // make every name first letter uppercase
            // replace - with space
            
            let crumb = this.$route.path.split('/').map((item) => {
                if (item == '') {
                    return {
                        name: 'Home',
                        link: '/',
                    };
                }
                return {
                    name: item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' '),
                    // link is cumulative of previous link and current item link joined by '/'
                    link: this.$route.path.split(item)[0] + item,
                };
            });
            return crumb;
        }
    },
}
</script>