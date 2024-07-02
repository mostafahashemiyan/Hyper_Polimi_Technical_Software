<template>
    <div class="w-full" v-if="!loading">
        <BreadCrumb :crumbs="crumbs" v-if="!loading"/>
        <div class="flex flex-wrap flex-col justify-center max-w-screen-xl m-auto md:px-4 md:py-8 border-b border-gray-400">
            <div class="flex flex-wrap flex-col w-full items-center justify-center">
                <div class="flex flex-wrap w-full items-start justify-center md:justify-between">
                    <!--image of width 1/5 in tablet and large screen and 10/12 in mobile-->
                    <img :src="speaker.picture" :alt="speaker.name" class="md:rounded-xl w-full md:w-1/5  aspect-[9/16] object-cover">
                    <!--Other content-->
                    <div class="flex flex-wrap flex-col w-10/12 md:w-4/5 md:pl-8 md:pr-4 pl-0 pr-0 py-4">
                        <!--Name with the icon of user-->
                        <h2 class="info-label">
                            <span><font-awesome-icon :icon="['fas', 'user']" class="mr-2 text-lg"/></span>
                            {{ speaker.name }}
                        </h2>
                        <!--birthdate-->
                        <p class="info-content">
                            <span><font-awesome-icon :icon="['fas', 'cake']" class="mr-2 text-lg"/></span>
                            {{ speaker.birthdate }}
                        </p>
                        <h3 class="info-label">
                            <span><font-awesome-icon :icon="['fas', 'certificate']" class="mr-2 text-lg"/></span>
                            Expertise
                        </h3>
                        <p class="info-content">
                            {{ speaker.expretise }}
                        </p>
                        <h3 class="info-label">
                            <span><font-awesome-icon :icon="['fas', 'circle-info']" class="mr-2 text-lg"/></span>
                            About Me
                        </h3>
                        <p class="info-content">
                            {{ speaker.summary }}
                        </p>
                        
                        <h3 class="info-label mb-4">
                            <span><font-awesome-icon :icon="['fas', 'school']" class="mr-2 text-lg"/></span>
                            Education
                        </h3>
                        <div class="info-content">
                            <!--loop over education-->
                            <ul v-for="education in educations" :key="`edu-${education.id}`">
                                <li class="mb-2">
                                    <p class="font-bold">
                                        {{ education.level }}, {{ education.field }}
                                    </p>
                                    <p class="text-sm text-gray-600 flex flex-wrap">
                                        <span class="text-gray-600 font-normal text-sm mr-4">
                                            <span><font-awesome-icon :icon="['fas', 'location-pin']"/></span>
                                            {{ education.institution }}
                                        </span>
                                        <span>
                                            <span class=""><font-awesome-icon :icon="['fas', 'calendar']" class="mr-2"/></span>
                                            {{ education.start }} - {{ education.end }}
                                        </span>
                                    </p>
                                    <p>{{ education.description }}</p>
                                </li>
                            </ul>
                        </div>

                        <h3 class="info-label mb-4">
                            <span><font-awesome-icon :icon="['fas', 'gear']" class="mr-2 text-lg"/></span>
                            Work Experience
                        </h3>
                        <div class="info-content">
                            <!--loop over education-->
                            <ul v-for="job in jobs" :key="`job-${job.id}`">
                                <li class="mb-2">
                                    <p class="font-bold">
                                        {{ job.level }}, {{ job.role }}
                                    </p>
                                    <p class="text-sm text-gray-600 flex flex-wrap">
                                        <span class="text-gray-600 font-normal text-sm mr-4">
                                            <span><font-awesome-icon :icon="['fas', 'briefcase']"/></span>
                                            {{ job.company }}
                                        </span>
                                        <span>
                                            <span class=""><font-awesome-icon :icon="['fas', 'calendar']" class="mr-2"/></span>
                                            {{ job.start }} - {{ job.end }}
                                        </span>
                                    </p>
                                    <p>{{ job.description }}</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <list-cards :items="teaches" title="Speaks in Lectures" :isBackgroundDark="false" />
    </div>
</template>

<script setup>

const client = useSupabaseClient()
const route = useRoute()
const loading = ref(true)

async function getItem() {
    const { data, error } = await client.from('Speaker').select('*').eq('id', route.params.id).single();
    if (error) {
        console.error('Error fetching data:', error.message);
        // send to not found page
        throw createError({
          statusCode: 404,
          message: 'not found',
          fatal: true
        })
        return;
    }
    return data;
}

const speaker = await getItem();
console.log(speaker)


async function getEducations() {
    const { data, error } = await client.from('Education').select('*').eq('speaker_id', route.params.id);
    if (error) {
        console.error('Error fetching data:', error.message);
        return [];
    }
    // sort data based on end descending
    data.sort((a, b) => {
        return new Date(b.end) - new Date(a.end);
    })
    // convert each start and end in data to localeString date
    data.forEach((item) => {
        item.start = new Date(item.start).toLocaleString('default', { month: 'short', year: 'numeric' }) ;
        item.end = new Date(item.end).toLocaleString('default', { month: 'short', year: 'numeric' }) ;
        console.log(item.start)
    })
    return data;
}
const educations = await getEducations();
console.log(educations)

async function getJobs() {
    const { data, error } = await client.from('Job').select('*').eq('speaker_id', route.params.id);
    if (error) {
        console.error('Error fetching data:', error.message);
        return [];
    }
    // sort data based on end descending
    data.sort((a, b) => {
        return new Date(b.end) - new Date(a.end);
    })
    // convert each start and end in data to localeString date
    data.forEach((item) => {
        item.start = new Date(item.start).toLocaleString('default', { month: 'short', year: 'numeric' }) ;
        item.end = new Date(item.end).toLocaleString('default', { month: 'short', year: 'numeric' }) ;
        console.log(item.start)
    })
    return data;
}
const jobs = await getJobs();
console.log(jobs)

async function getTeaches() {
    const { data, error } = await client.from('Teach').select('lecture_id (id, title, description, picture)').eq('speaker_id', route.params.id);
    if (error) {
        console.error('Error fetching data:', error.message);
        return [];
    }
    // convert each data push in result
    // title -> lecture_id.title
    // subtitle -> lecture_id.description
    // image_url -> lecture_id.picture
    // link -> lectures/lecture_id.id
    let result = []
    data.forEach((item) => {
        result.push({
            title: item.lecture_id.title,
            subtitle: item.lecture_id.description,
            image_url: item.lecture_id.picture,
            link: '/lectures/' + item.lecture_id.id,
        })
    })
    return result;
}
const teaches = await getTeaches();
console.log(teaches)
function getBreadCrumb(route) {
    // split route path by '/' and remove empty string name is Home and link is '/'
    // make every name first letter uppercase
    // replace - with space
    
    let crumb = route.path.split('/').map((item) => {
        if (item == '') {
            return {
                name: 'Home',
                link: '/',
            };
        }
        return {
            name: item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' '),
            // link is cumulative of previous link and current item link joined by '/'
            link: route.path.split(item)[0] + item,
        };
    });

    // change last item name to speaker name
    crumb[crumb.length - 1].name = speaker.name;
    return crumb;
}

const crumbs = getBreadCrumb(route);
loading.value = false;
</script>

<style scoped>
.info-label {
    @apply text-xl text-indigo-950;    
}
.info-content {
    @apply text-base text-gray-800 mb-4;
}
</style>
