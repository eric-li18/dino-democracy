import React from 'react'

export default function DinoNames({ dinoNames }) {
  const dinoNamesList = dinoNames.map((dino) => {
    return (
      <div key={dino.name}>
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
    )
  })

  return (
    <div>
      {dinoNamesList}
    </div>
  )
}
