
import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Consulting = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Consultation Request Received",
        description: "Thank you for your interest. We'll contact you within 24 hours to schedule your consultation.",
        duration: 5000,
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceType: '',
        message: ''
      });
      setLoading(false);
    }, 1500);
  };

  const services = [
    {
      title: "Visa & Relocation Consultation",
      description: "Get expert guidance on visa types, application procedures, and all aspects of relocating from Germany to Dubai.",
      features: [
        "Personal visa eligibility assessment",
        "Document preparation guidance",
        "Timeline planning for smooth transition",
        "Post-arrival support and orientation"
      ],
      price: "149€",
      duration: "60 minutes"
    },
    {
      title: "Property & Housing Assistance",
      description: "Find your perfect home in Dubai with personalized property search assistance and rental/buying guidance.",
      features: [
        "Neighborhood recommendations based on your needs",
        "Property viewing coordination",
        "Rental contract review and negotiation support",
        "Housing budget optimization"
      ],
      price: "199€",
      duration: "90 minutes"
    },
    {
      title: "Business Setup Consultation",
      description: "Learn how to establish and operate a business in Dubai's dynamic economy with our expert business consultants.",
      features: [
        "Business structure and free zone recommendations",
        "Licensing requirements explanation",
        "Cost analysis and budget planning",
        "Introduction to local business networks"
      ],
      price: "249€",
      duration: "120 minutes"
    },
    {
      title: "Comprehensive Relocation Package",
      description: "All-inclusive support for every aspect of your move to Dubai, from visa to housing, schools, and settling in.",
      features: [
        "Full visa and immigration support",
        "Personalized housing search",
        "School and education guidance",
        "Banking setup and financial advice",
        "Cultural orientation and integration support"
      ],
      price: "599€",
      duration: "Multiple sessions"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573497701240-345a300b8d36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Dubai consultation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="section-container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="mb-6 animate-fade-in">Expert Consulting Services</h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Get personalized guidance from our team of relocation experts to make your move to Dubai smooth and successful.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Consulting Services</h2>
            <p className="text-gray-600">
              Choose from our range of specialized consulting services designed to address every aspect of relocating to Dubai.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-dubai-sand/20 rounded-lg overflow-hidden border border-dubai-dark-sand/20 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-dubai-gold mr-2 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 bg-white border-t border-dubai-dark-sand/20">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">Starting at</span>
                    <span className="text-2xl font-bold text-dubai-gold">{service.price}</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-6">
                    Duration: {service.duration}
                  </div>
                  <a 
                    href="#booking-form" 
                    className="block w-full py-2 text-center rounded-md text-white gold-gradient-bg hover:opacity-90 transition-opacity font-medium"
                  >
                    Book Consultation
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-dubai-dark-sand/10">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">How Our Consultation Process Works</h2>
            <p className="text-gray-600">
              We've designed a simple, efficient process to provide you with the guidance you need for your Dubai relocation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Submit Your Request",
                description: "Fill out our consultation request form with details about your situation and needs.",
                icon: "📝"
              },
              {
                step: "2",
                title: "Schedule Your Session",
                description: "Our team will contact you within 24 hours to schedule your consultation at a convenient time.",
                icon: "📅"
              },
              {
                step: "3",
                title: "Get Expert Guidance",
                description: "Meet with our specialists via video call to discuss your specific needs and receive personalized advice.",
                icon: "💬"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 rounded-full gold-gradient-bg text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-gray-600">
              Hear directly from Germans who have used our consulting services for their Dubai relocation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "The visa consultation saved me countless hours of research and potential mistakes. My Golden Visa was approved in record time thanks to the expert guidance.",
                name: "Dr. Frank Weber",
                title: "Physician from Munich"
              },
              {
                quote: "The comprehensive package was worth every euro. From finding schools for our children to navigating the housing market, every aspect of our move was handled expertly.",
                name: "The Schneider Family",
                title: "Relocated from Frankfurt"
              },
              {
                quote: "Setting up my business in Dubai seemed daunting until I had my consultation. The clear step-by-step guidance made the process straightforward and efficient.",
                name: "Martina Bauer",
                title: "Entrepreneur from Berlin"
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-6 bg-dubai-sand/20 rounded-lg border border-dubai-dark-sand/20">
                <div className="h-40 flex items-center mb-6">
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
                <div className="border-t border-dubai-dark-sand/20 pt-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-20 bg-dubai-dark-sand/10">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Book Your Consultation</h2>
            <p className="text-gray-600">
              Fill out the form below to request your personalized consultation. Our team will contact you within 24 hours to schedule your session.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 border border-dubai-dark-sand/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                  Consultation Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                >
                  <option value="">Select a consultation type</option>
                  <option value="visa">Visa & Relocation Consultation</option>
                  <option value="housing">Property & Housing Assistance</option>
                  <option value="business">Business Setup Consultation</option>
                  <option value="comprehensive">Comprehensive Relocation Package</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Situation & Questions
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                  placeholder="Please briefly describe your situation and any specific questions you have."
                ></textarea>
              </div>
              
              <div className="mb-6">
                <div className="flex items-start">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-dubai-gold border-dubai-dark-sand rounded mt-1"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                    I agree to the <a href="/privacy-policy" className="text-dubai-gold hover:underline">Privacy Policy</a> and consent to being contacted regarding my consultation request.
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-md text-white gold-gradient-bg hover:opacity-90 transition-opacity font-medium flex justify-center items-center"
              >
                {loading ? (
                  <>
                    <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Book Your Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Get answers to common questions about our consulting services.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How are consultations conducted?",
                answer: "Consultations are primarily conducted via video call (Zoom, Teams, or similar). For clients already in Dubai, in-person meetings may be arranged."
              },
              {
                question: "What languages do you offer consultations in?",
                answer: "Our consultants are fluent in German and English. Consultations can be conducted in either language according to your preference."
              },
              {
                question: "How soon can I schedule a consultation?",
                answer: "Typically, consultations can be scheduled within 2-5 business days after your request, depending on our consultants' availability."
              },
              {
                question: "Can I upgrade my consultation package later?",
                answer: "Yes, you can upgrade to a more comprehensive package at any time. We'll simply credit the cost of your initial consultation toward the new package."
              },
              {
                question: "Is there a refund policy if I'm not satisfied?",
                answer: "Yes, we offer a satisfaction guarantee. If you don't find our consultation valuable, we'll offer a follow-up session at no charge or a partial refund."
              },
              {
                question: "Do you offer ongoing support after the consultation?",
                answer: "The Comprehensive Relocation Package includes ongoing support. For other packages, follow-up questions via email are included for 30 days. Additional support can be arranged at preferential rates."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-dubai-sand/20 rounded-lg border border-dubai-dark-sand/20">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Consulting;
