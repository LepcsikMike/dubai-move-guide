
import React from 'react';
import { FileText, FileQuestion, Video } from 'lucide-react';
import HeroSection from './resources/HeroSection';
import ResourceCategory from './resources/ResourceCategory';
import CostCalculator from './resources/CostCalculator';
import TestimonialsSection from './resources/TestimonialsSection';
import CTASection from './resources/CTASection';
import { getResourceCategories } from './resources/resourcesData';

const Resources = () => {
  // Create the icons here so they have the correct styling
  const resourceCategories = getResourceCategories({
    fileText: <FileText className="h-10 w-10 text-dubai-gold" />,
    fileQuestion: <FileQuestion className="h-10 w-10 text-dubai-gold" />,
    video: <Video className="h-10 w-10 text-dubai-gold" />
  });

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Resource Categories Section */}
      {resourceCategories.map((category) => (
        <ResourceCategory 
          key={category.id}
          id={category.id}
          title={category.title}
          icon={category.icon}
          resources={category.resources}
        />
      ))}

      {/* Cost Calculator Section */}
      <CostCalculator />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default Resources;
