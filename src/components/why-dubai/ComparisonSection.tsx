
import React from 'react';

const ComparisonSection = () => {
  const lifestyleComparisons = [
    {
      category: 'Wetter',
      dubai: 'Ganzjährig Sonnenschein, milde Winter (20-25°C), heiße Sommer (38-42°C)',
      germany: 'Vier ausgeprägte Jahreszeiten, kalte Winter, milde Sommer, häufiger Niederschlag'
    },
    {
      category: 'Lebenshaltungskosten',
      dubai: 'Keine Einkommensteuer, höheres verfügbares Einkommen, höhere Wohnkosten in Premium-Gegenden',
      germany: 'Hohe Einkommensteuer (bis zu 45%), niedrigere Wohnkosten außer in Großstädten'
    },
    {
      category: 'Arbeitskultur',
      dubai: 'Sonntag-Donnerstag Arbeitswoche, wirtschaftsfreundliches Umfeld, internationale Belegschaft',
      germany: 'Montag-Freitag Arbeitswoche, starke Work-Life-Balance, strukturiertes Umfeld'
    },
    {
      category: 'Sozialleben',
      dubai: 'Kosmopolitisches Umfeld, vielfältige Expatriate-Gemeinschaften, Luxus-Lifestyle-Optionen',
      germany: 'Starke lokale Gemeinschaften, kulturelle Aktivitäten, Outdoor-Lifestyle'
    },
    {
      category: 'Familienleben',
      dubai: 'Ausgezeichnete internationale Schulen, familienfreundliche Aktivitäten, Haushaltshilfe erschwinglich',
      germany: 'Starke öffentliche Bildung, umfassende Familienleistungen, Outdoor-Aktivitäten'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-6">Dubai vs. Deutschland: Lifestyle-Vergleich</h2>
          <p className="text-gray-600">
            Während sowohl Dubai als auch Deutschland einen ausgezeichneten Lebensstandard bieten, gibt es wichtige Unterschiede, die Ihre Entscheidung zur Umsiedlung beeinflussen könnten.
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="gold-gradient-bg text-white">
                <th className="py-3 px-4 text-left rounded-tl-lg">Kategorie</th>
                <th className="py-3 px-4 text-left">Dubai</th>
                <th className="py-3 px-4 text-left rounded-tr-lg">Deutschland</th>
              </tr>
            </thead>
            <tbody>
              {lifestyleComparisons.map((comparison, index) => (
                <tr 
                  key={index} 
                  className={index % 2 === 0 ? 'bg-dubai-sand/50' : 'bg-white'}
                >
                  <td className="py-3 px-4 border-b border-dubai-dark-sand/30 font-medium">{comparison.category}</td>
                  <td className="py-3 px-4 border-b border-dubai-dark-sand/30 text-gray-600">{comparison.dubai}</td>
                  <td className="py-3 px-4 border-b border-dubai-dark-sand/30 text-gray-600">{comparison.germany}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
