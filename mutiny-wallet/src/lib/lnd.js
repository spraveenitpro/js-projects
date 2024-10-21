import axios from "axios";

// Environment variables for LND connection
const MACAROON = import.meta.env.VITE_MACAROON;
const HOST = import.meta.env.VITE_LND_HOST;

// Create an axios instance for LND API calls
const lnd = axios.create({
    baseURL: `https://${HOST}:8080`,
    headers: {
        "Content-Type": "application/json",
        "Grpc-Metadata-Macaroon": MACAROON,
    },
});

// Fetch general information about the LND node
export const getInfo = async () => {
    try {
        const response = await lnd.get("/v1/getinfo");
        return response.data;
    } catch (error) {
        console.error(
            "Error fetching LND info:",
            error.response ? error.response.data : error.message,
        );
        throw error;
    }
};

export const getBalances = async () => {
    try {
        const response = await lnd.get("/v1/balance/channels");
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(
            "Error fetching LND balances:",
            error.response ? error.response.data : error.message,
        );
        throw error;
    }
};

// Add a method for creating invoice from API in lnd.js
export const createInvoice = async (amount) => {
    try {
        const response = await lnd.post("/v1/invoices", {
            value: amount,
        });
        console.log("lnd response", response);
        return response.data;
    } catch (error) {
        console.error(
            "Error creating invoice:",
            error.response ? error.response.data : error.message,
        );
        throw error;
    }
};
