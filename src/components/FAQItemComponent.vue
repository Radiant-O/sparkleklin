<template>
  <div class="faq-item border border-brand-ash/20 rounded-xl p-6">
    <div 
      @click="isOpen = !isOpen"
      class="flex justify-between items-center cursor-pointer"
    >
      <p class="font-syne font-semibold text-sm md:text-normal">{{ title }}</p>
      <button 
        class="w-8 h-8 rounded-full border-2 border-brand-main flex items-center justify-center text-brand-main transition-colors hover:bg-brand-main "
      >
        <Icon 
          :icon="isOpen ? 'ic:round-minus' : 'ic:round-plus'" 
          class="h-5 w-5 transition-transform duration-300 text-brand-main hover:text-white"
        />
      </button>
    </div>
    <div 
      v-show="isOpen"
      class="mt-4 font-urbanist text-brand-ash overflow-hidden transition-all duration-300"
    >
      <p class="text-lg">{{ content }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})

const isOpen = ref(false)
</script>