
import React from 'react';

interface InterestSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const InterestSelect = ({ value, onChange }: InterestSelectProps) => {
  return (
    <div>
      <label htmlFor="interesse" className="block text-sm font-medium text-gray-700 mb-1">
        Ich interessiere mich für *
      </label>
      <select
        id="interesse"
        name="interesse"
        required
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-light-purple"
      >
        <option value="visum">Visum & Aufenthaltsgenehmigung</option>
        <option value="immobilien">Immobilien & Wohnungssuche</option>
        <option value="business">Firmengründung & Business Setup</option>
        <option value="komplett">Komplettpaket für meinen Umzug</option>
        <option value="sonstiges">Sonstiges</option>
      </select>
    </div>
  );
};

export default InterestSelect;
