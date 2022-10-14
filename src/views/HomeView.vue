<template>
  <div class="min-h-screen scroll-smooth items-center">
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
            <div class="flex-grow" id="about">
              <button
                class="transition mt-8 rounded-full bg-red-500 hover:bg-red-400 py-3 px-10 text-white font-bold text-xl w-fit"
                @click="goToRegistration">
                Register
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

    <div id="faq" class="p-8">
      <h2
        class="text-center text-6xl font-bold pb-6 pt-4 my-5 underline decoration-red-500 decoration-8 underline-offset-8">
        Frequently Asked Questions
      </h2>

      <div class="flex flex-col lg:flex-row gap-x-2 mb-4">
        <div class="flex flex-col flex-1 gap-y-2 mb-2" v-for="faqs in faqsData">
          <f-a-q-card v-for="faq in faqs" :question="faq[0]" :answer="faq[1]" />
        </div>
      </div>
      <more-question-box />
    </div>
    <div id="sponsors">
      <h2
        class="text-center text-6xl font-bold pb-6 pt-4 my-5 underline decoration-amber-500 decoration-8 underline-offset-8">
        Sponsors
      </h2>

      <div class="flex flex-col lg:flex-row gap-x-2 mb-4">
        <div
          class="flex flex-1 gap-y-2 mb-2 p-4 gap-x-24 items-center justify-center flex-col lg:flex-row">
          <sponsor-card text="This could be you!" />
          <sponsor-card text="This could be you!" />
          <sponsor-card text="This could be you!" />
        </div>
      </div>
    </div>
    <based-footer />
  </div>
</template>

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

  const router = useRouter();

  const faqsData = getFaqColumns(3);

  const goToRegistration = () => {
    router.push("/register");
  };

  const shouldRotate = ref(false);

  const rotateOrca = () => {
    shouldRotate.value = false;
    shouldRotate.value = true;
  };

  const expandOrca = () => {
    
  }
</script>
