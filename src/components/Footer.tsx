
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    // Add newsletter signup logic here
  };

  return (
    <footer className="bg-white border-t border-dubai-dark-sand">
      <div className="section-container pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">dubai-auswandern.com</h3>
            <p className="text-gray-600">
              Your comprehensive guide to relocating and thriving in Dubai. We provide expert guidance and resources for a smooth transition.
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
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-dubai-gold transition-colors">Home</Link></li>
              <li><Link to="/why-dubai" className="text-gray-600 hover:text-dubai-gold transition-colors">Why Dubai?</Link></li>
              <li><Link to="/step-by-step-guide" className="text-gray-600 hover:text-dubai-gold transition-colors">Step-by-Step Guide</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-dubai-gold transition-colors">Blog</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-dubai-gold transition-colors">Resources</Link></li>
              <li><Link to="/consulting" className="text-gray-600 hover:text-dubai-gold transition-colors">Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
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
            <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <p className="text-gray-600 mb-4">Stay updated with our latest guides, tips, and resources about moving to Dubai.</p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                />
                <button 
                  type="submit" 
                  className="absolute right-1 top-1 p-2 text-white gold-gradient-bg rounded-md hover:opacity-90 transition-opacity"
                  aria-label="Subscribe"
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
              © {new Date().getFullYear()} dubai-auswandern.com. All rights reserved.
            </div>
            <div className="flex space-x-4 text-sm">
              <Link to="/privacy-policy" className="text-gray-600 hover:text-dubai-gold transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-600 hover:text-dubai-gold transition-colors">Terms of Service</Link>
              <Link to="/imprint" className="text-gray-600 hover:text-dubai-gold transition-colors">Imprint</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
