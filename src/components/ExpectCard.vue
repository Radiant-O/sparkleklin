<template>
  <div class="relative h-full w-full">
    <img
      :src="image"
      :alt="title"
      class="h-full w-full rounded-3xl object-cover"
    />

    <div
      class="absolute h-full bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl"
      :class="large ? 'pt-[25%]' : 'pt-[70%]'"
    >
      <p 
        class="text-white font-syne font-semibold px-10"
        :class="large ? 'text-3xl' : 'text-[1.3em]'"
      >
        {{ title }}
      </p>
      <div 
        class="text-white font-urbanist px-10 font-light"
        :class="[
          large ? 'text-lg -mt-[1.6em] w-[95%]' : 'text-md leading-5 -mt-[0.9em]'
        ]"
      >
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  large: {
    type: Boolean,
    default: false
  }
})
</script>