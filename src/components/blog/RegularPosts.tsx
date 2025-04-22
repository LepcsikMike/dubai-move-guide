
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/types/blog';

interface RegularPostsProps {
  posts: BlogPost[];
  onResetFilters: () => void;
}

const RegularPosts = ({ posts, onResetFilters }: RegularPostsProps) => {
  return (
    <section className="py-16 bg-dubai-dark-sand/10">
      <div className="section-container">
        <h2 className="text-3xl font-bold mb-12">Neueste Artikel</h2>
        
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
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
                      {getCategoryName(post.category)}
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
              onClick={onResetFilters} 
              className="mt-4 text-dubai-gold hover:underline"
            >
              Filter zurücksetzen
            </button>
          </div>
        )}
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

export default RegularPosts;
