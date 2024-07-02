<template>
  <div v-if="!loading">
    <BreadCrumb />
    <div
      class="flex flex-wrap flex-col justify-center max-w-screen-xl m-auto md:px-4 md:py-8 border-b border-gray-400"
    >
      <list-projects :items="items" title="" :isBackgroundDark="false" />
    </div>

    <nuxt-link to="/service/reception" class="btn">open </nuxt-link>
    <nuxt-link to="/service/hospitality" class="btn1">open </nuxt-link>
    <nuxt-link to="/service/work" class="btn2">open </nuxt-link>
    <nuxt-link to="/service/pscy" class="btn3">open </nuxt-link>
    <nuxt-link to="/service/LegalAssistanceandAdvocacy" class="btn6"
      >open
    </nuxt-link>
    <nuxt-link to="/service/trip" class="btn4">open </nuxt-link>
    <nuxt-link to="/service/EducationalWorkshops" class="btn5">open </nuxt-link>
    <nuxt-link to="/service/CounselingandSupportGroups" class="btn7"
      >open
    </nuxt-link>
  </div>
</template>

<script setup>
const client = useSupabaseClient();
const loading = ref(true);
async function getItem() {
  const { data, error } = await client
    .from("Service")
    .select(
      "id, service_name,service_description,service_responsible,service_image"
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
    item.title = item.service_name;
    item.subtitle = item.service_description;
    item.responsible = item.service_responsible;
    item.image_url = item.service_image;
    item.link = "/services/" + item.id;
  });
  return data;
}
const items = await getItem();
loading.value = false;
</script>
<style scoped>
.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(27, 27, 27);
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 1000px;
  display: inline-block;
  transition: all 0.2s;
  position: absolute;
  bottom: 150px;
  left: 1230px;
}

.btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(27, 27, 27, 0.5);
}

.btn:active {
  transform: translateY(-3px);
}

.btn::after {
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

.btn:hover::after {
  background-color: rgb(219, 105, 6);
  transform: scaleX(1.4) scaleY(1.5);
  opacity: 0;
}
.btn1:link,
.btn1:visited {
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(27, 27, 27);
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 1000px;
  display: inline-block;
  transition: all 0.2s;
  position: absolute;
  bottom: -250px;
  left: 1230px;
}

.btn1:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(27, 27, 27, 0.5);
}

.btn1:active {
  transform: translateY(-3px);
}

.btn1::after {
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

.btn1:hover::after {
  background-color: rgb(219, 105, 6);
  transform: scaleX(1.4) scaleY(1.5);
  opacity: 0;
}
.btn2:link,
.btn2:visited {
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(27, 27, 27);
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 1000px;
  display: inline-block;
  transition: all 0.2s;
  position: absolute;
  bottom: -700px;
  left: 1230px;
}

.btn2:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(27, 27, 27, 0.5);
}

.btn2:active {
  transform: translateY(-3px);
}

.btn2::after {
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

.btn2:hover::after {
  background-color: rgb(219, 105, 6);
  transform: scaleX(1.4) scaleY(1.5);
  opacity: 0;
}
.btn3:link,
.btn3:visited {
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(27, 27, 27);
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 1000px;
  display: inline-block;
  transition: all 0.2s;
  position: absolute;
  bottom: -1100px;
  left: 1230px;
}

.btn3:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(27, 27, 27, 0.5);
}

.btn3:active {
  transform: translateY(-3px);
}

.btn3::after {
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

.btn3:hover::after {
  background-color: rgb(219, 105, 6);
  transform: scaleX(1.4) scaleY(1.5);
  opacity: 0;
}
.btn4:link,
.btn4:visited {
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(27, 27, 27);
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 1000px;
  display: inline-block;
  transition: all 0.2s;
  position: absolute;
  bottom: -1500px;
  left: 1230px;
}

.btn4:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(27, 27, 27, 0.5);
}

.btn4:active {
  transform: translateY(-3px);
}

.btn4::after {
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

.btn4:hover::after {
  background-color: rgb(219, 105, 6);
  transform: scaleX(1.4) scaleY(1.5);
  opacity: 0;
}
.btn5:link,
.btn5:visited {
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(27, 27, 27);
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 1000px;
  display: inline-block;
  transition: all 0.2s;
  position: absolute;
  bottom: -1900px;
  left: 1230px;
}

.btn5:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(27, 27, 27, 0.5);
}

.btn5:active {
  transform: translateY(-3px);
}

.btn5::after {
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

.btn5:hover::after {
  background-color: rgb(219, 105, 6);
  transform: scaleX(1.4) scaleY(1.5);
  opacity: 0;
}
.btn6:link,
.btn6:visited {
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(27, 27, 27);
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 1000px;
  display: inline-block;
  transition: all 0.2s;
  position: absolute;
  bottom: -2300px;
  left: 1230px;
}

.btn6:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(27, 27, 27, 0.5);
}

.btn6:active {
  transform: translateY(-3px);
}

.btn6::after {
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

.btn6:hover::after {
  background-color: rgb(219, 105, 6);
  transform: scaleX(1.4) scaleY(1.5);
  opacity: 0;
}
.btn7:link,
.btn7:visited {
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(27, 27, 27);
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 1000px;
  display: inline-block;
  transition: all 0.2s;
  position: absolute;
  bottom: -2700px;
  left: 1230px;
}

.btn7:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(27, 27, 27, 0.5);
}

.btn7:active {
  transform: translateY(-3px);
}

.btn7::after {
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

.btn7:hover::after {
  background-color: rgb(219, 105, 6);
  transform: scaleX(1.4) scaleY(1.5);
  opacity: 0;
}
</style>
