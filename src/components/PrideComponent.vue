<template>
  <div class="mx-5 md:mx-20 pt-20 pb-20">
    <!-- Header Section -->
    <div class="md:mx-auto w-full text-center">
      <p class="font-syne text-3xl md:text-4xl md:w-[35%] mx-auto font-bold">
        {{ title }}
      </p>
      <div class="font-urbanist text-lg -mt-5 font-normal text-brand-ash md:w-[35%] mx-auto">
        {{ description }}
      </div>
    </div>

    <div class="flex md:flex-row flex-col justify-center gap-10  pt-10">
      <div class="bg-brand-ash/5 md:w-[30%] bg-opacity-90 p-10 rounded-3xl shadow-lg">
    <Icon
          icon="material-symbols:laundry"
          width="40"
          height="40"
          class="text-brand-main shadow-lg rounded-lg p-2.5 mb-8"
        />
        <div>
          <p class="font-syne font-semibold text-2xl">Laundry & Ironing Service</p>
          <p class="font-urbanist text-lg font-light text-brand-ash max-w-2xl mx-auto">
            We are available 24/7 to help you carry out your laundry & ironing service.
          </p>
        </div>
      </div>
      <div class="bg-brand-ash/5 md:w-[30%] bg-opacity-90 p-10 rounded-3xl shadow-lg">
       <Icon
          icon="gridicons:house"
          width="40"
          height="40"
          class="text-brand-main shadow-lg rounded-lg p-2.5 mb-8"
        />
        <div>
          <p class="font-syne font-semibold text-2xl">Housekeeping Services</p>
          <p class="font-urbanist text-lg text-brand-ash font-light max-w-2xl mx-auto">
            We are available 24/7 to help you carry out your housekeeping service.
          </p>
        </div>
      </div>
      <div class="bg-brand-ash/5 md:w-[30%] bg-opacity-90 p-10 rounded-3xl shadow-lg">
        <Icon
          icon="bxs:shopping-bag"
          width="40"
          height="40"
          class="text-brand-main shadow-lg rounded-lg p-2.5 mb-8"
        />
        <div>
          <p class="font-syne font-semibold text-2xl">Shopping & Running Errands</p>
          <p class="font-urbanist text-lg font-light text-brand-ash max-w-2xl mx-auto">
            We are available 24/7 to help you carry out your Shopping & running errands service.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
defineProps({
  title: {
    type: String,
    default: 'We pride to offer following services as well',
  },
  description: {
    type: String,
    default:
      'Our commitment to excellence is evident in the numbers. Discover the impressive stats showccasing the quality and reliability of our home cleaning services.',
  },
})
</script>
