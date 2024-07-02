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
            src="/about-us.jpeg"
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
                  :icon="['fas', 'landmark']"
                  class="mr-2 text-lg"
              /></span>
              Who we are?
            </h2>
            <p class="info-content">
              Welcome to oraganization for caring the women, a sanctuary where every woman's health and well-being are prioritized.
              where we believe in fostering a supportive community that empowers women to take charge of their own health and
              wellness at every stage of life.
              Our organization emerged from a deep-seated need for a holistic approach to women`s health—one that intertwines
              physical care with emotional and mental support in a nurturing environment. We are dedicated to providing
              comprehensive services that encompass not just  medical care but also educational and emotional support tailored
              to the unique needs of women.
              Our team consists of seasoned professionals from diverse backgrounds, including healthcare, counseling,
              and wellness coaching, all united by a common goal: to advocate for and support women's health and rights.
              At our place, we strive to create a safe space where women can learn, share, and grow together,
              enhancing their quality of life and fostering independence.
              Join us as we continue to inspire, educate, and support women in their journey towards holistic health
              and happiness. Our organization is not just an organization; it`s a movement dedicated to nurturing
              the lifelong well-being of women everywhere.
            </p>

            <h2 class="info-label">
              <span
                ><font-awesome-icon
                  :icon="['fas', 'gears']"
                  class="mr-2 text-lg"
              /></span>
              What we do?
            </h2>
            <p class="info-content">
              At our organization, we are committed to advancing women's health through a comprehensive suite of
              services tailored to the unique needs of women at all stages of life. Our work is centered around
              three core areas: health services, education, and community support.
              Health Services: We provide access to high-quality medical care with a focus on gynecological health,
              prenatal and postnatal care, mental health services, and preventive screenings. Our integrated approach
              ensures that women receive holistic care that addresses both physical and emotional health needs.
              Education: Empowering women with knowledge is a cornerstone of our mission. We offer workshops,
              seminars, and resources on various aspects of health and wellness, including nutrition, physical fitness,
              mental health, and reproductive health. Our educational programs are designed to empower women to
              make informed decisions about their health and the well-being of their families.
              Community Support: Understanding the power of community, we foster a supportive network where women
              can connect, share experiences, and support one another in a safe and nurturing environment. Through
              support groups, community outreach programs, and collaborative events, we build solidarity and advocacy 
              for women's issues.
              Each of these pillars is crafted to uplift and empower women, providing them with the tools and support
              necessary to lead healthier and more fulfilled lives. At [Organization Name], we don't just treat women;
              we work alongside them as they navigate the complexities of health and wellness in today's world.
            </p>

            <h2 class="info-label">
              <span
                ><font-awesome-icon
                  :icon="['fas', 'calendar']"
                  class="mr-2 text-lg"
              /></span>
              When we start our organization?
            </h2>
            <p class="info-content">15th - 30th July 2022</p>

            <h2 class="info-label">
              <span
                ><font-awesome-icon
                  :icon="['fas', 'money-bill']"
                  class="mr-2 text-lg"
              /></span>
              How much does it cost?
            </h2>
            <p class="info-content">
              At [Organization Name], we believe that access to comprehensive women's health care is a fundamental right,
              not a privilege. As a non-profit charitable organization, we are committed to providing our services at
              no cost to those we serve. Our programs, educational workshops, and support networks are funded through
              grants, philanthropic donations, and partnerships with like-minded organizations that share our vision
              of empowering women.
              Our goal is to ensure that every woman, regardless of her financial situation, has access to the care
              and resources she needs to lead a healthy and informed life. We strive to remove financial barriers to
              healthcare and education, ensuring that our services are available to all who need them.
              Your well-being is our priority, and at [Organization Name], you will find a supportive community ready
              to assist you without any financial burden. Join us in our mission to nurture and empower women, as we
              continue to provide vital services through the generosity of our supporters and the dedication of our volunteers.
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
