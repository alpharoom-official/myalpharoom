import React, { useState, useEffect } from 'react';

function App() {
  const [accetto, setAccetto] = useState(false);
  const [caricamento, setCaricamento] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCaricamento((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const containerStyle: any = {
    backgroundColor: '#050505',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#ffcc00' }}>MY ALPHA ROOM</h1>
      <p style={{ color: '#00ff00' }}>STATUS: {caricamento}%</p>

      <div style={{ backgroundColor: '#111', border: '1px solid #ff0000', padding: '20px', margin: '20px' }}>
        <h2 style={{ color: '#ff0000' }}>REGOLAMENTO</h2>
        <p style={{ fontSize: '0.8rem', color: '#aaa' }}>
          Accedendo dichiari di essere maggiorenne e responsabile delle tue azioni.
        </p>
        <label>
          <input 
            type="checkbox" 
            onChange={() => setAccetto(!accetto)} 
          />
          ACCETTO I TERMINI
        </label>
      </div>

      <div>
        <button 
          disabled={!accetto} 
          onClick={() => alert("Disponibile da Sabato")}
          style={{ padding: '10px 20px', margin: '5px', backgroundColor: accetto ? '#ff6600' : '#333', color: '#fff', border: 'none' }}
        >
          AREA GIOVANI
        </button>
        <button 
          disabled={!accetto} 
          onClick={() => alert("Disponibile da Sabato")}
          style={{ padding: '10px 20px', margin: '5px', backgroundColor: accetto ? '#ff0000' : '#333', color: '#fff', border: 'none' }}
        >
          AREA ADULTI
        </button>
      </div>
    </div>
  );
}

export default App;
