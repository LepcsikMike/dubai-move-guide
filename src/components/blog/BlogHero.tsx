
import React from 'react';

const BlogHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Dubai Stadtbild" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="section-container relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="mb-6 animate-fade-in">Der Dubai Auswanderungs-Blog</h1>
          <p className="text-xl md:text-2xl mb-8 animate-slide-up">
            Experten-Einblicke, praktische Tipps und Erfolgsgeschichten, die Ihre Reise von Deutschland nach Dubai begleiten.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
