import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

export default function WerkstattLeistungen() {
  const services = [
    { 
      name: '§57a Überprüfung', 
      price: 'ab € 55', 
      slug: 'pickerl',
      desc: 'Die gesetzliche §57a Überprüfung (Pickerl) für Ihr Fahrzeug. Schnell, zuverlässig und gesetzeskonform.',
      cat: 'Prüfung'
    },
    { 
      name: 'KFZ-Inspektion', 
      price: 'auf Anfrage', 
      slug: 'inspektion',
      desc: 'Herstellerkonforme Inspektion für alle Marken zur Aufrechterhaltung der vollen Fahrzeuggarantie.',
      cat: 'Wartung'
    },
    { 
      name: 'Lack & Karosserie', 
      price: 'auf Anfrage', 
      slug: 'lack-karosserie',
      desc: 'Unfallreparatur, Smart Repair bei Dellen und Kratzern sowie präzise Lackierungsarbeiten.',
      cat: 'Karosserie'
    },
    { 
      name: 'Reifenservice & Achsvermessung', 
      price: 'ab € 40', 
      slug: 'reifenservice',
      desc: 'Reifenwechsel, Auswuchten, Einlagerung und präzise 3D-Achsvermessung für beste Spurtreue.',
      cat: 'Reifen'
    },
    { 
      name: 'Klimaservice', 
      price: 'ab € 65', 
      slug: 'klimaservice',
      desc: 'Befüllung, Dichtheitsprüfung und Desinfektion Ihrer Klimaanlage (R134a & R1234yf).',
      cat: 'Komfort'
    },
    { 
      name: 'Ölwechsel & Wartung', 
      price: 'ab € 39', 
      slug: 'oelwechsel',
      desc: 'Professioneller Ölwechsel mit Markenölen und Tausch des Ölfilters zum fairen Komplettpreis.',
      cat: 'Wartung'
    },
    { 
      name: 'DPF-Reinigung', 
      price: 'ab € 120', 
      slug: 'dpf-reinigung',
      desc: 'Professionelle Reinigung Ihres Dieselpartikelfilters zur Wiederherstellung der vollen Leistung.',
      cat: 'Motor'
    },
    { 
      name: 'Autoglaserei', 
      price: 'auf Anfrage', 
      slug: 'autoglaserei',
      desc: 'Steinschlagreparatur und kompletter Tausch von Windschutzscheiben inklusive ADAS-Kalibrierung.',
      cat: 'Glas'
    },
    { 
      name: 'Bremsenservice', 
      price: 'auf Anfrage', 
      slug: 'bremsenservice',
      desc: 'Sicherheitsprüfung und Tausch von Bremsbelägen und Bremsscheiben in OEM-Qualität.',
      cat: 'Sicherheit'
    },
    { 
      name: 'Fahrzeugdiagnose', 
      price: 'auf Anfrage', 
      slug: 'fahrzeugdiagnose',
      desc: 'Fehlerspeicher auslesen mit modernster Diagnosetechnologie und fundierter Fehleranalyse.',
      cat: 'Diagnose'
    },
    { 
      name: 'Batterieservice', 
      price: 'ab € 25', 
      slug: 'batterieservice',
      desc: 'Prüfung, Ladung und Tausch der Starterbatterie inklusive Anlernen im Fahrzeugsteuergerät.',
      cat: 'Elektrik'
    },
    { 
      name: 'Fahrwerk & Stoßdämpfer', 
      price: 'auf Anfrage', 
      slug: 'fahrwerk',
      desc: 'Tausch von Stoßdämpfern, Federn und Fahrwerksteilen für sicheren Straßenkontakt.',
      cat: 'Fahrwerk'
    },
    { 
      name: 'Getriebeservice', 
      price: 'ab € 150', 
      slug: 'getriebeservice',
      desc: 'Getriebeölwechsel und Getriebespülung für Automatik- und Schaltgetriebe zur Vorbeugung von Schäden.',
      cat: 'Antrieb'
    }
  ];

  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out' }}>
      
      {/* Title */}
      <div style={{ marginBottom: '4rem', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '1rem' }}>Unsere Leistungen</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          Von der gesetzlichen §57a Überprüfung bis zur Karosserie – wir bieten alle KFZ-Services unter einem Dach. Professionell, transparent, fair.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid-3" style={{ marginBottom: '5rem' }}>
        {services.map((service, idx) => (
          <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span className="badge">{service.cat}</span>
                <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.95rem' }}>{service.price}</span>
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#FFF' }}>{service.name}</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
                {service.desc}
              </p>
            </div>
            
            <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,168,0,0.05)', paddingTop: '1.25rem' }}>
              <Link to={`/werkstatt/leistungen/${service.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                Mehr erfahren <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className="glass-card" style={{ 
        background: 'linear-gradient(135deg, var(--bg-surface) 0%, rgba(255, 168, 0, 0.05) 100%)', 
        padding: '3.5rem', 
        borderRadius: 'var(--radius-lg)', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap', 
        gap: '2rem' 
      }}>
        <div>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: '#FFF' }}>Bereit für den nächsten Service?</h3>
          <p style={{ margin: 0, fontSize: '1rem' }}>Buchen Sie Ihren Wunschtermin unkompliziert direkt online in wenigen Schritten.</p>
        </div>
        <Link to="/werkstatt/terminbuchung" className="btn btn-primary">
          <Calendar size={18} /> Termin buchen
        </Link>
      </div>

    </div>
  );
}
