<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || ''">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
  .slide-right-enter-from,
  .slide-left-leave-to {
    transform: translateX(100vw);
  }

  .slide-right-leave-to,
  .slide-left-enter-from {
    transform: translateX(-100vw);
  }

  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
    position: fixed;
  }
</style>
