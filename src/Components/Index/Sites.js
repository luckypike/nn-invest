import React from 'react'

import Sarov from './Images/sarov.png'
import Volodarsk from './Images/volodarsk.png'

import styles from './Sites.module.css'

export default function Sites () {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Значимые инвестиционные площадки
      </div>

      <div className={styles.place}>
        <div className={styles.image} style={{ backgroundImage: `url(${Sarov})` }} />

        <div className={styles.desc}>
          ТОСЭР «Саров»
        </div>
      </div>

      <div className={styles.place}>
        <div className={styles.image} style={{ backgroundImage: `url(${Volodarsk})` }} />

        <div className={styles.desc}>
          ТОСЭР в г.Володарск и р.п. Решетиха
        </div>
      </div>
    </div>
  )
}
