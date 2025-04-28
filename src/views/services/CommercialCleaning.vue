<template>
  <div>
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section class="c1">
      <ServiceHero
        imageUrl="https://res.cloudinary.com/din5vdwsr/image/upload/v1745445013/Sparkleklin/commerciall_woasfw.png"
        badge="COMMERCIAL CLEANING"
        title="Commercial Cleaning Service"
        description="Sparkleklin's cleaning will provide you with a reliable, value for money professional commercial cleaning service for your business at times to suit you and help create a welcoming atmosphere for your visitors and supports a productive working environment for your staff and a strict sickness program is operated to ensure continuity of service."
        :features="[
          'Don\'t allow your business to suffer',
          'We are reliable and we genuinely care',
          'All our cleaners are professionally trained',
          'Great value for money',
          'A comprehensive, one-stop service',
        ]"
      />
    </section>
    <section class="c2">
      <ServiceOverview
        description="You will receive high quality, cost effective cleaning services tailored to your precise needs. This leaves you free to focus on your core business activities with peace of mind that your cleaning is in expert hands. We can provide you services in different ways."
        :features="[
          'One off cleaning',
          'Emergency Cleaning Service',
          'Regular contract cleaning',
          'Deep commercial Cleaning',
        ]"
        :columns="4"
        imageUrl="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329764/Sparkleklin/hero_3_cahozr.jpg"
        imageAlt="Commercial cleaning service"
      />
    </section>
    <section>
      <WhatToOfferComponent />
    </section>
    <section>
      <ImpactsComponent :stats="impactStats" />
    </section>
    <section class="other-services">
      <div class="mx-25 pt-20">
        <div class="flex justify-between">
          <p class="font-syne text-3xl font-bold">Other Services</p>
          <p class="font-urbanist text-xl">See All</p>
        </div>
        <div class="grid grid-cols-3 justify-between gap-14">
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
import ServiceOverview from '@/components/ServiceOverview.vue'

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

const services = [
 
  {
    title: 'Office',
    slug: 'office',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445012/Sparkleklin/officee_bzjpqq.png',
  },
  {
    title: 'Domestic',
    slug: 'domestic',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445011/Sparkleklin/office_cle_o2maz1.png',
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
