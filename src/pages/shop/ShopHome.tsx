import { useState } from 'react';
import { ShoppingCart, Search, Trash2, CreditCard, ShieldCheck, CheckCircle, Plus, Minus, ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  brand: string;
  category: 'bremsen' | 'filter' | 'elektrik' | 'motor';
  price: number;
  sku: string;
  inStock: boolean;
  image: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Bremsscheibe Vented Coated (Paar)',
    brand: 'Brembo',
    category: 'bremsen',
    price: 89.90,
    sku: 'BR-98432-CO',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 2,
    name: 'Aktivkohle-Innenraumfilter',
    brand: 'Mann-Filter',
    category: 'filter',
    price: 24.50,
    sku: 'MA-CUK-29005',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 3,
    name: 'Starterbatterie Silver Dynamic AGM 12V 70Ah',
    brand: 'Varta',
    category: 'elektrik',
    price: 139.00,
    sku: 'VA-E39-570901',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 4,
    name: 'Zündkerze Double Platinum (Set: 4 Stück)',
    brand: 'Bosch',
    category: 'motor',
    price: 34.90,
    sku: 'BO-FR7KPP33U',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 5,
    name: 'Bremsbelagsatz Scheibenbremse',
    brand: 'Brembo',
    category: 'bremsen',
    price: 49.90,
    sku: 'BR-P85-072N',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 6,
    name: 'Ölfilter mit Dichtring',
    brand: 'Mann-Filter',
    category: 'filter',
    price: 12.80,
    sku: 'MA-HU-719-7X',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=400'
  }
];

interface CartItem {
  product: Product;
  quantity: number;
}

export default function ShopHome() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1); // 1: Stripe Form, 2: Success
  const [stripeLoading, setStripeLoading] = useState(false);
  const [cardData, setCardData] = useState({ number: '', expiry: '', cvc: '', name: '' });

  // Filtered Products list
  const filteredProducts = mockProducts.filter(prod => {
    const matchesSearch = prod.name.toLowerCase().includes(search.toLowerCase()) || prod.brand.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'all' || prod.category === category;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.product.id === productId) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: newQty < 1 ? 1 : newQty };
        }
        return item;
      });
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const totalSum = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardData.number || !cardData.expiry || !cardData.cvc || !cardData.name) {
      alert('Bitte füllen Sie alle Zahlungsdaten aus.');
      return;
    }
    setStripeLoading(true);
    setTimeout(() => {
      setStripeLoading(false);
      setCheckoutStep(2);
      setCart([]); // Clear cart
    }, 1500);
  };

  return (
    <div className="container section" style={{ animation: 'fadeInUp 0.4s ease-out' }}>
      
      {/* Shop Title with logo banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Carvantooo by OpenCarBox
          </span>
          <h1 style={{ margin: '0.25rem 0 0.5rem 0' }}>Ersatzteile Shop</h1>
          <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
            4.000+ Produkte · 94+ Premiummarken · Schneller Expressversand nach Österreich (AT) & Deutschland (DE)
          </p>
        </div>

        {/* Floating Cart Trigger */}
        <button 
          onClick={() => setIsCartOpen(!isCartOpen)} 
          className="btn btn-primary"
          style={{ position: 'relative', display: 'flex', gap: '0.75rem', alignItems: 'center' }}
        >
          <ShoppingCart size={18} />
          Warenkorb ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          {cart.length > 0 && (
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              background: '#FFF',
              color: '#000',
              fontWeight: 800,
              fontSize: '0.7rem',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}>
              {cart.length}
            </span>
          )}
        </button>
      </div>

      {/* Catalog & Filter controls */}
      <div className="glass-card" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', padding: '1.5rem', marginBottom: '3rem', alignItems: 'center' }}>
        
        {/* Search */}
        <div style={{ flex: 1, minWidth: '220px', position: 'relative' }}>
          <input 
            type="text" 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
            placeholder="Ersatzteile, Filter oder Marken suchen..." 
            className="form-control" 
            style={{ paddingLeft: '2.5rem' }}
          />
          <Search size={18} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
        </div>

        {/* Categories Tab Buttons */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {[
            { value: 'all', label: 'Alle' },
            { value: 'bremsen', label: 'Bremsen' },
            { value: 'filter', label: 'Filter' },
            { value: 'elektrik', label: 'Elektrik & Batterie' },
            { value: 'motor', label: 'Motor & Zündung' }
          ].map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setCategory(cat.value)}
              style={{
                background: category === cat.value ? 'var(--primary)' : 'rgba(255,168,0,0.02)',
                color: category === cat.value ? '#000' : 'var(--text-primary)',
                border: category === cat.value ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

      </div>

      {/* Main Grid: Shop Catalog + Sidebar Cart (if open) */}
      <div style={{ display: 'grid', gridTemplateColumns: isCartOpen ? '1fr 320px' : '1fr', gap: '2rem', alignItems: 'start', transition: 'var(--transition-normal)' }}>
        
        {/* Products Grid */}
        <div className="grid-3">
          {filteredProducts.map(prod => (
            <div key={prod.id} className="glass-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
              
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span className="badge" style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                  {prod.brand}
                </span>
              </div>

              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>SKU: {prod.sku}</span>
                  <h3 style={{ fontSize: '1.1rem', margin: '0.25rem 0', color: '#FFF' }}>{prod.name}</h3>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary)', marginTop: '0.5rem' }}>
                    € {prod.price.toFixed(2)}
                  </div>
                </div>

                <button onClick={() => addToCart(prod)} className="btn btn-secondary btn-sm" style={{ width: '100%' }}>
                  <ShoppingCart size={14} /> In den Warenkorb
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Sidebar Cart panel */}
        {isCartOpen && (
          <div className="glass-card" style={{ position: 'sticky', top: '120px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '1.2rem', margin: 0, display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#FFF' }}>
                <ShoppingBag size={18} /> Ihr Warenkorb
              </h3>
              <button onClick={() => setIsCartOpen(false)} style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.8rem' }}>Schließen</button>
            </div>

            <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

            {/* Cart list items */}
            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Ihr Warenkorb ist leer.
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '250px', overflowY: 'auto', paddingRight: '0.25rem' }}>
                  {cart.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.85rem' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 600, color: '#FFF' }}>{item.product.name}</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{item.product.brand} · € {item.product.price.toFixed(2)}</div>
                      </div>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'var(--bg-dark)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '0.1rem' }}>
                          <button onClick={() => updateQuantity(item.product.id, -1)} style={{ background: 'transparent', border: 'none', color: 'var(--primary)', cursor: 'pointer', display: 'flex' }}><Minus size={10} /></button>
                          <span style={{ fontSize: '0.75rem', minWidth: '14px', textAlign: 'center' }}>{item.quantity}</span>
                          <button onClick={() => addToCart(item.product)} style={{ background: 'transparent', border: 'none', color: 'var(--primary)', cursor: 'pointer', display: 'flex' }}><Plus size={10} /></button>
                        </div>
                        <button onClick={() => removeFromCart(item.product.id)} style={{ background: 'transparent', border: 'none', color: 'var(--danger)', cursor: 'pointer', display: 'flex' }}><Trash2 size={12} /></button>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '1rem', color: '#FFF' }}>
                  <span>Gesamtsumme:</span>
                  <span style={{ color: 'var(--primary)' }}>€ {totalSum.toFixed(2)}</span>
                </div>

                <button onClick={() => { setIsCheckoutOpen(true); setCheckoutStep(1); }} className="btn btn-primary" style={{ width: '100%' }}>
                  Kasse / Kaufen (Stripe)
                </button>
              </>
            )}

          </div>
        )}

      </div>

      {/* STRIPE CHECKOUT MODAL OVERLAY */}
      {isCheckoutOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999, padding: '1rem', animation: 'fadeInUp 0.3s ease-out'
        }}>
          
          <div className="glass-card" style={{ width: '100%', maxWidth: '480px', padding: '2.5rem', background: 'var(--bg-surface)' }}>
            
            {checkoutStep === 1 ? (
              <form onSubmit={handleCheckoutSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: 0, fontSize: '1.35rem', color: '#FFF' }}>Sicher bezahlen mit Stripe</h3>
                  <span className="badge">Secured</span>
                </div>

                <div style={{ background: 'var(--bg-dark)', padding: '0.8rem 1.25rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.03)', display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                  <span>Zu zahlender Betrag:</span>
                  <strong style={{ color: 'var(--primary)' }}>€ {totalSum.toFixed(2)}</strong>
                </div>

                <div className="form-group">
                  <label className="form-label">Karteninhaber Name</label>
                  <input 
                    type="text" 
                    required 
                    value={cardData.name}
                    onChange={e => setCardData({...cardData, name: e.target.value})}
                    placeholder="Max Mustermann" 
                    className="form-control" 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Kreditkartennummer</label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      type="text" 
                      required 
                      value={cardData.number}
                      onChange={e => setCardData({...cardData, number: e.target.value})}
                      placeholder="4242 4242 4242 4242" 
                      className="form-control" 
                      style={{ paddingLeft: '2.5rem' }}
                    />
                    <CreditCard size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Gültig bis (MM/YY)</label>
                    <input 
                      type="text" 
                      required 
                      value={cardData.expiry}
                      onChange={e => setCardData({...cardData, expiry: e.target.value})}
                      placeholder="12/28" 
                      className="form-control" 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Kartenprüfziffer (CVC)</label>
                    <input 
                      type="text" 
                      required 
                      value={cardData.cvc}
                      onChange={e => setCardData({...cardData, cvc: e.target.value})}
                      placeholder="123" 
                      className="form-control" 
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  <ShieldCheck size={16} style={{ color: 'var(--success)' }} />
                  <span>Ihre Zahlungstransaktion wird verschlüsselt von Stripe verarbeitet.</span>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <button type="button" onClick={() => setIsCheckoutOpen(false)} className="btn btn-secondary" style={{ flex: 1 }} disabled={stripeLoading}>Abbrechen</button>
                  <button type="submit" className="btn btn-primary" style={{ flex: 1, minWidth: '140px' }} disabled={stripeLoading}>
                    {stripeLoading ? 'Zahlung läuft...' : `Bezahlen (€ ${totalSum.toFixed(2)})`}
                  </button>
                </div>

              </form>
            ) : (
              <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ width: '64px', height: '64px', background: 'rgba(16,185,129,0.1)', color: 'var(--success)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle size={36} />
                </div>
                
                <h3 style={{ fontSize: '1.4rem' }}>Zahlung erfolgreich!</h3>
                <p style={{ fontSize: '0.95rem' }}>
                  Vielen Dank für Ihre Bestellung. Die Rechnung und Bestellbestätigung wurden an Ihre E-Mail gesendet. Wir verpacken Ihre Ersatzteile umgehend für den Versand.
                </p>

                <button onClick={() => { setIsCheckoutOpen(false); setIsCartOpen(false); }} className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  Zurück zum Shop
                </button>
              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
}
