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

  const radius = wheel.offsetWidth / 2
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
  <div class="main-container" :style="{ backgroundColor }">
    <div class="center-content">
      <p
        class="font-urbanist text-center text-white w-fit mx-auto px-3 py-1.5 font-semibold text-xl bg-brand-main/30 rounded-2xl"
      >
        ABOUT US
      </p>
      <p class="font-syne font-semibold text-center text-3xl md:text-5xl">
        Trusted Home Cleaning <br />
        Experts Since 2025
      </p>
      <div class="description w-[60%] mx-auto -mt-6">{{ props.description }}</div>
      <div class=" w-fit mx-auto mt-8">
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
      <div class="wheel">
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329734/Sparkleklin/445-NEW_fsjpvn.png"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1746279030/Sparkleklin/Rectangle_1067330_2_kflzwj.png"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745445013/Sparkleklin/commerciall_woasfw.png"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745445011/Sparkleklin/supermarket_clea_hnjwfq.png"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745445012/Sparkleklin/officee_bzjpqq.png"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329737/Sparkleklin/342325_ofla0s.jpg"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329773/Sparkleklin/newwww_r43pyt.jpg"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329738/Sparkleklin/2148119211_q5yf9n.jpg"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329734/Sparkleklin/445-NEW_fsjpvn.png"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329784/Sparkleklin/portrait-female-window-cleaner_pu1x5g.jpg"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329789/Sparkleklin/woman-cleaning-spray-product-cleaner-washing-window-with-smile-home-happy-working-m_apavsp.jpg"
            alt=""
          />
        </div>
        <div class="wheel__card">
          <img
            src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745329787/Sparkleklin/young-contract-cleaners-cleaning-modern-office_pkphjw.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  </div>
  <!-- <div class="scroll-down">Scroll down</div>
  <div class="scroll-down-icon">
    <img
      src="https://storage.googleapis.com/studio-design-asset-files/projects/BXaxK3jMq7/s-61x9_2c6bd15e-43e5-4ebf-bf39-a6ff23fb93dd.svg"
      alt=""
    />
  </div> -->
</template>

<style scoped>
/* body{
    padding: 0;
    margin: 0;
    height: 600vh;
    width: 100vw;
    background: #90836a;
    color: #000;
    overflow-x: hidden;
} */

.main-container {
  min-height: 150vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
}
.center-content {
  /* position: fixed; */
  position: absolute;
  z-index: 10;
  text-align: center;
  color: #ffffff;
  /* max-width: 600px; */
  padding: 2rem;
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

/* .header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 8vw;
  font-family: 'Neue World Ultralight';
  font-weight: lighter;
  text-align: center;
} */
/* h1{
    font-size: 8vw;
    font-family: "Neue World Ultralight";
    font-weight: lighter;
    text-align: center;
} */

.slider-section {
  height: 100vh;
  bottom: 0;
  /* position: fixed; */
  position: relative;
  width: 100%;
}

.wheel {
  position: absolute;
  top: 0;
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

/* img {
  width: 100%;
  pointer-events: none;
  z-index: 999;
  cursor: pointer;
} */

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
