
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Calendar, User, Clock, Tag } from 'lucide-react';
import NewsletterSignup from '@/components/NewsletterSignup';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Parse query parameters for category filter
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [location.search]);

  const categories = [
    { id: 'all', name: 'Alle Artikel' },
    { id: 'visa', name: 'Visum & Rechtliches' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'housing', name: 'Wohnen' },
    { id: 'business', name: 'Business' },
    { id: 'education', name: 'Bildung' }
  ];

  // Handle category change and update URL
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    
    if (categoryId === 'all') {
      navigate('/blog');
    } else {
      navigate(`/blog?category=${categoryId}`);
    }
  };

  const filteredPosts = blogPosts
    .filter(post => activeCategory === 'all' || post.category === activeCategory)
    .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                  post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Dubai Stadtbild" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="section-container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="mb-6 animate-fade-in">Der Dubai Auswanderungs-Blog</h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Experten-Einblicke, praktische Tipps und Erfolgsgeschichten, die Ihre Reise von Deutschland nach Dubai begleiten.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-dubai-dark-sand/30">
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Artikel durchsuchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full md:w-80 pl-10 pr-4 py-2 border border-dubai-dark-sand rounded-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-dubai-gold text-brand-light-gold hover:bg-dubai-gold/90"
                      : "bg-dubai-sand text-gray-700 hover:bg-dubai-dark-sand/30"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="section-container">
            <h2 className="text-3xl font-bold mb-12">Empfohlene Artikel</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg">
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-dubai-gold text-white px-3 py-1 rounded-full text-xs font-medium">
                      Empfohlen
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4 text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <User size={14} className="mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Tag size={14} className="text-dubai-gold mr-2" />
                        <span className="text-sm text-gray-500 capitalize">
                          {post.category === 'visa' ? 'Visum & Rechtliches' : 
                           post.category === 'housing' ? 'Wohnen' : 
                           post.category === 'business' ? 'Business' : 
                           post.category === 'education' ? 'Bildung' : 
                           post.category === 'lifestyle' ? 'Lifestyle' : 
                           post.category}
                        </span>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="text-dubai-gold font-medium flex items-center hover:underline"
                      >
                        Weiterlesen <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-16 bg-dubai-dark-sand/10">
        <div className="section-container">
          <h2 className="text-3xl font-bold mb-12">Neueste Artikel</h2>
          
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-dubai-dark-sand/10 transition-transform hover:shadow-md">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-white px-3 py-1 rounded-full bg-dubai-gold capitalize">
                        {post.category === 'visa' ? 'Visum & Rechtliches' : 
                         post.category === 'housing' ? 'Wohnen' : 
                         post.category === 'business' ? 'Business' : 
                         post.category === 'education' ? 'Bildung' : 
                         post.category === 'lifestyle' ? 'Lifestyle' : 
                         post.category}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock size={12} className="mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex justify-between items-center text-sm">
                      <div className="flex items-center text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="text-dubai-gold font-medium flex items-center hover:underline"
                      >
                        Weiterlesen <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">Keine Artikel gefunden, die Ihren Suchkriterien entsprechen.</p>
              <button 
                onClick={() => {setSearchTerm(''); handleCategoryChange('all');}} 
                className="mt-4 text-dubai-gold hover:underline"
              >
                Filter zurücksetzen
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Sign Up */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Verpassen Sie keinen Artikel</h2>
            <p className="text-gray-600">
              Abonnieren Sie unseren Newsletter, um die neuesten Einblicke und Tipps zur Auswanderung nach Dubai direkt in Ihren Posteingang zu erhalten.
            </p>
          </div>
          <NewsletterSignup className="max-w-xl mx-auto" />
        </div>
      </section>
    </>
  );
};

export default Blog;
