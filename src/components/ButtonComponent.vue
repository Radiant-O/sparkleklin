<template>
  <div>
    <button
    :class="[
            'flex items-center justify-center py-2 px-2 rounded-4xl border border-brand-ash font-urbanist font-semibold gap-2',
            `text-[${fontSize}]`,
            `w-${width}`,
            `h-${height}`,
            customClass
        ]"
     >
      <span v-if="showIcon">
            <ArrowUpRight class="text-brand-main bg-white w-9 h-9 rounded-full p-1.5"/>
        </span>
      <span :class="['pr-2', textCustomClass]">{{ buttonText }}</span>
    </button>
  </div>
</template>
<script setup>
import { ArrowUpRight } from 'lucide-vue-next'

defineProps({
    buttonText: {
        type: String,
        default: 'Contact Us'
    },
    width: {
        type: String,
        default: 'auto'
    },
    height: {
        type: String,
        default: 'auto'
    },
    fontSize: {
        type: String,
        default: '1.2em'
    },
    showIcon: {
        type: Boolean,
        default: true
    },
    customClass: {
        type: String,
        default: ''
    },
    textCustomClass: {
        type: String,
        default: ''
    }
})
</script>
