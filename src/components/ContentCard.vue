<template>
  <div class="border-black border-r-4 p-2 flex-1">
    <h1 class="font-bold text-5xl z-20 relative w-fit pb-4">
      {{ title }}
      <div
        class="absolute h-4 w-full -mt-3 ml-5 z-[-1]"
        :class="'bg-' + color"
      />
    </h1>

    <slot />

    <!-- <p class="text-lg px-2 my-4 font-semibold">
      {{ text }}
    </p> -->
    <!-- <div class="w-full my-6 text-center">
      <button v-if="hasButton && color === 'red'" class="rounded-full bg-red-500 hover:bg-red-400 py-2 px-5 text-white font-bold text-xl"> {{ buttonText }}</button>
      <button v-else-if="hasButton && color === 'amber'" class="rounded-full bg-amber-500 hover:bg-amber-400 py-2 px-5 text-white font-bold text-xl"> {{ buttonText }}</button>
    </div> -->
  </div>
</template>

<script setup>
defineProps({
  title: String,
  color: String, // TailwindCSS color
})
</script>
