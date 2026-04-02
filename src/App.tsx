import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [accetto, setAccetto] = useState(false);
  const [caricamento, setCaricamento] = useState(0);
  const [modalAperta, setModalAperta] = useState<'privacy' | 'termini' | null>(null);

  useEffect(() => {
    const intervallo = setInterval(() => {
      setCaricamento((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);
    return () => clearInterval(intervallo);
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
    fontFamily: 'Courier New, monospace',
    padding: '20px',
    textAlign: 'center',
    userSelect: 'none'
  };

  const modalOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px'
  };

  const modalContentStyle: React.CSSProperties = {
    backgroundColor: '#111',
    border: '1px solid #ffcc00',
    padding: '30px',
    borderRadius: '10px',
    maxWidth: '700px',
    maxHeight: '80vh',
    overflowY: 'auto',
    textAlign: 'left'
  };

  return (
    <div style={containerStyle}>
      {/* --- MODAL FINESTRA LEGALE --- */}
      {modalAperta && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <h2 style={{ color: '#ffcc00' }}>{modalAperta === 'privacy' ? 'PRIVACY & COOKIE POLICY' : 'TERMINI E CONDIZIONI'}</h2>
            <div style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.5' }}>
              {modalAperta === 'privacy' ? (
                <>
                  <p><strong>1. Dati Raccolti:</strong> MyAlphaRoom non memorizza dati personali sensibili nei database permanenti durante la fase beta. Gli indirizzi IP vengono monitorati solo per prevenire abusi e attacchi hacker.</p>
                  <p><strong>2. Cookie:</strong> Utilizziamo solo cookie tecnici necessari al funzionamento del sito e alla memorizzazione dell'accettazione del regolamento.</p>
                  <p><strong>3. Sicurezza:</strong> Le videochat sono protette da protocolli temporanei. Si sconsiglia la condivisione di dati reali.</p>
                </>
              ) : (
                <>
                  <p><strong>1. Utilizzo:</strong> L'accesso è consentito a utenti dai 18 anni in su, o 14 con supervisione. L'utente è l'unico responsabile dei contenuti trasmessi.</p>
                  <p><strong>2. Divieti:</strong> È severamente vietato caricare materiale illegale, offensivo o protetto da copyright. Ogni violazione sarà segnalata alle autorità competenti con log dell'indirizzo IP.</p>
                  <p><strong>3. Limitazione di Responsabilità:</strong> MyAlphaRoom è un progetto beta e non garantisce la continuità del servizio né risponde di danni derivanti dall'uso della piattaforma.</p>
                </>
              )}
            </div>
            <button onClick={() => setModalAperta(null)} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#ff0000', color: '#fff', border: 'none', cursor: 'pointer' }}>CHIUDI</button>
          </div>
        </div>
      )}

      {/* --- CONTENUTO PRINCIPALE --- */}
      <h1 style={{ color: '#ffcc00', fontSize: '2.5rem', margin: '0', letterSpacing: '5px' }}>MY ALPHA ROOM</h1>
      <div style={{ color: '#00ff00', fontSize: '0.8rem', marginBottom: '30px' }}>
        STATUS: {caricamento}% SYSTEMS READY
      </div>

      <div style={{ backgroundColor: '#111', border: '1px solid #ff0000', padding: '25px', borderRadius: '5px', maxWidth: '550px', marginBottom: '30px' }}>
        <h2 style={{ color: '#ff0000', marginBottom: '15px', fontSize: '1.2rem' }}>[ PROTOCOLLO DI ACCESSO ]</h2>
        <div style={{ textAlign: 'left', color: '#aaa', fontSize: '0.9rem', marginBottom: '20px' }}>
          > Verifica età minima attiva<br/>
          > Responsabilità legale dell'utente<br/>
          > Divieto registrazione contenuti<br/>
          > Tracking IP per sicurezza Alpha attivo
        </div>
        
        <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '0.9rem', color: accetto ? '#00ff00' : '#fff' }}>
          <input type="checkbox" checked={accetto} onChange={() => setAccetto(!accetto)} style={{ marginRight: '10px' }}/>
          CONFERMO IDENTITÀ E ACCETTO I TERMINI
        </label>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
        <button disabled={!accetto} onClick={() => alert("Lancio previsto: Sabato sera.")} style={{ backgroundColor: accetto ? '#ff6600' : '#222', color: '#fff', padding: '15px 25px', border: 'none', cursor: accetto ? 'pointer' : 'not-allowed', fontWeight: 'bold' }}>AREA GIOVANI</button>
        <button disabled={!accetto} onClick={() => alert("Lancio previsto: Sabato sera.")} style={{ backgroundColor: accetto ? '#ff0000' : '#222', color: '#fff', padding: '15px 25px', border: 'none', cursor: accetto ? 'pointer' : 'not-allowed', fontWeight: 'bold' }}>AREA ADULTI (18+)</button>
      </div>

      {/* --- FOOTER CON LINK --- */}
      <div style={{ marginTop: '50px', fontSize: '0.7rem' }}>
        <span onClick={() => setModalAperta('privacy')} style={{ color: '#555', cursor: 'pointer', margin: '0 10px', textDecoration: 'underline' }}>Privacy & Cookie</span>
        <span onClick={() => setModalAperta('termini')} style={{ color: '#555', cursor: 'pointer', margin: '0 10px', textDecoration: 'underline' }}>Termini e Condizioni</span>
      </div>
      <p style={{ fontSize: '0.6rem', color: '#333', marginTop: '20px' }}>OFFICIAL RELEASE: SATURDAY 21:00</p>
    </div>
  );
};

export default App;
