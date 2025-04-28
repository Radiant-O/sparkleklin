<template>
  <div>
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section class="mx-25 mt-20">
      <div class="flex justify-center w-full">
        <div class="w-[100%]">
          <p
            class="font-urbanist text-brand-main w-fit px-2 py-1 font-semibold text-lg bg-brand-main/20 rounded-2xl"
          >
            OUR SERVICES
          </p>
          <p class="font-syne font-semibold text-4xl w-[60%]">
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
      <div class="grid grid-cols-3 justify-between gap-14">
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

const services = [
  {
    title: 'Commercial',
    slug: 'commercial',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445013/Sparkleklin/commerciall_woasfw.png',
  },
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
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329773/Sparkleklin/hero_2_c3g96t.jpg',
  },
  {
    title: 'Educational Center',
    slug: 'educational-center',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745445012/Sparkleklin/educationall_vlppma.png',
  },
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
  {
    title: 'Sports & Leisure Centers',
    slug: 'sports-leisure-centers',
    imageUrl:
      'https://res.cloudinary.com/din5vdwsr/image/upload/v1745329745/Sparkleklin/2148766021_fatbem.jpg',
  },
]
</script>

<style lang="scss" scoped></style>
