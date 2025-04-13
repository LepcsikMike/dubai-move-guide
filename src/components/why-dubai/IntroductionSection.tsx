
import React from 'react';
import { Sun } from 'lucide-react';

const IntroductionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 gradient-text">Ein Lifestyle-Upgrade</h2>
            <p className="text-gray-600 mb-6">
              Dubai hat sich von einem Wüstenvorposten zu einer globalen Metropole entwickelt und bietet den Bewohnern eine unvergleichliche 
              Kombination aus wirtschaftlichen Möglichkeiten, Sicherheit und Lebensqualität. Als Deutscher, der nach Dubai umzieht, 
              werden Sie zahlreiche Vorteile genießen, die den Übergang lohnenswert machen.
            </p>
            <p className="text-gray-600">
              Von Steuervorteilen, die es Ihnen ermöglichen, Ihr Einkommen zu maximieren, bis hin zu ganzjährigem Sonnenschein und einer strategischen Lage 
              für weltweite Reisen bietet Dubai ein Lifestyle-Upgrade, das schwer zu übertreffen ist. Lassen Sie uns erkunden, warum 
              so viele Deutsche Dubai als ihr neues Zuhause wählen.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1528702748617-c64d49f918af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
              alt="Dubai Lifestyle" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-dubai-dark-sand/30 w-64 hidden md:block">
              <div className="flex items-center">
                <Sun className="h-8 w-8 text-dubai-gold mr-3" />
                <div>
                  <div className="font-bold">340+ Tage</div>
                  <div className="text-gray-600 text-sm">Sonnenschein jedes Jahr</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
