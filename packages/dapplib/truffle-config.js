require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'kidney entire bright venture story dash meadow snake grace inform tackle sell'; 
let testAccounts = [
"0x78a3a24e58801d2d4397b92e9ba5810096567da11a07918e5374d27fce7dbd05",
"0x95026abc37c15d5ce8130c2ea473cb9175ef6018788aa96c7032cda098a67348",
"0x023a98a7f6d4a773b265efeb8f98642ba4a6449e9ca582dc41975a72104191f8",
"0xe69d8c9377424608c701b852c524205c4db2555d20efc123c4612ab2f5aba530",
"0x0ad6092af130b3e7c8d76de926bbdde753cda6088da47897283d8abe7d72a746",
"0x3c24398e39b3d2aa1551c1eb1893202bc5b587bba25ea20d2ee89c4e4d439211",
"0x42518acab447e4f44835e89c0c31f85fadc0c1df1db9b7932ed749f4655057eb",
"0x3c55cb9bfb5c39548ed77d46501789ea946222723b92008683a6f7bee9da5076",
"0x07d997beb9243666c62eca43c78c7242f51cd46e96cf8e5fcd50289d92712a71",
"0x814b14685e003006eefd647673243a28b0c62020b73dd9fb5af823cd3ecc9cb8"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


