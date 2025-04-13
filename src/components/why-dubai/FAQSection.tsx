
import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Muss ich Arabisch lernen, um in Dubai zu leben?",
      answer: "Nicht unbedingt. Englisch wird in Dubai im Geschäfts-, Einzelhandels- und Gastgewerbesektor weit verbreitet gesprochen. Während das Erlernen grundlegender arabischer Ausdrücke geschätzt wird und hilfreich ist, können Sie leicht mit Englisch durch den Alltag navigieren."
    },
    {
      question: "Wie heiß wird es wirklich in Dubai?",
      answer: "Die Sommertemperaturen (Juni bis September) liegen typischerweise zwischen 38-42°C und können gelegentlich 48°C erreichen. Allerdings sind fast alle Innenräume klimatisiert, und das Wetter von Oktober bis Mai ist sehr angenehm, mit Temperaturen zwischen 20-30°C."
    },
    {
      question: "Kann ich weiterhin meine deutsche Rente beziehen, wenn ich nach Dubai ziehe?",
      answer: "Ja, Deutsche können ihre Rente weiterhin beziehen, während sie in Dubai leben. Deutschland hat ein Sozialversicherungsabkommen mit den VAE, das Rentenüberweisungen ermöglicht. Die Rente wird typischerweise auf Ihr deutsches Bankkonto überwiesen, das Sie beibehalten können."
    },
    {
      question: "Wie steht es um die Gesundheitsversorgung in Dubai?",
      answer: "Dubai verfügt über hervorragende private Gesundheitseinrichtungen mit vielen deutschsprachigen Ärzten. Krankenversicherung ist für Einwohner obligatorisch. Die Qualität der Gesundheitsversorgung ist hoch, oft vergleichbar mit oder besser als europäische Standards, besonders in privaten Krankenhäusern."
    },
    {
      question: "Ist es schwierig, sich an die kulturellen Unterschiede anzupassen?",
      answer: "Die meisten Deutschen passen sich gut an das Leben in Dubai an. Während es kulturelle Unterschiede gibt, ist Dubai sehr international und entgegenkommend. Respekt für lokale Bräuche bezüglich Kleidung und Verhalten an öffentlichen Orten ist wichtig, aber der Lebensstil ist im Allgemeinen modern und kosmopolitisch."
    },
    {
      question: "Kann ich in Dubai Alkohol kaufen?",
      answer: "Ja, Alkohol ist in lizenzierten Restaurants, Hotels und Bars erhältlich. Einwohner können eine Alkohollizenz erhalten, um Alkohol von bestimmten Geschäften für den Hauskonsum zu kaufen. Die Regeln wurden in den letzten Jahren gelockert, was den Prozess einfacher macht."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">Häufig gestellte Fragen</h2>
          <p className="text-gray-600">
            Erhalten Sie Antworten auf häufige Fragen zur Umsiedlung von Deutschland nach Dubai.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 rounded-lg border border-dubai-dark-sand/30">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
