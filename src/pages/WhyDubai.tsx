
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, DollarSign, Briefcase, Heart, Shield, Sun, Building, ArrowRight } from 'lucide-react';
import NewsletterSignup from '@/components/NewsletterSignup';

const WhyDubai = () => {
  const benefits = [
    {
      title: 'Steuervorteile',
      description: 'Genießen Sie 0% Einkommensteuer, keine Kapitalertragssteuer und keine Immobiliensteuer, wodurch Sie Ihre Einkünfte und Investitionen maximieren können.',
      icon: <DollarSign className="h-10 w-10 text-dubai-gold" />,
      details: [
        'Keine persönliche Einkommensteuer',
        'Keine Kapitalertragssteuer',
        'Keine Quellensteuer',
        'Keine Immobiliensteuer (nur eine einmalige Registrierungsgebühr von 4%)',
        'Umfangreiches Netz von Doppelbesteuerungsabkommen',
        'Deutsche Rentenleistungen können oft steuerfrei bezogen werden'
      ]
    },
    {
      title: 'Karrieremöglichkeiten',
      description: 'Zugang zu einem florierenden Arbeitsmarkt mit Möglichkeiten in verschiedenen Branchen und wettbewerbsfähigen Gehaltspaketen.',
      icon: <Briefcase className="h-10 w-10 text-dubai-gold" />,
      details: [
        'Große Nachfrage nach deutscher Expertise in Ingenieur- und technischen Bereichen',
        'Wachsende Sektoren umfassen Technologie, Finanzen, Tourismus und erneuerbare Energien',
        'Höhere Durchschnittsgehälter im Vergleich zu Deutschland',
        'Niedrige Arbeitslosenrate',
        'Dynamisches Startup-Ökosystem mit staatlicher Unterstützung',
        'Einfache Registrierung und Betrieb eigener Unternehmen'
      ]
    },
    {
      title: 'Lebensqualität',
      description: 'Erleben Sie erstklassige Annehmlichkeiten, Gesundheitsversorgung, Bildung und einen vielfältigen, weltoffenen Lebensstil.',
      icon: <Heart className="h-10 w-10 text-dubai-gold" />,
      details: [
        'Ganzjährig Sonnenschein mit über 340 Sonnentagen pro Jahr',
        'Weltklasse-Einkaufszentren und Unterhaltung',
        'Unberührte Strände und Erholungsgebiete im Freien',
        'Vielfältige internationale Küche',
        'Ausgezeichnete private Gesundheitseinrichtungen',
        'Internationale Schulen mit deutschem und anderen Lehrplänen',
        'Effiziente öffentliche Verkehrsmittel'
      ]
    },
    {
      title: 'Sicherheit',
      description: 'Genießen Sie eine der sichersten Städte der Welt mit extrem niedrigen Kriminalitätsraten und ausgezeichneten Notfalldiensten.',
      icon: <Shield className="h-10 w-10 text-dubai-gold" />,
      details: [
        'Konsequent unter den sichersten Städten weltweit eingestuft',
        'Extrem niedrige Kriminalitätsrate',
        'Strenge Strafverfolgung',
        'Politische Stabilität',
        'Fortschrittliche Sicherheitsinfrastruktur',
        'Hervorragende Notfalldienste'
      ]
    },
    {
      title: 'Strategische Lage',
      description: 'Profitieren Sie von Dubais zentraler Lage zwischen Europa, Asien und Afrika mit ausgezeichneter globaler Konnektivität.',
      icon: <Clock className="h-10 w-10 text-dubai-gold" />,
      details: [
        'Direktflüge zu allen großen deutschen Städten',
        'Nur 6 Stunden Flug von den meisten europäischen Hauptstädten entfernt',
        'Der Internationale Flughafen Dubai ist einer der verkehrsreichsten der Welt',
        'Tor zu aufstrebenden Märkten im Nahen Osten, Asien und Afrika',
        'Gleiche oder ähnliche Zeitzone wie Deutschland (UTC+4)',
        'Wochenendausflüge zu Zielen auf drei Kontinenten'
      ]
    },
    {
      title: 'Moderne Infrastruktur',
      description: 'Nutzen Sie Dubais hochmoderne Infrastruktur, Technologie und Stadtplanung.',
      icon: <Building className="h-10 w-10 text-dubai-gold" />,
      details: [
        'Ultraschnelle Internetverbindung',
        'Zuverlässige Versorgungseinrichtungen mit minimalen Ausfällen',
        'Smart City-Initiativen für verbessertes Wohnen',
        'Hochmoderne Immobilienentwicklungen',
        'Fortschrittliche Gesundheitseinrichtungen',
        'Effizientes Transportnetzwerk'
      ]
    }
  ];

  const lifestyleComparisons = [
    {
      category: 'Wetter',
      dubai: 'Ganzjährig Sonnenschein, milde Winter (20-25°C), heiße Sommer (38-42°C)',
      germany: 'Vier ausgeprägte Jahreszeiten, kalte Winter, milde Sommer, häufiger Niederschlag'
    },
    {
      category: 'Lebenshaltungskosten',
      dubai: 'Keine Einkommensteuer, höheres verfügbares Einkommen, höhere Wohnkosten in Premium-Gegenden',
      germany: 'Hohe Einkommensteuer (bis zu 45%), niedrigere Wohnkosten außer in Großstädten'
    },
    {
      category: 'Arbeitskultur',
      dubai: 'Sonntag-Donnerstag Arbeitswoche, wirtschaftsfreundliches Umfeld, internationale Belegschaft',
      germany: 'Montag-Freitag Arbeitswoche, starke Work-Life-Balance, strukturiertes Umfeld'
    },
    {
      category: 'Sozialleben',
      dubai: 'Kosmopolitisches Umfeld, vielfältige Expatriate-Gemeinschaften, Luxus-Lifestyle-Optionen',
      germany: 'Starke lokale Gemeinschaften, kulturelle Aktivitäten, Outdoor-Lifestyle'
    },
    {
      category: 'Familienleben',
      dubai: 'Ausgezeichnete internationale Schulen, familienfreundliche Aktivitäten, Haushaltshilfe erschwinglich',
      germany: 'Starke öffentliche Bildung, umfassende Familienleistungen, Outdoor-Aktivitäten'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1546412414-e1885e51cfa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Dubai Skyline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="section-container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="mb-6 animate-fade-in">Warum Dubai wählen?</h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Entdecken Sie die außergewöhnlichen Vorteile und Möglichkeiten, die Dubai zu einem idealen Ziel für Deutsche machen, die umziehen möchten.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 gradient-text">Ein Lifestyle-Upgrade</h2>
              <p className="text-gray-600 mb-6">
                Dubai hat sich von einem Wüstenvorposten zu einer globalen Metropole entwickelt und bietet den Bewohnern eine unvergleichliche 
                Kombination aus wirtschaftlichen Möglichkeiten, Sicherheit und Lebensqualität. Als Deutscher, der nach Dubai umzieht, 
                werden Sie zahlreiche Vorteile genießen, die den Übergang lohnenswert machen.
              </p>
              <p className="text-gray-600">
                Von Steuervorteilen, die es Ihnen ermöglichen, Ihr Einkommen zu maximieren, bis hin zu ganzjährigem Sonnenschein und einer strategischen Lage 
                für weltweite Reisen bietet Dubai ein Lifestyle-Upgrade, das schwer zu übertreffen ist. Lassen Sie uns erkunden, warum 
                so viele Deutsche Dubai als ihr neues Zuhause wählen.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1528702748617-c64d49f918af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Dubai Lifestyle" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-dubai-dark-sand/30 w-64 hidden md:block">
                <div className="flex items-center">
                  <Sun className="h-8 w-8 text-dubai-gold mr-3" />
                  <div>
                    <div className="font-bold">340+ Tage</div>
                    <div className="text-gray-600 text-sm">Sonnenschein jedes Jahr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-dubai-dark-sand/10">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Hauptvorteile des Lebens in Dubai</h2>
            <p className="text-gray-600">
              Dubai bietet zahlreiche Vorteile gegenüber anderen Umsiedlungszielen und kombiniert finanzielle Vorteile mit 
              einem außergewöhnlichen Lebensstil und Infrastruktur.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-dubai-dark-sand/30 hover:shadow-md transition-shadow">
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                <div>
                  <h4 className="font-medium text-sm text-gray-700 mb-3">Hauptvorteile:</h4>
                  <ul className="space-y-2">
                    {benefit.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-dubai-gold mr-2 mt-1 shrink-0" />
                        <span className="text-gray-600 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Dubai vs. Deutschland: Lifestyle-Vergleich</h2>
            <p className="text-gray-600">
              Während sowohl Dubai als auch Deutschland einen ausgezeichneten Lebensstandard bieten, gibt es wichtige Unterschiede, die Ihre Entscheidung zur Umsiedlung beeinflussen könnten.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="gold-gradient-bg text-white">
                  <th className="py-3 px-4 text-left rounded-tl-lg">Kategorie</th>
                  <th className="py-3 px-4 text-left">Dubai</th>
                  <th className="py-3 px-4 text-left rounded-tr-lg">Deutschland</th>
                </tr>
              </thead>
              <tbody>
                {lifestyleComparisons.map((comparison, index) => (
                  <tr 
                    key={index} 
                    className={index % 2 === 0 ? 'bg-dubai-sand/50' : 'bg-white'}
                  >
                    <td className="py-3 px-4 border-b border-dubai-dark-sand/30 font-medium">{comparison.category}</td>
                    <td className="py-3 px-4 border-b border-dubai-dark-sand/30 text-gray-600">{comparison.dubai}</td>
                    <td className="py-3 px-4 border-b border-dubai-dark-sand/30 text-gray-600">{comparison.germany}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 blue-gradient-bg text-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Was Deutsche über das Leben in Dubai sagen</h2>
            <p className="text-white/80">
              Hören Sie direkt von deutschen Landsleuten, die den Umzug gewagt haben und das Leben in Dubai genießen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Katharina Becker" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Katharina Becker</h4>
                  <p className="text-white/70 text-sm">Umgezogen aus München in 2019</p>
                </div>
              </div>
              <p className="text-white/90 italic mb-4">
                "Der Umzug nach Dubai hat meine Karriere und meinen Lebensstil verändert. Ich spare dank der Steuervorteile deutlich mehr Geld und liebe das kosmopolitische Umfeld. Ja, die Sommer sind heiß, aber moderne Klimaanlagen sind überall, und die Winter sind absolut perfekt."
              </p>
              <p className="text-white/90">
                "Der Sicherheitsaspekt kann nicht genug betont werden — ich fühle mich wohl, zu jeder Tages- und Nachtzeit allein zu gehen, etwas, was ich in Deutschland nicht immer sagen konnte."
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Stefan Hoffmann" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Stefan Hoffmann</h4>
                  <p className="text-white/70 text-sm">Umgezogen aus Berlin in 2020</p>
                </div>
              </div>
              <p className="text-white/90 italic mb-4">
                "Als Unternehmer bot mir Dubai ein wirtschaftsfreundliches Umfeld, das nach der Bürokratie, mit der ich in Deutschland konfrontiert war, erfrischend war. Die Gründung meines Unternehmens war unkompliziert, und die Abwesenheit von Einkommensteuer ermöglichte es mir, mehr in mein Geschäft zu reinvestieren."
              </p>
              <p className="text-white/90">
                "Das internationale Netzwerk, das ich hier aufgebaut habe, war von unschätzbarem Wert. Meine Familie hat sich auch gut angepasst — meine Kinder besuchen eine hervorragende internationale Schule, und wir genießen den Outdoor-Lifestyle während der kühleren Monate."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Häufig gestellte Fragen</h2>
            <p className="text-gray-600">
              Erhalten Sie Antworten auf häufige Fragen zur Umsiedlung von Deutschland nach Dubai.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Muss ich Arabisch lernen, um in Dubai zu leben?",
                answer: "Nicht unbedingt. Englisch wird in Dubai im Geschäfts-, Einzelhandels- und Gastgewerbesektor weit verbreitet gesprochen. Während das Erlernen grundlegender arabischer Ausdrücke geschätzt wird und hilfreich ist, können Sie leicht mit Englisch durch den Alltag navigieren."
              },
              {
                question: "Wie heiß wird es wirklich in Dubai?",
                answer: "Die Sommertemperaturen (Juni bis September) liegen typischerweise zwischen 38-42°C und können gelegentlich 48°C erreichen. Allerdings sind fast alle Innenräume klimatisiert, und das Wetter von Oktober bis Mai ist sehr angenehm, mit Temperaturen zwischen 20-30°C."
              },
              {
                question: "Kann ich weiterhin meine deutsche Rente beziehen, wenn ich nach Dubai ziehe?",
                answer: "Ja, Deutsche können ihre Rente weiterhin beziehen, während sie in Dubai leben. Deutschland hat ein Sozialversicherungsabkommen mit den VAE, das Rentenüberweisungen ermöglicht. Die Rente wird typischerweise auf Ihr deutsches Bankkonto überwiesen, das Sie beibehalten können."
              },
              {
                question: "Wie steht es um die Gesundheitsversorgung in Dubai?",
                answer: "Dubai verfügt über hervorragende private Gesundheitseinrichtungen mit vielen deutschsprachigen Ärzten. Krankenversicherung ist für Einwohner obligatorisch. Die Qualität der Gesundheitsversorgung ist hoch, oft vergleichbar mit oder besser als europäische Standards, besonders in privaten Krankenhäusern."
              },
              {
                question: "Ist es schwierig, sich an die kulturellen Unterschiede anzupassen?",
                answer: "Die meisten Deutschen passen sich gut an das Leben in Dubai an. Während es kulturelle Unterschiede gibt, ist Dubai sehr international und entgegenkommend. Respekt für lokale Bräuche bezüglich Kleidung und Verhalten an öffentlichen Orten ist wichtig, aber der Lebensstil ist im Allgemeinen modern und kosmopolitisch."
              },
              {
                question: "Kann ich in Dubai Alkohol kaufen?",
                answer: "Ja, Alkohol ist in lizenzierten Restaurants, Hotels und Bars erhältlich. Einwohner können eine Alkohollizenz erhalten, um Alkohol von bestimmten Geschäften für den Hauskonsum zu kaufen. Die Regeln wurden in den letzten Jahren gelockert, was den Prozess einfacher macht."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-lg border border-dubai-dark-sand/30">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20 bg-dubai-dark-sand/10">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="mb-6">Bereit für den Umzug?</h2>
              <p className="text-gray-600 mb-8">
                Nachdem Sie die Vorteile des Lebens in Dubai verstanden haben, ist der nächste Schritt, die praktischen Aspekte des Umzugs zu lernen. 
                Unsere umfassende Schritt-für-Schritt-Anleitung führt Sie durch den gesamten Prozess, vom Erhalt des richtigen Visums bis zum Finden Ihres Traumhauses.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  to="/schritt-fuer-schritt-anleitung"
                  className="px-6 py-3 rounded-md text-white gold-gradient-bg hover:opacity-90 transition-opacity font-medium flex items-center justify-center"
                >
                  Schritt-für-Schritt-Anleitung <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/beratung"
                  className="px-6 py-3 rounded-md border border-dubai-dark-sand text-gray-700 hover:bg-dubai-dark-sand/10 transition-colors font-medium flex items-center justify-center"
                >
                  Persönliche Hilfe erhalten
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyDubai;
