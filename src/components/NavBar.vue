<template>
  <nav class="bg-[#FFFDF9] py-3 scroll-smooth bg-[#e7f0ed]">
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="toggleMobileMenu">
            <span class="sr-only">Open main menu</span>

            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
          <div class="flex">
            <div class="flex flex-shrink-0">
              <h1 class="text-3xl text-black font-bold">HackPNW</h1>
            </div>
            <div class="hidden sm:ml-10 md:ml-16 sm:block right-0">
              <div class="flex space-x-4 md:space-x-10">
                <a
                  href="#"
                  class="link-underline text-black px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                  >HOME</a
                >

                <a
                  href="#about"
                  class="link-underline text-black px-3 py-2 rounded-md text-sm font-medium"
                  >ABOUT</a
                >

                <a
                  href="#faq"
                  class="link-underline text-black px-3 py-2 rounded-md text-sm font-medium"
                  >FAQ</a
                >

                <a
                  href="#sponsors"
                  class="link-underline text-black px-3 py-2 rounded-md text-sm font-medium"
                  >SPONSORS</a
                >
              </div>
            </div>
          </div>
          <div class="flex hidden sm:inline align-middle">
            <button
              @click=""
              class="bg-[#79bcc6] text-white font-semibold hover:bg-[#aadbe2] hover:text-white px-4 py-2 rounded-full text-sm">
              REGISTER SOON
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu" v-show="mobileMenuOpen">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <a
          href="#"
          class="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page"
          >Home</a
        >

        <a
          href="#about"
          class="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >About</a
        >

        <a
          href="#faq"
          class="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >FAQ</a
        >

        <a
          href="#sponsors"
          class="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Sponsors</a
        >

        <router-link
          to=""
          class="text-white bg-[#79bcc6] hover:bg-red-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Register soon</router-link
        >
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .link-underline {
    border-bottom-width: 0;
    background-image: linear-gradient(transparent, transparent),
      linear-gradient(#79bcc6, #79bcc6);
    background-size: 0 3px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size 0.1s ease-in-out;
  }
  .link-underline:hover {
    background-size: 100% 3px;
    background-position: 0 100%;
  }
</style>

<script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();

  const goToRegistration = () => router.push("/register");

  const mobileMenuOpen = ref(false);
  const toggleMobileMenu = () => (mobileMenuOpen.value = !mobileMenuOpen.value);
</script>
