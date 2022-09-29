<template>
  <div class="flex flex-col">
    <label class="w-full text-gray-700 text-sm font-bold mb-2" for="grade">
      {{ props.label }}
    </label>
    <select
      class="shadow border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline">
      <option v-for="item in options">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script setup>
  const props = defineProps({
    label: String,
    options: Array,
    required: Boolean,
  });
</script>
