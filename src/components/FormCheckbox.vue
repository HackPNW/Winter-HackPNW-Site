<template>
  <div class="flex">
    <div
      class="h-6 w-6 rounded-full mr-2 p-1 cursor-pointer"
      :class="checked ? 'bg-red-500' : 'bg-gray-300'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4 text-white"
        v-show="checked">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </div>
    <p class="font-medium">{{ text }}</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    checked: Boolean,
    text: String,
  });
</script>
