<template>
  <div class="min-h-screen scroll-smooth items-center">
    <div
      class="w-48 m-3 ml-6 flex self-start items-center text-red-500 px-4 py-2 mb-4 bg-gray-300 bg-opacity-0 hover:bg-opacity-70 rounded-lg transition cursor-pointer"
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
    <div class="h-full border-4 mx-6 border-black">
      <div class="h-full mx-6">
        <div class="flex flex-col justify-between p-4 md:p-10">
          <div
            class="2xl:my-32 xl:my-24 md:my-12 flex justify-between items-center relative">
            <div>
              <h1
                class="lg:text-9xl text-5xl md:8xl sm:text-8xl font-bold font-poppins flex-0 underline underline-offset-8 decoration-red-500">
                Contact <br />
                Us!
              </h1>
              <hr class="mt-12 h-12 border-t-8 border-black" />
              <div class="w-[35.08rem]">
                <h1 class="text-gray-700 ld xl:text-3xl">
                  We'd love to answer any of your questions or inqueries
                </h1>
              </div>
            </div>
            <div
              class="space-y-2 font-semibold text-2xl text-gray-700 hidden xl:block">
              <div class="bg-slate-200 p-8 rounded-xl">
                <h1 class="text-6xl font-bold text-black">Emails:</h1>
                <h1 class="pt-4">
                  <span class="text-purple-500 font-bold">General</span> team:
                  team@hackpnw.org
                </h1>
                <h1>
                  Head of <span class="text-red-500 font-bold">outreach</span>:
                  ted@hackpnw.org
                </h1>
                <h1>
                  Head of
                  <span class="text-amber-500 font-bold">planning</span>:
                  keira@hackpnw.org
                </h1>
                <h1>
                  Head of
                  <span class="text-green-500 font-bold">sponsors</span>:
                  will@hackpnw.org
                </h1>
              </div>

              <div class="p-8 rounded-xl bg-slate-200">
                <div class="flex flex-col">
                  <p class="text-lg text-gray-800 font-semibold">Email</p>
                  <input
                    class="px-2 py-1 text-lg bg-gray-100 rounded-md outline-0 mb-2"
                    placeholder="your-email@example.com" />
                  <p class="text-lg text-gray-800 font-semibold">Message</p>
                  <textarea
                    class="px-2 py-1 text-lg bg-gray-100 rounded-md outline-0 mb-4"
                    rows="2"
                    placeholder="Hey there..." />
                  <button
                    class="transition bg-red-500 hover:bg-red-400 rounded-md text-lg px-2 py-1 outline-0 text-white font-bold">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { routerKey, useRouter } from "vue-router";
  import BasedFooter from "../components/BasedFooter.vue";

  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };
</script>
