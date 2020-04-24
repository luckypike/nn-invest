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
          99,3%
        </div>

        <div className={styles.description}>
          автобусов полной массой не более 5 т
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.nums}>
          58,6%
        </div>

        <div className={styles.description}>
          автобусов полной массой более 5 т
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.nums}>
          37,3%
        </div>

        <div className={styles.description}>
          грузового транспорта
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.nums}>
          33,8%
        </div>

        <div className={styles.description}>
          полимеров винилхлорида
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.nums}>
          33%
        </div>

        <div className={styles.description}>
          безопасного стекла
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.nums}>
          44,2%
        </div>

        <div className={styles.description}>
          счетчиков производства и потребления газа
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.nums}>
          46,8%
        </div>

        <div className={styles.description}>
          резисторов (кроме нагревательных)
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.nums}>
          16,7%
        </div>

        <div className={styles.description}>
          газетной бумаги (в рулонах)
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.nums}>
          15,8%
        </div>

        <div className={styles.description}>
          маргарина
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.nums}>
          9,5%
        </div>

        <div className={styles.description}>
          майонеза
        </div>
      </div>
    </div>
  )
}
