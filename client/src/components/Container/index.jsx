import React from 'react'
import styles from './container.module.scss';

export default function Container({ children }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
