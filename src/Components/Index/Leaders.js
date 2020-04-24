import React from 'react'

import styles from './Leaders.module.css'

export default function Leaders () {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Нижегородская область — один из регионов-лидеров России по уровню индустриального развития
      </div>

      <div className={styles.left}>
        Регион занимает первое место в России по количеству ИТ-специалистов на душу населения (21 000) и является одним из ведущих центров компетенции в сфере информационных технологий.
      </div>

      <div className={styles.right}>
        Нижегородская область представлена на ведущих глобальных цифровых рынках – в США, Сингапуре, Европе. В настоящее время в Нижегородской области насчитывается более 700 ИТ-компаний, среди которых MERA, Intel, HARMAN, «МФИ Софт».
      </div>
    </div>
  )
}
