
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight } from 'lucide-react';
import InputSection from './calculator/InputSection';
import ResultsSection from './calculator/ResultsSection';
import { calculateMonthlyCost, type CalculatorInputs } from './calculator/costCalculations';

const CostCalculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    housingBudget: 10000,
    familySize: 2,
    schoolAge: 0,
    lifestyle: 'moderate'
  });

  const handleInputChange = (field: keyof CalculatorInputs, value: any) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const costs = calculateMonthlyCost(inputs);

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
            <InputSection inputs={inputs} onInputChange={handleInputChange} />
            <ResultsSection costs={costs} />
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
