const { ApiPromise, WsProvider } = require('@polkadot/api');

async function main () {
    const number = await process.argv[2];
    if (!number) {
        console.log("input block number.");
        process.exit();
    }

    const wsProvider = new WsProvider('wss://rpc.polkadot.io');
    const api = await ApiPromise.create({ provider: wsProvider });

    const blockHash = await api.rpc.chain.getBlockHash(number);
    const signedBlock = await api.rpc.chain.getBlock(blockHash);

    console.log(`input block number: ${number}`)
    console.log(`hash: ${signedBlock.block.header.hash.toString()}`);
    
    process.exit();
}

main()
.catch(console.error);