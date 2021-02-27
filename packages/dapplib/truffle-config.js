require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture stove regret random coach inflict drive fresh gesture'; 
let testAccounts = [
"0xd9013ffb2f851fef3e06838a3fb55ba13b526aa94aa7d164add9a38ac01a74e7",
"0x783679b91bcbf266b17f004ec017c4294c1c3576afe05a58945585c6ba33435b",
"0x1bbf0a8c9cf43abff17d857f216b6a34116487ce094d82e0e0f225e6504369c2",
"0xe508c6e8ace9e63be49328c3da4a25fbd4339420b2e85aa23cc108a0e492da2a",
"0x79dc9980206e9a4a23be7ab430abaf8f17a4870d8aa02371b1663a9d64a66aa0",
"0xde2906de3952f2c71d4010da70bab15eb814ef7f13d9223003fb4e7bd07ad09a",
"0xb9a28a7eca1ff9c4456ef5fcfd2521f52ca98615d73c94b2178f8de779f5cb3b",
"0x9a9df70f8caf70c1e0806f0ed3c85773d659437543fba774858e39a88e8ba743",
"0xa8dd044535ef46911d0e0ddac21c5d29bbfb5939329d8b851ff7f7f9983d3587",
"0xacfa80ee9cc59d628e7b1c34122fd6ec64f47190fa79b2b4d9729943bdab3632"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
