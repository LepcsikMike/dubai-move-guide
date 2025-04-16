
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Der Umzug nach Dubai war die beste Entscheidung meines Lebens. Obwohl ich anfangs Bedenken hatte, bin ich jetzt glücklicher als je zuvor mit meinem steuerfreien Einkommen und der erstklassigen Lebensqualität.",
      name: "Markus Schmidt",
      role: "IT-Berater",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      quote: "Als Unternehmerin konnte ich in Dubai Möglichkeiten finden, die in Deutschland einfach nicht verfügbar waren. Die Gründung meines Unternehmens war unkompliziert und die Netzwerkmöglichkeiten sind unübertroffen.",
      name: "Julia Becker",
      role: "Gründerin & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      quote: "Die Sicherheit und Sauberkeit von Dubai haben meine Erwartungen übertroffen. Meine Familie liebt das Wetter, die Schulen sind hervorragend, und wir haben eine blühende deutsche Community gefunden, die uns geholfen hat, uns zu Hause zu fühlen.",
      name: "Thomas Weber",
      role: "Bauingenieur",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-brand-dark-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gold">Erfolgsgeschichten</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Hören Sie, was Deutsche, die bereits den Schritt gewagt haben, über ihr Leben in Dubai zu sagen haben.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-brand-dark-brown/50 p-8 rounded-lg border border-brand-gold/30 hover:border-brand-gold/50 transition-all">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-brand-gold mr-4"
                />
                <div>
                  <h4 className="font-bold text-gold">{testimonial.name}</h4>
                  <p className="text-brand-sand">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic mb-4">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
