<template>
  <div class="reveal">
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section class="c1">
      <ServiceHeroTwo
        imageUrl="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329766/Sparkleklin/car%20showroom.jpg"
        badge="CAR SHOWROOM CENTRES CLEANING"
        title="Car Showroom Cleaning Service"
        :description="`We know that having clean and tidy reception areas and washrooms is important to you so we'll always ensure your front of house is as clean and well-presented as possible. It is very important that the showroom and the reception areas also look at their best. Sparkleklin offers a comprehensive cleaning service, aimed specifically at car showrooms and show homes to help achieve this standard.`"
      />
    </section>
    <section class="c2">
      <section class="service-overview bg-brand-ash/10 mt-10">
        <div class="mx-5 md:mx-25 pt-20 pb-20">
          <p class="font-syne text-2xl md:text-5xl font-semibold">
            Our Car Showroom Cleaning <span class="block">Process Includes:</span>
          </p>
          <div class="font-urbanist text-lg -mt-6 font-normal text-brand-ash">
            We ensure that all the flooring found in your showrooms is as clean and shiny as the
            cars, ensuring the only things to notice in the showroom are the cars and display units
            for sale. We will provide a cleaning specification for individual areas including
            showrooms, entrance and reception areas, offices, kitchens and washrooms.
            <br />
            Such plans will include periodic cleans generally on a rotation basis. These will cover
            floor polishing and and tasks such as phone sanitising. Toilet consumables will be
            replenished daily and if required feminine hygiene services also provided.
          </div>

          <!-- <div class="grid md:grid-cols-2 w-full gap-3 mt-10">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="flex gap-5 items-start md:w-[80%]"
            >
              <img
                src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png"
                :alt="`feature_${index + 1}`"
                class="w-7 h-7 bg-white p-1 rounded-xl"
              />
              <div>
                <p class="font-urbanist font-semibold md:text-xl">{{ feature }}</p>
              </div>
            </div>
          </div> -->

          <div class="w-full mt-20">
            <img
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329765/Sparkleklin/car-mechanic-cleaning-garage-floor-auto-industry-shop-workshop_rvqrcp.jpg"
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
    title: 'Pubs, Clubs & Restaurants',
    slug: 'pubs-clubs-restaurants',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329760/Sparkleklin/Cleaning_Restaurant_Table-1920w_ebul5x.jpg',
  },
  {
    title: 'Shopping Mall',
    slug: 'shopping-mall',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445011/Sparkleklin/supermarket_clea_hnjwfq.png',
  },
  {
    title: 'Educational Center',
    slug: 'education-centres',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445012/Sparkleklin/educationall_vlppma.png',
  },
]
</script>

<style lang="scss" scoped></style>
