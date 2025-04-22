
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
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
  ];

  return (
    <section className="py-20 bg-brand-light-gray">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6 gradient-text">Erfolgsgeschichten</h2>
          <p className="text-gray-600">
            Hören Sie von Deutschen, die erfolgreich nach Dubai umgezogen sind und jetzt ihr neues Leben genießen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
  );
};

export default TestimonialsSection;
