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
    home: '/',
    privacy: '/privacy/',
    terms: '/terms/'
  },
  nl: {
    home: '/nl/',
    privacy: '/nl/privacy/',
    terms: '/nl/terms/'
  }
}

export function absoluteUrl(path: string) {
  return new URL(path, site.origin).toString()
}
