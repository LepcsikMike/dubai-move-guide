
import React from 'react';

interface MessageAreaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MessageArea = ({ value, onChange }: MessageAreaProps) => {
  return (
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
        Ihre Nachricht
      </label>
      <textarea
        id="message"
        name="message"
        rows={3}
        value={value}
        onChange={onChange}
        placeholder="Haben Sie spezifische Fragen oder Anliegen? Teilen Sie uns mit, wie wir Ihnen helfen können."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-light-purple"
      ></textarea>
    </div>
  );
};

export default MessageArea;
