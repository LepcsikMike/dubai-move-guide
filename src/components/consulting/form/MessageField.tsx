
import React from 'react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface MessageFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MessageField = ({ value, onChange }: MessageFieldProps) => {
  return (
    <div>
      <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
        Ihre Situation & Fragen
      </Label>
      <Textarea
        id="message"
        name="message"
        rows={4}
        value={value}
        onChange={onChange}
        className="w-full focus:ring-2 focus:ring-dubai-gold"
        placeholder="Bitte beschreiben Sie kurz Ihre Situation und spezifische Fragen, die Sie haben."
      />
    </div>
  );
};

export default MessageField;
