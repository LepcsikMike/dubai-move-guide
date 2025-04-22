
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Tag } from 'lucide-react';
import type { BlogPost } from '@/types/blog';

interface BlogPostHeaderProps {
  post: BlogPost;
}

const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="section-container relative z-10 text-white">
        <div className="max-w-3xl">
          <Link to="/blog" className="inline-flex items-center text-dubai-gold hover:underline mb-4">
            <ArrowLeft size={16} className="mr-2" />
            Zurück zur Übersicht
          </Link>
          <h1 className="mb-6 animate-fade-in">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-8">
            <span className="flex items-center">
              <Calendar size={14} className="mr-1" />
              {post.date}
            </span>
            <span className="flex items-center">
              <User size={14} className="mr-1" />
              {post.author}
            </span>
            <span className="flex items-center">
              <Clock size={14} className="mr-1" />
              {post.readTime}
            </span>
            <span className="flex items-center bg-dubai-gold/90 text-white px-3 py-1 rounded-full text-xs">
              <Tag size={12} className="mr-1" />
              {post.category === 'visa' ? 'Visum & Rechtliches' : 
               post.category === 'housing' ? 'Wohnen' : 
               post.category === 'business' ? 'Business' : 
               post.category === 'education' ? 'Bildung' : 
               post.category === 'lifestyle' ? 'Lifestyle' : 
               post.category}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostHeader;
