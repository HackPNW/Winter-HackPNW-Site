<template>
  <div class="flex flex-col w-full px-8 py-4 items-center">
    <div class="flex self-start items-center text-red-500 px-4 py-2 bg-gray-300 bg-opacity-0 hover:bg-opacity-70 rounded-lg transition cursor-pointer" @click="goToRegistration">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mr-3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
      </svg>
      <h1 class="font-semibold text-lg">
        Back to home
      </h1>
    </div>
    <h1 class="text-5xl font-semibold">Register</h1>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToRegistration = () => {
  router.push("/");
};
</script>
