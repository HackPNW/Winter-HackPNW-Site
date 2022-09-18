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
          <button class="mt-8 rounded-full bg-red-500 hover:bg-red-400 py-3 px-10 text-white font-bold text-xl w-fit">Register</button>
        </div>
      </div>


      <div class="flex flex-1 flex-col md:flex-row">
        <div class="border-black border-r-4 p-2 flex-1">
          <h1 class="font-bold text-5xl z-20 relative w-fit pb-4">
            What is HackPNW?
            <div class="absolute bg-red-500 h-4 w-full -mt-3 ml-5 z-[-1]" />
          </h1>
          <p class="text-lg px-2 my-4 font-semibold">
            HackPNW is a 36 hour highschool hackathon <a href="https://reactor-ext.azurewebsites.net/en-us/reactor/Location/Redmond" class="font-bold text-red-500 hover:cursor-pointer hover:bg-slate-200 hover:rounded-lg"> @Microsoft Reactor, Redmond Washington.</a> We encourage highschool students from around the Pacific Northwest to come and compete for fortune and glory!
            There will be code, There will be prizes, and most of all there will be lots of fun! Best of all it's entirely free (including food)!    
          </p>
          <div class="w-full my-6 text-center">
            <button class="rounded-full bg-red-500 hover:bg-red-400 py-2 px-5 text-white font-bold text-xl">Register</button>
          </div>
        </div>
        <div class="border-black border-r-4 p-2 flex-1">
          <h1 class="font-bold text-5xl z-20 relative w-fit pb-4">Who are we?
            <div class="absolute bg-amber-500 h-4 w-full -mt-3 ml-5 z-[-1]" />
          </h1>
          <p class="text-lg px-2 mt-4 font-semibold">
            Our mission is to bring together highschool students from all over the region for a weekend-long hackathon that's as fun as it is educational. We want to help students from different schools and backgrounds form cross-campus connections, learn from each other, and build their skillset with real world experience.
          </p>
          <div class="w-full mt-6 text-center">
            <button class="rounded-full bg-amber-500 hover:bg-amber-400 py-2 px-5 text-white font-bold text-xl">Contact Us</button>
          </div>
        </div>
        <div class="p-2 flex-1">
          <h1 class="font-bold text-5xl z-20 relative w-fit pb-4">Details!
            <div class="absolute bg-green-500 h-4 w-full -mt-3 ml-5 z-[-1]" />
          </h1>
          <p class="text-lg px-2 my-4 font-semibold">
            When: January 7th-8th <br>
            Where: 3709 157th Ave NE, Redmond, WA 98052 <br>
            Who can register: Any highschool student <br>
            Why: It's fun!
          </p>
        </div>
      </div>

    </div>

    <div class="p-8">

      <h2 class="text-center text-6xl font-semibold pb-6 pt-4 my-5">Frequenty Asked Questions</h2>

      <div class="flex gap-x-4 mb-6" ref="faqSectionEl">
        <div class="flex flex-col flex-1 gap-y-4" v-for="col in faqCols">
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

      <div class="p-4 rounded-lg bg-gray-300 flex flex-col"> 
        <h3 class="text-4xl pb-2">Still have questions?  We got you.</h3>
        <p class="text-lg text-gray-600">Email</p>
        <input class="px-2 py-1 text-lg bg-gray-100 rounded-md outline-0 mb-2" placeholder="example@example.com">

        <p class="text-lg text-gray-600">Message</p>
        <textarea class="px-2 py-1 text-lg bg-gray-100 rounded-md outline-0 mb-4" rows="8" placeholder="Hey there..." />

        <button class="bg-red-500 rounded-md text-lg px-2 py-1 outline-0 text-white font-semibold">
          Send
        </button>
      </div>
    </div>    
  </div>
</template>

<style scoped>


</style>

<script setup>
  import { ref, computed, watch, onMounted } from "vue";
  import { useElementSize } from "@vueuse/core";
  import NavBar from "../components/NavBar.vue";

  const faqSectionEl = ref(null);
  const { width: faqSectionWidth, height: faqSectionHeight } = useElementSize(faqSectionEl);

  const faqsData = ref([
    ["What is a Hackathon?", "A hackathon is a sprint-like design event wherein computer programmers and others involved in software development, including graphic designers, interface designers, product managers, project managers, domain experts, and others collaborate intensively on software projects. The goal of a hackathon is to create functioning software or hardware by the end of the event. Hackathons tend to have a specific focus, which can include the programming language used, the operating system, an application, an API, or the subject and the demographic group of the programmers. In other cases, there is no restriction on the type of software being created or the design of the new system. "],
    ["How much does it cost?", "Nothing! HackPNW is 100% free including meals and sleeping arangments!"],
    ["Who can register?", "Any highschool student can register as a solo or as a team!"],
    ["How big are the teams?", "Teams should be 2-4 people, you can register alone or with a team."],
    ["How many events are there?", "There is a main team challenge along with a side competition for comptetive programming. To break up the hacking, each day there will be one fun event!"],
    ["Will there be prizes?", "Of course! There will be over $1000 worth of prizes to win and trust us when we say they will be worth your time."],
    ["Can I sleep on the floor?", "We 100% advise that you bring a sleeping bag to sleep on the floor with, but yes! Sleep away or hack all the way through, it's your choice!"],
    ["What should I bring?", "We recomend you bring a laptop, charger(s) for all your devices, and if you plan on spending the night (which we recomend) bring a sleeping bag and other toiletries you might need. Most of all bring a positive mindset and good energy and you'll have a great time!"],
    ["How long is HackPNW?", "HackPNW is a 36 hour hackathon starting in the morning of saturday going all the way to sunday evening!"],
    ["How big is HackPNW?", "Our venue has capacity for about 100 hackers, spots are limited and first come first serve."],
    ["When is HackPNW", "HackPNW is going to be on January 7th - January 8th, at the Microsoft Redmond Reactor!"],
    ["Will there be tech talks and workshops?", "Yes, representatives from many companies will be there to give talks and workshops about their latest tech!"],
  ]);
  const faqCols = ref([[]]);
  
  const doTheFuckinCols = () => {
    const cols = faqSectionColumnsCount.value;
    let ret = [...new Array(cols)].map(() => []);

    for (let i = 0; i < faqsData.value.length; i++) {
      ret[i % cols].push(faqsData.value[i])
    }

    console.log(ret);
    
    faqCols.value = ret;
  }

  const faqSectionColumnsCount = ref(1);

  watch(faqSectionWidth, (newVal, oldVal) => {
    console.debug(`✨ FAQ section width change: ${oldVal} -> ${newVal}`);

    // TODO: I know this code is fucking horrible, im too tired to fix, refactor pls

    let newFaqSectionColumnsCount = Math.floor(newVal / 400) || 1;
    let needToFuckinDoCols = newFaqSectionColumnsCount == faqSectionColumnsCount.value;
    faqSectionColumnsCount.value = newFaqSectionColumnsCount;
    if (needToFuckinDoCols) doTheFuckinCols();
    console.debug(faqSectionColumnsCount.value);
  });

  onMounted(() => {
    faqSectionColumnsCount.value = Math.floor(faqSectionWidth.value / 400) || 1;
    doTheFuckinCols();
  })
</script>