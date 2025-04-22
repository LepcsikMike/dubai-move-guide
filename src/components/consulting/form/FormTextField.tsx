
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FormTextFieldProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel';
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormTextField = ({
  id,
  name,
  label,
  type = 'text',
  value,
  required = false,
  onChange
}: FormTextFieldProps) => {
  return (
    <div>
      <Label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && '*'}
      </Label>
      <Input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full focus:ring-2 focus:ring-dubai-gold"
      />
    </div>
  );
};

export default FormTextField;
