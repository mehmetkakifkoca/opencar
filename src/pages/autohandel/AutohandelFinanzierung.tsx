import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';

export default function AutohandelFinanzierung() {
  const [searchParams] = useSearchParams();
  const [price, setPrice] = useState(25000);
  const [downPayment, setDownPayment] = useState(5000);
  const [term, setTerm] = useState(48); // months
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const priceParam = searchParams.get('price');
    if (priceParam) {
      const parsedPrice = Number(priceParam);
      if (!isNaN(parsedPrice)) {
        setPrice(parsedPrice);
        setDownPayment(Math.round(parsedPrice * 0.2)); // 20% down payment default
      }
    }
  }, [searchParams]);

  // Calculate simulated interest payment
  useEffect(() => {
    const principal = price - downPayment;
    const annualInterestRate = 0.0599; // 5.99% APR
    const monthlyRate = annualInterestRate / 12;
    
    if (principal <= 0) {
      setMonthlyPayment(0);
      return;
    }

    // Standard amortization formula: PMT = P * r * (1 + r)^n / ((1 + r)^n - 1)
    const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
    setMonthlyPayment(Math.round(payment));
  }, [price, downPayment, term]);

  const steps = [
    { title: 'Fahrzeug auswählen', desc: 'Suchen Sie sich Ihren Wunschgebrauchtwagen aus unserem Bestand oder teilen Sie uns Ihren Suchauftrag mit.' },
    { title: 'Finanzierung anfragen', desc: 'Füllen Sie unser unverbindliches Anfrageformular aus oder besprechen Sie Ihre Wünsche direkt mit uns.' },
    { title: 'Angebot erhalten', desc: 'Wir berechnen für Sie ein maßgeschneidertes, transparentes Angebot – komplett ohne versteckte Kosten.' },
    { title: 'Fahrzeug übernehmen', desc: 'Nach Genehmigung und Vertragsunterzeichnung übernehmen Sie Ihr meistergeprüftes Fahrzeug mit Garantie.' }
  ];

  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out' }}>
      
      {/* Title */}
      <div style={{ marginBottom: '3.5rem', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '1rem' }}>Finanzierungslösungen</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          Maßgeschneiderte Finanzierungslösungen für Ihr neues Fahrzeug. Faire Konditionen, transparente Beratung und schnelle Abwicklung.
        </p>
      </div>

      {/* 3 Financing Models */}
      <div className="grid-3" style={{ marginBottom: '5rem' }}>
        {[
          {
            title: 'Ratenkredit',
            desc: 'Flexible Laufzeiten von 12 bis 84 Monaten. Finanzierung auch komplett ohne Anzahlung möglich. Feste Raten über die gesamte Laufzeit garantieren maximale Planbarkeit.'
          },
          {
            title: 'Leasing',
            desc: 'Für Privat- und Gewerbekunden. Nutzen Sie steuerliche Vorteile und zahlen Sie nur für die tatsächliche Nutzung. Am Ende der Laufzeit haben Sie flexible Restwert-Optionen.'
          },
          {
            title: 'Ballonfinanzierung',
            desc: 'Die ideale Kombination: Besonders niedrige Monatsraten gekoppelt mit einer höheren Schlussrate (Ballon) am Ende der Laufzeit. Perfekt für ein stabiles monatliches Budget.'
          }
        ].map((item, idx) => (
          <div key={idx} className="glass-card" style={{ borderTop: '3px solid var(--primary)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.3rem', margin: 0, color: '#FFF' }}>{item.title}</h3>
            <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.65' }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Loan Calculator */}
      <div className="glass-card grid-2" style={{ gap: '3rem', padding: '3rem', marginBottom: '5rem', alignItems: 'center' }}>
        <div>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FFF' }}>
            <Calculator size={24} style={{ color: 'var(--primary)' }} /> Ratenrechner (Richtwert)
          </h3>
          <p style={{ fontSize: '0.95rem', marginBottom: '2rem' }}>
            Berechnen Sie Ihre gewünschte Monatsrate. Unser kalkulierter Zinssatz liegt aktuell bei <strong>5,99% effektivem Jahreszins</strong>.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Price slider */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span>Fahrzeugpreis:</span>
                <strong style={{ color: 'var(--primary)' }}>€ {price.toLocaleString('de-DE')}</strong>
              </div>
              <input type="range" min={10000} max={60000} step={1000} value={price} onChange={e => {
                const newPrice = Number(e.target.value);
                setPrice(newPrice);
                if (downPayment > newPrice) setDownPayment(newPrice);
              }} style={{ accentColor: 'var(--primary)', cursor: 'pointer' }} />
            </div>

            {/* Down payment slider */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span>Anzahlung:</span>
                <strong style={{ color: 'var(--primary)' }}>€ {downPayment.toLocaleString('de-DE')}</strong>
              </div>
              <input type="range" min={0} max={price} step={500} value={downPayment} onChange={e => setDownPayment(Number(e.target.value))} style={{ accentColor: 'var(--primary)', cursor: 'pointer' }} />
            </div>

            {/* Term Select */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span>Laufzeit (Monate):</span>
                <strong style={{ color: 'var(--primary)' }}>{term} Monate</strong>
              </div>
              <select value={term} onChange={e => setTerm(Number(e.target.value))} className="form-control">
                {[12, 24, 36, 48, 60, 72, 84].map((m, idx) => (
                  <option key={idx} value={m} style={{ background: 'var(--bg-surface)' }}>{m} Monate</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Calculated rate Display */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-dark)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '3rem 2rem', textAlign: 'center', boxShadow: 'var(--shadow-glow)' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Simulierte Monatsrate</span>
          <div style={{ fontSize: '3.5rem', fontWeight: 800, color: '#FFF', margin: '0.5rem 0', fontFamily: 'var(--font-heading)' }}>
            € {monthlyPayment}
          </div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Laufzeit: {term} Monate · Anzahlung: € {downPayment.toLocaleString('de-DE')} <br />
            Effektiver Jahreszins: 5,99% (Sollzins gebunden 5,83%)
          </span>

          <Link to={`/autohandel/anfrage?service=Finanzierung&price=${price}&rate=${monthlyPayment}&term=${term}`} className="btn btn-primary" style={{ width: '100%', marginTop: '2rem' }}>
            Angebot anfordern
          </Link>
        </div>
      </div>

      {/* How it works */}
      <div>
        <h2 style={{ textAlign: 'center', marginBottom: '3.5rem' }}>Wie es funktioniert</h2>
        
        <div className="grid-4">
          {steps.map((st, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '1.5rem',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: 'var(--primary)',
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.85rem'
              }}>
                {idx + 1}
              </div>
              <h3 style={{ fontSize: '1.15rem', marginTop: '0.5rem', color: '#FFF' }}>{st.title}</h3>
              <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.6' }}>{st.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
