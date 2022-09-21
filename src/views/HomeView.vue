<template>
  <div class="min-h-screen">
    <!-- Moved background color to style.css -->
    <nav-bar />
    <div class="h-full border-4 mx-6 border-black">
      <div
        class="flex flex-col justify-between border-b-4 border-black p-4 sm:p-10"
        style="min-height: calc(100vh - 190px)"
      >
        <div class="flex-grow"></div>
        <div class="relative">
          <h1
            class="md:text-9xl sm:text-8xl text-6xl font-bold font-poppins flex-0"
          >
            Hack <br />
            The <br />
            Northwest <br />
          </h1>
          <image
            src="Orca.png"
            alt="An Orca using a laptop"
            class="absolute w-[50rem] right-0 -top-[13rem] hidden 2xl:block z-[-10]"
          />
        </div>
        <div class="flex-grow">
          <button
            class="mt-8 rounded-full bg-red-500 hover:bg-red-400 py-3 px-10 text-white font-bold text-xl w-fit"
          >
            Register
          </button>
        </div>
      </div>

      <row-of-content-cards />
    </div>

    <div class="p-8">
      <h2 class="text-center text-6xl font-semibold pb-6 pt-4 my-5">
        Frequenty Asked Questions
      </h2>

      <!-- <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-6 items-start">
        <f-a-q-card
          v-for="question in faqsData"
          :question="question[0]"
          :answer="question[1]"
        />
      </div> -->

      <div class="flex flex-col lg:flex-row gap-x-2 mb-4">
        <div class="flex flex-col flex-1 gap-y-2 mb-2">
          <f-a-q-card
            v-for="faq in faqsData"
            :question="faq[0]"
            :answer="faq[1]"
          />
        </div>
        <div class="flex flex-col flex-1 gap-y-2 mb-2">
          <f-a-q-card
            v-for="faq in faqsData2"
            :question="faq[0]"
            :answer="faq[1]"
          />
        </div>
        <div class="flex flex-col flex-1 gap-y-2 mb-2">
          <f-a-q-card
            v-for="faq in faqsData3"
            :question="faq[0]"
            :answer="faq[1]"
          />
        </div>
      </div>

      <details class="p-4 rounded-lg bg-gray-300">
        <summary class="text-4xl pb-2 cursor-pointer">
          Still have questions? Send us a message!
        </summary>
        <div class="flex flex-col">
          <p class="text-lg text-gray-600">Email</p>
          <input
            class="px-2 py-1 text-lg bg-gray-100 rounded-md outline-0 mb-2"
            placeholder="example@example.com"
          />
          <p class="text-lg text-gray-600">Message</p>
          <textarea
            class="px-2 py-1 text-lg bg-gray-100 rounded-md outline-0 mb-4"
            rows="8"
            placeholder="Hey there..."
          />
          <button
            class="bg-red-500 rounded-md text-lg px-2 py-1 outline-0 text-white font-semibold"
          >
            Send
          </button>
        </div>
      </details>
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useElementSize } from "@vueuse/core";
import NavBar from "../components/NavBar.vue";
import ContentCard from "../components/ContentCard.vue";
import FAQCard from "../components/FAQCard.vue";
import RowOfContentCards from "../components/RowOfContentCards.vue";

const faqSectionEl = ref(null);
const { width: faqSectionWidth, height: faqSectionHeight } =
  useElementSize(faqSectionEl);

const faqsData = ref([
  [
    "What is a Hackathon?",
    "A hackathon is a sprint-like design event wherein computer programmers and others involved in software development, including graphic designers, interface designers, product managers, project managers, domain experts, and others collaborate intensively on software projects. The goal of a hackathon is to create functioning software or hardware by the end of the event. Hackathons tend to have a specific focus, which can include the programming language used, the operating system, an application, an API, or the subject and the demographic group of the programmers. In other cases, there is no restriction on the type of software being created or the design of the new system. ",
  ],
  [
    "How much does it cost?",
    "Nothing! HackPNW is 100% free including meals and sleeping arangments!",
  ],
  [
    "Who can register?",
    "Any highschool student can register as a solo or as a team!",
  ],
  [
    "How big are the teams?",
    "Teams should be 2-4 people, you can register alone or with a team.",
  ],
]);

const faqsData2 = ref([
  [
    "How many events are there?",
    "There is a main team challenge along with a side competition for comptetive programming. To break up the hacking, each day there will be one fun event!",
  ],
  [
    "Will there be prizes?",
    "Of course! There will be over $1000 worth of prizes to win and trust us when we say they will be worth your time.",
  ],
  [
    "Can I sleep on the floor?",
    "We 100% advise that you bring a sleeping bag to sleep on the floor with, but yes! Sleep away or hack all the way through, it's your choice!",
  ],
  [
    "What should I bring?",
    "We recomend you bring a laptop, charger(s) for all your devices, and if you plan on spending the night (which we recomend) bring a sleeping bag and other toiletries you might need. Most of all bring a positive mindset and good energy and you'll have a great time!",
  ],
]);

const faqsData3 = ref([
  [
    "How long is HackPNW?",
    "HackPNW is a 36 hour hackathon starting in the morning of saturday going all the way to sunday evening!",
  ],
  [
    "How big is HackPNW?",
    "Our venue has capacity for about 100 hackers, spots are limited and first come first serve.",
  ],
  [
    "When is HackPNW?",
    "HackPNW is going to be on January 7th - January 8th, at the Microsoft Redmond Reactor!",
  ],
  [
    "Will there be tech talks and workshops?",
    "Yes, representatives from many companies will be there to give talks and workshops about their latest tech!",
  ],
]);
</script>
