# Launch Checklist

## Before First Deploy

- Confirm repository remote and default branch.
- Confirm `wodiq.nl` DNS points to the production reverse proxy.
- Confirm reverse proxy maps `wodiq.nl` to host port `3014`.
- Confirm `wodiq.app` keeps product app traffic separate.
- Confirm GitHub Actions secrets/vars are available through `marcel-tuinstra/devops`.
- Confirm `PUBLIC_GA_MEASUREMENT_ID=G-TX1BMCPYHM` is configured as a repository variable if GA should be enabled.
- Confirm GHCR package permissions for `ghcr.io/marcel-tuinstra/wodiq-site`.

## Validation

```bash
npm run test
docker build -t ghcr.io/marcel-tuinstra/wodiq-site:local .
docker compose -f docker-compose.production.yml up -d
curl -i http://localhost:3014/health
curl -I http://localhost:3014/
```

## Post-Deploy Checks

- `https://wodiq.nl/`
- `https://wodiq.nl/en/`
- `https://wodiq.nl/privacy/`
- `https://wodiq.nl/terms/`
- `https://wodiq.nl/en/privacy/`
- `https://wodiq.nl/en/terms/`
- `https://wodiq.nl/robots.txt`
- `https://wodiq.nl/sitemap-index.xml`
- Open Graph preview uses `https://wodiq.nl/social-card.png`.
- App profile legal links point to `wodiq.nl`.

## Analytics Decision

Current choice: Google Analytics 4 is prepared and documented, but only loads when `PUBLIC_GA_MEASUREMENT_ID` is set at build time. The WODIQ GA4 measurement ID is `G-TX1BMCPYHM`.

Use GA only to answer:

- Which CTA gets used?
- Does Dutch traffic convert differently?
- Which competitor/SEO pages bring useful traffic?

Google Search Console should be connected after launch for indexing and sitemap visibility. Sentry is acceptable only if the site gains meaningful client-side runtime code; it is more useful in the WODIQ app than on a mostly static marketing site.

Do not add heatmaps, Microsoft Clarity, ad pixels, chat widgets, broad product analytics, or email/CRM integrations by default. The privacy policy already includes website analytics. If another provider is added, update the privacy policy before deploy.
