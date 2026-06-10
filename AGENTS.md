# AGENTS.md

Guidance for AI agents working on the WODIQ marketing website.

## Project Overview

This repository contains the static marketing and legal website for WODIQ at `wodiq.nl`. The product app remains in the neighboring Nuxt repository at `../WODIQ` and is hosted at `wodiq.app`.

The site should explain WODIQ as an AI workout planner for deciding what to train today, show real product evidence, publish pricing, and host canonical privacy and terms pages.

## Stack

- Use Astro with static output.
- Prefer native Astro components and plain CSS.
- Do not add Vue, Nuxt, React, or client-side islands unless a concrete interaction requires them.
- Keep content local to this repo; do not make production builds depend on files in `../WODIQ`.
- Production deploy follows the existing `site-marcel` / `site-tuinstra` pattern: GitHub Actions builds a Docker image, serves Astro `dist/` through nginx, and deploys with compose on the remote host.
- Google Analytics 4 is prepared behind `PUBLIC_GA_MEASUREMENT_ID`. Do not add Plausible, Umami, or other analytics scripts unless the privacy policy and launch checklist are updated in the same change.
- Keep integrations minimal for this marketing site. Google Search Console and GA4 are enough for launch; Sentry is acceptable for real runtime error reporting. Do not add Microsoft Clarity, heatmaps, ad pixels, product analytics, chat widgets, or CRM/email tools without an explicit product reason.

## Design Direction

Use the installed `emil-design-eng` skill for homepage, pricing, legal layout, animation, and visual polish work. The site should follow Emil Kowalski-style design engineering principles: invisible details compound, animation must have purpose, and interactions should feel precise and responsive.

Avoid generic AI/SaaS aesthetics:

- No decorative AI blobs, orbs, bokeh, or purple-blue gradients.
- No fake dashboards or abstract product illustrations.
- No stock fitness imagery when real WODIQ screenshots can explain the product.

Preserve WODIQ's light-mode visual language unless the app tokens are intentionally updated too:

- Warm off-white page background.
- Graphite and black typography.
- Amber accent for progress, focus, and calls to action.
- Compact radii and app-like controls.
- Real screenshots and structured workout UI as the visual foundation.

## Content And SEO

- Keep English as the default route and Dutch under `/nl/`.
- Publish canonical legal pages at `/privacy`, `/terms`, `/nl/privacy`, and `/nl/terms`.
- Use visible FAQ content when emitting FAQ schema.
- Keep claims practical and non-medical. WODIQ provides training guidance, not medical advice.
- Do not publicly market Strava as active until the app enables it.
- State that TestFlight/pilot access is free with usage limits until paid plans are actually active.

## Validation

Before handing off site changes, run:

- `npm run build`
- `npm run check` when dependencies are installed

Also verify that main content and CTAs render in static HTML, legal links work, and screenshots remain readable on mobile.
