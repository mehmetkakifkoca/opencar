import { Link } from 'react-router-dom';
import { ShoppingBag, Phone, Mail, ArrowRight } from 'lucide-react';

export default function ShopHome() {
  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      
      {/* Shop Title with logo banner */}
      <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Carvantooo by OpenCarBox
        </span>
        <h1 style={{ margin: '0.25rem 0 0.5rem 0', fontSize: '2.5rem' }}>Ersatzteile Shop</h1>
        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Qualitäts-Autoteile, Reifen & Zubehör
        </p>
      </div>

      {/* Coming Soon Notice Card */}
      <div className="glass-card" style={{ maxWidth: '650px', margin: '0 auto', padding: '3.5rem 2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          background: 'rgba(255, 168, 0, 0.08)', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'var(--primary)',
          marginBottom: '0.5rem'
        }}>
          <ShoppingBag size={40} />
        </div>

        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
          Unser Online-Shop öffnet in Kürze!
        </h2>

        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>
          Wir arbeiten mit Hochdruck an der Fertigstellung unseres Ersatzteile-Portals. Schon bald können Sie hier aus über 4.000 Artikeln und Premiummarken wählen und bequem online bestellen.
        </p>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem', width: '100%' }}>
          Sie benötigen dringend ein bestimmtes Ersatzteil? Unser Team hilft Ihnen gerne persönlich weiter. Rufen Sie uns an oder senden Sie uns eine E-Mail.
        </p>

        {/* Contact info buttons */}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem', width: '100%' }}>
          <a href="tel:017981310" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem', padding: '0.6rem 1.2rem', border: '1px solid var(--border-color)', borderRadius: '6px' }}>
            <Phone size={16} style={{ color: 'var(--primary)' }} /> 01 7981310
          </a>
          <a href="mailto:office@opencarbox.co.at" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem', padding: '0.6rem 1.2rem', border: '1px solid var(--border-color)', borderRadius: '6px' }}>
            <Mail size={16} style={{ color: 'var(--primary)' }} /> office@opencarbox.co.at
          </a>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/werkstatt/kontakt" className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.88rem', fontWeight: 700 }}>
            Kontaktformular
          </Link>
          <Link to="/werkstatt/terminbuchung" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.88rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Termin buchen <ArrowRight size={16} />
          </Link>
        </div>

      </div>

    </div>
  );
}
