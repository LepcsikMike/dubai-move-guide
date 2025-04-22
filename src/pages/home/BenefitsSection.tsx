
import React from 'react';
import { Check, Shield, Landmark, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Steuerfreies Einkommen',
      description: 'Genießen Sie 0% Einkommensteuer, was Ihnen hilft, mehr zu sparen und schneller Vermögen aufzubauen.',
      icon: <Landmark className="h-10 w-10 text-brand-light-purple" />
    },
    {
      title: 'Hohe Sicherheitsstandards',
      description: 'Erleben Sie eine der sichersten Städte der Welt mit niedrigen Kriminalitätsraten.',
      icon: <Shield className="h-10 w-10 text-brand-light-purple" />
    },
    {
      title: 'Außergewöhnliche Lebensqualität',
      description: 'Weltklasse-Infrastruktur, Gesundheitsversorgung und Unterhaltungsmöglichkeiten.',
      icon: <Building className="h-10 w-10 text-brand-light-purple" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6 gradient-text">Warum Tausende Deutsche Dubai wählen</h2>
          <p className="text-gray-600">
            Dubai bietet eine unvergleichliche Kombination aus finanziellen Vorteilen, Sicherheit und Lebensqualität, die es zu einem zunehmend beliebten Ziel für Deutsche macht, die umziehen möchten.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-brand-light-gray p-6 rounded-lg shadow-sm border border-brand-purple/10 hover:shadow-md transition-shadow">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/warum-dubai"
            className="px-6 py-3 rounded-md text-white primary-gradient-bg hover:opacity-90 transition-opacity font-medium inline-flex items-center"
          >
            Mehr über Dubai erfahren <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
