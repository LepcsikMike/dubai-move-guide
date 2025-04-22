
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import BlogHero from '@/components/blog/BlogHero';
import BlogSearch from '@/components/blog/BlogSearch';
import FeaturedPosts from '@/components/blog/FeaturedPosts';
import RegularPosts from '@/components/blog/RegularPosts';
import NewsletterSection from '@/components/blog/NewsletterSection';
import type { BlogPost } from '@/types/blog';

const Blog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [location.search]);

  const handleCategoryChange = (categoryId: string) => {
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

  const handleResetFilters = () => {
    setSearchTerm('');
    handleCategoryChange('all');
  };

  return (
    <>
      <BlogHero />
      <BlogSearch 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeCategory={activeCategory}
        handleCategoryChange={handleCategoryChange}
      />
      <FeaturedPosts posts={featuredPosts} />
      <RegularPosts 
        posts={regularPosts}
        onResetFilters={handleResetFilters}
      />
      <NewsletterSection />
    </>
  );
};

export default Blog;
