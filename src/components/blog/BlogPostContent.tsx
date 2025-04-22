
import React from 'react';
import { User } from 'lucide-react';
import type { BlogPost } from '@/types/blog';
import BlogPostNavigation from './BlogPostNavigation';

interface BlogPostContentProps {
  post: BlogPost;
  prevPost: BlogPost | null;
  nextPost: BlogPost | null;
}

const BlogPostContent = ({ post, prevPost, nextPost }: BlogPostContentProps) => {
  return (
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

      <BlogPostNavigation prevPost={prevPost} nextPost={nextPost} />
    </div>
  );
};

export default BlogPostContent;
