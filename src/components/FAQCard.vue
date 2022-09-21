<template>
  <details class="cursor-pointer rounded-xl border-2 border-black bg-red-400">
    <summary class="text-xl text-white font-bold py-2 px-4">
      {{ question }}
    </summary>
    <p class="pt-2 text-md px-4 py-2 rounded-b-xl bg-white">{{ answer }}</p>
  </details>
</template>

<script setup>
defineProps({
  question: String,
  answer: String,
});
</script>
