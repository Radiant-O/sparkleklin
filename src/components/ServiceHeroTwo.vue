<template>
  <section class="service-hero">
    <div
      class="bg-brand-ash/5 bg-opacity-90 rounded-3xl flex py-20 px-28 justify-center items-center mt-10 mx-10"
    >
      <div class="w-[100%] flex justify-between items-center">
        <img
          :src="imageUrl"
          :alt="title"
          class="w-[80%] h-[45rem] object-cover rounded-3xl shadow-lg"
        />
      </div>
      <div class="w-[100%]">
        <p
          class="font-urbanist text-brand-main w-fit px-2 py-1 font-semibold text-sm bg-brand-main/6 rounded-2xl"
        >
          {{ badge }}
        </p>
        <div class="font-syne text-5xl font-semibold">
          <p>{{ titleFirstPart }}</p>
          <div class="-mt-10">{{ titleSecondPart }}</div>
        </div>
        <div
          class="font-urbanist text-lg mt-5 font-light text-gray-500 leading-7 text-justify w-[75%]"
        >
          <p
            v-for="(paragraph, index) in formattedDescription"
            :key="index"
            :class="index !== formattedDescription.length - 1 ? 'mb-3' : ''"
          >
            {{ paragraph }}
          </p>
        </div>

        <div class="mt-8">
          <ButtonComponent
            :buttonText="buttonText"
            width="auto"
            height="auto"
            fontSize="1.2em"
            showIcon
            textCustomClass="text-brand-white"
            customClass="flex items-center border-none justify-center rounded-3xl px-1 py-1 font-urbanist font-semibold text-brand-white gap-2 bg-brand-main cursor-pointer"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonComponent from './ButtonComponent.vue'
import { computed } from 'vue'

const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  badge: {
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
    default: () => [],
  },
  iconUrl: {
    type: String,
    default:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png',
  },
  buttonText: {
    type: String,
    default: 'Get a Free Quote',
  },
})

const titleParts = computed(() => props.title.split(' '))
const titleFirstPart = computed(() => titleParts.value[0])
const titleSecondPart = computed(() => titleParts.value.slice(1).join(' '))

const formattedDescription = computed(() => {
  // Split by double newlines to preserve intentional paragraph breaks
  return props.description
    .split(/\n\s*\n/)
    .map(paragraph => paragraph.trim())
    .filter(paragraph => paragraph.length > 0)
    .map(paragraph => paragraph.endsWith('.') ? paragraph : paragraph + '.')
})
</script>
