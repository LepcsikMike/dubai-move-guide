
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const Legal = () => {
  const { page } = useParams<{ page: string }>();
  
  const legalContent = {
    'datenschutz': {
      title: 'Datenschutzerklärung',
      content: `
        <h2>1. Einleitung</h2>
        <p>Bei dubai-auswandern.com respektieren wir Ihre Privatsphäre und sind bestrebt, Ihre persönlichen Daten zu schützen. Diese Datenschutzerklärung informiert Sie darüber, wie wir mit Ihren persönlichen Daten umgehen, wenn Sie unsere Website besuchen, und informiert Sie über Ihre Datenschutzrechte und wie das Gesetz Sie schützt.</p>
        
        <h2>2. Die Daten, die wir über Sie sammeln</h2>
        <p>Personenbezogene Daten oder persönliche Informationen bezeichnen alle Informationen über eine Person, durch die diese Person identifiziert werden kann. Wir können verschiedene Arten von personenbezogenen Daten über Sie sammeln, verwenden, speichern und übertragen, darunter:</p>
        <ul>
          <li>Identitätsdaten: einschließlich Vorname, Nachname, Benutzername oder ähnliche Kennungen</li>
          <li>Kontaktdaten: einschließlich E-Mail-Adresse und Telefonnummern</li>
          <li>Technische Daten: einschließlich Internet-Protokoll (IP)-Adresse, Browser-Typ und -Version, Zeitzoneneinstellung und Standort, Browser-Plugin-Typen und -Versionen, Betriebssystem und Plattform</li>
          <li>Nutzungsdaten: Informationen darüber, wie Sie unsere Website und Dienste nutzen</li>
        </ul>
        
        <h2>3. Wie wir Ihre personenbezogenen Daten verwenden</h2>
        <p>Wir werden Ihre personenbezogenen Daten nur verwenden, wenn uns dies gesetzlich erlaubt ist. Am häufigsten werden wir Ihre personenbezogenen Daten unter folgenden Umständen verwenden:</p>
        <ul>
          <li>Wenn wir den Vertrag erfüllen müssen, den wir mit Ihnen abschließen werden oder abgeschlossen haben</li>
          <li>Wenn es für unsere berechtigten Interessen notwendig ist und Ihre Interessen und Grundrechte diese Interessen nicht überwiegen</li>
          <li>Wenn wir einer rechtlichen oder behördlichen Verpflichtung nachkommen müssen</li>
        </ul>
        
        <h2>4. Cookie-Richtlinie</h2>
        <p>Unsere Website verwendet Cookies, um Sie von anderen Nutzern unserer Website zu unterscheiden. Dies hilft uns, Ihnen ein gutes Erlebnis zu bieten, wenn Sie unsere Website durchsuchen, und ermöglicht uns auch, unsere Website zu verbessern.</p>
        
        <h2>5. Datensicherheit</h2>
        <p>Wir haben angemessene Sicherheitsmaßnahmen ergriffen, um zu verhindern, dass Ihre personenbezogenen Daten versehentlich verloren gehen, verwendet oder auf unbefugte Weise zugegriffen, verändert oder offengelegt werden.</p>
        
        <h2>6. Ihre gesetzlichen Rechte</h2>
        <p>Unter bestimmten Umständen haben Sie nach den Datenschutzgesetzen Rechte in Bezug auf Ihre personenbezogenen Daten, einschließlich des Rechts auf:</p>
        <ul>
          <li>Anforderung des Zugangs zu Ihren personenbezogenen Daten</li>
          <li>Anforderung der Berichtigung Ihrer personenbezogenen Daten</li>
          <li>Anforderung der Löschung Ihrer personenbezogenen Daten</li>
          <li>Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten</li>
          <li>Anforderung der Einschränkung der Verarbeitung Ihrer personenbezogenen Daten</li>
          <li>Anforderung der Übertragung Ihrer personenbezogenen Daten</li>
          <li>Recht auf Widerruf der Einwilligung</li>
        </ul>
        
        <h2>7. Kontaktieren Sie uns</h2>
        <p>Wenn Sie Fragen zu dieser Datenschutzerklärung oder unseren Datenschutzpraktiken haben, kontaktieren Sie uns bitte unter: info@dubai-auswandern.com</p>
      `
    },
    'nutzungsbedingungen': {
      title: 'Nutzungsbedingungen',
      content: `
        <h2>1. Einleitung</h2>
        <p>Diese Nutzungsbedingungen regeln Ihre Nutzung von dubai-auswandern.com; durch die Nutzung unserer Website akzeptieren Sie diese Bedingungen vollständig. Wenn Sie mit diesen Bedingungen oder einem Teil davon nicht einverstanden sind, dürfen Sie unsere Website nicht nutzen.</p>
        
        <h2>2. Lizenz zur Nutzung der Website</h2>
        <p>Sofern nicht anders angegeben, besitzen wir oder unsere Lizenzgeber die geistigen Eigentumsrechte an der Website und dem Material auf der Website. Vorbehaltlich der unten stehenden Lizenz sind alle diese geistigen Eigentumsrechte vorbehalten.</p>
        <p>Sie dürfen Seiten von unserer Website für Ihren eigenen persönlichen Gebrauch ansehen, herunterladen (nur für Cachingzwecke) und drucken, vorbehaltlich der unten genannten Einschränkungen und an anderer Stelle in diesen Bedingungen.</p>
        
        <h2>3. Akzeptable Nutzung</h2>
        <p>Sie dürfen unsere Website nicht in einer Weise nutzen, die Schäden an der Website verursacht oder verursachen könnte oder die Verfügbarkeit oder Zugänglichkeit der Website beeinträchtigt.</p>
        <p>Sie dürfen unsere Website nicht in illegaler, rechtswidriger, betrügerischer oder schädlicher Weise oder in Verbindung mit illegalen, rechtswidrigen, betrügerischen oder schädlichen Zwecken oder Aktivitäten nutzen.</p>
        
        <h2>4. Haftungsbeschränkungen</h2>
        <p>Wir haften Ihnen gegenüber nicht für Verluste, die aus Ereignissen entstehen, die außerhalb unserer angemessenen Kontrolle liegen.</p>
        <p>Wir haften Ihnen gegenüber nicht für geschäftliche Verluste, einschließlich (ohne Einschränkung) Verlust oder Beschädigung von Gewinnen, Einkommen, Einnahmen, Nutzung, Produktion, erwarteten Einsparungen, Geschäften, Verträgen, kommerziellen Chancen oder Goodwill.</p>
        
        <h2>5. Änderungen</h2>
        <p>Wir können diese Bedingungen von Zeit zu Zeit überarbeiten. Überarbeitete Bedingungen gelten für die Nutzung unserer Website ab dem Datum ihrer Veröffentlichung auf unserer Website.</p>
        
        <h2>6. Gesamte Vereinbarung</h2>
        <p>Diese Bedingungen, zusammen mit unserer Datenschutzerklärung, stellen die gesamte Vereinbarung zwischen Ihnen und uns in Bezug auf Ihre Nutzung unserer Website dar und ersetzen alle früheren Vereinbarungen in Bezug auf Ihre Nutzung dieser Website.</p>
        
        <h2>7. Recht und Gerichtsstand</h2>
        <p>Diese Bedingungen werden nach deutschem Recht ausgelegt und durchgesetzt, und alle Streitigkeiten im Zusammenhang mit diesen Bedingungen unterliegen der ausschließlichen Zuständigkeit der Gerichte in Deutschland.</p>
      `
    },
    'impressum': {
      title: 'Impressum',
      content: `
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          dubai-auswandern.com<br />
          Musterstraße 123<br />
          10115 Berlin<br />
          Deutschland
        </p>
        
        <h2>Kontakt</h2>
        <p>
          Telefon: +49 123 456789<br />
          E-Mail: info@dubai-auswandern.com
        </p>
        
        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          Jane Doe<br />
          Musterstraße 123<br />
          10115 Berlin<br />
          Deutschland
        </p>
        
        <h2>EU-Streitschlichtung</h2>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a></p>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        
        <h2>Haftung für Inhalte</h2>
        <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
        
        <h2>Haftung für Links</h2>
        <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
        
        <h2>Urheberrecht</h2>
        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
      `
    }
  };

  const currentPage = page && page in legalContent 
    ? legalContent[page as keyof typeof legalContent] 
    : { title: 'Seite nicht gefunden', content: 'Die angeforderte rechtliche Seite wurde nicht gefunden.' };

  return (
    <section className="py-20 mt-16">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center text-dubai-gold hover:underline mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Zurück zur Startseite
          </Link>
          
          <h1 className="text-3xl font-bold mb-8">{currentPage.title}</h1>
          
          <div 
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: currentPage.content }}
          />
        </div>
      </div>
    </section>
  );
};

export default Legal;
