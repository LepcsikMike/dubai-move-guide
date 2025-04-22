
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';
import type { BlogPost as BlogPostType } from '@/types/blog';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import BlogPostSidebar from '@/components/blog/BlogPostSidebar';
import NewsletterSignup from '@/components/NewsletterSignup';

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const [prevPost, setPrevPost] = useState<BlogPostType | null>(null);
  const [nextPost, setNextPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    if (!postId) {
      navigate('/blog');
      return;
    }

    const currentPost = blogPosts.find(p => p.id === parseInt(postId));
    
    if (!currentPost) {
      navigate('/404');
      return;
    }

    setPost(currentPost);

    // Find related posts in the same category
    const related = blogPosts
      .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
      .slice(0, 3);
    setRelatedPosts(related);

    // Find previous and next posts
    const currentIndex = blogPosts.findIndex(p => p.id === currentPost.id);
    setPrevPost(currentIndex > 0 ? blogPosts[currentIndex - 1] : null);
    setNextPost(currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null);

    // Log view for analytics
    console.log(`Blog post viewed: ${currentPost.title}`);
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [postId, navigate]);

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center">Artikel wird geladen...</div>;
  }

  return (
    <>
      <BlogPostHeader post={post} />
      
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <BlogPostContent post={post} prevPost={prevPost} nextPost={nextPost} />
            <BlogPostSidebar relatedPosts={relatedPosts} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-dubai-dark-sand/10">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Bleiben Sie informiert</h2>
            <p className="text-gray-600">
              Abonnieren Sie unseren Newsletter und erhalten Sie regelmäßig Expertentipps und aktuelle Informationen zur Auswanderung nach Dubai.
            </p>
          </div>
          <NewsletterSignup className="max-w-xl mx-auto" />
        </div>
      </section>
    </>
  );
};

export default BlogPost;
