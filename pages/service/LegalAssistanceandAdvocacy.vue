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
            src="/21.webp"
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
              Legal Assistance and Advocacy
            </h2>
            <p class="info-content">
              Legal assistance and advocacy are critical services for women
              facing complex legal challenges. These services offer specialized
              legal advice and representation for issues such as divorce,
              custody battles, domestic violence, and workplace discrimination.
              By providing accessible legal support, these programs ensure that
              women can navigate the legal system effectively and secure the
              rights and protections they deserve. Divorce and custody battles
              can be particularly stressful and complex, often involving
              emotional and financial hardships. Legal assistance programs
              provide women with the necessary guidance to understand their
              rights and the legal procedures involved. Lawyers specializing in
              family law help women prepare for court appearances, negotiate
              settlements, and advocate for their interests and those of their
              children. These services aim to achieve fair outcomes that support
              the well-being and stability of the family. In cases of domestic
              violence, legal advocacy is essential for ensuring the safety and
              rights of survivors. Advocates assist women in obtaining
              restraining orders, pressing charges against abusers, and
              accessing emergency shelters and support services. They also
              provide emotional support and counseling, helping survivors to
              rebuild their lives free from violence. Additionally, advocacy
              services work to raise awareness and influence policy changes to
              better protect and support victims of domestic violence.
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
