
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Calendar, User, Clock, Tag } from 'lucide-react';
import NewsletterSignup from '@/components/NewsletterSignup';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'visa', name: 'Visa & Legal' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'housing', name: 'Housing' },
    { id: 'business', name: 'Business' },
    { id: 'education', name: 'Education' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Dubai's Golden Visa for Germans",
      excerpt: "Learn how Germans can qualify for Dubai's prestigious Golden Visa, offering 5-10 years of residency with significant benefits for investors, entrepreneurs, and specialists.",
      image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      date: "April 10, 2025",
      author: "Michael Weber",
      readTime: "8 min read",
      category: "visa",
      featured: true
    },
    {
      id: 2,
      title: "Top 10 Neighborhoods for German Expats in Dubai",
      excerpt: "Discover the most popular residential areas for German expatriates in Dubai, considering factors like community, amenities, schools, and lifestyle preferences.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      date: "April 5, 2025",
      author: "Julia Schmidt",
      readTime: "10 min read",
      category: "housing",
      featured: true
    },
    {
      id: 3,
      title: "Tax Implications for Germans Living in Dubai",
      excerpt: "A comprehensive guide to navigating taxes as a German citizen living in Dubai, including residency status, German tax obligations, and maximizing tax benefits.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      date: "March 28, 2025",
      author: "Thomas Müller",
      readTime: "12 min read",
      category: "business",
      featured: false
    },
    {
      id: 4,
      title: "Navigating Dubai's Education System for Your Children",
      excerpt: "Everything German parents need to know about schooling options in Dubai, from German curriculum schools to international education pathways.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      date: "March 22, 2025",
      author: "Anna Becker",
      readTime: "9 min read",
      category: "education",
      featured: false
    },
    {
      id: 5,
      title: "German Entrepreneurs: Starting Your Business in Dubai",
      excerpt: "Step-by-step guide for German entrepreneurs looking to establish a business in Dubai, from free zones to mainland options and everything in between.",
      image: "https://images.unsplash.com/photo-1664575599736-c5197c684153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      date: "March 15, 2025",
      author: "Markus Schneider",
      readTime: "14 min read",
      category: "business",
      featured: false
    },
    {
      id: 6,
      title: "Cultural Adaptation: From Germany to Dubai",
      excerpt: "Insights and advice on navigating cultural differences and building a fulfilling social life as a German expatriate in Dubai.",
      image: "https://images.unsplash.com/photo-1583103559464-61c3abbf600f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      date: "March 8, 2025",
      author: "Sophie Wagner",
      readTime: "7 min read",
      category: "lifestyle",
      featured: false
    },
    {
      id: 7,
      title: "Health Insurance Options for Germans in Dubai",
      excerpt: "Compare health insurance plans and understand the UAE healthcare system to ensure you and your family have the right medical coverage in Dubai.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      date: "March 1, 2025",
      author: "Dr. Klaus Fischer",
      readTime: "11 min read",
      category: "lifestyle",
      featured: false
    },
    {
      id: 8,
      title: "Bringing Your Pet to Dubai: A German Guide",
      excerpt: "Everything you need to know about relocating with your pets from Germany to Dubai, including requirements, procedures, and finding pet-friendly accommodations.",
      image: "https://images.unsplash.com/photo-1583511655826-05700442b0b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      date: "February 22, 2025",
      author: "Lisa Hoffmann",
      readTime: "9 min read",
      category: "lifestyle",
      featured: false
    }
  ];

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
            src="https://images.unsplash.com/photo-1572446149317-703a57b5254c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="Dubai cityscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="section-container relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="mb-6 animate-fade-in">The Dubai Relocation Blog</h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Expert insights, practical tips, and success stories to guide your journey from Germany to Dubai.
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
                  placeholder="Search articles..."
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
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-dubai-gold text-white"
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
            <h2 className="text-3xl font-bold mb-12">Featured Articles</h2>
            
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
                      Featured
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
                        <span className="text-sm text-gray-500 capitalize">{post.category}</span>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="text-dubai-gold font-medium flex items-center hover:underline"
                      >
                        Read More <ArrowRight size={16} className="ml-1" />
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
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
          
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
                        {post.category}
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
                        Read More <ArrowRight size={14} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No articles found matching your search criteria.</p>
              <button 
                onClick={() => {setSearchTerm(''); setActiveCategory('all');}} 
                className="mt-4 text-dubai-gold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Sign Up */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Never Miss an Article</h2>
            <p className="text-gray-600">
              Subscribe to our newsletter to get the latest insights and tips about relocating to Dubai delivered to your inbox.
            </p>
          </div>
          <NewsletterSignup className="max-w-xl mx-auto" />
        </div>
      </section>
    </>
  );
};

export default Blog;
