import React from 'react'

import Stairs from './Images/stairs.jpg'
import Fair from './Images/fair.jpg'

import styles from './News.module.css'

export default function News () {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Новости
      </div>

      <div className={styles.news}>
        <div className={styles.news_item}>
          <div className={styles.image} style={{ backgroundImage: `url(${Stairs})` }} />

          <div className={styles.text}>
            Больше 7000 обращений от нижегородских предпринимателей поступило инвеступолномоченным за прошедшую неделю
          </div>

          <div className={styles.date}>
            10 апреля 2020 г.
          </div>
        </div>

        <div className={styles.news_item}>
          <div className={styles.image} style={{ backgroundImage: `url(${Fair})` }} />

          <div className={styles.text}>
            Инвесторы смогут обратиться за консультацией по мерам поддержки, связанным с эпидемиологической обстановкой, к инвеступолномоченным или на горячую линию поддержки инвесторов
          </div>

          <div className={styles.date}>
            31 марта 2020 г.
          </div>
        </div>
      </div>
    </div>
  )
}
