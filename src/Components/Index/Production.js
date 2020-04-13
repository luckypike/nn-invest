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
              79,9%
            </div>

            <div className={styles.desc}>
              Выпуска российских автобусов
            </div>
          </div>

          <div>
            <div className={styles.numbers}>
              39,6%
            </div>

            <div className={styles.desc}>
              Выпуска российских грузовых автомобилей
            </div>
          </div>
        </div>

        <div className={styles.group}>
          <div>
            <div className={styles.numbers}>
              33,4%
            </div>

            <div className={styles.desc}>
              Производства ПВХ
            </div>
          </div>

          <div>
            <div className={styles.numbers}>
              41,5%
            </div>

            <div className={styles.desc}>
              Производства стальных труб
            </div>
          </div>
        </div>

        <div className={styles.group}>
          <div>
            <div className={styles.numbers}>
              13%
            </div>

            <div className={styles.desc}>
              Производства Этилена
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
