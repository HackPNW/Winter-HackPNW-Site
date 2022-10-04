<template>
     <div class="flex flex-col w-full px-2 md:px-8 pt-4 items-center">
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
</div>
      <div class="h-full border-4 mx-6 border-black">
      <div
        class="flex flex-col justify-between  p-4 md:p-10">
        <div class="hidden md:flex-grow"></div>
        <div
          class="2xl:my-[9.5rem] xl:my-24 md:my-12 flex justify-between items-center">
          <div>
            <h1
              class="lg:text-6xl text-5xl md:8xl sm:text-8xl font-bold font-poppins flex-0">
              Still have questions? <br />
              Or <br />
              Want to sponsor us? <br />
            </h1>
          </div>
        </div>
        <p class="text-lg text-gray-800 font-semibold">Email</p>
        <input
        class="px-2 py-1 text-lg bg-gray-100 rounded-md outline-0 mb-2"
        placeholder="example@example.com" />
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
</template>

<script setup>
import { routerKey, useRouter } from "vue-router";

const router = useRouter();

const goToHome = () => {
    router.push("/")
}
</script>