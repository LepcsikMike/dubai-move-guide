
import React from 'react';
import { CalculatorInputs } from './costCalculations';

interface InputSectionProps {
  inputs: CalculatorInputs;
  onInputChange: (field: keyof CalculatorInputs, value: any) => void;
}

const InputSection: React.FC<InputSectionProps> = ({ inputs, onInputChange }) => {
  return (
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
          value={inputs.housingBudget}
          onChange={(e) => onInputChange('housingBudget', parseInt(e.target.value))}
          className="w-full h-2 bg-dubai-dark-sand/30 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-1">
          <span>5.000</span>
          <span>{inputs.housingBudget.toLocaleString()} AED</span>
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
              onClick={() => onInputChange('familySize', size)}
              className={`w-10 h-10 rounded-full ${
                inputs.familySize === size
                  ? "bg-dubai-gold text-brand-light-gold border-2 border-brand-light-gold shadow-md"
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
              onClick={() => onInputChange('schoolAge', num)}
              className={`w-10 h-10 rounded-full ${
                inputs.schoolAge === num
                  ? "bg-dubai-gold text-brand-light-gold border-2 border-brand-light-gold shadow-md"
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
              onClick={() => onInputChange('lifestyle', option.id)}
              className={`py-2 px-4 rounded-md text-sm font-medium ${
                inputs.lifestyle === option.id
                  ? "bg-dubai-gold text-brand-light-gold border-2 border-brand-light-gold hover:bg-dubai-gold/90"
                  : "bg-dubai-sand/50 text-gray-700 hover:bg-dubai-dark-sand/30"
              } transition-colors`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InputSection;
