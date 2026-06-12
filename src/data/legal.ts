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
    description: 'How WODIQ handles workout, activity, analytics, and app usage data.',
    updated: 'Last updated: June 12, 2026',
    sections: [
      {
        title: 'Overview',
        body: [
          'WODIQ is a workout planning app. It helps you choose a training type, configure the session, generate a workout, save picked workouts, and optionally use connected training data.',
          'This policy explains what data is used, why it is used, the legal bases WODIQ relies on, and what choices and rights you have.'
        ]
      },
      {
        title: 'Controller and contact',
        body: [
          'WODIQ is operated by Marcel Tuinstra in Dronten, Netherlands. For privacy questions, access requests, deletion requests, or other data protection requests, contact marcel@tuinstra.dev.',
          'If WODIQ later operates through a separate legal entity, this page will be updated with the responsible controller details.'
        ]
      },
      {
        title: 'Data we process',
        body: [
          'Account and session data: WODIQ may create an anonymous device session so the app can remember picked workouts, feedback, preferences, and usage limits. If sign-in is enabled later, account identifiers may be linked to the same app user.',
          'Workout data: selected sport, duration preference, warm-up and cooldown choices, optional guidance notes, generated workout content, picked workouts, shared workout links, and workout feedback.',
          'Connected provider data: if you connect Garmin or another enabled provider, WODIQ may sync recent activities and related training context such as activity type, duration, distance, heart-rate summaries, recovery, sleep, stress, HRV, or similar metrics when available from the provider.',
          'Apple Health data: in the native iOS app, WODIQ can import workout summaries after you grant Apple Health read permission. WODIQ imports normalized workout fields such as type, date, duration, distance, calories, and heart-rate summaries when available.',
          'Diagnostics: WODIQ may collect technical diagnostics such as errors, app version, device/platform information, and operational logs to keep the app reliable.'
        ]
      },
      {
        title: 'Legal bases and purposes',
        body: [
          'WODIQ processes app and session data to provide the app experience, remember selected workouts, enforce usage limits, and keep your training history available. The legal basis is performance of the service you request or WODIQ’s legitimate interest in operating the app.',
          'WODIQ processes connected provider and Apple Health data only after you choose to connect that source or grant the relevant platform permission. The legal basis is your consent and the service request you make by connecting the provider.',
          'WODIQ processes diagnostics and security logs based on legitimate interests in reliability, abuse prevention, and service security.',
          'WODIQ processes website analytics only after you consent to analytics cookies or similar storage on wodiq.nl. You can reject analytics and still use the website.'
        ]
      },
      {
        title: 'AI workout generation',
        body: [
          'WODIQ may send structured workout context to an AI provider to generate workouts or coach-style reviews. This context can include your selected workout settings, optional guidance notes, and normalized training summaries when those are needed for the requested output.',
          'Raw provider payloads should not be sent directly to the AI provider; WODIQ uses normalized summaries and app context. Optional guidance notes that you type into the app may be included because they are part of the workout instructions.',
          'Do not submit sensitive medical information, secrets, or information you do not have permission to use. WODIQ uses AI output for training guidance only, not for medical advice.'
        ]
      },
      {
        title: 'Providers and integrations',
        body: [
          'Garmin and other training providers are optional. You can use WODIQ without connecting them. If you connect a provider, WODIQ uses the connection to sync training context for your workouts.',
          'Sign in with Apple and Apple Health are separate permissions. Apple login identifies your WODIQ account; Apple Health permission is requested locally on your iPhone before workouts are imported. WODIQ reads workout-related HealthKit data only and does not write to Apple Health in this release.',
          'Provider accounts and platform permissions are also governed by the terms and privacy notices of the relevant provider or platform. Disconnecting a provider stops future sync where supported and removes associated imported provider data from WODIQ where the app supports removal.'
        ]
      },
      {
        title: 'Cookies and website analytics',
        body: [
          'The WODIQ marketing website uses necessary local storage to remember cookie preferences. This storage is required to respect your choice and does not require analytics consent.',
          'WODIQ loads Google Analytics 4 on wodiq.nl only after you accept analytics cookies. Analytics helps understand aggregate website traffic, page usage, language choice, and TestFlight or web-app CTA clicks.',
          'Google Analytics may process technical information such as page URL, referrer, approximate location, device/browser information, and interaction events. WODIQ configures IP anonymization where supported. You can reject analytics in the cookie banner or reopen cookie preferences later.'
        ]
      },
      {
        title: 'Sharing and recipients',
        body: [
          'If you create a share link, the workout linked to that URL can be viewed by anyone with the link. Shared workout pages should not include your personal coach review.',
          'WODIQ may use service providers for hosting, analytics after consent, diagnostics, provider sync, payment or app-store handling when paid plans are active, and AI generation. These providers process data only for the relevant service purpose.'
        ]
      },
      {
        title: 'International transfers',
        body: [
          'Some providers used for hosting, analytics, diagnostics, or AI generation may process data outside the European Economic Area. Where required, WODIQ relies on appropriate safeguards such as data processing agreements, standard contractual clauses, or provider transfer mechanisms.',
          'WODIQ aims to minimize the data sent to external providers and to avoid sending raw connected-provider payloads to AI providers.'
        ]
      },
      {
        title: 'Retention and deletion',
        body: [
          'WODIQ keeps app data for as long as needed to provide the app experience, maintain workout history, operate the service, handle deletion or support requests, and meet security or legal obligations.',
          'Workout history, generated workouts, provider imports, and account-linked data are kept until they are removed in the app, disconnected where supported, or deletion is requested and completed. Diagnostics and operational logs are kept for the limited period needed for reliability, security, and abuse prevention.',
          'Backups may retain deleted data for a short operational period before they expire. Shared links may remain available until the linked workout is removed or the link is otherwise disabled.'
        ]
      },
      {
        title: 'Your rights',
        body: [
          'Depending on your location and the data involved, you may have the right to access, correct, delete, restrict, object to, or receive a portable copy of your personal data. You may also withdraw consent where processing is based on consent.',
          'To exercise these rights, contact marcel@tuinstra.dev. WODIQ may need to verify that the request relates to your account or device session before acting on it.',
          'If you are in the European Union or the Netherlands and believe your request was not handled properly, you can lodge a complaint with your local data protection authority, including the Dutch Autoriteit Persoonsgegevens.'
        ]
      },
      {
        title: 'Changes',
        body: [
          'WODIQ may update this policy when the product, providers, analytics setup, or legal requirements change. Material changes will be reflected by updating the date on this page and, where appropriate, by additional notice in the app or website.'
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
    description: 'Hoe WODIQ omgaat met workout-, activiteit-, analytics- en appdata.',
    updated: 'Laatst bijgewerkt: 12 juni 2026',
    sections: [
      {
        title: 'Overzicht',
        body: [
          'WODIQ is een workoutplanner. De app helpt je een trainingstype te kiezen, je sessie in te stellen, een workout te maken, gekozen workouts te bewaren en optioneel gekoppelde trainingsdata te gebruiken.',
          'Dit beleid legt uit welke data wordt gebruikt, waarom die wordt gebruikt, op welke rechtsgronden WODIQ zich baseert en welke keuzes en rechten je hebt.'
        ]
      },
      {
        title: 'Verantwoordelijke en contact',
        body: [
          'WODIQ wordt beheerd door Marcel Tuinstra in Dronten, Nederland. Voor privacyvragen, inzageverzoeken, verwijderverzoeken of andere AVG-verzoeken kun je contact opnemen via marcel@tuinstra.dev.',
          'Als WODIQ later via een aparte juridische entiteit wordt aangeboden, wordt deze pagina bijgewerkt met de gegevens van de verantwoordelijke.'
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
        title: 'Rechtsgronden en doelen',
        body: [
          'WODIQ verwerkt app- en sessiedata om de app-ervaring te leveren, gekozen workouts te onthouden, gebruikslimieten toe te passen en trainingshistorie beschikbaar te houden. De rechtsgrond is uitvoering van de gevraagde dienst of het gerechtvaardigd belang van WODIQ om de app te beheren.',
          'WODIQ verwerkt gekoppelde providerdata en Apple Health-data alleen nadat je die bron zelf koppelt of de relevante platformtoestemming geeft. De rechtsgrond is je toestemming en de dienst die je vraagt door de provider te koppelen.',
          'WODIQ verwerkt diagnostiek en beveiligingslogs op basis van gerechtvaardigde belangen voor betrouwbaarheid, misbruikpreventie en beveiliging van de service.',
          'WODIQ verwerkt website-analyse alleen nadat je toestemming geeft voor analytics-cookies of vergelijkbare opslag op wodiq.nl. Je kunt analytics weigeren en de website blijven gebruiken.'
        ]
      },
      {
        title: 'AI workoutgeneratie',
        body: [
          'WODIQ kan gestructureerde workoutcontext naar een AI-provider sturen om workouts of coachachtige reviews te maken. Deze context kan bestaan uit je gekozen workoutinstellingen, optionele notities en genormaliseerde trainingssamenvattingen wanneer die nodig zijn voor de gevraagde output.',
          'Ruwe providerpayloads horen niet direct naar de AI-provider te gaan; WODIQ gebruikt genormaliseerde samenvattingen en appcontext. Optionele notities die je in de app invult kunnen worden meegenomen, omdat ze onderdeel zijn van de workoutinstructies.',
          'Voer geen gevoelige medische informatie, geheimen of informatie waarvoor je geen toestemming hebt in. WODIQ gebruikt AI-output alleen als trainingsbegeleiding, niet als medisch advies.'
        ]
      },
      {
        title: 'Providers en koppelingen',
        body: [
          'Garmin en andere trainingsproviders zijn optioneel. Je kunt WODIQ gebruiken zonder die providers te koppelen. Als je een provider koppelt, gebruikt WODIQ de koppeling om trainingscontext voor je workouts te synchroniseren.',
          'Inloggen met Apple en Apple Health zijn aparte toestemmingen. Apple-login identificeert je WODIQ-account; Apple Health-toegang wordt lokaal op je iPhone gevraagd voordat workouts worden geïmporteerd. WODIQ leest alleen workoutgerelateerde HealthKit-data en schrijft in deze release niets naar Apple Health.',
          'Provideraccounts en platformtoestemmingen vallen ook onder de voorwaarden en privacyverklaringen van de betreffende provider of het platform. Ontkoppelen stopt toekomstige synchronisatie waar dit wordt ondersteund en verwijdert bijbehorende geïmporteerde providerdata uit WODIQ waar de app verwijdering ondersteunt.'
        ]
      },
      {
        title: 'Cookies en website-analyse',
        body: [
          'De WODIQ marketingwebsite gebruikt noodzakelijke lokale opslag om cookievoorkeuren te onthouden. Deze opslag is nodig om je keuze te respecteren en vereist geen toestemming voor analytics.',
          'WODIQ laadt Google Analytics 4 op wodiq.nl alleen nadat je analytics-cookies accepteert. Analytics helpt om geaggregeerd websiteverkeer, paginagebruik, taalkeuze en TestFlight- of webapp-CTA-kliks te begrijpen.',
          'Google Analytics kan technische informatie verwerken zoals pagina-URL, referrer, globale locatie, device/browserinformatie en interactie-events. WODIQ configureert IP-anonimisering waar dit wordt ondersteund. Je kunt analytics weigeren in de cookiebanner of cookievoorkeuren later opnieuw openen.'
        ]
      },
      {
        title: 'Delen en ontvangers',
        body: [
          'Als je een deellink maakt, kan iedereen met die link de gekoppelde workout bekijken. Gedeelde workoutpagina’s horen je persoonlijke coachreview niet te bevatten.',
          'WODIQ kan dienstverleners gebruiken voor hosting, analytics na toestemming, diagnostiek, providersynchronisatie, betaling of appstore-afhandeling wanneer betaalde plannen actief zijn, en AI-generatie. Deze partijen verwerken data alleen voor het relevante servicedoel.'
        ]
      },
      {
        title: 'Internationale doorgifte',
        body: [
          'Sommige providers voor hosting, analytics, diagnostiek of AI-generatie kunnen data buiten de Europese Economische Ruimte verwerken. Waar dat nodig is, gebruikt WODIQ passende waarborgen zoals verwerkersafspraken, standaardcontractbepalingen of overdrachtsmechanismen van de provider.',
          'WODIQ probeert de data die naar externe providers gaat te beperken en ruwe payloads van gekoppelde providers niet naar AI-providers te sturen.'
        ]
      },
      {
        title: 'Bewaren en verwijderen',
        body: [
          'WODIQ bewaart appdata zolang dit nodig is om de app-ervaring, trainingshistorie en service te leveren, verwijder- of supportverzoeken af te handelen en beveiligings- of wettelijke verplichtingen na te komen.',
          'Trainingshistorie, gegenereerde workouts, providerimports en accountgekoppelde data worden bewaard totdat ze in de app worden verwijderd, worden ontkoppeld waar dit wordt ondersteund, of een verwijderverzoek is verwerkt. Diagnostiek en operationele logs worden bewaard voor de beperkte periode die nodig is voor betrouwbaarheid, beveiliging en misbruikpreventie.',
          'Backups kunnen verwijderde data nog een korte operationele periode bevatten voordat ze verlopen. Gedeelde links kunnen beschikbaar blijven totdat de gekoppelde workout wordt verwijderd of de link op een andere manier wordt uitgeschakeld.'
        ]
      },
      {
        title: 'Je rechten',
        body: [
          'Afhankelijk van je locatie en de betrokken data kun je recht hebben op inzage, correctie, verwijdering, beperking, bezwaar of een overdraagbare kopie van je persoonsgegevens. Je kunt ook toestemming intrekken wanneer verwerking op toestemming is gebaseerd.',
          'Neem contact op via marcel@tuinstra.dev om deze rechten uit te oefenen. WODIQ kan moeten controleren dat het verzoek bij je account of device-sessie hoort voordat het wordt uitgevoerd.',
          'Als je in de Europese Unie of Nederland bent en vindt dat je verzoek niet goed is afgehandeld, kun je een klacht indienen bij je lokale toezichthouder, waaronder de Autoriteit Persoonsgegevens.'
        ]
      },
      {
        title: 'Wijzigingen',
        body: [
          'WODIQ kan dit beleid aanpassen wanneer het product, providers, analytics-instelling of wettelijke eisen veranderen. Belangrijke wijzigingen worden zichtbaar gemaakt door de datum op deze pagina bij te werken en, waar passend, via extra melding in de app of op de website.'
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
    description: 'Terms for using WODIQ, including beta access, workout guidance, subscriptions, and account rules.',
    updated: 'Last updated: June 12, 2026',
    sections: [
      {
        title: 'Using WODIQ',
        body: [
          'WODIQ provides workout planning, training structure, AI-generated workout suggestions, and related app features. You are responsible for using the app sensibly and adapting workouts to your own situation, equipment, experience, and environment.',
          'You must not use WODIQ for unlawful activity, service abuse, reverse engineering, security testing without permission, attempts to disrupt the service, or use that infringes the rights of others.'
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
          'WODIQ may let you start with an anonymous session and later link Apple or Google sign-in. You are responsible for keeping your account access secure and for activity under your account or device session.',
          'Feature availability can differ by platform, plan, app version, provider availability, beta status, and usage limits. WODIQ may suspend or limit access if the service is misused, security is at risk, or these terms are breached.'
        ]
      },
      {
        title: 'Subscriptions and beta pricing',
        body: [
          'During the TestFlight and pilot phase, WODIQ may be free to use with usage limits. Paid access is not active unless WODIQ clearly offers it through the app, an app store, or another payment provider.',
          'Paid access may later be offered through monthly or yearly subscriptions, and founding prices may differ from later public pricing. Limits, pricing, and included features can change as the product develops.',
          'Platform purchases, renewals, cancellations, refunds, and restore flows may be handled by the relevant app store or payment provider. Their terms can also apply to billing and refunds.'
        ]
      },
      {
        title: 'Generated content',
        body: [
          'AI-generated workouts can be incomplete, unsuitable, or unavailable. WODIQ keeps fallback behavior where possible, but you should review every workout before doing it.',
          'You should not submit sensitive medical information, secrets, or content you do not have permission to use in optional guidance notes. WODIQ does not guarantee a specific training result, performance improvement, or health outcome.'
        ]
      },
      {
        title: 'Sharing and user content',
        body: [
          'If you create or share a workout link, anyone with that link may be able to view the linked workout. Do not share content that you want to keep private.',
          'You remain responsible for optional notes, feedback, or other content you submit. You grant WODIQ the limited permission needed to process that content to provide the app, generate workouts, troubleshoot, and operate related features.'
        ]
      },
      {
        title: 'Intellectual property',
        body: [
          'WODIQ, the website, app interface, branding, software, and product content are owned by WODIQ or its licensors. These terms give you a limited, personal, non-transferable right to use WODIQ as provided by the app and website.',
          'You may not copy, resell, redistribute, scrape, or reverse engineer WODIQ except where the law gives you a right that cannot be excluded.'
        ]
      },
      {
        title: 'Service availability and changes',
        body: [
          'WODIQ is provided as an evolving product. Features, limits, supported providers, pricing, and availability may change, especially during beta and pilot phases.',
          'WODIQ may be unavailable because of maintenance, provider outages, app-store review, infrastructure issues, or changes by connected platforms. WODIQ does not guarantee uninterrupted availability.'
        ]
      },
      {
        title: 'No warranties and liability',
        body: [
          'WODIQ is provided on an as-is and as-available basis to the extent allowed by law. WODIQ does not guarantee that generated workouts will be correct, complete, safe for your situation, or available at all times.',
          'To the extent allowed by law, WODIQ is not liable for indirect damages, loss of data, lost profits, missed training goals, provider outages, or injuries resulting from workouts you choose to perform. Nothing in these terms limits liability where that would not be allowed by law.'
        ]
      },
      {
        title: 'Third-party providers',
        body: [
          'Garmin, Apple Health, app stores, payment providers, analytics providers, and AI providers may have their own terms and privacy notices. WODIQ is not responsible for third-party services outside WODIQ’s control.',
          'Connecting or disconnecting a provider can affect which features are available and which data WODIQ can use for workout planning.'
        ]
      },
      {
        title: 'Governing law',
        body: [
          'These terms are governed by Dutch law, unless mandatory consumer protection law gives you rights that cannot be limited. If a dispute cannot be resolved informally, it may be brought before the competent courts in the Netherlands unless mandatory law requires another forum.'
        ]
      },
      {
        title: 'Changes',
        body: [
          'WODIQ may change features, limits, pricing, supported providers, or these terms as the product develops. Continued use after changes means you accept the updated terms. Material changes will be reflected by updating the date on this page and, where appropriate, by additional notice.'
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
    description: 'Voorwaarden voor WODIQ, inclusief beta-toegang, workoutbegeleiding, abonnementen en accountregels.',
    updated: 'Laatst bijgewerkt: 12 juni 2026',
    sections: [
      {
        title: 'WODIQ gebruiken',
        body: [
          'WODIQ biedt workoutplanning, trainingsstructuur, AI-gegenereerde workoutsuggesties en gerelateerde appfuncties. Je bent zelf verantwoordelijk voor verstandig gebruik en voor het aanpassen van workouts aan je situatie, materiaal, ervaring en omgeving.',
          'Je mag WODIQ niet gebruiken voor onrechtmatige activiteiten, misbruik van de service, reverse engineering, beveiligingstests zonder toestemming, pogingen om de service te verstoren of gebruik dat rechten van anderen schendt.'
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
          'WODIQ kan je laten starten met een anonieme sessie en later Apple- of Google-login laten koppelen. Je bent verantwoordelijk voor veilige toegang tot je account en voor activiteit via je account of device-sessie.',
          'Beschikbaarheid van functies kan verschillen per platform, plan, appversie, providerbeschikbaarheid, beta-status en gebruikslimieten. WODIQ kan toegang opschorten of beperken bij misbruik, beveiligingsrisico’s of schending van deze voorwaarden.'
        ]
      },
      {
        title: 'Abonnementen en beta-prijzen',
        body: [
          'Tijdens de TestFlight- en pilotfase kan WODIQ gratis te gebruiken zijn met gebruikslimieten. Betaalde toegang is pas actief wanneer WODIQ die duidelijk aanbiedt via de app, een appstore of een andere betaalprovider.',
          'Betaalde toegang kan later worden aangeboden via maand- of jaarabonnementen, waarbij founding prices kunnen afwijken van latere publieke prijzen. Limieten, prijzen en inbegrepen functies kunnen veranderen terwijl het product zich ontwikkelt.',
          'Platformaankopen, verlengingen, annuleringen, terugbetalingen en herstel van aankopen kunnen worden afgehandeld door de betreffende appstore of betaalprovider. Hun voorwaarden kunnen ook gelden voor betaling en refunds.'
        ]
      },
      {
        title: 'Gegenereerde content',
        body: [
          'AI-gegenereerde workouts kunnen onvolledig, ongeschikt of niet beschikbaar zijn. WODIQ houdt waar mogelijk fallbackgedrag, maar je moet elke workout beoordelen voordat je die doet.',
          'Voer geen gevoelige medische informatie, geheimen of content waarvoor je geen toestemming hebt in bij optionele notities. WODIQ garandeert geen specifiek trainingsresultaat, prestatieverbetering of gezondheidsuitkomst.'
        ]
      },
      {
        title: 'Delen en gebruikerscontent',
        body: [
          'Als je een workoutlink maakt of deelt, kan iedereen met die link de gekoppelde workout bekijken. Deel geen content die privé moet blijven.',
          'Je blijft verantwoordelijk voor optionele notities, feedback of andere content die je invoert. Je geeft WODIQ de beperkte toestemming die nodig is om die content te verwerken voor de app, workoutgeneratie, foutoplossing en gerelateerde functies.'
        ]
      },
      {
        title: 'Intellectueel eigendom',
        body: [
          'WODIQ, de website, app-interface, branding, software en productcontent zijn eigendom van WODIQ of licentiegevers. Deze voorwaarden geven je een beperkt, persoonlijk en niet-overdraagbaar recht om WODIQ te gebruiken zoals aangeboden via de app en website.',
          'Je mag WODIQ niet kopiëren, doorverkopen, herdistribueren, scrapen of reverse engineeren behalve waar de wet je een recht geeft dat niet kan worden uitgesloten.'
        ]
      },
      {
        title: 'Beschikbaarheid en wijzigingen',
        body: [
          'WODIQ is een product in ontwikkeling. Functies, limieten, ondersteunde providers, prijzen en beschikbaarheid kunnen veranderen, vooral tijdens beta- en pilotfases.',
          'WODIQ kan niet beschikbaar zijn door onderhoud, storingen bij providers, appstore-review, infrastructuurproblemen of wijzigingen door gekoppelde platformen. WODIQ garandeert geen ononderbroken beschikbaarheid.'
        ]
      },
      {
        title: 'Geen garanties en aansprakelijkheid',
        body: [
          'WODIQ wordt aangeboden zoals beschikbaar en zoals het is, voor zover de wet dit toestaat. WODIQ garandeert niet dat gegenereerde workouts juist, volledig, veilig voor jouw situatie of altijd beschikbaar zijn.',
          'Voor zover de wet dit toestaat, is WODIQ niet aansprakelijk voor indirecte schade, dataverlies, winstderving, gemiste trainingsdoelen, providerstoringen of blessures door workouts die je zelf kiest uit te voeren. Niets in deze voorwaarden beperkt aansprakelijkheid waar dat wettelijk niet mag.'
        ]
      },
      {
        title: 'Derde partijen',
        body: [
          'Garmin, Apple Health, appstores, betaalproviders, analytics-providers en AI-providers kunnen eigen voorwaarden en privacyverklaringen hebben. WODIQ is niet verantwoordelijk voor diensten van derden buiten de controle van WODIQ.',
          'Het koppelen of ontkoppelen van een provider kan invloed hebben op welke functies beschikbaar zijn en welke data WODIQ kan gebruiken voor workoutplanning.'
        ]
      },
      {
        title: 'Toepasselijk recht',
        body: [
          'Op deze voorwaarden is Nederlands recht van toepassing, tenzij dwingend consumentenrecht je rechten geeft die niet kunnen worden beperkt. Als een geschil niet informeel kan worden opgelost, kan het worden voorgelegd aan de bevoegde rechter in Nederland, tenzij dwingend recht een ander forum vereist.'
        ]
      },
      {
        title: 'Wijzigingen',
        body: [
          'WODIQ kan functies, limieten, prijzen, ondersteunde providers of deze voorwaarden aanpassen terwijl het product zich ontwikkelt. Door WODIQ na wijzigingen te blijven gebruiken accepteer je de bijgewerkte voorwaarden. Belangrijke wijzigingen worden zichtbaar gemaakt door de datum op deze pagina bij te werken en, waar passend, via extra melding.'
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
