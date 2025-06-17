// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap'
import { createWriteStream } from 'fs'

const sitemap = new SitemapStream({ hostname: 'https://www.sparkleklin.co.uk/' })

const pages = [
  '/',
  '/aboutus',
  '/services',
  '/gallery',
  '/contact-us',
  '/jobs',
  '/faqs',
  '/services/commercial',
  '/services/offices',
  '/services/domestic',
  '/services/shopping-mall',
  '/services/education-centres',
  '/services/car-showroom',
  '/services/pubs-clubs-restaurants',
  '/services/sports-leisure-centers',
  '/services/hospitals',
  '/special-cleaning/contract',
  '/special-cleaning/deep',
  '/special-cleaning/after-building',
  '/special-cleaning/spring',
  '/special-cleaning/event-or-party',
  '/special-cleaning/tenancycleaning',
  '/special-cleaning/decluttercleaning',
]

pages.forEach((page) => {
  sitemap.write({ url: page, changefreq: 'monthly', priority: 0.8 })
})

sitemap.end()

streamToPromise(sitemap).then((sm) =>
  createWriteStream('./public/sitemap.xml').write(sm.toString()),
)
