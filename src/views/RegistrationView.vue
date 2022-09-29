<template>
  <div class="flex flex-col w-full px-2 md:px-8 py-4 items-center">
    <div
      class="flex self-start items-center text-red-500 px-4 py-2 mb-4 bg-gray-300 bg-opacity-0 hover:bg-opacity-70 rounded-lg transition cursor-pointer"
      @click="goToRegistration">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8 mr-3">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
      </svg>
      <h1 class="font-semibold text-lg">Back to home</h1>
    </div>
    <h1
      class="text-5xl font-bold font-poppins underline decoration-red-500 decoration-8 underline-offset-[12px]">
      Register
    </h1>
    <div class="flex flex-col mt-12 w-full max-w-xl gap-y-4 p-6">
      <!-- START FORM -->

      <div class="flex justify-items-stretch gap-x-4">
        <form-input text="First Name" placeholder="John" :required="true" />
        <form-input text="Last Name" placeholder="Doe" :required="true" />
      </div>
      <div>
        <form-input
          text="Email"
          placeholder="john.doe@example.com"
          :required="true" />
      </div>
      <div class="flex gap-x-4">
        <form-input
          text="High School"
          placeholder="Hacker High School"
          :required="true" />
        <selection-form-input
          label="Grade"
          :options="[9, 10, 11, 12]"
          :required="true" />
      </div>
      <div>
        <form-input
          text="Github Profile"
          placeholder="https://github.com/0xEquinox"
          :required="false" />
      </div>
      <p class="text-gray-700 text-sm font-bold mb-2">
        Pick your favorite color
      </p>
      <div class="flex gap-2 sm:gap-6">
        <button
          v-for="color in colors"
          :key="color"
          class="rounded-full transition-all h-8 flex-1"
          :class="[
            `bg-${color}-500`,
            `shadow-${color}-500/100`,
            color == selectedColor
              ? '-translate-y-2 shadow-md scale-[1.2]'
              : 'hover:-translate-y-0.5',
          ]"
          @click="setFavouriteColor(color)" />
      </div>

      <div
        class="flex justify-between px-1 py-1 rounded-md items-center mt-8">
        <button
          class="text-xl font-semibold px-2 py-1 rounded-md transition"
          :class="createTeam ? '' : 'bg-red-500 text-white shadow-lg'"
          @click="createTeam = false">
          Join a team
        </button>
        <p class="text-gray-600">or</p>
        <button
          class="text-xl font-semibold px-2 py-1 rounded-md transition"
          :class="createTeam ? 'bg-red-500 text-white shadow-lg' : ''"
          @click="createTeam = true">
          Create a team
        </button>
      </div>

      <!-- JOIN TEAM -->

      <form-checkbox
        text="I have a team and the team code"
        :checked="hasTeamCode"
        @click="hasTeamCode = true"
        v-if="!createTeam" />
      <form-checkbox
        text="I do not have a team, please put me in one"
        :checked="!hasTeamCode"
        @click="hasTeamCode = false"
        v-if="!createTeam" />

      <form-input
        text="Team code"
        placeholder="1234-5678"
        v-if="hasTeamCode && !createTeam" />

      <!-- CREATE TEAM -->

      <p class="text-gray-500 text-sm" v-if="createTeam">
        <span class="font-bold text-gray-700">Note</span> <br />
        There is a maximum of 4 people per team. <br />
        If you are the only person in your team by the end of the registration
        period, you will be moved in a team with other people.
      </p>

      <form-input
        text="Team name"
        placeholder="The Super Cool Programmers"
        v-if="createTeam" />

      <p class="text-gray-700 font-bold text-sm" v-if="createTeam">
        Are you okay with letting HackPNW put people without a team in your team
        if your team does not have 4 members by the end of the registration
        period?
      </p>
      <form-checkbox
        text="Yes, I'm okay with solo hackers joining my team"
        :checked="fillTeam"
        @click="fillTeam = true"
        v-if="createTeam" />
      <form-checkbox
        text="No, I don't want anyone else joining my team"
        :checked="!fillTeam"
        @click="fillTeam = false"
        v-if="createTeam" />

      <!-- END FORM -->
    </div>

    <button
      class="transition mt-8 rounded-full bg-red-500 hover:bg-red-400 py-3 px-6 text-white font-bold text-xl w-fit">
      Register
    </button>
  </div>
</template>

<script setup>
  import { ref, computed } from "vue";
  import { useRouter } from "vue-router";
  import FormInput from "../components/FormInput.vue";
  import SelectionFormInput from "../components/SelectionFormInput.vue";
  import FormCheckbox from "../components/FormCheckbox.vue";

  const router = useRouter();

  const colors = ["red", "amber", "green", "cyan", "violet", "pink"];
  const selectedColor = ref("");
  const setFavouriteColor = (color) => (selectedColor.value = color);
  const createTeam = ref(false);
  const hasTeamCode = ref(true);
  const fillTeam = ref(true);

  const goToRegistration = () => {
    router.push("/");
  };
</script>
