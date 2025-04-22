
import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '@/types/blog';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlogPostSidebarProps {
  relatedPosts: BlogPost[];
}

const BlogPostSidebar = ({ relatedPosts }: BlogPostSidebarProps) => {
  return (
    <div className="lg:col-span-1">
      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Kategorien</h3>
        <div className="space-y-2">
          <Link to="/blog?category=visa" className="block p-3 rounded-md bg-dubai-sand/20 hover:bg-dubai-sand/40 transition-colors">
            Visum & Rechtliches
          </Link>
          <Link to="/blog?category=housing" className="block p-3 rounded-md bg-dubai-sand/20 hover:bg-dubai-sand/40 transition-colors">
            Wohnen
          </Link>
          <Link to="/blog?category=business" className="block p-3 rounded-md bg-dubai-sand/20 hover:bg-dubai-sand/40 transition-colors">
            Business
          </Link>
          <Link to="/blog?category=education" className="block p-3 rounded-md bg-dubai-sand/20 hover:bg-dubai-sand/40 transition-colors">
            Bildung
          </Link>
          <Link to="/blog?category=lifestyle" className="block p-3 rounded-md bg-dubai-sand/20 hover:bg-dubai-sand/40 transition-colors">
            Lifestyle
          </Link>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Ähnliche Artikel</h3>
          <div className="space-y-4">
            {relatedPosts.map((relatedPost) => (
              <Card key={relatedPost.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-36 overflow-hidden">
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2 line-clamp-2">{relatedPost.title}</h4>
                  <Link 
                    to={`/blog/${relatedPost.id}`} 
                    className="text-dubai-gold text-sm hover:underline"
                  >
                    Artikel lesen
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="bg-dubai-gold/90 text-white p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Persönliche Beratung</h3>
        <p className="mb-4">
          Haben Sie spezifische Fragen zu Ihrer Auswanderung nach Dubai? Unsere Experten stehen Ihnen zur Verfügung.
        </p>
        <Button 
          className="w-full bg-white text-dubai-gold hover:bg-white/90" 
          asChild
        >
          <Link to="/beratung">Beratungstermin vereinbaren</Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogPostSidebar;
