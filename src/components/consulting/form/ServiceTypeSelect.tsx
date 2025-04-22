
import React from 'react';
import { Label } from '@/components/ui/label';

interface ServiceTypeSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ServiceTypeSelect = ({ value, onChange }: ServiceTypeSelectProps) => {
  return (
    <div>
      <Label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
        Beratungstyp *
      </Label>
      <select
        id="serviceType"
        name="serviceType"
        required
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
      >
        <option value="">Beratungstyp auswählen</option>
        <option value="visa">Visum & Umzug Beratung</option>
        <option value="housing">Immobilien & Wohnungssuche</option>
        <option value="business">Unternehmensaufbau Beratung</option>
        <option value="comprehensive">Umfassendes Umzugspaket</option>
      </select>
    </div>
  );
};

export default ServiceTypeSelect;
