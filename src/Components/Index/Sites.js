import React from 'react'

import styles from './Sites.module.css'

export default function Sites () {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Значимые инвестиционные площадки
      </div>

      <div className={styles.place}>
        <div className={styles.map} />
      </div>

      <div className={styles.desc}>
        Нижегородская область территория инвестиций
      </div>
    </div>
  )
}
