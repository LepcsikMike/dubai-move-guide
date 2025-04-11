
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileDown, Check, Info, ArrowRight, ExternalLink } from 'lucide-react';

const StepByStepGuide = () => {
  const [activeTab, setActiveTab] = useState("visas");
  
  const tabs = [
    { id: "visas", label: "Visum & Rechtliches", icon: "📝" },
    { id: "housing", label: "Wohnen", icon: "🏠" },
    { id: "jobs", label: "Arbeit finden", icon: "💼" },
    { id: "healthcare", label: "Gesundheit", icon: "🏥" },
    { id: "education", label: "Bildung", icon: "🎓" },
    { id: "banking", label: "Banking & Finanzen", icon: "💰" },
    { id: "culture", label: "Kultur & Lifestyle", icon: "🌴" }
  ];

  const tabContent = {
    visas: {
      title: "Visa & rechtliche Anforderungen navigieren",
      intro: "Die Beschaffung des richtigen Visums ist der erste und wichtigste Schritt Ihrer Dubai-Umzugsreise. Es gibt verschiedene Visumoptionen für Deutsche, die nach Dubai ziehen, jede mit spezifischen Anforderungen und Vorteilen.",
      steps: [
        {
          title: "Wählen Sie den richtigen Visumtyp",
          content: "Als deutscher Staatsbürger haben Sie mehrere Visumoptionen für Dubai:",
          list: [
            "Arbeitsvisum: Gesponsert von Ihrem Arbeitgeber in Dubai",
            "Investorenvisum: Für diejenigen, die ein Unternehmen gründen oder in ein Unternehmen investieren",
            "Immobilieneigentümervisum: Verfügbar beim Kauf einer Immobilie im Wert von mehr als 1 Million AED",
            "Rentenvisum: Für Personen ab 55 Jahren mit bestimmten finanziellen Anforderungen",
            "Remote-Work-Visum: Für digitale Nomaden und Remote-Arbeiter",
            "Golden Visa: Langzeitaufenthalt (5-10 Jahre) für Investoren, Unternehmer und Spezialisten"
          ]
        },
        {
          title: "Sammeln Sie die erforderlichen Dokumente",
          content: "Unabhängig vom Visumtyp benötigen Sie in der Regel:",
          list: [
            "Gültiger deutscher Reisepass mit mindestens 6 Monaten Gültigkeit",
            "Passfotos mit weißem Hintergrund",
            "Ausgefülltes Visumantragsformular",
            "Krankenversicherungsbescheinigung gültig in den VAE",
            "Zusätzliche Dokumente je nach Visumtyp (Arbeitsvertrag, Immobilienurkunde usw.)",
            "Polizeiliches Führungszeugnis aus Deutschland (für einige Visumtypen)"
          ]
        },
        {
          title: "Medizinische Untersuchung durchführen",
          content: "Die meisten Aufenthaltsvisa erfordern einen medizinischen Eignungstest in Dubai, der Folgendes umfasst:",
          list: [
            "Bluttests auf Infektionskrankheiten",
            "Röntgenaufnahme der Brust",
            "Allgemeine Gesundheitsuntersuchung"
          ]
        },
        {
          title: "Emirates ID beantragen",
          content: "Nach Genehmigung des Visums müssen Sie eine Emirates ID-Karte beantragen, die für alle Einwohner der VAE obligatorisch ist. Der Prozess umfasst:",
          list: [
            "Ausfüllen eines Antragsformulars",
            "Bereitstellung biometrischer Daten (Fingerabdrücke und Foto)",
            "Zahlung der entsprechenden Gebühr",
            "Abholung Ihrer ID-Karte nach der Bearbeitung"
          ]
        }
      ],
      tips: [
        "Beginnen Sie den Visumsprozess mindestens 2-3 Monate vor Ihrem geplanten Umzug",
        "Erwägen Sie die Nutzung eines seriösen Rechtsdienstes zur Navigation durch den Visumsprozess",
        "Bewahren Sie digitale Kopien aller Ihrer Dokumente an einem sicheren Ort auf",
        "Prüfen Sie die neuesten Visabestimmungen, da sich diese ändern können"
      ],
      resources: [
        {
          title: "Visum-Antrags-Checkliste",
          link: "/ressourcen#visa-checklist",
          type: "checklist"
        },
        {
          title: "Offizielles VAE-Regierungsportal",
          link: "https://u.ae/en/information-and-services/visa-and-emirates-id",
          type: "external"
        }
      ]
    },
    housing: {
      title: "Ihr ideales Zuhause in Dubai finden",
      intro: "Dubai bietet vielfältige Wohnmöglichkeiten, von luxuriösen Apartments am Wasser bis hin zu familienfreundlichen Villenanlagen. Das Verständnis des Immobilienmarktes und der Nachbarschaften wird Ihnen helfen, das perfekte Zuhause für Ihre Bedürfnisse und Ihr Budget zu finden.",
      steps: [
        {
          title: "Verstehen Sie Dubais Nachbarschaften",
          content: "Dubais Viertel variieren stark in Charakter, Annehmlichkeiten und Preis:",
          list: [
            "Downtown Dubai: Zentrale Lage, Luxusapartments, in der Nähe des Burj Khalifa",
            "Dubai Marina: Wohnen am Wasser mit europäischem Flair, beliebt bei Expats",
            "Palm Jumeirah: Ikonischer Standort, Luxusvillen und Apartments",
            "Jumeirah: Traditionelles gehobenes Viertel mit Villen und Stränden",
            "Arabian Ranches: Familienfreundliche Villengemeinschaft mit Grünflächen",
            "Dubai Hills: Neuere Entwicklung mit modernen Villen und Apartments",
            "JLT/JVC: Erschwinglichere Apartmentoptionen, beliebt bei jungen Berufstätigen"
          ]
        },
        {
          title: "Entscheiden Sie zwischen Mieten und Kaufen",
          content: "Beide Optionen haben Vorteile in Dubai:",
          list: [
            "Mieten: Mehr Flexibilität, keine Wartungsverantwortung, geringere Anfangskosten",
            "Kaufen: Langfristige Investition, Potenzial für Kapitalwachstum, Berechtigung für das Immobilieneigentümervisum",
            "Die meisten Mietverträge erfordern Zahlung in 1-4 Schecks jährlich (weniger Schecks bedeuten typischerweise niedrigere Miete)",
            "5% Anzahlung für Erstkäufer (25% für Nicht-Einwohner)",
            "4% Immobilienregistrierungsgebühr plus Maklergebühren (typischerweise 2%) beim Kauf"
          ]
        },
        {
          title: "Arbeiten Sie mit einem seriösen Makler",
          content: "Ein guter Immobilienmakler in Dubai ist unerlässlich:",
          list: [
            "Überprüfen Sie, ob der Makler eine RERA-Nummer (Real Estate Regulatory Agency) hat",
            "Bitten Sie andere Auswanderer um Empfehlungen",
            "Führen Sie Gespräche mit mehreren Maklern, um einen zu finden, der Ihre Bedürfnisse versteht",
            "Klären Sie die Gebührenstruktur im Voraus (typischerweise 5% der Jahresmiete oder 2% des Kaufpreises)"
          ]
        },
        {
          title: "Verstehen Sie den Miet-/Kaufprozess",
          content: "Seien Sie auf Dubais einzigartige Immobilienprozesse vorbereitet:",
          list: [
            "Für Mieten: Mietvertrag unterschreiben, Kaution hinterlegen (5-10%), Maklergebühr zahlen",
            "Für den Kauf: Angebot abgeben, MOU unterzeichnen, Anzahlung leisten, Immobilienregistrierung abschließen",
            "DEWA-Konto (Dubai Electricity and Water Authority) einrichten",
            "Bei Ihrer Gebäudeverwaltung für Zugangskarten und Annehmlichkeiten registrieren",
            "Erwägen Sie die Beauftragung professioneller Reinigungsdienste vor dem Einzug"
          ]
        }
      ],
      tips: [
        "Besichtigen Sie mehrere Immobilien und Nachbarschaften, bevor Sie sich entscheiden",
        "Berücksichtigen Sie die Pendelzeiten zur Arbeit oder zu Schulen",
        "Überprüfen Sie die Annehmlichkeiten des Gebäudes (Pool, Fitnessstudio, Parkplatz) und die Wartungsqualität",
        "Verhandeln Sie! Preise sind oft verhandelbar in Dubais wettbewerbsintensivem Markt",
        "Lesen Sie Online-Bewertungen von Gebäuden und Gemeinschaften, bevor Sie sich festlegen"
      ],
      resources: [
        {
          title: "Dubai Nachbarschaftsführer",
          link: "/ressourcen#neighborhood-guide",
          type: "checklist"
        },
        {
          title: "Mietprozess-Erklärer",
          link: "/ressourcen#rental-guide",
          type: "checklist"
        }
      ]
    },
    jobs: {
      title: "Beschäftigungsmöglichkeiten in Dubai finden",
      intro: "Dubai bietet hervorragende Karriereaussichten für qualifizierte Deutsche in verschiedenen Branchen. Das Verständnis des Arbeitsmarktes und des Bewerbungsprozesses wird Ihnen helfen, eine lohnende Position mit wettbewerbsfähiger Vergütung zu sichern.",
      steps: [
        {
          title: "Verstehen Sie den Arbeitsmarkt für Deutsche",
          content: "Deutsche Fachkräfte sind in Dubai besonders in diesen Sektoren sehr geschätzt:",
          list: [
            "Ingenieurwesen und Fertigung (besonders Automobil und Bau)",
            "Finanzen und Bankwesen",
            "Informationstechnologie und digitale Transformation",
            "Erneuerbare Energien und Nachhaltigkeit",
            "Gesundheitswesen und Medizintechnik",
            "Gastgewerbe und Tourismus",
            "Bildung (besonders für Deutschsprachspezialisten)"
          ]
        },
        {
          title: "Bereiten Sie Ihre Bewerbungsunterlagen vor",
          content: "Passen Sie Ihre Bewerbung an den Dubai-Markt an:",
          list: [
            "Aktualisieren Sie Ihren Lebenslauf auf Englisch und heben Sie internationale Erfahrungen hervor",
            "Fügen Sie ein professionelles Foto auf Ihrem Lebenslauf hinzu (übliche Praxis in den VAE)",
            "Beschaffen Sie übersetzte und beglaubigte Kopien Ihrer Qualifikationen",
            "Bereiten Sie ein überzeugendes Anschreiben vor, das Ihre einzigartigen Fähigkeiten hervorhebt",
            "Erstellen Sie ein starkes LinkedIn-Profil, da viele Personalvermittler die Plattform nutzen",
            "Sammeln Sie Referenzschreiben von früheren Arbeitgebern"
          ]
        },
        {
          title: "Erkunden Sie Jobsuchkanäle",
          content: "Nutzen Sie mehrere Kanäle, um Ihre Möglichkeiten zu maximieren:",
          list: [
            "Spezialisierte Jobportale wie GulfTalent, Bayt und Indeed UAE",
            "LinkedIn-Jobs-Bereich mit Dubai-Standortfilter",
            "Deutscher Wirtschaftsrat und Deutsch-Emiratischer Gemeinsamer Rat für Industrie und Handel",
            "Branchenspezifische Networking-Events und Ausstellungen",
            "Direktbewerbungen auf Unternehmenskarrieresseiten",
            "Seriöse Personalvermittlungen, die auf Ihr Fachgebiet spezialisiert sind"
          ]
        },
        {
          title: "Verstehen Sie Beschäftigungspakete",
          content: "Dubai-Vergütungspakete beinhalten oft:",
          list: [
            "Grundgehalt (steuerfrei in den VAE)",
            "Wohnzulage oder bereitgestellte Unterkunft",
            "Transportzulage oder Firmenwagen",
            "Krankenversicherung (obligatorisch für alle Mitarbeiter)",
            "Jährliche Flugtickets in Ihr Heimatland",
            "Bildungszulage für Kinder (in höheren Positionen)",
            "Dienstzeitabschlussvergütung (Abfindungszahlung basierend auf Dienstjahren)"
          ]
        }
      ],
      tips: [
        "Networking ist entscheidend—viele Positionen werden über Kontakte besetzt",
        "Erwägen Sie die Anreise mit einem Besuchsvisum für persönliche Vorstellungsgespräche, wenn möglich",
        "Seien Sie auf Videointerviews vorbereitet aufgrund der Entfernung",
        "Recherchieren Sie typische Gehaltsspannen für Ihre Position, um effektiv zu verhandeln",
        "Bedenken Sie, dass Arbeitsverträge in den VAE rechtlich bindende Dokumente sind"
      ],
      resources: [
        {
          title: "Dubai Gehaltsführer",
          link: "/ressourcen#salary-guide",
          type: "checklist"
        },
        {
          title: "Vorstellungsgespräch-Vorbereitung",
          link: "/ressourcen#interview-prep",
          type: "checklist"
        }
      ]
    },
    healthcare: {
      title: "Das Gesundheitssystem in Dubai navigieren",
      intro: "Dubai bietet erstklassige Gesundheitseinrichtungen mit vielen internationalen und deutschsprachigen medizinischen Fachkräften. Das Verständnis des Gesundheitssystems und der Versicherungsoptionen ist wesentlich für die Erhaltung Ihres Wohlbefindens in Ihrer neuen Heimat.",
      steps: [
        {
          title: "Verstehen Sie das Gesundheitssystem",
          content: "Dubais Gesundheitssystem kombiniert öffentliche und private Einrichtungen:",
          list: [
            "Öffentliche Gesundheitsversorgung durch Dubai Health Authority (DHA) Einrichtungen",
            "Zahlreiche private Krankenhäuser und Kliniken, viele mit internationaler Akkreditierung",
            "Krankenversicherung ist für alle Einwohner obligatorisch",
            "Notdienste sind unter 998 oder 999 erreichbar",
            "Apotheken sind weit verbreitet, viele haben rund um die Uhr geöffnet",
            "Elektronisches Patientenaktensystem verbindet viele Einrichtungen"
          ]
        },
        {
          title: "Krankenversicherung abschließen",
          content: "Krankenversicherungsanforderungen in Dubai:",
          list: [
            "Arbeitgeber müssen eine Grundversicherung für Mitarbeiter bereitstellen",
            "Sponsoren müssen Versicherung für Abhängige bereitstellen",
            "Basispläne decken wesentliche Behandlungen und Notfallversorgung ab",
            "Premium-Pläne bieten umfassendere Deckung und niedrigere Zuzahlungen",
            "Erwägen Sie zusätzliche Deckung für spezifische Bedürfnisse (Zahnbehandlung, Mutterschaft, etc.)",
            "Prüfen Sie, ob Ihr Plan medizinische Evakuierung oder Behandlung im Ausland einschließt"
          ]
        },
        {
          title: "Finden Sie Gesundheitsdienstleister",
          content: "Ressourcen zum Finden der richtigen Gesundheitsdienstleister:",
          list: [
            "Fragen Sie Ihre Versicherungsgesellschaft nach ihrem Netzwerk von Anbietern",
            "Suchen Sie Empfehlungen von anderen Deutschen in Dubai",
            "Recherchieren Sie Krankenhäuser mit deutschsprachigem Personal",
            "Berücksichtigen Sie medizinische Einrichtungen in der Nähe Ihres Wohnorts oder Arbeitsplatzes",
            "Überprüfen Sie Bewertungen und Akkreditierungen von Anbietern",
            "Vereinbaren Sie Kennenlerngespräche mit potenziellen Hausärzten"
          ]
        },
        {
          title: "Bringen Sie medizinische Unterlagen und Medikamente mit",
          content: "Bereiten Sie Ihre medizinischen Informationen vor:",
          list: [
            "Besorgen Sie Kopien wichtiger medizinischer Unterlagen, übersetzt ins Englische",
            "Bringen Sie einen ausreichenden Vorrat Ihrer aktuellen Medikamente mit",
            "Überprüfen Sie, ob Ihre Medikamente in den VAE erhältlich sind (einige Medikamente mit Betäubungsmitteln könnten eingeschränkt sein)",
            "Holen Sie Rezepte für chronische Erkrankungen von Ihrem deutschen Arzt",
            "Bringen Sie Impfnachweise mit, besonders für Kinder",
            "Erwägen Sie eine medizinische Vorabreise-Untersuchung in Deutschland"
          ]
        }
      ],
      tips: [
        "Registrieren Sie sich kurz nach der Ankunft bei einem Hausarzt",
        "Bewahren Sie digitale Kopien Ihrer Versicherungskarte und wichtiger medizinischer Dokumente auf",
        "Lernen Sie grundlegende medizinische Begriffe auf Englisch, wenn Sie nicht fließend sind",
        "Verstehen Sie die Zuzahlungs- und Erstattungsverfahren Ihrer Versicherungspolice",
        "Erwägen Sie Telemedizin-Optionen für die Verbindung mit deutschen Ärzten"
      ],
      resources: [
        {
          title: "Gesundheitseinrichtungsführer",
          link: "/ressourcen#healthcare-guide",
          type: "checklist"
        },
        {
          title: "Versicherungsvergleichstool",
          link: "/ressourcen#insurance-tool",
          type: "checklist"
        }
      ]
    },
    education: {
      title: "Bildungsoptionen für Familien in Dubai",
      intro: "Dubai bietet eine breite Palette an Bildungsmöglichkeiten für Familien, von internationalen Schulen, die verschiedenen Lehrplänen folgen, bis hin zu deutschspezifischer Bildung. Die richtige Schule für Ihre Kinder zu finden, ist ein wichtiger Teil einer erfolgreichen Umsiedelung.",
      steps: [
        {
          title: "Verstehen Sie die Schuloptionen",
          content: "Dubai bietet vielfältige Bildungsmöglichkeiten:",
          list: [
            "Internationale Schulen, die britischen, amerikanischen, IB und anderen Lehrplänen folgen",
            "Deutsche Internationale Schule Dubai",
            "Schweizer Internationale Wissenschaftsschule (bietet deutschen Zweig)",
            "Öffentliche Schulen (hauptsächlich für VAE-Staatsangehörige, können aber Expats aufnehmen)",
            "Kinderkrippen und Kindergärten für frühkindliche Bildung",
            "Einrichtungen für sonderpädagogische Förderung",
            "Universitäten und Hochschuleinrichtungen"
          ]
        },
        {
          title: "Recherchieren und Schulen auswählen",
          content: "Die richtige Schule zu finden erfordert Recherche:",
          list: [
            "Berücksichtigen Sie den Bildungshintergrund und die Zukunftspläne Ihres Kindes",
            "Recherchieren Sie Schulstandorte in Bezug auf Ihr Zuhause und Ihren Arbeitsplatz",
            "Überprüfen Sie KHDA-Bewertungen (Knowledge and Human Development Authority)",
            "Vergleichen Sie Gebührenstrukturen und zusätzliche Kosten",
            "Besuchen Sie Schulen und treffen Sie sich mit Aufnahmeteams",
            "Sprechen Sie mit aktuellen Eltern über ihre Erfahrungen",
            "Berücksichtigen Sie Wartelisten für beliebte Schulen"
          ]
        },
        {
          title: "Verstehen Sie den Aufnahmeprozess",
          content: "Schulanmeldungen in Dubai erfordern typischerweise:",
          list: [
            "Anmeldeformulare und Registrierungsgebühren",
            "Frühere Schulberichte und Zeugnisse",
            "Bewertungstests für die meisten Schulen",
            "Gespräche mit Schülern und manchmal Eltern",
            "Medizinische Unterlagen und Impfbescheinigungen",
            "Passkopien und Aufenthaltsvisum-Informationen",
            "Einschreibungsdepot zur Sicherung eines Platzes"
          ]
        },
        {
          title: "Bereiten Sie sich auf den Übergang vor",
          content: "Helfen Sie Ihrem Kind, sich an die neue Schule anzupassen:",
          list: [
            "Besprechen Sie den Umzug offen und positiv mit Ihren Kindern",
            "Nehmen Sie Kontakt mit anderen Familien derselben Schule auf",
            "Nehmen Sie an Orientierungsprogrammen und Willkommensveranstaltungen teil",
            "Bereiten Sie sich auf einen anderen akademischen Kalender vor (typischerweise August-Juni)",
            "Beachten Sie Uniformanforderungen und Kleiderordnungen",
            "Verstehen Sie Transportmöglichkeiten (Schulbus oder privat)",
            "Richten Sie außerschulische Aktivitäten ein, um die Integration zu unterstützen"
          ]
        }
      ],
      tips: [
        "Bewerben Sie sich frühzeitig an Schulen, da beliebte Schulen schnell ausgebucht sind",
        "Planen Sie für Bildungskosten, die in Dubai erheblich sind",
        "Berücksichtigen Sie die Unterrichtssprache und verfügbare Sprachunterstützung",
        "Prüfen Sie, ob der Lehrplan einen einfachen Übergang zurück zu deutschen Schulen ermöglicht, falls nötig",
        "Informieren Sie sich über außerschulische Aktivitäten und Gemeinschaftsbeteiligung"
      ],
      resources: [
        {
          title: "Schulvergleich-Checkliste",
          link: "/ressourcen#school-checklist",
          type: "checklist"
        },
        {
          title: "Bildungsübergangsführer",
          link: "/ressourcen#education-transition",
          type: "checklist"
        }
      ]
    },
    banking: {
      title: "Ihre Finanzen in Dubai einrichten",
      intro: "Das Verständnis des Bankensystems in Dubai und die effiziente Verwaltung Ihrer Finanzen ist entscheidend für einen reibungslosen Übergang. Von der Eröffnung von Bankkonten bis zur Verwaltung internationaler Überweisungen - hier ist alles, was Sie wissen müssen.",
      steps: [
        {
          title: "Wählen Sie die richtige Bank",
          content: "Dubai bietet viele Bankoptionen, darunter:",
          list: [
            "Lokale Banken: Emirates NBD, Dubai Islamic Bank, ADCB",
            "Internationale Banken mit deutschen Verbindungen: Deutsche Bank, Commerzbank",
            "Andere internationale Banken: HSBC, Citibank, Standard Chartered",
            "Digitalbanken: Neo, Mashreq Neo, CBD NOW",
            "Berücksichtigen Sie Faktoren wie Filial-/Geldautomatenstandorte, Online-Banking-Qualität, Gebührenstruktur und Expat-Services"
          ]
        },
        {
          title: "Bankkonten eröffnen",
          content: "Anforderungen für die Kontoeröffnung umfassen typischerweise:",
          list: [
            "Emirates ID und Aufenthaltsvisum",
            "Reisepass mit Aufenthaltsvisumseite",
            "Adressnachweis (Mietvertrag oder Stromrechnung)",
            "Gehaltsbestätigung oder Arbeitsvertrag",
            "Erwägen Sie sowohl Giro- als auch Sparkonten",
            "Besorgen Sie Debitkarten und Scheckbücher nach Bedarf",
            "Richten Sie Online- und Mobile-Banking-Zugang ein"
          ]
        },
        {
          title: "Internationale Finanzen verwalten",
          content: "Strategien für die Handhabung von Finanzen über Länder hinweg:",
          list: [
            "Behalten Sie Ihr deutsches Bankkonto für laufende Verpflichtungen",
            "Richten Sie internationale Transfermethoden ein (Banküberweisung, TransferWise, etc.)",
            "Verstehen Sie Wechselkurse und Überweisungsgebühren",
            "Berücksichtigen Sie steuerliche Auswirkungen für Investitionen in beiden Ländern",
            "Erkunden Sie bei Bedarf Multiwährungskonten",
            "Aktualisieren Sie Adressdetails bei deutschen Finanzinstituten",
            "Richten Sie Lastschriften für regelmäßige Zahlungen in beiden Ländern ein"
          ]
        },
        {
          title: "Verstehen Sie lokale Finanzpraktiken",
          content: "Dubai hat einige einzigartige finanzielle Gepflogenheiten:",
          list: [
            "Nachterminierte Schecks werden häufig für Mietzahlungen verwendet",
            "Ungedeckte Schecks können ernsthafte rechtliche Konsequenzen haben",
            "Kreditkarten werden häufig verwendet und bieten oft erhebliche Vorteile",
            "Gehaltsüberweisung ist typischerweise für Kredite und Kreditkarten erforderlich",
            "Islamische Bankoptionen sind mit spezifischen Bedingungen verfügbar",
            "Die Mehrwertsteuer beträgt derzeit 5% auf die meisten Waren und Dienstleistungen",
            "Keine Vermögens- oder Kapitalertragssteuern in den VAE"
          ]
        }
      ],
      tips: [
        "Pflegen Sie eine gute Kredithistorie in den VAE für zukünftige Finanzierungsbedürfnisse",
        "Halten Sie Gelder in beiden Währungen basierend auf Ihren Ausgabebedürfnissen",
        "Nutzen Sie Banking-Apps für eine einfachere Kontoverwaltung",
        "Erwägen Sie Offshore-Banking für bestimmte Anlagebedürfnisse",
        "Achten Sie auf Mindestguthabenanforderungen, um Gebühren zu vermeiden"
      ],
      resources: [
        {
          title: "Banking-Einrichtungs-Checkliste",
          link: "/ressourcen#banking-checklist",
          type: "checklist"
        },
        {
          title: "Internationaler Geldtransfer-Leitfaden",
          link: "/ressourcen#transfer-guide",
          type: "checklist"
        }
      ]
    },
    culture: {
      title: "Anpassung an Dubais Kultur und Lifestyle",
      intro: "Das Verständnis und die Respektierung der kulturellen Normen Dubais, während Sie Ihre eigene Gemeinschaft finden, wird Ihnen helfen, sich schnell anzupassen und alles zu genießen, was diese dynamische Stadt zu bieten hat.",
      steps: [
        {
          title: "Verstehen Sie lokale Bräuche und Etikette",
          content: "Wichtige kulturelle Aspekte, die zu beachten sind:",
          list: [
            "Kleiden Sie sich bescheiden an öffentlichen Orten, besonders in religiösen und Regierungsgebäuden",
            "Öffentliche Zuneigungsbekundungen sollten begrenzt sein",
            "Ramadan-Observanzen erfordern besondere Rücksicht (kein Essen/Trinken in der Öffentlichkeit während der Fastenzeiten)",
            "Alkoholkonsum ist in lizenzierten Lokalen und mit persönlicher Lizenz erlaubt",
            "Fotografiebeschränkungen bestehen für bestimmte Regierungsgebäude",
            "Die rechte Hand wird bevorzugt zum Essen, Händeschütteln und Übergeben von Gegenständen",
            "Bitten Sie um Erlaubnis, bevor Sie Einheimische fotografieren, besonders Frauen"
          ]
        },
        {
          title: "Finden Sie Ihre Gemeinschaft",
          content: "Knüpfen Sie Kontakte, um Ihr soziales Netzwerk aufzubauen:",
          list: [
            "Treten Sie der Deutschen Gesellschaft in den VAE und dem Deutschen Wirtschaftsrat bei",
            "Besuchen Sie Veranstaltungen im Goethe-Institut Dubai",
            "Vernetzen Sie sich mit deutschsprachigen Gruppen auf Facebook und Meetup",
            "Nehmen Sie an Expat-Networking-Events und Clubs teil",
            "Treten Sie Sportclubs, Fitnesszentren oder Interessengruppen bei",
            "Werden Sie Teil Ihrer Wohngemeinschaft durch Nachbarschaftsveranstaltungen",
            "Engagieren Sie sich ehrenamtlich bei karitativen Organisationen"
          ]
        },
        {
          title: "Navigieren Sie durch den Alltag",
          content: "Praktische Aspekte des Lebens in Dubai:",
          list: [
            "Arbeitszeiten typischerweise Sonntag-Donnerstag mit Freitag-Samstag Wochenende",
            "Sommermonate (Juni-September) sind extrem heiß—planen Sie Aktivitäten im Innenbereich",
            "Wintermonate (Oktober-Mai) bieten perfektes Wetter für Aktivitäten im Freien",
            "Transportmöglichkeiten umfassen Metro, Taxis, Fahrdienste und Busse",
            "Essenslieferung ist weit verbreitet und bequem",
            "Einkaufszentren sind soziale und Freizeitzentren über das reine Einkaufen hinaus",
            "Viele Dienstleistungen können über Regierungs-Apps genutzt werden"
          ]
        },
        {
          title: "Verbindung zur Heimat aufrechterhalten",
          content: "Bleiben Sie mit Deutschland verbunden:",
          list: [
            "Richten Sie zuverlässiges Internet für Videoanrufe mit Familie und Freunden ein",
            "Abonnieren Sie deutsche TV-Streaming-Dienste (viele funktionieren mit VPN)",
            "Nehmen Sie an deutschen kulturellen Veranstaltungen in Dubai teil",
            "Finden Sie deutsche Lebensmittelprodukte in spezialisierten Geschäften",
            "Planen Sie regelmäßige Besuche in der Heimat, besonders während der extremen Sommerhitze",
            "Bleiben Sie über deutsche Nachrichten und Entwicklungen informiert",
            "Behalten Sie wichtige deutsche Mitgliedschaften und Abonnements bei"
          ]
        }
      ],
      tips: [
        "Seien Sie offen für kulturelle Unterschiede und begegnen Sie ihnen mit Respekt",
        "Lernen Sie ein paar arabische Phrasen als Zeichen des Respekts für die lokale Kultur",
        "Vermeiden Sie die Diskussion sensibler politischer Themen in der Öffentlichkeit",
        "Nutzen Sie die kühleren Monate, um Outdoor-Attraktionen und Aktivitäten zu erkunden",
        "Erwägen Sie eine Wüstensafari, um die traditionelle Beduinenkultur zu erleben"
      ],
      resources: [
        {
          title: "Kultureller Anpassungsleitfaden",
          link: "/ressourcen#cultural-guide",
          type: "checklist"
        },
        {
          title: "Deutsches Gemeinschaftsverzeichnis",
          link: "/ressourcen#german-community",
          type: "checklist"
        }
      ]
    }
  };

  const currentTab = tabContent[activeTab as keyof typeof tabContent];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Dubai Stadtbild" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="section-container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="mb-6 animate-fade-in">Schritt-für-Schritt-Anleitung für den Umzug nach Dubai</h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Folgen Sie unserem umfassenden Leitfaden, um jeden Aspekt der Auswanderung von Deutschland nach Dubai zu navigieren, von Visa bis hin zu Wohnen und darüber hinaus.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-16 z-40 bg-white border-b border-dubai-dark-sand/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-1 overflow-x-auto">
          <div className="flex min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm md:text-base font-medium flex items-center whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "text-dubai-gold border-b-2 border-dubai-gold"
                    : "text-gray-600 hover:text-dubai-gold"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 gradient-text">{currentTab.title}</h2>
            <p className="text-gray-600 mb-12 text-lg">{currentTab.intro}</p>
            
            <div className="space-y-12">
              {currentTab.steps.map((step, index) => (
                <div key={index} className="bg-dubai-sand/30 rounded-lg p-8">
                  <div className="flex items-start">
                    <div className="bg-dubai-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                      <p className="text-gray-700 mb-4">{step.content}</p>
                      <ul className="space-y-2">
                        {step.list.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-dubai-gold mr-3 mt-1 shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              {/* Tips Section */}
              <div className="bg-white border border-dubai-dark-sand/30 rounded-lg p-8">
                <div className="flex items-start">
                  <Info className="h-6 w-6 text-dubai-gold mr-4 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Profi-Tipps</h3>
                    <ul className="space-y-2">
                      {currentTab.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-dubai-gold mr-3 mt-1 shrink-0" />
                          <span className="text-gray-600">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Resources Section */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Hilfreiche Ressourcen</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentTab.resources.map((resource, idx) => (
                    <a
                      key={idx}
                      href={resource.link}
                      target={resource.type === "external" ? "_blank" : "_self"}
                      rel={resource.type === "external" ? "noopener noreferrer" : ""}
                      className="flex items-center p-4 border border-dubai-dark-sand/30 rounded-lg hover:bg-dubai-sand/20 transition-colors"
                    >
                      {resource.type === "checklist" ? (
                        <FileDown className="h-5 w-5 text-dubai-gold mr-3 shrink-0" />
                      ) : (
                        <ExternalLink className="h-5 w-5 text-dubai-gold mr-3 shrink-0" />
                      )}
                      <span className="text-gray-700">{resource.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-dubai-dark-sand/10">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Benötigen Sie detailliertere Beratung?</h2>
            <p className="text-gray-600 mb-8">
              Dieser Leitfaden bietet einen Überblick über den Umzugsprozess, aber jede Situation ist einzigartig. 
              Entdecken Sie unsere detaillierten Ressourcen oder erhalten Sie persönliche Unterstützung für Ihre spezifischen Bedürfnisse.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/ressourcen"
                className="px-6 py-3 rounded-md text-white gold-gradient-bg hover:opacity-90 transition-opacity font-medium flex items-center justify-center"
              >
                Zugriff auf detaillierte Ressourcen <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/beratung"
                className="px-6 py-3 rounded-md border border-dubai-dark-sand text-gray-700 hover:bg-dubai-dark-sand/10 transition-colors font-medium flex items-center justify-center"
              >
                Persönliche Beratung erhalten
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StepByStepGuide;
