<template>
  <div class="mx-20 pt-20 pb-20">
    <!-- Header Section -->
    <div class="mx-auto w-full text-center">
      <p class="font-syne text-4xl w-[35%] mx-auto font-bold">
        {{ title }}
      </p>
      <div class="font-urbanist text-lg -mt-5 font-normal text-brand-ash w-[35%] mx-auto">
        {{ description }}
      </div>
    </div>

    <div class="flex justify-center gap-10  pt-10 pb-20">
      <div class="bg-brand-ash/5 w-[30%] bg-opacity-90 p-10 rounded-3xl shadow-lg">
        <div>
          <p class="font-syne font-semibold text-2xl">Comprehensive Service</p>
          <div class="space-y-2">
            <div class="flex items-start gap-2">
              <img
                src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png"
                alt="logo"
                class="w-5 h-5"
              />
              <p class="font-urbanist font-md">Window Cleaning</p>
            </div>
            <div class="flex items-start gap-2">
              <img
                src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png"
                alt="logo"
                class="w-5 h-5"
              />
              <p class="font-urbanist font-md">Carpet Cleaning</p>
            </div>
            <div class="flex items-start gap-2">
              <img
                src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png"
                alt="logo"
                class="w-5 h-5"
              />
              <p class="font-urbanist font-md">Hardfloor Cleaning</p>
            </div>
            <div class="flex items-start gap-2">
              <img
                src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png"
                alt="logo"
                class="w-5 h-5"
              />
              <p class="font-urbanist font-md">Upholstery Cleaning</p>
            </div>
            <div class="flex items-start gap-2">
              <img
                src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png"
                alt="logo"
                class="w-5 h-5"
              />
              <p class="font-urbanist font-md">Office toilet Cleaning</p>
            </div>
            <div class="flex items-start gap-2">
              <img
                src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png"
                alt="logo"
                class="w-5 h-5"
              />
              <p class="font-urbanist font-md">Furniture Cleaning</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-brand-ash/5 w-[30%] bg-opacity-90 p-10 rounded-3xl shadow-lg">
        <div>
          <p class="font-syne font-semibold text-2xl">Top-notch Professional</p>
          <div class="space-y-2">
            <div class="flex items-start gap-2">
              <img
                src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png"
                alt="logo"
                class="w-5 h-5"
              />
              <p class="font-urbanist font-md">
                Our commercial cleaners in Birmingham work to meet and exceed the high standards we
                know you demand.
              </p>
            </div>
            <div class="flex items-start gap-2">
              <img
                src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png"
                alt="logo"
                class="w-5 h-5"
              />
              <p class="font-urbanist font-md">
                We ensures high standards of cleaning are always maintained
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-brand-ash/5 w-[30%] bg-opacity-90 p-10 rounded-3xl shadow-lg">
        <div>
          <p class="font-syne font-semibold text-2xl">What to Except</p>
          <div class="space-y-2">
            <div class="flex items-start gap-2">
              <img
                src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png"
                alt="logo"
                class="w-5 h-5"
              />
              <p class="font-urbanist font-md">Reliable, uniformed and trustworthy operatives.</p>
            </div>
            <div class="flex items-start gap-2">
              <img
                src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png"
                alt="logo"
                class="w-5 h-5"
              />
              <p class="font-urbanist font-md">
                We guarantee all of our work to ensure complete customer satisfaction.
              </p>
            </div>
            <div class="flex items-start gap-2">
              <img
                src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745523531/Sparkleklin/Vector_hizmrr.png"
                alt="logo"
                class="w-5 h-5"
              />
              <p class="font-urbanist font-md">Cost efective and reliable service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'What We Offer',
  },
  description: {
    type: String,
    default:
      'Here are few of the things to expect from us which makes us standout and best in the game in the UK',
  },
})
</script>
