
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Sun, Shield, Landmark, Building } from 'lucide-react';
import NewsletterSignup from '@/components/NewsletterSignup';

const HomePage = () => {
  const benefits = [
    {
      title: 'Tax-Free Income',
      description: 'Enjoy 0% income tax, helping you save more and build wealth faster.',
      icon: <Landmark className="h-10 w-10 text-dubai-gold" />
    },
    {
      title: 'High Safety Standards',
      description: 'Experience one of the safest cities in the world with low crime rates.',
      icon: <Shield className="h-10 w-10 text-dubai-gold" />
    },
    {
      title: 'Exceptional Quality of Life',
      description: 'World-class infrastructure, healthcare, and entertainment options.',
      icon: <Sun className="h-10 w-10 text-dubai-gold" />
    },
    {
      title: 'Thriving Economy',
      description: 'Access abundant career opportunities in a growing, diverse economy.',
      icon: <Building className="h-10 w-10 text-dubai-gold" />
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Dubai skyline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="section-container relative z-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 animate-fade-in">
              Your Journey to a New Life in Dubai Starts Here
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Comprehensive guidance for Germans looking to relocate to Dubai - from visa requirements to finding your dream home.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
              <Link
                to="/step-by-step-guide"
                className="px-6 py-3 rounded-md text-white gold-gradient-bg hover:opacity-90 transition-opacity font-medium flex items-center justify-center"
              >
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/why-dubai"
                className="px-6 py-3 rounded-md text-white bg-white/20 hover:bg-white/30 transition-colors font-medium"
              >
                Why Choose Dubai?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6 gradient-text">Why Thousands of Germans Choose Dubai</h2>
            <p className="text-gray-600">
              Dubai offers an unparalleled combination of financial benefits, safety, and quality of life that makes it an 
              increasingly popular destination for Germans looking to relocate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-dubai-sand p-6 rounded-lg shadow-sm border border-dubai-dark-sand/30 hover:shadow-md transition-shadow">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Guide Section */}
      <section className="py-20 bg-dubai-dark-sand/10">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Your Roadmap to Dubai</h2>
              <p className="text-gray-600 mb-8">
                Moving to Dubai might seem complex, but with our step-by-step guide, you'll navigate the process with ease. 
                From obtaining the right visa to finding schools for your children, we've got you covered.
              </p>
              
              <div className="space-y-4">
                {[
                  'Understanding visa options and requirements',
                  'Finding the perfect housing in the right neighborhood',
                  'Navigating healthcare and insurance options',
                  'Discovering the best schools and education paths',
                  'Setting up banking and managing finances',
                  'Learning about local customs and culture'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-dubai-gold mr-3 mt-1 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link
                  to="/step-by-step-guide"
                  className="px-6 py-3 rounded-md text-white gold-gradient-bg hover:opacity-90 transition-opacity font-medium inline-flex items-center"
                >
                  View Complete Guide <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544413860-2d392499a162?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Dubai Marina" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-dubai-dark-sand/30 w-64 hidden md:block">
                <div className="text-dubai-gold font-bold text-xl">100,000+</div>
                <div className="text-gray-600">Expatriates from Germany now call Dubai home</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Preview Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Valuable Resources for Your Move</h2>
            <p className="text-gray-600">
              Access our extensive collection of guides, checklists, and tools designed to make your relocation process smooth and stress-free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dubai-sand rounded-lg shadow-sm border border-dubai-dark-sand/30 overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Checklist" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Moving Checklists</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive checklists for before, during, and after your move to ensure nothing is forgotten.
                </p>
                <Link
                  to="/resources"
                  className="text-dubai-gold font-medium inline-flex items-center hover:underline"
                >
                  Download Checklists <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-dubai-sand rounded-lg shadow-sm border border-dubai-dark-sand/30 overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Calculator" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cost Calculator</h3>
                <p className="text-gray-600 mb-4">
                  Estimate your living costs in Dubai with our interactive calculator covering housing, utilities, education, and more.
                </p>
                <Link
                  to="/resources#calculator"
                  className="text-dubai-gold font-medium inline-flex items-center hover:underline"
                >
                  Try the Calculator <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-dubai-sand rounded-lg shadow-sm border border-dubai-dark-sand/30 overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Video guide" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Video Guides</h3>
                <p className="text-gray-600 mb-4">
                  Watch our collection of video guides showcasing neighborhoods, explaining visa processes, and more.
                </p>
                <Link
                  to="/resources#videos"
                  className="text-dubai-gold font-medium inline-flex items-center hover:underline"
                >
                  Watch Videos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dubai-dark-sand/10">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Success Stories</h2>
            <p className="text-gray-600">
              Hear from fellow Germans who have successfully made the move to Dubai and are now enjoying their new life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Thomas Müller',
                role: 'IT Consultant',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                quote: 'Moving to Dubai was the best decision of my life. The resources from dubai-auswandern.com made the whole process so much easier than I expected.'
              },
              {
                name: 'Anna Schmidt',
                role: 'Marketing Director',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                quote: 'The step-by-step guide really helped me navigate the visa process and find the perfect apartment. I now enjoy a tax-free income and amazing lifestyle.'
              },
              {
                name: 'Markus Weber',
                role: 'Restaurant Owner',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                quote: 'Starting a business in Dubai was much simpler than I thought. The consulting service helped me with all the paperwork and finding the right location.'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-dubai-dark-sand/30">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="mb-6">Ready to Start Your Dubai Journey?</h2>
              <p className="text-gray-600 mb-8">
                Whether you're just exploring the idea or ready to make the move, we're here to help every step of the way. 
                Get personalized guidance, download our resources, or subscribe to our newsletter for regular updates.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Link
                  to="/consulting"
                  className="px-6 py-3 rounded-md text-white gold-gradient-bg hover:opacity-90 transition-opacity font-medium flex items-center justify-center"
                >
                  Get Personalized Help
                </Link>
                <Link
                  to="/resources"
                  className="px-6 py-3 rounded-md border border-dubai-dark-sand text-gray-700 hover:bg-dubai-dark-sand/10 transition-colors font-medium flex items-center justify-center"
                >
                  Access Free Resources
                </Link>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-600">
                <Check className="h-5 w-5 text-dubai-gold" />
                <span>Trusted by 10,000+ Germans who have successfully relocated to Dubai</span>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
