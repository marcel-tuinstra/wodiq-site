import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://wodiq.nl',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
})
