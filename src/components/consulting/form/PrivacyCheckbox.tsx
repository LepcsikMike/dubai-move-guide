
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const PrivacyCheckbox = () => {
  return (
    <div className="flex items-start gap-2">
      <Checkbox
        id="privacy"
        name="privacy"
        required
        className="mt-1"
      />
      <Label htmlFor="privacy" className="text-sm text-gray-600">
        Ich stimme der <a href="/datenschutz" className="text-dubai-gold hover:underline">Datenschutzerklärung</a> zu und bin damit einverstanden, bezüglich meiner Beratungsanfrage kontaktiert zu werden.
      </Label>
    </div>
  );
};

export default PrivacyCheckbox;
