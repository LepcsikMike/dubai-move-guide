
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 blue-gradient-bg">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-[#D4AF37]">Benötigen Sie persönliche Unterstützung?</h2>
          <p className="text-[#D4AF37] mb-8">
            Unsere Ressourcen bieten allgemeine Anleitungen, aber jede Situation ist einzigartig. Erhalten Sie persönliche Beratung 
            zu Ihren spezifischen Fragen und Herausforderungen beim Umzug nach Dubai.
          </p>
          <div className="flex justify-center">
            <Link
              to="/beratung"
              className="px-8 py-3 rounded-md text-dubai-gold bg-white hover:bg-white/90 transition-colors font-medium flex items-center"
            >
              Beratungstermin buchen <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
