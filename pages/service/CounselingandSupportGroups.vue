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
            src="/22.webp"
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
              Counseling and Support Groups
            </h2>
            <p class="info-content">
              Counseling and support groups are essential services that provide
              women with the emotional and psychological assistance they need to
              navigate various life challenges. Professional counselors and
              therapists specializing in areas such as domestic violence, mental
              health, and relationship counseling offer tailored support to help
              women overcome trauma, develop coping strategies, and improve
              their overall well-being. By addressing these critical issues in a
              safe and confidential setting, counseling services empower women
              to heal and rebuild their lives. For women experiencing domestic
              violence, access to specialized counseling is crucial. Therapists
              trained in trauma and abuse can provide the necessary support to
              help survivors process their experiences and develop safety plans.
              Counseling sessions can focus on rebuilding self-esteem, managing
              anxiety and depression, and fostering resilience. Additionally,
              therapists can assist women in understanding the dynamics of
              abusive relationships, enabling them to make informed decisions
              about their futures and promoting long-term recovery and
              independence. Support groups complement individual counseling by
              offering a communal space where women can share their experiences
              and connect with others facing similar challenges. These groups
              provide a supportive environment where participants can speak
              openly without fear of judgment, fostering a sense of solidarity
              and mutual support. Whether dealing with issues related to mental
              health, relationship difficulties, or the aftermath of domestic
              violence, support groups help women realize they are not alone.
              The shared experiences and collective wisdom of the group can
              offer new perspectives and coping strategies, enhancing each
              member's ability to navigate their personal journeys.
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
