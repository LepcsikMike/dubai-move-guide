
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsletterSignup from '@/components/NewsletterSignup';

const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="mb-6 gradient-text">Bereit, Ihre Dubai-Reise zu beginnen?</h2>
            <p className="text-gray-600 mb-8">
              Egal, ob Sie gerade erst die Idee erkunden oder bereit sind, den Umzug zu machen, wir sind da, um bei jedem Schritt zu helfen. 
              Erhalten Sie personalisierte Beratung, laden Sie unsere Ressourcen herunter oder abonnieren Sie unseren Newsletter für regelmäßige Updates.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Link
                to="/beratung"
                className="px-6 py-3 rounded-md text-white primary-gradient-bg hover:opacity-90 transition-opacity font-medium flex items-center justify-center"
              >
                Erhalten Sie persönliche Hilfe
              </Link>
              <Link
                to="/ressourcen"
                className="px-6 py-3 rounded-md border border-brand-light-purple text-gray-700 hover:bg-brand-light-purple/10 transition-colors font-medium flex items-center justify-center"
              >
                Zugang zu kostenlosen Ressourcen
              </Link>
            </div>
            
            <div className="flex items-center space-x-3 text-gray-600">
              <Check className="h-5 w-5 text-brand-light-purple" />
              <span>Vertraut von über 10.000 Deutschen, die erfolgreich nach Dubai umgezogen sind</span>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
