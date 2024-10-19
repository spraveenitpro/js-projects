import React, { useEffect, useState } from "react";
import { getInfo } from "./lib/lnd";
import "./App.css";

export default function App() {
 const [info, setInfo] = useState({});

 const fetchInfo = async () => {
   try {
     const fetchedInfo = await getInfo();
     console.log(fetchedInfo);
     setInfo(fetchedInfo);
   } catch (error) {
     console.error("Error fetching LND info:", error);
   }
 };

 useEffect(() => {
   fetchInfo();
 }, []);

 return (
   <main>
     {info && info?.alias && (
       <div>
         <h1>Connected to {info.alias}</h1>
         <p>Pubkey: {info.identity_pubkey}</p>
       </div>
     )}
   </main>
 );
}
