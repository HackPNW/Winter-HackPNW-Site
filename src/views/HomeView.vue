<template>
  <div class="min-h-screen scroll-smooth items-center bg-[#e7f0ed]">
    <nav-bar />
    <div class="h-full border-4 mx-6 border-black">
      <div
        class="flex flex-col justify-between border-b-4 border-black p-4 md:p-10">
        <div class="hidden md:flex-grow"></div>
        <div
          class="2xl:my-[9.5rem] xl:my-24 md:my-12 flex justify-between items-center">
          <div>
            <h1
              class="lg:text-9xl text-5xl md:8xl sm:text-8xl font-bold font-poppins flex-0">
              Hack <br />
              The <br />
              Northwest <br />
            </h1>
            <div class="flex-grow space-x-4" id="about">
              <button
                class="transition mt-8 rounded-full bg-[#238fa0] hover:bg-[#79bcc6] py-3 px-10 text-white font-bold text-xl w-fit"
                @click="goToRegistration">
                Register Now!
              </button>
            </div>
          </div>
          <div>
            <img
              src="../assets/Orca.png"
              alt="An Orca using a laptop"
              class="w-[49rem] hidden 2xl:block" />
          </div>
        </div>
      </div>

      <row-of-content-cards />
    </div>

    <div id="schedule" class="p-8">
      <div>
        <h2
          class="text-center text-6xl font-bold pb-6 pt-4 my-5 underline decoration-[#238fa0] decoration-8 underline-offset-8">
          Schedule
        </h2>
      </div>
      <div
        class="flex flex-1 space-x-0 sm:space-x-6 flex-col sm:flex-row sm:space-y-0 space-y-4">
        <div class="shadow-xl rounded-md card flex-grow pb-4">
          <h1 class="text-center text-white font-bold text-4xl py-2">
            Saturday
          </h1>
          <div class="flex flex-1 flex-col lg:flex-row">
            <div class="flex-grow">
              <schedule-cell
                time-start="9:00am"
                time-end="9:30am"
                name="Check In"
                more-info="It's a thing" />
              <schedule-cell
                time-start="9:30am"
                time-end="9:40am"
                name="Opening Ceremony"
                more-info="It's a thing" />
              <schedule-cell
                time-start="1:00pm"
                time-end="2:00pm"
                name="Lunch"
                more-info="It's a thing" />
            </div>
            <div class="flex-grow">
              <schedule-cell
                time-start="2:30pm"
                time-end="3:15pm"
                name="Team Challenge"
                more-info="It's a thing" />
              <schedule-cell
                time-start="3:30pm"
                time-end="4:00pm"
                name="Twillio Workshop"
                more-info="It's a thing" />
              <schedule-cell
                time-start="6:50pm"
                time-end="7:00pm"
                name="Closing Remarks"
                more-info="It's a thing" />
            </div>
          </div>
        </div>
        <div class="shadow-xl rounded-md card flex-grow pb-4">
          <h1 class="text-center text-white font-bold text-4xl py-2">Sunday</h1>
          <div class="flex flex-1 flex-col lg:flex-row">
            <div class="flex-grow">
              <schedule-cell
                time-start="9:00am"
                time-end="9:30am"
                name="Check In"
                more-info="It's a thing" />
              <schedule-cell
                time-start="9:30am"
                time-end="9:40am"
                name="Opening Remarks"
                more-info="It's a thing" />
              <schedule-cell
                time-start="1:00pm"
                time-end="2:00pm"
                name="Lunch"
                more-info="It's a thing" />
            </div>
            <div class="flex-grow">
              <schedule-cell
                time-start="1:30pm"
                time-end="2:00pm"
                name="Trivia Challenge"
                more-info="It's a thing" />
              <schedule-cell
                time-start="5:00pm"
                time-end="5:40pm"
                name="Submission/Judging"
                more-info="It's a thing" />
              <schedule-cell
                time-start="5:40pm"
                time-end="6:00pm"
                name="Closing Ceremony"
                more-info="It's a thing" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="faq" class="p-8">
      <h2
        class="text-center text-6xl font-bold pb-6 pt-4 my-5 underline decoration-[#28baa9] decoration-8 underline-offset-8">
        Frequently Asked Questions
      </h2>

      <div class="flex flex-col lg:flex-row gap-x-2 mb-4">
        <div class="flex flex-col flex-1 gap-y-2 mb-2" v-for="faqs in faqsData">
          <f-a-q-card v-for="faq in faqs" :question="faq[0]" :answer="faq[1]" />
        </div>
      </div>
      <!--      <more-question-box />-->
    </div>
    <div id="sponsors">
      <h2
        class="text-center text-6xl font-bold pb-6 pt-4 my-5 underline decoration-cyan-500 decoration-8 underline-offset-8">
        Sponsors
      </h2>

      <div class="flex flex-col lg:flex-row gap-x-2 mb-4">

        <div
          class="flex flex-1 gap-y-2 mb-2 p-4 gap-x-24 items-center justify-center flex-col lg:flex-row">
          <sponsor-card text="CloudClassroom" :isImg="true">
            <a href="https://www.thecloudclassroom.org/"
              ><img class="p-3" src="../assets/CloudClassroom.png" />
            </a>
          </sponsor-card>
          <sponsor-card text="../assets/StickerGiant.png" :isImg="true">
            <a href="https://www.stickergiant.com/"
              ><img class="p-3" src="../assets/StickerGiant.png" />
            </a>
          </sponsor-card>
          <sponsor-card text="This could be you!" :isImg="true">
            <a href="https://bellevuecollection.com/"
              ><img src="../assets/BellCollection.svg"
            /></a>
          </sponsor-card>
        </div>
      </div>
    </div>

    <!--    <div id="team">-->
    <!--      <h2-->
    <!--        class="text-center text-6xl font-bold pb-6 pt-4 my-5 underline decoration-emerald-500 decoration-8 underline-offset-8">-->
    <!--        Meet the Team-->
    <!--      </h2>-->

    <!--      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 ">-->
    <!--          <team-card name="Ted Guan" title="Co-Founder • Director" school="Bellevue International" aboutme="I'm a Junior at Bellevue International School!" color="sky-500" />-->
    <!--          <team-card name="Will McDonald" title="Co-Founder • Lead Organizer" school="Bellevue International" aboutme="I'm a Junior at Bellevue International School!" color="emerald-500" />-->
    <!--          <team-card name="Joseph Lyons" title="Lead Developer" aboutme="A 17 year-old full-stack web dev from Australia, self-taught developer fueled by absurd amounts of caffeine.  Aside from the usual nerd stuff like programming and system admin I also enjoy cooking and managing programming-related online spaces for teens." color="amber-500" />-->
    <!--          <team-card name="Alex DeForrest" title="Lead Organizer" aboutme="Hacker at Puyallup High School" color="violet-500" />-->
    <!--          <team-card name="Keira Wong" title="Co-Founder • Lead Organizer" school="Bellevue International" aboutme="I'm a Senior at Bellevue International School!" color="indigo-500" />-->
    <!--          <team-card name="Bhavya Rajput" title="Media Manager" aboutme="" color="orange-500" />-->
    <!--          <team-card name="Kaitlin Nguyen" title="" aboutme="" color="fuchsia-500" />-->
    <!--          <team-card name="Hana Smahi" title="Organizer" school="Bellevue International" aboutme="I'm a Senior at Bellevue International School!" color="cyan-600" />-->
    <!--      </div>-->
    <!--    </div>-->

    <based-footer />
  </div>
</template>

<style scoped>
  .card {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.3);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
  }
</style>

<script setup>
  // import { ref, computed, watch, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import NavBar from "../components/NavBar.vue";
  import FAQCard from "../components/FAQCard.vue";
  import RowOfContentCards from "../components/RowOfContentCards.vue";
  import MoreQuestionBox from "../components/MoreQuestionBox.vue";
  import BasedFooter from "../components/BasedFooter.vue";
  import { getFaqColumns } from "../faqs";
  import { ref } from "vue";
  import SponsorCard from "../components/SponsorCard.vue";
  import ScheduleCell from "../components/ScheduleCell.vue";
  import TeamCard from "../components/TeamCard.vue";

  const router = useRouter();

  const faqsData = getFaqColumns(3);

  const goToRegistration = () => {
    router.push("/register");
  };

  const shouldRotate = ref(false);
</script>
