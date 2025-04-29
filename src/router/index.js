import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/coming_soon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/homepage',
      name: 'hompage',
      component: () => import('../views/homePage.vue'),
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: () => import('../views/aboutUs.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/servicePage.vue'),
    },
    {
      path: '/services/commercial',
      name: 'commercial-cleaning',
      component: () => import('../views/services/CommercialCleaning.vue'),
    },
    {
      path: '/services/offices',
      name: 'office-cleaning',
      component: () => import('../views/services/OfficeCleaning.vue'),
    },
    {
      path: '/services/domestic',
      name: 'domestic-cleaning',
      component: () => import('../views/services/DomesticCleaning.vue'),
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: () => import('../views/galleryPage.vue'),
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: () => import('../views/contactUs.vue'),
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: () => import('../views/jobsPage.vue'),
    },
  ],
})

export default router
