
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const Legal = () => {
  const { page } = useParams<{ page: string }>();
  
  const legalContent = {
    'privacy-policy': {
      title: 'Privacy Policy',
      content: `
        <h2>1. Introduction</h2>
        <p>At dubai-auswandern.com, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
        
        <h2>2. The Data We Collect About You</h2>
        <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you, including:</p>
        <ul>
          <li>Identity Data: including first name, last name, username or similar identifier</li>
          <li>Contact Data: including email address and telephone numbers</li>
          <li>Technical Data: including internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform</li>
          <li>Usage Data: information about how you use our website and services</li>
        </ul>
        
        <h2>3. How We Use Your Personal Data</h2>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul>
          <li>Where we need to perform the contract we are about to enter into or have entered into with you</li>
          <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests</li>
          <li>Where we need to comply with a legal or regulatory obligation</li>
        </ul>
        
        <h2>4. Cookie Policy</h2>
        <p>Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.</p>
        
        <h2>5. Data Security</h2>
        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
        
        <h2>6. Your Legal Rights</h2>
        <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
        <ul>
          <li>Request access to your personal data</li>
          <li>Request correction of your personal data</li>
          <li>Request erasure of your personal data</li>
          <li>Object to processing of your personal data</li>
          <li>Request restriction of processing your personal data</li>
          <li>Request transfer of your personal data</li>
          <li>Right to withdraw consent</li>
        </ul>
        
        <h2>7. Contact Us</h2>
        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: info@dubai-auswandern.com</p>
      `
    },
    'terms-of-service': {
      title: 'Terms of Service',
      content: `
        <h2>1. Introduction</h2>
        <p>These terms and conditions govern your use of dubai-auswandern.com; by using our website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of them, you must not use our website.</p>
        
        <h2>2. License to Use Website</h2>
        <p>Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.</p>
        <p>You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.</p>
        
        <h2>3. Acceptable Use</h2>
        <p>You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.</p>
        <p>You must not use our website in any way that is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.</p>
        
        <h2>4. Limitations of Liability</h2>
        <p>We will not be liable to you in respect of any losses arising out of any event or events beyond our reasonable control.</p>
        <p>We will not be liable to you in respect of any business losses, including (without limitation) loss of or damage to profits, income, revenue, use, production, anticipated savings, business, contracts, commercial opportunities or goodwill.</p>
        
        <h2>5. Variation</h2>
        <p>We may revise these terms and conditions from time-to-time. Revised terms and conditions will apply to the use of our website from the date of their publication on our website.</p>
        
        <h2>6. Entire Agreement</h2>
        <p>These terms and conditions, together with our privacy policy, constitute the entire agreement between you and us in relation to your use of our website, and supersede all previous agreements in respect of your use of this website.</p>
        
        <h2>7. Law and Jurisdiction</h2>
        <p>These terms and conditions will be governed by and construed in accordance with German law, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Germany.</p>
      `
    },
    'imprint': {
      title: 'Imprint',
      content: `
        <h2>Information according to § 5 TMG</h2>
        <p>
          dubai-auswandern.com<br />
          Sample Street 123<br />
          10115 Berlin<br />
          Germany
        </p>
        
        <h2>Contact</h2>
        <p>
          Phone: +49 123 456789<br />
          Email: info@dubai-auswandern.com
        </p>
        
        <h2>Responsible for content according to § 55 Abs. 2 RStV</h2>
        <p>
          Jane Doe<br />
          Sample Street 123<br />
          10115 Berlin<br />
          Germany
        </p>
        
        <h2>EU Dispute Resolution</h2>
        <p>The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a></p>
        <p>We are not willing or obligated to participate in dispute resolution proceedings before a consumer arbitration board.</p>
        
        <h2>Liability for Content</h2>
        <p>As a service provider, we are responsible for our own content on these pages according to § 7 paragraph 1 TMG under the general laws. According to §§ 8 to 10 TMG, however, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.</p>
        
        <h2>Liability for Links</h2>
        <p>Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages.</p>
        
        <h2>Copyright</h2>
        <p>The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator.</p>
      `
    }
  };

  const currentPage = page && page in legalContent 
    ? legalContent[page as keyof typeof legalContent] 
    : { title: 'Page Not Found', content: 'The requested legal page was not found.' };

  return (
    <section className="py-20 mt-16">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center text-dubai-gold hover:underline mb-8">
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
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
