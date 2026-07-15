import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CreditCard, CheckCircle, ShieldCheck } from 'lucide-react';

interface ServiceOption {
  value: string;
  label: string;
  price: string;
}

const servicesList: ServiceOption[] = [
  { value: 'pickerl', label: '§57a Überprüfung', price: 'ab € 55' },
  { value: 'inspektion', label: 'KFZ-Inspektion', price: 'auf Anfrage' },
  { value: 'lack-karosserie', label: 'Lack & Karosserie', price: 'auf Anfrage' },
  { value: 'reifenservice', label: 'Reifenservice & Achsvermessung', price: 'ab € 40' },
  { value: 'klimaservice', label: 'Klimaservice', price: 'ab € 65' },
  { value: 'oelwechsel', label: 'Ölwechsel & Wartung', price: 'ab € 39' },
  { value: 'dpf-reinigung', label: 'DPF-Reinigung', price: 'ab € 120' },
  { value: 'autoglaserei', label: 'Autoglaserei', price: 'auf Anfrage' },
  { value: 'bremsenservice', label: 'Bremsenservice', price: 'auf Anfrage' },
  { value: 'fahrzeugdiagnose', label: 'Fahrzeugdiagnose', price: 'auf Anfrage' },
  { value: 'batterieservice', label: 'Batterieservice', price: 'ab € 25' },
  { value: 'fahrwerk', label: 'Fahrwerk & Stoßdämpfer', price: 'auf Anfrage' },
  { value: 'getriebeservice', label: 'Getriebeservice', price: 'ab € 150' }
];

export default function Terminbuchung() {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: 'pickerl',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    carMarke: '',
    carModell: '',
    carBaujahr: '',
    carKennzeichen: '',
    paymentMethod: 'onsite', // onsite or stripe
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });
  const [stripeLoading, setStripeLoading] = useState(false);

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam && servicesList.some(s => s.value === serviceParam)) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }, [searchParams]);

  const selectedServiceObj = servicesList.find(s => s.value === formData.service) || servicesList[0];

  const handleNextStep = () => {
    if (step === 1 && !formData.service) {
      alert('Bitte wählen Sie eine Leistung aus.');
      return;
    }
    if (step === 3 && (!formData.date || !formData.time)) {
      alert('Bitte wählen Sie ein Datum und eine Uhrzeit.');
      return;
    }
    if (step === 4 && (!formData.name || !formData.phone || !formData.email)) {
      alert('Bitte füllen Sie alle erforderlichen Kontaktdaten aus.');
      return;
    }
    
    if (step === 4 && formData.paymentMethod === 'onsite') {
      // Skip payment step if paying at workshop
      setStep(6);
    } else {
      setStep(prev => prev + 1);
    }
  };

  const handleBackStep = () => {
    if (step === 6 && formData.paymentMethod === 'onsite') {
      setStep(4);
    } else {
      setStep(prev => prev - 1);
    }
  };

  const handleStripePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.cardNumber || !formData.cardExpiry || !formData.cardCvc) {
      alert('Bitte füllen Sie alle Kreditkarten-Felder aus.');
      return;
    }
    setStripeLoading(true);
    setTimeout(() => {
      setStripeLoading(false);
      setStep(6);
    }, 1500);
  };

  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out', maxWidth: '850px' }}>
      
      {/* STEP INDICATORS HEADER */}
      {step < 6 && (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '0.8rem', 
          marginBottom: '3rem', 
          flexWrap: 'wrap' 
        }}>
          {[
            { id: 1, label: 'SERVICE' },
            { id: 2, label: 'FAHRZEUG' },
            { id: 3, label: 'DATUM' },
            { id: 4, label: 'KONTAKT' },
            { id: 5, label: 'BESTÄTIGUNG' }
          ].map((item, idx) => {
            const isCompleted = step > item.id;
            const isActive = step === item.id;

            return (
              <React.Fragment key={item.id}>
                {/* Step Item */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  {/* Square Box */}
                  <div style={{
                    width: '32px',
                    height: '32px',
                    background: isCompleted ? '#000000' : isActive ? '#FFA800' : '#F3F4F6',
                    color: isCompleted ? '#FFFFFF' : isActive ? '#000000' : '#9CA3AF',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.88rem'
                  }}>
                    {isCompleted ? '✓' : item.id}
                  </div>
                  {/* Label */}
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    letterSpacing: '0.05em',
                    color: isCompleted ? '#FFA800' : isActive ? '#000000' : '#9CA3AF'
                  }}>
                    {item.label}
                  </span>
                </div>

                {/* Connection Line */}
                {idx < 4 && (
                  <div style={{ 
                    width: '30px', 
                    height: '2px', 
                    background: step > item.id ? '#FFA800' : '#E5E7EB' 
                  }} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      )}

      {/* STEP 1: SERVICE */}
      {step === 1 && (
        <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          
          {/* Header inside the card */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h1 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#111827', margin: '0 0 0.5rem 0', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              WELCHEN SERVICE BENÖTIGEN SIE?
            </h1>
            <p style={{ fontSize: '0.92rem', color: '#9CA3AF', margin: 0, fontWeight: 500 }}>
              Wählen Sie den gewünschten Service – wir beraten Sie gerne persönlich weiter.
            </p>
          </div>

          {/* Grid of options */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
            {servicesList.map((srv) => {
              const isSelected = formData.service === srv.value;
              return (
                <div 
                  key={srv.value} 
                  onClick={() => setFormData({ ...formData, service: srv.value })}
                  style={{
                    background: '#FFFFFF',
                    border: isSelected ? '2px solid #FFA800' : '1px solid #E5E7EB',
                    borderRadius: '4px',
                    padding: '1.1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)',
                    boxShadow: isSelected ? '0 4px 12px rgba(255, 168, 0, 0.08)' : 'none'
                  }}
                >
                  {/* Checkbox box */}
                  <div style={{
                    width: '20px',
                    height: '20px',
                    border: isSelected ? '2px solid #FFA800' : '2px solid #D1D5DB',
                    borderRadius: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: isSelected ? '#FFA800' : 'transparent',
                    color: '#000000'
                  }}>
                    {isSelected && <span style={{ fontSize: '0.75rem', fontWeight: 900 }}>✓</span>}
                  </div>

                  {/* Text column */}
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: '0 0 0.2rem 0', fontSize: '0.92rem', fontWeight: 700, color: '#111827' }}>
                      {srv.label}
                    </h4>
                    <span style={{ fontSize: '0.8rem', color: '#6B7280' }}>
                      {srv.price}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Divider line */}
          <div style={{ borderTop: '1px solid #E5E7EB', margin: '0 -2.5rem 1.5rem -2.5rem' }} />

          {/* Action buttons inside the card */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button 
              className="btn" 
              disabled={true}
              style={{
                background: 'transparent',
                border: '1px solid #E5E7EB',
                color: '#D1D5DB',
                padding: '0.6rem 1.5rem',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              ← ZURÜCK
            </button>
            <button 
              className="btn" 
              onClick={handleNextStep}
              style={{
                background: '#FFA800',
                color: '#000000',
                padding: '0.6rem 1.75rem',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '0.85rem',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
              }}
            >
              WEITER →
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: FAHRZEUG */}
      {step === 2 && (
        <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          
          {/* Header */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h1 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#111827', margin: '0 0 0.5rem 0', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              IHR FAHRZEUG
            </h1>
            <p style={{ fontSize: '0.92rem', color: '#9CA3AF', margin: 0, fontWeight: 500 }}>
              Helfen Sie uns bei der Vorbereitung – diese Angaben sind optional.
            </p>
          </div>

          {/* Grid of inputs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label" style={{ color: '#111827', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>MARKE</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="z.B. Volkswagen" 
                value={formData.carMarke}
                onChange={e => setFormData({ ...formData, carMarke: e.target.value })}
                style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#111827', padding: '0.8rem 1rem', borderRadius: '4px' }}
              />
            </div>
            <div className="form-group">
              <label className="form-label" style={{ color: '#111827', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>MODELL</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="z.B. Golf VII" 
                value={formData.carModell}
                onChange={e => setFormData({ ...formData, carModell: e.target.value })}
                style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#111827', padding: '0.8rem 1rem', borderRadius: '4px' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label" style={{ color: '#111827', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>BAUJAHR</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="z.B. 2019" 
                value={formData.carBaujahr}
                onChange={e => setFormData({ ...formData, carBaujahr: e.target.value })}
                style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#111827', padding: '0.8rem 1rem', borderRadius: '4px' }}
              />
            </div>
            <div className="form-group">
              <label className="form-label" style={{ color: '#111827', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>KENNZEICHEN</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="z.B. W 123 AB" 
                value={formData.carKennzeichen}
                onChange={e => setFormData({ ...formData, carKennzeichen: e.target.value })}
                style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#111827', padding: '0.8rem 1rem', borderRadius: '4px' }}
              />
            </div>
          </div>

          {/* Helper text */}
          <p style={{ fontSize: '0.82rem', color: '#9CA3AF', marginBottom: '2.5rem' }}>
            Fahrzeugdaten optional – helfen uns bei der Vorbereitung.
          </p>

          {/* Divider line */}
          <div style={{ borderTop: '1px solid #E5E7EB', margin: '0 -2.5rem 1.5rem -2.5rem' }} />

          {/* Action buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button 
              className="btn" 
              onClick={handleBackStep}
              style={{
                background: '#FFFFFF',
                border: '1px solid #D1D5DB',
                color: '#111827',
                padding: '0.65rem 1.75rem',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                cursor: 'pointer'
              }}
            >
              ← ZURÜCK
            </button>
            <button 
              className="btn" 
              onClick={handleNextStep}
              style={{
                background: '#FFA800',
                color: '#000000',
                padding: '0.65rem 2rem',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '0.85rem',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0,0,0,0.08)'
              }}
            >
              WEITER →
            </button>
          </div>

        </div>
      )}

      {/* STEP 3: DATE & TIME */}
      {step === 3 && (
        <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#111827', margin: '0 0 0.5rem 0' }}>Wunschtermin festlegen</h2>
            <p style={{ fontSize: '0.92rem', color: '#6B7280', margin: 0 }}>Wählen Sie Ihr Wunschdatum und eine verfügbare Uhrzeit.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
            <div className="form-group">
              <label className="form-label" style={{ color: '#111827', fontWeight: 600 }}>Datum</label>
              <input 
                type="date" 
                className="form-control" 
                value={formData.date} 
                min={new Date().toISOString().split('T')[0]}
                onChange={e => setFormData({ ...formData, date: e.target.value })} 
                style={{ background: '#FCFAF6', border: '1px solid #E5E7EB', color: '#111827' }}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" style={{ color: '#111827', fontWeight: 600 }}>Uhrzeit</label>
              <input 
                type="time" 
                className="form-control" 
                value={formData.time} 
                onChange={e => setFormData({ ...formData, time: e.target.value })} 
                style={{ background: '#FCFAF6', border: '1px solid #E5E7EB', color: '#111827' }}
              />
            </div>
          </div>

          <div style={{ borderTop: '1px solid #E5E7EB', margin: '0 -2.5rem 1.5rem -2.5rem' }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button className="btn" onClick={handleBackStep} style={{ background: 'transparent', border: '1px solid #111827', color: '#111827', padding: '0.6rem 1.5rem', borderRadius: '4px', fontWeight: 700 }}>
              ← ZURÜCK
            </button>
            <button className="btn" onClick={handleNextStep} style={{ background: '#FFA800', color: '#000', padding: '0.6rem 1.75rem', borderRadius: '4px', border: 'none', fontWeight: 700 }}>
              WEITER →
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: CONTACT & DETAILS */}
      {step === 4 && (
        <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#111827', margin: '0 0 0.5rem 0' }}>Ihre Angaben</h2>
            <p style={{ fontSize: '0.92rem', color: '#6B7280', margin: 0 }}>Geben Sie Ihre persönlichen Daten an, um die Buchung abzuschließen.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1rem' }}>
            <div className="form-group">
              <label className="form-label" style={{ color: '#111827', fontWeight: 600 }}>Name *</label>
              <input type="text" className="form-control" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Vor- & Nachname" style={{ background: '#FCFAF6', border: '1px solid #E5E7EB', color: '#111827' }} />
            </div>
            <div className="form-group">
              <label className="form-label" style={{ color: '#111827', fontWeight: 600 }}>Telefon *</label>
              <input type="tel" className="form-control" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="Telefonnummer" style={{ background: '#FCFAF6', border: '1px solid #E5E7EB', color: '#111827' }} />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            <div className="form-group">
              <label className="form-label" style={{ color: '#111827', fontWeight: 600 }}>E-Mail *</label>
              <input type="email" className="form-control" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="E-Mail Adresse" style={{ background: '#FCFAF6', border: '1px solid #E5E7EB', color: '#111827' }} />
            </div>
          </div>

          <div className="form-group" style={{ marginBottom: '2.5rem' }}>
            <label className="form-label" style={{ color: '#111827', fontWeight: 650 }}>Zahlungsweise</label>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: '#374151', fontWeight: 600 }}>
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value="onsite" 
                  checked={formData.paymentMethod === 'onsite'} 
                  onChange={() => setFormData({ ...formData, paymentMethod: 'onsite' })} 
                />
                Vor Ort bezahlen (Bar / Karte)
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', color: '#374151', fontWeight: 600 }}>
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value="stripe" 
                  checked={formData.paymentMethod === 'stripe'} 
                  onChange={() => setFormData({ ...formData, paymentMethod: 'stripe' })} 
                />
                Jetzt online anzahlen (Stripe)
              </label>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #E5E7EB', margin: '0 -2.5rem 1.5rem -2.5rem' }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button className="btn" onClick={handleBackStep} style={{ background: 'transparent', border: '1px solid #111827', color: '#111827', padding: '0.6rem 1.5rem', borderRadius: '4px', fontWeight: 700 }}>
              ← ZURÜCK
            </button>
            <button className="btn" onClick={handleNextStep} style={{ background: '#FFA800', color: '#000', padding: '0.6rem 1.75rem', borderRadius: '4px', border: 'none', fontWeight: 700 }}>
              WEITER →
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: STRIPE PAYMENT SIMULATION */}
      {step === 5 && (
        <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#111827', margin: 0 }}>Stripe Online Anzahlung</h2>
            <span style={{ fontSize: '0.8rem', background: 'rgba(255, 168, 0, 0.08)', border: '1px solid #FFA800', padding: '0.25rem 0.5rem', borderRadius: '4px', color: '#B27600', fontWeight: 700 }}>Secure Payment</span>
          </div>

          <div style={{ background: '#FCFAF6', padding: '1.25rem 1.5rem', borderRadius: '8px', border: '1px solid #E5E7EB', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#111827', fontSize: '0.95rem' }}>
              <span>Ausgewählter Service:</span>
              <strong>{selectedServiceObj.label}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#B27600', fontSize: '1.1rem', fontWeight: 700, marginTop: '0.5rem' }}>
              <span>Anzahlungssumme:</span>
              <span>€ 25,00</span>
            </div>
          </div>

          <form onSubmit={handleStripePayment} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="form-group">
              <label className="form-label" style={{ color: '#111827', fontWeight: 600 }}>Kreditkartennummer</label>
              <div style={{ position: 'relative' }}>
                <input 
                  type="text" 
                  required 
                  className="form-control" 
                  value={formData.cardNumber} 
                  onChange={e => setFormData({ ...formData, cardNumber: e.target.value })} 
                  placeholder="4242 4242 4242 4242" 
                  style={{ paddingLeft: '2.75rem', background: '#FCFAF6', border: '1px solid #E5E7EB', color: '#111827' }}
                />
                <CreditCard size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="form-group">
                <label className="form-label" style={{ color: '#111827', fontWeight: 600 }}>Ablaufdatum</label>
                <input 
                  type="text" 
                  required 
                  className="form-control" 
                  value={formData.cardExpiry} 
                  onChange={e => setFormData({ ...formData, cardExpiry: e.target.value })} 
                  placeholder="MM/YY" 
                  style={{ background: '#FCFAF6', border: '1px solid #E5E7EB', color: '#111827' }}
                />
              </div>
              <div className="form-group">
                <label className="form-label" style={{ color: '#111827', fontWeight: 600 }}>CVC (Kartenprüfnummer)</label>
                <input 
                  type="text" 
                  required 
                  className="form-control" 
                  value={formData.cardCvc} 
                  onChange={e => setFormData({ ...formData, cardCvc: e.target.value })} 
                  placeholder="123" 
                  style={{ background: '#FCFAF6', border: '1px solid #E5E7EB', color: '#111827' }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: '#6B7280', marginBottom: '2rem' }}>
              <ShieldCheck size={16} style={{ color: 'var(--success)' }} />
              <span>Sichere Übermittlung über verschlüsselte Stripe API.</span>
            </div>

            <div style={{ borderTop: '1px solid #E5E7EB', margin: '0 -2.5rem 1.5rem -2.5rem' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button type="button" className="btn" onClick={handleBackStep} disabled={stripeLoading} style={{ background: 'transparent', border: '1px solid #111827', color: '#111827', padding: '0.6rem 1.5rem', borderRadius: '4px', fontWeight: 700 }}>
                ← ZURÜCK
              </button>
              <button type="submit" className="btn" disabled={stripeLoading} style={{ background: '#FFA800', color: '#000', padding: '0.6rem 1.75rem', borderRadius: '4px', border: 'none', fontWeight: 700, minWidth: '180px' }}>
                {stripeLoading ? 'Verarbeite...' : 'ANZAHLUNG LEISTEN →'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* STEP 6: SUCCESS CONFIRMATION */}
      {step === 6 && (
        <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '3.5rem 2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <div style={{ width: '80px', height: '80px', background: 'rgba(16,185,129,0.1)', color: 'var(--success)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircle size={44} />
          </div>
          
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#111827', marginBottom: '0.5rem' }}>Termin erfolgreich reserviert!</h2>
            <p style={{ fontSize: '1.05rem', color: '#4B5563', margin: 0 }}>
              Vielen Dank für Ihre Buchung bei OpenCarBox.
            </p>
          </div>

          <div style={{ background: '#FCFAF6', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '1.5rem', width: '100%', maxWidth: '480px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.8rem', margin: '1rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E5E7EB', paddingBottom: '0.6rem' }}>
              <span style={{ color: '#6B7280' }}>Kunde:</span>
              <strong style={{ color: '#111827' }}>{formData.name}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E5E7EB', paddingBottom: '0.6rem' }}>
              <span style={{ color: '#6B7280' }}>Leistung:</span>
              <strong style={{ color: '#111827' }}>{selectedServiceObj.label}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #E5E7EB', paddingBottom: '0.6rem' }}>
              <span style={{ color: '#6B7280' }}>Termin:</span>
              <strong style={{ color: '#111827' }}>{formData.date} um {formData.time} Uhr</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: (formData.carMarke || formData.carModell) ? '0.6rem' : 0, borderBottom: (formData.carMarke || formData.carModell) ? '1px solid #E5E7EB' : 'none' }}>
              <span style={{ color: '#6B7280' }}>Zahlungsweise:</span>
              <strong style={{ color: '#111827' }}>{formData.paymentMethod === 'stripe' ? 'Online Anzahlung (Stripe)' : 'Vor Ort (Bar / Karte)'}</strong>
            </div>
            {(formData.carMarke || formData.carModell) && (
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6B7280' }}>Fahrzeug:</span>
                <strong style={{ color: '#111827' }}>
                  {formData.carMarke} {formData.carModell} {formData.carBaujahr && `(${formData.carBaujahr})`} {formData.carKennzeichen && `- ${formData.carKennzeichen}`}
                </strong>
              </div>
            )}
          </div>

          <p style={{ fontSize: '0.92rem', color: '#4B5563', maxWidth: '520px', lineHeight: '1.6', margin: '0 0 1rem 0' }}>
            Wir haben Ihnen eine Bestätigungs-E-Mail gesendet. Sollten sich Änderungen ergeben, können Sie Ihren Termin bequem in unserem Kundenportal verwalten oder uns telefonisch kontaktieren.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link to="/werkstatt" className="btn" style={{ background: '#FFA800', color: '#000', fontWeight: 700, borderRadius: '4px', padding: '0.75rem 1.5rem' }}>Zur Startseite</Link>
            <Link to="/auth/login" className="btn" style={{ background: 'transparent', border: '1px solid #111827', color: '#111827', fontWeight: 700, borderRadius: '4px', padding: '0.75rem 1.5rem' }}>Kundenportal Login</Link>
          </div>
        </div>
      )}

    </div>
  );
}
