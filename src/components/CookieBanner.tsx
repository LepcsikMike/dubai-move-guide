
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Delay showing the banner for better UX
      setTimeout(() => {
        setIsVisible(true);
      }, 2000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Here you would initialize cookies, analytics, etc.
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    // Here you would ensure no non-essential cookies are used
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#bab6b4] border-t border-brand-light-gray z-50 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex-1 pr-4 mb-4 sm:mb-0">
            <h4 className="text-lg font-semibold mb-1">Wir schätzen Ihre Privatsphäre</h4>
            <p className="text-sm text-gray-600">
              Diese Website verwendet Cookies, um Ihr Surferlebnis zu verbessern und personalisierte Dienste anzubieten. 
              Mit Klick auf "Akzeptieren" stimmen Sie der Verwendung von Cookies gemäß unserer{' '}
              <Link to="/datenschutz" className="text-dubai-gold hover:underline">
                Datenschutzerklärung
              </Link> zu.
            </p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={declineCookies}
              className="px-4 py-2 border border-dubai-dark-sand rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Ablehnen
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 rounded-md text-sm font-medium text-white gold-gradient-bg hover:opacity-90 transition-opacity"
            >
              Akzeptieren
            </button>
          </div>
          <button 
            onClick={declineCookies} 
            className="absolute top-3 right-3 sm:hidden text-gray-400 hover:text-gray-600"
            aria-label="Schließen"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
