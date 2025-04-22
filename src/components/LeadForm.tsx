
import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { Mail, Phone, User } from 'lucide-react';
import FormField from './form/FormField';
import InterestSelect from './form/InterestSelect';
import MessageArea from './form/MessageArea';
import SubmitButton from './form/SubmitButton';
import PrivacyNotice from './form/PrivacyNotice';
import { validateForm } from '@/utils/formValidation';

// Create a new Formspree form and use its endpoint here
// Make sure to verify and activate the form in your Formspree account
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meqgjjbk';

// Backup endpoint for local testing
const EMAIL_BACKUP = 'mailto:kontakt@example.com';

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
  const [formSubmitted, setFormSubmitted] = useState(false);

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
      // Attempt to use Formspree
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

      console.log('Form submission response status:', response.status);
      
      if (response.ok) {
        // Formspree submission succeeded
        setFormSubmitted(true);
        
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
        // Formspree submission failed
        const errorData = await response.json();
        console.error('Form submission error:', errorData);
        
        // Show error message and fallback option
        toast({
          title: "Sendefehler",
          description: "Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.",
          duration: 7000,
          variant: "destructive"
        });
        
        // Open mailto link as fallback
        const mailtoLink = `${EMAIL_BACKUP}?subject=Anfrage: ${formData.interesse}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATelefon: ${formData.phone}%0D%0AInteresse: ${formData.interesse}%0D%0ANachricht: ${formData.message}`;
        
        // We'll open this in 1 second to allow the toast to show first
        setTimeout(() => {
          if (!formSubmitted) {
            window.open(mailtoLink);
          }
        }, 1000);
      }
    } catch (error) {
      console.error('Network error:', error);
      
      toast({
        title: "Netzwerkfehler",
        description: "Es gab ein Netzwerkproblem. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.",
        duration: 5000,
        variant: "destructive"
      });
      
      // Open mailto link as fallback here too
      const mailtoLink = `${EMAIL_BACKUP}?subject=Anfrage: ${formData.interesse}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATelefon: ${formData.phone}%0D%0AInteresse: ${formData.interesse}%0D%0ANachricht: ${formData.message}`;
      
      setTimeout(() => {
        if (!formSubmitted) {
          window.open(mailtoLink);
        }
      }, 1000);
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
