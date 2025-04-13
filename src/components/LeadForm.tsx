
import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { Mail, Phone, User, ArrowRight } from 'lucide-react';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interesse: 'visum',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simuliere API-Aufruf
    setTimeout(() => {
      console.log('Lead-Formular abgeschickt:', formData);
      toast({
        title: "Anfrage erhalten!",
        description: "Vielen Dank für Ihre Anfrage. Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.",
        duration: 5000,
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        interesse: 'visum',
        message: ''
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Ihr Name *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Max Mustermann"
            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-light-purple"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          E-Mail *
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="ihre.email@beispiel.de"
            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-light-purple"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Telefon
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+49 123 45678"
            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-light-purple"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="interesse" className="block text-sm font-medium text-gray-700 mb-1">
          Ich interessiere mich für *
        </label>
        <select
          id="interesse"
          name="interesse"
          required
          value={formData.interesse}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-light-purple"
        >
          <option value="visum">Visum & Aufenthaltsgenehmigung</option>
          <option value="immobilien">Immobilien & Wohnungssuche</option>
          <option value="business">Firmengründung & Business Setup</option>
          <option value="komplett">Komplettpaket für meinen Umzug</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Ihre Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Haben Sie spezifische Fragen oder Anliegen? Teilen Sie uns mit, wie wir Ihnen helfen können."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-light-purple"
        ></textarea>
      </div>
      
      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-medium py-2 px-4 rounded-md transition-colors flex justify-center items-center"
        >
          {loading ? (
            <>
              <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Wird gesendet...
            </>
          ) : (
            <>
              Kostenlose Beratung anfordern <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </button>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Ihre Daten werden gemäß unserer{' '}
          <a href="/datenschutz" className="text-brand-light-purple hover:underline">
            Datenschutzerklärung
          </a>{' '}
          verarbeitet.
        </p>
      </div>
    </form>
  );
};

export default LeadForm;
