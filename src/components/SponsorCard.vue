<template>
    <div
        class="cursor-pointer transition flex justify-center items-center w-full max-w-[20rem] aspect-square bg-gray-300 hover:bg-gray-200 rounded-2xl">
        <h1 class="flex text-center text-2xl font-semibold">
            {{ text }}
        </h1>
    </div>
</template>

<script setup>
  defineProps({
    text: String
  });
</script>