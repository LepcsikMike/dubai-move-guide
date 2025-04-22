
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import LeadForm from '@/components/LeadForm';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Dubai skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75"></div>
      </div>
      
      <div className="section-container relative z-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <h1 className="mb-6 animate-fade-in font-heading text-white">
              Ihr Weg zu einem neuen Leben in Dubai beginnt hier!
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Umfassende Anleitung für Deutsche, die nach Dubai umziehen möchten - von Visaanforderungen bis zur Suche nach Ihrem Traumhaus.
            </p>
            
            <div className="hidden lg:flex flex-col sm:flex-row items-center gap-4 animate-slide-up">
              <Link
                to="/schritt-fuer-schritt-anleitung"
                className="w-full sm:w-auto px-6 py-3 rounded-md text-white primary-gradient-bg hover:opacity-90 transition-opacity font-medium flex items-center justify-center"
              >
                Starten Sie Ihre Reise <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#contact-form"
                className="w-full sm:w-auto px-6 py-3 rounded-md bg-brand-orange text-white hover:bg-brand-orange/90 transition-colors font-medium flex items-center justify-center"
              >
                Jetzt Beratung anfordern
              </a>
            </div>
            
            <div className="mt-8 lg:hidden text-center">
              <a
                href="#contact-form"
                className="flex items-center justify-center gap-2 text-lg text-white animate-bounce"
              >
                Zum Kontaktformular
                <ArrowDown className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl" id="contact-form">
            <h2 className="text-2xl font-bold mb-6 text-center text-brand-dark-purple">
              Kostenlose Erstberatung anfordern
            </h2>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
