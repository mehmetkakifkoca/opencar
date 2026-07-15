import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, User, CheckCircle, ShieldCheck } from 'lucide-react';

export default function AutohandelKontakt() {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carInterest: '',
    inquiryType: 'viewing', // viewing, testdrive, finance, tradein, general
    message: ''
  });

  useEffect(() => {
    const carParam = searchParams.get('car');
    const serviceParam = searchParams.get('service');
    if (carParam) {
      setFormData(prev => ({ ...prev, carInterest: carParam, inquiryType: serviceParam === 'Finanzierung' ? 'finance' : 'viewing' }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      alert('Bitte füllen Sie alle erforderlichen Felder (*) aus.');
      return;
    }
    setSubmitted(true);
  };

  const inquiryTypes = [
    { value: 'viewing', label: 'Besichtigung vereinbaren' },
    { value: 'testdrive', label: 'Probefahrt anfragen' },
    { value: 'finance', label: 'Finanzierungsangebot' },
    { value: 'tradein', label: 'Inzahlungnahme (Fahrzeugtausch)' },
    { value: 'general', label: 'Allgemeine Anfrage' }
  ];

  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out' }}>
      
      {/* Title */}
      <div style={{ marginBottom: '3.5rem', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '1rem' }}>Autohandel Kontakt & Anfrage</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          Besuchen Sie unseren Ausstellungsplatz in Wien 1100. Bitte vereinbaren Sie vorab einen Besichtigungstermin.
        </p>
      </div>

      <div className="grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
        
        {/* Left Column: Inquiry Form */}
        <div className="glass-card">
          {submitted ? (
            <div style={{ padding: '3.5rem 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(16,185,129,0.1)', color: 'var(--success)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle size={36} />
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Anfrage erfolgreich gesendet!</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Vielen Dank für Ihr Interesse. Geschäftsführer Metehan Arac wird sich in Kürze persönlich bei Ihnen melden, um Ihre Anfrage zu besprechen.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                Neue Anfrage senden
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: '#FFF' }}>Fahrzeug- oder Beratungsanfrage</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input type="text" required className="form-control" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Ihr Name" />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Telefon *</label>
                  <input type="tel" required className="form-control" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="Telefonnummer" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">E-Mail *</label>
                <input type="email" required className="form-control" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="E-Mail Adresse" />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label">Interessiert an Fahrzeug (Modell)</label>
                  <input type="text" className="form-control" value={formData.carInterest} onChange={e => setFormData({...formData, carInterest: e.target.value})} placeholder="z.B. Audi A4 Avant" />
                </div>

                <div className="form-group">
                  <label className="form-label">Art der Anfrage</label>
                  <select className="form-control" value={formData.inquiryType} onChange={e => setFormData({...formData, inquiryType: e.target.value})}>
                    {inquiryTypes.map((type, idx) => (
                      <option key={idx} value={type.value} style={{ background: 'var(--bg-surface)' }}>{type.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Ihre Nachricht *</label>
                <textarea required rows={5} className="form-control" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Details zu Ihrer Anfrage (z.B. Wunschtermin für Probefahrt, Details zu Ihrem Inzahlungnahme-Fahrzeug...)" style={{ resize: 'none' }}></textarea>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <ShieldCheck size={16} style={{ color: 'var(--success)' }} />
                <span>DSGVO-konform. Ihre Daten werden sicher übertragen und vertraulich behandelt.</span>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Anfrage senden
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Contact & Map details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div className="glass-card">
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#FFF' }}>Showroom Details</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                <MapPin size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <div style={{ fontWeight: 600, color: '#FFF' }}>Ausstellungsplatz Wien 1100</div>
                  <div>Favoritenstraße 175, 1100 Wien</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                <Phone size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <div style={{ fontWeight: 600, color: '#FFF' }}>Telefon</div>
                  <div>01 9972708 / 0699 14447780</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                <Mail size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <div style={{ fontWeight: 600, color: '#FFF' }}>E-Mail</div>
                  <div>office@opencarbox.co.at</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                <Clock size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <div style={{ fontWeight: 600, color: '#FFF' }}>Öffnungszeiten</div>
                  <div>Mo–Fr 08:00–18:00 / Sa 10:00–15:00 <br /> Sonntag geschlossen</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.25rem' }}>
                <User size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <div style={{ fontWeight: 600, color: '#FFF' }}>Persönlicher Ansprechpartner</div>
                  <div>Metehan Arac (Geschäftsführer & KFZ-Meister)</div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', background: 'rgba(255,168,0,0.05)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1rem', fontSize: '0.85rem' }}>
              <strong>Hinweis:</strong> Besichtigungen und Probefahrten sind erbeten nach vorheriger Terminvereinbarung.
            </div>
          </div>

          {/* Map */}
          <div style={{ height: '300px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.168574889759!2d16.3768407!3d48.1691238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476da9dfdbbbab79%3A0xe9ec4bfa1051ee2b!2sFavoritenstra%C3%9Fe%20175%2C%201100%20Wien%2C%20Austria!5e0!3m2!1sen!2sde!4v1700000000001!5m2!1sen!2sde" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Google Map OpenCarBox Autohandel"
            />
          </div>

        </div>

      </div>

    </div>
  );
}
