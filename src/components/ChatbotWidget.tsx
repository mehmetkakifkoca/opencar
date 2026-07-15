import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  time: string;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Hallo! Ich bin dein OpenCarBox KI-Assistent (powered by nscale GmbH). Wie kann ich dir heute helfen?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate Bot response
    setTimeout(() => {
      let botResponse = 'Vielen Dank für Ihre Nachricht. Ein Mitarbeiter wird sich in Kürze bei Ihnen melden. Sie können uns auch direkt telefonisch unter 01 7981310 (Werkstatt Wien 1030) oder 01 9972708 (Autohandel Wien 1100) erreichen.';
      
      const query = textToSend.toLowerCase();
      if (query.includes('pickerl') || query.includes('57a') || query.includes('überprüfung')) {
        botResponse = 'Die §57a Pickerl-Überprüfung kostet bei uns für PKW ab € 55. Sie dauert ca. 45–60 Minuten. Bitte bringen Sie den Zulassungsschein Teil I und II mit!';
      } else if (query.includes('termin') || query.includes('buchen') || query.includes('vereinbaren')) {
        botResponse = 'Einen Termin kannst du ganz einfach online über unsere Seite /werkstatt/terminbuchung buchen, oder ruf uns an unter 01 7981310!';
      } else if (query.includes('öffnungszeit') || query.includes('zeiten') || query.includes('wann')) {
        botResponse = 'Unsere Werkstatt in Wien 1030 hat Mo–Fr 08:00–18:00 und Sa 08:00–13:00 geöffnet. Der Autohandel in Wien 1100 ist Mo–Fr 08:00–18:00 und Sa 10:00–15:00 geöffnet.';
      } else if (query.includes('adresse') || query.includes('wo') || query.includes('standort')) {
        botResponse = 'Unsere Werkstatt liegt am Rennweg 76, 1030 Wien. Der Autohandel befindet sich in der Favoritenstraße 175, 1100 Wien. B2B Deutschland ist in Ludwigsfelde ansässig.';
      } else if (query.includes('preis') || query.includes('kosten')) {
        botResponse = 'Unsere Preise findest du transparent aufgelistet auf der Seite /werkstatt/preise. Zum Beispiel: Pickerl ab € 55, Ölwechsel ab € 39, Klimaservice ab € 65.';
      }

      setMessages(prev => [...prev, {
        sender: 'bot',
        text: botResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 800);
  };

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000, fontFamily: 'var(--font-sans)' }}>
      {/* Floating Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          style={{
            background: 'var(--primary)',
            color: '#000',
            border: 'none',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(255, 168, 0, 0.4)',
            transition: 'var(--transition-normal)',
            position: 'relative'
          }}
          className="chat-float-btn"
        >
          <MessageSquare size={26} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          width: '380px',
          height: '500px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5), var(--shadow-glow)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'fadeInUp 0.3s ease-out'
        }}>
          
          {/* Header */}
          <div style={{
            background: '#0D1117',
            padding: '1.25rem',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ background: 'var(--primary-glow)', border: '1px solid var(--primary)', borderRadius: '50%', padding: '0.4rem', display: 'flex', color: 'var(--primary)' }}>
                <Bot size={20} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1rem', color: '#FFF' }}>OpenCarBox Assistant</h4>
                <span style={{ fontSize: '0.7rem', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                  <span style={{ width: '6px', height: '6px', background: 'var(--success)', borderRadius: '50%' }}></span> Online · Powered by nscale
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>

          {/* Messages body */}
          <div style={{
            flex: 1,
            padding: '1.25rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            background: '#0E1116'
          }}>
            {messages.map((msg, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%',
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start'
              }}>
                <div style={{
                  background: msg.sender === 'user' ? 'var(--primary)' : 'var(--bg-surface)',
                  color: msg.sender === 'user' ? '#000' : 'var(--text-primary)',
                  padding: '0.75rem 1rem',
                  borderRadius: msg.sender === 'user' ? '12px 12px 0 12px' : '12px 12px 12px 0',
                  fontSize: '0.9rem',
                  border: msg.sender === 'user' ? 'none' : '1px solid var(--border-color)',
                  wordBreak: 'break-word'
                }}>
                  {msg.text}
                </div>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem', padding: '0 0.2rem' }}>
                  {msg.time}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick buttons */}
          <div style={{ padding: '0.5rem 1rem', background: '#0E1116', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
            <button className="quick-btn" onClick={() => handleSend('Pickerl Kosten?')} style={{ fontSize: '0.75rem', background: 'rgba(255,168,0,0.05)', border: '1px solid var(--border-color)', color: 'var(--primary)', padding: '0.25rem 0.6rem', borderRadius: '20px', cursor: 'pointer' }}>
              Pickerl Kosten?
            </button>
            <button className="quick-btn" onClick={() => handleSend('Termin buchen?')} style={{ fontSize: '0.75rem', background: 'rgba(255,168,0,0.05)', border: '1px solid var(--border-color)', color: 'var(--primary)', padding: '0.25rem 0.6rem', borderRadius: '20px', cursor: 'pointer' }}>
              Termin vereinbaren?
            </button>
            <button className="quick-btn" onClick={() => handleSend('Öffnungszeiten?')} style={{ fontSize: '0.75rem', background: 'rgba(255,168,0,0.05)', border: '1px solid var(--border-color)', color: 'var(--primary)', padding: '0.25rem 0.6rem', borderRadius: '20px', cursor: 'pointer' }}>
              Öffnungszeiten?
            </button>
          </div>

          {/* Text Input Footer */}
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
            style={{
              padding: '0.8rem 1rem',
              background: 'var(--bg-surface)',
              borderTop: '1px solid var(--border-color)',
              display: 'flex',
              gap: '0.5rem'
            }}
          >
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Frage eingeben..."
              style={{
                flex: 1,
                background: 'var(--bg-dark)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '0.5rem 0.75rem',
                color: '#FFF',
                fontSize: '0.9rem'
              }}
            />
            <button 
              type="submit" 
              style={{
                background: 'var(--primary)',
                border: 'none',
                color: '#000',
                borderRadius: '8px',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <Send size={16} />
            </button>
          </form>

        </div>
      )}

      <style>{`
        .chat-float-btn:hover {
          transform: scale(1.08) rotate(5deg);
        }
        .quick-btn:hover {
          background-color: var(--primary) !important;
          color: #000 !important;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
