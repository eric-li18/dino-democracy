import React from 'react'
import styles from './dino-names.module.scss';

export default function DinoNames({ dinoNames, voteOnDinoOnClick }) {

  function submitVote(dinoName) {
    voteOnDinoOnClick(dinoName);
  }

  const dinoNamesList = dinoNames.map((dino) => {
    return (
      <tr key={dino.name}>
        <td>
          {dino.name}
        </td>
        <td>
          {dino.submitter}
        </td>
        <td>
          <div className={styles.vote}><span>{dino.votes}</span><button className={styles.button} onClick={() => submitVote(dino.name)}><i class="fa fa-thumbs-o-up"></i></button></div>
        </td>
      </tr>
    )
  })

  return (
    <div className={styles.dinoNamesWrapper}>
      {dinoNames.length !== 0 && (
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>submitted by</th>
              <th>votes</th>
            </tr>
          </thead>
          <tbody>
            {dinoNamesList}
          </tbody>
        </table>
      )}
      
    </div>
  )
}
