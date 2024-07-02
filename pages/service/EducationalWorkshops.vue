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
            src="/20.webp"
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
              Educational Workshops and Seminars
            </h2>
            <p class="info-content">
              Educational workshops and seminars are a cornerstone of
              empowerment, providing women with the tools and knowledge
              necessary to enhance their personal and professional lives. These
              sessions cover a broad range of topics, including women's health,
              financial literacy, career development, and personal safety. By
              offering these workshops regularly, organizations can help women
              build the confidence and skills needed to navigate various life
              challenges and opportunities. Women's health workshops focus on
              essential topics such as reproductive health, mental wellness, and
              nutrition. These sessions provide women with accurate information
              and practical advice on maintaining their health and well-being.
              By understanding their bodies and health needs better, women can
              make informed decisions and adopt healthier lifestyles.
              Additionally, these workshops often include discussions on
              managing stress, preventing common illnesses, and accessing
              healthcare services, which are crucial for maintaining overall
              health. Financial literacy and career development workshops are
              designed to equip women with the knowledge and skills to achieve
              financial independence and career success. Financial literacy
              sessions cover topics like budgeting, saving, investing, and
              understanding credit. These workshops help women manage their
              finances effectively, plan for the future, and achieve their
              financial goals. Career development seminars, on the other hand,
              focus on skill-building, resume writing, interview preparation,
              and networking. By participating in these sessions, women can
              enhance their employability, explore new career opportunities, and
              advance in their chosen fields.
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
