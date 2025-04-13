
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Shield, Landmark, Building, ArrowDown, User, Mail, Phone } from 'lucide-react';
import NewsletterSignup from '@/components/NewsletterSignup';
import LeadForm from '@/components/LeadForm';

const HomePage = () => {
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
      icon: <User className="h-10 w-10 text-brand-light-purple" />
    },
    {
      title: 'Florierende Wirtschaft',
      description: 'Zugang zu zahlreichen Karrieremöglichkeiten in einer wachsenden, vielfältigen Wirtschaft.',
      icon: <Building className="h-10 w-10 text-brand-light-purple" />
    }
  ];

  return (
    <>
      {/* Hero Section mit Lead-Formular */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Dubai skyline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark-purple/60"></div>
        </div>
        
        <div className="section-container relative z-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <h1 className="mb-6 animate-fade-in font-heading text-white">
                Ihr Weg zu einem neuen Leben in Dubai beginnt hier
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

      {/* Services Section */}
      <section className="py-20 bg-brand-light-gray">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6 gradient-text">Unsere Dienstleistungen</h2>
            <p className="text-gray-600">
              Wir bieten umfassende Unterstützung für jeden Schritt Ihres Umzugs nach Dubai an, von der Visumsbeantragung bis zur Immobiliensuche.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Visum & Aufenthaltsgenehmigung",
                description: "Wir helfen Ihnen bei der Auswahl und Beantragung des für Sie optimalen Visums - vom Arbeitnehmervisum bis zum Golden Visa.",
                icon: "📝",
                link: "/schritt-fuer-schritt-anleitung#visa"
              },
              {
                title: "Immobilien & Wohnungssuche",
                description: "Lassen Sie sich bei der Suche nach der perfekten Wohnung oder Haus in der passenden Nachbarschaft unterstützen.",
                icon: "🏠",
                link: "/schritt-fuer-schritt-anleitung#housing"
              },
              {
                title: "Firmengründung & Business Setup",
                description: "Erfahren Sie, wie Sie ein Unternehmen in Dubai gründen, welche Freizonen in Frage kommen und welche Lizenzen Sie benötigen.",
                icon: "💼",
                link: "/schritt-fuer-schritt-anleitung#business"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
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

      {/* Quick Guide Section */}
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
                {[
                  'Verstehen der Visum-Optionen und -Anforderungen',
                  'Die perfekte Unterkunft im richtigen Viertel finden',
                  'Navigation durch Gesundheitsversorgung und Versicherungsoptionen',
                  'Entdeckung der besten Schulen und Bildungswege',
                  'Einrichtung von Bankgeschäften und Finanzverwaltung',
                  'Kennenlernen der lokalen Bräuche und Kultur'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-brand-light-purple mr-3 mt-1 shrink-0" />
                    <span className="text-gray-700">{item}</span>
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
                src="https://images.unsplash.com/photo-1544413860-2d392499a162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
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

      {/* Testimonials Section */}
      <section className="py-20 bg-brand-light-gray">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6 gradient-text">Erfolgsgeschichten</h2>
            <p className="text-gray-600">
              Hören Sie von Deutschen, die erfolgreich nach Dubai umgezogen sind und jetzt ihr neues Leben genießen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Thomas Müller',
                role: 'IT-Berater',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                quote: 'Der Umzug nach Dubai war die beste Entscheidung meines Lebens. Die Ressourcen und Beratung haben den gesamten Prozess viel einfacher gemacht als ich erwartet hatte.'
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-brand-light-purple/10 hover:shadow-md transition-shadow">
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
    </>
  );
};

export default HomePage;
