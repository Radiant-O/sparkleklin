<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import MainHeader from '@/components/MainHeader.vue'
</script>

<template>
  <div>
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section class="mx-25 mt-20 space-y-20">
      <div class="w-full">
        <div class="mx-auto w-full">
          <p
            class="font-urbanist mx-auto text-brand-main w-fit px-2 py-1 font-semibold text-lg bg-brand-main/20 rounded-2xl"
          >
            OUR GALLERY
          </p>
          <p class="font-syne mx-auto text-center font-bold text-4xl w-[45%]">
            Enjoying Exploring Our Diverse Range of Work.
          </p>
        </div>
        <div class="-mt-7">
          <p class="font-urbanist mx-auto text-center w-[50%] text-lg font-normal text-brand-ash">
            Explore our galery to see a curated selection of projects that showcase our creatiity
            and expertise. Each piece tells a unique story and reflects our commitment to innovative
            design
          </p>
        </div>
      </div>

      <div class="flex gap-10 g1">
        <div class="w-2/3 relative h-[500px] group">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329780/Sparkleklin/commercial.jpg"
            alt="img1"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>

        <div class="w-1/3 relative h-[500px] group">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329734/Sparkleklin/445-NEW_fsjpvn.png"
            alt="img2"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-10 g2">
        <div class="group">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329745/Sparkleklin/supermarket.png"
            alt="img1"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>

        <div class="group">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745445011/Sparkleklin/office_cle_o2maz1.png"
            alt="img2"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div class="row-span-2 col-span-2 group">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329795/Sparkleklin/office.jpg"
            alt="img2"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div class="flex gap-10 g3">
        <div class="w-2/3 relative h-[500px] group">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329766/Sparkleklin/car%20showroom.jpg"
            alt="img1"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>

        <div class="w-1/3 relative h-[500px] group">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329784/Sparkleklin/woman-cleaning-ophthalmologist-s-office_i3o3h2.jpg"
            alt="img2"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div class="grid grid-flow-col  grid-rows-2 grid-cols-3 gap-10 g4">
        <div class="group h-[30rem]">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329773/Sparkleklin/home3_gsuwcz.png"
            alt="img1"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>

        <div class="group h-[30rem]">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329730/Sparkleklin/11368_lwj7dt.jpg"
            alt="img2"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div class="row-span-2 h-[63rem] col-span-2 group">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329773/Sparkleklin/newwww_r43pyt.jpg"
            alt="img2"
            class="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<style scoped></style>
