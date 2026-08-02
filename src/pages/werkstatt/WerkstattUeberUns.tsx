import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import teamPhoto from '../../assets/team_photo.jpg';
import metehanArac from '../../assets/metehan_arac.jpg';
import logoImg from '../../assets/logo.png';
import team001 from '../../assets/team_001.jpg';
import team002 from '../../assets/team_002.jpg';
import team009 from '../../assets/team_009.jpg';


export default function WerkstattUeberUns() {
  return (
    <div style={{ animation: 'fadeInUp 0.4s ease-out' }}>
      
      {/* 1. HERO SECTION (Dark background) */}
      <section style={{ background: '#111827', color: '#ffffff', padding: '5rem 0' }}>
        <div className="container grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
          {/* Left Column: Hero Text */}
          <div>
            {/* Orange horizontal line */}
            <div style={{ width: '35px', height: '3px', background: '#FFA800', marginBottom: '1.25rem' }} />
            
            <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#ffffff', lineHeight: '1.1', marginBottom: '1.5rem' }}>
              SEIT 2020<br />
              <span style={{ color: '#FFA800' }}>FÜR WIEN.</span>
            </h1>
            
            <p style={{ color: '#D1D5DB', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Die OpenCarBox GmbH wurde mit einer einfachen Idee gegründet: erstklassige KFZ-Services mit echtem, persönlichem Einsatz. Unter der Führung von Geschäftsführer Arac Metehan haben wir uns als vertrauensvolle Familienwerkstatt in Wien 1030 etabliert.
            </p>
            
            {/* Highlighted Quote Block */}
            <div style={{ borderLeft: '3px solid #FFA800', paddingLeft: '1.25rem', margin: '2rem 0' }}>
              <p style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 700, margin: 0, lineHeight: '1.4' }}>
                „Weil dein Auto zur Familie gehört.“
              </p>
            </div>

            {/* Termin Buchen CTA Button */}
            <Link 
              to="/werkstatt/terminbuchung" 
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
                boxShadow: '0 4px 14px rgba(255, 168, 0, 0.3)'
              }}
            >
              <Calendar size={18} /> TERMIN BUCHEN
            </Link>
          </div>

          {/* Right Column: Hero Image with Caption Bar */}
          <div style={{ position: 'relative' }}>
            <div style={{ overflow: 'hidden', borderRadius: '4px', boxShadow: '0 12px 40px rgba(0,0,0,0.5)' }}>
              <img 
                src={teamPhoto} 
                alt="OpenCarBox Team" 
                style={{ width: '100%', display: 'block', height: 'auto', objectFit: 'cover' }} 
              />
            </div>
            {/* Caption bottom bar inside/overlaying the image layout */}
            <div style={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)', 
              padding: '2.5rem 1.5rem 1.25rem 1.5rem',
              borderBottomLeftRadius: '4px',
              borderBottomRightRadius: '4px'
            }}>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ffffff', marginBottom: '0.15rem' }}>
                Geschäftsführung & Kundenservice
              </div>
              <div style={{ fontWeight: 800, fontSize: '0.75rem', color: '#FFA800', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                PERSÖNLICHE BETREUUNG SEIT 2020
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GESCHICHTE & UNTERNEHMENSDATEN SECTION (Light background) */}
      <section className="section" style={{ background: '#FCFAF6', padding: '6rem 0' }}>
        <div className="container grid-2" style={{ gap: '4.5rem', alignItems: 'start' }}>
          
          {/* Left Column: Brand History */}
          <div>
            <div style={{ width: '35px', height: '3px', background: '#FFA800', marginBottom: '1.25rem' }} />
            
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#111827', marginBottom: '2rem' }}>
              UNSERE GESCHICHTE
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: '#4B5563', fontSize: '1rem', lineHeight: '1.7' }}>
              <p style={{ margin: 0 }}>
                <strong>Über 4 Jahre Vertrauen und Expertise.</strong> Die OpenCarBox GmbH wurde am 16. Juni 2020 mit der Vision gegründet, erstklassige KFZ-Services in Wien anzubieten – mit persönlichem Einsatz, den man sonst nur in einer Familienwerkstatt erlebt.
              </p>
              <p style={{ margin: 0 }}>
                Unter der Führung von Geschäftsführer und KFZ-Meister Arac Metehan haben wir uns schnell als vertrauensvolle Adresse für Automechanik und Autohandel in Wien 1030 etabliert.
              </p>
              <p style={{ margin: 0 }}>
                Als <strong style={{ color: '#FFA800' }}>BestDrive by Continental Partner</strong> stehen wir für höchste Qualitätsstandards, modernste Diagnoseausrüstung und persönlichen Service, der Ihr Fahrzeug in den Mittelpunkt stellt.
              </p>
              <p style={{ margin: 0 }}>
                Was uns von anderen Werkstätten unterscheidet: Wir behandeln Ihr Fahrzeug mit the gleichen Sorgfalt, die wir auch unserem eigenen entgegenbringen würden.
              </p>
            </div>
          </div>

          {/* Right Column: Corporate Metadata Table */}
          <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '4px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.01)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#111827', marginBottom: '2rem', letterSpacing: '0.03em' }}>
              UNTERNEHMENSDATEN
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { label: 'UNTERNEHMEN', val: 'OpenCarBox GmbH' },
                { label: 'GEGRÜNDET', val: '16. Juni 2020' },
                { label: 'GESCHÄFTSFÜHRER', val: 'Arac Metehan' },
                { label: 'ADRESSE', val: 'Rennweg 76, 1030 Wien' },
                { label: 'FIRMENBUCH-NR.', val: 'FN 534799 w' },
                { label: 'UID-NUMMER', val: 'ATU75630015' },
                { label: 'PARTNER', val: 'BestDrive by Continental' }
              ].map((item, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  paddingBottom: '0.8rem', 
                  borderBottom: idx === 6 ? 'none' : '1px solid #F3F4F6' 
                }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.06em' }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#111827', textAlign: 'right' }}>
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. UNSERE MARKEN SECTION (Light background) */}
      <section className="section" style={{ background: '#FCFAF6', borderTop: '1px solid #E5E7EB', paddingBottom: '6rem' }}>
        <div className="container">
          
          {/* Header */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ width: '35px', height: '3px', background: '#FFA800', marginBottom: '1.25rem' }} />
            
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#111827', marginBottom: '1rem' }}>
              UNSERE MARKEN
            </h2>
            
            <p style={{ color: '#4B5563', fontSize: '1.05rem', margin: 0, maxWidth: '800px' }}>
              Zwei Marken, eine Familie. OpenCarBox vereint Werkstatt, Autohandel und Teileversorgung unter einem Dach.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid-2" style={{ gap: '2.5rem' }}>
            
            {/* Card 1: OpenCarBox (Dark) */}
            <div style={{ 
              background: '#111827', 
              color: '#FFFFFF', 
              padding: '3.5rem 2.5rem', 
              borderRadius: '4px', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', height: '40px' }}>
                <img 
                  src={logoImg} 
                  alt="OpenCarBox Logo" 
                  style={{ height: '28px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} 
                />
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                  DIE DACHMARKE
                </h3>
                <p style={{ color: '#D1D5DB', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  OpenCarBox GmbH ist die Muttergesellschaft und vereint alle Geschäftsbereiche: Meisterwerkstatt, Autohandel, digitale Plattform und B2B Partnerschaften. Als BestDrive by Continental Partner stehen wir für höchste Qualität.
                </p>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[
                  'Meisterwerkstatt: Wien 1030',
                  'Autohandel: Wien 1100',
                  'B2B Familien-Werkstatt-Netzwerk',
                  'BestDrive by Continental Partner'
                ].map((point, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: '#E5E7EB', fontWeight: 600 }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FFA800' }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Carvantooo (Light) */}
            <div style={{ 
              background: '#FFFFFF', 
              border: '1px solid #E5E7EB', 
              padding: '3.5rem 2.5rem', 
              borderRadius: '4px', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.01)' 
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', height: '40px', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.6rem', color: '#FFA800', lineHeight: '1' }}>
                  Carvantooo
                </span>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.08em', marginTop: '-2px' }}>
                  by OpenCarBox
                </span>
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#111827', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
                  DER ERSATZTEILSHOP
                </h3>
                <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                  Carvantooo by OpenCarBox ist unser Online-Ersatzteilshop. Über 4.000+ Produkte von 94+ Premiummarken wie Bosch, Brembo und Mann-Filter. Werkstattqualität zum fairen Preis, mit dem Know-how unserer Meisterwerkstatt.
                </p>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {[
                  '4.000+ Ersatzteile online',
                  '94+ Premiummarken',
                  'Versand nach AT & DE',
                  'Werkstatt-Know-How inklusive'
                ].map((point, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: '#374151', fontWeight: 600 }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FFA800' }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. TEAM BANNER (Full-Width Image Overlay) */}
      <section style={{ 
        position: 'relative', 
        backgroundImage: `url(${teamPhoto})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        padding: '7rem 0', 
        color: '#FFFFFF' 
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          background: 'rgba(0, 0, 0, 0.75)' 
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px' }}>
            <div style={{ width: '35px', height: '3px', background: '#FFA800', marginBottom: '1.25rem' }} />
            
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '1.5rem', letterSpacing: '0.02em', lineHeight: '1.1' }}>
              GEMEINSAM FÜR<br />
              <span style={{ color: '#FFA800' }}>IHR FAHRZEUG.</span>
            </h2>
            
            <p style={{ color: '#E5E7EB', fontSize: '1.1rem', lineHeight: '1.7', margin: 0, fontWeight: 500 }}>
              Unser Team aus erfahrenen KFZ-Fachleuten und kundenorientierten Service-Mitarbeitern steht für kompetente Betreuung – persönlich, direkt und zuverlässig.
            </p>
          </div>
        </div>
      </section>

      {/* 5. INDIVIDUAL TEAM MEMBERS (Light background) */}
      <section className="section" style={{ background: '#FCFAF6', paddingTop: '5.5rem', paddingBottom: '6.5rem' }}>
        <div className="container">
          
          {/* Header Description */}
          <div style={{ maxWidth: '800px', marginBottom: '4.5rem' }}>
            <div style={{ width: '35px', height: '3px', background: '#FFA800', marginBottom: '1.25rem' }} />
            
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#111827', marginBottom: '1.5rem', lineHeight: '1.2' }}>
              BEI UNS WISSEN SIE, WER SICH<br />
              UM IHR FAHRZEUG KÜMMERT.
            </h2>
            
            <p style={{ color: '#4B5563', fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>
              Kein anonymes Team, keine wechselnden Gesichter. Jede Person bei OpenCarBox steht mit ihrem Namen für Qualität und persönlichen Service.
            </p>
          </div>

          {/* Subsection Divider */}
          <div style={{ borderBottom: '1px solid #E5E7EB', paddingBottom: '0.75rem', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#9CA3AF', letterSpacing: '0.08em', margin: 0, textTransform: 'uppercase' }}>
              GESCHÄFTSFÜHRUNG
            </h3>
          </div>

          {/* Grid layout for cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 320px))', gap: '2rem' }}>
            
            {/* Card: Arac Metehan */}
            <div style={{ 
              background: '#FFFFFF', 
              border: '1px solid #E5E7EB', 
              borderRadius: '4px', 
              overflow: 'hidden', 
              boxShadow: '0 4px 15px rgba(0,0,0,0.01)' 
            }}>
              {/* Photo Area */}
              <div style={{ position: 'relative', width: '100%', height: '360px', overflow: 'hidden' }}>
                <img 
                  src={metehanArac} 
                  alt="Arac Metehan" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                {/* Overlay Badge */}
                <div style={{ 
                  position: 'absolute', 
                  top: '12px', 
                  left: '12px', 
                  background: '#FFA800', 
                  color: '#000000', 
                  fontSize: '0.65rem', 
                  fontWeight: 800, 
                  padding: '0.35rem 0.75rem', 
                  borderRadius: '2px',
                  letterSpacing: '0.04em'
                }}>
                  GESCHÄFTSFÜHRER & KFZ-MEISTER
                </div>
              </div>

              {/* Text Info Area */}
              <div style={{ padding: '1.5rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', margin: '0 0 0.25rem 0' }}>
                  ARAC METEHAN
                </h4>
                
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#FFA800', letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                  GESCHÄFTSFÜHRER & KFZ-MEISTER
                </div>
                
                <p style={{ fontSize: '0.88rem', color: '#6B7280', lineHeight: '1.6', margin: 0 }}>
                  Gründer der OpenCarBox GmbH. Über 15 Jahre Erfahrung in der KFZ-Branche. Zertifizierter KFZ-Meister und Ihr persönlicher Ansprechpartner.
                </p>
              </div>
            </div>
          </div>

          {/* Subsection Divider: Serviceannahme / Büro */}
          <div style={{ borderBottom: '1px solid #E5E7EB', paddingBottom: '0.75rem', marginTop: '4.5rem', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#9CA3AF', letterSpacing: '0.08em', margin: 0, textTransform: 'uppercase' }}>
              SERVICEANNAHME / BÜRO
            </h3>
          </div>

          {/* Grid layout for Serviceannahme / Büro cards */}
          <div className="grid-3" style={{ gap: '2rem' }}>
            
            {/* Card: Empfangsteam */}
            <div style={{ 
              background: '#FFFFFF', 
              border: '1px solid #E5E7EB', 
              borderRadius: '4px', 
              overflow: 'hidden', 
              boxShadow: '0 4px 15px rgba(0,0,0,0.01)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '360px', overflow: 'hidden' }}>
                <img 
                  src={team001} 
                  alt="Empfangsteam" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', margin: '0 0 0.25rem 0' }}>
                  EMPFANGSTEAM
                </h4>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#FFA800', letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                  SERVICEANNAHME
                </div>
                <p style={{ fontSize: '0.88rem', color: '#6B7280', lineHeight: '1.6', margin: 0 }}>
                  Erste Anlaufstelle für alle Kunden. Terminvergabe, Beratung und Koordination.
                </p>
              </div>
            </div>

            {/* Card: Büro-Team */}
            <div style={{ 
              background: '#FFFFFF', 
              border: '1px solid #E5E7EB', 
              borderRadius: '4px', 
              overflow: 'hidden', 
              boxShadow: '0 4px 15px rgba(0,0,0,0.01)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '360px', overflow: 'hidden' }}>
                <img 
                  src={team002} 
                  alt="Büro-Team" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', margin: '0 0 0.25rem 0' }}>
                  BÜRO-TEAM
                </h4>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#FFA800', letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                  VERWALTUNG & ABWICKLUNG
                </div>
                <p style={{ fontSize: '0.88rem', color: '#6B7280', lineHeight: '1.6', margin: 0 }}>
                  Rechnungsstellung, Versicherungsabwicklung und Kundenbetreuung.
                </p>
              </div>
            </div>

            {/* Card: Kundenservice-Duo */}
            <div style={{ 
              background: '#FFFFFF', 
              border: '1px solid #E5E7EB', 
              borderRadius: '4px', 
              overflow: 'hidden', 
              boxShadow: '0 4px 15px rgba(0,0,0,0.01)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '360px', overflow: 'hidden' }}>
                <img 
                  src={team009} 
                  alt="Kundenservice-Duo" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', margin: '0 0 0.25rem 0' }}>
                  KUNDENSERVICE-DUO
                </h4>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#FFA800', letterSpacing: '0.05em', marginBottom: '1rem', textTransform: 'uppercase' }}>
                  KUNDENBERATUNG
                </div>
                <p style={{ fontSize: '0.88rem', color: '#6B7280', lineHeight: '1.6', margin: 0 }}>
                  Persönliche Beratung und individuelle Lösungen für Ihr Fahrzeug.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
