import React from 'react'

import styles from './Production.module.css'

export default function Production () {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Доля Нижегородской области в общероссийском объёме производства
      </div>

      <div className={styles.item}>
        <div className={styles.nums}>
          99,3<span>%</span>
        </div>

        <div className={styles.description}>
          автобусов полной массой не более 5 т
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.nums}>
          58,6<span>%</span>
        </div>

        <div className={styles.description}>
          автобусов полной массой более 5 т
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.nums}>
          37,3<span>%</span>
        </div>

        <div className={styles.description}>
          грузового транспорта
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.nums}>
          33,8<span>%</span>
        </div>

        <div className={styles.description}>
          полимеров винилхлорида
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.nums}>
          33<span>%</span>
        </div>

        <div className={styles.description}>
          безопасного стекла
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.nums}>
          44,2<span>%</span>
        </div>

        <div className={styles.description}>
          счетчиков производства и потребления газа
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.nums}>
          46,8<span>%</span>
        </div>

        <div className={styles.description}>
          резисторов (кроме нагревательных)
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.nums}>
          16,7<span>%</span>
        </div>

        <div className={styles.description}>
          газетной бумаги (в рулонах)
        </div>
      </div>
    </div>
  )
}
