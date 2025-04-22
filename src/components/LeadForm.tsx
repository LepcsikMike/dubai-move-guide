
import React from 'react';
import { Mail, Phone, User } from 'lucide-react';
import FormField from './form/FormField';
import InterestSelect from './form/InterestSelect';
import MessageArea from './form/MessageArea';
import SubmitButton from './form/SubmitButton';
import PrivacyNotice from './form/PrivacyNotice';
import { useLeadForm } from '@/hooks/useLeadForm';

const LeadForm = () => {
  const {
    formData,
    loading,
    handleInputChange,
    handleSubmit,
    getFieldError
  } = useLeadForm();

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
