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
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329726/Sparkleklin/3204_jmr3wq.jpg"
              alt="title"
              class="w-full md:w-[80%] md:h-[45rem] h-[30rem] object-cover rounded-3xl shadow-lg"
            />
          </div>
          <div class="w-[100%]">
            <p
              class="font-urbanist text-brand-main w-fit px-2 py-1 font-semibold text-sm bg-brand-main/6 rounded-2xl"
            >
              CLEARANCE AND DECLUTTERING CLEANING
            </p>
            <div class="font-syne text-3xl md:text-5xl font-semibold">
              <p>Clearance</p>
              <div class="-mt-10">and Decluttering</div>
              <div class="">Cleaning Serice</div>
            </div>
            <div class="font-urbanist text-lg mt-5 font-light text-gray-500 leading-7 md:w-[75%]">
              <p class="mb-3">
                Are you looking to de-clutter your home or office? Preparing a house, flat for sale,
                for rent or clearing the house of a deceased relative? Then look no further. Don’t
                throw away your unwanted items. We are here to serve your clearance and removal
                needs. <br/>We will declutter, clear properties of size and everything removed is
                disposed off in an environmentally friendly manner and if possible reuse or
                recycled. We’re conscious of the Earth and recycle whenever possible and are fully
                insured.
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
            These are some of the <span class="block">decluttering services we offer:</span>
          </p>
          <!-- <div class="font-urbanist text-lg -mt-6 font-normal text-brand-ash">
            All parts of your household cleaned to perfection which include all living spaces such
            as conservatory, living rooms, bedrooms, stairs, hallways & much more. inside and out of
            cupboards, sockets & switches , fridges, cookers, microwaves. Surfaces such as cooker
            tops, work surfaces, tables, window frames, doors, skirting boards and floors and more.
          </div> -->

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

        </div>
        <div class="mx-5 md:mx-25 pt-20 pb-20">
          <p class="font-syne text-2xl md:text-4xl font-semibold">
            We collect all <span class="block">sorts of items including:</span>
          </p>
          <!-- <div class="font-urbanist text-lg -mt-6 font-normal text-brand-ash">
            All parts of your household cleaned to perfection which include all living spaces such
            as conservatory, living rooms, bedrooms, stairs, hallways & much more. inside and out of
            cupboards, sockets & switches , fridges, cookers, microwaves. Surfaces such as cooker
            tops, work surfaces, tables, window frames, doors, skirting boards and floors and more.
          </div> -->

          <div class="grid md:grid-cols-2 w-full gap-3 mt-10">
            <div
              v-for="(feature, index) in items"
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
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329731/Sparkleklin/11867_duem8e.jpg"
              alt="imageAlt"
              class="rounded-4xl w-full object-cover object-top h-[20rem] md:h-[35rem]"
            />
          </div>
        </div>
        <div class="mx-5 md:mx-25 pt-20 pb-20">
          <p class="font-syne text-2xl md:text-4xl font-semibold">
            Does your wardrobe, room or house needs to get cleaned up and organized but you feel over whelmed?
          </p>
          <div class="font-urbanist text-lg -mt-6 font-normal text-brand-ash">
            Are you overwhelmed by clutter? Feeling disorganised, depressed or out of control?Would you like to get organised? declutter and enjoy life? Just can't face tackling your clutter on your own? We can help you regain your home/office space back? Perhaps it's family member or a friend that has a problem or or you’re a social worker seeking to help a service user
            <br/>
            <span class="block text-brand-main">Then Let Sparkleklin services do it all for you!!!</span>
            <br/>
            We offer help to declutter and clean up any space in your home/offices/commercial premises, a shelf, a room, a basement, or a garage, shed, kitchen, and many more.
          </div>
          <p class="font-syne text-2xl md:text-4xl font-semibold">
            Reason to declutter:
          </p>
          <div class="grid md:grid-cols-2 w-full gap-3 mt-10">
            <div
              v-for="(feature, index) in reasons"
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
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329784/Sparkleklin/room-before-after-cleaning-comparison-messy-bedroom-clean-kid-bedroom-home-interior-after-tiding-service-dirty-window-bed-paper-around-room-table-bookshelf-vector-illustrati_eqix8c.jpg"
              alt="imageAlt"
              class="rounded-4xl w-full object-cover object-top h-[20rem] md:h-[35rem]"
            />
            <br/>
            <p class="font-urbanist text-light md:text-lg mt-5">Tidy Space is a happy Mind.<br/>We know decluttering and clearance services can be stressful times so let us take care of it for you.</p>
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
  'Private House Clearance, Office & Commercial Clearance',
  'Full or Part Clearance, Attic & Loft Clearance',
  'Garage Clearance, Basements and sheds clearance',
  'Furniture Removal, Man & Van Service',
]
const items = [
  'Sofas, suites, armchairs',
  'Tables, chairs, desks, cabinets',
  'Beds and bedroom furniture',
  'TVs, Hi-Fis, washing machines, small and big electricals',
  'We can also collect clothes, shoes, books, DVDs, CDs, bric-a-brac and toys at the same time.'
]
const reasons = [
  'Get back control of your life',
  'Gain more physical space',
  'Be less stressed, because you can find things',
  'Feel calmer and more relaxed',
  'Be able to clean properly',
  'Stop being embarrassed by clutter',
  'Feel able to move on in life',
]

const services = [
 {
    title: 'Car Showroom',
    slug: 'car-showroom',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445011/Sparkleklin/showroom_mgns43.png',
  },
  {
    title: 'Pubs, Clubs & Restaurants',
    slug: 'pubs-clubs-restaurants',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329760/Sparkleklin/Cleaning_Restaurant_Table-1920w_ebul5x.jpg',
  },
  {
    title: 'Hospitals',
    slug: 'hospitals',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329784/Sparkleklin/woman-cleaning-ophthalmologist-s-office_i3o3h2.jpg',
    },
]
</script>

<style lang="scss" scoped></style>
