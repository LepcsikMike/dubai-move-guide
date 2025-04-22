
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
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
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="mb-6 text-[25px] no-underline">Häufig gestellte Fragen</h4>
          <p className="text-gray-600">
            Erhalten Sie Antworten auf häufige Fragen zu unseren Beratungsleistungen.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="hover:bg-[#f5f5dc] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
