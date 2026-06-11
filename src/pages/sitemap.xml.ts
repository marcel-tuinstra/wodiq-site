import type { APIRoute } from 'astro'
import { absoluteUrl, localePaths } from '../data/site'

const paths = [
  localePaths.nl.home,
  localePaths.en.home,
  localePaths.nl.privacy,
  localePaths.nl.terms,
  localePaths.en.privacy,
  localePaths.en.terms
]

const lastmod = new Date().toISOString()

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

export const GET: APIRoute = () => {
  const urls = paths
    .map((path) => [
      '  <url>',
      `    <loc>${escapeXml(absoluteUrl(path))}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
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
