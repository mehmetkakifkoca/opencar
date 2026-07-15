import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Train, CheckCircle, ShieldCheck } from 'lucide-react';

export default function WerkstattKontakt() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: 'pickerl',
    date: '',
    time: '',
    car: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      alert('Bitte füllen Sie alle erforderlichen Felder (*) aus.');
      return;
    }
    setSubmitted(true);
  };

  const servicesList = [
    { value: 'pickerl', label: '§57a Überprüfung' },
    { value: 'inspektion', label: 'KFZ-Inspektion' },
    { value: 'lack-karosserie', label: 'Lack & Karosserie' },
    { value: 'reifenservice', label: 'Reifenservice & Achsvermessung' },
    { value: 'klimaservice', label: 'Klimaservice' },
    { value: 'oelwechsel', label: 'Ölwechsel & Wartung' },
    { value: 'dpf-reinigung', label: 'DPF-Reinigung' },
    { value: 'autoglaserei', label: 'Autoglaserei' },
    { value: 'bremsenservice', label: 'Bremsenservice' },
    { value: 'fahrzeugdiagnose', label: 'Fahrzeugdiagnose' },
    { value: 'batterieservice', label: 'Batterieservice' },
    { value: 'fahrwerk', label: 'Fahrwerk & Stoßdämpfer' },
    { value: 'getriebeservice', label: 'Getriebeservice' },
    { value: 'sonstiges', label: 'Sonstiges / Allgemeine Anfrage' }
  ];

  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out' }}>
      
      {/* Title */}
      <div style={{ marginBottom: '3.5rem', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '1rem' }}>Kontakt & Anfahrt</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          Wir freuen uns auf Ihren Besuch am Rennweg 76. Zögern Sie nicht, uns bei Fragen oder Anliegen zu kontaktieren.
        </p>
      </div>

      {/* 3 Prominent Value Banners */}
      <div className="grid-3" style={{ marginBottom: '4rem' }}>
        {[
          { title: 'Persönlich beraten', txt: 'Bei uns sprechen Sie direkt mit Fachkräften und Meistern – ganz ohne Callcenter.' },
          { title: 'Transparenz an erster Stelle', txt: 'Sie erhalten vor jeder Arbeit eine klare Einschätzung. Kein Handschlag ohne Freigabe.' },
          { title: 'Familienwerkstatt seit 2020', txt: 'Verankert im Herzen von Wien Landstraße (1030). Ein Partner, dem man vertraut.' }
        ].map((v, i) => (
          <div key={i} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderLeft: '3px solid var(--primary)' }}>
            <h4 style={{ color: '#FFF', fontSize: '1.1rem', margin: 0 }}>{v.title}</h4>
            <p style={{ margin: 0, fontSize: '0.85rem' }}>{v.txt}</p>
          </div>
        ))}
      </div>

      {/* Main Grid: Form vs Location */}
      <div className="grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
        
        {/* Left Column: Form Card */}
        <div className="glass-card" style={{ position: 'relative' }}>
          {submitted ? (
            <div style={{ padding: '3rem 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(16,185,129,0.1)', color: 'var(--success)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle size={36} />
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Anfrage erfolgreich versendet!</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Vielen Dank für Ihre Anfrage. Ein Service-Mitarbeiter wird sich in Kürze telefonisch oder per E-Mail bei Ihnen melden, um Ihren Termin zu bestätigen.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                Neue Anfrage senden
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: '#FFF' }}>Termin oder Service anfragen</h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Name *</label>
                  <input type="text" required className="form-control" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Ihr Name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Telefon *</label>
                  <input type="tel" required className="form-control" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="Telefonnummer" />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">E-Mail *</label>
                  <input type="email" required className="form-control" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="E-Mail Adresse" />
                </div>
                <div className="form-group">
                  <label className="form-label">Unternehmen (optional)</label>
                  <input type="text" className="form-control" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} placeholder="Firmenname" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Gewünschter Service</label>
                <select className="form-control" value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                  {servicesList.map((srv, idx) => (
                    <option key={idx} value={srv.value} style={{ background: 'var(--bg-surface)' }}>{srv.label}</option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Wunschdatum</label>
                  <input type="date" className="form-control" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Wunschzeit</label>
                  <input type="time" className="form-control" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Fahrzeug (optional)</label>
                <input type="text" className="form-control" value={formData.car} onChange={e => setFormData({...formData, car: e.target.value})} placeholder="z.B. VW Golf VII, BJ 2018" />
              </div>

              <div className="form-group">
                <label className="form-label">Nachricht / Anliegen *</label>
                <textarea required rows={4} className="form-control" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Beschreiben Sie kurz, worum es geht..." style={{ resize: 'none' }}></textarea>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <ShieldCheck size={16} style={{ color: 'var(--success)' }} />
                <span>DSGVO-konform. Ihre Daten werden verschlüsselt übertragen und nicht an Dritte weitergegeben.</span>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Persönlich anfragen
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Location details and MAP */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          <div className="glass-card">
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#FFF' }}>Standort Details</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                <MapPin size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <div style={{ fontWeight: 600, color: '#FFF' }}>Werkstatt Wien</div>
                  <div>Rennweg 76, 1030 Wien</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
                <Phone size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <div style={{ fontWeight: 600, color: '#FFF' }}>Telefon</div>
                  <div>01 7981310</div>
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
                  <div style={{ fontWeight: 600, color: '#FFF' }}>Arbeitszeiten</div>
                  <div>Mo–Fr 08:00–18:00 / Sa 08:00–13:00</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'start', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.25rem' }}>
                <Train size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>
                  <div style={{ fontWeight: 600, color: '#FFF' }}>Öffentliche Anbindung</div>
                  <div style={{ fontSize: '0.9rem' }}>Straßenbahn O und 71 (Station Rennweg), S-Bahn Station Rennweg</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: '300px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.8829871180255!2d16.3980068!3d48.1895781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d073740263f45%3A0xe54e662df94d27ab!2sRennweg%2076%2C%201030%20Wien%2C%20Austria!5e0!3m2!1sen!2sde!4v1700000000000!5m2!1sen!2sde" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Google Map OpenCarBox"
            />
          </div>

        </div>

      </div>

    </div>
  );
}
