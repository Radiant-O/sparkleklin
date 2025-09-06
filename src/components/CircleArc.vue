<script setup>
import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MotionPathPlugin from 'gsap/MotionPathPlugin'
import ButtonComponent from './ButtonComponent.vue'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

const props = defineProps({
  backgroundColor: {
    type: String,
    default: '#000000',
  },
  title: {
    type: String,
    default: 'ABOUT US',
  },
  subtitle: {
    type: String,
    default: 'Trusted Home Cleaning\nExperts Since 2025',
  },
  description: {
    type: String,
    default:
      'At Sparkleklin, we are dedicated to delivering top-notch home cleaning services, ensuring your home is always spotless, comfortable, and inviting.',
  },
})

// const wheel = document.querySelector('.wheel')
// const imageElements = wheel.querySelectorAll('.wheel__card')

const setup = (wheel, imageElements) => {
  // const wheelElement = wheel.value
  if (!wheel || !imageElements.length) return

  const radius = wheel.offsetWidth / 3
  const center = wheel.offsetWidth / 2
  const total = imageElements.length
  const slice = (2 * Math.PI) / total

  imageElements.forEach((item, i) => {
    const angle = i * slice
    const x = center + radius * Math.sin(angle)
    const y = center - radius * Math.cos(angle)

    gsap.set(item, {
      rotation: angle + 'rad',
      xPercent: -50,
      yPercent: -50,
      x: x,
      y: y,
    })
  })
}

// onMounted(() => {
//   const wheel = document.querySelector('.wheel')
//   const imageElements = wheel.querySelectorAll('.wheel__card')

//     setup(wheel, imageElements)

//   gsap.to('.wheel', {
//     rotate: 360,
//     ease: 'none',
//     duration: imageElements.length,
//     scrollTrigger: {
//       start: 0,
//       end: 'max',
//       scrub: 1,
//       snap: 1 / imageElements.length,
//       invalidateOnRefresh: true,
//     },
//   })

//   const handleResize = () => setup(wheel, imageElements)
//   window.addEventListener('resize', handleResize)

//   onUnmounted(() => {
//   window.removeEventListener('resize', handleResize)
//   ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
// })
// })

onMounted(() => {
  // Wait for next tick to ensure DOM is ready
  setTimeout(() => {
    const wheel = document.querySelector('.wheel')
    if (!wheel) return

    const imageElements = wheel.querySelectorAll('.wheel__card')
    if (!imageElements.length) return

    setup(wheel, imageElements)

    // Create the scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.wheel',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        snap: 1 / imageElements.length,
        invalidateOnRefresh: true,
      },
    })

    tl.to('.wheel', {
      rotation: 180,
      ease: 'none',
      duration: imageElements.length,
    })

    // Handle resize
    const handleResize = () => setup(wheel, imageElements)
    window.addEventListener('resize', handleResize)

    // Cleanup
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      tl.kill()
    })
  }, 0)
})
</script>

<template>
  <!-- <div class="header">
    Human stories, <br />
    Superman audiovisuals
  </div> -->
  <div class="main-container min-h-[120vh] md:min-h-[135vh]" :style="{ backgroundColor }">
    <div class="center-content mt-[70%] md:mt-[28%]">
      <p
        class="font-urbanist text-center text-white w-fit mx-auto px-3 py-1.5 font-semibold bg-brand-main/30 rounded-2xl"
      >
        ABOUT US
      </p>
      <p class="font-syne font-semibold text-center text-3xl md:text-4xl">
        Trusted Home Cleaning <br />
        Experts Since 2025
      </p>
      <div class="description md:w-[60%] text-small px-5 mx-auto -mt-6">
        {{ props.description }}
      </div>
      <div class="w-fit mx-auto mt-8">
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
    <section class="slider-section">
      <div class="wheel -top-[10%] lg:-top-[25%]">
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178708/445-NEW_zzlkpn.png"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757160926/Rectangle_1067330_2_ljbyyd.png"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161863/commerciall_kow4as.png"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161863/supermarket_clea_kmmvhs.png"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757161864/officee_uqslu6.png"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178733/342325_eykn3k.jpg"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178760/newwww_wpyaom.jpg"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178726/2148119211_z1mhx0.jpg"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178708/445-NEW_zzlkpn.png"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178770/portrait-female-window-cleaner_uxr575.jpg"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178786/woman-cleaning-spray-product-cleaner-washing-window-with-smile-home-happy-working-m_kyonpf.jpg"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/dpy5q17i9/image/upload/v1757178791/young-contract-cleaners-cleaning-modern-office_rdltfo.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.main-container {
  /* min-height: 120vh; */
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  background: linear-gradient(to top, rgba(116, 116, 116, 0.712), transparent);
}
.center-content {
  /* position: fixed; */
  position: absolute;
  z-index: 10;
  text-align: center;
  color: #ffffff;
  /* max-width: 600px; */
  padding: 2rem 0;
  /* background-color: rgba(0, 0, 0, 0.5);  */
  border-radius: 1rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Syne', sans-serif;
}

.subtitle {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-family: 'Syne', sans-serif;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6;
  font-family: 'Urbanist', sans-serif;
}

.slider-section {
  height: 100vh;
  bottom: 0;
  /* position: fixed; */
  position: relative;
  width: 100%;
}

.wheel {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300vw;
  height: 300vw;
  max-width: 2000px;
  max-height: 2000px;
  z-index: 1;
}

.wheel__card {
  position: absolute;
  top: 0;
  left: 0;
  width: 12%;
  max-width: 300px;
  /* max-height: 300px; */
  aspect-ratio: 1/1;
  cursor: pointer;
  height: 300px; /* Fixed height */
  max-height: 300px;
}

.wheel__card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem; /* Add border radius */
  pointer-events: none;
}

.scroll-down-icon {
  position: fixed;
  top: 4em;
  right: 2em;
  transform: rotate(90deg);
}

.scroll-down-icon img {
  width: 50px;
  filter: brightness(0) invert(1);
}

.scroll-down {
  font-family: 'Monument Extended';
  position: fixed;
  top: 3em;
  left: 2em;
  color: #000;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 20px;
  overflow: visible;
}
</style>
