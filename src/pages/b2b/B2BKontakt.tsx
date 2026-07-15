import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, CheckCircle, ShieldCheck } from 'lucide-react';

export default function B2BKontakt() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    businessType: 'werkstatt',
    contactPerson: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactPerson || !formData.phone || !formData.email || !formData.message) {
      alert('Bitte füllen Sie alle erforderlichen Felder (*) aus.');
      return;
    }
    setSubmitted(true);
  };

  const businessTypes = [
    { value: 'werkstatt', label: 'Freie Werkstatt / Vertragswerkstatt' },
    { value: 'dealer', label: 'Autohändler' },
    { value: 'parts_dealer', label: 'Teilehändler' },
    { value: 'fleet', label: 'Flottenbetreiber / Fuhrpark' },
    { value: 'other', label: 'Sonstige' }
  ];

  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out' }}>
      
      {/* Page Title */}
      <div style={{ marginBottom: '3.5rem', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '1rem' }}>B2B-Kontakt & Anfrage</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          Wir beraten Sie persönlich bezüglich Liefergebieten, Rabattsätzen und Kooperationen. Antwort garantiert innerhalb von 24 Stunden.
        </p>
      </div>

      {/* Info Banner */}
      <div style={{
        background: 'rgba(255,168,0,0.05)',
        border: '1px solid var(--border-color)',
        borderRadius: '12px',
        padding: '1.25rem 2rem',
        marginBottom: '3.5rem',
        color: 'var(--text-primary)',
        fontSize: '0.95rem'
      }}>
        <strong>Bestell-Information:</strong> Bestellungen, die von registrierten B2B-Kunden bis <strong>10:00 Uhr</strong> eingehen, werden am selben Werktag bis 14:00 Uhr zugestellt.
      </div>

      {/* Grid: Form vs Locations */}
      <div className="grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
        
        {/* Left Column: Form Card */}
        <div className="glass-card">
          {submitted ? (
            <div style={{ padding: '3.5rem 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(16,185,129,0.1)', color: 'var(--success)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CheckCircle size={36} />
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Anfrage erfolgreich versendet!</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Vielen Dank für Ihre Anfrage. Unser B2B-Betreuungsteam wird sich innerhalb der nächsten 24 Stunden mit Ihnen in Verbindung setzen, um Ihr Händlerkonto zu besprechen.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn btn-secondary" style={{ marginTop: '1rem' }}>
                Neue Anfrage senden
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>B2B-Konto beantragen / Anfrage senden</h3>
              
              <div className="grid-2" style={{ gap: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label">Firmenname *</label>
                  <input type="text" required className="form-control" value={formData.companyName} onChange={e => setFormData({...formData, companyName: e.target.value})} placeholder="Vollständiger Firmenname" />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Betriebstyp</label>
                  <select className="form-control" value={formData.businessType} onChange={e => setFormData({...formData, businessType: e.target.value})}>
                    {businessTypes.map((type, idx) => (
                      <option key={idx} value={type.value} style={{ background: 'var(--bg-surface)' }}>{type.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Ansprechpartner *</label>
                <input type="text" required className="form-control" value={formData.contactPerson} onChange={e => setFormData({...formData, contactPerson: e.target.value})} placeholder="Vor- & Nachname" />
              </div>

              <div className="grid-2" style={{ gap: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label">Telefon *</label>
                  <input type="tel" required className="form-control" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="Direkte Durchwahl" />
                </div>
                
                <div className="form-group">
                  <label className="form-label">E-Mail *</label>
                  <input type="email" required className="form-control" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="Geschäftliche E-Mail" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Ihre Nachricht / Anmerkungen *</label>
                <textarea required rows={5} className="form-control" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Bitte beschreiben Sie kurz Ihren Betrieb (z.B. monatlicher Teilebedarf, gewünschte Zahlungskonditionen...)" style={{ resize: 'none' }}></textarea>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <ShieldCheck size={16} style={{ color: 'var(--success)' }} />
                <span>DSGVO-konform. Ihre Firmendaten werden streng vertraulich behandelt.</span>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Anfrage senden
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Branch cards details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* AT Branch Card */}
          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span className="badge">AT</span>
              <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>Standort Österreich</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'start' }}>
                <MapPin size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>OpenCarBox GmbH<br />Rennweg 76, 1030 Wien</div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Phone size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} /> 01 7981310
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Mail size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} /> b2b@opencarbox.co.at
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Clock size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} /> Mo–Fr 08:00–18:00 / Sa 08:00–13:00
              </div>
            </div>
          </div>

          {/* DE Branch Card */}
          <div className="glass-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <span className="badge">DE</span>
              <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>Standort Deutschland</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'start' }}>
                <MapPin size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <div>OpenCarBox GmbH<br />Brandenburgische Str. 51-51D, 14974 Ludwigsfelde</div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Mail size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} /> b2b@opencarbox.co.at
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
