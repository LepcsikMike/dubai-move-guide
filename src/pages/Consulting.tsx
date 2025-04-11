
import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Consulting = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Beratungsanfrage erhalten",
        description: "Vielen Dank für Ihr Interesse. Wir werden Sie innerhalb von 24 Stunden kontaktieren, um Ihre Beratung zu planen.",
        duration: 5000,
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceType: '',
        message: ''
      });
      setLoading(false);
    }, 1500);
  };

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

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573497701240-345a300b8d36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Dubai Beratung" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="section-container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="mb-6 animate-fade-in">Experten-Beratungsservice</h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Erhalten Sie persönliche Beratung von unserem Team aus Umzugsexperten, um Ihren Umzug nach Dubai reibungslos und erfolgreich zu gestalten.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              <div 
                key={index} 
                className="bg-dubai-sand/20 rounded-lg overflow-hidden border border-dubai-dark-sand/20 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-dubai-gold mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 bg-white border-t border-dubai-dark-sand/20">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">Ab</span>
                    <span className="text-2xl font-bold text-dubai-gold">{service.price}</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-6">
                    Dauer: {service.duration}
                  </div>
                  <a 
                    href="#booking-form" 
                    className="block w-full py-2 text-center rounded-md text-white gold-gradient-bg hover:opacity-90 transition-opacity font-medium"
                  >
                    Beratung buchen
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-dubai-dark-sand/10">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">So funktioniert unser Beratungsprozess</h2>
            <p className="text-gray-600">
              Wir haben einen einfachen, effizienten Prozess entwickelt, um Ihnen die benötigte Beratung für Ihren Umzug nach Dubai zu bieten.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Anfrage einreichen",
                description: "Füllen Sie unser Beratungsanfrageformular mit Details zu Ihrer Situation und Ihren Bedürfnissen aus.",
                icon: "📝"
              },
              {
                step: "2",
                title: "Termin vereinbaren",
                description: "Unser Team wird Sie innerhalb von 24 Stunden kontaktieren, um Ihre Beratung zu einem für Sie passenden Zeitpunkt zu planen.",
                icon: "📅"
              },
              {
                step: "3",
                title: "Expertenberatung erhalten",
                description: "Treffen Sie unsere Spezialisten per Videoanruf, um Ihre spezifischen Bedürfnisse zu besprechen und persönliche Beratung zu erhalten.",
                icon: "💬"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 rounded-full gold-gradient-bg text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Was unsere Kunden sagen</h2>
            <p className="text-gray-600">
              Hören Sie direkt von Deutschen, die unsere Beratungsdienste für ihren Umzug nach Dubai genutzt haben.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Die Visum-Beratung hat mir unzählige Stunden Recherche und potenzielle Fehler erspart. Mein Golden Visa wurde dank der Expertenberatung in Rekordzeit genehmigt.",
                name: "Dr. Frank Weber",
                title: "Arzt aus München"
              },
              {
                quote: "Das umfassende Paket war jeden Euro wert. Von der Suche nach Schulen für unsere Kinder bis zur Navigation auf dem Wohnungsmarkt - jeder Aspekt unseres Umzugs wurde professionell begleitet.",
                name: "Familie Schneider",
                title: "Umgezogen aus Frankfurt"
              },
              {
                quote: "Die Gründung meines Unternehmens in Dubai schien entmutigend, bis ich meine Beratung hatte. Die klare Schritt-für-Schritt-Anleitung machte den Prozess unkompliziert und effizient.",
                name: "Martina Bauer",
                title: "Unternehmerin aus Berlin"
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-6 bg-dubai-sand/20 rounded-lg border border-dubai-dark-sand/20">
                <div className="h-40 flex items-center mb-6">
                  <p className="text-gray-700 italic">„{testimonial.quote}"</p>
                </div>
                <div className="border-t border-dubai-dark-sand/20 pt-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-20 bg-dubai-dark-sand/10">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Buchen Sie Ihre Beratung</h2>
            <p className="text-gray-600">
              Füllen Sie das untenstehende Formular aus, um Ihre persönliche Beratung anzufragen. Unser Team wird Sie innerhalb von 24 Stunden kontaktieren, um Ihren Termin zu planen.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 border border-dubai-dark-sand/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Vorname *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nachname *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-Mail-Adresse *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefonnummer
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                  Beratungstyp *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                >
                  <option value="">Beratungstyp auswählen</option>
                  <option value="visa">Visum & Umzug Beratung</option>
                  <option value="housing">Immobilien & Wohnungssuche</option>
                  <option value="business">Unternehmensaufbau Beratung</option>
                  <option value="comprehensive">Umfassendes Umzugspaket</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Ihre Situation & Fragen
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                  placeholder="Bitte beschreiben Sie kurz Ihre Situation und spezifische Fragen, die Sie haben."
                ></textarea>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-dubai-gold border-dubai-dark-sand rounded mt-1"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                    Ich stimme der <a href="/datenschutz" className="text-dubai-gold hover:underline">Datenschutzerklärung</a> zu und bin damit einverstanden, bezüglich meiner Beratungsanfrage kontaktiert zu werden.
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-md text-white gold-gradient-bg hover:opacity-90 transition-opacity font-medium flex justify-center items-center"
              >
                {loading ? (
                  <>
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    Beratung buchen <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Häufig gestellte Fragen</h2>
            <p className="text-gray-600">
              Erhalten Sie Antworten auf häufige Fragen zu unseren Beratungsleistungen.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Wie werden Beratungen durchgeführt?",
                answer: "Beratungen finden hauptsächlich per Videoanruf statt (Zoom, Teams oder ähnliches). Für Kunden, die bereits in Dubai sind, können persönliche Treffen arrangiert werden."
              },
              {
                question: "In welchen Sprachen bieten Sie Beratungen an?",
                answer: "Unsere Berater sprechen fließend Deutsch und Englisch. Beratungen können je nach Ihrer Präferenz in einer der beiden Sprachen durchgeführt werden."
              },
              {
                question: "Wie schnell kann ich einen Beratungstermin vereinbaren?",
                answer: "In der Regel können Beratungen innerhalb von 2-5 Werktagen nach Ihrer Anfrage je nach Verfügbarkeit unserer Berater geplant werden."
              },
              {
                question: "Kann ich mein Beratungspaket später upgraden?",
                answer: "Ja, Sie können jederzeit auf ein umfassenderes Paket upgraden. Wir verrechnen einfach die Kosten Ihrer ersten Beratung mit dem neuen Paket."
              },
              {
                question: "Gibt es eine Rückerstattungspolitik, wenn ich nicht zufrieden bin?",
                answer: "Ja, wir bieten eine Zufriedenheitsgarantie. Wenn Sie unsere Beratung nicht als wertvoll empfinden, bieten wir eine kostenlose Folgesitzung oder eine teilweise Rückerstattung an."
              },
              {
                question: "Bieten Sie fortlaufende Unterstützung nach der Beratung an?",
                answer: "Das umfassende Umzugspaket beinhaltet fortlaufende Unterstützung. Für andere Pakete sind Folgefragen per E-Mail für 30 Tage inbegriffen. Zusätzliche Unterstützung kann zu Vorzugskonditionen vereinbart werden."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-dubai-sand/20 rounded-lg border border-dubai-dark-sand/20">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Consulting;
