import { Link } from 'react-router-dom';
import { 
  Calendar, ArrowRight, 
  Phone, CheckCircle
} from 'lucide-react';
import mascotWerkstatt from '../../assets/opencarbox-mechanic-2.png';
import metehanArac from '../../assets/metehan_arac.jpg';
import teamPhoto from '../../assets/team_photo.jpg';
import werkstattReception from '../../assets/werkstatt_reception.jpg';
import jahresserviceImg from '../../assets/Kachel_Jahresservice_557x324.webp';
import klimaserviceImg from '../../assets/BD_LU_KLIMA_1920x1080.avif';
import desinfektionImg from '../../assets/BD_Keyvisual_LU_Klima_1920x1080 (1).avif';
import oelwechselImg from '../../assets/Kachel_Oelwechsel.avif';

export default function WerkstattHome() {
  const services = [
    { name: '§57a Überprüfung', price: 'ab € 55', url: '/werkstatt/leistungen/pickerl' },
    { name: 'KFZ-Inspektion', price: 'auf Anfrage', url: '/werkstatt/leistungen/inspektion' },
    { name: 'Lack & Karosserie', price: 'auf Anfrage', url: '/werkstatt/leistungen/lack-karosserie' },
    { name: 'Reifenservice & Achsvermessung', price: 'ab € 40', url: '/werkstatt/leistungen/reifenservice' },
    { name: 'Klimaservice', price: 'ab € 65', url: '/werkstatt/leistungen/klimaservice' },
    { name: 'Ölwechsel & Wartung', price: 'ab € 39', url: '/werkstatt/leistungen/oelwechsel' },
    { name: 'DPF-Reinigung', price: 'ab € 120', url: '/werkstatt/leistungen/dpf-reinigung' },
    { name: 'Autoglaserei', price: 'auf Anfrage', url: '/werkstatt/leistungen/autoglaserei' },
    { name: 'Bremsenservice', price: 'auf Anfrage', url: '/werkstatt/leistungen/bremsenservice' },
    { name: 'Fahrzeugdiagnose', price: 'auf Anfrage', url: '/werkstatt/leistungen/fahrzeugdiagnose' },
    { name: 'Batterieservice', price: 'ab € 25', url: '/werkstatt/leistungen/batterieservice' },
    { name: 'Fahrwerk & Stoßdämpfer', price: 'auf Anfrage', url: '/werkstatt/leistungen/fahrwerk' },
    { name: 'Getriebeservice', price: 'ab € 150', url: '/werkstatt/leistungen/getriebeservice' }
  ];

  return (
    <div style={{ animation: 'fadeInUp 0.4s ease-out' }}>
      
      {/* 1. HERO SECTION */}
      <section className="hero-section" style={{ overflow: 'hidden', position: 'relative' }}>
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div className="hero-content">
            {/* Top Badge */}
            <div className="hero-badge">
              • BESTDRIVE PARTNER · WIEN 1030
            </div>
 
            {/* Heading */}
            <h1 className="hero-title">
              WERKSTATTSERVICE<br />
              IN WIEN.
            </h1>
 
            {/* Subheading */}
            <h2 className="hero-subtitle">
              WEIL DEIN AUTO ZUR FAMILIE GEHÖRT.
            </h2>
 
            {/* Descriptions */}
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem', color: '#374151', fontWeight: 500 }}>
              Ihre persönliche Familienwerkstatt in Wien. Bei OpenCarBox kümmern wir uns um Ihr Fahrzeug so, als wäre es unser eigenes.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '2.5rem', color: '#4B5563' }}>
              Ehrliche Beratung, transparente Preise und zuverlässiger Service stehen bei uns an erster Stelle. Ob Inspektion, Reparatur oder Pickerl – wir sorgen dafür, dass Ihr Auto sicher und zuverlässig unterwegs ist.
            </p>
 
            {/* Action Buttons */}
            <div className="hero-buttons">
              <Link 
                to="/werkstatt/terminbuchung" 
                className="btn" 
                style={{ 
                  background: '#FFA800', 
                  color: '#000000', 
                  fontWeight: 700, 
                  padding: '0.8rem 1.75rem', 
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.88rem',
                  border: 'none',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                <Calendar size={18} /> TERMIN VEREINBAREN
              </Link>
              <Link 
                to="/werkstatt/leistungen" 
                className="btn" 
                style={{ 
                  background: 'transparent', 
                  color: '#111827', 
                  fontWeight: 700, 
                  padding: '0.8rem 1.75rem', 
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.88rem',
                  border: '1.5px solid #111827'
                }}
              >
                UNSERE LEISTUNGEN <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          
          {/* Empty column to reserve space on desktop */}
          <div className="desktop-only" style={{ height: '400px' }} />
        </div>
 
        {/* Absolute Mascot aligned to the right viewport edge */}
        <img 
          src={mascotWerkstatt} 
          alt="OpenCarBox Alien Next To Tire" 
          className="hero-mascot-abs"
        />
 
        {/* Stats Row */}
        <div className="container" style={{ marginTop: '4.5rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(0,0,0,0.08)' }}>
          <div className="stats-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            {[
              { num: '4+', text: 'Jahre Erfahrung' },
              { num: '100+', text: 'Bewertungen' },
              { num: '10', text: 'Leistungen' },
              { num: '§57a', text: 'Zertifiziert' }
            ].map((stat, i) => (
              <div key={i} className="stats-item">
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#111827', fontFamily: 'var(--font-heading)', lineHeight: '1' }}>{stat.num}</div>
                <div style={{ fontSize: '0.78rem', color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.4rem', fontWeight: 700 }}>{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. WILLKOMMEN SECTION */}
      <section className="section" style={{ 
        background: '#FFFFFF', 
        borderBottom: '1px solid #E5E7EB', 
        borderTop: '1px solid #E5E7EB', 
        padding: '5rem 0' 
      }}>
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          
          {/* Left Column: Photo */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img 
              src={metehanArac} 
              alt="Metehan Arac in BestDrive Office" 
              style={{ 
                width: '100%', 
                maxWidth: '460px', 
                height: 'auto', 
                borderRadius: '4px', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)' 
              }} 
            />
          </div>

          {/* Right Column: Welcome Content */}
          <div>
            {/* Orange horizontal line */}
            <div style={{ width: '35px', height: '3px', background: '#FFA800', marginBottom: '1.25rem' }} />

            {/* Heading */}
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 800, 
              color: '#111827', 
              marginBottom: '1.5rem', 
              lineHeight: '1.2' 
            }}>
              WILLKOMMEN IN DER<br />
              <span style={{ color: '#FFA800' }}>OPENCARBOX FAMILIE.</span>
            </h2>

            {/* Paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <p style={{ color: '#374151', fontSize: '1rem', lineHeight: '1.6', margin: 0, fontWeight: 600 }}>
                Bei OpenCarBox glauben wir daran, dass eine Werkstatt mehr sein sollte als nur ein Ort für Reparaturen.
              </p>
              <p style={{ color: '#4B5563', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
                Unser Ziel ist es, eine Werkstatt zu sein, in der sich unsere Kunden verstanden und gut aufgehoben fühlen. Wir nehmen uns Zeit für Ihre Fragen, erklären transparent, was an Ihrem Fahrzeug gemacht wird, und finden gemeinsam die beste Lösung.
              </p>
              <p style={{ color: '#4B5563', fontSize: '1rem', lineHeight: '1.6', margin: 0 }}>
                Denn für uns sind unsere Kunden nicht nur Kunden – sie gehören zur Familie.
              </p>
            </div>

            {/* Signature / Name block */}
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ color: '#111827', fontSize: '1.15rem', fontWeight: 800, margin: '0 0 0.15rem 0' }}>ARAC METEHAN</h4>
              <span style={{ color: '#9CA3AF', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em' }}>GESCHÄFTSFÜHRER & KFZ-MEISTER</span>
            </div>

            {/* CTA Button */}
            <div>
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
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                <Calendar size={18} /> TERMIN VEREINBAREN
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. WAS FAMILIENWERKSTATT BEDEUTET */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2>Was Familienwerkstatt für uns bedeutet.</h2>
          <p style={{ maxWidth: '650px', margin: '0 auto' }}>
            Bei uns sind Sie keine Auftragsnummer. Jedes Fahrzeug, das bei uns ankommt, wird so behandelt, als gehörte es uns selbst.
          </p>
        </div>
        
        <div className="container grid-4">
          {[
            {
              title: 'Persönliche Betreuung',
              desc: 'Kein Callcenter, keine anonymen Abläufe. Wir kennen Ihr Fahrzeug und Ihre Geschichte – von der ersten Inspektion bis zum nächsten Pickerl.'
            },
            {
              title: 'Ehrliche Preise',
              desc: 'Klarer Kostenvoranschlag vor jedem Eingriff. Was besprochen wird, wird auch so abgerechnet. Keine versteckten Positionen.'
            },
            {
              title: 'Echte Verantwortung',
              desc: 'Hinter jeder Reparatur steht ein Name. Unser Team übernimmt Verantwortung – nicht nur für die Arbeit, sondern auch für Ihre Sicherheit.'
            },
            {
              title: 'Handschlagqualität',
              desc: 'Wien, Rennweg 76. Seit 2020. Eine Werkstatt, der man vertraut – weil wir Versprechen halten und Ihr Fahrzeug mit Sorgfalt behandeln.'
            }
          ].map((item, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '2rem 1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '1rem', right: '1.5rem', fontSize: '2.5rem', fontWeight: 800, color: 'rgba(255, 168, 0, 0.16)', fontFamily: 'var(--font-heading)' }}>
                {`0${idx+1}`}
              </span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. LEISTUNGEN GRID */}
      <section className="section section-alt">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem' }}>
          <div>
            <h2>Alles, was Ihr Fahrzeug braucht.</h2>
            <p style={{ margin: 0 }}>Von der gesetzlichen §57a Überprüfung bis zur Karosserie – sorgfältig durchgeführt, ehrlich abgerechnet. Alles unter einem Dach.</p>
          </div>
          <Link to="/werkstatt/leistungen" className="btn btn-secondary">Alle Leistungen</Link>
        </div>

        <div className="container grid-3">
          {services.slice(0, 9).map((srv, i) => (
            <div key={i} className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ margin: 0, fontSize: '1.15rem' }}>{srv.name}</h4>
                <div style={{ color: 'var(--primary)', fontWeight: 700, marginTop: '0.5rem', fontSize: '0.95rem' }}>{srv.price}</div>
              </div>
              <Link to={srv.url} style={{ display: 'flex', color: 'var(--primary)', border: '1px solid var(--border-color)', borderRadius: '50%', padding: '0.6rem' }}>
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GOOGLE REZENSIONEN */}
      <section className="section" style={{ background: 'radial-gradient(circle at 10% 50%, rgba(255,168,0,0.05) 0%, transparent 50%)' }}>
        <div className="container">
          <div className="elfsight-app-7e2e5c28-800d-4e53-aa49-c0e14944cc4d" data-elfsight-app-lazy=""></div>
        </div>
      </section>

      {/* 6. TEAM HIGHLIGHT */}
      <section className="section" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72)), url(${teamPhoto})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '7.5rem 0',
        color: '#FFFFFF'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div style={{ maxWidth: '600px' }}>
            {/* Orange horizontal line */}
            <div style={{ width: '40px', height: '3px', background: '#FFA800', marginBottom: '1.5rem' }} />

            {/* Heading */}
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 800, 
              color: '#FFFFFF', 
              marginBottom: '1.5rem', 
              lineHeight: '1.2' 
            }}>
              WIR WISSEN, WER<br />
              IHR AUTO IN DIE<br />
              <span style={{ color: '#FFA800' }}>HÄNDE BEKOMMT.</span>
            </h2>

            {/* Paragraph text */}
            <p style={{ 
              color: '#E5E7EB', 
              fontSize: '1.05rem', 
              lineHeight: '1.6', 
              marginBottom: '2.5rem',
              maxWidth: '520px'
            }}>
              Bei OpenCarBox arbeitet kein anonymes Team. Hinter jeder Reparatur, jedem Service und jeder Beratung steht ein Mensch mit einem Namen – und dem Anspruch, wirklich gute Arbeit zu leisten.
            </p>

            {/* CTA Button */}
            <div>
              <Link 
                to="/werkstatt/ueber-uns" 
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
                UNSER TEAM KENNENLERNEN <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WIE WIR ARBEITEN */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2>Wie wir arbeiten.</h2>
          <p style={{ maxWidth: '650px', margin: '0 auto' }}>
            Familienwerkstatt ist für uns kein Marketingbegriff. Es beschreibt, wie wir jeden Tag arbeiten: fair, persönlich, verantwortungsbewusst. Wir erklären, was wir tun. Wir fragen, bevor wir anfangen. Und wir gehen erst dann zufrieden nach Hause, wenn auch Sie es sind.
          </p>
        </div>

        <div className="container grid-3" style={{ marginBottom: '3.5rem' }}>
          {[
            { title: 'Transparenz', text: 'Sie wissen immer, was gemacht wird und was es kostet – bevor wir anfangen.' },
            { title: 'Qualität', text: 'OEM-Teile, Markenöle, saubere Arbeit.' },
            { title: 'Verlässlichkeit', text: 'Direkter Kontakt, klare Kommunikation, verbindliche Termine.' }
          ].map((val, idx) => (
            <div key={idx} className="glass-card" style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}>
              <div style={{ width: '50px', height: '50px', background: 'var(--primary-glow)', color: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                <CheckCircle size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem' }}>{val.title}</h3>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>{val.text}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/werkstatt/terminbuchung" className="btn btn-primary">Termin vereinbaren</Link>
        </div>
      </section>

      {/* 8. KONTAKT WERKSTATT */}
      <section className="section section-alt">
        <div className="container grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
          {/* Left Column: Image */}
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-lg)', height: '400px' }}>
            <img 
              src={werkstattReception} 
              alt="OpenCarBox Werkstatt Rezeption" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Right Column: Text & Contact Details */}
          <div>
            <div style={{ display: 'inline-block', width: '30px', height: '4px', background: 'var(--primary)', marginBottom: '1rem' }}></div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0 0 0.75rem 0', textTransform: 'uppercase', fontFamily: 'var(--font-heading)', lineHeight: '1.1' }}>
              KOMMEN SIE VORBEI.<br />
              <span style={{ color: 'var(--primary)' }}>WIEN 1030.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: '1.6' }}>
              Kein Automat, kein Warteband, keine Vertretung. Unser Team ist persönlich für Sie da – von der ersten Frage bis zur Fahrzeugübergabe.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
              {[
                { label: 'ADRESSE', value: 'Rennweg 76, 1030 Wien' },
                { label: 'TELEFON', value: '01 7981310' },
                { label: 'ÖFFNUNGSZEITEN', value: 'Mo–Fr 08:00–18:00 Uhr, Sa 08:00–13:00 Uhr' },
                { label: 'HOL- & BRINGSERVICE', value: 'auf Anfrage verfügbar' }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', fontSize: '0.95rem' }}>
                  <div style={{ width: '150px', fontWeight: 700, color: 'var(--text-secondary)', fontSize: '0.75rem', letterSpacing: '0.05em', alignSelf: 'center' }}>
                    {item.label}
                  </div>
                  <div style={{ flex: 1, fontWeight: 600, color: 'var(--text-primary)' }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/werkstatt/kontakt" className="btn" style={{ background: '#FFFFFF', border: '1px solid #111827', color: '#111827', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em', padding: '0.75rem 1.5rem', fontWeight: 600 }}>
                Kontakt & Anfahrt
              </Link>
              <a href="https://www.google.com/maps/search/OpenCarBox+GmbH+Wien+Rennweg+76/@48.193,16.384,17z" target="_blank" rel="noreferrer" className="btn" style={{ background: 'var(--primary)', color: '#000000', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em', padding: '0.75rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Route planen <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* 10. AKTIONEN / BESTDRIVE */}
      <section className="section" style={{ 
        background: '#121620', 
        borderBottom: '1px solid #1E293B', 
        padding: '5rem 0',
        color: '#FFFFFF'
      }}>
        {/* Title row */}
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFFFFF', margin: '0 0 1rem 0', lineHeight: '1.1' }}>
              AKTUELLE AKTIONEN<br />
              <span style={{ color: '#FFA800' }}>& ANGEBOTE.</span>
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '0.95rem', margin: 0, maxWidth: '500px', lineHeight: '1.6' }}>
              Profitieren Sie von unseren aktuellen Werkstatt-Angeboten – in Zusammenarbeit mit BestDrive by Continental.
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#FFA800', fontWeight: 700 }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
            BestDrive Partner
          </div>
        </div>

        {/* 2x2 Grid of Promo Cards */}
        <div className="container grid-2" style={{ gap: '2rem', marginBottom: '3rem' }}>
          {[
            {
              title: 'Jahresservice',
              badge: 'Top-Angebote',
              price: '195,– Euro',
              img: jahresserviceImg,
              desc: 'BestDrive Jahresservice zum Sonderpreis – für ein sicheres, zuverlässiges und wertstabiles Fahrzeug.'
            },
            {
              title: 'Klimaservice',
              badge: 'Aktion',
              price: '89,– Euro',
              img: desinfektionImg,
              desc: 'Klimaanlagen-Service zum Aktionspreis. Für frische, saubere Luft in Ihrem Fahrzeug – gültig bis 29. Mai 2026.'
            },
            {
              title: 'Innenraum-Desinfektion',
              badge: '',
              price: '69,60 Euro',
              img: klimaserviceImg,
              desc: 'Profi-Reinigung für saubere und gesunde Luft in Ihrem Auto – allergikerfreundliches Verfahren inklusive.'
            },
            {
              title: 'Ölwechsel',
              badge: 'Aktionspreis',
              price: '69,– Euro',
              img: oelwechselImg,
              desc: 'Verwöhnen Sie Ihren Motor mit frischem Markenöl. Verbesserte Laufeigenschaften und verlängerte Lebensdauer.'
            }
          ].map((act, i) => (
            <div key={i} className="glass-card" style={{ 
              background: '#1A1F2C', 
              border: '1px solid #2D3748', 
              borderRadius: '8px', 
              overflow: 'hidden', 
              display: 'flex', 
              flexDirection: 'column', 
              height: '100%',
              padding: 0
            }}>
              {/* Image Container with overlays */}
              <div style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}>
                <img src={act.img} alt={act.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                
                {act.badge && (
                  <span style={{ 
                    position: 'absolute', 
                    top: '1rem', 
                    left: '1rem', 
                    background: '#FFA800', 
                    color: '#000000', 
                    padding: '0.3rem 0.75rem', 
                    fontSize: '0.72rem', 
                    fontWeight: 800, 
                    textTransform: 'uppercase', 
                    borderRadius: '2px', 
                    zIndex: 2 
                  }}>
                    {act.badge}
                  </span>
                )}

                <span style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  right: 0, 
                  background: '#FFA800', 
                  color: '#000000', 
                  padding: '0.5rem 1.25rem', 
                  fontSize: '1.2rem', 
                  fontWeight: 800, 
                  borderTopLeftRadius: '4px', 
                  zIndex: 2 
                }}>
                  {act.price}
                </span>
              </div>

              {/* Text Content */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', margin: '0 0 0.5rem 0' }}>{act.title}</h3>
                  <p style={{ color: '#9CA3AF', fontSize: '0.88rem', lineHeight: '1.5', margin: '0 0 1.5rem 0' }}>{act.desc}</p>
                </div>

                <div>
                  <Link 
                    to="/werkstatt/terminbuchung" 
                    className="btn" 
                    style={{
                      background: '#FFA800',
                      color: '#000000',
                      fontWeight: 700,
                      padding: '0.65rem 1.25rem',
                      borderRadius: '4px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.85rem',
                      border: 'none'
                    }}
                  >
                    <Calendar size={16} /> JETZT TERMIN BUCHEN
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info row */}
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.8rem', color: '#6B7280', margin: 0 }}>
            Alle Aktionspreise in Zusammenarbeit mit BestDrive by Continental. Gültig für Privatkunden. Nicht kombinierbar mit anderen Rabatten.
          </p>
          <a 
            href="https://www.bestdrive.at/autowerkstatt/opencarbox-gmbh-wien-rennweg.html" 
            target="_blank" 
            rel="noreferrer" 
            style={{ 
              color: '#FFA800', 
              fontWeight: 700, 
              fontSize: '0.88rem', 
              textDecoration: 'none', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.4rem' 
            }}
          >
            Alle BestDrive Aktionen →
          </a>
        </div>
      </section>

      {/* 11. SON CTA BÖLÜMÜ */}
      <section className="section" style={{ background: 'linear-gradient(180deg, var(--bg-dark) 0%, rgba(255, 168, 0, 0.05) 100%)', textAlign: 'center', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>Erzählen Sie uns, worum es geht.</h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '2.5rem' }}>
            Weil Ihr Auto zur Familie gehört – vereinbaren Sie Ihren Termin unkompliziert und direkt mit unserem Team.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link to="/werkstatt/terminbuchung" className="btn btn-primary">Jetzt buchen</Link>
            <a href="tel:017981310" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={18} /> 01 7981310 anrufen
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          background: radial-gradient(circle at 82% 50%, #FFA800 0%, #FFD685 25%, #FCFAF5 60%, #FCFAF5 100%);
          border-bottom: 1px solid #E5E7EB;
          padding: 5rem 0 4rem 0;
        }
        .hero-content {
          text-align: left;
        }
        .hero-badge {
          margin-bottom: 1.5rem; 
          display: inline-flex; 
          align-items: center;
          border: 1px solid rgba(255, 168, 0, 0.4);
          background: #FFFFFF;
          color: #B27600;
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .hero-title {
          font-size: 3.6rem;
          line-height: 1.1;
          margin-bottom: 0.5rem;
          color: #111827;
          font-weight: 800;
          font-family: var(--font-heading);
          letter-spacing: -0.02em;
        }
        .hero-subtitle {
          font-size: 2.1rem;
          color: #FFA800;
          font-weight: 800;
          font-family: var(--font-heading);
          margin-bottom: 2rem;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }
        .hero-buttons {
          display: flex; 
          gap: 1rem; 
          flex-wrap: wrap;
        }
        .hero-mascot-abs {
          position: absolute;
          right: 0;
          top: 45%;
          transform: translateY(-50%);
          height: 80%;
          max-height: 480px;
          width: auto;
          object-fit: contain;
          z-index: 1;
          pointer-events: none;
          user-select: none;
        }
        .stats-item {
          flex: 1 1 200px;
          min-width: 150px;
        }
        @media (max-width: 1024px) {
          .hero-section {
            background: radial-gradient(circle at 50% 100%, rgba(255, 168, 0, 0.15) 0%, rgba(255, 214, 133, 0.06) 40%, #FCFAF5 100%);
            padding: 3.5rem 0 2.5rem 0;
          }
          .hero-content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-title {
            font-size: 2.6rem;
            line-height: 1.15;
            margin-bottom: 0.8rem;
          }
          .hero-subtitle {
            font-size: 1.6rem;
            margin-bottom: 1.5rem;
            line-height: 1.25;
          }
          .hero-buttons {
            justify-content: center;
          }
          .hero-mascot-abs {
            position: relative;
            right: auto;
            top: auto;
            transform: none;
            margin: 2.5rem auto 0 auto;
            max-width: 420px;
            width: 100%;
            height: auto;
            display: block;
          }
          .stats-row {
            justify-content: center !important;
            gap: 1.5rem !important;
          }
          .stats-item {
            text-align: center;
            flex: 1 1 130px;
            min-width: 120px;
          }
        }
        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }
          .hero-subtitle {
            font-size: 1.25rem;
          }
        }
      `}</style>

    </div>
  );
}
