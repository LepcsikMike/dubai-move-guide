
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Tag } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import NewsletterSignup from '@/components/NewsletterSignup';

// Import the blog posts data from a new file we'll create
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

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

    // Log view for analytics
    console.log(`Blog post viewed: ${currentPost.title}`);
    
    // Scroll to top
    window.scrollTo(0, 0);
  }, [postId, navigate]);

  if (!post) {
    return <div className="min-h-screen flex items-center justify-center">Artikel wird geladen...</div>;
  }

  // Find the index of the current post
  const currentIndex = blogPosts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <>
      {/* Hero Section */}
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

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl font-medium mb-6">{post.excerpt}</p>
                
                <h2>Einleitung</h2>
                <p>
                  Als Deutscher, der eine Auswanderung nach Dubai in Betracht zieht, gibt es viele Aspekte zu beachten. 
                  {post.category === 'visa' && "Die Visumsbestimmungen und rechtlichen Rahmenbedingungen sind entscheidend für einen erfolgreichen Umzug."}
                  {post.category === 'housing' && "Die Wahl des richtigen Wohnortes kann erheblichen Einfluss auf Ihre allgemeine Lebensqualität haben."}
                  {post.category === 'business' && "Die Gründung eines Unternehmens in Dubai bietet zahlreiche Vorteile, aber auch einige Herausforderungen."}
                  {post.category === 'education' && "Die Bildungsmöglichkeiten für Ihre Kinder sind ein wichtiger Faktor bei der Entscheidung für Dubai."}
                  {post.category === 'lifestyle' && "Der Lebensstil in Dubai unterscheidet sich in vielen Aspekten von dem in Deutschland."}
                </p>

                <p>
                  In diesem umfassenden Leitfaden werden wir alle wichtigen Aspekte betrachten, die Sie bei 
                  {post.category === 'visa' && " der Beantragung des richtigen Visums für Ihren Aufenthalt in Dubai beachten sollten."}
                  {post.category === 'housing' && " der Wahl Ihres neuen Zuhauses in Dubai berücksichtigen sollten."}
                  {post.category === 'business' && " der Gründung und Führung eines erfolgreichen Unternehmens in Dubai beachten sollten."}
                  {post.category === 'education' && " der Auswahl der richtigen Bildungseinrichtung für Ihre Kinder in Dubai berücksichtigen sollten."}
                  {post.category === 'lifestyle' && " der Anpassung an den neuen Lebensstil in Dubai beachten sollten."}
                </p>
                
                <h2>Was Sie wissen müssen</h2>
                <p>
                  Dubai hat sich in den letzten Jahren zu einem beliebten Ziel für deutsche Auswanderer entwickelt. Die Stadt bietet eine 
                  {post.category === 'visa' && " Vielzahl von Visumoptionen, darunter Arbeitsvisa, Investorenvisa und das prestigeträchtige Golden Visa."}
                  {post.category === 'housing' && " Vielzahl an Wohnmöglichkeiten, von luxuriösen Apartmentkomplexen bis hin zu Villen in ruhigen Vororten."}
                  {post.category === 'business' && " dynamische Wirtschaftslandschaft mit zahlreichen Freizonen und Mainland-Optionen für Unternehmensgründungen."}
                  {post.category === 'education' && " Vielzahl von Bildungseinrichtungen, von deutschen Schulen bis zu internationalen Einrichtungen mit verschiedenen Lehrplänen."}
                  {post.category === 'lifestyle' && " Kombination aus westlichem Komfort und arabischer Kultur, die einen einzigartigen Lebensstil ermöglicht."}
                </p>

                <h2>Wichtige Überlegungen</h2>
                <ul>
                  {post.category === 'visa' && (
                    <>
                      <li>Die verschiedenen Arten von Visa und ihre Anforderungen</li>
                      <li>Dokumentation und Antragsverfahren</li>
                      <li>Kosten und Bearbeitungszeiten</li>
                      <li>Verlängerungsoptionen und langfristige Planung</li>
                    </>
                  )}
                  {post.category === 'housing' && (
                    <>
                      <li>Die beliebtesten Wohngegenden bei Deutschen</li>
                      <li>Miet- vs. Kaufoptionen</li>
                      <li>Preisspannen und versteckte Kosten</li>
                      <li>Nähe zu Schulen, Arbeit und Freizeitaktivitäten</li>
                    </>
                  )}
                  {post.category === 'business' && (
                    <>
                      <li>Freizonen vs. Mainland-Unternehmen</li>
                      <li>Rechtliche Strukturen und Eigentumsverhältnisse</li>
                      <li>Steuerliche Vorteile und Verpflichtungen</li>
                      <li>Geschäftskulturelle Unterschiede</li>
                    </>
                  )}
                  {post.category === 'education' && (
                    <>
                      <li>Deutsche Schulen und internationale Bildungseinrichtungen</li>
                      <li>Schulgebühren und zusätzliche Kosten</li>
                      <li>Anmeldeverfahren und Fristen</li>
                      <li>Lehrpläne und Abschlüsse</li>
                    </>
                  )}
                  {post.category === 'lifestyle' && (
                    <>
                      <li>Kulturelle Anpassung und lokale Sitten</li>
                      <li>Gesundheitsversorgung und Versicherung</li>
                      <li>Freizeitaktivitäten und soziale Netzwerke</li>
                      <li>Lebenshaltungskosten und Budgetplanung</li>
                    </>
                  )}
                </ul>

                <h2>Fazit</h2>
                <p>
                  {post.category === 'visa' && "Die Beantragung des richtigen Visums ist ein entscheidender Schritt für Ihren erfolgreichen Umzug nach Dubai. Mit der richtigen Vorbereitung und Unterstützung kann dieser Prozess jedoch reibungslos verlaufen."}
                  {post.category === 'housing' && "Die Wahl des richtigen Wohnorts in Dubai kann einen erheblichen Einfluss auf Ihre Lebensqualität haben. Nehmen Sie sich Zeit, verschiedene Gegenden zu erkunden, bevor Sie eine Entscheidung treffen."}
                  {post.category === 'business' && "Die Gründung eines Unternehmens in Dubai bietet zahlreiche Vorteile, erfordert jedoch auch sorgfältige Planung und ein Verständnis der lokalen Geschäftspraktiken."}
                  {post.category === 'education' && "Die Bildung Ihrer Kinder ist eine Investition in ihre Zukunft. Dubai bietet zahlreiche qualitativ hochwertige Optionen, die den Übergang für deutsche Familien erleichtern können."}
                  {post.category === 'lifestyle' && "Der Umzug nach Dubai bietet eine einzigartige Gelegenheit, einen neuen Lebensstil zu erleben. Mit der richtigen Einstellung und Vorbereitung kann dies eine bereichernde Erfahrung sein."}
                </p>

                <p>
                  Wenn Sie weitere Unterstützung bei Ihrer Auswanderung nach Dubai benötigen, zögern Sie nicht, unsere professionellen Beratungsdienste in Anspruch zu nehmen.
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-12 p-6 bg-dubai-dark-sand/10 rounded-lg">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-dubai-sand/50 flex items-center justify-center text-dubai-gold mr-4">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{post.author}</h3>
                    <p className="text-gray-600">Dubai-Experte & Berater</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  Seit über 5 Jahren unterstützt {post.author} deutsche Auswanderer bei ihrem Umzug nach Dubai. Mit umfassender Erfahrung und Marktkenntnissen hilft er Klienten, die Komplexität des Auswanderungsprozesses zu navigieren.
                </p>
              </div>

              {/* Post Navigation */}
              <div className="mt-12">
                <Pagination>
                  <PaginationContent>
                    {prevPost && (
                      <PaginationItem>
                        <PaginationPrevious href={`/blog/${prevPost.id}`} />
                      </PaginationItem>
                    )}

                    <PaginationItem>
                      <PaginationLink href="/blog">
                        Übersicht
                      </PaginationLink>
                    </PaginationItem>

                    {nextPost && (
                      <PaginationItem>
                        <PaginationNext href={`/blog/${nextPost.id}`} />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              </div>
            </div>

            {/* Sidebar */}
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
          </div>
        </div>
      </section>

      {/* Newsletter */}
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
