<template>
  <div class="min-h-screen scroll-smooth">
    <nav-bar />
    <div class="h-full border-4 mx-6 border-black">
      <div
        class="flex flex-col justify-between border-b-4 border-black p-4 sm:p-10"
        style="min-height: calc(100vh - 165px)"
      >
        <div class="flex-grow"></div>
        <div class="flex justify-between items-center">
          <div>
            <h1 class="md:text-9xl sm:text-8xl text-6xl font-bold font-poppins flex-0">
              Hack <br />
              The <br />
              Northwest <br />
            </h1>
            <div class="flex-grow" id="about">
          <button
            class="mt-8 rounded-full bg-red-500 hover:bg-red-400 py-3 px-10 text-white font-bold text-xl w-fit"
            @click="goToRegistration"
          >
            Register
          </button>
        </div>
          </div>
          <div>
            <img
              src="Orca.png"
              alt="An Orca using a laptop"
              class="w-[50rem] hidden 2xl:block"
            />
          </div>
        </div>
      </div>

      <row-of-content-cards />
    </div>

    <div id="faq" class="p-8">
      <h2
        class="text-center text-6xl font-bold pb-6 pt-4 my-5 underline decoration-red-500 decoration-8 underline-offset-8"
      >
        Frequently Asked Questions
      </h2>

      <div class="flex flex-col lg:flex-row gap-x-2 mb-4">
        <div class="flex flex-col flex-1 gap-y-2 mb-2" v-for="faqs in faqsData">
          <f-a-q-card v-for="faq in faqs" :question="faq[0]" :answer="faq[1]" />
        </div>
      </div>
      <more-question-box />
    </div>
    <div id="sponsors" class="h-screen">
      <h2
        class="text-center text-6xl font-semibold pb-6 pt-4 my-5 underline decoration-amber-500 decoration-8 underline-offset-8"
      >
        Sponsors
      </h2>
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

const router = useRouter();

const faqsData = getFaqColumns(3);

const goToRegistration = () => {
  router.push("/register");
};
</script>
