// https://astro.build/config
import compress from 'astro-compress'
import {defineConfig} from 'astro/config'
import download from 'download'
import fs from 'fs'
import image from '@astrojs/image'
//import partytown from '@astrojs/partytown'
// https://astro.build/config
import prefetch from '@astrojs/prefetch'
// https://astro.build/config
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
//import { vendors } from './src/assets/js/vendors'

console.log('Astro config loaded')

// vendors.map(async (vendor) => {
//   console.log('Downloading', vendor.filename)
//   fs.writeFileSync('public/vendors/' + vendor.filename, await download(vendor.path))
// })

console.log(process.env.NODE_ENV)

// https://astro.build/config
export default defineConfig({
  base: process.env.NODE_ENV == 'production' ? '/tagglo' : '/',
  output: 'static',
  site: 'https://tagglo.co',
  integrations: [tailwind(), prefetch(), sitemap(), image(), compress()],
})
