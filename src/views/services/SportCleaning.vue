<template>
  <div class="reveal">
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section class="c1">
      <ServiceHeroTwo
        imageUrl="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178741/2148766021_e4vsa1.jpg"
        badge="SPORT AND LEISURE"
        title="Sport and Leisure Cleaning Service"
        :description="`We can adapt our cleaning schedules to fit any leisure and entertainment outlet. They are completely tailored to building specifications and the type of leisure facility you need us to clean. Our cleaners can help cinemas, hotels and restaurants keep their front of house clean and tidy on a regular basis and as a one off.\n
We understand how important it is to have a clean and tidy working out environment. That\'s why we recruit our staff to meet the high standards we know you require. We are committed to detail and competitive rates. All little worries will be gone when we start taking care of your cleaning needs and janitorial supply.`"
      />
    </section>
    <section class="c2">
      <section class="service-overview bg-brand-ash/10 mt-10">
        <div class="mx-5 md:mx-25 pt-20 pb-20">
          <!-- <p class="font-syne text-2xl md:text-5xl font-semibold">
            Our Office Cleaning <span class="block">Options Include Thorough:</span>
          </p> -->
          <div class="font-urbanist text-lg -mt-6 font-normal text-brand-ash">
            Our cleaning service includes general thorough cleaning on a daily, weekly, fortnightly
            or monthly basis. We are fully insured so there is no need to worry about if something
            goes wrong which is very unlikely to happen because our staff are fully trained to do
            the job but will always follow your specifications and instructions. You can provide all
            the cleaning materials or we can provide if you so wish
          </div>

          <div class="w-full mt-20">
            <img
              src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178736/2148766028_vcm6js.jpg"
              alt="imageAlt"
              class="rounded-4xl w-full object-cover h-[35rem]"
            />
          </div>
          <!-- <ServiceOverview /> -->
        </div>
      </section>
    </section>
    <section class="mt-10 md:mt-0">
      <WhatToOfferComponent />
    </section>
    <section>
      <ImpactsComponent :stats="impactStats" />
    </section>
    <section class="other-services">
      <div class="mx-5 md:mx-25 pt-20">
        <div class="flex justify-between">
          <p class="font-syne text-xl md:text-3xl font-bold">Other Services</p>
          <p class="font-urbanist text-xl">See All</p>
        </div>
        <div class="grid md:grid-cols-3 justify-between gap-14">
          <CardComponent
            v-for="service in services"
            :key="service.title"
            :image-url="service.imageUrl"
            :title="service.title"
            :route-path="`/services/${service.slug}`"
          />
        </div>
      </div>
    </section>
    <section>
      <FooterComponent />
    </section>
  </div>
</template>

<script setup>
import MainHeader from '@/components/MainHeader.vue'
import ServiceHeroTwo from '@/components/ServiceHeroTwo.vue'
import WhatToOfferComponent from '@/components/WhatToOfferComponent.vue'
import ImpactsComponent from '@/components/ImpactsComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
// import ServiceOverview from '@/components/ServiceOverview.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useScrollAnimation()

const impactStats = [
  {
    value: 100,
    suffix: '%',
    label: 'Free Estimate',
  },
  {
    value: 2000,
    suffix: '+',
    label: 'Homes Cleaned',
  },
  {
    value: 3000,
    suffix: '+',
    label: 'Satisfied Clients',
  },
  {
    value: 95,
    suffix: '%',
    label: 'Customer Retention Rate',
  },
]

// const features = [
//   'Restrooms cleaning, Bin emptying, Vacuuming, mopping, and polishing floors and surfaces.',
//   'Disinfecting high touch areas, stairs, elevators and other high traffic areas.',
//   'Surface Dusting, Kitchen or lounge cleaning, washing up tea cups and plates.',
//   'Reception areas and foyers, Vacuuming of carpets, spot cleaning, telephones sanitized and more.',
// ]

const services = [
  {
    title: 'Hospitals',
    slug: 'hospitals',
    imageUrl:
      'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178800/woman-cleaning-ophthalmologist-s-office_gpmwwc.jpg',
  },
  {
    title: 'Shopping Mall',
    slug: 'shopping-mall',
    imageUrl:
      'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161863/supermarket_clea_kmmvhs.png',
  },
  {
    title: 'Office',
    slug: 'offices',
    imageUrl: 'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161864/officee_uqslu6.png',
  },
]
</script>

<style lang="scss" scoped></style>
