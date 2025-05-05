<template>
  <div class="reveal">
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section class="c1">
      <ServiceHeroTwo
        imageUrl="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329734/Sparkleklin/445-NEW_fsjpvn.png"
        badge="OFFICE CLEANING"
        title="Office Cleaning Service"
        :description="`At Sparkleklin Cleaning, our strength comes from satisfying and putting our customers first, we clean to protect your health and your environment.. \n
        We know that having clean and tidy reception areas and washrooms is important to you so we'll always ensure your front of house is as clean and well-presented as possible. Our office cleaning services is customized to your company needs.
        We can put in place daily, weekly, fortnightly or monthly cleaning agreement. We pay attention to details so incredible result every time.\n
        We ensure that your cleaning is consistently delivered to a high standard providing peace of mind that will meet with on-going compliance assessments. We provide a professional service every time so rest assured, plus, to give you peace of mind, we will complete audits and frequent spot checks to ensure the cleaning you receive from us is of a high standard on a consistent basis.`"
      />
    </section>
    <section class="c2">
      <section class="service-overview bg-brand-ash/10 mt-10">
        <div class="mx-5 md:mx-25 pt-20 pb-20">
          <p class="font-syne text-2xl md:text-5xl font-semibold">
            Our Office Cleaning <span class="block">Options Include Thorough:</span>
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
                src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png"
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
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329795/Sparkleklin/office.jpg"
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
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329760/Sparkleklin/Cleaning_Restaurant_Table-1920w_ebul5x.jpg',
  },
  {
    title: 'Shopping Mall',
    slug: 'supermarket',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445011/Sparkleklin/supermarket_clea_hnjwfq.png',
  },
  {
    title: 'Educational Center',
    slug: 'educational-center',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445012/Sparkleklin/educationall_vlppma.png',
  },
]
</script>

<style lang="scss" scoped></style>
