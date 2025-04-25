<template>
  
    <div class="mx-25 pt-20 pb-20">
      <!-- Header Section -->
      <div class="mx-auto w-full text-center">
        <p class="font-syne text-4xl w-[35%] mx-auto font-bold">
          {{ title }}
        </p>
        <div class="font-urbanist text-lg font-normal -mt-[1em] mb-10 text-brand-ash w-[35%] mx-auto">
          {{ description }}
        </div>
      </div>

      <!-- Content Grid -->
      <div>
        <!-- First Row -->
        <div class="flex gap-10">
          <div class="relative w-[67%] h-[25em]">
            <ExpectCard
              :image="features[0].image"
              :title="features[0].title"
              :description="features[0].description"
              large
            />
          </div>
          <div class="relative w-1/4 h-[25em]">
            <ExpectCard
              :image="features[1].image"
              :title="features[1].title"
              :description="features[1].description"
            />
          </div>
        </div>

        <!-- Second Row -->
        <div class="flex gap-10 mt-10">
          <div class="relative w-1/4 h-[25em]">
            <ExpectCard
              :image="features[2].image"
              :title="features[2].title"
              :description="features[2].description"
            />
          </div>
          <div class="relative w-[67%] h-[25em]">
            <ExpectCard
              :image="features[3].image"
              :title="features[3].title"
              :description="features[3].description"
              large
            />
          </div>
        </div>
      </div>
    </div>
 
</template>

<script setup>
import ExpectCard from './ExpectCard.vue'

defineProps({
  title: {
    type: String,
    default: 'What You Can Expect From Us?'
  },
  description: {
    type: String,
    default: 'Here are few of the things to expect from us which makes us standout and best in the game in the UK'
  },
  features: {
    type: Array,
    required: true,
    validator: (features) => features.length === 4 && features.every(feature => 
      feature.image && 
      feature.title && 
      feature.description
    )
  }
})
</script>