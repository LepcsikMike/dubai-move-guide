
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, DollarSign, Briefcase, Heart, Shield, Sun, Building, ArrowRight } from 'lucide-react';
import NewsletterSignup from '@/components/NewsletterSignup';

const WhyDubai = () => {
  const benefits = [
    {
      title: 'Tax Advantages',
      description: 'Enjoy 0% income tax, no capital gains tax, and no property tax, allowing you to maximize your earnings and investments.',
      icon: <DollarSign className="h-10 w-10 text-dubai-gold" />,
      details: [
        'No personal income tax',
        'No capital gains tax',
        'No withholding tax',
        'No property tax (just a 4% one-time registration fee)',
        'Extensive network of double taxation avoidance agreements',
        'German retirement benefits can often be received tax-free'
      ]
    },
    {
      title: 'Career Opportunities',
      description: 'Access a thriving job market with opportunities across various industries and competitive salary packages.',
      icon: <Briefcase className="h-10 w-10 text-dubai-gold" />,
      details: [
        'Strong demand for German expertise in engineering and technical fields',
        'Growing sectors include tech, finance, tourism, and renewable energy',
        'Higher average salaries compared to Germany',
        'Low unemployment rate',
        'Dynamic startup ecosystem with government support',
        'Easy to register and operate your own business'
      ]
    },
    {
      title: 'Quality of Life',
      description: 'Experience world-class amenities, healthcare, education, and a diverse, cosmopolitan lifestyle.',
      icon: <Heart className="h-10 w-10 text-dubai-gold" />,
      details: [
        'Year-round sunshine with 340+ sunny days annually',
        'World-class shopping malls and entertainment',
        'Pristine beaches and outdoor recreational areas',
        'Diverse international cuisine scene',
        'Excellent private healthcare facilities',
        'International schools offering German and other curricula',
        'Efficient public transportation'
      ]
    },
    {
      title: 'Safety and Security',
      description: 'Enjoy one of the safest cities in the world with extremely low crime rates and excellent emergency services.',
      icon: <Shield className="h-10 w-10 text-dubai-gold" />,
      details: [
        'Consistently ranked among the safest cities globally',
        'Extremely low crime rate',
        'Strict law enforcement',
        'Political stability',
        'Advanced security infrastructure',
        'Excellent emergency services'
      ]
    },
    {
      title: 'Strategic Location',
      description: 'Benefit from Dubai\'s central location between Europe, Asia, and Africa, with excellent global connectivity.',
      icon: <Clock className="h-10 w-10 text-dubai-gold" />,
      details: [
        'Direct flights to all major German cities',
        'Just a 6-hour flight from most European capitals',
        'Dubai International Airport is one of the world\'s busiest',
        'Gateway to emerging markets in the Middle East, Asia, and Africa',
        'Same or similar time zone as Germany (UTC+4)',
        'Weekend trips to destinations across three continents'
      ]
    },
    {
      title: 'Modern Infrastructure',
      description: 'Take advantage of Dubai\'s cutting-edge infrastructure, technology, and urban planning.',
      icon: <Building className="h-10 w-10 text-dubai-gold" />,
      details: [
        'Ultra-fast internet connectivity',
        'Reliable utilities with minimal outages',
        'Smart city initiatives for enhanced living',
        'State-of-the-art real estate developments',
        'Advanced healthcare facilities',
        'Efficient transportation network'
      ]
    }
  ];

  const lifestyleComparisons = [
    {
      category: 'Weather',
      dubai: 'Year-round sunshine, mild winters (20-25°C), hot summers (38-42°C)',
      germany: 'Four distinct seasons, cold winters, mild summers, frequent rainfall'
    },
    {
      category: 'Cost of Living',
      dubai: 'No income tax, higher disposable income, higher housing costs in premium areas',
      germany: 'High income tax (up to 45%), lower housing costs except in major cities'
    },
    {
      category: 'Work Culture',
      dubai: 'Sunday-Thursday workweek, business-friendly environment, international workforce',
      germany: 'Monday-Friday workweek, strong work-life balance, structured environment'
    },
    {
      category: 'Social Life',
      dubai: 'Cosmopolitan environment, diverse expatriate communities, luxury lifestyle options',
      germany: 'Strong local communities, cultural activities, outdoor lifestyle'
    },
    {
      category: 'Family Life',
      dubai: 'Excellent international schools, family-friendly activities, domestic help affordable',
      germany: 'Strong public education, comprehensive family benefits, outdoor activities'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1546412414-e1885e51cfa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Dubai skyline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="section-container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="mb-6 animate-fade-in">Why Choose Dubai?</h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Discover the exceptional benefits and opportunities that make Dubai an ideal destination for Germans looking to relocate.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 gradient-text">A Lifestyle Upgrade</h2>
              <p className="text-gray-600 mb-6">
                Dubai has transformed from a desert outpost to a global metropolis, offering residents an unparalleled 
                combination of economic opportunity, safety, and quality of life. As a German relocating to Dubai, 
                you'll enjoy numerous advantages that make the transition worthwhile.
              </p>
              <p className="text-gray-600">
                From tax benefits that allow you to maximize your income to year-round sunshine and a strategic location 
                for global travel, Dubai offers a lifestyle upgrade that's hard to match. Let's explore why so many 
                Germans are choosing Dubai as their new home.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1528702748617-c64d49f918af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Dubai lifestyle" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-dubai-dark-sand/30 w-64 hidden md:block">
                <div className="flex items-center">
                  <Sun className="h-8 w-8 text-dubai-gold mr-3" />
                  <div>
                    <div className="font-bold">340+ days</div>
                    <div className="text-gray-600 text-sm">of sunshine each year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-dubai-dark-sand/10">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Key Benefits of Living in Dubai</h2>
            <p className="text-gray-600">
              Dubai offers numerous advantages over other relocation destinations, combining financial benefits with 
              an exceptional lifestyle and infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-dubai-dark-sand/30 hover:shadow-md transition-shadow">
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-6">{benefit.description}</p>
                <div>
                  <h4 className="font-medium text-sm text-gray-700 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {benefit.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRight className="h-4 w-4 text-dubai-gold mr-2 mt-1 shrink-0" />
                        <span className="text-gray-600 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Dubai vs. Germany: Lifestyle Comparison</h2>
            <p className="text-gray-600">
              While both Dubai and Germany offer excellent living standards, there are key differences that might influence your decision to relocate.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="gold-gradient-bg text-white">
                  <th className="py-3 px-4 text-left rounded-tl-lg">Category</th>
                  <th className="py-3 px-4 text-left">Dubai</th>
                  <th className="py-3 px-4 text-left rounded-tr-lg">Germany</th>
                </tr>
              </thead>
              <tbody>
                {lifestyleComparisons.map((comparison, index) => (
                  <tr 
                    key={index} 
                    className={index % 2 === 0 ? 'bg-dubai-sand/50' : 'bg-white'}
                  >
                    <td className="py-3 px-4 border-b border-dubai-dark-sand/30 font-medium">{comparison.category}</td>
                    <td className="py-3 px-4 border-b border-dubai-dark-sand/30 text-gray-600">{comparison.dubai}</td>
                    <td className="py-3 px-4 border-b border-dubai-dark-sand/30 text-gray-600">{comparison.germany}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 blue-gradient-bg text-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">What Germans Say About Living in Dubai</h2>
            <p className="text-white/80">
              Hear directly from fellow Germans who have made the move and are enjoying life in Dubai.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Katharina Becker" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Katharina Becker</h4>
                  <p className="text-white/70 text-sm">Moved from Munich in 2019</p>
                </div>
              </div>
              <p className="text-white/90 italic mb-4">
                "Moving to Dubai has been transformative for my career and lifestyle. I save significantly more money thanks to the tax benefits, and I love the cosmopolitan environment. Yes, summers are hot, but modern air conditioning is everywhere, and the winters are absolutely perfect."
              </p>
              <p className="text-white/90">
                "The safety aspect cannot be overstated—I feel comfortable walking alone at any time of day or night, something I couldn't always say in Germany."
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Stefan Hoffmann" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Stefan Hoffmann</h4>
                  <p className="text-white/70 text-sm">Moved from Berlin in 2020</p>
                </div>
              </div>
              <p className="text-white/90 italic mb-4">
                "As an entrepreneur, Dubai offered me a business-friendly environment that was refreshing after the bureaucracy I faced in Germany. Setting up my company was straightforward, and the absence of income tax allowed me to reinvest more into my business."
              </p>
              <p className="text-white/90">
                "The international network I've built here has been invaluable. My family has also adapted well—my children attend an excellent international school, and we enjoy the outdoor lifestyle during the cooler months."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Get answers to common questions about relocating from Germany to Dubai.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Do I need to learn Arabic to live in Dubai?",
                answer: "Not necessarily. English is widely spoken throughout Dubai in business, retail, and hospitality sectors. While learning basic Arabic phrases is appreciated and helpful, you can easily navigate daily life using English."
              },
              {
                question: "How hot does it really get in Dubai?",
                answer: "Summer temperatures (June to September) typically range from 38-42°C and can occasionally reach 48°C. However, nearly all indoor spaces are air-conditioned, and the weather from October to May is very pleasant, with temperatures between 20-30°C."
              },
              {
                question: "Can I continue to receive my German pension if I move to Dubai?",
                answer: "Yes, Germans can continue receiving their pension while living in Dubai. Germany has a social security agreement with the UAE that allows for pension transfers. The pension is typically paid into your German bank account, which you can maintain."
              },
              {
                question: "What about healthcare in Dubai?",
                answer: "Dubai has excellent private healthcare facilities with many German-speaking doctors. Health insurance is mandatory for residents. The quality of healthcare is high, often comparable to or exceeding European standards, especially in private hospitals."
              },
              {
                question: "Is it difficult to adjust to the cultural differences?",
                answer: "Most Germans adapt well to life in Dubai. While there are cultural differences, Dubai is very international and accommodating. Respect for local customs regarding dress and behavior in public places is important, but the lifestyle is generally modern and cosmopolitan."
              },
              {
                question: "Can I purchase alcohol in Dubai?",
                answer: "Yes, alcohol is available in licensed restaurants, hotels, and bars. Residents can obtain an alcohol license to purchase alcohol from designated stores for home consumption. The rules have been relaxed in recent years, making the process easier."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-lg border border-dubai-dark-sand/30">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-20 bg-dubai-dark-sand/10">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="mb-6">Ready to Make the Move?</h2>
              <p className="text-gray-600 mb-8">
                Now that you understand the benefits of living in Dubai, the next step is to learn about the practical aspects of making the move. 
                Our comprehensive step-by-step guide will walk you through the entire process, from obtaining the right visa to finding your dream home.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  to="/step-by-step-guide"
                  className="px-6 py-3 rounded-md text-white gold-gradient-bg hover:opacity-90 transition-opacity font-medium flex items-center justify-center"
                >
                  View Step-by-Step Guide <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/consulting"
                  className="px-6 py-3 rounded-md border border-dubai-dark-sand text-gray-700 hover:bg-dubai-dark-sand/10 transition-colors font-medium flex items-center justify-center"
                >
                  Get Personalized Help
                </Link>
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

export default WhyDubai;
