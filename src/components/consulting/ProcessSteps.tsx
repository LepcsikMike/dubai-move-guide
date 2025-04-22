
import React from 'react';

const steps = [
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
];

const ProcessSteps = () => {
  return (
    <section className="py-20 bg-dubai-dark-sand/10">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">So funktioniert unser Beratungsprozess</h2>
          <p className="text-gray-600">
            Wir haben einen einfachen, effizienten Prozess entwickelt, um Ihnen die benötigte Beratung für Ihren Umzug nach Dubai zu bieten.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
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
  );
};

export default ProcessSteps;
