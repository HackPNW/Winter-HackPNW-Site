<template>
  <footer class="text-center text-white bg-slate-800">
    <div class="p-6">
      <div class="">
        <p class="flex justify-center items-center">
          <span class="mr-4">Register for free!</span>
          <button
            @click="goToRegistration"
            class="transition rounded-full bg-red-500 hover:bg-red-400 py-2 px-5 text-white font-bold text-xl"
          >
            Register
          </button>
        </p>
      </div>
    </div>

    <div class="text-center p-4 bg-slate-900">
      Made with love by the
      <span class="text-red-500 font-bold">HackPNW team</span>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToRegistration = () => router.push("/register");
</script>
