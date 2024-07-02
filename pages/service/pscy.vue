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
            src="/18.jpg"
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

              PSYCHOLOGICAL AREA
            </h2>
            <p class="info-content">
              The help desk is designed with the dual goal of empowering women
              and preventing violence. It serves as a vital resource for women
              seeking to escape violent situations, providing immediate and
              personalized support. The help desk offers a safe and confidential
              space where women can voice their concerns, seek guidance, and
              start their journey towards a life free from violence. One of the
              primary services provided by the help desk is tailored
              psychological support. This support is customized to meet the
              specific needs of each woman, recognizing that every individual's
              experience with violence is unique. Women can receive
              psychological counseling either individually or in group settings,
              depending on their preferences and needs. Individual sessions
              allow for a deep, personalized exploration of each woman’s
              experiences and traumas, providing focused attention and support.
              Group sessions, on the other hand, offer a sense of community and
              shared understanding, which can be incredibly empowering and help
              women realize they are not alone in their struggles. In addition
              to psychological support, the help desk also plays a crucial role
              in empowering women by providing them with the information and
              resources they need to regain control of their lives. This
              includes legal advice, assistance with accessing safe housing, and
              connections to vocational training and employment opportunities.
              By equipping women with these practical tools and knowledge, the
              help desk helps them to build a sustainable and independent
              future. Overall, the help desk is an integral part of the
              initiative’s strategy to empower women and prevent violence. By
              offering both tailored psychological support and practical
              resources, the help desk addresses the immediate and long-term
              needs of women seeking to break free from violent situations. This
              comprehensive approach ensures that women are supported at every
              step of their journey, from escaping violence to achieving
              independence and empowerment.
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
