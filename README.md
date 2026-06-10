# WODIQ Site

Static Astro marketing and legal site for WODIQ at `wodiq.nl`.

The product app lives in the neighboring Nuxt repository at `../WODIQ` and is hosted at `wodiq.app`.

## Stack

- Astro static output
- Plain Astro components and CSS
- nginx container for production
- GitHub Actions deploy through `marcel-tuinstra/devops`

## Commands

Use Node 22.

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

LAN preview:

```bash
npm run preview:lan
```

## Deploy

Production follows the same pattern as `site-marcel` and `site-tuinstra`:

- push to `main`
- build Docker image
- publish to `ghcr.io/marcel-tuinstra/wodiq-site`
- deploy compose project to `/mnt/ssd1000-01/projects/wodiq-site/production`
- expose container port `80` on host port `3014`

Staging is manual through GitHub Actions and uses host port `3112`.

## Analytics

Google Analytics 4 is prepared but opt-in at build time. Set `PUBLIC_GA_MEASUREMENT_ID` to a GA4 measurement ID, for example `G-XXXXXXXXXX`, before building to include the GA script.

For Docker builds:

```bash
docker build --build-arg PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX -t ghcr.io/marcel-tuinstra/wodiq-site:local .
```

The privacy policy already documents website analytics. If a different analytics provider is added later, update the privacy policy and launch checklist in the same change.

Keep the marketing-site toolset minimal: GA4 for traffic/conversion, Google Search Console for indexing, and Sentry only if there is meaningful client-side runtime error reporting to capture. Do not add heatmaps, ad pixels, chat widgets, or broad product analytics by default.

## Pilot Access

The public beta CTA points to TestFlight:

https://testflight.apple.com/join/VHNX9gkJ

During the TestFlight and pilot phase, WODIQ is free to use with limits. Pricing on the site describes intended founding pricing after the pilot.

## Content

- Default language: English at `/`
- Dutch: `/nl/`
- Legal pages: `/privacy/`, `/terms/`, `/nl/privacy/`, `/nl/terms/`
- Market notes: [docs/market-positioning.md](docs/market-positioning.md)
