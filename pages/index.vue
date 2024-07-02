<template>
  <div class="w-full">
    <div class="w-full">
      <!-- add cover image here then put a div on the cover image-->
      <div
        class="flex flex-wrap justify-center items-center bg-cover-image p-4"
      >
        <div class="max-w-screen-xl w-full">
          <div
            class="flex flex-wrap flex-col bg-black/40 p-4 rounded w-fit text-white"
          >
            <h1 class="text-4xl">HOME FOR WOMEN</h1>
            <h2 class="text-2xl">We are here to hear you</h2>
            <nav class="mt-4 flex flex-wrap text-center">
              <!--link to the schedule -->
              <nuxt-link to="/contact-us" class="border-white cta-btn w-1/2"
                >CONTACT</nuxt-link
              >
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Summary about summer school -->

    <div class="flex flex-wrap justify-center items-center bg-white p-4 mt-8">
      <div class="max-w-screen-xl w-full flex flex-wrap">
        <!--add image with width 1/3 in tablet and large screen and remove it in mobile version-->
        <div class="hidden md:block md:w-1/3">
          <img
            src="/summary.jpg"
            alt="Summer school picture"
            class="rounded-xl w-full aspect-square object-cover"
          />
        </div>

        <div
          class="flex flex-wrap flex-col p-4 md:pl-8 rounded w-10/12 md:w-2/3"
        >
          <h1 class="text-4xl">
            <span class="border-b-2 border-cyan-400 pb-2"
              >For 10 years against violence against women</span
            >
          </h1>

          <p class="text-lg mt-4">
            Founded in 1989 by the Association for Women's Rights, the "Home for
            Women" in Rome represents a trailblazing Anti-Violence Center that
            has since been at the forefront of combating gender-based violence
            in Italy. Its mission is deeply rooted in providing comprehensive
            support to women experiencing any form of violence, be it physical,
            psychological, sexual, economic abuse, or stalking. The center
            prides itself on creating a secure and welcoming environment where
            hospitality and solidarity among women are paramount. Active
            listening is a fundamental practice at the "Home for Women,"
            enabling a supportive dialogue that respects the unique experiences
            and needs of each individual. Over the years, this facility has
            significantly contributed to the discourse on male violence,
            offering both private support and public advocacy to shift societal
            perspectives and influence policy changes. In addition to its
            primary services, the "Home for Women" is deeply committed to
            inclusivity, extending its resources to all women, regardless of
            their citizenship, ethnicity, sexual and/or political orientation.
            This commitment ensures that every woman who reaches out for help is
            met with unconditional support and specialized care tailored to her
            specific circumstances. The center's staff, a dedicated team of
            professionals trained in gender studies, psychology, and legal
            support, work tirelessly to empower women. They facilitate a range
            of programs including legal assistance, psychological counseling,
            and job training, which are designed to help women regain their
            autonomy and plan for a future free from violence.
          </p>
        </div>
      </div>
    </div>
    <!-- Summary about summer school -->
    <div class="flex flex-wrap justify-center items-center bg-white p-4 mt-8">
      <div class="max-w-screen-xl w-full flex flex-wrap">
        <!--add image with width 1/3 in tablet and large screen and remove it in mobile version-->
        <div class="hidden md:block md:w-1/3">
          <img
            src="/second.jpg"
            alt="Summer school picture"
            class="rounded-xl w-full aspect-square object-cover"
          />
        </div>

        <div
          class="flex flex-wrap flex-col p-4 md:pl-8 rounded w-10/12 md:w-2/3"
        >
          <h1 class="text-4xl">
            <span class="border-b-2 border-cyan-400 pb-2"
              >Empowering Change</span
            >
          </h1>

          <p class="text-lg mt-4">
            Building on its foundation of inclusivity and support, The Home for
            Women also engages in extensive advocacy and educational efforts
            aimed at combating cultural and institutional factors that
            perpetuate violence against women. Through workshops, public talks,
            and collaborations with other organizations, the center works to
            dismantle the stereotypes and prejudices that underlie gender-based
            violence. Additionally, The Home for Women serves as a research and
            resource hub, contributing to national and international discussions
            on best practices for supporting victims of violence. The center
            actively participates in policy discussions, advocating for stronger
            legal protections and support systems that can prevent violence and
            aid survivors. To further extend its reach and effectiveness, the
            center has developed specialized programs tailored to the needs of
            diverse groups of women. These include legal assistance,
            psychological counseling, and vocational training programs designed
            to empower women economically and aid their independence and
            long-term recovery. The Home for Women's commitment to a holistic
            approach not only addresses immediate safety and psychological needs
            but also fosters long-term well-being and independence. Its
            continuous dedication to innovation in support services and its role
            as a voice for change in societal attitudes towards violence against
            women mark it as a beacon of hope and a model of empowerment in
            Italy and beyond.
          </p>
          <div
            class="w-full flex flex-col flex-wrap justify-center items-center"
          >
            <div
              class="p-4 max-w-screen-xl w-full items-center justify-center flex flex-col flex-wrap"
            >
              <h1
                class="text-4xl mb-4 border-b-2 border-cyan-400 pb-2"
                :class="{ 'text-white': isBackgroundDark }"
              >
                {{ title }}
              </h1>
              <div
                class="w-full flex flex-row flex-wrap justify-center"
                v-if="items"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="btnn">
      <button class="btn">
        <path
          d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"
        ></path>

        <span class="text11"
          ><h1 class="text-41xl2">
            <nuxt-link
              to="/Services"
              class="border-white cta-btn w-1/2 border-b-2 border-cyan-400 pb-2 title"
              >SERVICES</nuxt-link
            >
          </h1></span
        >
      </button>
      <div class="btnn2">
        <button class="btn">
          <path
            d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"
          ></path>

          <span class="text11"
            ><h1 class="text-41xl21">
              <nuxt-link
                to="/Projects"
                class="border-white cta-btn w-1/2 border-b-2 border-cyan-400 pb-2 title"
                >PROJECTS</nuxt-link
              >
            </h1></span
          >
        </button>
      </div>
    </div>
    <div class="slider">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <p class="title">Calture violence</p>
          </div>
          <div class="flip-card-back">
            <p>
              Cultural violence against women includes societal norms and
              practices that justify gender-based discrimination and violence,
              such as female genital mutilation and forced marriages. Addressing
              it requires legal reforms, education, and empowerment programs to
              change harmful attitudes and promote gender equality.
            </p>
          </div>
        </div>
      </div>
      <div class="card2">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <p class="title">Economic violence</p>
            </div>
            <div class="flip-card-back">
              <p>
                In the 1990s, we recognized economic violence as a form of abuse
              </p>
              <p>
                noting its prevalence in many women's experiences of violence
                both then and today.
              </p>
            </div>
          </div>
        </div>
        <div class="card3">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p class="title">The double violence</p>
              </div>
              <div class="flip-card-back">
                <p>
                  The House of Reception for Battered Women in Milan is raising
                  awareness about institutional violence
                </p>
                <p>
                  a significant issue familiar to both women attempting to
                  escape violence and the workers at support centers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="back">
      <h1 class="text-41xl">
        <span class="border-b-2 border-cyan-400 pb-2">Always in touch</span>
      </h1>

      <span class="sub">
        Sign up to our newsletter If you would like to receive it, along with
        email updates on our activities, register here.
      </span>
      <div class="card">
        <span class="card__title">Subscribe</span>
        <p class="card__content">
          Get fresh web design resources delivered straight to your inbox every
          week.
        </p>
        <div class="card__form">
          <input placeholder="Your Email" type="text" />
          <button class="sign-up">Sign up</button>
        </div>
      </div>
    </div>

    <div v-if="!loading"></div>

    <!--List of speakers -->
    <!-- <list-cards :items="top_speakers" title="Top Speakers" :isBackgroundDark="false" /> -->
  </div>
</template>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

.bg-cover-image {
  background-image: url("/cover.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  width: 100vw;
}

.chat-toggle-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ce7a04;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(172, 114, 6, 0.1);
  cursor: pointer;
  font-size: 24px;
}

.chat-toggle-btn:hover {
  background-color: #984404;
}

/* Additional styles */
.slider {
  background-image: url("/hero.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 75vh;
  width: 100%;
}

.flip-card {
  left: 200px;
  bottom: -2210px;
  position: absolute;
  background-color: transparent;
  width: 250px;
  height: 450px;
  perspective: 1000px;
  font-family: sans-serif;
}

.title {
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid coral;
  border-radius: 1rem;
}

.flip-card-front {
  background: linear-gradient(
    120deg,
    #ffe4c4 60%,
    #ffe7de 88%,
    #ffd3c3 40%,
    #ff7f509a 48%
  );
  color: coral;
}

.flip-card-back {
  background: linear-gradient(
    120deg,
    rgb(246, 165, 136) 30%,
    #ff7f50 88%,
    bisque 40%,
    rgb(255, 185, 160) 78%
  );
  color: white;
  transform: rotateY(180deg);
}

.card2 {
  left: 450px;
  bottom: 0px;
  display: flex;
  position: absolute;
}

.card3 {
  left: 500px;
  bottom: 0px;
  display: flex;
  position: absolute;
}

.text-41xl {
  position: absolute;
  left: 550px;
  font-size: 65px;
}

.text-41xl2 {
  position: absolute;
  left: 170px;
  font-size: 40px;
  bottom: 130px;
  color: linear-gradient(
    120deg,
    #ffe4c4 60%,
    #ffe7de 88%,
    #ffd3c3 40%,
    #ff7f509a 48%
  );
}

.text-41xl21 {
  position: absolute;
  left: 150px;
  font-size: 40px;
  bottom: 130px;
}

.back {
  height: 500px;
  width: 100%;
  background-color: #fbf8dd;
}

.sub {
  position: absolute;
  text-align: center;
  bottom: -2400px;
  left: 25%;
}

.card {
  width: 240px;
  height: 300px;
  padding: 0 15px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  background: #fff;
  border-radius: 20px;
  position: absolute;
  left: 650px;
  bottom: -2710px;
}

.card > * {
  margin: 0;
}

.card__title {
  font-size: 25px;
  font-weight: 900;
  color: #333;
}

.card__content {
  font-size: 13px;
  line-height: 18px;
  color: #333;
}

.card__form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card__form input {
  margin-top: 7px;
  outline: 0;
  background: rgb(255, 255, 255);
  box-shadow: transparent 0px 0px 0px 1px inset;
  padding: 0.6em;
  border-radius: 14px;
  border: 1px solid #333;
  color: black;
}

.card__form button {
  border: 0;
  background: #111;
  color: #fff;
  padding: 0.68em;
  border-radius: 10px;
  font-weight: bold;
}

.sign-up:hover {
  opacity: 0.8;
}

.btn {
  border: none;
  width: 15cm;
  height: 10cm;
  border-radius: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: linear-gradient(
    120deg,
    #ffe4c4 60%,
    #ffe7de 88%,
    #ffd3c3 40%,
    #ff7f509a 48%
  );
  cursor: pointer;
  transition: all 450ms ease-in-out;
  position: absolute;
  left: 120px;
  bottom: -1680px;
}

.sparkle {
  fill: #0f0e0e;
  transition: all 800ms ease;
}

.text {
  font-weight: 600;
  color: #000000;
  font-size: medium;
}

.btn:hover {
  background: linear-gradient(0deg, #ffd3c3, #ff7f509a);
  box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4),
    inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2),
    0px 0px 0px 4px rgba(255, 255, 255, 0.2), 0px 0px 180px 0px #ff7f509a;
  transform: translateY(-2px);
}

.btn:hover .text {
  color: white;
}

.btn:hover .sparkle {
  fill: white;
  transform: scale(1.2);
}

.btnn {
  height: 450px;
  width: 100%;
  background-color: #feece2;
}

.btnn2 {
  height: 450px;
  width: 100%;
  position: absolute;
  left: 750px;
  bottom: 6px;
}

.bg-cover-image {
  background-image: url("/cover.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 80vh;
  width: 100%;
}
</style>
