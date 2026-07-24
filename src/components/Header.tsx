import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Menu, X, Phone, Clock, MapPin, ChevronDown } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Header() {
  const location = useLocation();
  const path = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Determine active main section
  let activeSection: 'werkstatt' | 'autohandel' | 'shop' | 'none' = 'werkstatt';
  if (path.startsWith('/autohandel')) {
    activeSection = 'autohandel';
  } else if (path.startsWith('/shop')) {
    activeSection = 'shop';
  } else if (path.startsWith('/auth') || path.startsWith('/impressum') || path.startsWith('/datenschutz') || path.startsWith('/agb')) {
    activeSection = 'none';
  }

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  // Top bar dynamic variables based on section
  const isAutohandel = activeSection === 'autohandel';
  const topPhone = isAutohandel ? '01 9972708' : '01 7981310';
  const topHours = isAutohandel ? 'Mo-Fr: 08:00-18:00 | Sa: 10:00-15:00' : 'Mo-Fr: 08:00-18:00 | Sa: 08:00-13:00';
  const topAddress = isAutohandel ? 'Favoritenstraße 175, 1100 Wien' : 'Rennweg 76, 1030 Wien';

  const servicesList = [
    { name: '§57a Überprüfung', slug: 'pickerl' },
    { name: 'KFZ-Inspektion', slug: 'inspektion' },
    { name: 'Lack & Karosserie', slug: 'lack-karosserie' },
    { name: 'Reifenservice & Achsvermessung', slug: 'reifenservice' },
    { name: 'Klimaservice', slug: 'klimaservice' },
    { name: 'Ölwechsel & Wartung', slug: 'oelwechsel' },
    { name: 'DPF-Reinigung', slug: 'dpf-reinigung' },
    { name: 'Autoglaserei', slug: 'autoglaserei' },
    { name: 'Bremsenservice', slug: 'bremsenservice' },
    { name: 'Fahrzeugdiagnose', slug: 'fahrzeugdiagnose' },
    { name: 'Batterieservice', slug: 'batterieservice' },
    { name: 'Fahrwerk & Stoßdämpfer', slug: 'fahrwerk' },
    { name: 'Getriebeservice', slug: 'getriebeservice' }
  ];

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 10px rgba(0,0,0,0.15)' }}>
      
      {/* 1. TOP BAR (Pure Black background, small text) */}
      <div style={{ background: '#000000', color: '#B3B3B3', padding: '0.4rem 0', fontSize: '0.75rem', borderBottom: '1px solid #1A1A1A' }} className="desktop-only">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Left info: Phone & Hours */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#FFA800', fontWeight: 600 }}>
              <Phone size={12} style={{ color: '#FFA800' }} /> {topPhone}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={12} /> {topHours}
            </span>
          </div>

          {/* Right info: Address & Partner Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <MapPin size={12} /> {topAddress}
            </span>
            {!isAutohandel && (
              <span style={{ color: '#FFA800', fontWeight: 600, borderLeft: '1px solid #333', paddingLeft: '1.5rem' }}>
                BestDrive by Continental Partner
              </span>
            )}
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVBAR (Pure White background, dark text) */}
      <div style={{ background: '#FFFFFF', padding: '0.6rem 0', borderBottom: '1px solid #E5E7EB' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Left Logo and Section Selector box */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            
            {/* Logo */}
            <Link to="/werkstatt" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
              <img src={logoImg} alt="OpenCarBox Logo" style={{ height: '30px', objectFit: 'contain' }} />
            </Link>

            {/* Division Selector Box (WERKSTATT | AUTOHANDEL | SHOP | B2B) */}
            <div className="desktop-only" style={{ display: 'flex', border: '1px solid #E5E7EB', borderRadius: '4px', overflow: 'hidden' }}>
              
              <Link 
                to="/werkstatt" 
                style={{
                  background: activeSection === 'werkstatt' ? '#000000' : 'transparent',
                  color: activeSection === 'werkstatt' ? '#FFFFFF' : '#6B7280',
                  padding: '0.35rem 0.8rem',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  transition: 'var(--transition-fast)',
                  borderRight: '1px solid #E5E7EB'
                }}
              >
                WERKSTATT
              </Link>
              
              <Link 
                to="/autohandel" 
                style={{
                  background: activeSection === 'autohandel' ? '#000000' : 'transparent',
                  color: activeSection === 'autohandel' ? '#FFFFFF' : '#6B7280',
                  padding: '0.35rem 0.8rem',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  transition: 'var(--transition-fast)',
                  borderRight: '1px solid #E5E7EB'
                }}
              >
                AUTOHANDEL
              </Link>

              <Link 
                to="/shop" 
                style={{
                  background: activeSection === 'shop' ? '#000000' : 'transparent',
                  color: activeSection === 'shop' ? '#FFFFFF' : '#6B7280',
                  padding: '0.35rem 0.8rem',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  transition: 'var(--transition-fast)'
                }}
              >
                SHOP
              </Link>

            </div>
          </div>

          {/* Sub Navigation menu links (Dynamic) */}
          <nav className="desktop-only" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            
            {/* WERKSTATT sub links */}
            {activeSection === 'werkstatt' && (
              <>
                {/* Dropdown element for LEISTUNGEN */}
                <div 
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button style={{ 
                    display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'transparent', border: 'none', 
                    color: '#1F2937', fontWeight: 700, fontSize: '0.78rem', cursor: 'pointer', padding: '0.5rem 0'
                  }}>
                    LEISTUNGEN <ChevronDown size={12} />
                  </button>
                  
                  {dropdownOpen && (
                    <div style={{
                      position: 'absolute', top: '100%', left: 0, width: '250px', background: '#FFFFFF',
                      border: '1px solid #E5E7EB', borderRadius: '8px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                      padding: '0.5rem 0', display: 'flex', flexDirection: 'column', zIndex: 1000
                    }}>
                      {servicesList.map((srv, idx) => (
                        <Link 
                          key={idx} 
                          to={`/werkstatt/leistungen/${srv.slug}`} 
                          onClick={handleLinkClick}
                          style={{
                            padding: '0.5rem 1.25rem', color: '#374151', fontSize: '0.8rem', fontWeight: 500,
                            transition: 'var(--transition-fast)'
                          }}
                          className="header-dropdown-item"
                        >
                          {srv.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <a href="/werkstatt#aktuelle-aktionen" style={{ color: '#1F2937', fontWeight: 700, fontSize: '0.78rem' }}>AKTIONEN</a>
                <Link to="/werkstatt/preise" style={{ color: '#1F2937', fontWeight: 700, fontSize: '0.78rem' }}>PREISE</Link>
                <Link to="/werkstatt/ueber-uns" style={{ color: '#1F2937', fontWeight: 700, fontSize: '0.78rem' }}>ÜBER UNS</Link>
                <Link to="/werkstatt/faq" style={{ color: '#1F2937', fontWeight: 700, fontSize: '0.78rem' }}>FAQ</Link>
                <Link to="/werkstatt/kontakt" style={{ color: '#1F2937', fontWeight: 700, fontSize: '0.78rem' }}>KONTAKT</Link>
              </>
            )}

            {/* AUTOHANDEL sub links */}
            {activeSection === 'autohandel' && (
              <>
                <Link to="/autohandel/fahrzeuge" style={{ color: '#1F2937', fontWeight: 700, fontSize: '0.78rem' }}>FAHRZEUGE</Link>
                <Link to="/autohandel/anfrage" style={{ color: '#1F2937', fontWeight: 700, fontSize: '0.78rem' }}>ANFRAGE</Link>
                <Link to="/autohandel/finanzierung" style={{ color: '#1F2937', fontWeight: 700, fontSize: '0.78rem' }}>FINANZIERUNG</Link>
                <Link to="/autohandel/faq" style={{ color: '#1F2937', fontWeight: 700, fontSize: '0.78rem' }}>FAQ</Link>
                <Link to="/autohandel/kontakt" style={{ color: '#1F2937', fontWeight: 700, fontSize: '0.78rem' }}>KONTAKT</Link>
              </>
            )}

            {/* No B2B sub links */}

            {/* Shop sub links */}
            {activeSection === 'shop' && (
              <>
                <Link to="/shop" style={{ color: '#1F2937', fontWeight: 700, fontSize: '0.78rem' }}>SHOP KATALOG</Link>
                <Link to="/shop/kategorie/alle" style={{ color: '#1F2937', fontWeight: 700, fontSize: '0.78rem' }}>KATEGORIEN</Link>
              </>
            )}


            {/* CTA Button */}
            <Link 
              to="/werkstatt/terminbuchung" 
              className="btn btn-primary" 
              style={{
                background: '#FFA800',
                color: '#000000',
                fontWeight: 700,
                fontSize: '0.78rem',
                padding: '0.5rem 0.9rem',
                borderRadius: '4px',
                border: 'none',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              <Calendar size={14} /> TERMIN BUCHEN
            </Link>

          </nav>

          {/* Mobile menu toggle */}
          <button className="mobile-only btn" style={{ padding: '0.4rem', background: 'transparent', border: 'none', color: '#000' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div 
          className="mobile-only mobile-drawer" 
          style={{ 
            position: 'fixed',
            top: '56px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255, 255, 255, 0.98)', 
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid #E5E7EB', 
            padding: '1.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.5rem',
            zIndex: 999,
            overflowY: 'auto',
            height: 'calc(100vh - 56px)'
          }}
        >
          
          {/* Section Selector Grid for Mobile */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <span style={{ fontWeight: 800, color: '#FFA800', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Bereiche</span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
              <Link 
                to="/werkstatt" 
                onClick={handleLinkClick} 
                style={{ 
                  background: activeSection === 'werkstatt' ? '#000000' : '#F3F4F6', 
                  color: activeSection === 'werkstatt' ? '#FFFFFF' : '#1F2937', 
                  fontWeight: 700, 
                  fontSize: '0.85rem',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  textAlign: 'center',
                  transition: 'all 0.2s'
                }}
              >
                🛠️ Werkstatt
              </Link>
              <Link 
                to="/autohandel" 
                onClick={handleLinkClick} 
                style={{ 
                  background: activeSection === 'autohandel' ? '#000000' : '#F3F4F6', 
                  color: activeSection === 'autohandel' ? '#FFFFFF' : '#1F2937', 
                  fontWeight: 700, 
                  fontSize: '0.85rem',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  textAlign: 'center',
                  transition: 'all 0.2s'
                }}
              >
                🔑 Autohandel
              </Link>
              <Link 
                to="/shop" 
                onClick={handleLinkClick} 
                style={{ 
                  background: activeSection === 'shop' ? '#000000' : '#F3F4F6', 
                  color: activeSection === 'shop' ? '#FFFFFF' : '#1F2937', 
                  fontWeight: 700, 
                  fontSize: '0.85rem',
                  padding: '0.75rem',
                  borderRadius: '6px',
                  textAlign: 'center',
                  transition: 'all 0.2s',
                  gridColumn: '1 / span 2'
                }}
              >
                🛒 Shop
              </Link>
            </div>
          </div>

          <div style={{ height: '1px', background: '#E5E7EB' }} />

          {/* Context Menu for Mobile with nice list style */}
          {activeSection !== 'none' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <span style={{ fontWeight: 800, color: '#111827', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                {activeSection === 'werkstatt' && 'Werkstatt Menü'}
                {activeSection === 'autohandel' && 'Autohandel Menü'}
                {activeSection === 'shop' && 'Shop Menü'}
              </span>
              
              {activeSection === 'werkstatt' && (
                <>
                  <Link to="/werkstatt/leistungen" onClick={handleLinkClick} className="mobile-nav-link">Unsere Leistungen</Link>
                  <Link to="/werkstatt/preise" onClick={handleLinkClick} className="mobile-nav-link">Preise</Link>
                  <Link to="/werkstatt/ueber-uns" onClick={handleLinkClick} className="mobile-nav-link">Über uns</Link>
                  <Link to="/werkstatt/faq" onClick={handleLinkClick} className="mobile-nav-link">FAQ / Fragen</Link>
                  <Link to="/werkstatt/kontakt" onClick={handleLinkClick} className="mobile-nav-link">Kontakt & Standort</Link>
                </>
              )}

              {activeSection === 'autohandel' && (
                <>
                  <Link to="/autohandel/fahrzeuge" onClick={handleLinkClick} className="mobile-nav-link">Fahrzeugbestand</Link>
                  <Link to="/autohandel/anfrage" onClick={handleLinkClick} className="mobile-nav-link">Fahrzeuganfrage</Link>
                  <Link to="/autohandel/finanzierung" onClick={handleLinkClick} className="mobile-nav-link">Finanzierung & Raten</Link>
                  <Link to="/autohandel/faq" onClick={handleLinkClick} className="mobile-nav-link">FAQ / Fragen</Link>
                  <Link to="/autohandel/kontakt" onClick={handleLinkClick} className="mobile-nav-link">Kontakt & Beratung</Link>
                </>
              )}

              {activeSection === 'shop' && (
                <>
                  <Link to="/shop" onClick={handleLinkClick} className="mobile-nav-link">Shop Katalog</Link>
                  <Link to="/shop/kategorie/alle" onClick={handleLinkClick} className="mobile-nav-link">Kategorien durchsuchen</Link>
                </>
              )}
            </div>
          )}

          <div style={{ height: '1px', background: '#E5E7EB' }} />

          {/* User Portal and Call to Action */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>

            <Link 
              to="/werkstatt/terminbuchung" 
              onClick={handleLinkClick} 
              className="btn btn-primary" 
              style={{ 
                width: '100%', 
                background: '#FFA800', 
                color: '#000', 
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.9rem',
                padding: '0.8rem',
                border: 'none',
                boxShadow: '0 4px 10px rgba(255, 168, 0, 0.2)'
              }}
            >
              <Calendar size={16} /> TERMIN ONLINE BUCHEN
            </Link>
          </div>

          <div style={{ height: '1px', background: '#E5E7EB' }} />

          {/* Quick Info contacts at the bottom for mobile */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', padding: '0.2rem 0.5rem', fontSize: '0.82rem', color: '#6B7280' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Phone size={14} style={{ color: '#FFA800' }} />
              <a href={`tel:${topPhone.replace(/\s+/g, '')}`} style={{ color: '#111827', fontWeight: 600 }}>{topPhone}</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Clock size={14} />
              <span>{topHours}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <MapPin size={14} />
              <span>{topAddress}</span>
            </div>
          </div>

        </div>
      )}

      {/* Styles for hover and responsive items */}
      <style>{`
        .desktop-only {
          display: flex;
        }
        .mobile-only {
          display: none;
        }
        .header-dropdown-item:hover {
          background-color: #F3F4F6 !important;
          color: #000000 !important;
          padding-left: 1.5rem !important;
        }
        .mobile-nav-link {
          display: flex;
          align-items: center;
          padding: 0.6rem 0.5rem;
          color: #4B5563;
          font-weight: 600;
          font-size: 0.92rem;
          border-radius: 4px;
          transition: all 0.2s;
        }
        .mobile-nav-link:hover {
          background-color: #F3F4F6;
          color: #000;
          padding-left: 0.8rem;
        }
        .mobile-drawer {
          animation: slideDownMenu 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slideDownMenu {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 1024px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
