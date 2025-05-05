import { onMounted } from 'vue'

// export function useScrollAnimation() {
//   const handleScrollAnimation = () => {
//     const elements = document.querySelectorAll('.slide-up, .fade-in, .scale-in')

//     elements.forEach((element) => {
//       const elementTop = element.getBoundingClientRect().top
//       const elementBottom = element.getBoundingClientRect().bottom

//       // Check if element is in viewport
//       if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
//         element.classList.add('visible')
//       }
//     })
//   }

//   onMounted(() => {
//     handleScrollAnimation()
//     window.addEventListener('scroll', handleScrollAnimation)
//   })

//   onUnmounted(() => {
//     window.removeEventListener('scroll', handleScrollAnimation)
//   })

//   return {
//     handleScrollAnimation,
//   }
// }

export function useScrollAnimation() {
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
  })
}