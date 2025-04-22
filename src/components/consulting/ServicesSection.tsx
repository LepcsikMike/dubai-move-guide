import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: "Visum & Umzug Beratung",
    description: "Erhalten Sie Expertenberatung zu Visumtypen, Antragsverfahren und allen Aspekten des Umzugs von Deutschland nach Dubai.",
    features: [
      "Persönliche Einschätzung der Visumseignung",
      "Anleitung zur Dokumentenvorbereitung",
      "Zeitplanung für einen reibungslosen Übergang",
      "Unterstützung nach der Ankunft und Orientierung"
    ],
    price: "149€",
    duration: "60 Minuten"
  },
  {
    title: "Immobilien & Wohnungssuche",
    description: "Finden Sie Ihr perfektes Zuhause in Dubai mit persönlicher Immobiliensuche und Beratung zum Mieten/Kaufen.",
    features: [
      "Empfehlungen für Wohngegenden basierend auf Ihren Bedürfnissen",
      "Koordination von Immobilienbesichtigungen",
      "Prüfung und Verhandlungsunterstützung bei Mietverträgen",
      "Optimierung des Wohnungsbudgets"
    ],
    price: "199€",
    duration: "90 Minuten"
  },
  {
    title: "Unternehmensaufbau Beratung",
    description: "Erfahren Sie, wie Sie ein Unternehmen in Dubais dynamischer Wirtschaft gründen und betreiben können, mit unseren erfahrenen Unternehmensberatern.",
    features: [
      "Empfehlungen zur Unternehmensstruktur und Freizonen",
      "Erklärung der Lizenzanforderungen",
      "Kostenanalyse und Budgetplanung",
      "Einführung in lokale Geschäftsnetzwerke"
    ],
    price: "249€",
    duration: "120 Minuten"
  },
  {
    title: "Umfassendes Umzugspaket",
    description: "Rundum-Unterstützung für jeden Aspekt Ihres Umzugs nach Dubai, vom Visum bis zur Wohnungssuche, Schulen und Eingewöhnung.",
    features: [
      "Vollständige Visum- und Einwanderungsunterstützung",
      "Personalisierte Wohnungssuche",
      "Beratung zu Schulen und Bildung",
      "Einrichtung von Bankkonten und Finanzberatung",
      "Kulturelle Orientierung und Integrationsunterstützung"
    ],
    price: "599€",
    duration: "Mehrere Sitzungen"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Unsere Beratungsleistungen</h2>
          <p className="text-gray-600">
            Wählen Sie aus unserer Palette spezialisierter Beratungsleistungen, die für jeden Aspekt eines Umzugs nach Dubai konzipiert sind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
