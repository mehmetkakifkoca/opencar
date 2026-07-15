import { Link } from 'react-router-dom';
import { CheckCircle, Network, MapPin } from 'lucide-react';

export default function B2BFamilienWerkstaetten() {
  const values = [
    { title: 'Gemeinsame Werte', desc: 'Handschlagqualität, offene Kommunikation auf Augenhöhe und absolute Zuverlässigkeit.' },
    { title: 'Gegenseitiges Vertrauen', desc: 'Wir verlassen uns aufeinander. Fehler werden gemeinsam gelöst, Erfolge geteilt.' },
    { title: 'Wachstum für alle', desc: 'Durch Einkaufsvorteile und logistische Schnelligkeit stärken wir die Wettbewerbsfähigkeit jedes Mitglieds.' },
    { title: 'Langfristige Partnerschaft', desc: 'Wir denken in Generationen und dauerhaften Verbindungen, nicht in schnellen Quartalsgewinnen.' }
  ];

  const expectations = [
    'Schnellste Teileversorgung am selben Tag',
    'Persönlicher Ansprechpartner ohne Callcenter',
    'Attraktive Händler-Einkaufskonditionen',
    'Breites Sortiment (OE- und Premiummarken)',
    'Verlässliche Retourenlogik für AT & DE',
    'Netzwerk-Vorteile (Zuweisung von Servicekunden)'
  ];

  const networkMembers = [
    {
      name: 'OpenCarBox Werkstatt',
      location: 'Rennweg 76, 1030 Wien',
      details: 'Zertifizierte §57a-Prüfstelle & BestDrive by Continental Partner.'
    },
    {
      name: 'OpenCarBox Autohandel',
      location: 'Favoritenstraße 175, 1100 Wien',
      details: 'Meisterwerkstattgeprüfte Gebrauchtwagen mit 12–24 Monaten Garantie.'
    },
    {
      name: 'Weitere Partner in Aufnahme',
      location: 'Österreich & Deutschland',
      details: 'Qualitätsbetriebe in Wien, Graz, Berlin, Hamburg und weiteren Städten befinden sich aktuell im Onboarding.'
    }
  ];

  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out' }}>
      
      {/* Page Title */}
      <div style={{ marginBottom: '4rem', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '1rem' }}>Familien-Werkstätten & Partnernetzwerk</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          Gemeinsam stärker. Wir verbinden inhabergeführte Werkstätten und Handelsbetriebe zu einer starken Gemeinschaft mit Handschlagqualität.
        </p>
      </div>

      {/* Philosophy section */}
      <div className="glass-card grid-2" style={{ alignItems: 'center', padding: '3rem', marginBottom: '5rem' }}>
        <div>
          <span className="badge" style={{ marginBottom: '1rem' }}>Unsere Felsefe</span>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.25rem', color: 'var(--text-primary)' }}>Mehr als ein Lieferant.</h2>
          <p style={{ margin: 0, fontSize: '1rem', lineHeight: '1.7' }}>
            OpenCarBox baut ein Netzwerk aus Betrieben auf, die eines gemeinsam haben: den kompromisslosen Anspruch, für ihre Kunden täglich das Beste zu geben. Wir verstehen uns als Qualitätsnetzwerk auf Augenhöhe – als echte Alternative zum anonymen Großhandel.
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--primary)' }}>
          <Network size={120} style={{ opacity: 0.8 }} />
        </div>
      </div>

      {/* Values Grid */}
      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Was uns verbindet</h2>
        <div className="grid-4">
          {values.map((v, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>{v.title}</h3>
              <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.6' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Expectations Grid */}
      <div className="grid-2" style={{ gap: '3rem', alignItems: 'center', marginBottom: '5rem' }}>
        <div>
          <h2 style={{ marginBottom: '1.5rem' }}>Was unsere Partner erwarten können</h2>
          <p style={{ fontSize: '1.05rem', marginBottom: '2rem' }}>
            Als Netzwerkpartner profitieren Sie von exklusiven Vorteilen, die Ihre Betriebseffizienz und Wirtschaftlichkeit direkt steigern.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {expectations.map((exp, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                <CheckCircle size={18} style={{ color: 'var(--success)', flexShrink: 0 }} />
                {exp}
              </div>
            ))}
          </div>
        </div>

        {/* Existing Network Directory */}
        <div className="glass-card">
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Aktuelles Netzwerk</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {networkMembers.map((member, idx) => (
              <div key={idx} style={{ borderBottom: idx < networkMembers.length - 1 ? '1px solid var(--border-color)' : 'none', paddingBottom: idx < networkMembers.length - 1 ? '1.25rem' : 0 }}>
                <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{member.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  <MapPin size={12} style={{ color: 'var(--primary)' }} /> {member.location}
                </div>
                <p style={{ margin: 0, fontSize: '0.85rem' }}>{member.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join CTA */}
      <div style={{ textAlign: 'center', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '3.5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Werden Sie Teil der Familie.</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.05rem' }}>
          Bewerben Sie sich unkompliziert für unser Partnernetzwerk und sichern Sie sich logistische Vorteile.
        </p>
        <Link to="/b2b/kontakt" className="btn btn-primary">
          Netzwerk-Anfrage senden
        </Link>
      </div>

    </div>
  );
}
