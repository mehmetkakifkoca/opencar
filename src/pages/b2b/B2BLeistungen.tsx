import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, UserCheck, RefreshCw, Layers, ZoomIn } from 'lucide-react';

export default function B2BLeistungen() {
  const B2BServices = [
    {
      title: 'Sofortverfügbare Ersatzteile',
      icon: <Layers size={24} />,
      relevance: 'Minimierung von Fahrzeug-Standzeiten durch planbare Beschaffung.',
      benefit: 'Umfangreiches OE- und Aftermarket-Sortiment mit hoher Lagertiefe für alle gängigen Fahrzeughersteller.'
    },
    {
      title: 'Fahrzeuggenaue Zuordnung',
      icon: <ZoomIn size={24} />,
      relevance: 'Vermeidung von Fehllieferungen und zeitaufwendigen Rücksendungen.',
      benefit: 'Exakte Teilezuordnung anhand von Fahrgestellnummern (FIN) und Schlüsselnummern für schnellere Bestellprozesse.'
    },
    {
      title: 'Schnelle Gewerbelieferung',
      icon: <Truck size={24} />,
      relevance: 'Flexible Anpassung an den Werkstatt-Tagesablauf.',
      benefit: 'Bestellschluss täglich um 10:00 Uhr – Anlieferung erfolgt garantiert am selben Tag bis 14:00 Uhr in ganz AT & DE.'
    },
    {
      title: 'Persönliche Betreuung',
      icon: <UserCheck size={24} />,
      relevance: 'Schnelle Lösungen und direkte Entscheidungswege.',
      benefit: 'Fester B2B-Ansprechpartner, telefonische Sofort-Beratung und individuell vereinbarte Zahlungs- & Rabattkonditionen.'
    },
    {
      title: 'Zuverlässige Retourenabwicklung',
      icon: <RefreshCw size={24} />,
      relevance: 'Kein totes Kapital in Ihrem Lager durch unkomplizierte Rückabwicklung.',
      benefit: 'Einfacher Retourenprozess mit schneller Gutschrifterstellung über unsere Logistikstandorte in Wien und Ludwigsfelde.'
    },
    {
      title: 'Große Sortimentstiefe',
      icon: <ShieldCheck size={24} />,
      relevance: 'Alles aus einer Hand – spart Zeit und reduziert Versandkosten.',
      benefit: 'Komplettes Sortiment für Bremsen, Filter, Kupplung, Fahrwerk, Motorsteuerung, Abgasanlage, Elektrik und Zubehör.'
    }
  ];

  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out' }}>
      
      {/* Page Title */}
      <div style={{ marginBottom: '4rem', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '1rem' }}>B2B-Leistungen im Überblick</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          Unsere Logistik- und Dienstleistungen sind speziell auf die Anforderungen von Werkstätten, Händlern und Fuhrparks zugeschnitten.
        </p>
      </div>

      {/* Grid of B2B Services */}
      <div className="grid-3" style={{ marginBottom: '4rem' }}>
        {B2BServices.map((srv, idx) => (
          <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', height: '100%' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(255,168,0,0.05)', color: 'var(--primary)', border: '1px solid var(--border-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {srv.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--text-primary)' }}>{srv.title}</h3>
            </div>

            <div style={{ height: '1px', background: 'var(--border-color)' }} />

            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem', letterSpacing: '0.05em' }}>B2B-Relevanz</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', margin: 0, lineHeight: '1.55' }}>
                {srv.relevance}
              </p>
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--success)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem', letterSpacing: '0.05em' }}>Ihre Vorteile</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.55' }}>
                {srv.benefit}
              </p>
            </div>

          </div>
        ))}
      </div>

      {/* Bottom Callout */}
      <div className="glass-card grid-2" style={{ alignItems: 'center', padding: '2.5rem' }}>
        <div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Interesse an einer Partnerschaft?</h3>
          <p style={{ margin: 0 }}>Erfahren Sie mehr über unsere individuellen Händlerkonditionen und Logistiktarife.</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link to="/b2b/kontakt" className="btn btn-primary">
            Jetzt B2B-Kunde werden
          </Link>
        </div>
      </div>

    </div>
  );
}
