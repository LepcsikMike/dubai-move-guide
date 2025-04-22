
import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { ArrowRight } from 'lucide-react';

const NewsletterSignup = ({ className }: { className?: string }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      console.log('Newsletter signup:', email);
      
      // In a real app, we'd submit to a newsletter service API
      // For now, we'll simulate success after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a local storage record to remember this signup
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
      console.error('Newsletter signup error:', error);
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
    <div className={className}>
      <div className="bg-white rounded-lg shadow-lg p-8 border border-brand-light-gold/10">
        <h3 className="text-2xl font-bold mb-4 gradient-text">Bleiben Sie auf dem Laufenden</h3>
        <p className="text-gray-700 mb-6">
          Abonnieren Sie unseren Newsletter für die neuesten Anleitungen, Tipps und Ressourcen zum Umzug nach Dubai.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-Mail-Adresse
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ihre.email@beispiel.de"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-light-gold"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-md text-white primary-gradient-bg hover:opacity-90 transition-opacity disabled:opacity-70 flex justify-center items-center"
          >
            {loading ? (
              <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            ) : null}
            {loading ? 'Anmeldung läuft...' : (
              <>
                Jetzt abonnieren <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
          <p className="text-xs text-gray-700 mt-2">
            Mit der Anmeldung stimmen Sie unserer{' '}
            <a href="/datenschutz" className="text-brand-gold hover:underline">
              Datenschutzerklärung
            </a>
            {' '}zu. Sie können sich jederzeit abmelden.
          </p>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
