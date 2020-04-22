import React from 'react'

import Plant from './Images/plant.jpg'

import styles from './Potential.module.css'

export default function Potential () {
  return (
    <div className={styles.root}>
      <div className={styles.group}>
        <div className={styles.title}>
          Потенциал Нижегородской области
        </div>

        <div>
          <div className={styles.top}>
            топ-<span className={styles.num}>5</span>
          </div>

          <div className={styles.desc}>
            по величине образовательного потенциала
          </div>
        </div>

        <div>
          <div className={styles.top}>
            топ-<span className={styles.num}>10</span>
          </div>

          <div className={styles.desc}>
            регионов с максимальным инвестиционным потенциалом (Агентство «Эксперт РА»)
          </div>
        </div>
      </div>

      <div className={styles.text}>
        Нижегородская область занимает 1 место в России по количеству ИТ-специалистов на душу населения (21 000 человек) и является одним из ведущих центров компетенции в России в сфере информационных технологий и представлена на ведущих глобальных цифровых рынках – в США, Сингапуре, Европе. В настоящее время в Нижегородской области насчитывается более 700 ИТ-компаний, среди которых MERA, Intel, HARMAN, МФИ Софт.
      </div>

      <div className={styles.photo}>
        <div className={styles.image} style={{ backgroundImage: `url(${Plant})` }} />
      </div>
    </div>
  )
}
