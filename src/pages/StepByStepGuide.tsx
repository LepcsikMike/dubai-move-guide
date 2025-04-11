
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileDown, Check, Info, ArrowRight, ExternalLink } from 'lucide-react';

const StepByStepGuide = () => {
  const [activeTab, setActiveTab] = useState("visas");
  
  const tabs = [
    { id: "visas", label: "Visas & Legal", icon: "📝" },
    { id: "housing", label: "Housing", icon: "🏠" },
    { id: "jobs", label: "Finding Work", icon: "💼" },
    { id: "healthcare", label: "Healthcare", icon: "🏥" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "banking", label: "Banking & Finance", icon: "💰" },
    { id: "culture", label: "Culture & Lifestyle", icon: "🌴" }
  ];

  const tabContent = {
    visas: {
      title: "Navigating Visas & Legal Requirements",
      intro: "Obtaining the right visa is the first and most crucial step of your Dubai relocation journey. There are several visa options available for Germans moving to Dubai, each with specific requirements and benefits.",
      steps: [
        {
          title: "Choose the Right Visa Type",
          content: "As a German citizen, you have several visa options for Dubai:",
          list: [
            "Employment Visa: Sponsored by your employer in Dubai",
            "Investor Visa: For those starting or investing in a business",
            "Property Owner Visa: Available when purchasing property worth AED 1 million+",
            "Retirement Visa: For those aged 55+ with specific financial requirements",
            "Remote Work Visa: For digital nomads and remote workers",
            "Golden Visa: Long-term residence (5-10 years) for investors, entrepreneurs, and specialists"
          ]
        },
        {
          title: "Gather Required Documents",
          content: "Regardless of the visa type, you'll typically need:",
          list: [
            "Valid German passport with at least 6 months validity",
            "Passport-sized photographs with white background",
            "Completed visa application form",
            "Health insurance certificate valid in the UAE",
            "Additional documents specific to your visa type (employment contract, property deed, etc.)",
            "Criminal record clearance from Germany (for some visa types)"
          ]
        },
        {
          title: "Complete Medical Examination",
          content: "Most residency visas require a medical fitness test in Dubai that includes:",
          list: [
            "Blood tests for infectious diseases",
            "Chest X-ray",
            "General health examination"
          ]
        },
        {
          title: "Obtain Emirates ID",
          content: "After visa approval, you'll need to apply for an Emirates ID card, which is mandatory for all UAE residents. The process involves:",
          list: [
            "Completing an application form",
            "Providing biometric data (fingerprints and photograph)",
            "Paying the applicable fee",
            "Collecting your ID card once processed"
          ]
        }
      ],
      tips: [
        "Start the visa process at least 2-3 months before your planned move",
        "Consider using a reputable legal service to navigate the visa process",
        "Keep digital copies of all your documents in a secure location",
        "Check for the latest visa regulations as they can change"
      ],
      resources: [
        {
          title: "Visa Application Checklist",
          link: "/resources#visa-checklist",
          type: "checklist"
        },
        {
          title: "Official UAE Government Portal",
          link: "https://u.ae/en/information-and-services/visa-and-emirates-id",
          type: "external"
        }
      ]
    },
    housing: {
      title: "Finding Your Ideal Home in Dubai",
      intro: "Dubai offers diverse housing options, from luxurious waterfront apartments to family-friendly villa communities. Understanding the real estate market and neighborhoods will help you find the perfect home for your needs and budget.",
      steps: [
        {
          title: "Understand Dubai's Neighborhoods",
          content: "Dubai's neighborhoods vary widely in character, amenities, and price:",
          list: [
            "Downtown Dubai: Central location, luxury apartments, close to Burj Khalifa",
            "Dubai Marina: Waterfront living with a European feel, popular with expats",
            "Palm Jumeirah: Iconic location, luxury villas and apartments",
            "Jumeirah: Traditional upscale area with villas and beaches",
            "Arabian Ranches: Family-friendly villa community with green spaces",
            "Dubai Hills: Newer development with modern villas and apartments",
            "JLT/JVC: More affordable apartment options popular with young professionals"
          ]
        },
        {
          title: "Decide Between Renting and Buying",
          content: "Both options have advantages in Dubai:",
          list: [
            "Renting: More flexibility, no maintenance responsibility, lower initial costs",
            "Buying: Long-term investment, potential for capital appreciation, eligibility for property owner visa",
            "Most rentals require payment in 1-4 cheques annually (fewer cheques typically means lower rent)",
            "5% down payment required for first-time home buyers (25% for non-residents)",
            "4% property registration fee plus agent fees (typically 2%) when buying"
          ]
        },
        {
          title: "Work with a Reputable Agent",
          content: "A good real estate agent in Dubai is essential:",
          list: [
            "Verify the agent has a RERA (Real Estate Regulatory Agency) number",
            "Ask for recommendations from other expats",
            "Interview multiple agents to find one who understands your needs",
            "Clarify fee structure upfront (typically 5% of annual rent or 2% of purchase price)"
          ]
        },
        {
          title: "Understand the Rental/Buying Process",
          content: "Be prepared for Dubai's unique property processes:",
          list: [
            "For rentals: Sign tenancy contract, provide security deposit (5-10%), pay agent fee",
            "For buying: Make offer, sign MOU, pay deposit, complete property registration",
            "Set up DEWA (Dubai Electricity and Water Authority) account",
            "Register with your building management for access cards and amenities",
            "Consider hiring professional cleaning services before moving in"
          ]
        }
      ],
      tips: [
        "Visit multiple properties and neighborhoods before deciding",
        "Factor in commute times to work or schools",
        "Check building amenities (pool, gym, parking) and maintenance quality",
        "Negotiate! Prices are often negotiable in Dubai's competitive market",
        "Read reviews of buildings and communities online before committing"
      ],
      resources: [
        {
          title: "Dubai Neighborhood Guide",
          link: "/resources#neighborhood-guide",
          type: "checklist"
        },
        {
          title: "Rental Process Explainer",
          link: "/resources#rental-guide",
          type: "checklist"
        }
      ]
    },
    jobs: {
      title: "Finding Employment Opportunities in Dubai",
      intro: "Dubai offers excellent career prospects for skilled Germans across various industries. Understanding the job market and application process will help you secure a rewarding position with competitive compensation.",
      steps: [
        {
          title: "Understand the Job Market for Germans",
          content: "German professionals are highly valued in Dubai, particularly in these sectors:",
          list: [
            "Engineering and manufacturing (especially automotive and construction)",
            "Finance and banking",
            "Information technology and digital transformation",
            "Renewable energy and sustainability",
            "Healthcare and medical technology",
            "Hospitality and tourism",
            "Education (particularly for German language specialists)"
          ]
        },
        {
          title: "Prepare Your Application Materials",
          content: "Tailor your application for the Dubai market:",
          list: [
            "Update your CV in English, highlighting international experience",
            "Include a professional photo on your CV (common practice in UAE)",
            "Obtain translated and attested copies of your qualifications",
            "Prepare a compelling cover letter emphasizing your unique skills",
            "Build a strong LinkedIn profile as many recruiters use the platform",
            "Collect reference letters from previous employers"
          ]
        },
        {
          title: "Explore Job Hunting Channels",
          content: "Use multiple channels to maximize your opportunities:",
          list: [
            "Specialized job portals like GulfTalent, Bayt, and Indeed UAE",
            "LinkedIn jobs section with Dubai location filter",
            "German Business Council and German Emirati Joint Council for Industry and Commerce",
            "Industry-specific networking events and exhibitions",
            "Direct applications to company career pages",
            "Reputable recruitment agencies specializing in your field"
          ]
        },
        {
          title: "Understand Employment Packages",
          content: "Dubai compensation packages often include:",
          list: [
            "Base salary (tax-free in UAE)",
            "Housing allowance or provided accommodation",
            "Transportation allowance or company car",
            "Health insurance (mandatory for all employees)",
            "Annual flight tickets to your home country",
            "Education allowance for children (in more senior positions)",
            "End-of-service benefits (gratuity payment based on years of service)"
          ]
        }
      ],
      tips: [
        "Network extensively—many positions are filled through connections",
        "Consider arriving on a visit visa for in-person interviews if possible",
        "Be prepared for video interviews due to the distance",
        "Research typical salary ranges for your position to negotiate effectively",
        "Understand that employment contracts are binding legal documents in UAE"
      ],
      resources: [
        {
          title: "Dubai Salary Guide",
          link: "/resources#salary-guide",
          type: "checklist"
        },
        {
          title: "Job Interview Preparation",
          link: "/resources#interview-prep",
          type: "checklist"
        }
      ]
    },
    healthcare: {
      title: "Navigating Healthcare in Dubai",
      intro: "Dubai offers world-class healthcare facilities with many international and German-speaking medical professionals. Understanding the healthcare system and insurance options is essential for maintaining your wellbeing in your new home.",
      steps: [
        {
          title: "Understand the Healthcare System",
          content: "Dubai's healthcare system combines public and private facilities:",
          list: [
            "Public healthcare through Dubai Health Authority (DHA) facilities",
            "Numerous private hospitals and clinics, many with international accreditation",
            "Health insurance is mandatory for all residents",
            "Emergency services are available by calling 998 or 999",
            "Pharmacies are widely available, with many open 24/7",
            "Electronic medical records system connects many facilities"
          ]
        },
        {
          title: "Obtain Health Insurance",
          content: "Health insurance requirements in Dubai:",
          list: [
            "Employers must provide basic health insurance for employees",
            "Sponsors must provide insurance for dependents",
            "Basic plans cover essential treatments and emergency care",
            "Premium plans offer wider coverage and lower co-payments",
            "Consider additional coverage for specific needs (dental, maternity, etc.)",
            "Check if your plan includes medical evacuation or treatment abroad"
          ]
        },
        {
          title: "Find Healthcare Providers",
          content: "Resources for finding the right healthcare providers:",
          list: [
            "Ask your insurance company for their network of providers",
            "Seek recommendations from fellow Germans in Dubai",
            "Research hospitals with German-speaking staff",
            "Consider medical facilities near your home or workplace",
            "Check provider ratings and accreditations",
            "Schedule introductory appointments with potential primary care doctors"
          ]
        },
        {
          title: "Bring Medical Records and Medication",
          content: "Prepare your medical information:",
          list: [
            "Obtain copies of important medical records translated to English",
            "Bring a sufficient supply of current medications",
            "Check if your medications are available in UAE (some medications containing narcotics may be restricted)",
            "Get prescriptions for chronic conditions from your German doctor",
            "Bring vaccination records, especially for children",
            "Consider a pre-departure medical check-up in Germany"
          ]
        }
      ],
      tips: [
        "Register with a primary healthcare provider soon after arrival",
        "Keep digital copies of your insurance card and important medical documents",
        "Learn basic medical terms in English if you're not fluent",
        "Understand your insurance policy's co-payment and claim procedures",
        "Consider telemedicine options for connecting with German doctors"
      ],
      resources: [
        {
          title: "Healthcare Facilities Guide",
          link: "/resources#healthcare-guide",
          type: "checklist"
        },
        {
          title: "Insurance Comparison Tool",
          link: "/resources#insurance-tool",
          type: "checklist"
        }
      ]
    },
    education: {
      title: "Education Options for Families in Dubai",
      intro: "Dubai offers a wide range of educational options for families, from international schools following various curricula to German-specific education. Finding the right school for your children is an important part of a successful relocation.",
      steps: [
        {
          title: "Understand School Options",
          content: "Dubai offers diverse educational choices:",
          list: [
            "International schools following British, American, IB, and other curricula",
            "German International School Dubai (Deutsche Internationale Schule Dubai)",
            "Swiss International Scientific School (offers German stream)",
            "Public schools (primarily for UAE nationals but may accept expats)",
            "Nurseries and kindergartens for early childhood education",
            "Special needs education facilities",
            "Universities and higher education institutions"
          ]
        },
        {
          title: "Research and Select Schools",
          content: "Finding the right school requires research:",
          list: [
            "Consider your child's educational background and future plans",
            "Research school locations in relation to your home and workplace",
            "Check KHDA (Knowledge and Human Development Authority) ratings",
            "Compare fee structures and additional costs",
            "Visit schools and meet with admissions teams",
            "Speak with current parents about their experiences",
            "Consider waiting lists for popular schools"
          ]
        },
        {
          title: "Understand the Admission Process",
          content: "School admissions in Dubai typically require:",
          list: [
            "Application forms and registration fees",
            "Previous school reports and transcripts",
            "Assessment tests for most schools",
            "Interviews with students and sometimes parents",
            "Medical records and immunization certificates",
            "Passport copies and residency visa information",
            "Enrollment deposit to secure a place"
          ]
        },
        {
          title: "Prepare for the Transition",
          content: "Help your child adjust to their new school:",
          list: [
            "Discuss the move openly and positively with your children",
            "Connect with other families from the same school",
            "Attend orientation programs and welcome events",
            "Prepare for a different academic calendar (typically August-June)",
            "Be aware of uniform requirements and dress codes",
            "Understand transportation options (school bus or private)",
            "Set up extracurricular activities to help integration"
          ]
        }
      ],
      tips: [
        "Apply to schools early as popular schools fill up quickly",
        "Budget for education costs, which are significant in Dubai",
        "Consider the language of instruction and language support available",
        "Check if the curriculum allows for easy transition back to German schools if needed",
        "Look into after-school activities and community involvement"
      ],
      resources: [
        {
          title: "School Comparison Checklist",
          link: "/resources#school-checklist",
          type: "checklist"
        },
        {
          title: "Education Transition Guide",
          link: "/resources#education-transition",
          type: "checklist"
        }
      ]
    },
    banking: {
      title: "Setting Up Your Finances in Dubai",
      intro: "Understanding the banking system in Dubai and managing your finances efficiently is crucial for a smooth transition. From opening bank accounts to managing international transfers, here's everything you need to know.",
      steps: [
        {
          title: "Choose the Right Bank",
          content: "Dubai offers many banking options including:",
          list: [
            "Local banks: Emirates NBD, Dubai Islamic Bank, ADCB",
            "International banks with German connections: Deutsche Bank, Commerzbank",
            "Other international banks: HSBC, Citibank, Standard Chartered",
            "Digital banks: Neo, Mashreq Neo, CBD NOW",
            "Consider factors like branch/ATM locations, online banking quality, fees structure, and expat services"
          ]
        },
        {
          title: "Open Bank Accounts",
          content: "Requirements for opening accounts typically include:",
          list: [
            "Emirates ID and residence visa",
            "Passport with residence visa page",
            "Proof of address (rental contract or utility bill)",
            "Salary certificate or employment contract",
            "Consider both current (checking) and savings accounts",
            "Obtain debit cards and checkbooks as needed",
            "Set up online and mobile banking access"
          ]
        },
        {
          title: "Manage International Finances",
          content: "Strategies for handling finances across countries:",
          list: [
            "Maintain your German bank account for ongoing commitments",
            "Set up international transfer methods (bank wire, TransferWise, etc.)",
            "Understand exchange rates and transfer fees",
            "Consider tax implications for investments in both countries",
            "Explore multi-currency accounts if needed",
            "Update address details with German financial institutions",
            "Set up direct debits for regular payments in both countries"
          ]
        },
        {
          title: "Understand Local Financial Practices",
          content: "Dubai has some unique financial customs:",
          list: [
            "Post-dated cheques are commonly used for rent payments",
            "Bounced cheques can have serious legal consequences",
            "Credit cards are widely used and often offer significant benefits",
            "Salary transfer is typically required for loans and credit cards",
            "Islamic banking options are available with specific terms",
            "VAT is currently 5% on most goods and services",
            "No wealth or capital gains taxes in UAE"
          ]
        }
      ],
      tips: [
        "Maintain a good credit history in UAE for future financing needs",
        "Keep funds in both currencies based on your spending needs",
        "Use banking apps for easier management of accounts",
        "Consider offshore banking for certain investment needs",
        "Be aware of minimum balance requirements to avoid fees"
      ],
      resources: [
        {
          title: "Banking Setup Checklist",
          link: "/resources#banking-checklist",
          type: "checklist"
        },
        {
          title: "International Money Transfer Guide",
          link: "/resources#transfer-guide",
          type: "checklist"
        }
      ]
    },
    culture: {
      title: "Adapting to Dubai's Culture and Lifestyle",
      intro: "Understanding and respecting Dubai's cultural norms while finding your own community will help you adapt quickly and enjoy all that this dynamic city has to offer.",
      steps: [
        {
          title: "Understand Local Customs and Etiquette",
          content: "Important cultural aspects to be aware of:",
          list: [
            "Dress modestly in public places, especially religious and government buildings",
            "Public displays of affection should be limited",
            "Ramadan observances require special consideration (no eating/drinking in public during fasting hours)",
            "Alcohol consumption is allowed in licensed venues and with a personal license",
            "Photography restrictions exist for certain government buildings",
            "Right hand is preferred for eating, handshakes, and giving items",
            "Ask permission before photographing locals, especially women"
          ]
        },
        {
          title: "Find Your Community",
          content: "Connect with others to build your social network:",
          list: [
            "Join the German Society in the UAE and German Business Council",
            "Attend events at the Goethe-Institut Dubai",
            "Connect with German-speaking groups on Facebook and Meetup",
            "Participate in expat networking events and clubs",
            "Join sports clubs, fitness centers, or special interest groups",
            "Become part of your residential community through neighborhood events",
            "Volunteer with charitable organizations"
          ]
        },
        {
          title: "Navigate Daily Life",
          content: "Practical aspects of Dubai living:",
          list: [
            "Working hours typically Sunday-Thursday with Friday-Saturday weekend",
            "Summer months (June-September) are extremely hot—plan indoor activities",
            "Winter months (October-May) offer perfect weather for outdoor activities",
            "Transportation options include Metro, taxis, ride-sharing, and buses",
            "Food delivery is widely available and convenient",
            "Shopping malls are social and recreational hubs beyond just shopping",
            "Many services can be accessed through government apps"
          ]
        },
        {
          title: "Maintain Connection with Home",
          content: "Stay connected with Germany:",
          list: [
            "Set up reliable internet for video calls with family and friends",
            "Subscribe to German TV streaming services (many work with VPN)",
            "Join German cultural events in Dubai",
            "Find German food products in specialized stores",
            "Plan regular visits home, especially during extreme summer heat",
            "Stay informed on German news and developments",
            "Maintain important German memberships and subscriptions"
          ]
        }
      ],
      tips: [
        "Be open to cultural differences and approach them with respect",
        "Learn a few Arabic phrases as a sign of respect for the local culture",
        "Avoid discussing sensitive political topics in public",
        "Use the cooler months to explore outdoor attractions and activities",
        "Consider a desert safari to experience traditional Bedouin culture"
      ],
      resources: [
        {
          title: "Cultural Adaptation Guide",
          link: "/resources#cultural-guide",
          type: "checklist"
        },
        {
          title: "German Community Directory",
          link: "/resources#german-community",
          type: "checklist"
        }
      ]
    }
  };

  const currentTab = tabContent[activeTab as keyof typeof tabContent];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1468581264429-2548ef9eb732?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Dubai cityscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="section-container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="mb-6 animate-fade-in">Step-by-Step Guide to Moving to Dubai</h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Follow our comprehensive guide to navigate every aspect of relocating from Germany to Dubai, from visas to housing and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-16 z-40 bg-white border-b border-dubai-dark-sand/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-1 overflow-x-auto">
          <div className="flex min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm md:text-base font-medium flex items-center whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "text-dubai-gold border-b-2 border-dubai-gold"
                    : "text-gray-600 hover:text-dubai-gold"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 gradient-text">{currentTab.title}</h2>
            <p className="text-gray-600 mb-12 text-lg">{currentTab.intro}</p>
            
            <div className="space-y-12">
              {currentTab.steps.map((step, index) => (
                <div key={index} className="bg-dubai-sand/30 rounded-lg p-8">
                  <div className="flex items-start">
                    <div className="bg-dubai-gold text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                      <p className="text-gray-700 mb-4">{step.content}</p>
                      <ul className="space-y-2">
                        {step.list.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="h-5 w-5 text-dubai-gold mr-3 mt-1 shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              {/* Tips Section */}
              <div className="bg-white border border-dubai-dark-sand/30 rounded-lg p-8">
                <div className="flex items-start">
                  <Info className="h-6 w-6 text-dubai-gold mr-4 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Pro Tips</h3>
                    <ul className="space-y-2">
                      {currentTab.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-dubai-gold mr-3 mt-1 shrink-0" />
                          <span className="text-gray-600">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Resources Section */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Helpful Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentTab.resources.map((resource, idx) => (
                    <a
                      key={idx}
                      href={resource.link}
                      target={resource.type === "external" ? "_blank" : "_self"}
                      rel={resource.type === "external" ? "noopener noreferrer" : ""}
                      className="flex items-center p-4 border border-dubai-dark-sand/30 rounded-lg hover:bg-dubai-sand/20 transition-colors"
                    >
                      {resource.type === "checklist" ? (
                        <FileDown className="h-5 w-5 text-dubai-gold mr-3 shrink-0" />
                      ) : (
                        <ExternalLink className="h-5 w-5 text-dubai-gold mr-3 shrink-0" />
                      )}
                      <span className="text-gray-700">{resource.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-dubai-dark-sand/10">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Need More Detailed Guidance?</h2>
            <p className="text-gray-600 mb-8">
              This guide provides an overview of the relocation process, but every situation is unique. 
              Explore our detailed resources or get personalized assistance with your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/resources"
                className="px-6 py-3 rounded-md text-white gold-gradient-bg hover:opacity-90 transition-opacity font-medium flex items-center justify-center"
              >
                Access Detailed Resources <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/consulting"
                className="px-6 py-3 rounded-md border border-dubai-dark-sand text-gray-700 hover:bg-dubai-dark-sand/10 transition-colors font-medium flex items-center justify-center"
              >
                Get Personalized Consulting
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StepByStepGuide;
