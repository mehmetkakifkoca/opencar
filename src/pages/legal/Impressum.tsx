

export default function Impressum() {
  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out', maxWidth: '800px' }}>
      <h1 style={{ marginBottom: '2rem' }}>Impressum</h1>
      
      <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.7' }}>
        <div>
          <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Diensteanbieter & Medieninhaber</h3>
          <p style={{ color: '#FFF', margin: 0, fontWeight: 600 }}>OpenCarBox GmbH</p>
          <p style={{ margin: 0 }}>Rennweg 76, 1030 Wien</p>
          <p style={{ margin: 0 }}>Österreich</p>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

        <div>
          <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Vertretungsberechtigte Organe</h3>
          <p style={{ margin: 0 }}><strong>Geschäftsführer:</strong> Arac Metehan</p>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

        <div>
          <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Kontakt</h3>
          <p style={{ margin: 0 }}><strong>Telefon:</strong> 01 7981310</p>
          <p style={{ margin: 0 }}><strong>E-Mail:</strong> office@opencarbox.co.at</p>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

        <div>
          <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Unternehmensregister</h3>
          <p style={{ margin: 0 }}><strong>Firmenbuchnummer:</strong> FN 534799 w</p>
          <p style={{ margin: 0 }}><strong>Firmenbuchgericht:</strong> Handelsgericht Wien</p>
          <p style={{ margin: 0 }}><strong>Rechtsform:</strong> Gesellschaft mit beschränkter Haftung (GmbH)</p>
          <p style={{ margin: 0 }}><strong>UID-Nummer:</strong> ATU75630015</p>
          <p style={{ margin: 0 }}><strong>Gründungsdatum:</strong> 16. Juni 2020</p>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

        <div>
          <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Aufsichtsbehörde & Kammermitgliedschaft</h3>
          <p style={{ margin: 0 }}>Mitglied der Wirtschaftskammer Wien (WKW)</p>
          <p style={{ margin: 0 }}>Zugelassener BestDrive by Continental Partnerbetrieb</p>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

        <div>
          <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Online-Streitbeilegung</h3>
          <p style={{ margin: 0, fontSize: '0.9rem' }}>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter folgendem Link finden:{' '}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
              https://ec.europa.eu/consumers/odr
            </a>.
          </p>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Letzte Aktualisierung: Februar 2026
        </div>

      </div>
    </div>
  );
}
