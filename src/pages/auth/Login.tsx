import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, User, Key, Mail, ClipboardList, Clock, FileText, Send, LogOut, CheckCircle } from 'lucide-react';

export default function Login() {
  const [isRegistered, setIsRegistered] = useState(true); // Toggle login/register
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState({ name: 'Thomas K.', email: 'thomas@kundenmail.at', phone: '0664 1234567' });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });

  // Dashboard Tab state
  const [activeTab, setActiveTab] = useState('appointments'); // appointments, vehicles, invoices, contact
  const [chatMessage, setChatMessage] = useState('');
  const [chatStatus, setChatStatus] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsLoggedIn(true);
    }, 1000);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUserProfile({
        name: formData.name || 'Neuer Kunde',
        email: formData.email,
        phone: formData.phone || '0660 0000000'
      });
      setIsLoggedIn(true);
    }, 1200);
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    setChatStatus(true);
    setChatMessage('');
    setTimeout(() => {
      setChatStatus(false);
    }, 3000);
  };

  // Mock data for user portal
  const mockAppointments = [
    { id: '1023', date: '22.07.2026', time: '09:00', service: '§57a Überprüfung', status: 'Bestätigt', price: 'ab € 55' },
    { id: '0984', date: '14.04.2025', time: '14:30', service: 'Ölwechsel & Wartung', status: 'Abgeschlossen', price: '€ 49.00' }
  ];

  const mockVehicles = [
    { make: 'Volkswagen', model: 'Golf VII 1.5 TSI', year: '2018', licensePlate: 'W-12345-X', lastService: '14.04.2025 (Ölwechsel)', nextPickerl: 'Juli 2026' }
  ];

  const mockInvoices = [
    { id: 'INV-2025-084', date: '14.04.2025', amount: '€ 49.00', status: 'Bezahlt', file: 'rechnung_084.pdf' },
    { id: 'INV-2024-312', date: '10.11.2024', amount: '€ 65.00', status: 'Bezahlt', file: 'rechnung_312.pdf' }
  ];

  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out', maxWidth: isLoggedIn ? '1000px' : '480px' }}>
      
      {/* PORTAL LOGGED IN DASHBOARD */}
      {isLoggedIn ? (
        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2.5rem', alignItems: 'start' }}>
          
          {/* Left panel options bar */}
          <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase' }}>Kundenportal</div>
              <h3 style={{ margin: '0.25rem 0 0 0', fontSize: '1.25rem', color: 'var(--text-primary)' }}>{userProfile.name}</h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{userProfile.email}</span>
            </div>

            <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button 
                onClick={() => setActiveTab('appointments')}
                style={{
                  background: activeTab === 'appointments' ? 'var(--primary)' : 'transparent',
                  color: activeTab === 'appointments' ? '#000' : 'var(--text-primary)',
                  border: 'none', borderRadius: '8px', padding: '0.65rem 1rem', textAlign: 'left', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'
                }}
              >
                <Clock size={16} /> Meine Termine
              </button>
              <button 
                onClick={() => setActiveTab('vehicles')}
                style={{
                  background: activeTab === 'vehicles' ? 'var(--primary)' : 'transparent',
                  color: activeTab === 'vehicles' ? '#000' : 'var(--text-primary)',
                  border: 'none', borderRadius: '8px', padding: '0.65rem 1rem', textAlign: 'left', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'
                }}
              >
                <ClipboardList size={16} /> Mein Fahrzeug
              </button>
              <button 
                onClick={() => setActiveTab('invoices')}
                style={{
                  background: activeTab === 'invoices' ? 'var(--primary)' : 'transparent',
                  color: activeTab === 'invoices' ? '#000' : 'var(--text-primary)',
                  border: 'none', borderRadius: '8px', padding: '0.65rem 1rem', textAlign: 'left', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'
                }}
              >
                <FileText size={16} /> Rechnungen
              </button>
              <button 
                onClick={() => setActiveTab('contact')}
                style={{
                  background: activeTab === 'contact' ? 'var(--primary)' : 'transparent',
                  color: activeTab === 'contact' ? '#000' : 'var(--text-primary)',
                  border: 'none', borderRadius: '8px', padding: '0.65rem 1rem', textAlign: 'left', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem'
                }}
              >
                <Send size={16} /> Werkstatt Kontakt
              </button>
            </div>

            <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

            <button 
              onClick={() => setIsLoggedIn(false)} 
              className="btn btn-secondary btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}
            >
              <LogOut size={14} /> Abmelden
            </button>
          </div>

          {/* Right panel display board */}
          <div className="glass-card" style={{ minHeight: '400px' }}>
            
            {/* TAB: Appointments */}
            {activeTab === 'appointments' && (
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Meine Service-Termine</h3>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Buchungs-ID</th>
                        <th>Datum</th>
                        <th>Uhrzeit</th>
                        <th>Service</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockAppointments.map((app, idx) => (
                        <tr key={idx}>
                          <td style={{ color: 'var(--primary)', fontWeight: 700 }}>#{app.id}</td>
                          <td>{app.date}</td>
                          <td>{app.time} Uhr</td>
                          <td style={{ color: 'var(--text-primary)' }}>{app.service}</td>
                          <td>
                            <span style={{
                              background: app.status === 'Bestätigt' ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.05)',
                              color: app.status === 'Bestätigt' ? 'var(--success)' : 'var(--text-secondary)',
                              padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700
                            }}>
                              {app.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <p style={{ margin: 0, fontSize: '0.85rem' }}>Benötigen Sie einen neuen Termin?</p>
                  <Link to="/werkstatt/terminbuchung" className="btn btn-primary btn-sm">Termin buchen</Link>
                </div>
              </div>
            )}

            {/* TAB: Vehicles */}
            {activeTab === 'vehicles' && (
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Fahrzeughistorie</h3>
                
                {mockVehicles.map((car, idx) => (
                  <div key={idx} className="grid-2" style={{ gap: '1.5rem' }}>
                    <div style={{ background: 'var(--bg-dark)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.03)' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase' }}>Fahrzeug</div>
                      <h4 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', margin: '0.25rem 0' }}>{car.make} {car.model}</h4>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Kennzeichen: {car.licensePlate} · BJ: {car.year}</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', justifyContent: 'center' }}>
                      <div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Letzter Werkstattservice:</span>
                        <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem' }}>{car.lastService}</div>
                      </div>
                      <div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Nächstes Pickerl (§57a):</span>
                        <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.95rem' }}>{car.nextPickerl}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB: Invoices */}
            {activeTab === 'invoices' && (
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Rechnungen</h3>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Rechnungs-Nr.</th>
                        <th>Ausstellungsdatum</th>
                        <th>Betrag</th>
                        <th>Status</th>
                        <th>Dokument</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockInvoices.map((inv, idx) => (
                        <tr key={idx}>
                          <td style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{inv.id}</td>
                          <td>{inv.date}</td>
                          <td style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{inv.amount}</td>
                          <td><span style={{ color: 'var(--success)', fontWeight: 600 }}>{inv.status}</span></td>
                          <td>
                            <a href="#download" onClick={e => { e.preventDefault(); alert('Simulierter Rechnungsdownload gestartet.'); }} style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.85rem' }}>
                              PDF herunterladen
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB: Chat/Contact */}
            {activeTab === 'contact' && (
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Direktnachricht an die Werkstatt</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Haben Sie Fragen zur anstehenden Reparatur oder möchten Sie uns ein Foto eines Bauteils senden?</p>

                {chatStatus ? (
                  <div style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid var(--success)', padding: '1rem 1.5rem', borderRadius: '8px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    <CheckCircle size={20} style={{ color: 'var(--success)' }} /> Nachricht erfolgreich übermittelt. Wir antworten in Kürze!
                  </div>
                ) : null}

                <form onSubmit={handleSendChat}>
                  <div className="form-group">
                    <label className="form-label">Nachricht</label>
                    <textarea 
                      required 
                      rows={5} 
                      className="form-control" 
                      value={chatMessage} 
                      onChange={e => setChatMessage(e.target.value)}
                      placeholder="Geben Sie hier Ihre Nachricht ein (z.B. Zusatzwünsche zum Termin...)"
                      style={{ resize: 'none' }}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary"> Nachricht absenden </button>
                </form>
              </div>
            )}

          </div>

        </div>
      ) : (
        /* PORTAL LOGIN CARD */
        <div className="glass-card">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ background: 'var(--primary-glow)', color: 'var(--primary)', padding: '0.4rem', borderRadius: '50%', display: 'inline-flex', marginBottom: '1rem', border: '1px solid var(--border-color)' }}>
              <User size={24} />
            </span>
            <h2 style={{ fontSize: '1.75rem', margin: 0, color: 'var(--text-primary)' }}>Kundenportal Login</h2>
            <p style={{ fontSize: '0.9rem', margin: '0.25rem 0 0 0' }}>
              {isRegistered ? 'Melden Sie sich an, um Ihre Termine einzusehen.' : 'Erstellen Sie ein sicheres Kundenkonto.'}
            </p>
          </div>

          {isRegistered ? (
            /* Login Form */
            <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">E-Mail Adresse</label>
                <div style={{ position: 'relative' }}>
                  <input type="email" required className="form-control" style={{ paddingLeft: '2.5rem' }} placeholder="ihre@mail.at" />
                  <Mail size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Passwort</label>
                <div style={{ position: 'relative' }}>
                  <input type="password" required className="form-control" style={{ paddingLeft: '2.5rem' }} placeholder="••••••••" />
                  <Key size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                {loading ? 'Anmelden...' : 'Anmelden'}
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                Noch kein Konto? <a href="#register" onClick={(e) => { e.preventDefault(); setIsRegistered(false); }} style={{ color: 'var(--primary)', fontWeight: 600 }}>Jetzt registrieren</a>
              </div>
            </form>
          ) : (
            /* Registration Form */
            <form onSubmit={handleRegisterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="form-group">
                <label className="form-label">Vollständiger Name</label>
                <input type="text" required className="form-control" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Vor- & Nachname" />
              </div>

              <div className="form-group">
                <label className="form-label">E-Mail Adresse *</label>
                <input type="email" required className="form-control" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="E-Mail Adresse" />
              </div>

              <div className="form-group">
                <label className="form-label">Telefonnummer</label>
                <input type="tel" className="form-control" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="Telefonnummer" />
              </div>

              <div className="form-group">
                <label className="form-label">Passwort festlegen *</label>
                <input type="password" required className="form-control" value={formData.password} onChange={e => setFormData({ ...formData, password: e.target.value })} placeholder="Min. 8 Zeichen" />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                <ShieldCheck size={16} style={{ color: 'var(--success)' }} />
                <span>Passwörter werden verschlüsselt gespeichert (Supabase bcrypt).</span>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                {loading ? 'Konto wird erstellt...' : 'Jetzt registrieren'}
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                Bereits ein Konto? <a href="#login" onClick={(e) => { e.preventDefault(); setIsRegistered(true); }} style={{ color: 'var(--primary)', fontWeight: 600 }}>Hier anmelden</a>
              </div>
            </form>
          )}
        </div>
      )}

    </div>
  );
}
