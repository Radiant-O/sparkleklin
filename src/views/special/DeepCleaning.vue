<template>
  <div class="reveal">
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section class="c1">
      <ServiceHeroTwo
        imageUrl="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178786/woman-cleaning-spray-product-cleaner-washing-window-with-smile-home-happy-working-m_kyonpf.jpg"
        badge="DEEP CLEANING"
        title="What is a deep Cleaning Service?"
        :description="`Deep cleaning is different from regular or spring cleaning because it reaches the deep grime and dirt in your home/office. … it reaches the inside and outside of all windows, Wiping down all doors, all blinds, full and deep dusting including all the corners of rooms for cobwebs. If you don’t like getting your hands dirty but like a clean home give Sparkleklin Cleaners.\n 
        First Time Cleaning is Always a Deep Cleaning\n
        Deep cleaning will bring your home up to a high shining perfection, and stop you from playing catch-up. A deep cleaning will get your home “ready to show” for company or when you have decided to sell or maybe you going to move to another house or apartment for any situation you might need a deep cleaning and we are prepared for this type of cleaning.`"
      />
    </section>
    <section class="c2">
      <section class="service-overview bg-brand-ash/10 mt-10">
        <div class="mx-5 md:mx-25 pt-20 pb-20">
          <p class="font-syne text-2xl md:text-5xl font-semibold">
            Our Deep Cleaning <span class="block">Options Include Thorough:</span>
          </p>
          <div class="font-urbanist text-lg -mt-6 font-normal text-brand-ash">
            No office are alike, we will give you a detailed quote based on the size of your office
            and the specific needs of your business also help you save on costs wherever possible.
            <br />
            We will deliver according to your needs; your hours of business and your building type
            or environment to ensure your premises are cleaned to standard with minimal disruption.
            We will exceed your expectations; give us a call now for more information.
          </div>

          <div class="grid md:grid-cols-2 w-full gap-3 mt-10">
            <div
              v-for="(feature, index) in features"
              :key="index"
              class="flex gap-5 items-start md:w-[80%]"
            >
              <img
                src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161903/Vector_pq3ist.png"
                :alt="`feature_${index + 1}`"
                class="w-7 h-7 bg-white p-1 rounded-xl"
              />
              <div>
                <p class="font-urbanist font-semibold md:text-xl">{{ feature }}</p>
              </div>
            </div>
          </div>

          <div class="w-full mt-20">
            <img
              src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757189775/Rectangle_1067330_etyyhf.png"
              alt="imageAlt"
              class="rounded-4xl w-full object-cover h-[20rem] md:h-[35rem]"
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

const features = [
  'Restrooms cleaning, Bin emptying, Vacuuming, mopping, and polishing floors and surfaces.',
  'Disinfecting high touch areas, stairs, elevators and other high traffic areas.',
  'Surface Dusting, Kitchen or lounge cleaning, washing up tea cups and plates.',
  'Reception areas and foyers, Vacuuming of carpets, spot cleaning, telephones sanitized and more.',
]

const services = [
  {
    title: 'Pubs, Clubs & Restaurants',
    slug: 'pubs-clubs-restaurants',
    imageUrl:
      'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178754/Cleaning_Restaurant_Table-1920w_b2fpqz.jpg',
  },
  {
    title: 'Hospitals',
    slug: 'hospitals',
    imageUrl:
      'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178800/woman-cleaning-ophthalmologist-s-office_gpmwwc.jpg',
  },
  {
    title: 'Sports & Leisure Centers',
    slug: 'sports-leisure-centers',
    imageUrl: 'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178741/2148766021_e4vsa1.jpg',
  },
]
</script>

<style lang="scss" scoped></style>
