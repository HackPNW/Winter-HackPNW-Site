<template>
  <div class="border-black border-l-0 p-2 flex-1">
    <h1 class="font-bold text-5xl z-20 relative w-fit pb-4">
      {{ title }}
      <div
        class="absolute h-4 w-[85%] xl:w-[95%] 2xl:w-full -mt-3 ml-5 z-[-1]"
        :class="'bg-' + color" />
    </h1>

    <slot />
  </div>
</template>

<script setup>
  defineProps({
    title: String,
    color: String, // TailwindCSS color
  });
</script>
