<template>
   <div class="min-h-screen">  <!-- Moved background color to style.css -->
    <nav-bar />
    <div class="h-full border-4 mx-6 border-black">
      <div class="flex flex-col justify-between border-b-4 border-black p-4 sm:p-10" style="min-height: calc(100vh - 190px)">
        <div class="flex-grow"></div>
        <div class="relative">
          <h1 class="md:text-9xl sm:text-8xl text-6xl font-bold font-poppins flex-0">
            Hack <br>
            The <br>
            Northwest <br>
          </h1>
          <image src="Orca2.png" class="w-96 h-96 absolute right-0 top-0 hidden lg:block z-[-1]" />
        </div>
        <div class="flex-grow">
          <button class="mt-8 rounded-full bg-red-500 py-3 px-10 text-white font-bold text-xl w-fit">Register</button>
        </div>
      </div>


      <div class="flex flex-1 flex-col md:flex-row">
        <div class="border-black border-r-4 p-2 flex-1">
          <h1 class="font-bold text-5xl z-20 relative w-fit pb-4">
            What is HackPNW?
            <div class="absolute bg-red-500 h-4 w-full -mt-3 ml-5 z-[-1]" />
          </h1>
          <p class="text-lg px-2 font-semibold">
            HackPNW is a 36 hour highschool hackathon <a href="https://reactor-ext.azurewebsites.net/en-us/reactor/Location/Redmond" class="font-bold text-red-500 hover:cursor-pointer hover:bg-slate-200 hover:rounded-lg"> @Microsoft Reactor, Redmond Washington.</a> We encourage highschool students from around the Pacific Northwest to come and compete for fortune and glory!
            There will be code, There will be prizes, and most of all there will be lots of fun! Best of all it's entirely free (including food)!    
          </p>
        </div>
        <div class="border-black border-r-4 p-2 flex-1">
          <h1 class="font-bold text-5xl z-20 relative w-fit pb-4">Who are we?
            <div class="absolute bg-amber-500 h-4 w-full -mt-3 ml-5 z-[-1]" />
          </h1>
          <p class="text-lg px-2 font-semibold">
            Our mission is to bring together highschool students from all over the region for a weekend-long hackathon that's as fun as it is educational. We want to help students from different schools and backgrounds form cross-campus connections, learn from each other, and build their skillset with real world experience.
          </p>
        </div>
        <div class="p-2 flex-1">
          <h1 class="font-bold text-5xl z-20 relative w-fit pb-4">When is it?
            <div class="absolute bg-green-500 h-4 w-full -mt-3 ml-5 z-[-1]" />
          </h1>
          <p class="text-lg px-2 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in elit urna. Pellentesque fringilla gravida ipsum sit amet semper. Proin placerat pharetra urna, vitae imperdiet lacus. In hac habitasse platea dictumst. Pellentesque vel vehicula metus, sed mollis est. Nullam augue diam, ullamcorper ut lobortis a, posuere at justo. Vestibulum sed ipsum nec tortor dignissim pharetra et malesuada augue. Morbi luctus metus dignissim rhoncus rhoncus. <br> <br> </p>
        </div>
      </div>

    </div>
    <div class="flex p-8" ref="faqSectionEl">
      <div class="flex flex-col" v-for="col in faqCols">
        <div class="" v-for="faq in col">
          <details class="cursor-pointer p-4 bg-gray-300 rounded-md">
            <summary class="text-xl font-bold">
              {{ faq[0] }}
            </summary>
            <p class="pt-2 text-md">{{ faq[1] }}</p>
          </details>
        </div>
      </div>
    </div>
    
  </div>
</template>

<style scoped>
  .child {
    transform: translateY(-50%);
    position: relative;
    top: 25%;
  }
</style>

<script setup>
  import { ref, computed, watch } from "vue";
  import { useElementSize } from "@vueuse/core";
  import NavBar from "../components/NavBar.vue";

  const faqSectionEl = ref(null);
  const { width: faqSectionWidth, height: faqSectionHeight } = useElementSize(faqSectionEl);

  const faqsData = ref([
    ["Am i amongus?", "Pellentesque in nibh ut magna pretium dictum et nec quam. Aliquam non est eu odio tincidunt lobortis. Proin eu mollis metus. Praesent enim neque, ornare a cursus sit amet, imperdiet non nibh. Ut non rhoncus est. Mauris non mattis elit. Nullam vel molestie felis, at laoreet turpis. Aenean tempus pellentesque porttitor."],
    ["Am I sussy impostor?", "Pellentesque in nibh ut magna pretium dictum et nec quam. Aliquam non est eu odio tincidunt lobortis. Proin eu mollis metus. Praesent enim neque, ornare a cursus sit amet, imperdiet non nibh. Ut non rhoncus est. Mauris non mattis elit. Nullam vel molestie felis, at laoreet turpis. Aenean tempus pellentesque porttitor."],
    ["Will I buy hackpnw.org before Equinox?", "Yes. Pellentesque in nibh ut magna pretium dictum et nec quam. Aliquam non est eu odio tincidunt lobortis. Proin eu mollis metus. Praesent enim neque, ornare a cursus sit amet, imperdiet non nibh. Ut non rhoncus est. Mauris non mattis elit. Nullam vel molestie felis, at laoreet turpis. Aenean tempus pellentesque porttitor."],
    ["What is among s?", "Pellentesque in nibh ut magna pretium dictum et nec quam. Aliquam non est eu odio tincidunt lobortis. Proin eu mollis metus. Praesent enim neque, ornare a cursus sit amet, imperdiet non nibh. Ut non rhoncus est. Mauris non mattis elit. Nullam vel molestie felis, at laoreet turpis. Aenean tempus pellentesque porttitor."],
  ]);
  const faqCols = computed(() => {
    let ret = [];
    
  });
  const faqSectionColumnsCount = ref(2);

  watch(faqSectionWidth, (newVal, oldVal) => {
    console.debug(`✨ FAQ section width change: ${oldVal} -> ${newVal}`);
    faqSectionColumnsCount.value = Math.floor(newVal / 320) || 1;
    console.debug(faqSectionColumnsCount.value);
  });
</script>