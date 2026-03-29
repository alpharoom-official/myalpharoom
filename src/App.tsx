export default function App() {
  const entraStanzaMinori = () => {
    const conferma = window.confirm("ATTENZIONE: Stai entrando nella VIDEOCHAT JUNIOR (14-17). Confermi di avere il consenso dei tuoi genitori?");
    if (conferma) {
      window.open("https://meet.jit.si/AlphaRoomMinori_Protetta2026", "_blank");
    }
  };

  return (
    <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', color: 'white', textAlign: 'center', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      
      {/* LOGO E SLOGAN */}
      <h1 style={{ color: '#ffcc00', fontSize: '3.5rem', margin: '0' }}>MYALPHAROOM.COM</h1>
      <p style={{ fontSize: '1.4rem', fontStyle: 'italic', color: '#ffcc00', marginBottom: '30px' }}>"L'eccellenza è un'abitudine, non un atto."</p>

      {/* IL MANIFESTO DELLA VIDEOCHAT */}
      <div style={{ maxWidth: '800px', margin: '0 auto 40px auto', textAlign: 'left', lineHeight: '1.6', fontSize: '1.1rem', backgroundColor: '#2a2a2a', padding: '25px', borderRadius: '15px', borderLeft: '5px solid #ffcc00' }}>
        <h2 style={{ color: 'white', textAlign: 'center' }}>Benvenuto nella Videochat Live</h2>
        <p><strong>MyAlphaRoom</strong> è una piattaforma di video-incontro pensata per chi non si accontenta. Abbiamo creato due ambienti distinti per garantire sicurezza e argomenti pertinenti:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>🎥 <strong>Videochat Junior (14-17):</strong> Uno spazio sicuro per i più giovani, dedicato allo studio, allo sport e alla crescita, protetto da regole ferree.</li>
          <li>🎥 <strong>Videochat Adulti (18+):</strong> Un ambiente per il networking, il business e il confronto tra uomini e donne che puntano in alto.</li>
          <li>🛡️ <strong>Privacy Totale:</strong> Stanze separate e accesso regolato per la massima tutela di ogni utente.</li>
        </ul>
      </div>
      
      {/* SEZIONE ACCESSO VIDEO */}
      <div style={{ border: '2px solid #ff4444', padding: '30px', margin: '0 auto 40px auto', maxWidth: '700px', borderRadius: '15px', backgroundColor: 'rgba(255,68,68,0.05)' }}>
        <h3 style={{ color: '#ff4444', marginTop: 0, fontSize: '1.5rem' }}>🔴 SCEGLI LA TUA STANZA VIDEO</h3>
        <p style={{ marginBottom: '25px' }}>Cliccando sul bottone entrerai direttamente nella videochat live della tua categoria.</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
          
          {/* BOTTONE GIOVANI */}
          <div style={{ flex: '1', minWidth: '250px', padding: '15px', border: '1px solid #444', borderRadius: '10px' }}>
            <h4 style={{ margin: '0 0 10px 0' }}>STANZA JUNIOR (14-17)</h4>
            <p style={{ fontSize: '0.8rem', color: '#aaa', marginBottom: '15px' }}>È richiesto il consenso dei genitori per accedere alla camera.</p>
            <button 
              onClick={entraStanzaMinori}
              style={{ padding: '15px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', width: '100%', backgroundColor: '#eee', color: '#111', border: 'none' }}>
              AVVIA VIDEOCHAT JUNIOR
            </button>
          </div>

          {/* BOTTONE ADULTI */}
          <div style={{ flex: '1', minWidth: '250px', padding: '15px', border: '1px solid #444', borderRadius: '10px' }}>
            <h4 style={{ margin: '0 0 10px 0' }}>STANZA ADULTI (18+)</h4>
            <p style={{ fontSize: '0.8rem', color: '#aaa', marginBottom: '15px' }}>Accesso riservato esclusivamente ai maggiorenni.</p>
            <button 
              style={{ padding: '15px 20px', backgroundColor: '#ffcc00', color: '#111', fontWeight: 'bold', borderRadius: '5px', cursor: 'pointer', border: 'none', width: '100%' }}>
              AVVIA VIDEOCHAT ADULTI
            </button>
          </div>

        </div>
      </div>

      <p style={{ color: '#555', fontSize: '0.9rem' }}>Security Protocol: Active | Location: Iceland 🇮🇸 Server</p>
    </div>
  )
}
