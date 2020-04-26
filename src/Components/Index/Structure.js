import React from 'react'

import Plant from './Images/plant.jpg'

import styles from './Structure.module.css'

export default function Structure () {
  return (
    <div className={styles.root}>
      <div className={styles.image} style={{ backgroundImage: `url(${Plant})` }} />

      <div className={styles.structure_container}>
        <div className={styles.title}>
          Структура промышленности Нижегородской области
        </div>

        <div className={styles.text}>
          В структуре промышленности региона обрабатывающие производства занимают около 90%, благодаря чему экономика Нижегородской области слабо зависит сырьевых рынков. Поэтому крупнейшие мировые промышленные компании выбирают Нижегородскую область для размещения своих предприятий
        </div>
      </div>
    </div>
  )
}
