<template>
  <div class="reveal">
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section class="c1">
      <ServiceHeroTwo
        imageUrl="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329787/Sparkleklin/young-contract-cleaners-cleaning-modern-office_pkphjw.jpg"
        badge="CONTRACT CLEANING"
        title="Contract Cleaning Service"
        :description="`Cleaning and maintaining an office or place of business to the highest standards is extremely important because it ensures the comfort of your staff, customers and visitors in a pleasant environment.\n
Sparkleklin offers a large range of contract cleaning services for every size business from a single room in an office building to large corporate buildings, hospitals, schools and more.\n
No job is too large or too small and whether you want regular, scheduled contract cleaning on a daily basis, once a week cleaning or periodic cleaning our team are all courteous, reliable and meticulous at what they do.\n
We also guarantee all of our cleaning staff are vetted and checked for added peace of mind.\n
Our competitively priced contract cleaning services include daily cleaning, carpet cleaning, stone and floor cleaning, window cleaning, document shredding and specialist cleaning.
If you require cleaning as part of planned scheduled maintenance, we provide you with a regular team.\n
We pride ourselves on being the choice of many businesses and every job is assigned an Account Manager giving you one point of contact.\n
This guarantees the smooth running of all your cleaning tasks.`"
      />
    </section>
    <section class="c2">
      <section class="service-overview bg-brand-ash/10 mt-10">
        <div class="mx-5 md:mx-25 pt-20 pb-20">
          <p class="font-urbanist md:text-xl md:text-5xl font-semibold">
            We offer both standard and bespoke
            <span class="block font-syne text-2xl md:text-5xl font-semibold"
              >Contract cleaning service</span
            >
          </p>
          <div class="font-urbanist text-lg -mt-2 font-normal text-brand-ash">
            Our clients have the opportunity to have exactly what they want included in their
            cleaning contract. We will deliver according to your needs; your hours of business and
            your building type or environment to ensure your premises are cleaned to a good
            standard with minimal disruption. Best of all, this is provided to you at
            really competitive prices. We are an established and professional cleaning service
            provider and have extensive experience in contract cleaning services. We provide a
            bespoke contract cleaning services that can be on daily, weekly, fortnightly, or on
            a monthly basis.
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
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329790/Sparkleklin/professional-cleaning-service-person-cleaning-office_dx7rwf.jpg"
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
