
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Dubai Ressourcen" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="section-container relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="mb-6 animate-fade-in">Ressourcen & Tools</h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Laden Sie Anleitungen, Checklisten herunter und nutzen Sie unsere interaktiven Tools, um Ihren Umzug nach Dubai zu planen und durchzuführen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
