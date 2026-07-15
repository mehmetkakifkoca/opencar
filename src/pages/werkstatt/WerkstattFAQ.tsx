import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export default function WerkstattFAQ() {
  const faqData: FAQCategory[] = [
    {
      title: 'Termine & Ablauf',
      items: [
        { q: 'Wie buche ich einen Termin?', a: 'Sie können Ihren Termin bequem online über unsere Terminbuchungsseite buchen oder uns telefonisch unter 01 7981310 kontaktieren. Sie erhalten Ihre Bestätigung in der Regel noch am selben Tag.' },
        { q: 'Wie lange dauert eine §57a Überprüfung?', a: 'Eine §57a Überprüfung (Pickerl) dauert in der Regel 45–60 Minuten. Das Pickerl wird meist noch am selben Tag ausgestellt.' },
        { q: 'Kann ich auf mein Fahrzeug warten?', a: 'Ja, wir haben einen komfortablen Wartebereich für kurze Services eingerichtet. Während Ihr Auto geprüft wird, können Sie gerne eine Tasse Kaffee trinken.' },
        { q: 'Bieten Sie einen Hol- & Bringservice an?', a: 'Ja, wir bieten für unsere Kunden einen Hol- & Bringservice auf Anfrage an. Kontaktieren Sie uns für Details bezüglich Ihres Standorts.' },
        { q: 'Muss ich einen Termin vereinbaren?', a: 'Eine Terminvereinbarung wird empfohlen, um Wartezeiten zu vermeiden. Bei akuten Notfällen bieten wir selbstverständlich sofortige Hilfe an.' },
        { q: 'Wie sind Ihre Öffnungszeiten?', a: 'Unsere Werkstatt ist von Montag bis Freitag von 08:00 bis 18:00 Uhr und samstags von 08:00 bis 13:00 Uhr geöffnet.' }
      ]
    },
    {
      title: '§57a Überprüfung',
      items: [
        { q: 'Was wird beim Pickerl geprüft?', a: 'Es werden alle sicherheitsrelevanten Baugruppen kontrolliert: Bremsen, Lenkung, Beleuchtung, Abgasanlage, Fahrwerk, Reifen, Karosserie, Sichtfelder, Gurte und die elektrische Anlage.' },
        { q: 'Was kostet das Pickerl?', a: 'Für Personenkraftwagen (PKW) bieten wir die §57a Überprüfung ab € 55 an.' },
        { q: 'Was passiert bei Mängeln?', a: 'Leichte Mängel werden im Prüfbericht vermerkt und sollten zeitnah behoben werden. Bei schweren Mängeln ist eine Nachprüfung erforderlich. Viele Mängel können wir direkt vor Ort beheben, um Ihnen einen zweiten Termin zu ersparen.' },
        { q: 'Wie oft muss mein Fahrzeug zum Pickerl?', a: 'Bei Neuwagen gilt die 3-2-1 Regel: Erste Überprüfung nach 3 Jahren ab Erstzulassung, die zweite nach weiteren 2 Jahren und danach jährlich.' },
        { q: 'Welche Unterlagen muss ich mitbringen?', a: 'Bitte bringen Sie den Zulassungsschein (Teil I und Teil II) zum Überprüfungstermin mit.' }
      ]
    },
    {
      title: 'Leistungen & Preise',
      items: [
        { q: 'Welche Automarken werden serviciert?', a: 'Wir servicieren alle gängigen Marken, darunter VW, Audi, BMW, Mercedes, Opel, Skoda, Seat, Peugeot, Renault, Toyota, Honda, Hyundai, Kia, Ford und viele mehr.' },
        { q: 'Bekomme ich einen Kostenvoranschlag?', a: 'Ja, Sie erhalten vor jedem Eingriff einen detaillierten und klaren Kostenvoranschlag. Arbeiten starten erst nach Ihrer ausdrücklichen Zustimmung.' },
        { q: 'Verwenden Sie Originalteile?', a: 'Als Standard verwenden wir hochwertige OEM-konforme Ersatzteile. Auf Wunsch verbauen wir selbstverständlich auch Originalteile des jeweiligen Fahrzeugherstellers.' },
        { q: 'Was kostet eine Fahrzeugdiagnose?', a: 'Bei vielen unserer Reparaturservices ist die Diagnose bereits inklusive. Für reine Diagnosen erstellen wir Ihnen gerne ein individuelles Angebot.' },
        { q: 'Gibt es eine Garantie auf die Werkstattarbeiten?', a: 'Ja, Sie erhalten die gesetzliche Gewährleistung von 2 Jahren auf alle durchgeführten Werkstattarbeiten.' }
      ]
    },
    {
      title: 'Kundenportal',
      items: [
        { q: 'Was ist das Kundenportal?', a: 'Das Kundenportal ist Ihr persönlicher Online-Bereich. Hier können Sie Ihre Termine einsehen, Rechnungen verwalten, Ihre Fahrzeughistorie abrufen und unkompliziert mit uns kommunizieren.' },
        { q: 'Wie kann ich mich registrieren?', a: 'Klicken Sie oben auf „Login" und wählen Sie dann „Jetzt registrieren". Geben Sie Ihren Namen, Ihre E-Mail, Telefonnummer und ein sicheres Passwort an.' },
        { q: 'Wie sicher sind meine Daten im Portal?', a: 'Sicherheit steht bei uns an oberster Stelle. Sämtliche Verbindungen sind HTTPS-verschlüsselt, Passwörter werden sicher gehasht (bcrypt) und das System ist vollständig DSGVO-konform.' },
        { q: 'Kann ich gebuchte Termine im Portal ändern?', a: 'Ja, Sie können gebuchte Termine einsehen und Änderungen direkt an unser Team übermitteln.' }
      ]
    },
    {
      title: 'Rund ums Fahrzeug',
      items: [
        { q: 'Wie oft muss mein Auto zur Inspektion?', a: 'Das hängt vom Hersteller ab. In der Regel empfehlen wir eine Inspektion alle 15.000 bis 30.000 Kilometer oder mindestens einmal im Jahr.' },
        { q: 'Wann gilt die Winterreifenpflicht?', a: 'In Österreich gilt die situative Winterreifenpflicht vom 1. November bis 15. April. Die gesetzliche Mindestprofiltiefe beträgt 1,6 mm, wir empfehlen jedoch mindestens 3 mm bei Sommerreifen und 4 mm bei Winterreifen.' },
        { q: 'Kann ich mein Auto nach der Reparatur stehen lassen?', a: 'Ja, Sie können Ihr Auto nach Absprache stehen lassen. Bitte beachten Sie jedoch, dass nach Ablauf von 14 Tagen ab Fertigstellung ein Standgeld von € 10 pro Tag verrechnet werden kann.' }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (catIdx: number, itemIdx: number) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out' }}>
      
      {/* Title */}
      <div style={{ marginBottom: '4rem', maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '1rem' }}>Häufige Fragen (FAQ)</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          Hier finden Sie Antworten auf die am häufigsten gestellten Fragen zu unseren Services, Abläufen und Preisen.
        </p>
      </div>

      {/* Interactive FAQ Tabs */}
      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '3rem', alignItems: 'start' }}>
        
        {/* Left Tabs Bar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {faqData.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              style={{
                background: activeTab === idx ? 'var(--primary)' : 'rgba(255,168,0,0.02)',
                color: activeTab === idx ? '#000' : 'var(--text-primary)',
                border: activeTab === idx ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                padding: '0.8rem 1.25rem',
                borderRadius: '8px',
                textAlign: 'left',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Right Accordion List */}
        <div>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
            {faqData[activeTab].title}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqData[activeTab].items.map((item, idx) => {
              const isOpen = !!openItems[`${activeTab}-${idx}`];
              return (
                <div key={idx} className="accordion">
                  <div 
                    className="accordion-header"
                    onClick={() => toggleItem(activeTab, idx)}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: isOpen ? 'var(--primary)' : '#FFF' }}>
                      <HelpCircle size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                      {item.q}
                    </span>
                    {isOpen ? <ChevronUp size={18} style={{ color: 'var(--primary)' }} /> : <ChevronDown size={18} />}
                  </div>
                  <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                    <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .container.section > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </div>
  );
}
