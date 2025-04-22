
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface ServiceProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
}

const ServiceCard = ({ title, description, features, price, duration }: ServiceProps) => {
  return (
    <div className="bg-dubai-sand/20 rounded-lg overflow-hidden border border-dubai-dark-sand/20 hover:shadow-md transition-shadow flex flex-col">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 text-sm">{description}</p>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Check className="h-5 w-5 text-dubai-gold mr-2 shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-6 bg-white border-t border-dubai-dark-sand/20">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600">Ab</span>
          <span className="text-2xl font-bold text-dubai-gold">{price}</span>
        </div>
        <div className="text-sm text-gray-600 mb-6">
          Dauer: {duration}
        </div>
        <Button 
          className="w-full primary-gradient-bg hover:opacity-90"
          asChild
        >
          <a href="#booking-form">Beratung buchen</a>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
