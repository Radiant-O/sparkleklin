<template>
 
    <div class="mx-5 md:mx-25 pt-20">
      <div class="flex flex-col md:flex-row justify-center gap-10">
        <!-- Left Side - Image with Overlay -->
        <div class="relative">
          <img :src="imageUrl" :alt="imageAlt" class="w-[28em] md:h-[41em] rounded-3xl" />
          <div
            class="absolute md:w-[28em] bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl"
          >
            <p class="text-white/80 font-urbanist md:text-sm p-8">{{ overlayText }}</p>
          </div>
        </div>

        <!-- Right Side - Features List -->
        <div class="bg-brand-ash/5 rounded-3xl p-3 md:p-10 md:w-[55%]">
          <div>
            <p class="font-syne text-2xl md:text-5xl font-bold pb-0 mb-0">{{ title }}</p>
            <div class="font-urbanist text-brand-ash text-lg md:text-xl -mt-3 md:-mt-8 md:w-[70%]">
              {{ description }}
            </div>
          </div>

          <!-- Features Grid -->
          <div class="mt-10 space-y-6">
            <div v-for="feature in features" :key="feature.title" class="flex items-start gap-4">
              <img
                :src="feature.icon"
                :alt="feature.title"
                class="w-7 h-7 md:w-9 md:h-9 bg-white p-1 rounded-xl"
              />
              <div>
                <p class="font-syne font-bold text-lg md:text-xl">{{ feature.title }}</p>
                <div class="font-urbanist text-brand-ash leading-5 -mt-3 md:w-[90%]">{{ feature.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
</template>

<script setup>
defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: 'Why Choose Us',
  },
  overlayText: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: Array,
    required: true,
    validator: (features) =>
      features.every((feature) => feature.title && feature.description && feature.icon),
  },
})
</script>
