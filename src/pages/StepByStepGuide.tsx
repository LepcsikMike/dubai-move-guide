
import React from 'react';
import { Link } from 'react-router-dom';
import {
  DescriptionOutlined, 
  HomeOutlined, 
  LocalHospitalOutlined, 
  AccountBalanceOutlined, 
  SchoolOutlined, 
  TranslateOutlined, 
  AirplanemodeActiveOutlined,
  DirectionsCarOutlined,
  SettingsOutlined
} from '@material-ui/icons';

const StepByStepGuide = () => {
  // Header-Hintergrundbild mit absoluter URL, um Ladeprobleme zu vermeiden
  const backgroundImageUrl = "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80";

  const steps = [
    {
      id: 'visa',
      title: 'Visum & Aufenthaltsgenehmigung',
      icon: <DescriptionOutlined style={{ fontSize: 40, color: '#D4AF37' }} />,
      description: 'Erfahren Sie alles über die verschiedenen Visakategorien für den Umzug nach Dubai: von Arbeitsvisa über Golden Visa bis hin zu Investorenvisa.',
      content: `
        <h3>Visum-Optionen für Deutsche in Dubai</h3>
        <p>Dubai bietet verschiedene Visumsoptionen für Deutsche und andere Ausländer, die in das Emirat ziehen möchten. Die Auswahl des richtigen Visums hängt von Ihren Umständen und Zielen ab.</p>
        
        <h4>Arbeitsvisum</h4>
        <p>Das häufigste Visum für Expatriates ist das Arbeitsvisum, das von Ihrem Arbeitgeber in Dubai gesponsert wird. Dieses Visum ist in der Regel 2 Jahre gültig und kann verlängert werden.</p>
        
        <h4>Investorenvisum</h4>
        <p>Wenn Sie ein Unternehmen in Dubai gründen oder in Immobilien investieren möchten, können Sie ein Investorenvisum beantragen. Die Anforderungen variieren je nach Art und Umfang der Investition.</p>
        
        <h4>Golden Visa</h4>
        <p>Das Dubai Golden Visa bietet eine langfristige Aufenthaltsgenehmigung (5-10 Jahre) für Investoren, Unternehmer, Wissenschaftler und andere qualifizierte Personen.</p>
        
        <h4>Rentnervisum</h4>
        <p>Dubai bietet ein spezielles Visum für Rentner über 55 Jahre, die bestimmte finanzielle Anforderungen erfüllen.</p>
        
        <h4>Notwendige Dokumente</h4>
        <ul>
          <li>Gültiger deutscher Reisepass (mindestens 6 Monate gültig)</li>
          <li>Passfoto nach VAE-Richtlinien</li>
          <li>Beglaubigte Abschriften von Bildungsabschlüssen</li>
          <li>Polizeiliches Führungszeugnis</li>
          <li>Medizinisches Attest</li>
        </ul>
      `
    },
    {
      id: 'housing',
      title: 'Wohnungssuche & Umzug',
      icon: <HomeOutlined style={{ fontSize: 40, color: '#D4AF37' }} />,
      description: 'Tipps zur Suche nach der perfekten Unterkunft, beliebte Viertel für Expatriates und wichtige Informationen zum Miet- oder Kaufprozess.',
      content: `
        <h3>Die richtige Wohngegend in Dubai finden</h3>
        <p>Dubai bietet eine Vielzahl von Wohngegenden, die sich in Preis, Stil und Annehmlichkeiten unterscheiden. Hier sind einige der beliebtesten Gebiete bei deutschen Expatriates:</p>
        
        <h4>Dubai Marina</h4>
        <p>Ein modernes Stadtviertel am Wasser mit Wolkenkratzern, Restaurants und einem belebten Nachtleben. Beliebt bei jungen Berufstätigen und Singles.</p>
        
        <h4>Palm Jumeirah</h4>
        <p>Die künstliche Palmeninsel bietet luxuriöse Villen und Apartments mit Strandlage und ist bei wohlhabenden Familien beliebt.</p>
        
        <h4>Downtown Dubai</h4>
        <p>Im Herzen der Stadt gelegen, mit dem Burj Khalifa und der Dubai Mall. Ein geschäftiges, urbanes Umfeld mit erstklassigen Annehmlichkeiten.</p>
        
        <h4>Arabian Ranches</h4>
        <p>Eine gehobene Vorstadtgemeinde mit Villen, perfekt für Familien mit Kindern, mit internationalen Schulen in der Nähe.</p>
        
        <h4>Miet- vs. Kaufprozess</h4>
        <p>In Dubai werden Mietverträge in der Regel jährlich abgeschlossen, wobei die Miete oft in mehreren Schecks im Voraus bezahlt wird. Beim Kauf fallen etwa 7% zusätzliche Kosten an, darunter die Übertragungsgebühr der Dubai Land Department (4%).</p>
      `
    },
    {
      id: 'healthcare',
      title: 'Gesundheitsversorgung',
      icon: <LocalHospitalOutlined style={{ fontSize: 40, color: '#D4AF37' }} />,
      description: 'Informationen über das Gesundheitssystem in Dubai, Versicherungsoptionen und empfohlene medizinische Einrichtungen für Expatriates.',
      content: `
        <h3>Gesundheitsversorgung in Dubai</h3>
        <p>Dubai verfügt über ein erstklassiges Gesundheitssystem mit modernen Einrichtungen und international qualifizierten Ärzten. Als Expatriate müssen Sie jedoch für die medizinische Versorgung privat versichert sein.</p>
        
        <h4>Krankenversicherung</h4>
        <p>Eine Krankenversicherung ist für alle Einwohner Dubais obligatorisch. Arbeitgeber sind gesetzlich verpflichtet, eine Grundversicherung für ihre Mitarbeiter abzuschließen, aber Sie sollten die Deckung überprüfen und ggf. eine Zusatzversicherung in Betracht ziehen.</p>
        
        <h4>Krankenhäuser und Kliniken</h4>
        <ul>
          <li>American Hospital Dubai</li>
          <li>Mediclinic Hospitals</li>
          <li>Saudi German Hospital</li>
          <li>Rashid Hospital (öffentlich)</li>
          <li>Deutsche Facharztpraxis</li>
        </ul>
        
        <h4>Notfallversorgung</h4>
        <p>Bei medizinischen Notfällen wählen Sie 998 oder 999. Die meisten großen Krankenhäuser haben 24-Stunden-Notaufnahmen.</p>
        
        <h4>Medikamente</h4>
        <p>Apotheken sind in Dubai weit verbreitet. Einige verschreibungspflichtige Medikamente aus Deutschland können in den VAE eingeschränkt sein, daher sollten Sie im Voraus prüfen, ob Ihre Medikamente erlaubt sind.</p>
      `
    },
    {
      id: 'banking',
      title: 'Banken & Finanzen',
      icon: <AccountBalanceOutlined style={{ fontSize: 40, color: '#D4AF37' }} />,
      description: 'Hilfe bei der Eröffnung eines Bankkontos, Empfehlungen für Expat-freundliche Banken und wichtige Steuerinformationen.',
      content: `
        <h3>Das Bankwesen in Dubai verstehen</h3>
        <p>Dubai hat ein gut entwickeltes Bankensystem mit lokalen und internationalen Banken. Die Eröffnung eines Bankkontos ist ein wichtiger erster Schritt nach Ihrer Ankunft.</p>
        
        <h4>Bankkonto eröffnen</h4>
        <p>Um ein Bankkonto zu eröffnen, benötigen Sie in der Regel:</p>
        <ul>
          <li>Gültige Aufenthaltsgenehmigung (nicht für alle Banken erforderlich)</li>
          <li>Reisepass</li>
          <li>Emirates ID (sobald verfügbar)</li>
          <li>Arbeitsbescheinigung oder Handelslizenzkopie</li>
          <li>Adressnachweis (Mietvertrag oder Stromrechnung)</li>
        </ul>
        
        <h4>Empfohlene Banken für Expatriates</h4>
        <ul>
          <li>Emirates NBD</li>
          <li>HSBC</li>
          <li>Abu Dhabi Commercial Bank (ADCB)</li>
          <li>Mashreq Bank</li>
          <li>Standard Chartered</li>
        </ul>
        
        <h4>Steuerliche Überlegungen</h4>
        <p>Obwohl die VAE keine Einkommenssteuer erheben, bleiben Sie möglicherweise in Deutschland steuerpflichtig, abhängig von Ihren Umständen. Es ist ratsam, einen auf internationales Steuerrecht spezialisierten Steuerberater zu konsultieren.</p>
        
        <h4>Überweisungen und Rücküberweisungen</h4>
        <p>Dubai verfügt über zahlreiche Dienste für internationale Geldüberweisungen. Vergleichen Sie die Gebühren und Wechselkurse von Banken mit spezialisierten Überweisungsdiensten wie Wise (ehemals TransferWise), Western Union oder UAE Exchange.</p>
      `
    },
    {
      id: 'education',
      title: 'Schulen & Bildung',
      icon: <SchoolOutlined style={{ fontSize: 40, color: '#D4AF37' }} />,
      description: 'Übersicht über internationale Schulen, deutsche Bildungseinrichtungen und Anmeldeverfahren für Kinder von Expatriates.',
      content: `
        <h3>Bildungsoptionen für Expat-Kinder in Dubai</h3>
        <p>Dubai bietet eine Vielzahl von Bildungseinrichtungen mit verschiedenen Lehrplänen und pädagogischen Ansätzen.</p>
        
        <h4>Deutsche Schule Dubai (DISD)</h4>
        <p>Die Deutsche Internationale Schule Dubai folgt dem deutschen Lehrplan und bietet Bildung von der Vorschule bis zum Abitur. Sie ist eine beliebte Wahl für deutsche Familien, die ihre Kinder im deutschen Bildungssystem halten möchten.</p>
        
        <h4>Andere internationale Schulen</h4>
        <ul>
          <li>Dubai American Academy (amerikanischer Lehrplan)</li>
          <li>GEMS Wellington International School (britischer Lehrplan)</li>
          <li>Dubai College (britischer Lehrplan)</li>
          <li>Swiss International Scientific School (IB-Programm)</li>
          <li>Repton School (britischer Lehrplan)</li>
        </ul>
        
        <h4>Anmeldeverfahren</h4>
        <p>Internationale Schulen in Dubai sind sehr gefragt, und die Plätze sind oft begrenzt. Es wird empfohlen, sich so früh wie möglich zu bewerben. Das Anmeldeverfahren umfasst in der Regel:</p>
        <ul>
          <li>Anmeldeformular und Gebühr</li>
          <li>Frühere Schulzeugnisse</li>
          <li>Referenzschreiben</li>
          <li>Bewertungstests</li>
          <li>Interview</li>
        </ul>
        
        <h4>Hochschulbildung</h4>
        <p>Dubai beherbergt auch Zweigstellen internationaler Universitäten und eigene Hochschuleinrichtungen, darunter:</p>
        <ul>
          <li>Heriot-Watt University Dubai</li>
          <li>American University in Dubai</li>
          <li>Middlesex University Dubai</li>
          <li>University of Wollongong Dubai</li>
        </ul>
      `
    },
    {
      id: 'culture',
      title: 'Kultur & Etikette',
      icon: <TranslateOutlined style={{ fontSize: 40, color: '#D4AF37' }} />,
      description: 'Wichtige kulturelle Unterschiede, Verhaltensregeln und Tipps zur Integration in die lokale Gemeinschaft.',
      content: `
        <h3>Kulturelles Verständnis für das Leben in Dubai</h3>
        <p>Dubai ist eine kulturell vielfältige Stadt, in der Toleranz großgeschrieben wird. Dennoch ist es wichtig, die lokalen Bräuche und Erwartungen zu verstehen und zu respektieren.</p>
        
        <h4>Dresscode</h4>
        <p>Obwohl Dubai kosmopolitisch ist, wird angemessene Kleidung erwartet, besonders an öffentlichen Orten:</p>
        <ul>
          <li>Schultern und Knie sollten in Einkaufszentren und öffentlichen Einrichtungen bedeckt sein</li>
          <li>Badebekleidung ist nur an Stränden und Pools akzeptabel</li>
          <li>Für den Besuch von Moscheen ist eine noch konservativere Kleidung erforderlich</li>
        </ul>
        
        <h4>Verhaltensregeln</h4>
        <ul>
          <li>Öffentliche Zuneigungsbekundungen sollten minimiert werden</li>
          <li>Alkohol sollte nur in lizenzierten Einrichtungen konsumiert werden</li>
          <li>Der Ramadan erfordert besondere Rücksichtnahme (kein Essen, Trinken oder Rauchen in der Öffentlichkeit während der Fastenzeit)</li>
          <li>Respektieren Sie religiöse Praktiken und Orte</li>
        </ul>
        
        <h4>Geschäftsetikette</h4>
        <p>Im Geschäftsleben in Dubai ist der Aufbau von Beziehungen wichtig:</p>
        <ul>
          <li>Begrüßung mit rechter Hand (die linke Hand gilt als unrein)</li>
          <li>Visitenkarten werden mit beiden Händen überreicht</li>
          <li>Pünktlichkeit wird geschätzt, aber Flexibilität ist wichtig</li>
          <li>Geschäftsgespräche beginnen oft mit Small Talk</li>
        </ul>
        
        <h4>Sprache</h4>
        <p>Arabisch ist die offizielle Sprache, aber Englisch wird weithin gesprochen und verstanden. Dennoch wird das Erlernen einiger grundlegender arabischer Phrasen geschätzt.</p>
      `
    },
    {
      id: 'transportation',
      title: 'Transport & Mobilität',
      icon: <DirectionsCarOutlined style={{ fontSize: 40, color: '#D4AF37' }} />,
      description: 'Informationen über öffentliche Verkehrsmittel, das Führen eines Fahrzeugs in Dubai und Tipps zur Navigation in der Stadt.',
      content: `
        <h3>Fortbewegung in Dubai</h3>
        <p>Dubai verfügt über ein gut ausgebautes Verkehrsnetz, das es einfach macht, sich in der Stadt fortzubewegen.</p>
        
        <h4>Öffentliche Verkehrsmittel</h4>
        <ul>
          <li>Dubai Metro: Ein modernes, automatisiertes Bahnsystem mit zwei Hauptlinien (Rot und Grün)</li>
          <li>Dubai Tram: Verbindet Dubai Marina mit anderen beliebten Gegenden</li>
          <li>Busse: Umfangreiches Busnetz, das die gesamte Stadt abdeckt</li>
          <li>Wassertaxis (Abras): Traditionelle Boote, die den Dubai Creek überqueren</li>
        </ul>
        
        <h4>Nol Card</h4>
        <p>Die Nol Card ist eine wiederaufladbare Smartcard für die Nutzung aller öffentlichen Verkehrsmittel in Dubai. Es gibt verschiedene Kartentypen je nach Ihren Bedürfnissen.</p>
        
        <h4>Autofahren in Dubai</h4>
        <p>Viele Expatriates entscheiden sich für den Kauf oder das Leasing eines Autos:</p>
        <ul>
          <li>Deutscher Führerschein kann in einen VAE-Führerschein umgetauscht werden (mit gültiger Aufenthaltsgenehmigung)</li>
          <li>Fahren auf der rechten Straßenseite wie in Deutschland</li>
          <li>Strenge Verkehrsregeln mit hohen Strafen für Verstöße</li>
          <li>Benzin ist relativ günstig</li>
        </ul>
        
        <h4>Taxis und Fahrdienste</h4>
        <p>Taxis sind in Dubai weit verbreitet und vergleichsweise günstig. Ride-Hailing-Apps wie Uber und Careem sind ebenfalls verfügbar.</p>
        
        <h4>Navigation</h4>
        <p>Apps wie Google Maps und Waze funktionieren gut in Dubai, aber beachten Sie, dass sich die Stadt schnell entwickelt und einige neuere Gebiete möglicherweise nicht vollständig kartiert sind.</p>
      `
    },
    {
      id: 'arrival',
      title: 'Ankunft & erste Schritte',
      icon: <AirplanemodeActiveOutlined style={{ fontSize: 40, color: '#D4AF37' }} />,
      description: 'Checkliste für die ersten Tage und Wochen in Dubai, wichtige Behördengänge und Einrichtungen für Neuankömmlinge.',
      content: `
        <h3>Ihre ersten Tage in Dubai: Eine Checkliste</h3>
        <p>Die ersten Wochen nach Ihrer Ankunft in Dubai können geschäftig sein. Hier ist eine Checkliste, die Ihnen hilft, sich schnell einzuleben:</p>
        
        <h4>Unmittelbar nach der Ankunft</h4>
        <ul>
          <li>SIM-Karte kaufen (am Flughafen erhältlich)</li>
          <li>Transport zur Unterkunft organisieren</li>
          <li>Grundlegende Besorgungen für den täglichen Bedarf machen</li>
          <li>Mit der neuen Umgebung vertraut machen</li>
        </ul>
        
        <h4>Erste Woche</h4>
        <ul>
          <li>Medizinische Untersuchung für die Aufenthaltsgenehmigung absolvieren</li>
          <li>Emirates ID beantragen</li>
          <li>Bankkonto eröffnen</li>
          <li>Unterkunft einrichten (Möbel, Haushaltsgeräte, Internet)</li>
          <li>DEWA-Anschluss (Strom und Wasser) auf Ihren Namen registrieren</li>
        </ul>
        
        <h4>Erste Monat</h4>
        <ul>
          <li>Krankenversicherung abschließen oder überprüfen</li>
          <li>Führerschein umschreiben lassen</li>
          <li>Schulen/Kindergärten für Kinder besuchen</li>
          <li>Lokale Supermärkte, Apotheken und Gesundheitseinrichtungen erkunden</li>
          <li>Mit der deutschen Community in Kontakt treten</li>
        </ul>
        
        <h4>Nützliche Kontakte für Neuankömmlinge</h4>
        <ul>
          <li>Deutsches Generalkonsulat in Dubai</li>
          <li>German Business Council</li>
          <li>Deutsche Industrie- und Handelskammer</li>
          <li>AMER Center für Visa- und Aufenthaltsangelegenheiten</li>
          <li>Deutsche Community-Gruppen in sozialen Netzwerken</li>
        </ul>
      `
    },
    {
      id: 'business',
      title: 'Unternehmen gründen',
      icon: <SettingsOutlined style={{ fontSize: 40, color: '#D4AF37' }} />,
      description: 'Informationen zur Gründung eines Unternehmens in Dubai, einschließlich Freizonen, Lizenzen und rechtlicher Anforderungen.',
      content: `
        <h3>Geschäftsmöglichkeiten in Dubai</h3>
        <p>Dubai bietet günstige Bedingungen für Unternehmer und Investoren, mit verschiedenen Optionen für die Geschäftsgründung.</p>
        
        <h4>Unternehmensformen</h4>
        <ul>
          <li>Mainland Company (LLC): Erfordert einen lokalen Sponsor mit 51% Anteil, es sei denn, Sie qualifizieren sich für eine Ausnahme</li>
          <li>Free Zone Company: 100% ausländisches Eigentum möglich, aber mit Einschränkungen für Geschäfte außerhalb der Freizone</li>
          <li>Offshore Company: Für Investitionen und Vermögensverwaltung außerhalb der VAE</li>
        </ul>
        
        <h4>Beliebte Freizonen</h4>
        <ul>
          <li>Dubai Multi Commodities Centre (DMCC)</li>
          <li>Dubai International Financial Centre (DIFC)</li>
          <li>Dubai Media City</li>
          <li>Dubai Internet City</li>
          <li>Jebel Ali Free Zone (JAFZA)</li>
        </ul>
        
        <h4>Gründungsschritte</h4>
        <ol>
          <li>Geschäftsaktivität und passende Lizenz bestimmen</li>
          <li>Geeigneten Standort wählen (Mainland oder Freizone)</li>
          <li>Handelsname reservieren</li>
          <li>Gesellschaftsvertrag erstellen</li>
          <li>Unternehmensregistrierung durchführen</li>
          <li>Handelslizenz beantragen</li>
          <li>Visum- und Arbeitsgenehmigungen für Mitarbeiter beschaffen</li>
          <li>Bankkonto eröffnen</li>
        </ol>
        
        <h4>Wichtige Überlegungen</h4>
        <ul>
          <li>Kosten: Lizenzen, Büroraum, Visa, Registrierungsgebühren</li>
          <li>Steuern: Keine Einkommenssteuer, aber 5% Mehrwertsteuer und mögliche Körperschaftssteuer in der Zukunft</li>
          <li>Rechtliche Beratung: Empfohlen, um die komplexen Vorschriften zu navigieren</li>
          <li>Bankwesen: Eröffnung eines Geschäftskontos kann zeitaufwändig sein</li>
        </ul>
      `
    },
  ];

  return (
    <div className="bg-brand-light-gray">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div 
          className="absolute inset-0 bg-center bg-cover z-0"
          style={{ 
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-brand-dark-brown/70"></div>
        </div>
        
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="mb-6 font-heading">Schritt-für-Schritt Anleitung für Ihren Umzug nach Dubai</h1>
            <p className="text-xl">
              Unser umfassender Leitfaden führt Sie durch jeden Aspekt des Umzugs nach Dubai - von der Visumbeantragung bis zur kulturellen Integration.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation und Content Section */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Navigation Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-brand-dark-brown">In dieser Anleitung</h3>
                <nav className="space-y-2">
                  {steps.map((step) => (
                    <a 
                      key={step.id}
                      href={`#${step.id}`}
                      className="flex items-center p-2 text-gray-700 hover:bg-brand-cream rounded-md transition-colors"
                    >
                      <div className="mr-3 text-brand-gold">{React.cloneElement(step.icon, { style: { fontSize: 24, color: '#D4AF37' } })}</div>
                      <span>{step.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3 space-y-16">
              {steps.map((step) => (
                <div 
                  key={step.id} 
                  id={step.id} 
                  className="scroll-mt-24 bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="mr-4 bg-brand-cream p-3 rounded-full">
                        {step.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-brand-dark-brown">{step.title}</h2>
                    </div>
                    <p className="text-gray-700 mb-8">{step.description}</p>
                    <div 
                      className="prose prose-lg max-w-none text-gray-700"
                      dangerouslySetInnerHTML={{ __html: step.content }}
                    />
                  </div>
                </div>
              ))}

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-brand-gold to-brand-brown text-white rounded-lg shadow-lg p-8">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0 md:mr-8">
                    <h3 className="text-2xl font-bold mb-2">Bereit für Ihren Umzug nach Dubai?</h3>
                    <p>
                      Vereinbaren Sie eine kostenlose Beratung, um Ihre spezifischen Fragen zu besprechen und personalisierte Unterstützung zu erhalten.
                    </p>
                  </div>
                  <Link
                    to="/beratung"
                    className="px-6 py-3 bg-white text-brand-dark-brown font-medium rounded-md hover:bg-brand-cream transition-colors whitespace-nowrap"
                  >
                    Beratung vereinbaren
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StepByStepGuide;
