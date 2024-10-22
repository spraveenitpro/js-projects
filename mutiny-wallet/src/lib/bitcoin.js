import axios from "axios";

// Environment variables for Bitcoin Core connection
const RPC_USER = import.meta.env.VITE_RPC_USER;
const RPC_PASSWORD = import.meta.env.VITE_RPC_PASSWORD;
const RPC_HOST = import.meta.env.VITE_RPC_HOST;
const RPC_PORT = 38332

// Create an axios instance for Bitcoin Core RPC calls
const bitcoinCore = axios.create({
    baseURL: `${RPC_HOST}:${RPC_PORT}`,
    auth: {
        username: RPC_USER,
        password: RPC_PASSWORD,
    },
    headers: {
        "Content-Type": "application/json",
    },
});

// Helper function to make RPC calls
const makeRpcCall = async (method, params = []) => {
    try {
        const response = await bitcoinCore.post("/", {
            jsonrpc: "2.0",
            id: "bitcoinrpc",
            method: method,
            params: params,
        });
        return response.data.result;
    } catch (error) {
        console.error(
            `Error calling ${method}:`,
            error.response ? error.response.data : error.message
        );
        throw error;
    }
};
// Get current block count
export const getBlockCount = async () => {
    return await makeRpcCall("getblockcount");
};

// Get network difficulty
export const getDifficulty = async () => {
    return await makeRpcCall("getdifficulty");
};

// Get mempool info
export const getMempoolInfo = async () => {
    return await makeRpcCall("getmempoolinfo");
};

// Get all Bitcoin Core stats
export const getBitcoinCoreStats = async () => {
    try {
        const [blockCount, difficulty, mempoolInfo, feeEstimates] = await Promise.all([
            getBlockCount(),
            getDifficulty(),
            getMempoolInfo(),
        ]);

        return {
            block_height: blockCount,
            difficulty: difficulty,
            mempool_size: mempoolInfo.size,
            mempool_bytes: mempoolInfo.bytes,
        };
    } catch (error) {
        console.error("Error fetching Bitcoin Core stats:", error);
        throw error;
    }
};
