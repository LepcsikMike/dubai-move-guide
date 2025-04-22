
import React from 'react';
import { CostBreakdown } from './costCalculations';

interface ResultsSectionProps {
  costs: CostBreakdown;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ costs }) => {
  const costItems = [
    { label: 'Wohnen', valueAED: costs.housing, valueEUR: costs.housingEUR },
    { label: 'Nebenkosten', valueAED: costs.utilities, valueEUR: costs.utilitiesEUR },
    { label: 'Lebensmittel', valueAED: costs.groceries, valueEUR: costs.groceriesEUR },
    { label: 'Transport', valueAED: costs.transport, valueEUR: costs.transportEUR },
    { label: 'Bildung', valueAED: costs.education, valueEUR: costs.educationEUR },
    { label: 'Unterhaltung', valueAED: costs.entertainment, valueEUR: costs.entertainmentEUR },
    { label: 'Gesundheitswesen', valueAED: costs.healthcare, valueEUR: costs.healthcareEUR },
    { label: 'Sonstiges', valueAED: costs.misc, valueEUR: costs.miscEUR }
  ];

  return (
    <div className="bg-dubai-sand/20 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Geschätzte monatliche Ausgaben</h3>
      
      <div className="space-y-3 mb-6">
        {costItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-dubai-dark-sand/20">
            <span className="text-gray-700">{item.label}</span>
            <div className="flex gap-4">
              <span className="font-medium">{item.valueAED.toLocaleString()} AED</span>
              <span className="font-medium text-dubai-gold">{item.valueEUR.toLocaleString()} €</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between items-center py-3 border-t-2 border-dubai-gold">
        <span className="text-lg font-bold">Monatliche Gesamtkosten</span>
        <div className="flex gap-4">
          <span className="text-xl font-bold">{costs.total.toLocaleString()} AED</span>
          <span className="text-xl font-bold text-dubai-gold">{costs.totalEUR.toLocaleString()} €</span>
        </div>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>* Dies ist eine Schätzung basierend auf durchschnittlichen Kosten in Dubai. Die tatsächlichen Ausgaben können variieren.</p>
        <p>* 1 Euro ≈ 4 AED (ungefährer Umrechnungskurs)</p>
      </div>
    </div>
  );
};

export default ResultsSection;
