<template>
  <div class="flex flex-1 flex-col lg:flex-row">
    <content-card
      title="What is HackPNW?"
      color="red-500"
      class="border-b-4 lg:border-b-0">
      <p class="text-lg px-2 my-4 font-semibold">
        HackPNW is a two day hour highschool hackathon
        <a
          href="https://reactor-ext.azurewebsites.net/en-us/reactor/Location/Redmond"
          class="font-bold px-1 text-red-500 hover:cursor-pointer hover:bg-slate-200 hover:rounded-lg">
          @Microsoft Reactor, Redmond Washington.
        </a>
        &nbsp;We encourage highschool students from around the Pacific Northwest
        to come and compete for fortune and glory! There will be code, There
        will be prizes, and most of all there will be lots of fun! Best of all
        it's entirely free (including food)!
      </p>
      <div class="w-full my-6 text-center">
        <button
          class="transition rounded-full bg-red-500 hover:bg-red-400 py-2 px-5 text-white font-bold text-xl"
          @click="goToRegistration">
          Register
        </button>
      </div>
    </content-card>

    <content-card
      title="Who are we?"
      color="amber-500"
      class="lg:border-l-4 border-b-4 lg:border-b-0">
      <p class="text-lg px-2 my-4 font-semibold">
        We are a group of high school students from the Seattle area who were
        frustrated by the lack of high school level programming events in our
        area, so we created our own! Our goal with HackPNW is to bring together
        students to form cross-campus connections, learn from each other, and
        build on each others' skillsets with real world experience.
      </p>
      <div class="w-full my-6 text-center">
        <button
          class="transition rounded-full bg-amber-500 hover:bg-amber-400 py-2 px-5 text-white font-bold text-xl"
          @click="goToContactUs">
          Contact Us
        </button>
      </div>
    </content-card>

    <content-card title="Details!" color="green-500" class="lg:border-l-4">
      <p class="text-lg px-2 my-4 font-semibold">
        When: Febuary 4th-5th <br />
        Where: 3709 157th Ave NE, Redmond, WA 98052 <br />
        Who can register: Any highschool student <br />
        Why: It's fun!
      </p>
    </content-card>
  </div>
</template>

<script setup>
  import ContentCard from "../components/ContentCard.vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  const goToRegistration = () => {
    router.push("/register");
  };

  const goToContactUs = () => {
    router.push("/contact");
  };
</script>
