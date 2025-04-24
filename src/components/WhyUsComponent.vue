<template>
 
    <div class="mx-25 pt-20">
      <div class="flex justify-center gap-10">
        <!-- Left Side - Image with Overlay -->
        <div class="relative">
          <img :src="imageUrl" :alt="imageAlt" class="w-[28em] h-[41em] rounded-3xl" />
          <div
            class="absolute w-[28em] bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl"
          >
            <p class="text-white font-urbanist text-sm p-8">{{ overlayText }}</p>
          </div>
        </div>

        <!-- Right Side - Features List -->
        <div class="bg-brand-ash/5 rounded-3xl p-10 w-[55%]">
          <div>
            <p class="font-syne text-5xl font-bold pb-0 mb-0">{{ title }}</p>
            <div class="font-urbanist text-brand-ash text-xl -mt-8 w-[70%]">
              {{ description }}
            </div>
          </div>

          <!-- Features Grid -->
          <div class="mt-10 space-y-6">
            <div v-for="feature in features" :key="feature.title" class="flex items-start gap-4">
              <img
                :src="feature.icon"
                :alt="feature.title"
                class="w-9 h-9 bg-white p-1 rounded-xl"
              />
              <div>
                <p class="font-syne font-bold text-xl">{{ feature.title }}</p>
                <div class="font-urbanist text-brand-ash -mt-3 w-[90%]">{{ feature.description }}</div>
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
