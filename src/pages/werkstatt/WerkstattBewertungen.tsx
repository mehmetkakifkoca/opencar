

export default function WerkstattBewertungen() {
  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out' }}>
      
      {/* Title */}
      <div style={{ marginBottom: '3rem', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '1rem' }}>Kundenstimmen</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          Echte Bewertungen unserer Kunden – unkommentiert, ungefiltert, unverändert.
        </p>
      </div>

      {/* Live Reviews Widget */}
      <div style={{ marginTop: '2rem' }}>
        <div className="elfsight-app-7e2e5c28-800d-4e53-aa49-c0e14944cc4d" data-elfsight-app-lazy=""></div>
      </div>

    </div>
  );
}
