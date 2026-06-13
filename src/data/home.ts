import type { Locale } from './site'

export type HomeContent = {
  seo: {
    title: string
    description: string
  }
  nav: {
    features: string
    pricing: string
    faq: string
    privacy: string
    terms: string
    language: string
  }
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
    trust: string[]
  }
  workflow: {
    eyebrow: string
    title: string
    items: Array<{ title: string, text: string }>
  }
  proof: {
    eyebrow: string
    title: string
    text: string
    captions: string[]
  }
  comparison: {
    eyebrow: string
    title: string
    items: Array<{ competitor: string, they: string, wodiq: string }>
  }
  pricing: {
    eyebrow: string
    title: string
    description: string
    plans: Array<{
      name: string
      price: string
      period: string
      badge?: string
      description: string
      features: string[]
    }>
    note: string
  }
  faq: {
    eyebrow: string
    title: string
    items: Array<{ question: string, answer: string }>
  }
  finalCta: {
    title: string
    text: string
    primaryCta: string
  }
}

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    seo: {
      title: 'WODIQ | Stop searching for today’s workout',
      description: 'WODIQ replaces endless Instagram scrolling, saved WODs, and generic ChatGPT prompts with a structured workout for today.'
    },
    nav: {
      features: 'How it works',
      pricing: 'Pricing',
      faq: 'FAQ',
      privacy: 'Privacy',
      terms: 'Terms',
      language: 'Nederlands'
    },
    hero: {
      eyebrow: 'For the moment before training',
      title: 'Stop searching for today’s workout.',
      description: 'WODIQ is for the group chat, the gym floor, and the five minutes you used to lose scrolling Instagram, digging through saved WODs, or asking ChatGPT for another generic session.',
      primaryCta: 'Join the TestFlight',
      secondaryCta: 'Open the web app',
      trust: ['Free during pilot', 'Built for mixed training', 'Structured by AI, not random']
    },
    workflow: {
      eyebrow: 'The old habit',
      title: 'You came to train. Not to keep looking.',
      items: [
        {
          title: 'Stop the scroll',
          text: 'No more bouncing between Instagram saves, old screenshots, WOD sites, and half-useful AI prompts.'
        },
        {
          title: 'Tell WODIQ what fits',
          text: 'Pick a sport, describe a goal, set the time you have, and add recent training context when it matters.'
        },
        {
          title: 'Walk in with a plan',
          text: 'Get warm-up, main work, cooldown, effort cues, and a reason this session makes sense today.'
        }
      ]
    },
    proof: {
      eyebrow: 'Product proof',
      title: 'Built from the real “what are we doing?” moment.',
      text: 'WODIQ turns the messy pre-workout search into a clean decision: choose intent, set constraints, keep the workout connected to what you already did.',
      captions: ['Goal or sport input', 'Session constraints', 'Chosen training context']
    },
    comparison: {
      eyebrow: 'Market position',
      title: 'Not another feed. Not another fixed plan.',
      items: [
        {
          competitor: 'Runna',
          they: 'Race-focused running plans with elite-coach positioning.',
          wodiq: 'Mixed-session decisions for people who might run, lift, do hybrid conditioning, or need mobility depending on the day.'
        },
        {
          competitor: 'Fitbod / JuggernautAI',
          they: 'Deeper strength or powerlifting specialization.',
          wodiq: 'A broader daily planner for athletes who want the right session now, not a whole new training identity.'
        },
        {
          competitor: 'Instagram / ChatGPT',
          they: 'Endless inspiration, generic WODs, and too much choice when you already wanted to start.',
          wodiq: 'Turns your intent and constraints into one structured workout for today.'
        }
      ]
    },
    pricing: {
      eyebrow: 'Pilot access',
      title: 'Free during TestFlight. Limited while WODIQ learns.',
      description: 'During the TestFlight and pilot phase, WODIQ is free to use with usage limits. Paid plans below show the intended founding pricing for the public product.',
      plans: [
        {
          name: 'Pilot',
          price: '€0',
          period: 'pilot',
          badge: 'TestFlight',
          description: 'Use WODIQ for free while the app is in TestFlight and the product limits are still being tuned.',
          features: ['Free pilot access', 'Limited workout generations', 'Feedback helps shape the product']
        },
        {
          name: 'Founding Monthly',
          price: '€5',
          period: 'month',
          description: 'Planned starter price after the pilot for athletes who want WODIQ in their regular training routine.',
          features: ['More workout generations', 'Coach-style reviews', 'Garmin and Apple Health context where available']
        },
        {
          name: 'Founding Yearly',
          price: '€40',
          period: 'year',
          badge: 'Best early value',
          description: 'Planned yearly option for early users once WODIQ moves out of the free pilot.',
          features: ['Same paid access as monthly', 'Lower yearly cost', 'Future core improvements during pilot']
        }
      ],
      note: 'No payment is required during TestFlight. Pilot limits may change while WODIQ learns what a useful daily workout flow needs.'
    },
    faq: {
      eyebrow: 'Questions',
      title: 'Practical answers before you train.',
      items: [
        {
          question: 'Is WODIQ just ChatGPT for workouts?',
          answer: 'No. WODIQ uses a structured workout flow, your constraints, and optional training context so the output is easier to use than a blank prompt.'
        },
        {
          question: 'Do I need Garmin or Apple Health?',
          answer: 'No. WODIQ works without connected providers. Provider data adds recent training context when you choose to connect it.'
        },
        {
          question: 'Is this medical advice?',
          answer: 'No. WODIQ gives training structure and practical fitness guidance. Adapt sessions to your own situation and seek medical advice when needed.'
        },
        {
          question: 'Is Strava supported?',
          answer: 'Strava is not public in this release. WODIQ should only market integrations that are enabled for users.'
        }
      ]
    },
    finalCta: {
      title: 'Put the phone down. Start the session.',
      text: 'Use WODIQ when the workout choice is the thing holding you up.',
      primaryCta: 'Join the TestFlight'
    }
  },
  nl: {
    seo: {
      title: 'WODIQ | Stop met zoeken naar je workout voor vandaag',
      description: 'WODIQ vervangt eindeloos Instagram-scrollen, bewaarde wodjes en generieke ChatGPT-prompts door een gestructureerde workout voor vandaag.'
    },
    nav: {
      features: 'Zo werkt het',
      pricing: 'Prijzen',
      faq: 'FAQ',
      privacy: 'Privacy',
      terms: 'Voorwaarden',
      language: 'English'
    },
    hero: {
      eyebrow: 'Voor het moment voor je training',
      title: 'Stop met zoeken naar je workout voor vandaag.',
      description: 'WODIQ is voor de groepsapp, de gymvloer en die vijf minuten die je normaal verliest aan Instagram saves, oude screenshots en weer een generiek ChatGPT-wodje.',
      primaryCta: 'TestFlight starten',
      secondaryCta: 'Open de webapp',
      trust: ['Gratis tijdens pilot', 'Gemaakt voor gemengde training', 'AI met structuur, niet random']
    },
    workflow: {
      eyebrow: 'De oude gewoonte',
      title: 'Je kwam om te trainen. Niet om te blijven zoeken.',
      items: [
        {
          title: 'Stop het scrollen',
          text: 'Niet meer springen tussen Instagram saves, oude screenshots, WOD-sites en half-bruikbare AI-prompts.'
        },
        {
          title: 'Vertel wat vandaag past',
          text: 'Kies een sport, beschrijf een doel, stel je tijd in en voeg recente trainingscontext toe wanneer dat helpt.'
        },
        {
          title: 'Start met een plan',
          text: 'Krijg warm-up, hoofdblok, cooldown, inspanningscue en een reden waarom deze sessie vandaag logisch is.'
        }
      ]
    },
    proof: {
      eyebrow: 'Productbewijs',
      title: 'Gebouwd vanuit het echte “wat gaan we doen?”-moment.',
      text: 'WODIQ maakt van de rommelige pre-workout zoektocht een duidelijke keuze: kies intentie, stel grenzen en houd de workout verbonden met wat je al deed.',
      captions: ['Doel of sport kiezen', 'Sessie instellen', 'Gekozen training en context']
    },
    comparison: {
      eyebrow: 'Positionering',
      title: 'Geen extra feed. Geen vast plan waar je aan vastzit.',
      items: [
        {
          competitor: 'Runna',
          they: 'Hardloopplannen rond races en coaching.',
          wodiq: 'Gemengde dagkeuzes voor sporters die afhankelijk van de dag willen hardlopen, liften, hybride conditietraining doen of mobility pakken.'
        },
        {
          competitor: 'Fitbod / JuggernautAI',
          they: 'Diepere specialisatie in kracht of powerlifting.',
          wodiq: 'Een bredere dagplanner voor sporters die nu de juiste sessie willen, niet meteen een hele nieuwe trainingsidentiteit.'
        },
        {
          competitor: 'Instagram / ChatGPT',
          they: 'Eindeloze inspiratie, generieke wodjes en te veel keuze terwijl je eigenlijk al wilde beginnen.',
          wodiq: 'Zet je intentie en randvoorwaarden om in een gestructureerde workout voor vandaag.'
        }
      ]
    },
    pricing: {
      eyebrow: 'Pilot-toegang',
      title: 'Gratis tijdens TestFlight. Beperkt terwijl WODIQ leert.',
      description: 'Tijdens de TestFlight- en pilotfase kun je WODIQ gratis gebruiken met limieten. De betaalde plannen hieronder tonen de beoogde founding pricing voor het publieke product.',
      plans: [
        {
          name: 'Pilot',
          price: '€0',
          period: 'pilot',
          badge: 'TestFlight',
          description: 'Gebruik WODIQ gratis zolang de app in TestFlight zit en de productlimieten nog worden aangescherpt.',
          features: ['Gratis pilot-toegang', 'Beperkte workoutgeneraties', 'Feedback helpt het product vormen']
        },
        {
          name: 'Founding Monthly',
          price: '€5',
          period: 'maand',
          description: 'Beoogde starterprijs na de pilot voor sporters die WODIQ regelmatig willen gebruiken.',
          features: ['Meer workoutgeneraties', 'Coachachtige reviews', 'Garmin- en Apple Health-context waar beschikbaar']
        },
        {
          name: 'Founding Yearly',
          price: '€40',
          period: 'jaar',
          badge: 'Beste vroege waarde',
          description: 'Beoogde jaaroptie voor vroege gebruikers zodra WODIQ uit de gratis pilot komt.',
          features: ['Zelfde betaalde toegang als maandelijks', 'Lagere jaarprijs', 'Nieuwe core verbeteringen tijdens pilot']
        }
      ],
      note: 'Tijdens TestFlight is geen betaling nodig. Pilotlimieten kunnen wijzigen terwijl WODIQ leert wat een bruikbare dagelijkse workoutflow nodig heeft.'
    },
    faq: {
      eyebrow: 'Vragen',
      title: 'Praktische antwoorden voor je traint.',
      items: [
        {
          question: 'Is WODIQ gewoon ChatGPT voor workouts?',
          answer: 'Nee. WODIQ gebruikt een gestructureerde workoutflow, je randvoorwaarden en optioneel trainingscontext, zodat de output bruikbaarder is dan een lege prompt.'
        },
        {
          question: 'Heb ik Garmin of Apple Health nodig?',
          answer: 'Nee. WODIQ werkt zonder gekoppelde providers. Providerdata voegt recente trainingscontext toe wanneer je die koppelt.'
        },
        {
          question: 'Is dit medisch advies?',
          answer: 'Nee. WODIQ geeft trainingsstructuur en praktische fitnessbegeleiding. Pas sessies aan je eigen situatie aan en vraag medisch advies wanneer nodig.'
        },
        {
          question: 'Wordt Strava ondersteund?',
          answer: 'Strava staat in deze release niet publiek aan. WODIQ hoort alleen integraties te noemen die voor gebruikers actief zijn.'
        }
      ]
    },
    finalCta: {
      title: 'Leg je telefoon neer. Start de sessie.',
      text: 'Gebruik WODIQ wanneer de workoutkeuze is wat je tegenhoudt.',
      primaryCta: 'TestFlight starten'
    }
  }
}
