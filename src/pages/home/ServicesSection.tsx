
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Description, Home, BusinessCenter } from '@material-ui/icons';

const ServicesSection = () => {
  const services = [
    {
      title: "Visum & Aufenthaltsgenehmigung",
      description: "Wir helfen Ihnen bei der Auswahl und Beantragung des für Sie optimalen Visums - vom Arbeitnehmervisum bis zum Golden Visa.",
      icon: <Description className="text-[2.5rem] text-brand-gold" />,
      link: "/schritt-fuer-schritt-anleitung#visa"
    },
    {
      title: "Immobilien & Wohnungssuche",
      description: "Lassen Sie sich bei der Suche nach der perfekten Wohnung oder Haus in der passenden Nachbarschaft unterstützen.",
      icon: <Home className="text-[2.5rem] text-brand-gold" />,
      link: "/schritt-fuer-schritt-anleitung#housing"
    },
    {
      title: "Firmengründung & Business Setup",
      description: "Erfahren Sie, wie Sie ein Unternehmen in Dubai gründen, welche Freizonen in Frage kommen und welche Lizenzen Sie benötigen.",
      icon: <BusinessCenter className="text-[2.5rem] text-brand-gold" />,
      link: "/schritt-fuer-schritt-anleitung#business"
    }
  ];

  return (
    <section className="py-20 bg-brand-light-gray">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6 gradient-text">Unsere Dienstleistungen</h2>
          <p className="text-gray-600">
            Wir bieten umfassende Unterstützung für jeden Schritt Ihres Umzugs nach Dubai an, von der Visumsbeantragung bis zur Immobiliensuche.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-brand-light-purple font-medium inline-flex items-center hover:underline"
                >
                  Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/beratung"
            className="px-6 py-3 rounded-md bg-brand-orange text-white hover:bg-brand-orange/90 transition-colors font-medium inline-flex items-center"
          >
            Alle Dienstleistungen ansehen <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
