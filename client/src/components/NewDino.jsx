import React, { useState } from 'react'

export default function NewDino({ submitNewDinoOnClick }) {
  const [dinoInput, setDinoInput] = useState('');

  // async function submitNewDino(event) {
  //   await contract.methods.addDinoName(web3.utils.asciiToHex(dinoInput)).send({ from: accounts[0] });
  // }
  function submitNewDino(e) {
    e.preventDefault();
    submitNewDinoOnClick(dinoInput);
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
