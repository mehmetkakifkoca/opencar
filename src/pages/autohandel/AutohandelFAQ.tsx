import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export default function AutohandelFAQ() {
  const faqData: FAQCategory[] = [
    {
      title: 'Fahrzeugkauf',
      items: [
        { q: 'Sind alle Fahrzeuge werkstattgeprüft?', a: 'Ja, jedes einzelne Fahrzeug in unserem Bestand wird in unserer eigenen KFZ-Meisterwerkstatt am Rennweg 76 einer gründlichen 6-Punkte-Prüfung unterzogen und professionell aufbereitet.' },
        { q: 'Was ist im angegebenen Preis enthalten?', a: 'Sämtliche Preise sind Endpreise. Alle gesetzlichen Steuern und Abgaben wie NoVA und Mehrwertsteuer (MwSt) sind bereits enthalten. Es gibt keine versteckten Nebenkosten.' },
        { q: 'Ist eine Probefahrt möglich?', a: 'Selbstverständlich! Eine Probefahrt ist nach vorheriger Terminvereinbarung jederzeit möglich. Kontaktieren Sie uns einfach telefonisch unter 01 9972708.' },
        { q: 'Wie läuft der Kaufprozess ab?', a: 'Nach der Besichtigung und einer erfolgreichen Probefahrt erstellen wir Ihnen ein verbindliches Angebot. Sobald die Bezahlung oder die Finanzierung abgeschlossen ist, können Sie das Fahrzeug sofort mitnehmen.' },
        { q: 'Nehmen Sie mein altes Auto in Zahlung?', a: 'Ja, wir bewerten Ihr aktuelles Fahrzeug fair und unkompliziert. Der ermittelte Wert kann direkt als Anzahlung oder Gutschrift für Ihr neues Fahrzeug verwendet werden.' }
      ]
    },
    {
      title: 'Garantie & Gewährleistung',
      items: [
        { q: 'Welche Garantie erhalte ich beim Kauf?', a: 'Beim Kauf eines Gebrauchtwagens erhalten Sie standardmäßig eine 12-monatige Gebrauchtwagengarantie. Auf Wunsch und gegen Aufpreis kann diese auf 24 Monate verlängert werden.' },
        { q: 'Was deckt die Garantie ab?', a: 'Die Garantie deckt alle wesentlichen mechanischen und elektrischen Bauteile des Fahrzeugs ab. Gerne händigen wir Ihnen vor dem Kauf das detaillierte Garantieheft aus.' },
        { q: 'Habe ich eine gesetzliche Gewährleistung?', a: 'Ja, als gewerblicher Automobilhändler gewähren wir Ihnen die vollen gesetzlich vorgeschriebenen 2 Jahre Gewährleistung.' },
        { q: 'Haben die Fahrzeuge ein gültiges Pickerl?', a: 'Ja, alle unsere Gebrauchtwagen werden ausschließlich mit einer gültigen §57a Pickerl-Überprüfung übergeben.' }
      ]
    },
    {
      title: 'Finanzierung',
      items: [
        { q: 'Bieten Sie Finanzierungen an?', a: 'Ja, wir bieten verschiedene maßgeschneiderte Finanzierungsmodelle an: Ratenkredit, Leasing und Ballonfinanzierung.' },
        { q: 'Kann ich ein Fahrzeug auch ohne Anzahlung finanzieren?', a: 'Ja, eine Finanzierung ist bei entsprechender Bonität auch ohne Anzahlung möglich.' },
        { q: 'Wie lange dauert die Genehmigung der Finanzierung?', a: 'Nach Einreichung aller erforderlichen Unterlagen (Lohnzettel, Ausweis) erhalten wir die Genehmigung in der Regel innerhalb weniger Stunden.' }
      ]
    },
    {
      title: 'Besichtigung & Probefahrt',
      items: [
        { q: 'Wo befinden sich die Fahrzeuge zur Besichtigung?', a: 'Unser Autohandel und Ausstellungsplatz befindet sich in der Favoritenstraße 175, 1100 Wien.' },
        { q: 'Muss ich vorab einen Termin vereinbaren?', a: 'Eine vorherige Terminvereinbarung unter 01 9972708 wird empfohlen, damit wir das gewünschte Fahrzeug für eine eventuelle Probefahrt vorbereiten können.' },
        { q: 'Kann ich ein Fahrzeug auch kaufen, wenn ich nicht aus Wien komme?', a: 'Ja! Wir organisieren auf Wunsch die Überführung des Fahrzeugs österreichweit oder stellen Überstellungskennzeichen bereit.' }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (catIdx: number, itemIdx: number) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out' }}>
      
      {/* Page Title */}
      <div style={{ marginBottom: '4rem', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '1rem' }}>Häufige Fragen zum Fahrzeugkauf</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          Antworten auf Fragen rund um Besichtigung, Probefahrt, Garantie und Finanzierungsmöglichkeiten bei OpenCarBox.
        </p>
      </div>

      {/* Tabs and Accordions layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '3rem', alignItems: 'start' }}>
        
        {/* Left Tabs bar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {faqData.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              style={{
                background: activeTab === idx ? 'var(--primary)' : 'rgba(255,168,0,0.02)',
                color: activeTab === idx ? '#000' : 'var(--text-primary)',
                border: activeTab === idx ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                padding: '0.8rem 1.25rem',
                borderRadius: '8px',
                textAlign: 'left',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Right Accordion List */}
        <div>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
            {faqData[activeTab].title}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqData[activeTab].items.map((item, idx) => {
              const isOpen = !!openItems[`${activeTab}-${idx}`];
              return (
                <div key={idx} className="accordion">
                  <div 
                    className="accordion-header"
                    onClick={() => toggleItem(activeTab, idx)}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: isOpen ? 'var(--primary)' : 'var(--text-primary)' }}>
                      <HelpCircle size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                      {item.q}
                    </span>
                    {isOpen ? <ChevronUp size={18} style={{ color: 'var(--primary)' }} /> : <ChevronDown size={18} />}
                  </div>
                  <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                    <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .container.section > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </div>
  );
}
