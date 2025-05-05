<script setup>
// import PageTransition from '@/components/PageTransition.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition 
      name="page" 
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  overflow-y: scroll;
}

/* Page transition animations */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Fade animations */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate(2em, 0);
}

/* Ensure smooth scrolling for anchor links */
[id] {
  scroll-margin-top: 100px;
}
</style>
