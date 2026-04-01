import React, { useState } from 'react';

const App: React.FC = () => {
  const [accetto, setAccetto] = useState(false);

  const avvisoInArrivo = (stanza: string) => {
    alert(`Accesso alla stanza ${stanza} in preparazione per il weekend. Verifica la tua connessione Alpha.`);
  };

  const containerStyle: React.CSSProperties = {
    backgroundColor: '#0a0a0a',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center'
  };

  const boxRegoleStyle: React.CSSProperties = {
    backgroundColor: '#1a1a1a',
    border: '2px solid #ff0000',
    padding: '30px',
    borderRadius: '15px',
    maxWidth: '600px',
    marginBottom: '40px',
    boxShadow: '0 0 20px rgba(255, 0, 0, 0.2)'
  };

  const buttonStyle = (isOrange: boolean): React.CSSProperties => ({
    backgroundColor: !accetto ? '#333' : (isOrange ? '#ff6600' : '#ff0000'),
    color: '#fff',
    padding: '15px 30px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: accetto ? 'pointer' : 'not-allowed',
    margin: '10px',
    transition: '0.3s',
    opacity: accetto ? 1 : 0.5
  });

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#ffcc00', fontSize: '3rem', marginBottom: '10px' }}>MY ALPHA ROOM</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>PROGETTO IN FASE BETA - ACCESSO RISERVATO</p>

      <div style={boxRegoleStyle}>
        <h2 style={{ color: '#ff0000', marginBottom: '20px' }}>⚠️ REGOLAMENTO OBBLIGATORIO</h2>
        <ul style={{ textAlign: 'left', lineHeight: '1.6', marginBottom: '25px', color: '#ccc' }}>
          <li>L'utente dichiara di avere almeno 18 anni, o 14 anni ma con consenso dei genitori.</li>
          <li>Ogni azione è sotto la propria responsabilità civile e penale.</li>
          <li>È vietato registrare o diffondere contenuti delle stanze.</li>
          <li>Il sito non risponde dell'uso improprio della piattaforma.</li>
        </ul>
        
        <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '1.1rem' }}>
          <input 
            type="checkbox" 
            checked={accetto} 
            onChange={() => setAccetto(!accetto)} 
            style={{ marginRight: '10px', transform: 'scale(1.5)' }}
          />
          DICHIARO DI ESSERE MAGGIORENNE E ACCETTO LE REGOLE
        </label>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button 
          disabled={!accetto} 
          onClick={() => avvisoInArrivo("GIOVANI")}
          style={buttonStyle(true)}
        >
          VIDEOCHAT GIOVANI (Musica, Gaming, Amicizie)
        </button>
        
        <button 
          disabled={!accetto} 
          onClick={() => avvisoInArrivo("ADULTI")}
          style={buttonStyle(false)}
        >
          VIDEOCHAT ADULTI (18+)
        </button>
      </div>

      <footer style={{ marginTop: '50px', fontSize: '0.8rem', color: '#666' }}>
        © 2026 MY ALPHA ROOM - SECURITY LAYER ACTIVE
      </footer>
    </div>
  );
};

export default App;
