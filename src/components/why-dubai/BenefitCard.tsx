
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const BenefitCard = ({ icon, title, description, details }: BenefitCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-dubai-dark-sand/30 hover:shadow-md transition-shadow">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div>
        <h4 className="font-medium text-sm text-gray-700 mb-3">Hauptvorteile:</h4>
        <ul className="space-y-2">
          {details.map((detail, idx) => (
            <li key={idx} className="flex items-start">
              <ArrowRight className="h-4 w-4 text-dubai-gold mr-2 mt-1 shrink-0" />
              <span className="text-gray-600 text-sm">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BenefitCard;
