import { Link } from 'react-router-dom';
import { ClipboardCheck, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import mascotAutohandel from '../../assets/opencarbox-autohandel-maskottchen-schluessel.png';

export default function AutohandelHome() {
  const checkList = [
    'Motorprüfung & Diagnose',
    'Bremsen & Fahrwerk',
    'Getriebe & Antrieb',
    'Klimaanlage & Elektrik',
    'Karosserie & Lack',
    '§57a Pickerl'
  ];

  const valueCards = [
    { title: 'Eigene Meisterwerkstatt', desc: 'Jedes Fahrzeug wird am Rennweg 76 in unserer eigenen Werkstatt auf Herz und Nieren geprüft.' },
    { title: 'Transparente Preise', desc: 'Sämtliche Preise verstehen sich inklusive aller Steuern (NoVA, MwSt). Keine versteckten Nebenkosten.' },
    { title: 'Garantie inklusive', desc: '12 Monate Gewährleistung und Garantie sind bei jedem Kauf bereits im Preis enthalten (optional 24 Monate).' },
    { title: 'Persönliche Beratung', desc: 'Kein Callcenter, kein Druckverkauf. Geschäftsführer Metehan Arac berät Sie direkt und auf Augenhöhe.' },
    { title: 'Flexible Finanzierung', desc: 'Ratenkredit, Leasing oder Ballonfinanzierung – wir finden die passende Rate für Ihr Budget.' },
    { title: 'Faire Inzahlungnahme', desc: 'Wir bewerten Ihr Altfahrzeug fair und transparent und ziehen den Wert direkt vom Kaufpreis ab.' }
  ];

  return (
    <div style={{ animation: 'fadeInUp 0.4s ease-out' }}>
      
      {/* 1. HERO SECTION */}
      <section className="autohandel-hero-section">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div className="autohandel-hero-content">
            {/* Header Badge */}
            <div className="autohandel-badge">
              🔑 WERKSTATTGEPRÜFT <span style={{ color: '#D1D5DB', margin: '0 0.25rem' }}>·</span> BESTDRIVE PARTNER
            </div>
 
            {/* Main Heading */}
            <h1 className="autohandel-hero-title">
              GEBRAUCHTWAGEN<br />
              <span style={{ color: '#FFA800' }}>MIT VERTRAUEN</span><br />
              KAUFEN.
            </h1>
 
            {/* Description */}
            <p style={{ 
              fontSize: '1rem', 
              lineHeight: '1.6', 
              marginBottom: '2.5rem', 
              color: '#4B5563',
              maxWidth: '520px'
            }}>
              Jedes Fahrzeug wird in unserer eigenen Meisterwerkstatt geprüft, aufbereitet und mit Garantie übergeben. Persönliche Beratung statt anonymem Massenhandel.
            </p>
 
            {/* CTA Buttons */}
            <div className="autohandel-hero-buttons">
              <Link 
                to="/autohandel/fahrzeuge" 
                className="btn" 
                style={{
                  background: '#FFA800',
                  color: '#000000',
                  fontWeight: 700,
                  padding: '0.8rem 1.75rem',
                  borderRadius: '4px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.88rem',
                  border: 'none',
                  boxShadow: '0 4px 14px rgba(255, 168, 0, 0.25)'
                }}
              >
                🚗 ALLE FAHRZEUGE <ArrowRight size={18} />
              </Link>
              <Link 
                to="/autohandel/anfrage" 
                className="btn" 
                style={{
                  background: 'transparent',
                  color: '#111827',
                  fontWeight: 700,
                  padding: '0.8rem 1.75rem',
                  borderRadius: '4px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.88rem',
                  border: '1px solid #111827'
                }}
              >
                ANFRAGE STELLEN
              </Link>
            </div>
 
            {/* Divider */}
            <div style={{ width: '100%', height: '1px', background: 'rgba(0,0,0,0.06)', margin: '2rem 0' }} />
 
            {/* Stats Row */}
            <div className="autohandel-stats-grid">
              <div>
                <strong style={{ display: 'block', fontSize: '2rem', color: '#111827', fontWeight: 800 }}>10</strong>
                <span style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Fahrzeuge</span>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '2rem', color: '#111827', fontWeight: 800 }}>12 Mo.</strong>
                <span style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Garantie</span>
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '2rem', color: '#111827', fontWeight: 800 }}>100%</strong>
                <span style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Geprüft</span>
              </div>
            </div>
          </div>
 
          {/* Right Mascot Column */}
          <div className="autohandel-mascot-container">
            <div style={{
              position: 'absolute',
              top: '-10%',
              left: '-10%',
              width: '120%',
              height: '120%',
              background: 'radial-gradient(circle, rgba(255, 168, 0, 0.15) 0%, transparent 60%)',
              zIndex: 0
            }} />
            <img 
              src={mascotAutohandel} 
              alt="OpenCarBox Autohandel Alien" 
              className="autohandel-mascot-img"
            />
          </div>
        </div>
      </section>

      {/* 2. PERSÖNLICHE BERATUNG */}
      <section className="section section-alt">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Persönliche Beratung statt anonymer Fahrzeugbörse.</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Bei OpenCarBox kaufen Sie nicht einfach ein Auto – Sie bekommen ein Fahrzeug, hinter dem ein ganzes Team steht. Geschäftsführer Metehan Arac berät Sie persönlich.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              Jedes Fahrzeug wird in unserer eigenen KFZ-Meisterwerkstatt am Rennweg 76 gründlich geprüft und aufbereitet. Was wir verkaufen, verantworten wir.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', marginBottom: '2.5rem' }}>
              <strong style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>Metehan Arac</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase' }}>Geschäftsführer & KFZ-Meister</span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/autohandel/anfrage" className="btn btn-primary">Beratung anfragen</Link>
              <a href="tel:019972708" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Phone size={16} /> Direkt anrufen: 01 9972708
              </a>
            </div>
          </div>

          {/* Checklist card */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)' }}>
              <ClipboardCheck size={22} /> Unser Werkstattsiegel
            </h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Jedes Fahrzeug durchläuft vor der Übergabe folgende Prüfpunkte:</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {checkList.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', color: 'var(--text-primary)' }}>
                  <CheckCircle size={18} style={{ color: 'var(--success)' }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WARUM OPENCARBOX */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2>Warum Gebrauchtwagen von OpenCarBox?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>Weil wir als Meisterbetrieb die Qualität jedes verkauften Fahrzeugs persönlich garantieren.</p>
        </div>

        <div className="container grid-3" style={{ marginBottom: '4rem' }}>
          {valueCards.map((vc, i) => (
            <div key={i} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)' }}>{vc.title}</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>{vc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SON CTA */}
      <section className="section section-alt" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '1.25rem' }}>Ihr Wunschfahrzeug ist nicht dabei?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem' }}>
            Sagen Sie uns einfach, was Sie suchen. Wir nutzen unser Netzwerk, um Ihr Traumauto in meistergeprüfter Qualität zu finden.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/autohandel/anfrage" className="btn btn-primary">Anfrage stellen</Link>
            <a href="tel:019972708" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={18} /> 01 9972708 anrufen
            </a>
          </div>
        </div>
      </section>
      {/* Styles for Autohandel Home Page */}
      <style>{`
        .autohandel-hero-section {
          background: linear-gradient(90deg, #FFFCF7 0%, #FFF5E5 40%, #FFA800 100%);
          border-bottom: 1px solid var(--border-color);
          padding: 6rem 0;
        }
        .autohandel-hero-content {
          text-align: left;
        }
        .autohandel-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 168, 0, 0.06);
          border: 1px solid rgba(255, 168, 0, 0.3);
          padding: 0.35rem 0.8rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #D48C00;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }
        .autohandel-hero-title {
          font-size: 3.6rem; 
          font-weight: 900; 
          color: #111827; 
          line-height: 1.05; 
          margin-bottom: 1.5rem; 
          font-family: var(--font-heading);
        }
        .autohandel-hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }
        .autohandel-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .autohandel-mascot-container {
          display: flex;
          justify-content: center;
          position: relative;
        }
        .autohandel-mascot-img {
          width: 110%;
          max-height: 500px;
          object-fit: contain;
          z-index: 1;
          transform: translateX(25px);
        }
        @media (max-width: 1024px) {
          .autohandel-hero-section {
            background: linear-gradient(180deg, #FFFCF7 0%, #FFF5E5 70%, rgba(255, 168, 0, 0.15) 100%);
            padding: 3.5rem 0 2.5rem 0;
          }
          .autohandel-hero-content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .autohandel-hero-title {
            font-size: 2.5rem;
            line-height: 1.15;
            margin-bottom: 1rem;
          }
          .autohandel-hero-buttons {
            justify-content: center;
          }
          .autohandel-stats-grid {
            width: 100%;
            justify-content: center;
          }
          .autohandel-mascot-container {
            margin-top: 2rem;
            width: 100%;
          }
          .autohandel-mascot-img {
            width: 100%;
            max-width: 380px;
            transform: none;
          }
        }
        @media (max-width: 480px) {
          .autohandel-hero-title {
            font-size: 2rem;
          }
          .autohandel-stats-grid {
            gap: 0.5rem;
          }
          .autohandel-stats-grid strong {
            font-size: 1.5rem !important;
          }
        }
      `}</style>

    </div>
  );
}
