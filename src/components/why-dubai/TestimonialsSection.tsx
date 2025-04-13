
import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="py-20 blue-gradient-bg text-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">Was Deutsche über das Leben in Dubai sagen</h2>
          <p className="text-white/80">
            Hören Sie direkt von deutschen Landsleuten, die den Umzug gewagt haben und das Leben in Dubai genießen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Katharina Becker" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold">Katharina Becker</h4>
                <p className="text-white/70 text-sm">Umgezogen aus München in 2019</p>
              </div>
            </div>
            <p className="text-white/90 italic mb-4">
              "Der Umzug nach Dubai hat meine Karriere und meinen Lebensstil verändert. Ich spare dank der Steuervorteile deutlich mehr Geld und liebe das kosmopolitische Umfeld. Ja, die Sommer sind heiß, aber moderne Klimaanlagen sind überall, und die Winter sind absolut perfekt."
            </p>
            <p className="text-white/90">
              "Der Sicherheitsaspekt kann nicht genug betont werden — ich fühle mich wohl, zu jeder Tages- und Nachtzeit allein zu gehen, etwas, was ich in Deutschland nicht immer sagen konnte."
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <img 
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Stefan Hoffmann" 
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold">Stefan Hoffmann</h4>
                <p className="text-white/70 text-sm">Umgezogen aus Berlin in 2020</p>
              </div>
            </div>
            <p className="text-white/90 italic mb-4">
              "Als Unternehmer bot mir Dubai ein wirtschaftsfreundliches Umfeld, das nach der Bürokratie, mit der ich in Deutschland konfrontiert war, erfrischend war. Die Gründung meines Unternehmens war unkompliziert, und die Abwesenheit von Einkommensteuer ermöglichte es mir, mehr in mein Geschäft zu reinvestieren."
            </p>
            <p className="text-white/90">
              "Das internationale Netzwerk, das ich hier aufgebaut habe, war von unschätzbarem Wert. Meine Familie hat sich auch gut angepasst — meine Kinder besuchen eine hervorragende internationale Schule, und wir genießen den Outdoor-Lifestyle während der kühleren Monate."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
