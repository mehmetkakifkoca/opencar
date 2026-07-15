import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Euro, Tag, HelpCircle, CheckCircle } from 'lucide-react';

interface ServiceData {
  title: string;
  category: string;
  price: string;
  duration: string;
  description: string;
  scope: string[];
}

const serviceMap: Record<string, ServiceData> = {
  'pickerl': {
    title: '§57a Überprüfung',
    category: 'Prüfung',
    price: 'ab € 55',
    duration: '45–60 Min.',
    description: 'Die §57a Überprüfung (Pickerl) ist die gesetzlich vorgeschriebene Fahrzeugsicherheitsprüfung in Österreich. Als zugelassene Prüfstelle führen wir die Begutachtung nach §57a KFG durch und stellen das Pickerl direkt aus. Während der Überprüfung prüfen unsere Techniker systematisch alle sicherheitsrelevanten Bauteile: Bremsen, Lenkung, Beleuchtungsanlage, Abgasanlage, Fahrwerk, Reifen, Karosserie, Sichtfelder und die elektrische Anlage. Sollten kleinere Mängel festgestellt werden, können wir diese in vielen Fällen direkt vor Ort beheben.',
    scope: ['Zugelassene Prüfstelle nach §57a KFG', 'Pickerl-Ausstellung vor Ort', 'Sofortige Mängelbehebung möglich', 'Alle Fahrzeugklassen', 'Direktannahme ohne Wartezeit']
  },
  'inspektion': {
    title: 'KFZ-Inspektion',
    category: 'Wartung',
    price: 'auf Anfrage',
    duration: '1–2 Stunden',
    description: 'Eine regelmäßige Fahrzeuginspektion ist der Schlüssel zu einem langen und zuverlässigen Autoleben. Bei OpenCarBox führen wir Inspektionen herstellerkonform durch – unabhängig von der Marke Ihres Fahrzeugs. Das bedeutet: Ihre Herstellergarantie bleibt vollständig erhalten, und Ihr digitales Serviceheft wird fachgerecht aktualisiert. Unsere Inspektion umfasst die Prüfung aller wesentlichen Fahrzeugsysteme. Mit modernen Diagnosegeräten lesen wir den Fehlerspeicher aus und erkennen potenzielle Probleme frühzeitig.',
    scope: ['Alle Fahrzeugmarken', 'Herstellerkonforme Inspektion', 'Digitales Serviceheft', 'OEM-Qualitätsteile', 'Transparente Kostenaufstellung']
  },
  'lack-karosserie': {
    title: 'Lack & Karosserie',
    category: 'Karosserie',
    price: 'auf Anfrage',
    duration: 'je nach Umfang',
    description: 'Ob Parkrempler, Steinschlag oder Unfallschaden – unser Karosserie- und Lackservice bringt Ihr Fahrzeug wieder in den Originalzustand. Wir arbeiten mit modernen Lacksystemen und führen Farbanpassungen präzise anhand der Herstellerfarbcodes durch. Bei kleineren Beschädigungen setzen wir auf Smart Repair. Wir übernehmen auch die komplette Abwicklung mit Ihrer Versicherung.',
    scope: ['Unfallreparatur', 'Smart Repair (Dellen ohne Lackierung)', 'Lackausbesserung & Vollackierung', 'Steinschlagreparatur', 'Versicherungsabwicklung']
  },
  'reifenservice': {
    title: 'Reifenservice & Achsvermessung',
    category: 'Reifen',
    price: 'ab € 40',
    duration: '30–60 Min.',
    description: 'Reifen sind der einzige Kontakt zwischen Ihrem Fahrzeug und der Straße. Unser Reifenservice umfasst alles: professionelle Montage, computergestütztes Auswuchten, Reifenprofilmessung und saisonale Einlagerung. Darüber hinaus bieten wir eine präzise 3D-Achsvermessung an. Eine korrekte Spur- und Sturzeinstellung verlängert die Lebensdauer der Reifen und verbessert das Fahrverhalten. Nach jeder Achsvermessung erhalten Sie ein detailliertes Protokoll.',
    scope: ['Reifenmontage & Auswuchten', 'Saisonales Reifeneinlagern', 'Achsvermessung 3D', 'Spur- & Sturzkorrektur', 'Reifenverkauf auf Anfrage']
  },
  'klimaservice': {
    title: 'Klimaservice',
    category: 'Komfort',
    price: 'ab € 65',
    duration: '45–90 Min.',
    description: 'Eine gut funktionierende Klimaanlage trägt zur Sicherheit und Gesundheit bei. Über die Jahre verliert jede Klimaanlage natürlich an Kältemittel. Bei unserem Klimaservice befüllen wir Ihre Anlage mit dem vorgeschriebenen Kältemittel (R134a oder R1234yf), führen eine Dichtheitsprüfung durch und desinfizieren das gesamte Klimasystem. Empfehlung: alle 2 Jahre, idealerweise im Frühjahr.',
    scope: ['R134a und R1234yf Befüllung', 'Klimaanlage Desinfektion', 'Lecksuche & Reparatur', 'Filteraustausch', 'Saisonales Checkup-Paket']
  },
  'oelwechsel': {
    title: 'Ölwechsel & Wartung',
    category: 'Wartung',
    price: 'ab € 39',
    duration: '30–45 Min.',
    description: 'Der regelmäßige Ölwechsel gehört zu den wichtigsten Wartungsmaßnahmen. Bei OpenCarBox verwenden wir ausschließlich hochwertige Markenöle von Castrol, Mobil und Shell in der exakten Spezifikation des Fahrzeugherstellers. Zum Ölwechsel gehört selbstverständlich der Tausch des Ölfilters und ein kurzer Sicherheitscheck – ohne Aufpreis. Empfehlung: alle 15.000–30.000 km oder mindestens 1x/Jahr.',
    scope: ['Markenöle (Castrol, Mobil, Shell)', 'Ölfiltertausch inklusive', 'Alle Fahrzeugmarken', 'Fahrzeugcheck beim Ölwechsel', 'Kurze Wartezeiten']
  },
  'dpf-reinigung': {
    title: 'DPF-Reinigung',
    category: 'Motor',
    price: 'ab € 120',
    duration: '1–3 Stunden',
    description: 'Der Dieselpartikelfilter (DPF) filtert schädliche Rußpartikel aus den Abgasen. Im Laufe der Zeit kann er sich zusetzen – besonders bei häufigem Kurzstreckenbetrieb. Symptome: Leistungsverlust, erhöhter Kraftstoffverbrauch, DPF-Warnleuchte, Notlauf. Unsere Reinigung stellt die volle Funktion wieder her – oft ohne Ausbau des Filters. Das Ergebnis bestätigen wir mit einem Diagnosebericht.',
    scope: ['Professionelle Nassreinigung', 'Zwangsregeneration', 'DPF-Diagnose & Auslesen', 'Deutlich günstiger als Austausch', 'Garantie auf Reinigung']
  },
  'autoglaserei': {
    title: 'Autoglaserei',
    category: 'Glas',
    price: 'auf Anfrage',
    duration: '1–2 Stunden',
    description: 'Ein Steinschlag in der Windschutzscheibe kann ein Sicherheitsrisiko darstellen. Bei einer Steinschlagreparatur wird der beschädigte Bereich mit speziellem Harz versiegelt – schnell, kostengünstig, und oft vollständig von der Teilkaskoversicherung übernommen. Nach jedem Scheibentausch ist eine professionelle Kalibrierung der Fahrerassistenzsysteme (ADAS) erforderlich – auch das erledigen wir.',
    scope: ['Steinschlagreparatur', 'Windschutzscheibentausch', 'ADAS-Kalibrierung', 'Versicherungsabwicklung', 'Original- und OEM-Qualitätsglas']
  },
  'bremsenservice': {
    title: 'Bremsenservice',
    category: 'Sicherheit',
    price: 'auf Anfrage',
    duration: '1–3 Stunden',
    description: 'Eine einwandfrei funktionierende Bremsanlage ist die Grundlage für sicheres Fahren. Unser Service umfasst die vollständige Prüfung: Bremsbeläge, Bremsscheiben, Bremssättel, Bremsleitungen, Bremsflüssigkeit und ABS-System. Warnsignale: quietschende/schleifende Geräusche, längerer Bremsweg, weiches Bremspedal, Bremsenwarnleuchte.',
    scope: ['Bremsbeläge & Bremsscheiben', 'Bremssättel & Bremsleitungen', 'Bremsflüssigkeit wechseln', 'ABS-Diagnose & Reparatur', 'OEM-Qualitätsteile']
  },
  'fahrzeugdiagnose': {
    title: 'Fahrzeugdiagnose',
    category: 'Diagnose',
    price: 'auf Anfrage',
    duration: '30–60 Min.',
    description: 'Moderne Fahrzeuge speichern Fehlercodes, wenn ein Problem auftritt. Mit unseren professionellen Diagnosegeräten lesen wir diese aus und interpretieren sie gezielt. Wir gehen weit über das einfache „Fehlerspeicher auslesen" hinaus – wir analysieren Live-Daten aller Steuergeräte und prüfen Sensorwerte in Echtzeit. Anwendungsfälle: Motorwarnleuchte, Leistungsverlust, ABS/ESP-Fehler, Airbag-Warnleuchte.',
    scope: ['Fehlerspeicher auslesen', 'Live-Daten-Analyse', 'Alle Steuergeräte', 'Sensoren & Aktuatoren prüfen', 'Detaillierter Diagnosebericht']
  },
  'batterieservice': {
    title: 'Batterieservice',
    category: 'Elektrik',
    price: 'ab € 25',
    duration: '15–30 Min.',
    description: 'Die Starterbatterie ist das Herzstück der elektrischen Anlage – besonders im Winter unverzichtbar. Wir prüfen Ladezustand und Kapazität, reinigen die Batteriepole und erkennen frühzeitig Austauschdarf. Wir verwenden Markenbatterien (Varta, Bosch). Bei Start-Stopp-Fahrzeugen achten wir auf die korrekte AGM- oder EFB-Technologie und melden die neue Batterie im Steuergerät an.',
    scope: ['Batterietest & Kapazitätsprüfung', 'Batteriepole reinigen', 'Markenbatterien (Varta, Bosch)', 'AGM/EFB für Start-Stopp', 'Batterieanmeldung im Steuergerät']
  },
  'fahrwerk': {
    title: 'Fahrwerk & Stoßdämpfer',
    category: 'Fahrwerk',
    price: 'auf Anfrage',
    duration: '1–4 Stunden',
    description: 'Defekte Stoßdämpfer verlängern den Bremsweg, verschlechtern die Straßenlage und erhöhen den Reifenverschleiß. Wir verwenden hochwertige Fahrwerksteile von Monroe, Bilstein und Sachs.',
    scope: ['Stoßdämpfer tauschen', 'Federn & Federbeine', 'Querlenker & Traggelenke', 'Stabilisatoren & Koppelstangen', 'Fahrwerksvermessung']
  },
  'getriebeservice': {
    title: 'Getriebeservice',
    category: 'Antrieb',
    price: 'ab € 150',
    duration: '1–2 Stunden',
    description: 'Das Getriebe gehört zu den teuersten Baugruppen – ein regelmäßiger Service ist eine Investition in die Langlebigkeit. Bei Automatikgetrieben empfehlen wir einen Ölwechsel alle 60.000–80.000 km. Dabei wird Öl getauscht, Getriebeölfilter erneuert und das System gespült.',
    scope: ['Getriebeölwechsel (Automatik & Schaltung)', 'Getriebeölfilter tauschen', 'Getriebespülung', 'Getriebefehlerspeicher auslesen', 'DSG / CVT / Wandler-Service']
  }
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !serviceMap[slug]) {
    return (
      <div className="container section" style={{ textAlign: 'center' }}>
        <h2>Service nicht gefunden</h2>
        <p>Der angeforderte Service existiert leider nicht.</p>
        <Link to="/werkstatt/leistungen" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
          Zurück zur Übersicht
        </Link>
      </div>
    );
  }

  const srv = serviceMap[slug];

  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out' }}>
      
      {/* Breadcrumb */}
      <div style={{ marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <Link to="/werkstatt" style={{ color: 'var(--text-secondary)' }}>Werkstatt</Link>
        <span style={{ margin: '0 0.5rem' }}>/</span>
        <Link to="/werkstatt/leistungen" style={{ color: 'var(--text-secondary)' }}>Leistungen</Link>
        <span style={{ margin: '0 0.5rem' }}>/</span>
        <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{srv.title}</span>
      </div>

      <Link to="/werkstatt/leistungen" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.9rem' }}>
        <ArrowLeft size={16} /> Zurück zur Übersicht
      </Link>

      <div className="grid-3" style={{ alignItems: 'start', gap: '3rem' }}>
        
        {/* Main Content (2 columns span) */}
        <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          <div>
            <span className="badge" style={{ marginBottom: '1rem' }}>{srv.category}</span>
            <h1 style={{ marginBottom: '1.5rem' }}>{srv.title}</h1>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-primary)' }}>
              {srv.description}
            </p>
          </div>

          <div className="glass-card">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              Was wir anbieten / Leistungsumfang
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {srv.scope.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={20} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Sidebar Info */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'sticky', top: '120px' }}>
          <h3 style={{ fontSize: '1.25rem', margin: 0, color: '#FFF' }}>Details zum Service</h3>
          
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Euro size={20} style={{ color: 'var(--primary)' }} />
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Preis</div>
              <div style={{ fontWeight: 700, color: '#FFF' }}>{srv.price}</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Clock size={20} style={{ color: 'var(--primary)' }} />
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Dauer</div>
              <div style={{ fontWeight: 700, color: '#FFF' }}>{srv.duration}</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Tag size={20} style={{ color: 'var(--primary)' }} />
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Kategorie</div>
              <div style={{ fontWeight: 700, color: '#FFF' }}>{srv.category}</div>
            </div>
          </div>

          <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

          <Link to={`/werkstatt/terminbuchung?service=${slug}`} className="btn btn-primary" style={{ width: '100%' }}>
            Jetzt buchen
          </Link>

          <Link to="/werkstatt/faq" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            <HelpCircle size={14} /> Zu den FAQ
          </Link>
        </div>

      </div>

    </div>
  );
}
