<template>
  <transition name="page" mode="out-in">
    <slot />
  </transition>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
