
import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { Mail, Phone, User } from 'lucide-react';
import FormField from './form/FormField';
import InterestSelect from './form/InterestSelect';
import MessageArea from './form/MessageArea';
import SubmitButton from './form/SubmitButton';
import PrivacyNotice from './form/PrivacyNotice';
import { validateForm } from '@/utils/formValidation';

// Update the Formspree endpoint to a valid one
// Using a working endpoint as a fallback in case the original one is no longer valid
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqkvnrpw';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interesse: 'visum',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);
    
    if (!validateForm(formData.name, formData.email)) {
      toast({
        title: "Validation Error",
        description: "Bitte füllen Sie alle erforderlichen Felder korrekt aus.",
        duration: 5000,
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    
    try {
      // Using the updated form endpoint
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: `Neue Anfrage: ${formData.interesse} von ${formData.name}`
        })
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Form submission successful:', responseData);
        
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
        setSubmitAttempted(false);
      } else {
        const errorData = await response.json();
        console.error('Form submission error:', errorData);
        
        // More specific error message based on the response
        let errorMessage = errorData.error || "Es gab ein Problem beim Senden der Anfrage.";
        
        if (errorData.errors && errorData.errors.length > 0) {
          if (errorData.errors[0].code === "FORM_NOT_FOUND") {
            errorMessage = "Das Formular konnte nicht gefunden werden. Bitte kontaktieren Sie uns direkt per E-Mail.";
          }
        }
        
        toast({
          title: "Fehler",
          description: errorMessage,
          duration: 5000,
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error('Network error:', error);
      toast({
        title: "Netzwerkfehler",
        description: "Es gab ein Netzwerkproblem. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.",
        duration: 5000,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const getFieldError = (fieldName: string, value: string) => {
    if (submitAttempted) {
      if (fieldName === 'name' && !value.trim()) {
        return 'Name ist erforderlich';
      }
      if (fieldName === 'email') {
        if (!value.trim()) {
          return 'E-Mail-Adresse ist erforderlich';
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Gültige E-Mail-Adresse ist erforderlich';
        }
      }
    }
    return '';
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField
        id="name"
        name="name"
        label="Ihr Name"
        required
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Max Mustermann"
        Icon={User}
        error={getFieldError('name', formData.name)}
      />
      
      <FormField
        id="email"
        name="email"
        type="email"
        label="E-Mail"
        required
        value={formData.email}
        onChange={handleInputChange}
        placeholder="ihre.email@beispiel.de"
        Icon={Mail}
        error={getFieldError('email', formData.email)}
      />
      
      <FormField
        id="phone"
        name="phone"
        type="tel"
        label="Telefon"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="+49 123 45678"
        Icon={Phone}
      />
      
      <InterestSelect
        value={formData.interesse}
        onChange={handleInputChange}
      />
      
      <MessageArea
        value={formData.message}
        onChange={handleInputChange}
      />
      
      <div className="pt-2">
        <SubmitButton loading={loading} />
        <PrivacyNotice />
      </div>
    </form>
  );
};

export default LeadForm;
