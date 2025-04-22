
import React from 'react';
import ConsultingHero from '@/components/consulting/ConsultingHero';
import ServicesSection from '@/components/consulting/ServicesSection';
import ProcessSteps from '@/components/consulting/ProcessSteps';
import TestimonialsSection from '@/components/consulting/TestimonialsSection';
import ConsultingForm from '@/components/consulting/ConsultingForm';
import FAQSection from '@/components/consulting/FAQSection';

const Consulting = () => {
  return (
    <>
      <ConsultingHero />
      <ServicesSection />
      <ProcessSteps />
      <TestimonialsSection />
      <ConsultingForm />
      <FAQSection />
    </>
  );
};

export default Consulting;
