<template>
  <div class="flex flex-col w-full px-2 md:px-8 py-4 items-center">
    <div
      class="flex self-start items-center text-red-500 px-4 py-2 mb-4 bg-gray-300 bg-opacity-0 hover:bg-opacity-70 rounded-lg transition cursor-pointer"
      @click="goToRegistration"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8 mr-3"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>
      <h1 class="font-semibold text-lg">Back to home</h1>
    </div>
    <h1
      class="text-5xl font-bold font-poppins underline decoration-red-500 decoration-8 underline-offset-[12px]"
    >
      Register
    </h1>
    <div class="flex flex-col mt-12 w-full max-w-xl gap-y-4">
      <div class="flex justify-items-stretch gap-x-4">
        <form-input text="First Name" placeholder="John" required="true" />
        <form-input text="Last Name" placeholder="Doe" required="true" />
      </div>
      <div>
        <form-input text="Email" placeholder="JohnDoe@example.com" required="true" />
      </div>
      <div class="flex gap-x-4">
        <form-input text="High School" placeholder="Bellevue High School" required="true" />
        <selection-form-input label="Grade" :options="[9, 10, 11, 12]" required="true" />
      </div>
      <div>
        <form-input text="Github Profile" placeholder="https://github.com/0xEquinox" required="false" />
      </div>
    </div>

    <button
      class="transition mt-8 rounded-full bg-red-500 hover:bg-red-400 py-3 px-6 text-white font-bold text-xl w-fit"
    >
      Register
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import FormInput from "../components/FormInput.vue"
import SelectionFormInput from "../components/SelectionFormInput.vue";

const router = useRouter();

const goToRegistration = () => {
  router.push("/");
};
</script>
