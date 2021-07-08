import React, { useState } from 'react'
import styles from './new-dino.module.scss';

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
      <form onSubmit={submitNewDino} className={styles.form}>
        <input className={styles.input} type="text" value={dinoInput} onChange={handleDinoInput} />
        <button className={styles.button} type="submit" value="Submit">submit new dino</button>
      </form>
    </div>
  )
}
