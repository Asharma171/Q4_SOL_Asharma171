import bs58 from "bs58";

// Your private key
const privateKeyBase58 = '';

// Convert the base58 string to a byte array
const privateKeyArray = bs58.decode(privateKeyBase58);

console.log('Private Key Array:', Array.from(privateKeyArray));