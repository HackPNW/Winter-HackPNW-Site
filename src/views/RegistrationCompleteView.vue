<template>
  <div class="flex flex-col w-full px-2 md:px-8 pt-4 pb-20 items-center">
    <div
      class="flex self-start items-center text-red-500 px-4 py-2 mb-4 bg-gray-300 bg-opacity-0 hover:bg-opacity-70 rounded-lg transition cursor-pointer"
      @click="goToHome">
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

    <div class="flex flex-col mt-12 w-full max-w-xl gap-y-8 p-6">
      <h1
        class="text-8xl font-bold poppins text-center underline decoration-4 decoration-red-500">
        Registration Complete!
      </h1>
      <hr class="border-2 border-black border-slate-800" />
      <div>
        <h1 class="text-5xl text-center text-gray-800 font-semibold">
          We have sent you a confirmation email with your team code and
          registration info
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from "vue-router";
  import { computed, reactive } from "vue";

  const router = useRouter();
  const route = useRoute();

  const inviteInfo = reactive({
    name: route.query.i,
    code: route.query.c,
  });
  const hasInviteInfo = computed(() => {
    return Boolean(inviteInfo.name && inviteInfo.code);
  });

  const goToHome = () => {
    router.push("/");
  };
</script>
