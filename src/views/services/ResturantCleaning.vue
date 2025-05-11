<template>
  <div class="reveal">
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section class="c1">
      <ServiceHeroTwo
        imageUrl="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329760/Sparkleklin/Cleaning_Restaurant_Table-1920w_ebul5x.jpg"
        badge="PUBS, CLUBS AND RESTURANT CLEANING"
        title="Pubs, clubs and Resturant Cleaning Service"
        :description="`We offer a complete range of services to these clients. Our flexible cleaning means we can cater for high and low seasons. We can also provide additional cleaners for those busy times and can arrange the cleaning schedules around your normal business hours. If you just want your carpet cleaned, we will be there to help.\n
We cover all Birmingham and surrounding areas with quality cleaning cleaning services and pride ourselves in providing a high quality service for each individual client.`"
      />
    </section>
    <section class="c2">
      <section class="service-overview bg-brand-ash/10 mt-10">
        <div class="mx-5 md:mx-25 pt-20 pb-20">
          <!-- <p class="font-syne text-2xl md:text-5xl font-semibold">
            Our Office Cleaning <span class="block">Options Include Thorough:</span>
          </p> -->
          <div class="font-urbanist text-lg -mt-6 font-normal text-brand-ash">
            Clubs can become hot and sweaty environments with a lot of spilt drinks staining the floor.
            
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
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329730/Sparkleklin/11368_lwj7dt.jpg"
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
  'Our vast experience has led us to refine our pub club cleaning services for the optimum clean, giving out clients the best calue for money. This includes a thorough comprehensive clean of: The club entrance (including foyer), Dance areas, General seating areas, The bar (both staff and customer sides)',
  'Our professional cleaners have the experience, training and know how to revitalise a clients club and make it look as good as new, customers will believe its opening night!',
  'Dust down / damp wipe clean window ledges (inside window cleaning to be specified)',
  'Spot clean finger marks from door partitions and damp wipe clean walls (if possible)',
]

const services = [
 {
     title: 'Commercial',
     slug: 'commercial',
     imageUrl:
       'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445013/Sparkleklin/commerciall_woasfw.png',
   },
  {
    title: 'Shopping Mall',
    slug: 'shopping-mall',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445011/Sparkleklin/supermarket_clea_hnjwfq.png',
  },
  {
     title: 'Car Showroom',
     slug: 'car-showroom',
     imageUrl:
       'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445011/Sparkleklin/showroom_mgns43.png',
   },
]
</script>

<style lang="scss" scoped></style>
