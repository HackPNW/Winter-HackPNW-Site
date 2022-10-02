<template>
  <div class="flex flex-col w-full">
    <label class="text-gray-700 text-sm font-bold mb-2" for="username">
      {{ props.text }}
    </label>
    <input
      class="w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
      type="text"
      :placeholder="props.placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script setup>
  const props = defineProps({
    text: String,
    placeholder: String,
    required: Boolean,
    modelValue: String,
  });
  defineEmits(["update:modelValue"]);
</script>
