
import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import FormTextField from './form/FormTextField';
import ServiceTypeSelect from './form/ServiceTypeSelect';
import MessageField from './form/MessageField';
import PrivacyCheckbox from './form/PrivacyCheckbox';
import SubmitButton from './form/SubmitButton';

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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
              <FormTextField
                id="firstName"
                name="firstName"
                label="Vorname"
                required
                value={formData.firstName}
                onChange={handleInputChange}
              />
              
              <FormTextField
                id="lastName"
                name="lastName"
                label="Nachname"
                required
                value={formData.lastName}
                onChange={handleInputChange}
              />
              
              <FormTextField
                id="email"
                name="email"
                type="email"
                label="E-Mail-Adresse"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
              
              <FormTextField
                id="phone"
                name="phone"
                type="tel"
                label="Telefonnummer"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="mb-6">
              <ServiceTypeSelect 
                value={formData.serviceType}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="mb-6">
              <MessageField
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="mb-6">
              <PrivacyCheckbox />
            </div>
            
            <SubmitButton loading={loading} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultingForm;
