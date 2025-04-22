
import React from 'react';
import NewsletterSignup from '@/components/NewsletterSignup';

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Verpassen Sie keinen Artikel</h2>
          <p className="text-gray-600">
            Abonnieren Sie unseren Newsletter, um die neuesten Einblicke und Tipps zur Auswanderung nach Dubai direkt in Ihren Posteingang zu erhalten.
          </p>
        </div>
        <NewsletterSignup className="max-w-xl mx-auto" />
      </div>
    </section>
  );
};

export default NewsletterSection;
