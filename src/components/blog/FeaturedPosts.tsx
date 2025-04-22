
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, Tag, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/types/blog';

interface FeaturedPostsProps {
  posts: BlogPost[];
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  if (posts.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-12">Empfohlene Artikel</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {posts.map((post) => (
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
                      {getCategoryName(post.category)}
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
  );
};

const getCategoryName = (category: string) => {
  switch (category) {
    case 'visa': return 'Visum & Rechtliches';
    case 'housing': return 'Wohnen';
    case 'business': return 'Business';
    case 'education': return 'Bildung';
    case 'lifestyle': return 'Lifestyle';
    default: return category;
  }
};

export default FeaturedPosts;
