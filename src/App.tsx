import React, { useState } from 'react';

export default function App() {
  const [accettato, setAccettato] = useState(false);

  const avvisoInArrivo = (stanza: string) => {
    alert(`Stai entrando nella ${stanza}. Ricorda: la Beta ufficiale aprirà questo weekend. Per ora l'accesso è limitato ai test tecnici.`);
    // Qui poi metteremo il link reale Jitsi: window.open("https://meet.jit.si/MyAlphaRoom_" + stanza, "_blank");
  };

  return (
    <div style={{ backgroundColor: '#1a1a1a', minHeight: '100vh', color: 'white', textAlign: 'center', padding: '40px 20px', fontFamily: 'sans-serif' }}>
      
      {/* LOGO */}
      <h1 style={{ color: '#ffcc00', fontSize: '3.5rem', margin: '0' }}>MYALPHAROOM.COM</h1>
      <div style={{ backgroundColor: '#ffcc00', color: 'black', display: 'inline-block', padding: '5px 15px', fontWeight: 'bold', borderRadius: '5px', marginTop: '10px', fontSize: '0.9rem' }}>
        🚀 BETA TEST PHASE - LANCIO PREVISTO: VENERDÌ/SABATO
      </div>

      {/* BOX LEGALE - LA CORAZZA */}
      <div style={{ maxWidth: '800px', margin: '40px auto', textAlign: 'left', backgroundColor: '#2a2a2a', padding: '25px', borderRadius: '15px', border: '1px solid #444' }}>
        <h2 style={{ color: '#ff4444', textAlign: 'center', marginTop: 0 }}>⚠️ DISCLAIMER & REGOLE DI ACCESSO</h2>
        <div style={{ fontSize: '0.9rem', color: '#ccc', height: '150px', overflowY: 'scroll', padding: '10px', backgroundColor: '#1a1a1a', borderRadius: '5px', marginBottom: '20px', border: '1px solid #333' }}>
          <p><strong>1. Responsabilità:</strong> L'utente è l'unico responsabile del proprio comportamento e dei contenuti trasmessi in videochat. MyAlphaRoom non si assume responsabilità per azioni di terzi.</p>
          <p><strong>2. Minori (14-17):</strong> L'accesso alla Videochat Giovani richiede il consenso dei genitori o dei tutori legali. Entrando, dichiari di avere l'autorizzazione necessaria.</p>
          <p><strong>3. Tolleranza Zero:</strong> Sono severamente vietati insulti, bullismo, contenuti espliciti o illegali. Il mancato rispetto comporta il BAN immediato e la segnalazione alle autorità se necessario.</p>
          <p><strong>4. Privacy:</strong> Non è consentito registrare lo schermo o diffondere immagini altrui senza consenso esplicito.</p>
          <p><strong>5. Giurisdizione:</strong> Il servizio opera secondo i protocolli di sicurezza e privacy stabiliti per la fase Beta.</p>
        </div>

        <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '1.1rem', color: '#ffcc00' }}>
          <input 
            type="checkbox" 
            checked={accettato} 
            onChange={() => setAccettato(!accettato)} 
            style={{ width: '20px', height: '20px' }}
          />
          Dichiaro di avere l'età corretta e accetto integralmente le regole.
        </label>
      </div>
      
      {/* SEZIONE STANZE (SBLOCCATE SOLO SE ACCETTI) */}
      <div style={{ opacity: accettato ? 1 : 0.4, pointerEvents: accettato ? 'auto' : 'none', transition: 'all 0.3s' }}>
        <h3 style={{ color: '#ffcc00', fontSize: '1.5rem' }}>SCEGLI LA TUA STANZA VIDEO</h3>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '20px' }}>
          
          {/* VIDEOCHAT GIOVANI */}
          <div style={{ flex: '1', minWidth: '280px', padding: '20px', border: '1px solid #ffcc00', borderRadius: '10px', backgroundColor: 'rgba(255,204,0,0.05)' }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#ffcc00' }}>VIDEOCHAT GIOVANI (14-17)</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '20px', color: '#bbb' }}>
              Idee, musica, videogiochi ed amicizie. <br/><strong>Ambiente protetto e moderato.</strong>
            </p>
            <button 
              onClick={() => avvisoInArrivo("GIOVANI")}
              style={{ padding: '15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', width: '100%', border: 'none', backgroundColor: '#ffcc00', color: '#111' }}>
              ENTRA NELLA STANZA GIOVANI
            </button>
          </div>

          {/* VIDEOCHAT ADULTI */}
          <div style={{ flex: '1', minWidth: '280px', padding: '20px', border: '1px solid #444', borderRadius: '10px' }}>
            <h4 style={{ margin: '0 0 10px 0' }}>VIDEOCHAT ADULTI (18+)</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: '20px', color: '#bbb' }}>
              Networking, business e confronto Alpha. <br/><strong>Comportamento scorretto = BAN.</strong>
            </p>
            <button 
              onClick={() => avvisoInArrivo("ADULTI")}
              style={{ padding: '15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', width: '100%', border: 'none', backgroundColor: '#eee', color: '#111' }}>
              ENTRA NELLA STANZA ADULTI
            </button>
          </div>

        </div>
      </div>

      <p style={{ color: '#444', fontSize: '0.8rem', marginTop: '40px' }}>Security: Islanda Server | Protection: Active Cloudflare Shield</p>
    </div>
  );
}
