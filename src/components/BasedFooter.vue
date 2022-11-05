<template>
  <footer class="text-center text-white bg-slate-800">
    <div class="p-6">
      <div class="">
        <p class="flex justify-center items-center">
          <span class="mr-4">Register for free!</span>
          <button
            @click=""
            class="transition rounded-full bg-red-300 hover:bg-red-200 py-2 px-5 text-white font-bold text-xl">
            Registration opens soon
          </button>
        </p>
      </div>
    </div>

    <div class="text-center p-4 bg-slate-900">
      Made with love by the
      <span class="text-red-500 font-bold">HackPNW<span class="font-medium text-white text-sm">501(c)(3)</span> team</span>
    </div>
  </footer>
</template>

<script setup>
  import { useRouter } from "vue-router";

  const router = useRouter();

  const goToRegistration = () => router.push("/register");
</script>
