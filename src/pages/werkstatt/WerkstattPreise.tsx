
import { Link } from 'react-router-dom';
import { Calendar, Shield, CreditCard, Banknote, HelpCircle } from 'lucide-react';

export default function WerkstattPreise() {
  const priceList = [
    { name: '§57a Überprüfung ★ Beliebt', desc: 'PKW – inkl. Prüfgutachten', price: 'ab € 55' },
    { name: 'Ölwechsel inkl. Filter', desc: 'bis 5L Motoröl, inkl. Kurzcheck', price: 'ab € 39' },
    { name: 'Klimaservice Befüllung', desc: 'inkl. Dichtheitsprüfung', price: 'ab € 65' },
    { name: 'Reifenmontage & Wuchten', desc: 'pro Satz (4 Räder)', price: 'ab € 40' },
    { name: 'DPF-Reinigung', desc: 'inkl. Diagnose & Regeneration', price: 'ab € 120' },
    { name: 'Bremsenservice vorne/hinten', desc: 'inkl. Beläge, Scheiben nach Bedarf', price: 'auf Anfrage' },
    { name: 'Achsvermessung 3D', desc: 'inkl. Protokoll & Korrektur', price: 'auf Anfrage' },
    { name: 'Autoglaserei / Steinschlag', desc: 'ggf. Versicherungsabwicklung', price: 'auf Anfrage' },
    { name: 'KFZ-Inspektion', desc: 'herstellerkonform, alle Marken', price: 'auf Anfrage' },
    { name: 'Fahrzeugdiagnose', desc: 'Fehlerspeicher auslesen & Analyse', price: 'auf Anfrage' }
  ];

  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out' }}>
      
      {/* Title */}
      <div style={{ marginBottom: '3.5rem', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '1rem' }}>Preise & Tarife</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          Transparenz ist uns wichtig – deshalb finden Sie hier unsere Richtpreise. Vor jedem Eingriff erhalten Sie einen klaren Kostenvoranschlag. Kein Eingriff ohne Ihre Zustimmung.
        </p>
      </div>

      {/* Pricing Table */}
      <div className="table-responsive" style={{ marginBottom: '4rem', boxShadow: 'var(--shadow-md)' }}>
        <table className="table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Beschreibung</th>
              <th style={{ textAlign: 'right' }}>Preis</th>
            </tr>
          </thead>
          <tbody>
            {priceList.map((row, idx) => (
              <tr key={idx}>
                <td style={{ fontWeight: 600, color: '#FFF' }}>{row.name}</td>
                <td>{row.desc}</td>
                <td style={{ fontWeight: 700, color: 'var(--primary)', textAlign: 'right' }}>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Price Guarantee Cards */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2.5rem' }}>Unsere Preisgarantie</h2>
        
        <div className="grid-3">
          {[
            {
              title: 'Kostenvoranschlag',
              desc: 'Vor jedem Eingriff erhalten Sie eine klare Kalkulation. Erst nach Ihrer ausdrücklichen Zustimmung beginnen wir mit den Arbeiten.'
            },
            {
              title: 'Keine versteckten Kosten',
              desc: 'Was im Kostenvoranschlag besprochen wird, wird am Ende auch so abgerechnet. Es gibt bei uns keine bösen Überraschungen.'
            },
            {
              title: 'OEM-Qualitätsteile',
              desc: 'Wir verwenden ausschließlich hochwertige OEM-konforme Ersatzteile, damit Ihr Fahrzeug langlebig und sicher repariert wird.'
            }
          ].map((item, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', background: 'var(--primary-glow)', color: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                <Shield size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Payment methods & Help */}
      <div className="glass-card grid-2" style={{ alignItems: 'center', padding: '2.5rem' }}>
        <div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#FFF' }}>Gut zu wissen</h3>
          <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.7' }}>
            Zahlungen erfolgen bequem nach Fertigstellung und Übergabe Ihres Fahrzeugs.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FFF', fontSize: '0.9rem' }}>
              <Banknote size={18} style={{ color: 'var(--primary)' }} /> Barzahlung
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FFF', fontSize: '0.9rem' }}>
              <CreditCard size={18} style={{ color: 'var(--primary)' }} /> Bankomat (Debit)
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FFF', fontSize: '0.9rem' }}>
              <CreditCard size={18} style={{ color: 'var(--primary)' }} /> Visa / Mastercard
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/werkstatt/terminbuchung" className="btn btn-primary">
            <Calendar size={18} /> Termin vereinbaren
          </Link>
          <Link to="/werkstatt/faq" className="btn btn-secondary">
            <HelpCircle size={18} /> Häufige Fragen
          </Link>
        </div>
      </div>

    </div>
  );
}
