import React, { useState, useEffect } from 'react';

function App() {
  const [caricamento, setCaricamento] = useState(0);

  // Simulazione caricamento
  useEffect(() => {
    const intervallo = setInterval(() => {
      setCaricamento((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);
    return () => clearInterval(intervallo);
  }, []);

  // Blocco tasto destro (versione compatibile)
  useEffect(() => {
    const handleContextMenu = (e: any) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <div style={{ backgroundColor: '#050505', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', textAlign: 'center', userSelect: 'none' }}>
      <h1 style={{ color: '#ffcc00', letterSpacing: '5px', fontSize: '2.5rem' }}>MY ALPHA ROOM</h1>
      <div style={{ color: '#00ff00', marginBottom: '30px', fontSize: '1.2rem' }}>
        STATUS: {caricamento}% SYSTEMS READY
      </div>

      <div style={{ backgroundColor: '#111', border: '1px solid #ff0000', padding: '20px', maxWidth: '500px', borderRadius: '8px' }}>
        <h2 style={{ color: '#ff0000' }}>[ AREA RISERVATA ]</h2>
        <p style={{ color: '#aaa' }}>Lancio ufficiale previsto per Sabato sera.</p>
        <p style={{ fontSize: '0.8rem', color: '#666' }}>L'accesso sarà consentito solo ai membri verificati.</p>
      </div>

      <p style={{ marginTop: '40px', fontSize: '0.7rem', color: '#444' }}>
        © 2026 MY ALPHA ROOM - SECURITY LAYER ACTIVE
      </p>
    </div>
  );
}

export default App;
