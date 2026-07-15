


export default function Datenschutz() {
  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out', maxWidth: '800px' }}>
      <h1 style={{ marginBottom: '2.5rem' }}>Datenschutzerklärung</h1>

      <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', lineHeight: '1.7', fontSize: '0.95rem' }}>
        
        <div>
          <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>1. Verantwortliche Stelle</h3>
          <p style={{ margin: 0 }}>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist die:<br />
            <strong>OpenCarBox GmbH</strong>, vertreten durch Geschäftsführer <strong>Arac Metehan</strong>.<br />
            Rennweg 76, 1030 Wien, Österreich · E-Mail: office@opencarbox.co.at
          </p>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

        <div>
          <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>2. Kundenportal & Authentifizierung (Supabase)</h3>
          <p style={{ margin: 0 }}>
            Für die Anmeldung und den Betrieb unseres geschützten Kundenportals nutzen wir den Cloud-Dienst <strong>Supabase</strong>. Bei der Registrierung erheben wir Ihren Namen, E-Mail-Adresse, Telefonnummer und ein Passwort. Die Passwörter werden mittels moderner Hashing-Algorithmen (bcrypt) unumkehrbar verschlüsselt gespeichert. Eine Übermittlung an unbefugte Dritte findet nicht statt.
          </p>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

        <div>
          <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>3. KI-Chatbot Integration (nscale GmbH)</h3>
          <p style={{ margin: 0 }}>
            Für die automatische Beantwortung von Kundenanfragen nutzen wir ein Chat-Widget der <strong>nscale GmbH</strong> (Deutschland). Die Eingaben im Chat-Fenster werden zur Echtzeit-Beantwortung an die Server der nscale GmbH übertragen. Es werden dabei keine permanenten Nutzerprofile angelegt.
          </p>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

        <div>
          <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>4. Online-Zahlung (Stripe)</h3>
          <p style={{ margin: 0 }}>
            In unserem Online-Shop Carvantooo sowie bei der Online-Terminanzahlung nutzen wir den Zahlungsdienstleister <strong>Stripe Payments Europe Ltd.</strong> (Irland/EU). Die Kreditkartendaten werden direkt von Stripe über verschlüsselte Verbindungen verarbeitet. Stripe ist unter dem EU-US Data Privacy Framework zertifiziert, um ein angemessenes Datenschutzniveau zu garantieren.
          </p>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

        <div>
          <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>5. Cookies</h3>
          <p style={{ margin: 0 }}>
            Wir verwenden Cookies, um die Funktion des Warenkorbs und die Portal-Authentifizierung zu gewährleisten. Optionale Cookies zu Analyse- oder Marketingzwecken werden erst nach Ihrer ausdrücklichen Zustimmung (Opt-in) aktiviert.
          </p>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

        <div>
          <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>6. Aufsichtsbehörde & Betroffenenrechte</h3>
          <p style={{ margin: 0 }}>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten. Beschwerden können an die zuständige Aufsichtsbehörde gerichtet werden:<br />
            <strong>Österreichische Datenschutzbehörde</strong>, Barichgasse 40-42, 1030 Wien · E-Mail: dsb@dsb.gv.at
          </p>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

        <div>
          <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>7. Datenspeicherfristen</h3>
          <p style={{ margin: 0 }}>
            Kontaktanfragen werden ca. 6 Monate zur Bearbeitung gespeichert. Steuerlich relevante Vertrags- und Rechnungsdaten werden gemäß § 132 BAO für 7 Jahre aufbewahrt. Allgemeine Server-Logfiles werden nach 14 Tagen automatisch gelöscht.
          </p>
        </div>

        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem', marginTop: '1rem' }}>
          Letzte Aktualisierung: März 2026
        </div>

      </div>
    </div>
  );
}
