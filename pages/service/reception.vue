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
            src="/15.jpg"
            alt="Reception Area"
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
              RECEPTION AREA
            </h2>
            <p class="info-content">
              The initial interaction that many women have with the "A Journey
              for Freedom" center typically begins with a telephone call. This
              service is crucial for addressing urgent crises and providing
              immediate relief to women in adverse situations. The staff at the
              center is trained to handle these calls with sensitivity and care,
              offering a safe space for women to voice their concerns and seek
              help. During these conversations, women can explore and clarify
              their experiences, gaining a better understanding of whether they
              constitute violence. This initial contact is a critical first step
              in the process of seeking support and intervention. Once women
              decide to visit the center, they are greeted warmly by the
              reception staff. The in-person reception provides a welcoming and
              safe environment, crucial for those who have endured violence and
              are seeking refuge and support. The reception staff plays a vital
              role in assisting women as they navigate the complexities of
              escaping violence. This face-to-face interaction allows for a more
              personalized and comprehensive assessment of their needs, enabling
              the staff to offer tailored guidance and support. The in-person
              reception also marks the beginning of the women's individual
              journeys toward recovery and empowerment. Through these direct
              interactions, the staff can better understand each woman's unique
              situation and challenges. This enables them to provide specific
              resources and support services that address their immediate needs
              while also laying the groundwork for long-term recovery and
              independence. The personal connection made during these
              interactions helps build trust and encourages women to engage more
              deeply with the available support systems. The combination of
              telephone support and in-person reception is designed to create a
              seamless and supportive pathway for women escaping violence.
              Telephone support offers an accessible and immediate lifeline,
              while the in-person reception provides a more in-depth and
              personalized approach to recovery. Together, these services ensure
              that women receive continuous and comprehensive assistance, from
              their initial cry for help to their eventual journey toward
              empowerment and independence. This integrated approach is
              fundamental to the center's mission of supporting women through
              every stage of their recovery process.
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
