import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car, Search, Calendar, Compass, ShieldCheck, Mail, ArrowRight } from 'lucide-react';

interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  km: number;
  price: number;
  engine: string;
  transmission: 'Automatik' | 'Schaltgetriebe';
  pickerl: string;
  image: string;
}

const mockVehicles: Vehicle[] = [
  {
    id: 1,
    brand: 'Audi',
    model: 'A4 Avant 2.0 TFSI S-line',
    year: 2021,
    km: 45000,
    price: 28900,
    engine: 'Benzin / 150 PS',
    transmission: 'Automatik',
    pickerl: '06/2027',
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    brand: 'Volkswagen',
    model: 'Golf VIII 1.5 TSI Style',
    year: 2020,
    km: 38000,
    price: 21490,
    engine: 'Benzin / 130 PS',
    transmission: 'Schaltgetriebe',
    pickerl: '09/2026',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    brand: 'BMW',
    model: '320d xDrive Touring M-Sport',
    year: 2020,
    km: 68000,
    price: 26800,
    engine: 'Diesel / 190 PS',
    transmission: 'Automatik',
    pickerl: '11/2026',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 4,
    brand: 'Skoda',
    model: 'Octavia Combi 2.0 TDI Premium',
    year: 2019,
    km: 89000,
    price: 18450,
    engine: 'Diesel / 150 PS',
    transmission: 'Automatik',
    pickerl: '04/2027',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 5,
    brand: 'Mercedes-Benz',
    model: 'A 180 d Progressive',
    year: 2018,
    km: 74000,
    price: 19900,
    engine: 'Diesel / 116 PS',
    transmission: 'Schaltgetriebe',
    pickerl: '07/2026',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 6,
    brand: 'Ford',
    model: 'Kuga 1.5 EcoBoost Titanium',
    year: 2020,
    km: 55000,
    price: 22800,
    engine: 'Benzin / 150 PS',
    transmission: 'Schaltgetriebe',
    pickerl: '10/2026',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=400'
  }
];

export default function AutohandelFahrzeuge() {
  const [search, setSearch] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [maxPrice, setMaxPrice] = useState(35000);

  const filteredVehicles = mockVehicles.filter(veh => {
    const matchesSearch = `${veh.brand} ${veh.model}`.toLowerCase().includes(search.toLowerCase());
    const matchesBrand = selectedBrand === 'All' || veh.brand === selectedBrand;
    const matchesPrice = veh.price <= maxPrice;
    return matchesSearch && matchesBrand && matchesPrice;
  });

  const brands = ['All', 'Audi', 'Volkswagen', 'BMW', 'Skoda', 'Mercedes-Benz', 'Ford'];

  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out' }}>
      
      {/* Page Title */}
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>Unsere Fahrzeuge</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          Jedes Auto wird in unserer Meisterwerkstatt am Rennweg 76 gründlich geprüft, professionell aufbereitet und mit 12 Monaten Garantie übergeben.
        </p>
      </div>

      {/* Dynamic Filters Layout */}
      <div className="glass-card" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', padding: '1.5rem', marginBottom: '3rem', alignItems: 'center' }}>
        
        {/* Search */}
        <div style={{ flex: 1, minWidth: '220px', position: 'relative' }}>
          <input 
            type="text" 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
            placeholder="Marke oder Modell suchen..." 
            className="form-control" 
            style={{ paddingLeft: '2.5rem' }}
          />
          <Search size={18} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        </div>

        {/* Brand selection dropdown */}
        <div style={{ minWidth: '180px' }}>
          <select 
            value={selectedBrand} 
            onChange={e => setSelectedBrand(e.target.value)} 
            className="form-control"
          >
            {brands.map((b, idx) => (
              <option key={idx} value={b} style={{ background: 'var(--bg-surface)' }}>
                {b === 'All' ? 'Alle Marken' : b}
              </option>
            ))}
          </select>
        </div>

        {/* Price Slider */}
        <div style={{ minWidth: '220px', display: 'flex', flexDirection: 'column', gap: '0.25rem', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <span>Max. Preis:</span>
            <strong style={{ color: 'var(--text-primary)' }}>€ {maxPrice.toLocaleString('de-DE')}</strong>
          </div>
          <input 
            type="range" 
            min={15000} 
            max={35000} 
            step={1000} 
            value={maxPrice} 
            onChange={e => setMaxPrice(Number(e.target.value))} 
            style={{ accentColor: 'var(--primary)', cursor: 'pointer' }}
          />
        </div>

      </div>

      {/* Catalog Grid */}
      {filteredVehicles.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
          <p style={{ fontSize: '1.1rem' }}>Keine Fahrzeuge gefunden, die Ihren Kriterien entsprechen.</p>
          <button onClick={() => { setSearch(''); setSelectedBrand('All'); setMaxPrice(35000); }} className="btn btn-secondary" style={{ marginTop: '1rem' }}>
            Filter zurücksetzen
          </button>
        </div>
      ) : (
        <div className="grid-3" style={{ marginBottom: '4rem' }}>
          {filteredVehicles.map(veh => (
            <div key={veh.id} className="glass-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
              
              {/* Car photo */}
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={veh.image} 
                  alt={`${veh.brand} ${veh.model}`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition-normal)' }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1.0)'}
                />
                <span className="badge" style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#000', color: 'var(--primary)' }}>
                  {veh.transmission}
                </span>
              </div>

              {/* Card specs details */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>{veh.brand} {veh.model}</h3>
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>
                    € {veh.price.toLocaleString('de-DE')}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.8rem', marginTop: '1.25rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Calendar size={14} style={{ color: 'var(--primary)' }} /> EZ {veh.year}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Compass size={14} style={{ color: 'var(--primary)' }} /> {veh.km.toLocaleString('de-DE')} km
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Car size={14} style={{ color: 'var(--primary)' }} /> {veh.engine}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <ShieldCheck size={14} style={{ color: 'var(--primary)' }} /> Pickerl {veh.pickerl}
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.25rem', marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <Link to={`/autohandel/anfrage?car=${veh.brand} ${veh.model}`} className="btn btn-primary btn-sm" style={{ flex: 1 }}>
                    <Mail size={14} /> Anfrage
                  </Link>
                  <Link to={`/autohandel/finanzierung?price=${veh.price}`} className="btn btn-secondary btn-sm" style={{ flex: 1 }}>
                    Finanzierung
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>
      )}

      {/* Lower Banner CTA */}
      <div className="glass-card grid-2" style={{ alignItems: 'center', padding: '3rem' }}>
        <div>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Suchen Sie ein bestimmtes Modell?</h3>
          <p style={{ margin: 0 }}>Übermitteln Sie uns einfach eine Suchanfrage. Wir importieren und besorgen Ihr Wunschauto.</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link to="/autohandel/anfrage" className="btn btn-primary">
            Suchauftrag erteilen <ArrowRight size={18} />
          </Link>
        </div>
      </div>

    </div>
  );
}
