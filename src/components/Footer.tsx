import { Link } from 'react-router-dom';
import { Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#080A0F', borderTop: '1px solid var(--border-color)', padding: '5rem 0 2rem 0', color: 'var(--text-secondary)' }}>
      <div className="container">
        
        {/* Five columns grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
          
          {/* Column 1: Werkstatt */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>Werkstatt</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><Link to="/werkstatt/leistungen">Alle Leistungen</Link></li>
              <li><Link to="/werkstatt/terminbuchung">Termin buchen</Link></li>
              <li><Link to="/werkstatt/preise">Preise</Link></li>
              <li><Link to="/werkstatt/ueber-uns">Über uns</Link></li>
              <li><Link to="/werkstatt/faq">FAQ Werkstatt</Link></li>
              <li><Link to="/werkstatt/kontakt">Kontakt Werkstatt</Link></li>
              <li><Link to="/werkstatt/bewertungen">Bewertungen</Link></li>
            </ul>
          </div>

          {/* Column 2: Autohandel */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>Autohandel</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><Link to="/autohandel/fahrzeuge">Alle Fahrzeuge</Link></li>
              <li><Link to="/autohandel/anfrage">Anfrage stellen</Link></li>
              <li><Link to="/autohandel/finanzierung">Finanzierung</Link></li>
              <li><Link to="/autohandel/faq">FAQ Autohandel</Link></li>
              <li><Link to="/autohandel/kontakt">Kontakt Autohandel</Link></li>
            </ul>
          </div>

          {/* Column 3: Shop */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>Carvantooo Shop</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><Link to="/shop">Ersatzteile Shop</Link></li>
              <li><Link to="/shop/kategorie/alle">Kategorien durchsuchen</Link></li>
            </ul>
          </div>

          {/* Column 4: B2B */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>B2B Gewerbekunden</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><Link to="/b2b">B2B Übersicht</Link></li>
              <li><Link to="/b2b/leistungen">B2B Leistungen</Link></li>
              <li><Link to="/b2b/familien-werkstaetten">Familien-Werkstätten</Link></li>
              <li><Link to="/b2b/kontakt">B2B Kontakt</Link></li>
              <li><Link to="/b2b/faq">B2B FAQ</Link></li>
            </ul>
          </div>

          {/* Column 5: Rechtliches */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1.1rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)' }}>Rechtliches</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><Link to="/impressum">Impressum</Link></li>
              <li><Link to="/datenschutz">Datenschutz</Link></li>
              <li><Link to="/agb">AGB</Link></li>
            </ul>
          </div>

        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '2rem 0' }} />

        {/* Footer Bottom details */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.85rem' }}>
          <div>
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>
              © 2026 OpenCarBox GmbH · Rennweg 76, 1030 Wien · FN 534799 w · UID: ATU75630015
            </p>
            <p style={{ margin: '0.25rem 0 0 0', color: 'var(--text-muted)' }}>
              Märkte: Österreich · Deutschland
            </p>
          </div>

          {/* Partner Badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,168,0,0.05)', border: '1px solid var(--border-color)', padding: '0.5rem 1rem', borderRadius: '8px' }}>
              <Award size={18} style={{ color: 'var(--primary)' }} />
              <span style={{ fontWeight: 600, color: '#FFF', fontSize: '0.8rem' }}>BestDrive by Continental Partner</span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer responsive column styling */}
      <style>{`
        @media (max-width: 900px) {
          footer div.container > div:first-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          footer div.container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
