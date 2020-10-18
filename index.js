// Import the API
const { ApiPromise, WsProvider } = require('@polkadot/api');

async function main () {
    const wsProvider = new WsProvider('wss://rpc.polkadot.io');
    const api = await ApiPromise.create({ provider: wsProvider });

    await api.derive.chain.subscribeNewHeads((header) => {
        console.log(`The latest block is at #${header.number}`);
        console.log(`Author: ${header.author}`);
    });
}

main()
.catch(console.error);