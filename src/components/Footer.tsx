import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer style={{ background: '#080A0F', borderTop: '1px solid var(--border-color)', padding: '5rem 0 2rem 0', color: 'var(--text-secondary)' }}>
      <div className="container">
        
        {/* Six columns grid */}
        <div className="footer-grid">
          
          {/* Column 1: Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link to="/werkstatt" style={{ display: 'inline-flex' }}>
              <img src={logoImg} alt="OpenCarBox Logo" style={{ height: '35px', objectFit: 'contain' }} />
            </Link>
            <p style={{ margin: 0, fontSize: '0.8rem', lineHeight: '1.4', color: 'var(--text-muted)' }}>
              Werkstatt · Autohandel ·<br />
              Teileversorgung - B2B
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', background: 'var(--success)', borderRadius: '50%', display: 'inline-block' }}></span>
                <span style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '0.8rem' }}>BestDrive by Continental Partner</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', background: 'var(--text-muted)', borderRadius: '50%', display: 'inline-block' }}></span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Karosserie Spengler Fachbetrieb</span>
              </div>
            </div>

            {/* Google review snippet */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
              <svg viewBox="0 0 24 24" style={{ width: '16px', height: '16px' }}>
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <div style={{ display: 'flex', gap: '1px' }}>
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} style={{ color: '#FFA800', fontSize: '0.85rem' }}>★</span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Werkstatt */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '0.9rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Werkstatt</h4>
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

          {/* Column 3: Autohandel & Rechtliches */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '0.9rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Autohandel</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', marginBottom: '2rem' }}>
              <li><Link to="/autohandel/fahrzeuge">Alle Fahrzeuge</Link></li>
              <li><Link to="/autohandel/anfrage">Anfrage stellen</Link></li>
              <li><Link to="/autohandel/finanzierung">Finanzierung</Link></li>
              <li><Link to="/autohandel/faq">FAQ Autohandel</Link></li>
              <li><Link to="/autohandel/kontakt">Kontakt Autohandel</Link></li>
            </ul>

            <h4 style={{ color: '#FFF', fontSize: '0.9rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Rechtliches</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><Link to="/impressum">Impressum</Link></li>
              <li><Link to="/datenschutz">Datenschutz</Link></li>
              <li><Link to="/agb">AGB</Link></li>
            </ul>
          </div>

          {/* Column 4: B2B */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '0.9rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>B2B Gewerbekunden</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', marginBottom: '2rem' }}>
              <li><Link to="/b2b">B2B Übersicht</Link></li>
              <li><Link to="/b2b/leistungen">B2B Leistungen</Link></li>
              <li><Link to="/b2b/familien-werkstaetten">Familien-Werkstätten</Link></li>
              <li><Link to="/b2b/kontakt">B2B Kontakt</Link></li>
              <li><Link to="/b2b/faq">B2B FAQ</Link></li>
            </ul>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.25rem' }}>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, marginBottom: '0.25rem' }}>Märkte</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Österreich · Deutschland</div>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, marginBottom: '0.25rem' }}>Bestell-Hotline</div>
                <a href="tel:017981310" style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: 700 }}>01 7981310</a>
              </div>
            </div>
          </div>

          {/* Column 5: Werkstatt Standort */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '0.9rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Werkstatt-Standort</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'start' }}>
                <MapPin size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.15rem' }} />
                <div>Rennweg 76<br />1030 Wien</div>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <a href="tel:017981310">01 7981310</a>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Mail size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <a href="mailto:office@opencarbox.co.at">office@opencarbox.co.at</a>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'start' }}>
                <Clock size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.15rem' }} />
                <div>Mo-Fr: 08:00-18:00<br />Sa: 08:00-13:00</div>
              </div>
            </div>
          </div>

          {/* Column 6: Autohandel Standort */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '0.9rem', marginBottom: '1.25rem', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Autohandel-Standort</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'start' }}>
                <MapPin size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.15rem' }} />
                <div>Favoritenstraße 175<br />1100 Wien</div>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <a href="tel:019972708">01 9972708</a>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                <a href="tel:069914447780">0699 14447780</a>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'start' }}>
                <Clock size={16} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.15rem' }} />
                <div>Mo-Fr: 08:00-18:00<br />Sa: 10:00-15:00</div>
              </div>
            </div>
          </div>

        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '2.5rem 0 2rem 0' }} />

        {/* Partner & Qualität Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem' }}>
          <h4 style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Partner & Qualität</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            
            {/* BestDrive Box */}
            <a href="https://www.bestdrive.at/autowerkstatt/opencarbox-gmbh-wien-rennweg.html" target="_blank" rel="noreferrer" className="partner-box" style={{ 
              background: '#12151C', 
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '8px', 
              padding: '0.8rem 1.5rem', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.25rem',
              textDecoration: 'none',
              transition: 'var(--transition-fast)'
            }}>
              {/* Styled BestDrive Logo */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <svg viewBox="0 0 100 20" style={{ width: '80px', height: '14px', fill: 'none', stroke: '#FFA800', strokeWidth: 1.5, strokeLinecap: 'round' }}>
                  <path d="M 5,15 C 20,15 35,5 50,5 C 65,5 80,15 95,15" />
                </svg>
                <div style={{ fontSize: '1.1rem', fontWeight: 900, fontStyle: 'italic', lineHeight: '1' }}>
                  <span style={{ color: '#FFA800' }}>Best</span><span style={{ color: '#FFF' }}>Drive</span>
                </div>
                <div style={{ fontSize: '0.45rem', letterSpacing: '0.15em', color: '#B3B3B3', marginTop: '2px', textTransform: 'uppercase', fontWeight: 700 }}>
                  by Continental
                </div>
              </div>
              <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.1)' }} />
              <span style={{ color: '#FFF', fontSize: '0.8rem', fontWeight: 600 }}>Partnerbetrieb ↗</span>
            </a>

            {/* Description */}
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0, flex: 1, minWidth: '250px', lineHeight: '1.6' }}>
              Als Partner von BestDrive by Continental arbeiten wir mit hochwertigen Produkten und geprüften Qualitätsstandards.
            </p>
          </div>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '2rem 0' }} />

        {/* Footer Bottom details */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.85rem' }}>
          <span style={{ color: 'var(--text-muted)' }}>
            © 2026 OpenCarBox GmbH · Rennweg 76, 1030 Wien · FN 534799 w · UID: ATU75630015
          </span>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/impressum" style={{ color: 'var(--text-muted)' }}>Impressum</Link>
            <Link to="/datenschutz" style={{ color: 'var(--text-muted)' }}>Datenschutz</Link>
            <Link to="/agb" style={{ color: 'var(--text-muted)' }}>AGB</Link>
          </div>
        </div>

        {/* Tradamedia Footer signature */}
        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Erstellt und gepflegt von <a href="https://tradamedia.at" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>tradamedia.at</a>
        </div>

      </div>

      {/* Footer responsive column styling */}
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.9fr 0.9fr 1.1fr 1.2fr 1.2fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }
        .partner-box:hover {
          border-color: var(--primary) !important;
          box-shadow: 0 0 15px rgba(255,168,0,0.1);
        }
        @media (max-width: 1200px) {
          .footer-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
