import React from 'react'

export default function DinoNames({ dinoNames, voteOnDinoOnClick }) {

  function submitVote(dinoName) {
    voteOnDinoOnClick(dinoName);
  }

  const dinoNamesList = dinoNames.map((dino) => {
    return (
      <div key={dino.name}>
        <div>
          <div>
            name: {dino.name}
          </div>
          <div>
            submitted by: {dino.submitter}
          </div>
          <div>
            votes: {dino.votes}
          </div>
        </div>
        <div>
          <button onClick={() => submitVote(dino.name)}>Vote</button>
        </div>
      </div>
    )
  })

  return (
    <div>
      {dinoNamesList}
    </div>
  )
}
