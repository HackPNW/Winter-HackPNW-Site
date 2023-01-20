<template>
  <div class="bg-slate-300 w-full rounded-lg flex">
<!--    <div class="bg-emerald-500 w-4 rounded-l-lg" />-->
    <div class="space-y-1 w-full">
      <div class="">
        <div class="w-full rounded-t-xl flex justify-between items-center text-white" :class="'bg-' + color">
          <h2 class="px-3 py-2 font-bold font-poppins text-2xl">{{ name }}</h2>
          <h2 class="px-3 py-2">{{ title }}</h2>
        </div>
      </div>
      <div class="px-3 py-2">
        <h2>{{ aboutme }}</h2>
      </div>
    </div>
   </div>
</template>

<script setup>
  defineProps({
    name: String,
    school: String,
    title: String,
    aboutme: String,
    color: String,
  });
</script>