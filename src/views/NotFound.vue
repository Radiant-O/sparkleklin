<template>
  <div class="min-h-screen reveal flex items-center justify-center bg-gray-50">
    <div class="text-center">
      <h1 class="text-9xl font-bold text-brand-main">404</h1>
      <p class="text-2xl font-syne mt-4 mb-8">Oops! Page not found</p>
      <p class="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <router-link
        to="/"
        class="px-6 py-3 bg-brand-main text-white rounded-xl hover:bg-brand-main/90 transition-colors"
      >
        Go Home
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useScrollAnimation()
</script>
