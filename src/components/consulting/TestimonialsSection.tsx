
import React from 'react';

const testimonials = [
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
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Was unsere Kunden sagen</h2>
          <p className="text-gray-600">
            Hören Sie direkt von Deutschen, die unsere Beratungsdienste für ihren Umzug nach Dubai genutzt haben.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
  );
};

export default TestimonialsSection;
