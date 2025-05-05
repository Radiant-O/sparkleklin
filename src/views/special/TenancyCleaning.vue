<template>
  <div class="reveal">
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section class="c1">
      <section class="service-hero">
        <div
          class="bg-brand-ash/5 bg-opacity-90 rounded-3xl flex flex-col-reverse md:flex-row py-20 md:px-28 justify-center items-center mt-10 px-5 md:mx-10"
        >
          <div class="w-[100%] flex justify-between items-center">
            <img
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329746/Sparkleklin/2149374462_woh4uu.jpg"
              alt="title"
              class="w-full md:w-[80%] md:h-[45rem] h-[30rem] object-cover rounded-3xl shadow-lg"
            />
          </div>
          <div class="w-[100%]">
            <p
              class="font-urbanist text-brand-main w-fit px-2 py-1 font-semibold text-sm bg-brand-main/6 rounded-2xl"
            >
              POST/PRE TENANCY CLEANING
            </p>
            <div class="font-syne text-3xl md:text-5xl font-semibold">
              <p>Post / Pre Tenancy</p>
              <div class="-mt-10">Cleaning Serice</div>
            </div>
            <div class="font-urbanist text-lg mt-5 font-light text-gray-500 leading-7 md:w-[75%]">
              <p class="mb-3">
                <span class="font-semibold block"
                  >Do you have a specialist cleaning requirement?</span
                >
                We know exactly what landlords and clients are looking for on a property viewing and
                inventory checklists. It is a unique service for estate agents and property
                management companies. It is used by all top life style management, estate agents and
                property management companies. This service is to ensure that properties are
                thoroughly cleaned when tenants leave and in preparation for new
                tenants.<br/>Effectively an intense cleaning service where all surfaces are specially
                cleaned ready for the next occupant. We can do this when relocating to new premises
                or as an end-of-tenancy clean.
              </p>
            </div>

            <div class="mt-8 mb-10 md:mt-0">
              <ButtonComponent
                buttonText="Get a Free Quote"
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
    </section>
    <section class="c2">
      <section class="service-overview bg-brand-ash/10 mt-10">
        <div class="mx-5 md:mx-25 pt-20 pb-20">
          <p class="font-syne text-2xl md:text-4xl font-semibold">
            The service will <span class="block">include but is not limited to:</span>
          </p>
          <div class="font-urbanist text-lg -mt-6 font-normal text-brand-ash">
            All parts of your household cleaned to perfection which include all living spaces such as conservatory, living rooms, bedrooms, stairs, hallways & much more. inside and out of cupboards, sockets & switches , fridges, cookers, microwaves. Surfaces such as cooker tops, work surfaces, tables, window frames, doors, skirting boards and floors and more.
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
                class="w-5 h-5 md:w-7 md:h-7 bg-white p-1 rounded-xl"
              />
              <div>
                <p class="font-urbanist font-semibold md:text-xl">{{ feature }}</p>
              </div>
            </div>
          </div>

          <div class="w-full mt-20">
            <img
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329725/Sparkleklin/2577_ygmqnl.jpg"
              alt="imageAlt"
              class="rounded-4xl w-full object-cover object-top h-[20rem] md:h-[35rem]"
            />
          </div>
        </div>
      </section>
    </section>
    <section>
      <PrideComponent />
    </section>
    <section>
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
// import ServiceHero from '@/components/ServiceHero.vue'
import WhatToOfferComponent from '@/components/WhatToOfferComponent.vue'
import ImpactsComponent from '@/components/ImpactsComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
import PrideComponent from '@/components/PrideComponent.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useScrollAnimation()

// import ServiceOverview from '@/components/ServiceOverview.vue'

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
  'Kitchen Cleaned, all Appliances Cleaned inside out including microwave, refrigerator and freezers cleaned.',
  'Oven Degrease and cleaned inside out, Oven racks and grill pan cleaned',
  'Sinks Clean, de-scale & polish, Remove accumulated gunk around the drains',
  'Clean windows on the inside, Wiping the window sills, Removing cobwebs in all the rooms',
  'All furniture wiped down including tables and chairs, Clean under beds, sofas and cushions',
  'Cleaning light switches, mirrors, pictures and frames,',
  'All general areas cleaned disinfect, mopped and vacuumed.',
  'Bathtubs, toilets, bidet, shower cubicles disinfected, cleaned and polished',
  'Floor edges cleaned, Hoover and polish, Dusting all radiators',
  'Wiping top of doors, door frames, handles, curtain rails, cupboards and drawers cleaned inside-out, Floor mopped',
  'Bathroom / Wash room Clean, Toilet Clean, General areas and bedrooms cleaned',
  'Remove lime scale, Check for hair and gunk around drain, Sanitize toothbrush spot',
  'Extractor fan degreased, Wipe behind the oven if possible, Removing leftovers if possible, Pipework cleaned',
  'Clear shelves and drawers out, degreased and cleaned them inside out, Clearing out of unwanted items',
  'Wardrobe cleaned inside and out and on the top, Carpets and rugs spot cleaned and vacuumed, Move light furniture around for better access, Clean under beds, sofas and cushions, mirrors and glass surfaces Cleaned and polish thoroughly',
]

const services = [
  {
    title: 'Car Showroom',
    slug: 'car-showroom',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445011/Sparkleklin/showroom_mgns43.png',
  },
  {
    title: 'Sports & Leisure Centers',
    slug: 'sports-leisure-centers',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329745/Sparkleklin/2148766021_fatbem.jpg',
  },
  {
    title: 'Shopping Mall',
    slug: 'supermarket',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445011/Sparkleklin/supermarket_clea_hnjwfq.png',
  },
]
</script>

<style lang="scss" scoped></style>
