import React, { useState, useEffect } from 'react';

export default function App() {
  const [caricamento, setCaricamento] = useState(0);
  const [accetto, setAccetto] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCaricamento((prev) => (prev < 100 ? prev + 1 : 100));
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const entraInChat = (tipo: string) => {
    if (!accetto) {
      alert("Devi accettare il regolamento per continuare.");
      return;
    }
    // Questo apre una stanza video chat reale, gratis e senza registrazione
    const stanza = tipo === 'giovani' ? 'AlphaRoom_Giovani_Chat_2026' : 'AlphaRoom_Adulti_Chat_2026';
    window.open(`https://meet.jit.si/${stanza}`, '_blank');
  };

  // Stile di base per i bottoni Omegle
  const stileBottoneBase: React.CSSProperties = {
    padding: '20px 40px',
    margin: '15px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    borderRadius: '10px',
    cursor: accetto ? 'pointer' : 'not-allowed',
    color: '#333',
    backgroundColor: accetto ? '#e0e0e0' : '#f0f0f0',
    border: '1px solid #ccc',
    transition: 'background-color 0.2s, box-shadow 0.2s',
  };

  // Stile per hover
  const stileBottoneAttivoGiovani: React.CSSProperties = {
    ...stileBottoneBase,
    backgroundColor: '#fff',
    borderColor: '#bada55',
    boxShadow: '0 0 10px rgba(186,218,85,0.4)',
  };
  
  const stileBottoneAttivoAdulti: React.CSSProperties = {
    ...stileBottoneBase,
    backgroundColor: '#fff',
    borderColor: '#ff6b6b',
    boxShadow: '0 0 10px rgba(255,107,107,0.4)',
  };

  return (
    <div style={{ backgroundColor: '#fff', color: '#333', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Arial, sans-serif', padding: '30px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '50px', width: '100%', maxWidth: '800px' }}>
        <h1 style={{ color: '#ffcc00', letterSpacing: '2px', fontSize: '3rem', margin: '0 0 10px 0', fontWeight: '900', textShadow: '1px 1px 0 #333' }}>MY ALPHA ROOM</h1>
        <div style={{ borderTop: '2px solid #ffcc00', width: '60px', margin: '0 auto 10px auto' }}></div>
        <p style={{ color: '#00ff00', fontSize: '1.3rem', backgroundColor: '#333', padding: '5px 15px', borderRadius: '5px', display: 'inline-block', fontWeight: 'bold' }}>
          SYSTEM STATUS: {caricamento}% {caricamento === 100 ? 'READY' : 'LOADING...'}
        </p>
      </div>

      <div style={{ backgroundColor: '#f9f9f9', border: '1px solid #eee', padding: '30px', maxWidth: '500px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', marginBottom: '40px' }}>
        <h2 style={{ color: '#333', marginTop: 0, fontSize: '1.5rem', fontWeight: 'normal' }}>⚠️ REGOLAMENTO</h2>
        <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.7', textAlign: 'left', display: 'inline-block' }}>
          • Dichiaro di avere l'età minima richiesta.<br />
          • Ogni azione è sotto la propria responsabilità.<br />
          • Vietato registrare o diffondere contenuti delle stanze.
        </p>
        
        <label style={{ display: 'block', marginTop: '25px', cursor: 'pointer', color: accetto ? '#007bff' : '#333', fontSize: '1.1rem', fontWeight: 'bold' }}>
          <input type="checkbox" checked={accetto} onChange={() => setAccetto(!accetto)} style={{ marginRight: '10px', transform: 'scale(1.3)' }} />
          ACCETTO E DICHIARO IL VERO
        </label>
      </div>

      <div style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
        <button 
          onClick={() => entraInChat('giovani')}
          style={accetto ? stileBottoneAttivoGiovani : stileBottoneBase}
        >
          VIDEOCHAT GIOVANI
        </button>
        
        <button 
          onClick={() => entraInChat('adulti')}
          style={accetto ? stileBottoneAttivoAdulti : stileBottoneBase}
        >
          VIDEOCHAT ADULTI (18+)
        </button>
      </div>

      <p style={{ marginTop: 'auto', fontSize: '0.8rem', color: '#aaa', paddingTop: '50px' }}>
        © 2026 MY ALPHA ROOM - SECURITY LAYER ACTIVE
      </p>
    </div>
  );
}
