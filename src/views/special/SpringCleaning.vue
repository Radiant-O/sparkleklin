<template>
  <div class="reveal">
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section class="c1">
      <ServiceHeroTwo
        imageUrl="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329738/Sparkleklin/2148119211_q5yf9n.jpg"
        badge="SPRING CLEANING"
        :title="`Spring Cleaning Service`"
        :description="`We provide a full range of cleaning and hygiene services for domestic and commercial clients that cover just about any cleaning problem you may have. All parts of your household or premises cleaned to perfection. This service is available as a one off or as regular as you may want it done.\n 
        The client can provide all the cleaning materials or we can provide if you wish. We know your expectations and we work hard so we can get it right every time we clean your home. We are fully insured so there is no need to worry about if something goes wrong, which is very unlikely to happen because our staff are fully trained to do the job.`"
      />
    </section>
    <section class="c2">
      <section class="service-overview bg-brand-ash/10 mt-10">
        <div class="mx-5 md:mx-25 pt-20 pb-20">
          <p class="font-syne text-2xl md:text-5xl font-semibold">
            We will clean
            <span class="block">everything inside out.</span>
          </p>
          <!-- <div class="font-urbanist text-lg -mt-6 font-normal text-brand-ash">
            No office are alike, we will give you a detailed quote based on the size of your office
            and the specific needs of your business also help you save on costs wherever possible.
            <br />
            We will deliver according to your needs; your hours of business and your building type
            or environment to ensure your premises are cleaned to standard with minimal disruption.
            We will exceed your expectations; give us a call now for more information.
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
                class="w-7 h-7 bg-white p-1 rounded-xl"
              />
              <div>
                <p class="font-urbanist font-semibold md:text-lg">{{ feature }}</p>
              </div>
            </div>
          </div>

          <div class="w-full mt-20">
            <img
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329751/Sparkleklin/2148119225_kisq4r.jpg"
              alt="imageAlt"
              class="rounded-4xl w-full object-cover object-top h-[25rem] md:h-[45rem]"
            />
          </div>
          <!-- <div class="mt-15">
            <div>
              <p class="font-syne font-semibold md:text-xl">Computer Classroom</p>
              <div class="flex gap-5 items-start md:w-[80%]">
                <img
                  src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png"
                  alt=""
                  class="w-7 h-7 bg-white p-1 rounded-xl"
                />
                <div>
                  <p class="font-urbanist md:text-lg">
                    Clean wipe computer equipment with special electronic spray and brusj/sanitise
                    keyboards.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p class="font-syne font-semibold md:text-xl">Gym Room</p>
              <div class="flex gap-5 items-start md:w-[80%]">
                <img
                  src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png"
                  alt=""
                  class="w-7 h-7 bg-white p-1 rounded-xl"
                />
                <div>
                  <p class="font-urbanist md:text-lg">
                    All gym apparatus can be professionally sanitised including locker rooms and
                    flooring
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p class="font-syne font-semibold md:text-xl">Corridors</p>

              <div class="flex gap-5 items-start md:w-[80%]">
                <img
                  src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png"
                  alt=""
                  class="w-7 h-7 bg-white p-1 rounded-xl"
                />
                <div>
                  <p class="font-urbanist md:text-lg">
                    Stairwells Dust down fire extinguishers and radiators at normal hand height
                    inclusive of wall picture frames.
                  </p>
                </div>
              </div>
            </div>
          </div> -->
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
  'Cupboards and wardropes, sockets & switches, fridges, cookers, microwaves all living spaces, such as conservatory, living rooms, bedrooms, stairs, hallways, Bathrooms, toilets, lounged areas, kitchens, stairs & much more all cleaned.',
  'Floors vacuumed and mopped, cobwebs removed, bins emptied and cleaned, radiators cleaned, all windows cleaned from inside, doors frames and doors cleaned, all fittings and fixtures cleaned and more.',
  'Descaling and degreasing of shower rooms, baths, taps sinks, cookers, tiles, back splash together with bath-room tiles, shower screens & doors, bath panels.',
  'All Surfaces such as cooker tops, work surfaces, tables, window frames, doors, skirting boards and floors are also thoroughly cleaned,',
  'We also clean all skirting boards, window sills, shelves, drawers, tops of cupboards and wardrobes, inside and out, all electrical appliances cleaned inside and outside.',
]

const services = [
  {
     title: 'Domestic',
     slug: 'domestic',
     imageUrl:
       'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445011/Sparkleklin/office_cle_o2maz1.png',
   },
   {
     title: 'Shopping Mall',
     slug: 'shopping-mall',
     imageUrl:
       'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329773/Sparkleklin/hero_2_c3g96t.jpg',
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
