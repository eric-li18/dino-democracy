import React, { Component } from "react";
import VoteOnDinoContract from "./contracts/VoteOnDino.json";
import getWeb3 from "./getWeb3";

import NewDino from "./components/NewDino";
import VoteOnDino from "./components/VoteOnDino";

import "./App.css";

class App extends Component {
  state = { storageValue: null, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = VoteOnDinoContract.networks[networkId];
      const instance = new web3.eth.Contract(
        VoteOnDinoContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    // console.log(contract)
    // await contract.methods.set(5).send({ from: accounts[0] });
    // const name = "0x746573740000000000000000000000000000000000000000000900000000000";
    // console.log(contract)
    // await contract.methods.addDinoName(name).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    // const response = await contract.methods.get().call();

    // contract.methods.dinoNames(0).call()
    //   .then((res) => {
    //     console.log(res);
    //   })
    // console.log(contract);
    

    // Update state with the result.
    // this.setState({ storageValue: response});
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <VoteOnDino web3={this.state.web3} contract={this.state.contract} accounts={this.state.accounts} />
        <NewDino web3={this.state.web3} contract={this.state.contract} accounts={this.state.accounts} />
      </div>
    );
  }
}

export default App;
