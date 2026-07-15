import { Shield, Sparkles, Users } from 'lucide-react';
import teamPhoto from '../../assets/team_photo.jpg';

export default function WerkstattUeberUns() {
  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out' }}>
      
      {/* Hero section */}
      <div style={{ marginBottom: '4rem', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '1.25rem' }}>Seit 2020 für Wien.</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
          Die OpenCarBox GmbH wurde am 16. Juni 2020 mit einer einfachen Idee gegründet: erstklassige KFZ-Services mit echtem, persönlichem Einsatz.
        </p>
      </div>

      {/* Corporate Metadata Table / Grid */}
      <div className="grid-2" style={{ alignItems: 'start', marginBottom: '5rem' }}>
        <div className="glass-card">
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)' }}>
            <Shield size={20} /> Unternehmensdaten
          </h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
            <tbody>
              {[
                { label: 'Unternehmen', val: 'OpenCarBox GmbH' },
                { label: 'Gegründet', val: '16. Juni 2020' },
                { label: 'Geschäftsführer', val: 'Arac Metehan' },
                { label: 'Adresse', val: 'Rennweg 76, 1030 Wien' },
                { label: 'Firmenbuch-Nr.', val: 'FN 534799 w' },
                { label: 'UID-Nummer', val: 'ATU75630015' },
                { label: 'Kooperationspartner', val: 'BestDrive by Continental' }
              ].map((row, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '0.8rem 0', fontWeight: 600, color: 'var(--text-primary)' }}>{row.label}</td>
                  <td style={{ padding: '0.8rem 0', color: 'var(--text-secondary)' }}>{row.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Brand Division descriptions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2 style={{ fontSize: '1.75rem', margin: 0 }}>Unsere Marken. Zwei Marken, eine Familie.</h2>
          
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>OpenCarBox</h3>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Meisterwerkstatt, Autohandel, B2B-Partnerschaften und stolzer BestDrive by Continental Partner. Unsere physischen Standorte in Wien stehen für kompromisslose Reparaturqualität und vertrauensvollen Autokauf.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>Carvantooo</h3>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
              Unser Online-Ersatzteilshop mit über 4.000+ Produkten von 94+ Premiummarken (wie Bosch, Brembo, Mann-Filter) und schnellem Versand in ganz Österreich (AT) und Deutschland (DE).
            </p>
          </div>
        </div>
      </div>

      {/* Corporate Values */}
      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Unsere Werte</h2>
        <div className="grid-3">
          {[
            { title: 'Transparenz', desc: 'Wir kommunizieren jeden Arbeitsschritt und kalkulieren ehrlich vor jedem Handgriff.' },
            { title: 'Qualität', desc: 'Wir arbeiten mit KFZ-Meisterstandard und verbauen ausschließlich hochwertige OEM-Teile.' },
            { title: 'Kundenservice', desc: 'Für uns sind Sie keine Nummer – wir betreuen Sie auf Augenhöhe und behandeln Ihr Auto wie unser eigenes.' }
          ].map((val, idx) => (
            <div key={idx} className="glass-card" style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
              <div style={{ width: '44px', height: '44px', background: 'rgba(255,168,0,0.05)', color: 'var(--primary)', border: '1px solid var(--border-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <Sparkles size={18} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{val.title}</h3>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Details */}
      <div className="glass-card" style={{ padding: '3rem', marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '2.5rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <Users size={28} style={{ color: 'var(--primary)' }} /> Gemeinsam für Ihr Fahrzeug.
        </h2>
        
        <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
          {/* Left: Team Photo */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img 
              src={teamPhoto} 
              alt="OpenCarBox Team" 
              style={{ 
                width: '100%', 
                maxWidth: '480px', 
                height: 'auto', 
                borderRadius: '8px', 
                boxShadow: '0 8px 30px rgba(0,0,0,0.1)' 
              }} 
            />
          </div>

          {/* Right: Team Lists */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.2rem' }}>Führung & Annahme</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.92rem' }}>
                <li style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                  <strong>Arac Metehan</strong> <br />
                  <span style={{ color: 'var(--text-secondary)' }}>Geschäftsführer & KFZ-Meister · 15+ Jahre Erfahrung</span>
                </li>
                <li style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                  <strong>Serviceannahme</strong> <br />
                  <span style={{ color: 'var(--text-secondary)' }}>Terminvergabe, Beratung & Ablaufkoordination</span>
                </li>
                <li style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                  <strong>Büro-Team</strong> <br />
                  <span style={{ color: 'var(--text-secondary)' }}>Rechnungsstellung & direkte Versicherungsabwicklung</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.2rem' }}>Werkstatt & Logistik</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.92rem' }}>
                <li style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                  <strong>3 Werkstatt-Techniker</strong> <br />
                  <span style={{ color: 'var(--text-secondary)' }}>Erfahrene Spezialisten für Instandsetzung, Diagnose & Pickerl</span>
                </li>
                <li style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                  <strong>Standort-Team</strong> <br />
                  <span style={{ color: 'var(--text-secondary)' }}>Fahrzeugannahme, Übergabe & Hol- und Bringservice</span>
                </li>
                <li>
                  <strong>2 Service-Mitarbeiterinnen</strong> <br />
                  <span style={{ color: 'var(--text-secondary)' }}>Kundenbetreuung am Standort Wien Rennweg</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
