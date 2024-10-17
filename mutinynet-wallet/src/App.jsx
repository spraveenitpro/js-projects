import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [info, setInfo] = useState({});
    const fetchInfo = async () => {
        try {
            setInfo({alias: "Alice", identity_pubkey:"1234567"})
        } catch (error) {
            console.error("Error fetching LND info", error);
        }
    }

    useEffect(()=> {
        fetchInfo();
    }, []);
    return (
        <main>
            {
                info && info?.alias && (
                    <div>
                        <h1>Connected to {info.alias}</h1>
                        <p>Pubkey: {info.identity_pubkey}</p>
                    </div>
                )
            }
        </main>
    )
}

export default App
