import type { APIRoute } from 'astro'
import { absoluteUrl, localePaths } from '../data/site'

const pages = [
  { path: localePaths.nl.home, lastmod: '2026-06-12' },
  { path: localePaths.en.home, lastmod: '2026-06-12' },
  { path: localePaths.nl.privacy, lastmod: '2026-06-12' },
  { path: localePaths.nl.terms, lastmod: '2026-06-12' },
  { path: localePaths.en.privacy, lastmod: '2026-06-12' },
  { path: localePaths.en.terms, lastmod: '2026-06-12' }
]

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

export const GET: APIRoute = () => {
  const urls = pages
    .map((page) => [
      '  <url>',
      `    <loc>${escapeXml(absoluteUrl(page.path))}</loc>`,
      `    <lastmod>${page.lastmod}</lastmod>`,
      '  </url>'
    ].join('\n'))
    .join('\n')

  return new Response(
    [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      urls,
      '</urlset>'
    ].join('\n'),
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8'
      }
    }
  )
}
