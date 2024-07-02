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
            src="/contact-us-new.jpg"
            alt="Contact us"
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
                  :icon="['fas', 'location-dot']"
                  class="mr-2 text-lg"
              /></span>
              Address
            </h2>
            <p class="info-content">
              Piazza Leonardo da Vinci, 32 20133 Milano
            </p>

            <h2 class="info-label">
              <span
                ><font-awesome-icon
                  :icon="['fas', 'phone']"
                  class="mr-2 text-lg"
              /></span>
              Phone
            </h2>
            <p class="info-content">+39 02 2399 1</p>

            <h2 class="info-label">
              <span
                ><font-awesome-icon
                  :icon="['fas', 'envelope']"
                  class="mr-2 text-lg"
              /></span>
              Info Office
            </h2>
            <p class="info-content">organization.helpforwomenl@hfw.com</p>

            <h2 class="info-label">
              <span
                ><font-awesome-icon
                  :icon="['fas', 'envelope']"
                  class="mr-2 text-lg"
              /></span>
              Register Office
            </h2>
            <p class="info-content">organization.helpforwomen@hfw.com</p>

            <h2 class="info-label">
              <span
                ><font-awesome-icon
                  :icon="['fas', 'money-bill']"
                  class="mr-2 text-lg"
              /></span>
              Cost
            </h2>
            <p class="info-content">it's completely free</p>
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
</style>
