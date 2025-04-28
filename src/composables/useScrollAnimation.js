import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const handleScrollAnimation = () => {
    const elements = document.querySelectorAll('.slide-up, .fade-in, .scale-in')

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const elementBottom = element.getBoundingClientRect().bottom

      // Check if element is in viewport
      if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
        element.classList.add('visible')
      }
    })
  }

  onMounted(() => {
    handleScrollAnimation()
    window.addEventListener('scroll', handleScrollAnimation)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScrollAnimation)
  })

  return {
    handleScrollAnimation,
  }
}
