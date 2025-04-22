
import React from 'react';
import HeroSection from './home/HeroSection';
import BenefitsSection from './home/BenefitsSection';
import ServicesSection from './home/ServicesSection';
import QuickGuideSection from './home/QuickGuideSection';
import TestimonialsSection from './home/TestimonialsSection';
import CTASection from './home/CTASection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <QuickGuideSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default HomePage;
