

export default function AGB() {
  const sections = [
    { title: '§1 Geltungsbereich', text: 'Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Dienstleistungen, Reparaturaufträge und Kaufverträge, die Kunden mit der OpenCarBox GmbH abschließen.' },
    { title: '§2 Leistungen', text: 'Die OpenCarBox GmbH erbringt KFZ-Reparaturen, Pickerl-Überprüfungen (§57a), Lackierungen, Glasreparaturen, Reifenservices und Autohandels-Aktivitäten gemäß Meisterstandard.' },
    { title: '§3 Terminvereinbarung', text: 'Termine können telefonisch, persönlich oder über unser Online-Terminbuchungssystem reserviert werden. Reservierungen werden am selben Tag bestätigt.' },
    { title: '§4 Kostenvoranschlag', text: 'Wir erstellen vor jeder Reparatur einen Kostenvoranschlag. Sollten die tatsächlichen Kosten den Voranschlag um mehr als 15% überschreiten, ist eine vorherige Zustimmung des Kunden zwingend erforderlich.' },
    { title: '§5 Preise & Zahlung', text: 'Alle angegebenen Preise verstehen sich inklusive 20% österreichischer Umsatzsteuer. Zahlungen erfolgen unmittelbar nach Fertigstellung bei Übergabe des Fahrzeugs. Akzeptiert werden Barzahlung, Bankomatkarten, sowie Visa- und Mastercard-Kreditkarten.' },
    { title: '§6 Eigentumsvorbehalt', text: 'Alle verbauten Ersatzteile und gelieferten Waren (inkl. Fahrzeuge) verbleiben bis zur vollständigen Bezahlung im uneingeschränkten Eigentum der OpenCarBox GmbH.' },
    { title: '§7 Gewährleistung', text: 'Wir bieten die gesetzlich vorgeschriebene Gewährleistungsfrist von 2 Jahren auf alle durchgeführten Werkstattarbeiten und verbauten Neuteile.' },
    { title: '§8 Haftung', text: 'Die Haftung für leicht fahrlässig verursachte Sachschäden ist ausgeschlossen, es sei denn, es handelt sich um Personenschäden oder Kernpflichtverletzungen des Vertrags.' },
    { title: '§9 Standgeld', text: 'Fahrzeuge, die nach schriftlicher oder telefonischer Benachrichtigung der Fertigstellung nicht innerhalb von 14 Tagen abgeholt werden, unterliegen einer Standgebühr von € 10 pro Kalendertag.' },
    { title: '§10 Datenschutz', text: 'Sämtliche personenbezogenen Daten werden vertraulich und entsprechend den gesetzlichen Bestimmungen der DSGVO behandelt.' },
    { title: '§11 Gerichtsstand', text: 'Als ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag wird das sachlich zuständige Gericht in Wien vereinbart.' },
    { title: '§12 Online-Shop & Stripe', text: 'Bei Käufen über den Carvantooo Online-Shop gilt ein gesetzliches 14-tägiges Widerrufsrecht für Verbraucher. Online-Zahlungen werden sicher über den externen Zahlungsdienstleister Stripe abgewickelt.' },
    { title: '§13 Schlussbestimmungen', text: 'Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt dies die Wirksamkeit der übrigen Klauseln nicht.' }
  ];

  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out', maxWidth: '800px' }}>
      <h1 style={{ marginBottom: '2.5rem' }}>Allgemeine Geschäftsbedingungen (AGB)</h1>
      
      <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', lineHeight: '1.7' }}>
        {sections.map((sec, idx) => (
          <div key={idx} style={{ borderBottom: idx < sections.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none', paddingBottom: idx < sections.length - 1 ? '1.5rem' : 0 }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>{sec.title}</h3>
            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{sec.text}</p>
          </div>
        ))}

        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem', marginTop: '1rem' }}>
          Letzte Aktualisierung: März 2026
        </div>
      </div>
    </div>
  );
}
