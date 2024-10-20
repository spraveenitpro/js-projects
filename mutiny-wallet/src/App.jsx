import  { useEffect, useState } from "react";
import { getInfo, getBalances } from "./lib/lnd";
import "./App.css";

export default function App() {
   const [info, setInfo] = useState({});
   const [lightningBalance, setLightningBalance] = useState(null);
   const [inbound, setInbound] = useState(null);

   const fetchInfo = async () => {
       try {
           const fetchedInfo = await getInfo();
           console.log(fetchedInfo);
           setInfo(fetchedInfo);
       } catch (error) {
           console.error("Error fetching LND info:", error);
       }
   };

   const fetchBalances = async () => {
       try {
           const fetchedBalance = await getBalances();
           //console.log(fetchBalances);
           setLightningBalance(fetchedBalance.local_balance.sat);
           setInbound(fetchedBalance.remote_balance.sat);
       } catch (error) {
           console.error("Error fetching Lightning balances:", error);
       }
   };

   useEffect(() => {
       fetchInfo();

       // Set up polling for balances and Bitcoin Core stats
       const pollInterval = setInterval(() => {
           fetchBalances();
       }, 5000); // Poll every 5 seconds

       // Initial fetch for balances and Bitcoin Core stats
       fetchBalances();

       // Clean up interval on component unmount
       return () => clearInterval(pollInterval);
   }, []);

   return (
       <main>
           {info && info?.alias && (
               <div>
                   <h1>Connected to {info.alias}</h1>
                   <p>Pubkey: {info.identity_pubkey}</p>
               </div>
           )}
           {lightningBalance && inbound && (
               <div>
                   <h2>Lightning Balance</h2>
                   <p>Balance: {lightningBalance} sats</p>
                   <p>Inbound: {inbound} sats</p>
               </div>
           )}
       </main>
   );
}
