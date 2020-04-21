import React from 'react'

import styles from './Production.module.css'

export default function Production () {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Нижегородская область в общероссийском объёме производства
      </div>

      <div className={styles.statistics}>
        <div className={styles.group}>
          <div>
            <div className={styles.numbers}>
              99,3%
            </div>

            <div className={styles.desc}>
              Автобусов (не более 5 тонн)
            </div>
          </div>

          <div>
            <div className={styles.numbers}>
              37,3%
            </div>

            <div className={styles.desc}>
              Грузовых автотранспортных средств
            </div>
          </div>
        </div>

        <div className={styles.group}>
          <div>
            <div className={styles.numbers}>
              33,8%
            </div>

            <div className={styles.desc}>
              Полимеров винилхлорида
            </div>
          </div>

          <div>
            <div className={styles.numbers}>
              33,0%
            </div>

            <div className={styles.desc}>
              Стекла безопасного
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
