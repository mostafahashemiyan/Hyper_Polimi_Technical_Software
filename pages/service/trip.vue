<template>
  <div class="w-full">
    <BreadCrumb />
    <div
      class="flex flex-wrap flex-col justify-center max-w-screen-xl m-auto md:px-4 md:py-8 border-b border-gray-400"
    >
      <div class="flex flex-wrap flex-col w-full items-center justify-center">
        <div
          class="flex flex-wrap w-full items-start justify-center md:justify-between"
        >
          <!--image of width 1/5 in tablet and large screen and 10/12 in mobile-->
          <img
            src="/19.jpg"
            alt="let's talk"
            class="md:rounded-xl w-full md:w-2/5 aspect-16/9 md:aspect-square object-cover"
          />
          <!--Other content-->
          <div
            class="flex flex-wrap flex-col w-10/12 md:w-3/5 md:pl-8 md:pr-4 pl-0 pr-0 py-4"
          >
            <!--Name with the icon of user-->
            <h2 class="info-label">
              <span
                ><font-awesome-icon
                  :icon="['fas', 'landmark']"
                  class="mr-2 text-lg"
              /></span>
              TRIP AREA
            </h2>
            <p class="info-content">
              With the dual purpose of enhancing travelers' experiences and
              promoting sustainable tourism, the travel desk offers a range of
              customized itineraries and group excursions. These services are
              meticulously tailored to meet the diverse interests and
              requirements of travelers who are eager to explore new
              destinations responsibly. By focusing on sustainability, the
              travel desk ensures that tourism activities are environmentally
              friendly, culturally sensitive, and economically beneficial to
              local communities. The customized itineraries provided by the
              travel desk are designed to cater to individual preferences and
              travel styles. Whether travelers are looking for adventure,
              relaxation, cultural immersion, or nature exploration, the travel
              desk creates personalized plans that highlight the best
              sustainable practices. These itineraries often include
              eco-friendly accommodations, visits to local artisans and markets,
              and activities that have minimal environmental impact, such as
              hiking, biking, or wildlife watching. The goal is to provide
              enriching experiences that connect travelers with the local
              culture and environment in a meaningful way. Group excursions
              organized by the travel desk are another key component of its
              offerings. These excursions are designed to foster a sense of
              community among travelers while promoting sustainable travel
              practices. By traveling in groups, participants can reduce their
              carbon footprint and contribute to more efficient use of
              resources. Group activities might include guided tours of
              historical sites, community-led workshops, or conservation
              projects. These experiences not only enhance travelers'
              understanding and appreciation of the destination but also support
              local economies and conservation efforts. Overall, the travel
              desk's focus on customized itineraries and group excursions aims
              to create a balanced and responsible approach to tourism. By
              prioritizing sustainability, the travel desk helps travelers enjoy
              their journeys while minimizing their impact on the environment
              and maximizing their positive contributions to the local
              communities they visit. This dual approach ensures that travelers
              can have enriching and memorable experiences that are aligned with
              the principles of sustainable tourism.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info-label {
  @apply text-xl text-indigo-950;
}
.info-content {
  @apply text-base text-gray-800 mb-4;
}

.info-content {
  text-align: justify;
  hyphens: auto;
}
</style>
