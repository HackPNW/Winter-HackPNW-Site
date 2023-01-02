<template>
  <footer class="text-center text-white bg-slate-800">
    <div class="p-6">
      <div class="">
        <p class="flex justify-center items-center">
          <span class="mr-4">Register for free!</span>
          <button
            @click=""
            class="transition rounded-full bg-[#79bcc6] hover:bg-[#aadbe2] py-2 px-5 text-white font-bold text-xl">
            Registration opens soon
          </button>
        </p>
      </div>
    </div>

    <div class="text-center p-4 bg-slate-900">
      Made with ❤️ by the
      <span class="text-[#238fa0] font-bold"> HackPNW team</span>. HackPNW is a
      501(c)(3) nonprofit (EIN: 81-2908499)
    </div>
  </footer>
</template>

<script setup>
  import { useRouter } from "vue-router";

  const router = useRouter();

  const goToRegistration = () => router.push("/register");
</script>
