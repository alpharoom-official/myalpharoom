import React, { useState, useEffect } from 'react';

export default function App() {
  const [caricamento, setCaricamento] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCaricamento((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ backgroundColor: '#050505', color: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#ffcc00', letterSpacing: '5px', fontSize: '2.5rem' }}>MY ALPHA ROOM</h1>
      <p style={{ color: '#00ff00', fontSize: '1.2rem' }}>STATUS: {caricamento}% SYSTEMS READY</p>
      
      <div style={{ border: '2px solid red', padding: '30px', margin: '20px', backgroundColor: '#111', borderRadius: '10px' }}>
        <h2 style={{ color: 'red', margin: '0' }}>[ ACCESSO IN FASE DI LANCIO ]</h2>
        <p style={{ color: '#aaa' }}>Il nuovo protocollo sarà attivo da Sabato ore 21:00</p>
      </div>

      <p style={{ fontSize: '0.8rem', color: '#444', marginTop: '50px' }}>© 2026 MY ALPHA ROOM - SECURITY LAYER ACTIVE</p>
    </div>
  );
}
