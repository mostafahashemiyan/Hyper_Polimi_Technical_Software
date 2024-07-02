<template>
  <div v-if="!loading">
    <BreadCrumb />
    <div
      class="flex flex-wrap flex-col justify-center max-w-screen-xl m-auto md:px-4 md:py-8 border-b border-gray-400"
    >
      <list-projects :items="items" title="" :isBackgroundDark="false" />
    </div>
    <nuxt-link to="/activities/freedom" class="bta">see more </nuxt-link>
    <nuxt-link to="/activities/talk" class="bta1">see more </nuxt-link>
    <nuxt-link to="/activities/newborn" class="bta2">see more </nuxt-link>
    <nuxt-link to="/activities/WomenCourtforWomenMigrants" class="bta5"
      >see more
    </nuxt-link>
    <nuxt-link to="/activities/WorkAutonomyFreedomforWomen" class="bta4"
      >see more
    </nuxt-link>
    <nuxt-link to="/activities/TheWordstoSayIt" class="bta3"
      >see more
    </nuxt-link>
    <nuxt-link to="/activities/HouseAlbum" class="bta6">see more </nuxt-link>
  </div>
</template>

<script setup>
const client = useSupabaseClient();
const loading = ref(true);
async function getItem() {
  const { data, error } = await client
    .from("Project")
    .select(
      "id, project_name, project_description, project_responsible,project_picture"
    );
  if (error) {
    console.error("Error fetching data:", error.message);
    return;
  }
  console.log(data);
  // convert each data push in result
  // title -> item.title
  // subtitle -> item.description
  // image_url -> item.picture
  // link -> lectures/item.id
  data.forEach((item) => {
    item.title = item.project_name;
    item.subtitle = item.project_description;
    item.image_url = item.project_picture;
    item.responsible = item.project_responsible;
    item.link = "/projects/project/" + item.id;
  });
  return data;
}
const items = await getItem();
loading.value = false;
</script>
<style scoped>
.bta:link,
.bta:visited {
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(27, 27, 27);
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 1000px;
  display: inline-block;
  transition: all 0.2s;
  position: absolute;
  bottom: 27px;
  left: 1230px;
}

.bta:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(27, 27, 27, 0.5);
}

.bta:active {
  transform: translateY(-3px);
}

.bta::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
  transition: all 0.3s;
}

.bta:hover::after {
  background-color: rgb(219, 105, 6);
  transform: scaleX(1.4) scaleY(1.5);
  opacity: 0;
}
.bta1:link,
.bta1:visited {
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(27, 27, 27);
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 1000px;
  display: inline-block;
  transition: all 0.2s;
  position: absolute;
  bottom: -495px;
  left: 1230px;
}

.bta1:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(27, 27, 27, 0.5);
}

.bta1:active {
  transform: translateY(-3px);
}

.bta1::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
  transition: all 0.3s;
}

.bta1:hover::after {
  background-color: rgb(219, 105, 6);
  transform: scaleX(1.4) scaleY(1.5);
  opacity: 0;
}
.bta2:link,
.bta2:visited {
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(27, 27, 27);
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 1000px;
  display: inline-block;
  transition: all 0.2s;
  position: absolute;
  bottom: -1000px;
  left: 1230px;
}

.bta2:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(27, 27, 27, 0.5);
}

.bta2:active {
  transform: translateY(-3px);
}

.bta2::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
  transition: all 0.3s;
}

.bta2:hover::after {
  background-color: rgb(219, 105, 6);
  transform: scaleX(1.4) scaleY(1.5);
  opacity: 0;
}
.bta3:link,
.bta3:visited {
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(27, 27, 27);
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 1000px;
  display: inline-block;
  transition: all 0.2s;
  position: absolute;
  bottom: -1400px;
  left: 1230px;
}

.bta3:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(27, 27, 27, 0.5);
}

.bta3:active {
  transform: translateY(-3px);
}

.bta3::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
  transition: all 0.3s;
}

.bta3:hover::after {
  background-color: rgb(219, 105, 6);
  transform: scaleX(1.4) scaleY(1.5);
  opacity: 0;
}
.bta4:link,
.bta4:visited {
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(27, 27, 27);
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 1000px;
  display: inline-block;
  transition: all 0.2s;
  position: absolute;
  bottom: -1750px;
  left: 1230px;
}

.bta4:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(27, 27, 27, 0.5);
}

.bta4:active {
  transform: translateY(-3px);
}

.bta4::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
  transition: all 0.3s;
}

.bta4:hover::after {
  background-color: rgb(219, 105, 6);
  transform: scaleX(1.4) scaleY(1.5);
  opacity: 0;
}
.bta5:link,
.bta5:visited {
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(27, 27, 27);
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 1000px;
  display: inline-block;
  transition: all 0.2s;
  position: absolute;
  bottom: -2200px;
  left: 1230px;
}

.bta5:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(27, 27, 27, 0.5);
}

.bta5:active {
  transform: translateY(-3px);
}

.bta5::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
  transition: all 0.3s;
}

.bta5:hover::after {
  background-color: rgb(219, 105, 6);
  transform: scaleX(1.4) scaleY(1.5);
  opacity: 0;
}
.bta6:link,
.bta6:visited {
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(27, 27, 27);
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 1000px;
  display: inline-block;
  transition: all 0.2s;
  position: absolute;
  bottom: -2600px;
  left: 1230px;
}

.bta6:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(27, 27, 27, 0.5);
}

.bta6:active {
  transform: translateY(-3px);
}

.bta6::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
  transition: all 0.3s;
}

.bta6:hover::after {
  background-color: rgb(219, 105, 6);
  transform: scaleX(1.4) scaleY(1.5);
  opacity: 0;
}
</style>
