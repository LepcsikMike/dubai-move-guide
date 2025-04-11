
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileDown, Calculator, FileText, Video, ArrowRight, Check, FileQuestion } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Resources = () => {
  const [housingBudget, setHousingBudget] = useState(10000);
  const [familySize, setFamilySize] = useState(2);
  const [schoolAge, setSchoolAge] = useState(0);
  const [lifestyle, setLifestyle] = useState('moderate');

  const calculateMonthlyCost = () => {
    // Basic housing cost based on input
    const housingCost = housingBudget;
    
    // Utility costs (adjust with family size)
    const utilitiesCost = 500 + (familySize * 150);
    
    // Food and groceries
    const groceriesCost = familySize * 1200;
    
    // Transportation
    const transportCost = 1500; 
    
    // Education cost per child in school
    const educationCost = schoolAge * 3500;
    
    // Lifestyle multiplier
    let lifestyleMultiplier = 1;
    switch(lifestyle) {
      case 'budget':
        lifestyleMultiplier = 0.8;
        break;
      case 'moderate':
        lifestyleMultiplier = 1;
        break;
      case 'premium':
        lifestyleMultiplier = 1.3;
        break;
      case 'luxury':
        lifestyleMultiplier = 1.8;
        break;
      default:
        lifestyleMultiplier = 1;
    }
    
    // Entertainment and leisure
    const entertainmentCost = 2000 * lifestyleMultiplier;
    
    // Healthcare estimate
    const healthcareCost = familySize * 300;
    
    // Miscellaneous
    const miscCost = 1000 * lifestyleMultiplier;
    
    // Total monthly cost
    const totalCost = (housingCost + utilitiesCost + groceriesCost + transportCost + 
                        educationCost + entertainmentCost + healthcareCost + miscCost);
    
    return {
      housing: housingCost,
      utilities: utilitiesCost,
      groceries: groceriesCost,
      transport: transportCost,
      education: educationCost,
      entertainment: entertainmentCost,
      healthcare: healthcareCost,
      misc: miscCost,
      total: totalCost
    };
  };

  const costs = calculateMonthlyCost();

  const downloadResource = (resourceName: string) => {
    toast({
      title: "Download Started",
      description: `${resourceName} is being downloaded to your device.`,
      duration: 3000,
    });
  };

  const resourceCategories = [
    {
      id: "checklists",
      title: "Moving Checklists",
      icon: <FileText className="h-10 w-10 text-dubai-gold" />,
      resources: [
        {
          title: "6-Month Pre-Move Checklist",
          description: "Start your planning early with this comprehensive checklist of tasks to complete 3-6 months before your move.",
          id: "pre-move-checklist"
        },
        {
          title: "1-Month Final Preparations",
          description: "Critical tasks to complete in the final month before relocating to Dubai.",
          id: "final-prep-checklist"
        },
        {
          title: "First Week in Dubai Checklist",
          description: "Essential tasks to complete during your first week in Dubai to get settled quickly.",
          id: "first-week-checklist"
        },
        {
          title: "Document Preparation Guide",
          description: "Complete list of documents to gather, translate, and authenticate before moving.",
          id: "document-guide"
        }
      ]
    },
    {
      id: "guides",
      title: "Comprehensive Guides",
      icon: <FileQuestion className="h-10 w-10 text-dubai-gold" />,
      resources: [
        {
          title: "Complete Housing Guide",
          description: "Detailed overview of Dubai's neighborhoods, rental process, and property buying options.",
          id: "housing-guide"
        },
        {
          title: "Visa Application Guide",
          description: "Step-by-step instructions for applying for different types of Dubai visas from Germany.",
          id: "visa-guide"
        },
        {
          title: "Banking & Finance Setup",
          description: "How to set up your financial life in Dubai, from bank accounts to investments.",
          id: "banking-guide"
        },
        {
          title: "German Schools & Education",
          description: "Options for German curriculum education and international schools in Dubai.",
          id: "education-guide"
        }
      ]
    },
    {
      id: "videos",
      title: "Video Resources",
      icon: <Video className="h-10 w-10 text-dubai-gold" />,
      resources: [
        {
          title: "Dubai Neighborhood Tours",
          description: "Virtual tours of popular expatriate neighborhoods in Dubai.",
          id: "neighborhood-videos"
        },
        {
          title: "Visa Process Explained",
          description: "Visual walkthrough of the visa application and approval process.",
          id: "visa-videos"
        },
        {
          title: "Cultural Adaptation Tips",
          description: "Practical advice for adjusting to Dubai's cultural environment.",
          id: "cultural-videos"
        },
        {
          title: "German Success Stories",
          description: "Interviews with Germans who have successfully relocated to Dubai.",
          id: "success-videos"
        }
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1605133659277-1b862a2e0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Dubai resources" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="section-container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="mb-6 animate-fade-in">Resources & Tools</h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Download guides, checklists, and use our interactive tools to help plan and execute your move to Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories Section */}
      {resourceCategories.map((category) => (
        <section key={category.id} id={category.id} className="py-16 bg-white">
          <div className="section-container">
            <div className="mb-12 flex items-center">
              <div className="mr-4">{category.icon}</div>
              <h2 className="text-3xl font-bold">{category.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.resources.map((resource) => (
                <div 
                  key={resource.id} 
                  className="bg-dubai-sand/30 rounded-lg p-6 border border-dubai-dark-sand/20 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm min-h-[60px]">{resource.description}</p>
                  <button
                    onClick={() => downloadResource(resource.title)}
                    className="text-dubai-gold font-medium flex items-center hover:underline"
                  >
                    <FileDown className="mr-2 h-4 w-4" />
                    Download Resource
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Cost Calculator Section */}
      <section id="calculator" className="py-16 bg-dubai-dark-sand/10">
        <div className="section-container">
          <div className="mb-12 flex items-center">
            <Calculator className="h-10 w-10 text-dubai-gold mr-4" />
            <h2 className="text-3xl font-bold">Dubai Cost of Living Calculator</h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 border border-dubai-dark-sand/20">
            <p className="text-gray-600 mb-8">
              Estimate your monthly expenses in Dubai based on your housing budget, family size, and lifestyle preferences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Input Your Details</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Housing Budget (AED)
                  </label>
                  <input
                    type="range"
                    min="5000"
                    max="50000"
                    step="1000"
                    value={housingBudget}
                    onChange={(e) => setHousingBudget(parseInt(e.target.value))}
                    className="w-full h-2 bg-dubai-dark-sand/30 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>5,000</span>
                    <span>{housingBudget.toLocaleString()} AED</span>
                    <span>50,000</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Family Size (including yourself)
                  </label>
                  <div className="flex space-x-4">
                    {[1, 2, 3, 4, 5, 6].map((size) => (
                      <button
                        key={size}
                        onClick={() => setFamilySize(size)}
                        className={`w-10 h-10 rounded-full ${
                          familySize === size
                            ? "gold-gradient-bg text-white"
                            : "bg-dubai-sand/50 text-gray-700 hover:bg-dubai-dark-sand/30"
                        } flex items-center justify-center font-medium transition-colors`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of School-Age Children
                  </label>
                  <div className="flex space-x-4">
                    {[0, 1, 2, 3, 4].map((num) => (
                      <button
                        key={num}
                        onClick={() => setSchoolAge(num)}
                        className={`w-10 h-10 rounded-full ${
                          schoolAge === num
                            ? "gold-gradient-bg text-white"
                            : "bg-dubai-sand/50 text-gray-700 hover:bg-dubai-dark-sand/30"
                        } flex items-center justify-center font-medium transition-colors`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lifestyle Preference
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'budget', label: 'Budget' },
                      { id: 'moderate', label: 'Moderate' },
                      { id: 'premium', label: 'Premium' },
                      { id: 'luxury', label: 'Luxury' }
                    ].map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setLifestyle(option.id)}
                        className={`py-2 px-4 rounded-md text-sm font-medium ${
                          lifestyle === option.id
                            ? "gold-gradient-bg text-white"
                            : "bg-dubai-sand/50 text-gray-700 hover:bg-dubai-dark-sand/30"
                        } transition-colors`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-dubai-sand/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Estimated Monthly Expenses</h3>
                
                <div className="space-y-3 mb-6">
                  {[
                    { label: 'Housing', value: costs.housing },
                    { label: 'Utilities', value: costs.utilities },
                    { label: 'Food & Groceries', value: costs.groceries },
                    { label: 'Transportation', value: costs.transport },
                    { label: 'Education', value: costs.education },
                    { label: 'Entertainment', value: costs.entertainment },
                    { label: 'Healthcare', value: costs.healthcare },
                    { label: 'Miscellaneous', value: costs.misc }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-dubai-dark-sand/20">
                      <span className="text-gray-700">{item.label}</span>
                      <span className="font-medium">{item.value.toLocaleString()} AED</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center py-3 border-t-2 border-dubai-gold">
                  <span className="text-lg font-bold">Total Monthly</span>
                  <span className="text-xl font-bold text-dubai-gold">{costs.total.toLocaleString()} AED</span>
                </div>
                
                <div className="mt-4 text-sm text-gray-600">
                  <p>* This is an estimate based on average costs in Dubai. Actual expenses may vary.</p>
                  <p>* 1 Euro ≈ 4 AED (approximate conversion rate)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Users Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The checklists and cost calculator were invaluable for planning our family's move. We felt much more prepared and confident.",
                author: "Claudia & Peter Schmitz",
                moved: "Moved from Hamburg in 2023"
              },
              {
                quote: "I used the neighborhood guide to find the perfect apartment in Dubai Marina. The detailed insights helped me make the right choice for my lifestyle.",
                author: "Jan Hoffmann",
                moved: "Moved from Munich in 2024"
              },
              {
                quote: "The visa guide simplified what seemed like a complex process. I followed it step by step and received my Golden Visa without any issues.",
                author: "Sarah Becker",
                moved: "Moved from Berlin in 2023"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-dubai-sand/20 p-6 rounded-lg border border-dubai-dark-sand/20">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.moved}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 blue-gradient-bg text-white">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Need Personalized Assistance?</h2>
            <p className="text-white/80 mb-8">
              Our resources provide general guidance, but everyone's situation is unique. Get personalized consulting 
              to address your specific questions and challenges about relocating to Dubai.
            </p>
            <div className="flex justify-center">
              <Link
                to="/consulting"
                className="px-8 py-3 rounded-md text-dubai-gold bg-white hover:bg-white/90 transition-colors font-medium flex items-center"
              >
                Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
