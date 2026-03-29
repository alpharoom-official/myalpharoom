export default function App() {
  const avvisoInArrivo = () => {
    alert("MyAlphaRoom è attualmente in fase di sviluppo. Le stanze video ufficiali apriranno nei prossimi mesi. Resta sintonizzato!");
  };

  return (
    <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', color: 'white', textAlign: 'center', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      
      {/* LOGO E MESSAGGIO DI ATTESA */}
      <h1 style={{ color: '#ffcc00', fontSize: '3.5rem', margin: '0' }}>MYALPHAROOM.COM</h1>
      <div style={{ backgroundColor: '#ffcc00', color: 'black', display: 'inline-block', padding: '5px 15px', fontWeight: 'bold', borderRadius: '5px', marginTop: '10px', fontSize: '1.1rem' }}>
        🚀 WORK IN PROGRESS - IN ARRIVO NEI PROSSIMI MESI
      </div>

      {/* IL MANIFESTO */}
      <div style={{ maxWidth: '800px', margin: '40px auto', textAlign: 'left', lineHeight: '1.6', fontSize: '1.1rem', backgroundColor: '#2a2a2a', padding: '25px', borderRadius: '15px', borderLeft: '5px solid #ffcc00' }}>
        <h2 style={{ color: 'white', textAlign: 'center' }}>La tua nuova Videochat di confronto</h2>
        <p>Stiamo costruendo un posto dove la qualità conta più della quantità. <strong>MyAlphaRoom</strong> sarà il punto d'incontro ufficiale diviso per fasce d'età, dove il rispetto è la base di ogni conversazione.</p>
      </div>
      
      {/* SEZIONE ANTEPRIMA STANZE */}
      <div style={{ border: '2px solid #444', padding: '30px', margin: '0 auto 40px auto', maxWidth: '700px', borderRadius: '15px', backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <h3 style={{ color: '#ffcc00', marginTop: 0, fontSize: '1.5rem' }}>LE NOSTRE STANZE</h3>
        <p style={{ marginBottom: '25px', color: '#ccc' }}>Ecco come sarà strutturata la piattaforma al momento del lancio:</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          
          {/* VIDEOCHAT GIOVANI */}
          <div style={{ flex: '1', minWidth: '250px', padding: '15px', border: '1px solid #ffcc00', borderRadius: '10px', backgroundColor: 'rgba(255,204,0,0.05)' }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#ffcc00' }}>VIDEOCHAT GIOVANI (14-17)</h4>
            <p style={{ fontSize: '0.95rem', marginBottom: '15px' }}>
              Uno spazio dedicato alla condivisione di <strong>idee, musica, videogiochi e conoscenza</strong>. Il tutto protetto da controllo costante.
            </p>
            <button 
              onClick={avvisoInArrivo}
              style={{ padding: '12px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', width: '100%', border: 'none', backgroundColor: '#444', color: '#fff' }}>
              COMING SOON
            </button>
          </div>

          {/* VIDEOCHAT ADULTI */}
          <div style={{ flex: '1', minWidth: '250px', padding: '15px', border: '1px solid #444', borderRadius: '10px' }}>
            <h4 style={{ margin: '0 0 10px 0' }}>VIDEOCHAT ADULTI (18+)</h4>
            <p style={{ fontSize: '0.95rem', marginBottom: '15px' }}>
              Accesso riservato esclusivamente ai maggiorenni. 
              <br/><em>Il comportamento scorretto è severamente bandito.</em>
            </p>
            <button 
              onClick={avvisoInArrivo}
              style={{ padding: '12px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', width: '100%', border: 'none', backgroundColor: '#444', color: '#fff' }}>
              COMING SOON
            </button>
          </div>

        </div>
      </div>

      <p style={{ color: '#555', fontSize: '0.9rem' }}>Security Protocol: Active | Server Location: Iceland 🇮🇸</p>
    </div>
  )
}
