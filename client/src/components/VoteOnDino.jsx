import React, { useEffect, useState } from 'react'

export default function VoteOnDino({ web3, contract }) {
  const [dinoNames, setDinoNames] = useState([]);
  useEffect(() => {
    var dinoNamesList = [];

    async function getDinoNames() {
      const dinoNamesCount = await contract.methods.dinoNamesCount().call();
      for (var i = 0; i < dinoNamesCount; i++) {
        const dinoName = await contract.methods.dinoNames(i).call();
        const name = web3.utils.hexToAscii(dinoName.name);
        dinoNamesList.push(
          <div key={i}>
            <div>
              name: {name}
            </div>
            <div>
              submitted by: {dinoName.submitter}
            </div>
            <div>
              votes: {dinoName.votes}
            </div>
          </div>
        )
      }
      setDinoNames(dinoNamesList);
    }
    
    getDinoNames();
  }, []);


  return (
    <div>
      <h1>Dinos</h1>
      {dinoNames}
    </div>
  )
}
