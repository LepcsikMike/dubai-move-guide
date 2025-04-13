
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileDown, Calculator, FileText, Video, ArrowRight, Check, FileQuestion } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Resources = () => {
  const [housingBudget, setHousingBudget] = useState(10000);
  const [familySize, setFamilySize] = useState(2);
  const [schoolAge, setSchoolAge] = useState(0);
  const [lifestyle, setLifestyle] = useState('moderate');

  const calculateMonthlyCost = () => {
    // Basic housing cost based on input
    const housingCost = housingBudget;
    
    // Utility costs (adjust with family size)
    const utilitiesCost = 500 + (familySize * 150);
    
    // Food and groceries
    const groceriesCost = familySize * 1200;
    
    // Transportation
    const transportCost = 1500; 
    
    // Education cost per child in school
    const educationCost = schoolAge * 3500;
    
    // Lifestyle multiplier
    let lifestyleMultiplier = 1;
    switch(lifestyle) {
      case 'budget':
        lifestyleMultiplier = 0.8;
        break;
      case 'moderate':
        lifestyleMultiplier = 1;
        break;
      case 'premium':
        lifestyleMultiplier = 1.3;
        break;
      case 'luxury':
        lifestyleMultiplier = 1.8;
        break;
      default:
        lifestyleMultiplier = 1;
    }
    
    // Entertainment and leisure
    const entertainmentCost = 2000 * lifestyleMultiplier;
    
    // Healthcare estimate
    const healthcareCost = familySize * 300;
    
    // Miscellaneous
    const miscCost = 1000 * lifestyleMultiplier;
    
    // Total monthly cost
    const totalCost = (housingCost + utilitiesCost + groceriesCost + transportCost + 
                        educationCost + entertainmentCost + healthcareCost + miscCost);
    
    return {
      housing: housingCost,
      utilities: utilitiesCost,
      groceries: groceriesCost,
      transport: transportCost,
      education: educationCost,
      entertainment: entertainmentCost,
      healthcare: healthcareCost,
      misc: miscCost,
      total: totalCost
    };
  };

  const costs = calculateMonthlyCost();

  const downloadResource = (resourceName: string) => {
    toast({
      title: "Download gestartet",
      description: `${resourceName} wird auf Ihr Gerät heruntergeladen.`,
      duration: 3000,
    });
  };

  const resourceCategories = [
    {
      id: "checklists",
      title: "Umzugs-Checklisten",
      icon: <FileText className="h-10 w-10 text-dubai-gold" />,
      resources: [
        {
          title: "6-Monats-Vorbereitungscheckliste",
          description: "Beginnen Sie Ihre Planung frühzeitig mit dieser umfassenden Checkliste der Aufgaben, die 3-6 Monate vor Ihrem Umzug zu erledigen sind.",
          id: "pre-move-checklist"
        },
        {
          title: "1-Monat letzte Vorbereitungen",
          description: "Wichtige Aufgaben, die im letzten Monat vor dem Umzug nach Dubai zu erledigen sind.",
          id: "final-prep-checklist"
        },
        {
          title: "Erste Woche in Dubai Checkliste",
          description: "Wesentliche Aufgaben, die in Ihrer ersten Woche in Dubai zu erledigen sind, um sich schnell einzuleben.",
          id: "first-week-checklist"
        },
        {
          title: "Dokumentenvorbereitungsleitfaden",
          description: "Vollständige Liste der Dokumente, die vor dem Umzug gesammelt, übersetzt und beglaubigt werden müssen.",
          id: "document-guide"
        }
      ]
    },
    {
      id: "guides",
      title: "Umfassende Leitfäden",
      icon: <FileQuestion className="h-10 w-10 text-dubai-gold" />,
      resources: [
        {
          title: "Vollständiger Wohnungsleitfaden",
          description: "Detaillierter Überblick über Dubais Stadtteile, den Mietprozess und die Möglichkeiten zum Immobilienkauf.",
          id: "housing-guide"
        },
        {
          title: "Visumantragsanleitung",
          description: "Schritt-für-Schritt-Anleitung zur Beantragung verschiedener Arten von Dubai-Visa aus Deutschland.",
          id: "visa-guide"
        },
        {
          title: "Banking & Finanzeinrichtung",
          description: "Wie Sie Ihr Finanzleben in Dubai einrichten, von Bankkonten bis hin zu Investitionen.",
          id: "banking-guide"
        },
        {
          title: "Deutsche Schulen & Bildung",
          description: "Optionen für deutsche Lehrplanbildung und internationale Schulen in Dubai.",
          id: "education-guide"
        }
      ]
    },
    {
      id: "videos",
      title: "Video-Ressourcen",
      icon: <Video className="h-10 w-10 text-dubai-gold" />,
      resources: [
        {
          title: "Dubai Stadtteiltouren",
          description: "Virtuelle Touren durch beliebte Expatriate-Viertel in Dubai.",
          id: "neighborhood-videos"
        },
        {
          title: "Visumsprozess erklärt",
          description: "Visuelle Anleitung durch den Visumantrags- und Genehmigungsprozess.",
          id: "visa-videos"
        },
        {
          title: "Tipps zur kulturellen Anpassung",
          description: "Praktische Ratschläge zur Anpassung an Dubais kulturelles Umfeld.",
          id: "cultural-videos"
        },
        {
          title: "Deutsche Erfolgsgeschichten",
          description: "Interviews mit Deutschen, die erfolgreich nach Dubai umgezogen sind.",
          id: "success-videos"
        }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Dubai Ressourcen" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="section-container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="mb-6 animate-fade-in">Ressourcen & Tools</h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Laden Sie Anleitungen, Checklisten herunter und nutzen Sie unsere interaktiven Tools, um Ihren Umzug nach Dubai zu planen und durchzuführen.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories Section */}
      {resourceCategories.map((category) => (
        <section key={category.id} id={category.id} className="py-16 bg-white">
          <div className="section-container">
            <div className="mb-12 flex items-center">
              <div className="mr-4">{category.icon}</div>
              <h2 className="text-3xl font-bold">{category.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.resources.map((resource) => (
                <div 
                  key={resource.id} 
                  className="bg-dubai-sand/30 rounded-lg p-6 border border-dubai-dark-sand/20 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm min-h-[60px]">{resource.description}</p>
                  <button
                    onClick={() => downloadResource(resource.title)}
                    className="text-dubai-gold font-medium flex items-center hover:underline"
                  >
                    <FileDown className="mr-2 h-4 w-4" />
                    Ressource herunterladen
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Cost Calculator Section */}
      <section id="calculator" className="py-16 bg-dubai-dark-sand/10">
        <div className="section-container">
          <div className="mb-12 flex items-center">
            <Calculator className="h-10 w-10 text-dubai-gold mr-4" />
            <h2 className="text-3xl font-bold">Dubai Lebenshaltungskosten-Rechner</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 border border-dubai-dark-sand/20">
            <p className="text-gray-600 mb-8">
              Schätzen Sie Ihre monatlichen Ausgaben in Dubai basierend auf Ihrem Wohnungsbudget, Ihrer Familiengröße und Ihren Lifestyle-Präferenzen.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Geben Sie Ihre Details ein</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monatliches Wohnungsbudget (AED)
                  </label>
                  <input
                    type="range"
                    min="5000"
                    max="50000"
                    step="1000"
                    value={housingBudget}
                    onChange={(e) => setHousingBudget(parseInt(e.target.value))}
                    className="w-full h-2 bg-dubai-dark-sand/30 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>5.000</span>
                    <span>{housingBudget.toLocaleString()} AED</span>
                    <span>50.000</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Familiengröße (inklusive Ihrer selbst)
                  </label>
                  <div className="flex space-x-4">
                    {[1, 2, 3, 4, 5, 6].map((size) => (
                      <button
                        key={size}
                        onClick={() => setFamilySize(size)}
                        className={`w-10 h-10 rounded-full ${
                          familySize === size
                            ? "gold-gradient-bg text-white"
                            : "bg-dubai-sand/50 text-gray-700 hover:bg-dubai-dark-sand/30"
                        } flex items-center justify-center font-medium transition-colors`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Anzahl der schulpflichtigen Kinder
                  </label>
                  <div className="flex space-x-4">
                    {[0, 1, 2, 3, 4].map((num) => (
                      <button
                        key={num}
                        onClick={() => setSchoolAge(num)}
                        className={`w-10 h-10 rounded-full ${
                          schoolAge === num
                            ? "gold-gradient-bg text-white"
                            : "bg-dubai-sand/50 text-gray-700 hover:bg-dubai-dark-sand/30"
                        } flex items-center justify-center font-medium transition-colors`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lifestyle-Präferenz
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'budget', label: 'Budget' },
                      { id: 'moderate', label: 'Moderat' },
                      { id: 'premium', label: 'Premium' },
                      { id: 'luxury', label: 'Luxus' }
                    ].map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setLifestyle(option.id)}
                        className={`py-2 px-4 rounded-md text-sm font-medium ${
                          lifestyle === option.id
                            ? "gold-gradient-bg text-white"
                            : "bg-dubai-sand/50 text-gray-700 hover:bg-dubai-dark-sand/30"
                        } transition-colors`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-dubai-sand/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Geschätzte monatliche Ausgaben</h3>
                
                <div className="space-y-3 mb-6">
                  {[
                    { label: 'Wohnen', value: costs.housing },
                    { label: 'Nebenkosten', value: costs.utilities },
                    { label: 'Lebensmittel', value: costs.groceries },
                    { label: 'Transport', value: costs.transport },
                    { label: 'Bildung', value: costs.education },
                    { label: 'Unterhaltung', value: costs.entertainment },
                    { label: 'Gesundheitswesen', value: costs.healthcare },
                    { label: 'Sonstiges', value: costs.misc }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-dubai-dark-sand/20">
                      <span className="text-gray-700">{item.label}</span>
                      <span className="font-medium">{item.value.toLocaleString()} AED</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center py-3 border-t-2 border-dubai-gold">
                  <span className="text-lg font-bold">Monatliche Gesamtkosten</span>
                  <span className="text-xl font-bold text-dubai-gold">{costs.total.toLocaleString()} AED</span>
                </div>
                
                <div className="mt-4 text-sm text-gray-600">
                  <p>* Dies ist eine Schätzung basierend auf durchschnittlichen Kosten in Dubai. Die tatsächlichen Ausgaben können variieren.</p>
                  <p>* 1 Euro ≈ 4 AED (ungefährer Umrechnungskurs)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-12 text-center">Was unsere Nutzer sagen</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Die Checklisten und der Kostenrechner waren unbezahlbar für die Planung des Umzugs unserer Familie. Wir fühlten uns viel besser vorbereitet und zuversichtlicher.",
                author: "Claudia & Peter Schmitz",
                moved: "Umgezogen aus Hamburg in 2023"
              },
              {
                quote: "Ich habe den Stadtteilführer genutzt, um die perfekte Wohnung in Dubai Marina zu finden. Die detaillierten Einblicke haben mir geholfen, die richtige Wahl für meinen Lebensstil zu treffen.",
                author: "Jan Hoffmann",
                moved: "Umgezogen aus München in 2024"
              },
              {
                quote: "Der Visa-Leitfaden hat einen scheinbar komplexen Prozess vereinfacht. Ich bin ihm Schritt für Schritt gefolgt und habe mein Golden Visa ohne Probleme erhalten.",
                author: "Sarah Becker",
                moved: "Umgezogen aus Berlin in 2023"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-dubai-sand/20 p-6 rounded-lg border border-dubai-dark-sand/20">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.moved}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 blue-gradient-bg text-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Benötigen Sie persönliche Unterstützung?</h2>
            <p className="text-white/80 mb-8">
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
    </>
  );
};

export default Resources;
