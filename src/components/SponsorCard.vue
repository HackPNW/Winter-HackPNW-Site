<template>
  <div
    class="cursor-pointer transition flex justify-center items-center w-full max-w-[20rem] aspect-square bg-gray-300 hover:bg-gray-200 rounded-2xl"
   >
    <slot>
      <h1 v-show="!isImg" class="flex text-center text-2xl font-semibold">
        This could be you!
      </h1>
    </slot>
  </div>
</template>

<script setup>
  import { useRouter } from "vue-router";

  defineProps({
    text: String,
    isImg: Boolean,
  });

  const router = useRouter();

  const goToContact = () => {
    router.push("/contact");
  };
</script>
