import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, Check, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // Check if user already responded
    const consent = localStorage.getItem('opencar_cookie_consent');
    if (!consent) {
      // Delay slightly for smooth entrance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // Listen for custom event to reopen cookie settings (e.g. from footer)
    const handleReopen = () => {
      setIsClosing(false);
      setIsVisible(true);
    };

    window.addEventListener('openCookieConsent', handleReopen);
    return () => {
      window.removeEventListener('openCookieConsent', handleReopen);
    };
  }, []);

  const handleConsent = (choice: 'accepted' | 'rejected') => {
    localStorage.setItem('opencar_cookie_consent', choice);
    localStorage.setItem('opencar_cookie_consent_date', new Date().toISOString());

    // Dispatch custom event so any listeners/analytics can react
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: choice }));

    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`cookie-banner-container ${isClosing ? 'cookie-banner-exit' : 'cookie-banner-enter'}`}
      role="dialog"
      aria-modal="false"
      aria-label="Cookie-Einstellungen"
    >
      <div className="cookie-banner-card">
        {/* Header with icon */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
          <div className="cookie-icon-wrapper">
            <Cookie size={22} className="cookie-icon" />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
              Cookie-Einstellungen
            </h3>
            <p style={{ margin: '0.4rem 0 0 0', fontSize: '0.875rem', lineHeight: '1.5', color: 'var(--text-secondary)' }}>
              Wir nutzen Cookies, um unsere Website für Sie optimal zu gestalten. 
              Sie können alle Cookies akzeptieren oder ablehnen.
            </p>
          </div>
        </div>

        {/* Links to Privacy Policy */}
        <div style={{ marginTop: '0.6rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Weitere Informationen finden Sie in unserer{' '}
          <Link 
            to="/datenschutz" 
            style={{ color: 'var(--primary)', textDecoration: 'underline', fontWeight: 500 }}
          >
            Datenschutzerklärung
          </Link>.
        </div>

        {/* Action Buttons: Only Accept or Reject */}
        <div className="cookie-actions">
          <button
            type="button"
            className="btn btn-secondary cookie-btn"
            onClick={() => handleConsent('rejected')}
          >
            <X size={16} />
            <span>Ablehnen</span>
          </button>
          <button
            type="button"
            className="btn btn-primary cookie-btn"
            onClick={() => handleConsent('accepted')}
          >
            <Check size={16} />
            <span>Alle akzeptieren</span>
          </button>
        </div>
      </div>

      <style>{`
        .cookie-banner-container {
          position: fixed;
          bottom: 2rem;
          left: 2rem;
          z-index: 9999;
          max-width: 440px;
          width: calc(100% - 4rem);
        }

        .cookie-banner-card {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-lg);
          padding: 1.4rem;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .cookie-icon-wrapper {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255, 168, 0, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cookie-icon {
          color: var(--primary);
        }

        .cookie-actions {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 0.75rem;
          margin-top: 1.2rem;
        }

        .cookie-btn {
          padding: 0.65rem 1rem;
          font-size: 0.9rem;
          border-radius: var(--radius-md);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          font-weight: 600;
          cursor: pointer;
        }

        .cookie-banner-enter {
          animation: cookieSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .cookie-banner-exit {
          animation: cookieSlideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes cookieSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes cookieSlideDown {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
          }
        }

        @media (max-width: 640px) {
          .cookie-banner-container {
            bottom: 1rem;
            left: 1rem;
            right: 1rem;
            width: auto;
            max-width: none;
          }
          .cookie-actions {
            grid-template-columns: 1fr 1fr;
            gap: 0.5rem;
          }
          .cookie-btn {
            font-size: 0.85rem;
            padding: 0.6rem 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}
