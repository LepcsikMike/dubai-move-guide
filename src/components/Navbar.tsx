
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Warum Dubai?', path: '/warum-dubai' },
    { name: 'Schritt-für-Schritt', path: '/schritt-fuer-schritt-anleitung' },
    { name: 'Blog', path: '/blog' },
    { name: 'Ressourcen', path: '/ressourcen' },
    { name: 'Beratung', path: '/beratung' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="text-2xl font-bold gradient-text">dubai-auswandern.com</div>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    location.pathname === item.path
                      ? 'text-dubai-gold'
                      : 'text-gray-700 hover:text-dubai-gold'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/beratung"
                className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white gold-gradient-bg hover:opacity-90 transition-opacity"
              >
                Jetzt starten
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-dubai-gold focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  location.pathname === item.path
                    ? 'text-dubai-gold'
                    : 'text-gray-700 hover:text-dubai-gold'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/beratung"
              className="block w-full mt-4 px-4 py-2 rounded-md text-base font-medium text-center text-white gold-gradient-bg hover:opacity-90 transition-opacity"
            >
              Jetzt starten
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
