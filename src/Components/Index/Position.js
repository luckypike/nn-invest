import React from 'react'

import styles from './Position.module.css'

export default function Position () {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Позиции Нижегородской области в рейтинге регионов России
      </div>

      <div className={styles.position_item}>
        <div className={styles.place}>
          4 место
        </div>

        <ul className={styles.list}>
          <li>По инновационному потенциалу (агентство «Эксперт РА»)</li>
          <li>По числу людей, занятых в НИОКР</li>
          <li>По индексу научно-технологического развития субъектов РФ («РИА Рейтинг»)</li>
        </ul>
      </div>

      <div className={styles.position_item}>
        <div className={styles.place}>
          7 место
        </div>

        <ul className={styles.list}>
          <li>По объему отгруженной инновационной продукции</li>
          <li>По объему отгрузки продукции обрабатывающих предприятий</li>
        </ul>
      </div>
    </div>
  )
}
