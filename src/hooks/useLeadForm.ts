
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { validateForm } from '@/utils/formValidation';
import { submitForm, getMailtoLink } from '@/utils/formSubmission';

interface FormData {
  name: string;
  email: string;
  phone: string;
  interesse: string;
  message: string;
}

export const useLeadForm = () => {
  const [formData, setFormData] = useState<FormData>({
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
        title: "Validierungsfehler",
        description: "Bitte füllen Sie alle erforderlichen Felder korrekt aus.",
        duration: 5000,
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);
    
    try {
      await submitForm(formData);
      
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
      
    } catch (error) {
      console.error('Form submission error:', error);
      
      toast({
        title: "Sendefehler",
        description: "Es gab ein Problem beim Senden Ihrer Anfrage. Wir öffnen eine E-Mail für Sie als Alternative.",
        duration: 7000,
        variant: "destructive"
      });
      
      // Fallback to mailto
      setTimeout(() => {
        if (!formSubmitted) {
          window.open(getMailtoLink(formData));
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

  return {
    formData,
    loading,
    handleInputChange,
    handleSubmit,
    getFieldError
  };
};
