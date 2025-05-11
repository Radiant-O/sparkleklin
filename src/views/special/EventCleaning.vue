<template>
  <div class="reveal">
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section class="c1">
      <ServiceHeroTwo
        imageUrl="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329727/Sparkleklin/36368_trq714.jpg"
        badge="EVENTS/PARTY CLEANING"
        title="Events/Party Cleaning Service"
        :description="`We provide reliable and affordable professional events and party cleaning in Birmingham and surrounding areas. We have years of experience in pre-and post-cleaning for any kind of event or gathering – large or small. We provide a full range of services designed to accommodate any type of event cleaning needs.\n
        It can be as a one off, as and when needed, or on a regular basis. With our special equipment we can thoroughly clean any event, or last minute parties. Sparkleklin cleaning provides an after party cleaning service that leaves your home, venues spotless.\n
        Our after party cleaners are competent, friendly, and trustworthy to provide you with first class cleaning every-time.If you’are planning a sporting event, concert, convention or other gathering requiring expert cleaning services, we are the company to call on`"
      />
    </section>
    <section class="service-hero">
      <div
        class="bg-brand-ash/5 bg-opacity-90 rounded-3xl flex flex-col-reverse md:flex-row-reverse py-20 md:px-28 justify-center items-center mt-10 px-5 md:mx-10"
      >
        <div class="w-[100%] flex justify-between items-center">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329787/Sparkleklin/young-contract-cleaners-cleaning-modern-office_pkphjw.jpg"
            alt="title"
            class="w-full md:w-[80%] md:h-[45rem] h-[30rem] object-cover rounded-3xl shadow-lg"
          />
        </div>
        <div class="w-[100%]">
          <p
            class="font-urbanist text-brand-main w-fit px-2 py-1 font-semibold text-sm bg-brand-main/6 rounded-2xl"
          >
            PARTY CLEANING
          </p>
          <div class="font-syne text-3xl md:text-5xl font-semibold">
            <p>Party</p>
            <div class="-mt-10">Cleaning Serice</div>
          </div>
          <div
            class="font-urbanist text-lg mt-5 font-light text-gray-500 leading-7 text-justify md:w-[75%]"
          >
            <p class="mb-3">
              After Party house cleaning in Birmingham even for the most filthy property or after
              the craziest celebration. With our special equipment we can thoroughly clean any
              house. Sparkleklin Cleaners provides an after party cleaning service that, leaves your
              home spotless. Making sure every room in the house is intrinsically clean. Our after
              party cleaners are perfectly competent to provide you with first class cleaning
              every-time.<br />
              The service will include but is not limited to kitchen clean, lounge areas, bathroom /
              washroom clean, bedrooms, carpets, vacuuming, floor and surface cleaning.<br />
              We offering Event Cleaning in Birmingham, Selly oak, Harborne, Edgbaston, Birmingham
              City Centre, Bournville, Smithwick, Bearwood, Quinton and surrounding areas.
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
    <section class="c2">
      <section class="service-overview bg-brand-ash/10 mt-10">
        <div class="mx-5 md:mx-25 pt-20 pb-20">
          <p class="font-syne text-2xl md:text-5xl font-semibold">
            When is one-off <span class="block">party cleaning needed?</span>
          </p>
          <div class="font-urbanist text-lg -mt-6 font-normal text-brand-ash">
            It is also perfect for after holidays or family gatherings. Whatever the reason is, we
            will make sure that your guests are invited to clean and neat home or
            offices/events/parties <br />
            To keep your home/premises in the best possible condition we also recommend the service
            to be performed annually or biannually. Once your home/premises has been deep cleaned,
            it will be much easier to maintain it clean afterwards.
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
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329742/Sparkleklin/2147651770_iac4rr.jpg"
              alt="imageAlt"
              class="rounded-4xl w-full object-cover h-[25rem] md:h-[35rem]"
            />
          </div>
          <!-- <ServiceOverview /> -->
           <div class="mt-10">
           <p class="font-syne text-2xl md:text-5xl font-semibold">
            The service will include  <span class="block">but is not limited to:</span>
          </p>
          <div class="grid md:grid-cols-2 w-full gap-3 mt-10">
            <div
              v-for="(feature, index) in items"
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
          </div>
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
import ButtonComponent from '@/components/ButtonComponent.vue'
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
  'Preparing your place for an event or cleaning up after a party',
  'Planning a full spring/seasonal clean to refresh your home or office premises',
]
const items = [
  'Kitchen Clean',
  'Lounge areas',
  'Bathroom / Washroom Clean',
  'Bedrooms',
  'Hall cleaning',
]

const services = [
  {
    title: 'Commercial',
    slug: 'commercial',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445013/Sparkleklin/commerciall_woasfw.png',
  },
  {
    title: 'Office',
    slug: 'offices',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445012/Sparkleklin/officee_bzjpqq.png',
  },
  {
    title: 'Domestic',
    slug: 'domestic',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445011/Sparkleklin/office_cle_o2maz1.png',
  },
]
</script>

<style lang="scss" scoped></style>
