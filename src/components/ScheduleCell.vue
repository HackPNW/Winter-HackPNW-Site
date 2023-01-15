<template>
  <div @mouseover="hover = true" @mouseleave="hover = false" class="px-4 py-1 flex-grow">
    <div class="w-full h-14 shadow-xl rounded-md bg-white flex ">
      <div class="bg-[#238fa0] w-3 rounded-l-md transition"></div>
      <div class="pl-2 py-1">
        <h1  class="font-bold transition-opacity ease-in duration-100 opacity-100">{{ name }}</h1>
        <h1  class="font-semibold transition-opacity ease-in duration-100 opacity-100">{{ timeStart }}-{{ timeEnd }}</h1>
        <h1 class="font-semibold transition-opacity ease-in duration-150 opacity-0">{{ moreInfo }}</h1>
      </div>
    </div>
   </div>
</template>

<script setup>
  import { ref } from "vue";

  const props = defineProps({
    timeStart: String,
    timeEnd: String,
    name: String,
    moreInfo: String,
  });

  const hover = ref(false);
</script>