import React from 'react'
import { winningDino } from '../../lib/apis/dino-voting'
import styles from './winning-dino-or-time.module.scss';

export default function WinningDino({ ended, winningDinoName, time }) {
  return (
    <div>
      { ended && (
        <div>
          { winningDinoName ? <h1 className={styles.winner}>winning dino: <span className={styles.name}>{winningDinoName}</span> </h1> : <h1>No Winner</h1>}
        </div>
      )}
      { !ended && <h3 className={styles.time}>time left: { time }</h3> }
    </div>
  )
}
