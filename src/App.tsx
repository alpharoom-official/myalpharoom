export default function App() {
  return (
    <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', color: 'white', textAlign: 'center', padding: '50px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#ffcc00', fontSize: '4rem' }}>ALPHA ROOM</h1>
      <p style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>"Sei più forte di quello che pensi."</p>
      
      <div style={{ border: '2px solid red', padding: '20px', margin: '40px auto', maxWidth: '500px', borderRadius: '15px' }}>
        <h2 style={{ color: 'red' }}>⚠️ SICUREZZA MINORI</h2>
        <p>18+ Accesso Libero</p>
        <p>14-17 Solo con consenso genitori</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button style={{ padding: '15px', borderRadius: '5px', cursor: 'pointer' }}>STANZA MINORI</button>
        <button style={{ padding: '15px', backgroundColor: '#ffcc00', fontWeight: 'bold', borderRadius: '5px', cursor: 'pointer' }}>STANZA ADULTI</button>
      </div>
    </div>
  )
}
