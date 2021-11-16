# FakeStopOverview
**FakeStop is an secure electronic storage system with the full power of blockchain technology**

###  Setting local blockchain
**We need to install CLI version of Ganache.**

`npm install -g ganache-cli`

Ganache provides us our personal local blockchain network which we can use to develop our blockchain application. It also gives temporary test accounts with fake ethereum which we can use to run our apps. We need to start the RPC server before running our application.

##### We need to install truffle
`npm install truffle -g`

Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.

#### Install Software Packages
please use the following command to install Javascript Packages before you start $ npm install, npm install web3, npm install ExpressJs.

#### Dependencies
- Truffle v5.4.12 (core: 5.4.12)
- Solidity v0.5.16 (solc-js)
- Node v14.18.1
- Web3.js v1.5.3

**To start the ganache run the command**

ganache-cli

* Deploy the smart contract to the local blockchain.

1. open truffle console by running this command:

    `truffle console`
 
2. deploy the smart contract by using this command:

     `migrate`

* Now you can start the server by running this command:

     `node index.js`

* Parallely run the react app using this command:

     ```npm start```




> 
Clone the project, create your account, submit your credentials in the form that will be stored in the smart contract then check the authencity of your diploma.


#### Authors:

Maroua Alaya [Github : https://github.com/maroua199525]

Rim Joudi [Github : https://github.com/RimJoudi]
