
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sun, Shield, Landmark, Building } from 'lucide-react';
import NewsletterSignup from '@/components/NewsletterSignup';

const HomePage = () => {
  const benefits = [
    {
      title: 'Steuerfreies Einkommen',
      description: 'Genießen Sie 0% Einkommensteuer, was Ihnen hilft, mehr zu sparen und schneller Vermögen aufzubauen.',
      icon: <Landmark className="h-10 w-10 text-dubai-gold" />
    },
    {
      title: 'Hohe Sicherheitsstandards',
      description: 'Erleben Sie eine der sichersten Städte der Welt mit niedrigen Kriminalitätsraten.',
      icon: <Shield className="h-10 w-10 text-dubai-gold" />
    },
    {
      title: 'Außergewöhnliche Lebensqualität',
      description: 'Weltklasse-Infrastruktur, Gesundheitsversorgung und Unterhaltungsmöglichkeiten.',
      icon: <Sun className="h-10 w-10 text-dubai-gold" />
    },
    {
      title: 'Florierende Wirtschaft',
      description: 'Zugang zu zahlreichen Karrieremöglichkeiten in einer wachsenden, vielfältigen Wirtschaft.',
      icon: <Building className="h-10 w-10 text-dubai-gold" />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Dubai skyline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="section-container relative z-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 animate-fade-in">
              Ihr Weg zu einem neuen Leben in Dubai beginnt hier
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Umfassende Anleitung für Deutsche, die nach Dubai umziehen möchten - von Visaanforderungen bis zur Suche nach Ihrem Traumhaus.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
              <Link
                to="/schritt-fuer-schritt-anleitung"
                className="px-6 py-3 rounded-md text-white gold-gradient-bg hover:opacity-90 transition-opacity font-medium flex items-center justify-center"
              >
                Starten Sie Ihre Reise <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/warum-dubai"
                className="px-6 py-3 rounded-md text-white bg-white/20 hover:bg-white/30 transition-colors font-medium"
              >
                Warum Dubai wählen?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6 gradient-text">Warum Tausende Deutsche Dubai wählen</h2>
            <p className="text-gray-600">
              Dubai bietet eine unvergleichliche Kombination aus finanziellen Vorteilen, Sicherheit und Lebensqualität, die es zu einem zunehmend beliebten Ziel für Deutsche macht, die umziehen möchten.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-dubai-sand p-6 rounded-lg shadow-sm border border-dubai-dark-sand/30 hover:shadow-md transition-shadow">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Guide Section */}
      <section className="py-20 bg-dubai-dark-sand/10">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Ihre Roadmap nach Dubai</h2>
              <p className="text-gray-600 mb-8">
                Der Umzug nach Dubai mag komplex erscheinen, aber mit unserer Schritt-für-Schritt-Anleitung werden Sie den Prozess mühelos navigieren. 
                Von der Beschaffung des richtigen Visums bis zur Suche nach Schulen für Ihre Kinder - wir haben alles für Sie abgedeckt.
              </p>
              
              <div className="space-y-4">
                {[
                  'Verstehen der Visum-Optionen und -Anforderungen',
                  'Die perfekte Unterkunft im richtigen Viertel finden',
                  'Navigation durch Gesundheitsversorgung und Versicherungsoptionen',
                  'Entdeckung der besten Schulen und Bildungswege',
                  'Einrichtung von Bankgeschäften und Finanzverwaltung',
                  'Kennenlernen der lokalen Bräuche und Kultur'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-dubai-gold mr-3 mt-1 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link
                  to="/schritt-fuer-schritt-anleitung"
                  className="px-6 py-3 rounded-md text-white gold-gradient-bg hover:opacity-90 transition-opacity font-medium inline-flex items-center"
                >
                  Vollständige Anleitung ansehen <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544413860-2d392499a162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Dubai Marina" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-dubai-dark-sand/30 w-64 hidden md:block">
                <div className="text-dubai-gold font-bold text-xl">100.000+</div>
                <div className="text-gray-600">Expatriates aus Deutschland nennen Dubai jetzt ihr Zuhause</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Preview Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Wertvolle Ressourcen für Ihren Umzug</h2>
            <p className="text-gray-600">
              Greifen Sie auf unsere umfangreiche Sammlung von Leitfäden, Checklisten und Tools zu, die entwickelt wurden, um Ihren Umzugsprozess reibungslos und stressfrei zu gestalten.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dubai-sand rounded-lg shadow-sm border border-dubai-dark-sand/30 overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Checkliste" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Umzugschecklisten</h3>
                <p className="text-gray-600 mb-4">
                  Umfassende Checklisten für vor, während und nach Ihrem Umzug, um sicherzustellen, dass nichts vergessen wird.
                </p>
                <Link
                  to="/ressourcen"
                  className="text-dubai-gold font-medium inline-flex items-center hover:underline"
                >
                  Checklisten herunterladen <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-dubai-sand rounded-lg shadow-sm border border-dubai-dark-sand/30 overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Rechner" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Kostenrechner</h3>
                <p className="text-gray-600 mb-4">
                  Schätzen Sie Ihre Lebenshaltungskosten in Dubai mit unserem interaktiven Rechner, der Wohnen, Nebenkosten, Bildung und mehr abdeckt.
                </p>
                <Link
                  to="/ressourcen#calculator"
                  className="text-dubai-gold font-medium inline-flex items-center hover:underline"
                >
                  Probieren Sie den Rechner aus <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-dubai-sand rounded-lg shadow-sm border border-dubai-dark-sand/30 overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Video-Leitfaden" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Video-Leitfäden</h3>
                <p className="text-gray-600 mb-4">
                  Sehen Sie sich unsere Sammlung von Videoleitfäden an, die Stadtteile präsentieren, Visa-Prozesse erklären und vieles mehr.
                </p>
                <Link
                  to="/ressourcen#videos"
                  className="text-dubai-gold font-medium inline-flex items-center hover:underline"
                >
                  Videos ansehen <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dubai-dark-sand/10">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Erfolgsgeschichten</h2>
            <p className="text-gray-600">
              Hören Sie von Deutschen, die erfolgreich nach Dubai umgezogen sind und jetzt ihr neues Leben genießen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Thomas Müller',
                role: 'IT-Berater',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                quote: 'Der Umzug nach Dubai war die beste Entscheidung meines Lebens. Die Ressourcen von dubai-auswandern.com haben den gesamten Prozess viel einfacher gemacht als ich erwartet hatte.'
              },
              {
                name: 'Anna Schmidt',
                role: 'Marketing Direktorin',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                quote: 'Die Schritt-für-Schritt-Anleitung hat mir wirklich geholfen, den Visa-Prozess zu navigieren und die perfekte Wohnung zu finden. Ich genieße jetzt ein steuerfreies Einkommen und einen erstaunlichen Lebensstil.'
              },
              {
                name: 'Markus Weber',
                role: 'Restaurantbesitzer',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                quote: 'Ein Unternehmen in Dubai zu gründen war viel einfacher als ich dachte. Der Beratungsservice half mir mit allen Papierkram und bei der Suche nach dem richtigen Standort.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-dubai-dark-sand/30">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="mb-6">Bereit, Ihre Dubai-Reise zu beginnen?</h2>
              <p className="text-gray-600 mb-8">
                Egal, ob Sie gerade erst die Idee erkunden oder bereit sind, den Umzug zu machen, wir sind da, um bei jedem Schritt zu helfen. 
                Erhalten Sie personalisierte Beratung, laden Sie unsere Ressourcen herunter oder abonnieren Sie unseren Newsletter für regelmäßige Updates.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Link
                  to="/beratung"
                  className="px-6 py-3 rounded-md text-white gold-gradient-bg hover:opacity-90 transition-opacity font-medium flex items-center justify-center"
                >
                  Erhalten Sie persönliche Hilfe
                </Link>
                <Link
                  to="/ressourcen"
                  className="px-6 py-3 rounded-md border border-dubai-dark-sand text-gray-700 hover:bg-dubai-dark-sand/10 transition-colors font-medium flex items-center justify-center"
                >
                  Zugang zu kostenlosen Ressourcen
                </Link>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-600">
                <Check className="h-5 w-5 text-dubai-gold" />
                <span>Vertraut von über 10.000 Deutschen, die erfolgreich nach Dubai umgezogen sind</span>
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

export default HomePage;
