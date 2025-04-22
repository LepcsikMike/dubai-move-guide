
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
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
  ];

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-12 text-center">Was unsere Nutzer sagen</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
  );
};

export default TestimonialsSection;
