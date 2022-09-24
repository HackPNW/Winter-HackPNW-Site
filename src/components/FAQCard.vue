<template>
  <details class="transform select-none flex cursor-pointer rounded-xl shadow-xl">
    <summary @click="isActive = !isActive" :class="{ 'rounded-t-xl': isActive, 'rounded-xl': !isActive }" class="bg-red-500 justify-between flex text-xl text-white font-bold py-4 px-4">
      {{ question }}
			  <svg :class="{ 'rotate-180': isActive }" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition duration-300 float-right "><polyline points="6 9 12 15 18 9"></polyline></svg>
    </summary>
      <p class="pt-2 text-md px-4 py-2 rounded-b-xl bg-white">{{ answer }}</p>
  </details>
</template>

<style scoped>
  details[open] p {
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
  import { ref, computed, watch, onMounted } from "vue"

defineProps({
  question: String,
  answer: String,
})

const isActive = ref(false)

</script>
