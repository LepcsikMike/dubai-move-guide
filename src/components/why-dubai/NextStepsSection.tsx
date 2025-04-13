
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import NewsletterSignup from '@/components/NewsletterSignup';

const NextStepsSection = () => {
  return (
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
  );
};

export default NextStepsSection;
