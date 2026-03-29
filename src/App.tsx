import React from 'react'

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ padding: '40px 20px', textAlign: 'center' }}>
        <h1 style={{ color: '#ffcc00', fontSize: '3.5rem', marginBottom: '10px' }}>ALPHA ROOM</h1>
        <p style={{ fontSize: '1.4rem', fontStyle: 'italic', color: '#cccccc' }}>
          "Sei più forte di quello che pensi. Rispetta te stesso e gli altri."
        </p>
        
        <div style={{ maxWidth: '600px', margin: '40px auto', border: '3px solid #ff4444', padding: '30px', borderRadius: '15px', backgroundColor: 'rgba(255,0,0,0.1)' }}>
          <h2 style={{ color: '#ff4444', marginTop: 0 }}>⚠️ REGOLE DI ACCESSO</h2>
          <p style={{ fontSize: '1.1rem' }}>L'accesso alla piattaforma è severamente regolato per la sicurezza di tutti:</p>
          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', display: 'inline-block', fontSize: '1.1rem' }}>
            <li style={{ marginBottom: '10px' }}>✅ <strong>18+ ANNI:</strong> Accesso libero previa accettazione termini.</li>
            <li style={{ marginBottom: '10px' }}>✅ <strong>14-17 ANNI:</strong> Solo con CONSENSO esplicito dei genitori.</li>
            <li style={{ marginBottom: '10px' }}>❌ <strong>SOTTO I 14 ANNI:</strong> Accesso non consentito.</li>
          </ul>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <button style={{ padding: '15px 30px', fontSize: '1.1rem', cursor: 'pointer', backgroundColor: '#333', color: 'white', border: '1px solid #ffcc00', borderRadius: '5px' }}>
            ENTRA STANZA MINORI (14-17)
          </button>
          <button style={{ padding: '15px 30px', fontSize: '1.1rem', cursor: 'pointer', backgroundColor: '#ffcc00', color: 'black', fontWeight: 'bold', border: 'none', borderRadius: '5px' }}>
            ENTRA STANZA ADULTI (18+)
          </button>
        </div>
      </header>
    </div>
  )
}

export default App
