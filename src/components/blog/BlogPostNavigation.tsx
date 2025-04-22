
import React from 'react';
import type { BlogPost } from '@/types/blog';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface BlogPostNavigationProps {
  prevPost: BlogPost | null;
  nextPost: BlogPost | null;
}

const BlogPostNavigation = ({ prevPost, nextPost }: BlogPostNavigationProps) => {
  return (
    <div className="mt-12">
      <Pagination>
        <PaginationContent className="flex justify-between items-center w-full">
          {prevPost && (
            <PaginationItem>
              <PaginationPrevious 
                href={`/blog/${prevPost.id}`} 
                className="mr-auto"
              >
                Vorheriger Artikel
              </PaginationPrevious>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink 
              href="/blog" 
              className="mx-4"
            >
              Artikelübersicht
            </PaginationLink>
          </PaginationItem>

          {nextPost && (
            <PaginationItem>
              <PaginationNext 
                href={`/blog/${nextPost.id}`} 
                className="ml-auto"
              >
                Nächster Artikel
              </PaginationNext>
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default BlogPostNavigation;
