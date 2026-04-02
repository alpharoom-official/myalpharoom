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
    backgroundColor: 'rgba(0,0,0,0.95)',
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
    textAlign: 'left',
    boxShadow: '0 0 30px rgba(255, 204, 0, 0.1)'
  };

  return (
    <div style={containerStyle}>
      {modalAperta && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <h2 style={{ color: '#ffcc00', marginTop: 0 }}>{modalAperta === 'privacy' ? 'PRIVACY & COOKIE POLICY' : 'TERMINI E CONDIZIONI'}</h2>
            <div style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.6' }}>
              {modalAperta === 'privacy' ? (
                <>
                  <p><strong>1. DATI RACCOLTI:</strong> In fase Beta, MyAlphaRoom non effettua database permanenti di dati sensibili. Gli IP vengono loggati solo per scopi di sicurezza e prevenzione reati.</p>
                  <p><strong>2. COOKIE:</strong> Usiamo solo cookie tecnici per ricordare che hai accettato il regolamento.</p>
                  <p><strong>3. SICUREZZA:</strong> Non condividere mai dati reali durante le sessioni videochat.</p>
                </>
              ) : (
                <>
                  <p><strong>1. ACCESSO:</strong> Vietato ai minori di 14 anni. Dai 14 ai 18 è richiesto il consenso dei genitori. L'utente è pienamente responsabile delle proprie azioni.</p>
                  <p><strong>2. DIVIETI:</strong> Proibito caricare contenuti illegali o protetti da copyright. Ogni abuso comporterà il ban immediato e la segnalazione alle autorità.</p>
                  <p><strong>3. PROGETTO:</strong> MyAlphaRoom è un servizio in fase di test. Non si garantisce la continuità assoluta del servizio.</p>
                </>
              )}
            </div>
            <button onClick={() => setModalAperta(null)} style={{ marginTop: '20px', padding: '10px 25px', backgroundColor: '#ff0000', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>CHIUDI</button>
          </div>
        </div>
      )}

      <h1 style={{ color: '#ffcc00', fontSize: '2.5rem', margin: '0', letterSpacing: '5px' }}>MY ALPHA ROOM</h1>
      <div style={{ color: '#00ff00', fontSize: '0.8rem', marginBottom: '30px', textShadow: '0 0 5px #00ff00' }}>
        STATUS: {caricamento}% SYSTEMS READY
      </div>

      <div style={{ backgroundColor: '#111', border: '1px solid #ff0000', padding: '25px', borderRadius: '5px', maxWidth: '550px', marginBottom: '30px', boxShadow: '0 0 15px rgba(255,0,0,0.2)' }}>
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
        <button disabled={!accetto} onClick={() => alert("Lancio previsto: Sabato sera.")} style={{ backgroundColor: accetto ? '#ff6600' : '#222', color: '#fff', padding: '15px 25px', border: 'none', cursor: accetto ? 'pointer' : 'not-allowed', fontWeight: 'bold', transition: '0.3s' }}>AREA GIOVANI</button>
        <button disabled={!accetto} onClick={() => alert("Lancio previsto: Sabato sera.")} style={{ backgroundColor: accetto ? '#ff0000' : '#222', color: '#fff', padding: '15px 25px', border: 'none', cursor: accetto ? 'pointer' : 'not-allowed', fontWeight: 'bold', transition: '0.3s' }}>AREA ADULTI (18+)</button>
      </div>

      <div style={{ marginTop: '50px', fontSize: '0.75rem' }}>
        <span onClick={() => setModalAperta('privacy')} style={{ color: '#666', cursor: 'pointer', margin: '0 15px', textDecoration: 'underline' }}>Privacy Policy</span>
        <span onClick={() => setModalAperta('termini')} style={{ color: '#666', cursor: 'pointer', margin: '0 15px', textDecoration: 'underline' }}>Termini d'uso</span>
      </div>
      
      <p style={{ fontSize: '0.6rem', color: '#333', marginTop: '30px', letterSpacing: '2px' }}>OFFICIAL RELEASE: SATURDAY 21:00</p>
    </div>
  );
};

export default App;
