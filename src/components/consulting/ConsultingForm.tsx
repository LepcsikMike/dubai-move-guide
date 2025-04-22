import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

const ConsultingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
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
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Beratungsanfrage erhalten",
        description: "Vielen Dank für Ihr Interesse. Wir werden Sie innerhalb von 24 Stunden kontaktieren, um Ihre Beratung zu planen.",
        duration: 5000,
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceType: '',
        message: ''
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="booking-form" className="py-20 bg-dubai-dark-sand/10">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Buchen Sie Ihre Beratung</h2>
          <p className="text-gray-600">
            Füllen Sie das untenstehende Formular aus, um Ihre persönliche Beratung anzufragen. Unser Team wird Sie innerhalb von 24 Stunden kontaktieren, um Ihren Termin zu planen.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 border border-dubai-dark-sand/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  Vorname *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nachname *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-Mail-Adresse *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefonnummer
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                Beratungstyp *
              </label>
              <select
                id="serviceType"
                name="serviceType"
                required
                value={formData.serviceType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
              >
                <option value="">Beratungstyp auswählen</option>
                <option value="visa">Visum & Umzug Beratung</option>
                <option value="housing">Immobilien & Wohnungssuche</option>
                <option value="business">Unternehmensaufbau Beratung</option>
                <option value="comprehensive">Umfassendes Umzugspaket</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Ihre Situation & Fragen
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                placeholder="Bitte beschreiben Sie kurz Ihre Situation und spezifische Fragen, die Sie haben."
              ></textarea>
            </div>
            
            <div className="mb-6">
              <div className="flex items-start">
                <input
                  id="privacy"
                  name="privacy"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-dubai-gold border-dubai-dark-sand rounded mt-1"
                />
                <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                  Ich stimme der <a href="/datenschutz" className="text-dubai-gold hover:underline">Datenschutzerklärung</a> zu und bin damit einverstanden, bezüglich meiner Beratungsanfrage kontaktiert zu werden.
                </label>
              </div>
            </div>
            
            <Button 
              type="submit" 
              disabled={loading} 
              className="w-full primary-gradient-bg hover:opacity-90 flex justify-center items-center"
            >
              {loading ? (
                <>
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Wird gesendet...
                </>
              ) : (
                <>
                  Beratung buchen <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultingForm;
