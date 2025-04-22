
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xyzwygrj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          email,
          _subject: 'Newsletter Anmeldung (Footer)'
        })
      });

      if (!response.ok) throw new Error('Network response was not ok');
      
      localStorage.setItem('newsletter_signup', JSON.stringify({
        email,
        date: new Date().toISOString()
      }));
      
      toast({
        title: "Erfolg!",
        description: "Vielen Dank für Ihre Anmeldung zu unserem Newsletter.",
        duration: 5000,
      });
      setEmail('');
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Es gab ein Problem bei der Anmeldung. Bitte versuchen Sie es später erneut.",
        duration: 5000,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[cornsilk] border-t border-dubai-dark-sand">
      <div className="section-container pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">dubai-auswandern.com</h3>
            <p className="text-gray-600">
              Ihr umfassender Leitfaden für Umzug und erfolgreiche Etablierung in Dubai. Wir bieten Expertenberatung und Ressourcen für einen reibungslosen Übergang.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="text-gray-600 hover:text-dubai-gold transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                className="text-gray-600 hover:text-dubai-gold transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="text-gray-600 hover:text-dubai-gold transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Schnelllinks</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-dubai-gold transition-colors">Home</Link></li>
              <li><Link to="/warum-dubai" className="text-gray-600 hover:text-dubai-gold transition-colors">Warum Dubai?</Link></li>
              <li><Link to="/schritt-fuer-schritt-anleitung" className="text-gray-600 hover:text-dubai-gold transition-colors">Schritt-für-Schritt Anleitung</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-dubai-gold transition-colors">Blog</Link></li>
              <li><Link to="/ressourcen" className="text-gray-600 hover:text-dubai-gold transition-colors">Ressourcen</Link></li>
              <li><Link to="/beratung" className="text-gray-600 hover:text-dubai-gold transition-colors">Beratung</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontaktieren Sie uns</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-dubai-gold shrink-0 mt-1" />
                <span className="text-gray-600">info@dubai-auswandern.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-dubai-gold shrink-0 mt-1" />
                <span className="text-gray-600">+49 123 456789</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-dubai-gold shrink-0 mt-1" />
                <span className="text-gray-600">Berlin, Deutschland</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Abonnieren Sie unseren Newsletter</h4>
            <p className="text-gray-600 mb-4">Bleiben Sie auf dem Laufenden mit unseren neuesten Guides, Tipps und Ressourcen zum Umzug nach Dubai.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ihre E-Mail-Adresse"
                  required
                  className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                />
                <button 
                  type="submit" 
                  className="absolute right-1 top-1 p-2 text-white gold-gradient-bg rounded-md hover:opacity-90 transition-opacity"
                  aria-label="Abonnieren"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className="py-6 bg-dubai-dark-sand/20 border-t border-dubai-dark-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} dubai-auswandern.com. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-4 text-sm">
              <Link to="/datenschutz" className="text-gray-600 hover:text-dubai-gold transition-colors">Datenschutz</Link>
              <Link to="/nutzungsbedingungen" className="text-gray-600 hover:text-dubai-gold transition-colors">Nutzungsbedingungen</Link>
              <Link to="/impressum" className="text-gray-600 hover:text-dubai-gold transition-colors">Impressum</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
