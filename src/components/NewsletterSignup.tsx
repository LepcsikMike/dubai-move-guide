
import React, { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

const NewsletterSignup = ({ className }: { className?: string }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Newsletter signup:', email);
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
        duration: 5000,
      });
      setEmail('');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={className}>
      <div className="bg-white rounded-lg shadow-lg p-8 border border-dubai-dark-sand/30">
        <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter for the latest guides, tips, and resources about moving to Dubai.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-3 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-md text-white gold-gradient-bg hover:opacity-90 transition-opacity disabled:opacity-70 flex justify-center items-center"
          >
            {loading ? (
              <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            ) : null}
            {loading ? 'Subscribing...' : 'Subscribe Now'}
          </button>
          <p className="text-xs text-gray-500 mt-2">
            By subscribing, you agree to our{' '}
            <a href="/privacy-policy" className="text-dubai-gold hover:underline">
              Privacy Policy
            </a>
            . You can unsubscribe at any time.
          </p>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
