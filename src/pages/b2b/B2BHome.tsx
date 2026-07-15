import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle, Package } from 'lucide-react';
import mascotB2b from '../../assets/mascot_b2b.jpg';

export default function B2BHome() {
  const targetSegments = [
    { title: 'Werkstätten', desc: 'Schnelle Teileversorgung für den täglichen Reparatur- und Servicealltag.' },
    { title: 'Autohändler', desc: 'Zuverlässige Ersatzteile für die Aufbereitung und den schnellen Fahrzeugverkauf.' },
    { title: 'Teilehändler', desc: 'Unkomplizierte Sortimentsergänzung bei Nachfragespitzen oder seltenen Teilen.' },
    { title: 'Flottenbetreiber', desc: 'Planbare und kosteneffiziente Ersatzteilversorgung für den gesamten Fuhrpark.' }
  ];

  const advantages = [
    'Bestellt bis 10:00 – geliefert bis 14:00 (Mo–Fr)',
    'Millionen Teile sofort verfügbar (OE & Aftermarket)',
    'Fahrzeuggenaue Teileidentifikation – keine Fehlbestellungen',
    'Professionelle Logistikpartner für AT & DE',
    'Persönliche Betreuung mit festem Ansprechpartner',
    'Verlässliche Retourenlogik mit lokalen Adressen in Wien & Ludwigsfelde'
  ];

  return (
    <div style={{ animation: 'fadeInUp 0.4s ease-out' }}>
      
      {/* 1. HERO SECTION */}
      <section className="section" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(255, 168, 0, 0.08) 0%, transparent 60%)', borderBottom: '1px solid var(--border-color)', padding: '6rem 0' }}>
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <div className="badge" style={{ marginBottom: '1.25rem' }}>OpenCarBox B2B · AT & DE</div>
            <h1 style={{ fontSize: '3.25rem', lineHeight: '1.2', marginBottom: '1.5rem' }}>
              Verlässliche Teileversorgung<br />
              <span style={{ color: 'var(--primary)' }}>für Profis.</span>
            </h1>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.6', marginBottom: '2.5rem', color: 'var(--text-secondary)' }}>
              Bestellt bis 10:00 Uhr – geliefert bis 14:00 Uhr. Werkstätten, Händler und Gewerbekunden vertrauen auf die Logistik und Qualität von OpenCarBox.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
              <Link to="/b2b/kontakt" className="btn btn-primary">
                Jetzt anfragen
              </Link>
              <Link to="/b2b/leistungen" className="btn btn-secondary">
                Alle Leistungen <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: '-10%',
              left: '-10%',
              width: '120%',
              height: '120%',
              background: 'radial-gradient(circle, rgba(255, 168, 0, 0.1) 0%, transparent 60%)',
              zIndex: 0
            }} />
            <img 
              src={mascotB2b} 
              alt="OpenCarBox B2B Alien" 
              style={{
                width: '100%',
                maxHeight: '430px',
                objectFit: 'contain',
                borderRadius: 'var(--radius-lg)',
                border: '2px solid var(--border-color)',
                boxShadow: 'var(--shadow-glow), 0 20px 40px rgba(0,0,0,0.5)',
                zIndex: 1,
                transform: 'rotate(-1deg)'
              }}
            />
          </div>
        </div>

        {/* B2B stats counters */}
        <div className="container" style={{ marginTop: '4rem' }}>
          <div className="grid-4" style={{ background: 'var(--bg-surface)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
            {[
              { num: '10:00 Uhr', text: 'Bestellschluss' },
              { num: '14:00 Uhr', text: 'Geliefert (Same Day)' },
              { num: 'AT & DE', text: 'Märkte' },
              { num: '4,5 Mio.', text: 'Ersatzteile im Sortiment' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-heading)' }}>{stat.num}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.25rem' }}>{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FÜR WEN */}
      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2>Für wen wir da sind</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>Als Partner des KFZ-Gewerbes beliefern wir professionelle Betriebe mit maßgeschneiderter Logistik.</p>
        </div>

        <div className="container grid-4">
          {targetSegments.map((seg, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ width: '40px', height: '40px', background: 'rgba(255,168,0,0.05)', color: 'var(--primary)', border: '1px solid var(--border-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Package size={18} />
              </div>
              <h3 style={{ fontSize: '1.15rem', margin: 0, color: 'var(--text-primary)' }}>{seg.title}</h3>
              <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.6' }}>{seg.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. VORTEILE */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Ihre Vorteile mit OpenCarBox</h2>
            <p style={{ fontSize: '1.05rem', marginBottom: '2rem' }}>
              Effizienz und Verlässlichkeit stehen in der Werkstatt an oberster Stelle. Mit unserem professionellen B2B-Service minimieren Sie Standzeiten und maximieren Ihre Produktivität.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {advantages.map((adv, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', color: 'var(--text-primary)' }}>
                  <CheckCircle size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  {adv}
                </div>
              ))}
            </div>
          </div>

          {/* Badges block */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
            {[
              { title: 'Eigene Meisterwerkstatt', desc: 'Wir kennen die Praxisanforderungen.' },
              { title: 'BestDrive Partner', desc: 'Zertifizierte Teilequalität von Continental.' },
              { title: 'Persönliche Beratung', desc: 'Keine anonymen Ticket-Systeme.' },
              { title: 'Präsenz AT & DE', desc: 'Schnelle Logistik über Landesgrenzen hinweg.' }
            ].map((bdg, i) => (
              <div key={i} className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', justifyContent: 'center' }}>
                <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--primary)' }}>{bdg.title}</h4>
                <p style={{ margin: 0, fontSize: '0.8rem' }}>{bdg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STANDORTE */}
      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2>B2B Standorte</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>Lokale Logistik- und Logistikpunkte in Österreich und Deutschland.</p>
        </div>

        <div className="container grid-2">
          {/* AT location */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="badge">AT</span>
              <h3 style={{ fontSize: '1.3rem', margin: 0, color: 'var(--text-primary)' }}>Österreich Zentrale</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <MapPin size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} /> OpenCarBox GmbH, Rennweg 76, 1030 Wien
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Phone size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} /> 01 7981310
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Mail size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} /> b2b@opencarbox.co.at
              </div>
            </div>
          </div>

          {/* DE location */}
          <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="badge">DE</span>
              <h3 style={{ fontSize: '1.3rem', margin: 0, color: 'var(--text-primary)' }}>Deutschland Logistik</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <MapPin size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} /> OpenCarBox GmbH, Brandenburgische Str. 51-51D, 14974 Ludwigsfelde
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Mail size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} /> b2b@opencarbox.co.at
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
