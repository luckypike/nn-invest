import React from 'react'

import styles from './Potential.module.css'

export default function Potential () {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Потенциал Нижегородской области
      </div>

      <div>
        <div className={styles.top}>
          топ-5
        </div>

        <div className={styles.desc}>
          по величине образовательного потенциала
        </div>
      </div>

      <div>
        <div className={styles.top}>
          топ-10
        </div>

        <div className={styles.desc}>
          регионов с максимальным инвестиционным потенциалом (Агентство «Эксперт РА»)
        </div>
      </div>
    </div>
  )
}
