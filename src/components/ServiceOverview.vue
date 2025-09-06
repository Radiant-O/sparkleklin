<template>
  <section class="service-overview bg-brand-ash/10 mt-10">
    <div class="mx-5 md:mx-25 pt-10 md:pt-20 pb-20">
      <p class="font-syne text-4xl font-semibold">
        {{ title }}
      </p>
      <p class="font-urbanist text-lg font-normal text-brand-ash">
        {{ description }}
      </p>

      <div class="flex flex-col md:flex-row justify-center w-full md:gap-8 pt-2">
        <div
          v-for="(feature, index) in features"
          :key="index"
          :class="['flex w-full items-start gap-3', columnClass]"
        >
          <img
            :src="iconUrl"
            :alt="`feature_${index + 1}`"
            class="w-7 h-7 bg-white p-1 rounded-xl"
          />
          <div>
            <p class="font-urbanist font-semibold">{{ feature }}</p>
          </div>
        </div>
      </div>

      <div class="w-full mt-10 md:mt-20">
        <img
          :src="imageUrl"
          :alt="imageAlt"
          class="rounded-4xl w-full md:object-cover h-[15rem] md:h-[35rem]"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
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
  },
  columns: {
    type: Number,
    default: 3,
    validator: (value) => [2, 3, 4].includes(value),
  },
  iconUrl: {
    type: String,
    default: 'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161903/Vector_pq3ist.png',
  },
  imageUrl: {
    type: String,
    required: true,
  },
  imageAlt: {
    type: String,
    default: 'Service image',
  },
})

const columnClass = computed(() => {
  const columnMap = {
    2: 'w-[45%]',
    3: 'w-1/3',
    4: 'w-[23%]',
  }
  return columnMap[props.columns]
})
</script>
