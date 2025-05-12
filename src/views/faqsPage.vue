<template>
  <div class="reveal">
    <div class="sticky top-0 z-50 w-full">
      <MainHeader />
    </div>
    <section>
      <div class="mx-5 md:mx-25 mt-25">
        <div>
          <p
            class="font-urbanist text-center text-brand-main w-fit mx-auto px-3 py-1.5 font-semibold text-xl bg-brand-main/20 rounded-2xl"
          >
            FAQs
          </p>
          <p class="font-syne font-semibold text-center text-3xl md:text-5xl">Frequently Asked Questions</p>
          <div class="font-urbanist text-center text-normal text-black/60 md:w-[50%] mx-auto -mt-5 md:-mt-6">
            If you have any other questions, please email us.
          </div>
        </div>
        <div class="justify-center w-full mt-10">
          <div class="grid md:grid-cols-2 space-y-5 md:space-x-8">
            <FAQItemComponent
              v-for="faq in faqs.slice(0, 9)"
              :key="faq.id"
              :title="faq.title"
              :content="faq.content"
            />
            <FAQItemComponent
              v-for="faq in faqs.slice(9, 18)"
              :key="faq.id"
              :title="faq.title"
              :content="faq.content"
            />
          </div>
        </div>

       
      </div>
      <div
        class="bg-black w-[100%] mx-auto rounded-3xl mt-25 px-5 md:px-20 pt-10 md:pt-20 pb-20 text-white"
      >
        <div class="flex md:flex-row flex-col justify-between items-start">
          <!-- Logo and Description -->
          <div class="md:w-[35%] ">
            <img
              src="https://res.cloudinary.com/din5vdwsr/image/upload/v1745614935/Sparkleklin/logo_white_mix_ftx0rf.png"
              alt="Sparkleklin Logo"
              class="w-38 pb-5"
            />
            <p class="font-urbanist text-md text-justify font-normal text-brand-ash leading-5">
              Experience the difference with Sparkleklin's professional home cleaning services. From
              top to bottom, we ensure every corner of your home/office sparkles with cleanliness
              and care.
            </p>
          </div>

          <!-- Links Section -->
          <div class="md:w-[60%]">
            <div class="flex flex-col md:flex-row justify-center gap-20">
              <!-- Services -->
              <div class="flex flex-col gap-3 text-brand-ash font-urbanist">
                <p class="text-white text-lg font-semibold font-syne">Services</p>
                <router-link
                  v-for="service in services"
                  :key="service.path"
                  :to="service.path"
                  class="hover:text-brand-main transition-colors duration-300"
                >
                  {{ service.name }}
                </router-link>
              </div>

              <!-- Useful Links -->
              <div class="flex flex-col gap-3 text-brand-ash font-urbanist">
                <p class="text-white text-lg font-semibold font-syne">Useful Links</p>
                <router-link
                  v-for="link in usefulLinks"
                  :key="link.path"
                  :to="link.path"
                  class="hover:text-brand-main transition-colors duration-300"
                >
                  {{ link.name }}
                </router-link>
              </div>

              <!-- Contact Info -->
              <div class="flex flex-col gap-3 text-brand-ash font-urbanist">
                <p class="text-white text-lg font-semibold font-syne">Contact</p>
                <a
                  v-for="contact in contactInfo"
                  :key="contact.value"
                  :href="contact.link"
                  class="hover:text-brand-main transition-colors duration-300"
                >
                  {{ contact.value }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Media and Copyright -->
        <div class="md:-mt-5 mt-10">
          <div class="flex gap-5">
            <a
              v-for="social in socialMedia"
              :key="social.name"
              :href="social.link"
              target="_blank"
              rel="noopener noreferrer"
              class="border rounded-full p-2 text-brand-ash border-brand-ash hover:text-brand-main hover:border-brand-main transition-colors duration-300"
            >
              <Icon :icon="social.icon" width="24" height="24" />
            </a>
          </div>
          <div class="text-brand-ash font-urbanist mt-10 md:mt-15">
            © {{ new Date().getFullYear() }} Copyright by Sparkleklin Inc.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import MainHeader from '@/components/MainHeader.vue'
import FAQItemComponent from '@/components/FAQItemComponent.vue'
import { Icon } from '@iconify/vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

useScrollAnimation()

const faqs = [
  {
    id: 1,
    title: 'What cleaning services do you offer?',
    content:
      'We offer a comprehensive range of cleaning services including commercial cleaning, office cleaning, domestic cleaning, and specialized cleaning services for various industries.',
  },
  {
    id: 2,
    title: 'What are your operating hours?',
    content:
      'We operate 24/7 to accommodate your schedule. Our cleaning services can be arranged at any time that suits your needs, including evenings and weekends.',
  },
  {
    id: 3,
    title: 'Can I have both cleaning and ironing?',
    content:
      'Ofcourse, the ironing will be undertaken in your house at the same time as the cleaning.',
  },
  {
    id: 4,
    title: 'Can I have a cleaner at weekends?',
    content:
      'Yes, Although most cleaners on work monday to friday, some cleaners are prepared to work weekends.',
  },
  {
    id: 5,
    title: 'What does the insurance cover?',
    content:
      'Damage to your property by the cleaner, personal injury to the cleaner, key and lock replacement and theft (which are very rare).',
  },
  {
    id: 6,
    title: 'Can I give the cleaner a key?',
    content: 'Yes, all our cleaners have beenen vetted, insured and thet can hold keys.',
  },
  {
    id: 7,
    title: 'How are your cleaners vetted?',
    content:
      'Our cleaners are vetted for eligibility to work in the U.K., supplying us with evidence such as a passport, including a work visa if they are non-E.U., proof of identification such as a driving license or passport and proof of address such as a recent bill or bank statement. Copies of their documents are hed with us, so that the clearners can be traced and they are aware of this.',
  },
  {
    id: 8,
    title: 'What should I do if I am not happy with a cleaner?',
    content:
      'If it is just a minor problem, it is best if you speak to the cleaner directly, as the cleaners can take it as critism if it comes from us via you. if you are not happy with the cleaner and would like to change, you can let us know and we will (politely) stop the cleaner coming and assign a new clearner to you.',
  },
  {
    id: 9,
    title: 'What time will my Housekeeper arrive?',
    content:
      'We will book for arrival but we cannot guarantee at a specific time, as our local Housekeepers travel on foot or by public transport and we need to allow for public transport delays. We will however be able to provide a time window in which your housekeeper will arrive. This allows for travel time between jobs and any transport delays that may occur.',
  },
  {
    id: 10,
    title: 'How do we pay?',
    content:
      'Payments by bank transfer or you can arrange a regular standing order. Cheque payments can be made but must be cleared before cleaning takes place which can take up to 7 working days to clear from receipt of cheque. (We accept most payment methods). All payments must be made in advance of services commencing.',
  },
  {
    id: 11,
    title: 'How soon can a cleaner start?',
    content:
      'Cleaners can start within few days. or you can book for same day cleaning for an extra cost.',
  },
  {
    id: 12,
    title: 'Will I have 1 cleaner or a pair?',
    content:
      'It is usually 1 cleaner for less hours of work, or more cleaners depending on the amount of hours booked.',
  },
  {
    id: 13,
    title: 'If a clearner is sick, can I have a replacement?',
    content:
      'Yes, If we have any notice, we will send you another cleaner. If there\'s no notice and we cannot assign a replacement in time, we will send you a refund or the cleaner can make up the hours. ',
  },
  {
    id: 14,
    title: 'Do you offer any residential cleaning services guarantees?',
    content:
      'We feel, no writen gurantees are necessary. At the end of a clean if you are satisfied, we will clean until you are happy.',
  },
  {
    id: 15,
    title: 'How much does commercial cleaning cost?',
    content:
      'Our cleaning cost are tailored to the clients, as every organization and property portfolio are different.',
  },
  {
    id: 16,
    title: 'How many cleaner do you send?',
    content:
      'We will send cleaners depending on the work they are carrying out. We could send as minimal as 1 cleaner or as many as job require.',
  },
  {
    id: 17,
    title: 'How much does commercial cleaning cost?',
    content:
      'Our cleaning costs are tailored to the clients, as every organization and property portfolio is diferent.',
  },
  {
    id: 18,
    title: 'Are there a minimum number of hours per visit?',
    content:
      'Yes, We require 2 hours minimum per cleaning visit, to ensure the cleaner\'s travel cost are covered. ',
  },
]

const services = [
  { name: 'Commercial Cleaning', path: '/services/commercial' },
  { name: 'Domestic Cleaning', path: '/services/domestic' },
  { name: 'Clearance Cleaning', path: '/special-cleaning/decluttercleaning' },
  { name: 'Spring Cleaning', path: '/special-cleaning/spring' },
  { name: 'Pre & Post Tenancy Cleaning', path: '/special-cleaning/tenancycleaning' },
]

const usefulLinks = [
  { name: 'About Us', path: '/aboutus' },
  { name: 'Career', path: '/jobs' },
  { name: 'Why Choose Us?', path: '/faqs' },
  { name: 'Terms & Conditions', path: '#' },
  { name: 'Privacy Policy', path: '#' },
]

const contactInfo = [
  { value: '+447351357925', link: 'tel:+447351357925' },
  { value: 'admin@sparkleklin.co.uk', link: 'mailto:admin@sparkleklin.co.uk' },
  { value: 'contact@sparkleklin.co.uk', link: 'mailto:contact@sparkleklin.co.uk' },
]

const socialMedia = [
  { name: 'Twitter', icon: 'proicons:x-twitter', link: 'https://x.com/sparklekli57710?s=21' },
  {
    name: 'Instagram',
    icon: 'mdi:instagram',
    link: 'https://www.instagram.com/sparkleklin?igsh=OThwcjl1dG0zazFr&utm_source=qr',
  },
  {
    name: 'Tiktok',
    icon: 'ic:outline-tiktok',
    link: 'https://www.tiktok.com/@sparkleklin?_t=ZN-8vff1WNWVUc&_r=1',
  },
]

</script>

<style lang="scss" scoped>
</style>
