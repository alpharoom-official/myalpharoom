import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [accetto, setAccetto] = useState(false);
  const [caricamento, setCaricamento] = useState(0);

  // Effetto simulazione caricamento
  useEffect(() => {
    const intervallo = setInterval(() => {
      setCaricamento((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);
    return () => clearInterval(intervallo);
  }, []);

  // Blocco tasto destro
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  const avvisoInArrivo = (stanza: string) => {
    alert(`[SISTEMA]: Accesso alla stanza ${stanza} negato. Lancio previsto per Sabato sera.`);
  };

  const containerStyle: React.CSSProperties = {
    backgroundColor: '#050505',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Courier New, monospace',
    padding: '20px',
    textAlign: 'center',
    userSelect: 'none'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#ffcc00', fontSize: '2.5rem', margin: '0', letterSpacing: '5px' }}>MY ALPHA ROOM</h1>
      <div style={{ color: '#00ff00', fontSize: '0.8rem', marginBottom: '30px' }}>
        STATUS: {caricamento}% SYSTEMS READY
      </div>

      <div style={{ backgroundColor: '#111', border: '1px solid #ff0000', padding: '25px', borderRadius: '5px', maxWidth: '550px', marginBottom: '30px' }}>
        <h2 style={{ color: '#ff0000', marginBottom: '15px', fontSize: '1.2rem' }}>[ PROTOCOLLO DI ACCESSO ]</h2>
        <div style={{ textAlign: 'left', color: '#aaa', fontSize: '0.9rem', marginBottom: '20px' }}>
          > Verifica età minima attiva (18+ o 14+ con consenso)<br/>
          > Responsabilità legale dell'utente attiva<br/>
          > Divieto assoluto di registrazione contenuti<br/>
          > Tracking IP per sicurezza Alpha attivo
        </div>
        
        <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '0.9rem', color: accetto ? '#00ff00' : '#fff' }}>
          <input 
            type="checkbox" 
            checked={accetto} 
            onChange={() => setAccetto(!accetto)} 
            style={{ marginRight: '10px' }}
          />
          CONFERMO IDENTITÀ E ACCETTO I TERMINI
        </label>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
        <button 
          disabled={!accetto} 
          onClick={() => avvisoInArrivo("GIOVANI")}
          style={{
            backgroundColor: accetto ? '#ff6600' : '#222',
            color: '#fff',
            padding: '15px 25px',
            border: 'none',
            cursor: accetto ? 'pointer' : 'not-allowed',
            fontWeight: 'bold'
          }}
        >
          AREA GIOVANI
        </button>
        
        <button 
          disabled={!accetto} 
          onClick={() => avvisoInArrivo("ADULTI")}
          style={{
            backgroundColor: accetto ? '#ff0000' : '#222',
            color: '#fff',
            padding: '15px 25px',
            border: 'none',
            cursor: accetto ? 'pointer' : 'not-allowed',
            fontWeight: 'bold'
          }}
        >
          AREA ADULTI (18+)
        </button>
      </div>

      <div style={{ marginTop: '50px' }}>
        <p style={{ fontSize: '0.7rem', color: '#444' }}>OFFICIAL RELEASE: SATURDAY 21:00</p>
      </div>
    </div>
  );
};

export default App;
