import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight } from 'lucide-react';

const CostCalculator = () => {
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

  return (
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
                          ? "bg-dubai-gold text-brand-light-gold shadow-md"
                          : "bg-dubai-sand/50 text-gray-700 hover:bg-dubai-dark-sand/30 border border-dubai-dark-sand/30"
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
                          ? "bg-dubai-gold text-brand-light-gold shadow-md"
                          : "bg-dubai-sand/50 text-gray-700 hover:bg-dubai-dark-sand/30 border border-dubai-dark-sand/30"
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
                          ? "bg-dubai-gold text-brand-light-gold hover:bg-dubai-gold/90"
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
          
          <div className="mt-8 text-center">
            <Link
              to="/beratung"
              className="px-8 py-3 rounded-md text-white primary-gradient-bg hover:opacity-90 transition-opacity font-medium inline-flex items-center shadow-md"
            >
              Persönliche Kostenberatung erhalten <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;
