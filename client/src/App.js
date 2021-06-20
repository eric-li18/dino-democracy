import React, { Component } from "react";
import VoteOnDinoContract from "./contracts/VoteOnDino.json";
import getWeb3 from "./getWeb3";
import Home from "./pages/Home";

import "./App.css";



class App extends Component {
  state = { web3: null, accounts: null, contract: null };

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
      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  getProtocolInfo()
  {
    return {
      web3: this.state.web3,
      account: this.state.accounts[0],
      contract: this.state.contract,
    }
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <Home protocolInfo={this.getProtocolInfo()} />
      </div>
    );
  }
}

export default App;
