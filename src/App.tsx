import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header style={{ padding: '20px', textAlign: 'center' }}>
        <h1 style={{ color: '#ffcc00', fontSize: '3rem' }}>ALPHA ROOM</h1>
        <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
          "Sei più forte di quello che pensi. Rispetta te stesso e gli altri."
        </p>
        
        <div style={{ margin: '40px 0', border: '2px solid red', padding: '20px', borderRadius: '10px' }}>
          <h2 style={{ color: 'red' }}>⚠️ REGOLE DI ACCESSO</h2>
          <p>L'accesso alla piattaforma è severamente regolato:</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>✅ <strong>18+ ANNI:</strong> Accesso libero previa accettazione termini.</li>
            <li>✅ <strong>14-17 ANNI:</strong> Solo con CONSENSO esplicito dei genitori.</li>
            <li>❌ <strong>SOTTO I 14 ANNI:</strong> Accesso non consentito.</li>
          </ul>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <button style={{ padding: '15px 30px', fontSize: '1rem', cursor: 'pointer' }}>
            ENTRA STANZA MINORI (14-17)
          </button>
          <button style={{ padding: '15px 30px', fontSize: '1rem', cursor: 'pointer' }}>
            ENTRA STANZA ADULTI (18+)
          </button>
        </div>
      </header>
    </div>
  )
}

export default App
