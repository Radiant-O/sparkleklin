<template>
  <div class="reveal">
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section class="mx-5 md:mx-25 mt-25">
      <div class="flex md:flex-row flex-col justify-center w-full">
        <div class="w-[100%]">
          <p
            class="font-urbanist text-brand-main w-fit px-2 py-1 font-semibold text-lg bg-brand-main/20 rounded-2xl"
          >
            OUR SERVICES
          </p>
          <p class="font-syne font-semibold text-2xl md:text-4xl md:w-[60%]">
            Professional Cleaning Services for Every Home
          </p>
        </div>
        <div>
          <p class="font-urbanist text-lg font-normal text-brand-ash">
            Discover our range of comprehensive cleaning services designed to meet your unique
            needs.
          </p>
        </div>
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
    </section>
    <section class="footer">
      <FooterComponent />
    </section>
  </div>
</template>

<script setup>
import MainHeader from '@/components/MainHeader.vue'
import CardComponent from '@/components/CardComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useScrollAnimation()

const services = [
  {
    title: 'Commercial',
    slug: 'commercial',
    imageUrl:
      'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161863/commerciall_kow4as.png',
  },
  {
    title: 'Office',
    slug: 'offices',
    imageUrl: 'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161864/officee_uqslu6.png',
  },
  {
    title: 'Domestic',
    slug: 'domestic',
    imageUrl: 'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161863/office_cle_jpedsv.png',
  },
  {
    title: 'Shopping Mall',
    slug: 'shopping-mall',
    imageUrl:
      'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178789/woman-mopping-floor-store-cleaning-janitorial-retail-concepts_cvmu9f.jpg',
  },
  {
    title: 'Educational Center',
    slug: 'education-centres',
    imageUrl:
      'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161864/educationall_rcxhfk.png',
  },
  {
    title: 'Car Showroom',
    slug: 'car-showroom',
    imageUrl: 'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161863/showroom_woylrb.png',
  },
  {
    title: 'Pubs, Clubs & Restaurants',
    slug: 'pubs-clubs-restaurants',
    imageUrl:
      'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178754/Cleaning_Restaurant_Table-1920w_b2fpqz.jpg',
  },
  {
    title: 'Hospitals',
    slug: 'hospitals',
    imageUrl:
      'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178800/woman-cleaning-ophthalmologist-s-office_gpmwwc.jpg',
  },
  {
    title: 'Sports & Leisure Centers',
    slug: 'sports-leisure-centers',
    imageUrl: 'https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178741/2148766021_e4vsa1.jpg',
  },
]
</script>

<style lang="scss" scoped></style>
