import React from 'react'

import styles from './Structure.module.css'

export default function Structure () {
  return (
    <div className={styles.root}>
      <div className={styles.group}>
        <div className={styles.title}>
          Структура промышленности Нижегородской области
        </div>

        <div>
          <div className={styles.numbers}>
            1/3
          </div>

          <div className={styles.desc}>
            От совокупного объёма ВРП составляет промышленность региона
          </div>
        </div>

        <div>
          <div className={styles.numbers}>
            600+
          </div>

          <div className={styles.desc}>
            Крупных и средних предприятий
          </div>
        </div>
      </div>

      <div className={styles.text}>
        Современная Нижегородская область территория экономического и геополитического развития России. И является привлекательной для инвесторов благодаря ряду неоспоримых конкурентных преимуществ.
      </div>
    </div>
  )
}
