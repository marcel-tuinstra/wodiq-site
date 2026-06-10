import type { Locale } from './site'

export type LegalContent = {
  title: string
  description: string
  updated: string
  sections: Array<{
    title: string
    body: string[]
  }>
}

export const privacyContent: Record<Locale, LegalContent> = {
  en: {
    title: 'Privacy Policy',
    description: 'How WODIQ handles workout, activity, and app usage data.',
    updated: 'Last updated: June 1, 2026',
    sections: [
      {
        title: 'Overview',
        body: [
          'WODIQ is a workout planning app. It helps you choose a training type, configure the session, generate a workout, save picked workouts, and optionally use connected training data.',
          'This policy explains what data is used, why it is used, and what choices you have.'
        ]
      },
      {
        title: 'Data we process',
        body: [
          'Account and session data: WODIQ may create an anonymous device session so the app can remember picked workouts, feedback, preferences, and usage limits. If sign-in is enabled later, account identifiers may be linked to the same app user.',
          'Workout data: selected sport, duration preference, warm-up and cooldown choices, optional guidance notes, generated workout content, picked workouts, shared workout links, and workout feedback.',
          'Connected provider data: if you connect Garmin or another enabled provider, WODIQ may sync recent activities and related training context such as activity type, duration, distance, heart rate summaries, recovery, sleep, stress, HRV, or similar metrics when available from the provider.',
          'Apple Health data: in the native iOS app, WODIQ can import workout summaries after you grant Apple Health read permission. WODIQ imports normalized workout fields such as type, date, duration, distance, calories, and heart-rate summaries when available.',
          'Diagnostics: WODIQ may collect technical diagnostics such as errors, app version, device/platform information, and operational logs to keep the app reliable.'
        ]
      },
      {
        title: 'How we use data',
        body: [
          'WODIQ uses your data to generate workout suggestions, keep your training history available, connect workouts to activity context, provide coach-style feedback, sync provider data, and improve reliability.',
          'Fitness and recovery data is used for workout planning context only. WODIQ is not a medical app and does not provide medical advice.'
        ]
      },
      {
        title: 'AI workout generation',
        body: [
          'WODIQ may send structured workout context to an AI provider to generate workouts or coach-style reviews. Raw provider payloads should not be sent directly to the AI provider; WODIQ uses normalized summaries and app context.',
          'Optional guidance notes that you type into the app may be included in the generation request because they are part of the workout instructions.'
        ]
      },
      {
        title: 'Garmin connection',
        body: [
          'Garmin is optional. You can use WODIQ without connecting Garmin.',
          'If you connect Garmin, WODIQ uses the connection to sync training context for your workouts. Disconnecting Garmin removes the Garmin connection and associated Garmin data from WODIQ where supported by the app.'
        ]
      },
      {
        title: 'Apple Health import',
        body: [
          'Sign in with Apple and Apple Health are separate permissions. Apple login identifies your WODIQ account; Apple Health permission is requested locally on your iPhone before workouts are imported.',
          'WODIQ reads workout-related HealthKit data only. It does not write to Apple Health in this release.'
        ]
      },
      {
        title: 'Sharing',
        body: [
          'If you create a share link, the workout linked to that URL can be viewed by anyone with the link. Shared workout pages should not include your personal coach review.'
        ]
      },
      {
        title: 'Website analytics',
        body: [
          'WODIQ uses Google Analytics 4 on wodiq.nl when website analytics is enabled for the production build. Analytics helps understand aggregate website traffic, page usage, language choice, and TestFlight or web-app CTA clicks.',
          'Website analytics is used for the marketing website, not to generate workouts. Google Analytics may process technical information such as page URL, referrer, approximate location, device/browser information, and interaction events. WODIQ configures IP anonymization where supported.'
        ]
      },
      {
        title: 'Retention and deletion',
        body: [
          'WODIQ keeps app data for as long as needed to provide the app experience, maintain workout history, and operate the service.',
          'You can remove Garmin data by disconnecting Garmin in the app. You can remove Apple Health imports by disconnecting Apple Health in the app. You can remove enabled provider imports by disconnecting that provider in the app. For other privacy or deletion requests, contact WODIQ support.'
        ]
      },
      {
        title: 'Contact',
        body: [
          'For privacy questions or deletion requests, contact marcel@tuinstra.dev.'
        ]
      }
    ]
  },
  nl: {
    title: 'Privacybeleid',
    description: 'Hoe WODIQ omgaat met workout-, activiteit- en appdata.',
    updated: 'Laatst bijgewerkt: 1 juni 2026',
    sections: [
      {
        title: 'Overzicht',
        body: [
          'WODIQ is een workoutplanner. De app helpt je een trainingstype te kiezen, je sessie in te stellen, een workout te maken, gekozen workouts te bewaren en optioneel gekoppelde trainingsdata te gebruiken.',
          'Dit beleid legt uit welke data wordt gebruikt, waarom die wordt gebruikt en welke keuzes je hebt.'
        ]
      },
      {
        title: 'Data die we verwerken',
        body: [
          'Account- en sessiedata: WODIQ kan een anonieme device-sessie maken zodat de app gekozen workouts, feedback, voorkeuren en gebruikslimieten kan onthouden. Als inloggen later actief is, kunnen accountgegevens aan dezelfde appgebruiker worden gekoppeld.',
          'Workoutdata: gekozen sport, duurvoorkeur, warm-up- en cooldownkeuzes, optionele notities, gegenereerde workoutinhoud, gekozen workouts, gedeelde workoutlinks en workoutfeedback.',
          'Gekoppelde providerdata: als je Garmin of een andere actieve provider koppelt, kan WODIQ recente activiteiten en trainingscontext synchroniseren, zoals activiteitstype, duur, afstand, hartslagsamenvattingen, herstel, slaap, stress, HRV of vergelijkbare metrics wanneer die beschikbaar zijn.',
            'Apple Health-data: in de native iOS-app kan WODIQ workoutsamenvattingen importeren nadat je Apple Health-leestoegang geeft. WODIQ importeert genormaliseerde workoutvelden zoals type, datum, duur, afstand, calorieën en hartslagsamenvattingen wanneer beschikbaar.',
          'Diagnostiek: WODIQ kan technische diagnostiek verzamelen, zoals fouten, appversie, device/platforminformatie en operationele logs om de app betrouwbaar te houden.'
        ]
      },
      {
        title: 'Hoe we data gebruiken',
        body: [
          'WODIQ gebruikt je data om workoutsuggesties te maken, je trainingshistorie beschikbaar te houden, workouts aan activiteitcontext te koppelen, coachachtige feedback te geven, providerdata te synchroniseren en betrouwbaarheid te verbeteren.',
          'Fitness- en hersteldata wordt alleen gebruikt als context voor workoutplanning. WODIQ is geen medische app en geeft geen medisch advies.'
        ]
      },
      {
        title: 'AI workoutgeneratie',
        body: [
          'WODIQ kan gestructureerde workoutcontext naar een AI-provider sturen om workouts of coachachtige reviews te maken. Ruwe providerpayloads horen niet direct naar de AI-provider te gaan; WODIQ gebruikt genormaliseerde samenvattingen en appcontext.',
          'Optionele notities die je in de app invult kunnen worden meegenomen in de generatieaanvraag, omdat ze onderdeel zijn van de workoutinstructies.'
        ]
      },
      {
        title: 'Garmin-koppeling',
        body: [
          'Garmin is optioneel. Je kunt WODIQ gebruiken zonder Garmin te koppelen.',
          'Als je Garmin koppelt, gebruikt WODIQ de koppeling om trainingscontext voor je workouts te synchroniseren. Garmin ontkoppelen verwijdert de Garmin-koppeling en bijbehorende Garmin-data uit WODIQ waar de app dit ondersteunt.'
        ]
      },
      {
        title: 'Apple Health-import',
        body: [
            'Inloggen met Apple en Apple Health zijn aparte toestemmingen. Apple-login identificeert je WODIQ-account; Apple Health-toegang wordt lokaal op je iPhone gevraagd voordat workouts worden geïmporteerd.',
          'WODIQ leest alleen workoutgerelateerde HealthKit-data. In deze release schrijft WODIQ niets naar Apple Health.'
        ]
      },
      {
        title: 'Delen',
        body: [
          'Als je een deellink maakt, kan iedereen met die link de gekoppelde workout bekijken. Gedeelde workoutpagina’s horen je persoonlijke coachreview niet te bevatten.'
        ]
      },
      {
        title: 'Website-analyse',
        body: [
          'WODIQ gebruikt Google Analytics 4 op wodiq.nl wanneer website-analyse is ingeschakeld voor de production build. Analytics helpt om geaggregeerd websiteverkeer, paginagebruik, taalkeuze en TestFlight- of webapp-CTA-kliks te begrijpen.',
          'Website-analyse wordt gebruikt voor de marketingwebsite, niet om workouts te genereren. Google Analytics kan technische informatie verwerken zoals pagina-URL, referrer, globale locatie, device/browserinformatie en interactie-events. WODIQ configureert IP-anonimisering waar dit wordt ondersteund.'
        ]
      },
      {
        title: 'Bewaren en verwijderen',
        body: [
          'WODIQ bewaart appdata zolang dit nodig is om de app-ervaring, trainingshistorie en service te leveren.',
          'Je kunt Garmin-data verwijderen door Garmin in de app te ontkoppelen. Je kunt Apple Health-imports verwijderen door Apple Health in de app te ontkoppelen. Je kunt imports van actieve providers verwijderen door die provider in de app te ontkoppelen. Neem voor andere privacy- of verwijderverzoeken contact op met WODIQ support.'
        ]
      },
      {
        title: 'Contact',
        body: [
          'Voor privacyvragen of verwijderverzoeken kun je contact opnemen via marcel@tuinstra.dev.'
        ]
      }
    ]
  }
}

export const termsContent: Record<Locale, LegalContent> = {
  en: {
    title: 'Terms of Use',
    description: 'The basic terms for using WODIQ.',
    updated: 'Last updated: June 9, 2026',
    sections: [
      {
        title: 'Using WODIQ',
        body: [
          'WODIQ provides workout planning, training structure, and related app features. You are responsible for using the app sensibly and adapting workouts to your own situation, equipment, experience, and environment.',
          'You must not use WODIQ for unlawful activity, service abuse, reverse engineering, security testing without permission, or attempts to disrupt the service.'
        ]
      },
      {
        title: 'Fitness guidance',
        body: [
          'WODIQ is not a medical app and does not provide medical advice, diagnosis, treatment, or emergency support.',
          'Generated workouts and coach-style reviews are training guidance only. Stop exercising and seek qualified help if you experience pain, illness, dizziness, or unsafe conditions.'
        ]
      },
      {
        title: 'Accounts and access',
        body: [
          'WODIQ may let you start with an anonymous session and later link Apple or Google sign-in. You are responsible for keeping your account access secure.',
          'Feature availability can differ by platform, plan, app version, provider availability, and beta status.'
        ]
      },
      {
        title: 'Subscriptions and beta pricing',
        body: [
          'During the TestFlight and pilot phase, WODIQ may be free to use with usage limits. Paid access may later be offered through monthly or yearly subscriptions, and founding prices may differ from later public pricing.',
          'Platform purchases, renewals, cancellations, refunds, and restore flows may be handled by the relevant app store or payment provider.'
        ]
      },
      {
        title: 'Generated content',
        body: [
          'AI-generated workouts can be incomplete, unsuitable, or unavailable. WODIQ keeps fallback behavior where possible, but you should review every workout before doing it.',
          'You should not submit sensitive medical information, secrets, or content you do not have permission to use in optional guidance notes.'
        ]
      },
      {
        title: 'Changes',
        body: [
          'WODIQ may change features, limits, pricing, supported providers, or these terms as the product develops. Continued use after changes means you accept the updated terms.'
        ]
      },
      {
        title: 'Contact',
        body: [
          'For questions about these terms, contact marcel@tuinstra.dev.'
        ]
      }
    ]
  },
  nl: {
    title: 'Gebruiksvoorwaarden',
    description: 'De basisvoorwaarden voor het gebruik van WODIQ.',
    updated: 'Laatst bijgewerkt: 9 juni 2026',
    sections: [
      {
        title: 'WODIQ gebruiken',
        body: [
          'WODIQ biedt workoutplanning, trainingsstructuur en gerelateerde appfuncties. Je bent zelf verantwoordelijk voor verstandig gebruik en voor het aanpassen van workouts aan je situatie, materiaal, ervaring en omgeving.',
          'Je mag WODIQ niet gebruiken voor onrechtmatige activiteiten, misbruik van de service, reverse engineering, beveiligingstests zonder toestemming of pogingen om de service te verstoren.'
        ]
      },
      {
        title: 'Fitnessbegeleiding',
        body: [
          'WODIQ is geen medische app en geeft geen medisch advies, diagnose, behandeling of noodhulp.',
          'Gegenereerde workouts en coachachtige reviews zijn alleen trainingsbegeleiding. Stop met trainen en zoek gekwalificeerde hulp bij pijn, ziekte, duizeligheid of onveilige omstandigheden.'
        ]
      },
      {
        title: 'Accounts en toegang',
        body: [
          'WODIQ kan je laten starten met een anonieme sessie en later Apple- of Google-login laten koppelen. Je bent verantwoordelijk voor veilige toegang tot je account.',
          'Beschikbaarheid van functies kan verschillen per platform, plan, appversie, providerbeschikbaarheid en beta-status.'
        ]
      },
      {
        title: 'Abonnementen en beta-prijzen',
        body: [
          'Tijdens de TestFlight- en pilotfase kan WODIQ gratis te gebruiken zijn met gebruikslimieten. Betaalde toegang kan later worden aangeboden via maand- of jaarabonnementen, waarbij founding prices kunnen afwijken van latere publieke prijzen.',
          'Platformaankopen, verlengingen, annuleringen, terugbetalingen en herstel van aankopen kunnen worden afgehandeld door de betreffende appstore of betaalprovider.'
        ]
      },
      {
        title: 'Gegenereerde content',
        body: [
          'AI-gegenereerde workouts kunnen onvolledig, ongeschikt of niet beschikbaar zijn. WODIQ houdt waar mogelijk fallbackgedrag, maar je moet elke workout beoordelen voordat je die doet.',
          'Voer geen gevoelige medische informatie, geheimen of content waarvoor je geen toestemming hebt in bij optionele notities.'
        ]
      },
      {
        title: 'Wijzigingen',
        body: [
          'WODIQ kan functies, limieten, prijzen, ondersteunde providers of deze voorwaarden aanpassen terwijl het product zich ontwikkelt. Door WODIQ na wijzigingen te blijven gebruiken accepteer je de bijgewerkte voorwaarden.'
        ]
      },
      {
        title: 'Contact',
        body: [
          'Voor vragen over deze voorwaarden kun je contact opnemen via marcel@tuinstra.dev.'
        ]
      }
    ]
  }
}
