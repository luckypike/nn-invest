import React from 'react'

import styles from './Leaders.module.css'

export default function Leaders () {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Нижегородская область — один из регионов-лидеров России по уровню индустриального развития
      </div>

      <div className={styles.leaders_container}>
        <div className={styles.f}>
          В структуре промышленности региона обрабатывающие производства занимают около 90%, благодаря чему экономика Нижегородской области слабо зависит сырьевых рынков. Поэтому крупнейшие мировые промышленные компании выбирают Нижегородскую область для размещения своих предприятий.
        </div>

        <div className={styles.left}>
          Регион занимает первое место в России по количеству IT-специалистов на душу населения (29 000) и является одним из ведущих центров компетенции в сфере информационных технологий.
        </div>

        <div className={styles.right}>
          Нижегородская область представлена на ведущих глобальных цифровых рынках – в США, Сингапуре, Европе. В настоящее время в Нижегородской области насчитывается более 1100 IT-компаний, среди которых Intel, MERA, HARMAN, «МФИ Софт».
        </div>
      </div>
    </div>
  )
}
