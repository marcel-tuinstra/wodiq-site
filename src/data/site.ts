export const site = {
  name: 'WODIQ',
  origin: 'https://wodiq.nl',
  appUrl: 'https://wodiq.app',
  supportEmail: 'marcel@tuinstra.dev',
  betaUrl: 'https://testflight.apple.com/join/VHNX9gkJ',
  socialImage: '/social-card.png'
}

export type Locale = 'en' | 'nl'

export const localePaths: Record<Locale, { home: string, privacy: string, terms: string }> = {
  en: {
    home: '/en/',
    privacy: '/en/privacy/',
    terms: '/en/terms/'
  },
  nl: {
    home: '/',
    privacy: '/privacy/',
    terms: '/terms/'
  }
}

export function alternateLocalePath(locale: Locale, pathname: string) {
  const from = localePaths[locale]
  const to = locale === 'en' ? localePaths.nl : localePaths.en
  const normalizedPath = pathname.endsWith('/') ? pathname : `${pathname}/`

  if (normalizedPath === from.privacy) {
    return to.privacy
  }

  if (normalizedPath === from.terms) {
    return to.terms
  }

  return to.home
}

export function absoluteUrl(path: string) {
  return new URL(path, site.origin).toString()
}
