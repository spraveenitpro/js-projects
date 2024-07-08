type Sats = number;
type SatsPerVByte = Sats;
type Transaction = {
    inputs: number;
    outputs: number;
    witness: string;
}

function calculateTxFee(tx: Transaction, feeRate: SatsPerVByte): Sats {
    const {inputs, outputs, witness } = tx;
    const inputWeight = inputs * 4;
    const outputWeight = outputs * 4;
    const witnessWeight = witness.length / 2;

    return ( inputWeight + outputWeight + witnessWeight) * feeRate;
}

const transaction: Transaction = {
    inputs: 3,
    outputs: 2,
    witness: "I can spend this money"
}


const feeRate: SatsPerVByte = 50;
const txFee = calculateTxFee(transaction, feeRate)

console.log(`The transaction: ${calculateTxFee(transaction, feeRate) } sats`)