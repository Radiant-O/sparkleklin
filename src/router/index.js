import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/coming_soon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80, // Offset for fixed header if you have one
      }
    }
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/',
      name: 'home',
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
      path: '/services/shopping-mall',
      name: 'shopping-mall-cleaning',
      component: () => import('../views/services/ShoppingMall.vue'),
    },
    {
      path: '/services/education-centres',
      name: 'education-centres-cleaning',
      component: () => import('../views/services/EducationalCenter.vue'),
    },
    {
      path: '/services/car-showroom',
      name: 'car-showroom-cleaning',
      component: () => import('../views/services/CarShowroom.vue'),
    },
    {
      path: '/services/resturant',
      name: 'resturant-cleaning',
      component: () => import('../views/services/ResturantCleaning.vue'),
    },
    {
      path: '/services/sport',
      name: 'sportandleisure-cleaning',
      component: () => import('../views/services/SportCleaning.vue'),
    },
    {
      path: '/services/hospital',
      name: 'hospital-cleaning',
      component: () => import('../views/services/HospitalCleaning.vue'),
    },
    {
      path: '/special-cleaning/contract',
      name: 'contract-cleaning',
      component: () => import('../views/special/ContractCleaning.vue'),
    },
    {
      path: '/special-cleaning/deep',
      name: 'deepcleaning',
      component: () => import('../views/special/DeepCleaning.vue'),
    },
    {
      path: '/special-cleaning/after-building',
      name: 'afterbuilding',
      component: () => import('../views/special/AfterBuilding.vue'),
    },
    {
      path: '/special-cleaning/spring',
      name: 'springcleaning',
      component: () => import('../views/special/SpringCleaning.vue'),
    },
    {
      path: '/special-cleaning/event-or-party',
      name: 'eventorparty',
      component: () => import('../views/special/EventCleaning.vue'),
    },
    {
      path: '/special-cleaning/tenancycleaning',
      name: 'tenancycleaning',
      component: () => import('../views/special/TenancyCleaning.vue'),
    },
    {
      path: '/special-cleaning/decluttercleaning',
      name: 'decluttercleaning',
      component: () => import('../views/special/DeclutteringCleaning.vue'),
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
    {
      path: '/faqs',
      name: 'faqs',
      component: () => import('../views/faqsPage.vue'),
    },
    {
      path: '/aboutcc',
      name: 'aboutcc',
      component: () => import('../components/CircleArc.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
    },
  ],
})

export default router
