<template>
  <section class="service-hero">
    <div
      class="bg-brand-ash/5 bg-opacity-90 rounded-3xl flex flex-col-reverse md:flex-row gap-8 md:gap-0 py-20 md:px-28 justify-center items-center mt-10 mx-5 md:mx-10"
    >
      <div class="w-[100%] flex  justify-between items-center ">
        <img
          :src="imageUrl"
          :alt="title"
          class="md:w-[80%] h-[45rem] object-cover rounded-3xl shadow-lg"
        />
      </div>
      <div class="w-[100%]">
        <p
          class="font-urbanist text-brand-main w-fit px-2 py-1 font-semibold text-sm bg-brand-main/6 rounded-2xl"
        >
          {{ badge }}
        </p>
        <div class="font-syne text-3xl md:text-5xl font-semibold">
          <p>{{ titleFirstPart }}</p>
          <div class="-mt-10">{{ titleSecondPart }}</div>
        </div>
        <div class="font-urbanist text-lg pt-2 font-light text-gray-500 text-justify md:w-[75%]">
          {{ description }}
        </div>
        <div class="mt-5">
          <div v-for="(feature, index) in features" :key="index" class="flex items-start gap-2 md:gap-5">
            <img :src="iconUrl" alt="feature_icon" class="w-5 h-5 md:w-7 md:h-7 bg-white p-1 rounded-xl" />
            <div>
              <p class="font-urbanist font-semibold text-normal md:text-xl">
                {{ feature }}
              </p>
            </div>
          </div>
        </div>
        <div class="mt-5">
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
import { computed } from 'vue'
import ButtonComponent from './ButtonComponent.vue'

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
    required: true,
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

</script>
