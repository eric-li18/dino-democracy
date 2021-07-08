import React from 'react'
import styles from './header.module.scss';
import Sky from 'react-sky';
import dino from '../../images/dino.png';
import NewDino from '../NewDino';
import WinningDinoOrTime from '../WinningDinoOrTime';

export default function Header({ended, winningDinoName, submitNewDinoOnClick, time}) {
  return (
    <div className={styles.headerFill}>
      <div className={styles.headerWrapper}>
        <Sky
          images={{
            0: dino
          }}
          how={30}
          background={'#D0C9BE'}
        />
          <header><h1 className={styles.header}>DINO DEMOCRACY</h1></header>
          <WinningDinoOrTime ended={ended} winningDinoName={winningDinoName} time={time} />
          <NewDino submitNewDinoOnClick={submitNewDinoOnClick} />
      </div>
    </div>
  )
}
