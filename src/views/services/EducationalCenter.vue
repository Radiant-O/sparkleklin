<template>
  <div class="reveal">
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section class="c1">
      <ServiceHeroTwo
        imageUrl="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329738/Sparkleklin/4579288_oon8ue.jpg"
        badge="EDUCATIONAL CENTRES CLEANING"
        :title="`Education Centres \n Cleaning Service`"
        :description="`We tailor our services to your educational centre requirements. This may include scheduled deep cleans during term holidays or daily attendance in the morning, afternoon, evening or weekends. Our aim is to offer a professional and reliable service at all times with minimal disruption to teaching staff, students and young children.\n
        Our plans include; periodic cleans, generally on a rotation basis, which covers floor polishing, also tasks such as phone sanitising. Toilet consumables will be replenished daily and if required feminine hygiene services also provided.\n
        Education cleaning calls for a high degree of trust from both our management and employee teams. We take the time to check the suitability of our employees for your added protection.\n
        All cleaning operatives are checked and vetted. We understand how important it is to have a clean and tidy environment. That\'s why we recruit our staff to meet the high standards we know you require`"
      />
    </section>
    <section class="c2">
      <section class="service-overview bg-brand-ash/10 mt-10">
        <div class="mx-5 md:mx-25 pt-20 pb-20">
          <p class="font-syne text-2xl md:text-5xl font-semibold">
            Our general school cleaning
            <span class="block">services can include, but not limited to:</span>
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
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329771/Sparkleklin/man-wearing-mask-walks-past-bin-full-cleaning-supplies_y5sx3k.jpg"
              alt="imageAlt"
              class="rounded-4xl w-full object-cover object-top h-[25rem] md:h-[45rem]"
            />
          </div>
          <div class="mt-15">
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
  'Wipe clean tables, desks and chairs',
  'Dust down / damp wipe clean shelving and cabinents',
  'Dust down / damp wipe clean window legdes (inside window cleaning to be specified)',
  'Spot clean finger marks from door partitions and damp wipe clean walls (if possible)',
  'Empty all bins and affix clean bin liners / weekly or monthly refresh (wipe inside/outside/disinfect)',
  'Damping down clean skirting boards',
  'If recycling is to be observed - we can do that!',
  'Steam/mop clean flooring',
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
