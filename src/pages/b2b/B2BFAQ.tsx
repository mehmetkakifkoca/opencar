import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export default function B2BFAQ() {
  const faqList: FAQItem[] = [
    {
      q: 'Wer kann B2B-Kunde werden?',
      a: 'B2B-Kunde können alle KFZ-Betriebe, freien Werkstätten, Vertragswerkstätten, Autohändler, Teilehändler sowie Flottenbetreiber mit einem gültigen Gewerbenachweis (Gewerberegisterauszug) werden.'
    },
    {
      q: 'Wie schnell wird geliefert?',
      a: 'Für lagernde Ersatzteile gilt: Bestellungen bis 10:00 Uhr werden am selben Werktag (Montag bis Freitag) bis 14:00 Uhr direkt an Ihren Betrieb geliefert. Bei späteren Bestellungen erfolgt die Lieferung am nächsten Werktag.'
    },
    {
      q: 'Welche Teile sind verfügbar?',
      a: 'Unser Sortiment umfasst über 4,5 Millionen Artikel. Darunter befinden sich Original-Ersatzteile (OE) und Premium-Markenteile für Bremsen, Filter, Fahrwerk, Motorkomponenten, Getriebe, Abgasanlagen, Elektrik und Zubehör.'
    },
    {
      q: 'Wie funktioniert die Teileidentifikation?',
      a: 'Die Identifikation erfolgt fahrzeuggenau über die Eingabe der Fahrgestellnummer (FIN/VIN) oder der nationalen Schlüsselnummern (z.B. KBA-Nummer in DE oder Zulassungsdaten in AT) in unserem Bestellsystem.'
    },
    {
      q: 'Gibt es individuelle Konditionen?',
      a: 'Ja, nach der Registrierung analysieren wir Ihr voraussichtliches Einkaufsvolumen und ordnen Sie entsprechenden Rabattgruppen zu. Zudem bieten wir flexiblen Rechnungskauf mit individuellen Zahlungszielen an.'
    },
    {
      q: 'Wie funktionieren Retouren?',
      a: 'Retouren können unkompliziert angemeldet und über unsere lokalen Logistikstandorte in Wien (für Österreich) oder Ludwigsfelde (für Deutschland) abgewickelt werden. Die Gutschriften werden nach Wareneingangsprüfung sofort ausgestellt.'
    },
    {
      q: 'Kann auch eine kleine Werkstatt B2B-Kunde werden?',
      a: 'Selbstverständlich. Bei OpenCarBox steht die Handschlagqualität und das gegenseitige Vertrauen im Vordergrund. Wir betreuen kleine Werkstätten mit demselben Engagement wie Großkunden.'
    },
    {
      q: 'Liefern Sie nach ganz AT & DE?',
      a: 'Ja, über unsere Logistiknetzwerke und Expresspartner beliefern wir Werkstätten, Händler und Logistikpunkte flächendeckend in ganz Österreich und Deutschland.'
    },
    {
      q: 'Wie werde ich Teil des Familien-Werkstätten-Netzwerks?',
      a: 'Senden Sie uns einfach eine Anfrage über unser B2B-Kontaktformular oder sprechen Sie uns direkt an. Nach einem persönlichen Kennenlernen und Abgleich unserer Qualitäts- & Servicestandards entscheiden wir gemeinsam über eine Partnerschaft.'
    }
  ];

  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (idx: number) => {
    setOpenItems(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out', maxWidth: '800px' }}>
      
      {/* Page Title */}
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '1rem' }}>Häufige Fragen für Gewerbekunden</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          Wichtige Informationen zu Lieferzeiten, Konditionen, Sortimentstiefe und Retourenlogistik für B2B-Partner.
        </p>
      </div>

      {/* Accordions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '4rem' }}>
        {faqList.map((item, idx) => {
          const isOpen = !!openItems[idx];
          return (
            <div key={idx} className="accordion">
              <div 
                className="accordion-header"
                onClick={() => toggleItem(idx)}
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
  );
}
