
import React from 'react';
import { CostBreakdown } from './costCalculations';

interface ResultsSectionProps {
  costs: CostBreakdown;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ costs }) => {
  const costItems = [
    { label: 'Wohnen', value: costs.housing },
    { label: 'Nebenkosten', value: costs.utilities },
    { label: 'Lebensmittel', value: costs.groceries },
    { label: 'Transport', value: costs.transport },
    { label: 'Bildung', value: costs.education },
    { label: 'Unterhaltung', value: costs.entertainment },
    { label: 'Gesundheitswesen', value: costs.healthcare },
    { label: 'Sonstiges', value: costs.misc }
  ];

  return (
    <div className="bg-dubai-sand/20 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Geschätzte monatliche Ausgaben</h3>
      
      <div className="space-y-3 mb-6">
        {costItems.map((item, index) => (
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
  );
};

export default ResultsSection;
