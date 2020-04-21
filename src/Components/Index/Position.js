import React from 'react'

import styles from './Position.module.css'

export default function Position () {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Позиции Нижегородской области в России
      </div>

      <div className={styles.statistics}>
        <div className={styles.group}>
          <div>
            <div className={styles.numbers}>
              4
            </div>

            <div className={styles.desc}>
              Место в рейтинге субъектов РФ по инновационному потенциалу (Агентство «Эксперт РА»)
            </div>
          </div>

          <div>
            <div className={styles.numbers}>
              7
            </div>

            <div className={styles.desc}>
              Место по объему отгруженной инновационной продукции
            </div>
          </div>
        </div>

        <div className={styles.group}>
          <div>
            <div className={styles.numbers}>
              4
            </div>

            <div className={styles.desc}>
              Место в России по числу людей, занятых в НИОКР
            </div>
          </div>

          <div>
            <div className={styles.numbers}>
              7
            </div>

            <div className={styles.desc}>
              Место в России по объему отгрузки продукции обрабатывающих предприятий
            </div>
          </div>
        </div>

        <div className={styles.group}>
          <div>
            <div className={styles.numbers}>
              4
            </div>

            <div className={styles.desc}>
              Место по индексу научно-технологического развития субъектов РФ («РИА Рейтинг»)
            </div>
          </div>
        </div>

        <div className={styles.text}>
          По данным Росстата индекс химического производства Нижегородской области в 2019 году составил 113,7%, в то время как общероссийский показатель находится на уровне 103,6%
        </div>
      </div>
    </div>
  )
}
