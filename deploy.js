const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3');
const  { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'sure vicious cry must attend virus razor aerobic glass horse letter prevent',
    'https://rinkeby.infura.io/v3/3f89ce913ccd4e058f58cc953142a376'
);

const web3 = new Web3(provider);

const deploy = async () => {
const accounts = await web3.eth.getAccounts();

console.log('Attempting to deploy from account', accounts[0]);

const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy( { data: bytecode, arguments: ['Hi There!']})
    .send({ gas: '1000000', from: accounts[0], gasPrice: '5000000000' });

console.log('contract deployed to', result.options.address);
};
deploy();