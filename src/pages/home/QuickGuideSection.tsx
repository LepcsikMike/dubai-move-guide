
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickGuideSection = () => {
  const guidePoints = [
    'Verstehen der Visum-Optionen und -Anforderungen',
    'Die perfekte Unterkunft im richtigen Viertel finden',
    'Navigation durch Gesundheitsversorgung und Versicherungsoptionen',
    'Entdeckung der besten Schulen und Bildungswege',
    'Einrichtung von Bankgeschäften und Finanzverwaltung',
    'Kennenlernen der lokalen Bräuche und Kultur'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 gradient-text">Ihre Roadmap nach Dubai</h2>
            <p className="text-gray-600 mb-8">
              Der Umzug nach Dubai mag komplex erscheinen, aber mit unserer Schritt-für-Schritt-Anleitung werden Sie den Prozess mühelos navigieren. 
              Von der Beschaffung des richtigen Visums bis zur Suche nach Schulen für Ihre Kinder - wir haben alles für Sie abgedeckt.
            </p>
            
            <div className="space-y-4">
              {guidePoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-brand-light-purple mr-3 mt-1 shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <Link
                to="/schritt-fuer-schritt-anleitung"
                className="px-6 py-3 rounded-md text-white primary-gradient-bg hover:opacity-90 transition-opacity font-medium inline-flex items-center"
              >
                Vollständige Anleitung ansehen <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
              alt="Dubai Marina" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-brand-light-purple/20 w-64 hidden md:block">
              <div className="text-brand-light-purple font-bold text-xl">100.000+</div>
              <div className="text-gray-600">Expatriates aus Deutschland nennen Dubai jetzt ihr Zuhause</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickGuideSection;
