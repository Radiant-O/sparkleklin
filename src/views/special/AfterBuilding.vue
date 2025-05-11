<template>
  <div class="reveal">
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section class="c1">
      <ServiceHeroTwo
        imageUrl="https://res.cloudinary.com/din5vdwsr/image/upload/v1746279030/Sparkleklin/Rectangle_1067330_2_kflzwj.png"
        badge="AFTER BUILDING CLEANING"
        title="After Building Cleaning Service"
        :description="`Have the builders come and done with all the repairs and renovation work and gone? Good!
Then you are at the right place because we can clean up after them.\n
Simply book our after builders cleaning services. We will send a team of expert cleaners who will restore the place to a perfectly clean and presentable state.
We have extensive experience with present and past contractors in the cleaning of building and construction sites. We operate with only the best equipment and cleaning materials.\n
Our cleaning operatives are fully equipped with all safety knowledge, clothing to work on site.Our team of specialist builders can leave your site looking at its very best, which is even cleaner as the day your team arrived to complete their work.`"
      />
    </section>
    <section class="c2">
      <section class="service-overview bg-brand-ash/10 mt-10">
        <div class="mx-5 md:mx-25 pt-20 pb-20">
          <p class="font-syne text-2xl md:text-5xl font-semibold">
            Our Car Showroom Cleaning <span class="block">Process Includes:</span>
          </p>
          <div class="font-urbanist text-lg -mt-6 font-normal text-brand-ash">
            We can also offer waste removal to take away any rubbish from your project. However
            large or small your construction project, we can help to ensure that all signs of your
            work are cleared away before you hand over to your client. This will help to maintain
            your company’s reputation for professionalism and reliability. Whether you are a
            professional contractor looking for a cleaning partner to take care of tidying up your
            building sites, or you are renovating your home and need help to clean up once the
            refurbishment is complete.<br />By using us for after builders cleaning, we clean
            wherever the building work has taken place in your house. If that is in the kitchen, we
            will thoroughly clean inside and outside cupboards, and all of the surfaces including
            the floors. We will make sure your oven, refrigerator and microwave, and kitchen sink
            and taps shine, and clean inside windows. We’ll make sure your skirting boards, sockets
            and switches and door spotless.<br />
            Professional after builders cleaning company serving Selly oak, Harborne, Edgbaston,
            Birmingham City Centre, Bournville, Smithwick , Bearwood, Quinton and surrounding areas.
            Leading after builders cleaners in Birmingham offering professional services at
            affordable rates.
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
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329736/Sparkleklin/57667_wjgafr.jpg"
              alt="imageAlt"
              class="rounded-4xl w-full object-cover h-[20rem] md:h-[35rem]"
            />
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
  'Removing tape, stickers.',
  'Dust, ceiling (Easy to reach), light fixtures, etc.',
  'Sweeping and vacuuming of all floors and window sills',
  'Scrub and tiles, sinks, polish stainless steel, wipe walls.',
  'Swipe entire interior and exterior of unit.',
  'Scrape and sweep flooring',
]

const services = [
  {
    title: 'Pubs, Clubs & Restaurants',
    slug: 'pubs-clubs-restaurants',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329760/Sparkleklin/Cleaning_Restaurant_Table-1920w_ebul5x.jpg',
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
