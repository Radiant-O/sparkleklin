<template>
    <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <Icon 
            :icon="icon" 
            class="w-6 h-6 text-brand-main"
          />
          <h3 class="text-gray-500 text-sm font-urbanist">{{ title }}</h3>
        </div>
        <span 
          :class="`${trend > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} text-xs font-medium px-2.5 py-0.5 rounded-full`"
        >
          {{ trend > 0 ? '+' : '' }}{{ trend }}%
        </span>
      </div>
  
      <div class="flex items-end justify-between">
        <div>
          <p class="text-3xl font-syne font-bold">{{ count }}</p>
          <p class="text-gray-500 text-sm font-urbanist">{{ subtitle }}</p>
        </div>
        
        <div class="flex items-center gap-2">
          <Icon 
            :icon="trend > 0 ? 'material-symbols:trending-up' : 'material-symbols:trending-down'" 
            :class="`w-5 h-5 ${trend > 0 ? 'text-green-500' : 'text-red-500'}`"
          />
          <span class="text-sm text-gray-500">vs last month</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Icon } from '@iconify/vue'
  
  defineProps({
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    count: {
      type: [Number, String],
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    trend: {
      type: Number,
      default: 0
    }
  })
  </script>