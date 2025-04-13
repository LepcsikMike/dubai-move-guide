
import React from 'react';
import { Clock, DollarSign, Briefcase, Heart, Shield, Sun, Building } from 'lucide-react';
import BenefitCard from './BenefitCard';

const BenefitsSection = () => {
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

  return (
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
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              details={benefit.details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
