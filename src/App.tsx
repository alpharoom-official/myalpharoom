import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [accetto, setAccetto] = useState(false);
  const [caricamento, setCaricamento] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCaricamento((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  const containerStyle: React.CSSProperties = {
    backgroundColor: '#050505',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'monospace',
    padding: '20px',
    textAlign: 'center',
    userSelect: 'none'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#ffcc00', letterSpacing: '5px' }}>MY ALPHA ROOM</h1>
      <div style={{ color: '#00ff00', marginBottom: '30px' }}>
        STATUS: {caricamento}% SYSTEMS READY
      </div>

      <div style={{ backgroundColor: '#111', border: '1px solid #ff0000', padding: '20px', maxWidth: '500px', marginBottom: '30px' }}>
        <h2 style={{ color: '#ff0000' }}>[ PROTOCOLLO ]</h2>
        <p style={{ fontSize: '0.8rem', color: '#aaa', textAlign: 'left' }}>
          > Verificare età minima (18+ o 14+ con tutore)<br/>
          > Responsabilità civile/penale attiva<br/>
          > Divieto assoluto di registrazione
        </p>
        
        <label style={{ cursor: 'pointer', color: accetto ? '#00ff00' : '#fff' }}>
          <input 
            type="checkbox" 
            checked={accetto} 
            onChange={() => setAccetto(!accetto)} 
            style={{ marginRight: '10px' }}
          />
          ACCETTO I TERMINI
        </label>
      </div>

      <div>
        <button 
          disabled={!accetto} 
          onClick={() => alert("Lancio previsto: Sabato sera.")}
          style={{
            backgroundColor: accetto ? '#ff6600' : '#222',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            margin: '5px',
            cursor: accetto ? 'pointer' : 'not-allowed'
          }}
        >
          AREA GIOVANI
        </button>
        <button 
          disabled={!accetto} 
          onClick={() => alert("Lancio previsto: Sabato sera.")}
          style={{
            backgroundColor: accetto ? '#ff0000' : '#222',
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            margin: '5px',
            cursor: accetto ? 'pointer' : 'not-allowed'
          }}
        >
          AREA ADULTI
        </button>
      </div>
    </div>
  );
};

export default App;
