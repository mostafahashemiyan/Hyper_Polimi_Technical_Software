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
            src="/17.jpg"
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
              WORK AREA
            </h2>
            <p class="info-content">
              The help desk is a crucial component of the "A Journey for
              Freedom" initiative, designed with the dual goal of empowering
              women and preventing violence. This service acts as a first point
              of contact for women seeking to escape violent situations,
              offering immediate and personalized support. The help desk
              provides a safe and confidential environment where women can
              express their concerns and begin the process of seeking help. One
              of the key features of the help desk is its tailored psychological
              support, which is customized to meet the specific needs of each
              woman. Whether provided individually or in groups, this
              psychological support is crucial for helping women process their
              experiences and begin their healing journey. Individual sessions
              allow for a more personalized approach, addressing the unique
              challenges and traumas that each woman faces. Group sessions, on
              the other hand, offer a sense of community and shared experience,
              which can be incredibly validating and empowering for
              participants. In addition to psychological support, the help desk
              also plays a vital role in empowering women by providing them with
              the resources and information they need to take control of their
              lives. This includes guidance on legal rights, access to safe
              housing, and connections to vocational training programs. By
              equipping women with these tools, the help desk helps them to
              build a future free from violence and dependency. Overall, the
              help desk is an integral part of the initiative's strategy to
              empower women and prevent violence. By offering tailored
              psychological support and practical resources, the help desk not
              only addresses the immediate needs of women in crisis but also
              lays the groundwork for their long-term recovery and independence.
              This dual approach ensures that women are supported throughout
              their journey, from the initial escape from violence to the
              achievement of a safe, empowered, and independent life.
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
