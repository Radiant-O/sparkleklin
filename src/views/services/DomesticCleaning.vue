<template>
  <div class="reveal">
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section class="c1">
      <ServiceHero
        imageUrl="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161863/office_cle_jpedsv.png"
        badge="DOMESTIC CLEANING"
        title="Domestic Cleaning Service"
        :description="`At Sparkleklin, we are an established, professional cleaning service provider and have extensiveexperience in cleaning of domestic premises, keeping your homes hygienically clean and tidy. 
        \n We Provide a range of cleaning services that will keep your house feeling organized & comfortable. All our staff are insured and have been fully trained. you can relax, put your feet up and let us do the dirty work for you.`"
        :features="[
          'Don\'t allow your home to suffer',
          'We are reliable and we genuinely care',
          'All our cleaners are professionally trained',
          'Great value for money',
          'A comprehensive, one-stop service',
        ]"
      />
    </section>
    <section class="c2">
      <section class="service-overview bg-brand-ash/10 mt-10">
        <div class="mx-5 md:mx-25 pt-20 pb-20">
          <p class="font-syne text-2xl md:text-4xl font-semibold">
            Here are some <span class="block">examples of cleaning:</span>
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
                class="w-5 h-5 md:w-7 md:h-7 bg-white p-1 rounded-xl"
              />
              <div>
                <p class="font-urbanist font-semibold md:text-xl">{{ feature }}</p>
              </div>
            </div>
          </div>

          <div class="w-full mt-20">
            <img
              src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178707/2577_l5khkm.jpg"
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
import ServiceHero from '@/components/ServiceHero.vue'
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
  'Full and deep dusting including all the corners of rooms for cobwebs',
  'Washing all blinds',
  'Windows cleaned fromInside',
  'Inside of window frames and patio doors',
  'Inside the oven including the oven',
  'Under the sink',
  'Behind kitchen appliances like the washing machine',
  'Cutting through the grime that build up scale removal from all bathroom tiles, kitchen tiles, taps, shower heads etc',
]

const services = [
  {
    title: 'Car Showroom',
    slug: 'car-showroom',
    imageUrl: 'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161863/showroom_woylrb.png',
  },
  {
    title: 'Sports & Leisure Centers',
    slug: 'sports-leisure-centers',
    imageUrl: 'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178741/2148766021_e4vsa1.jpg',
  },
  {
    title: 'Shopping Mall',
    slug: 'shopping-mall',
    imageUrl:
      'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161863/supermarket_clea_kmmvhs.png',
  },
]
</script>

<style lang="scss" scoped></style>
