import axios from "axios"

// Environment variables for LND connection

const MACAROON = import.meta.env.VITE_MACAROON
const HOST = import.meta.env.VITE_LND_HOST


// Create axios instance for LND API calls

const lnd = axios.create({
    baseURL: `https://${HOST}:8080`,
    headers: {
        "Content-Type": "application/json",
        "Grpc-Metadata-Macaroon": MACAROON,
    }
})

// Fetch general information about the LND node
