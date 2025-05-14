<template>
  <div class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Search Bar -->
        <div class="flex-1 max-w-lg">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Icon icon="material-symbols:search" class="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="search"
              :placeholder="placeholder"
              class="block w-[70%] font-urbanist pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-brand-main focus:border-brand-main text-[14px] sm:text-sm"
              @input="$emit('search', $event.target.value)"
            />
          </div>
        </div>

        <!-- Admin Profile -->
        <div class="flex items-center space-x-4">
          <img
            src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff"
            alt="Admin"
            class="h-8 w-8 rounded-full"
          />
          <div class="hidden md:flex flex-col">
            <span class="text-sm font-medium font-syne text-gray-900">Sparkleklin Admin</span>
            <span class="text-xs font-urbanist text-gray-500">Administrator</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  placeholder: {
    type: String,
    default: 'Search...',
  },
})

defineEmits(['search'])
</script>

<style lang="scss" scoped></style>
