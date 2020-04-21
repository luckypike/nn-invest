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

      <div className={styles.aside}>
        <p className={styles.text}>
          Нижегородская область — один из лидирующих регионов России по уровню индустриального развития.
        </p>

        <p>
          В структуре промышленности региона обрабатывающие производства занимают порядка 90%, благодаря чему экономика Нижегородской области показывает слабую зависимость от сырьевых рынков. Поэтому на сегодняшний день в Нижегородской области уже ведут деятельность множество всемирно известных международных компаний.
        </p>
      </div>
    </div>
  )
}
