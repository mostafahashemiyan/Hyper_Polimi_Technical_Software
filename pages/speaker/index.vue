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

<script setup>
const client = useSupabaseClient();
const loading = ref(true);
async function getItem() {
  const { data, error } = await client
    .from("Person")
    .select("id, name, description, picture");
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
    item.title = item.name;
    item.subtitle = item.description;
    item.image_url = item.picture;
    item.link = "/speakers/" + item.id;
  });
  return data;
}
const items = await getItem();
loading.value = false;
</script>
