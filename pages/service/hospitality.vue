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
            src="/16.jpg"
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
              HOSPITALITY AREA
            </h2>
            <p class="info-content">
              In these secure residences, women who have had to leave their
              abusers to ensure their safety can continue their journey of
              healing from violent experiences. The environment is designed to
              provide a safe and supportive space where they can focus on
              recovering from the trauma they have endured. Here, the women can
              start to rebuild their lives, free from the immediate threat of
              violence, and begin the process of healing both emotionally and
              physically. The secure residences offer more than just a safe
              haven; they provide a foundation for the women to construct a
              future characterized by freedom and independence. Within this
              supportive community, the women receive comprehensive assistance
              from a team of professionals, including educators, psychologists,
              and mediators. This multidisciplinary approach ensures that they
              have access to all the necessary resources to aid in their
              recovery and personal development. In addition to emotional and
              psychological support, the residences focus on equipping the women
              with practical skills and knowledge that will empower them to
              achieve independence. This includes vocational training, financial
              planning, and educational opportunities that are crucial for their
              long-term stability. By developing these skills, the women are
              better prepared to enter or re-enter the workforce, which is a
              vital step towards achieving financial independence and securing a
              stable future for themselves and their children. Ultimately, the
              goal of these secure residences is to foster an environment where
              women can not only recover from their past traumas but also
              envision and build a brighter, more independent future. The
              emphasis is on creating a pathway to freedom, where each woman is
              supported in becoming self-sufficient, confident, and empowered to
              make decisions that positively shape her life and the lives of her
              children. This holistic approach ensures that the journey towards
              freedom and independence is sustainable and transformative.
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
