import React, { useState } from 'react'

export default function NewDino({ web3, contract, accounts }) {
  const [dinoInput, setDinoInput] = useState('');

  async function submitNewDino(event) {
    event.preventDefault();
    await contract.methods.addDinoName(web3.utils.asciiToHex(dinoInput)).send({ from: accounts[0] });
  }

  function handleDinoInput(event) {
    setDinoInput(event.target.value);
  } 

  return (
    <div>
      <form onSubmit={submitNewDino}>
        <input type="text" value={dinoInput} onChange={handleDinoInput} />
        <button type="submit" value="Submit">Submit New Dino</button>
      </form>
    </div>
  )
}
