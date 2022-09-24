<template>
  <details class="select-none p-4 rounded-xl bg-red-500 shadow-xl">
    <summary
      @click="isActive = !isActive"
      class="decoration-0 justify-between text-white text-2xl pb-2 cursor-pointer font-bold"
    >
      Still have questions? Send us a message!
      <svg
        :class="{ 'rotate-180': isActive }"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="transition duration-300 float-right"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </summary>
    <div class="flex flex-col">
      <p class="text-lg text-white font-semibold">Email</p>
      <input
        class="px-2 py-1 text-lg bg-gray-100 rounded-md outline-0 mb-2"
        placeholder="example@example.com"
      />
      <p class="text-lg text-white font-semibold">Message</p>
      <textarea
        class="px-2 py-1 text-lg bg-gray-100 rounded-md outline-0 mb-4"
        rows="2"
        placeholder="Hey there..."
      />
      <button
        class="bg-white rounded-md text-lg px-2 py-1 outline-0 text-black font-bold"
      >
        Send
      </button>
    </div>
  </details>
</template>

<style scoped>
details > summary::marker {
  content: "";
}
details[open] div {
  animation: animateDown 0.3s linear forwards;
}
@keyframes animateDown {
  0% {
    opacity: 0;
    transform: translatey(-15px);
  }
  100% {
    opacity: 1;
    transform: translatey(0);
  }
}
</style>

<script setup>
import { ref, computed, watch, onMounted } from "vue";
const isActive = ref(false);
</script>
