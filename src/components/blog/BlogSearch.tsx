
import React from 'react';
import { Search } from 'lucide-react';

interface BlogSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeCategory: string;
  handleCategoryChange: (categoryId: string) => void;
}

const BlogSearch = ({ searchTerm, setSearchTerm, activeCategory, handleCategoryChange }: BlogSearchProps) => {
  const categories = [
    { id: 'all', name: 'Alle Artikel' },
    { id: 'visa', name: 'Visum & Rechtliches' },
    { id: 'lifestyle', name: 'Lifestyle' },
    { id: 'housing', name: 'Wohnen' },
    { id: 'business', name: 'Business' },
    { id: 'education', name: 'Bildung' }
  ];

  return (
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
  );
};

export default BlogSearch;
