<header>
  <div align="center">
    <img src="client/src/images/dino.png">
  </div>
  <h2 align="center">Dino Democracy</h3>
  <p align="center">
    dApp to vote on the name of the newest dinosaurs
  </p>
</header>

### About this Project
This toy project was made to explore and learn technologies for making decentralized applications. 

### Features
#### Submitting a New Dino Name
![submitting a new dino name](./README_assets/new_dino.png)
#### Voting on a Dino Name
![vote on a dinosaur name](./README_assets/vote_dino.png)

#### Displaying the Winner
![show winning dino](./README_assets/winner.png)
### Technology Used
* [Truffle Suite]("https://www.trufflesuite.com/")
* [Solidity](https://docs.soliditylang.org/en/v0.8.6/)
* [web3.js](https://web3js.readthedocs.io/en/v1.3.4/)
* [React](https://www.trufflesuite.com/boxes/react)

### Getting Started

Install truffle with `npm install truffle -g`

Install [Ganache](https://www.trufflesuite.com/ganache)

Set up a new workspace and point it to truffle-config.js in the root directory. 

In the root directoy run 

`truffle compile`

`truffle migrate`

cd into the client directory and run

`npm i`

`npm start`

Install [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)

Head to [localhost:3000](http://localhost:3000/) and the MetaMask overlay should pop up. 

Click **import using Secret Recovery Phrase** and paste in the code from Ganache. 

Checkout the [Truffle tutorial](https://www.trufflesuite.com/tutorial) for additional details on setting up.

