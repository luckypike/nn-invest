import React, { useState, useRef } from 'react'
import AnimateHeight from 'react-animate-height'
import classNames from 'classnames'

import Photo from './Images/timur.jpg'

import styles from './Interview.module.css'

export default function Interview () {
  const [height, setHeight] = useState(0)
  const mountRef = useRef()

  function handleScroll () {
    mountRef.current.scrollIntoView({ behavior: 'smooth' })

    setHeight(height === 0 ? 'auto' : 0)
  }

  return (
    <div className={styles.root} ref={mountRef}>
      <div className={styles.photo}>
        <div className={styles.image} style={{ backgroundImage: `url(${Photo})` }} />

        <div className={styles.desc}>
          Тимур Халитов генеральный директор АО «Корпорация развития Нижегородской области»
        </div>
      </div>

      <div className={styles.interview}>
        <div className={styles.with}>
          Интервью с генеральным диретором Тимуром Халитовым
        </div>

        <div className={styles.text}>
          <p className={styles.q}>
            Тимур Чингизович, один из проектов, опубликованных в каталоге инвестиционных проектов Нижегородской области, —особая экономическая зона (ОЭЗ) <br />промышленно-производственного типа «Кулибин» в Дзержинске. Расскажите об этом проекте?
          </p>

          <p className={styles.a}>
            Это участок площадью 72,3 га в районе Дзержинска — площадка АО «ДПО „Пластик“». Мы выбрали эту площадку, потому что видим потенциал развития территории за счет перспективного промышленного парка «Дзержинск-Восточный» и находящегося поблизости таможенного поста, что дает возможность использовать режим свободной таможенной зоны. Сейчас на площадке функционируют производства: завод «Пластик» и компания «Хома». В дальнейшем они станут резидентами ОЭЗ. Свободные площади, которые мы будем предлагать инвесторам, составляют 28 га. Некоторых будущих резидентов ОЭЗ мы подыскали, это химические и фармацевтические производства — традиционные для Дзержинска. На данный момент у нас законтрактовано порядка 6 млрд руб.
          </p>
        </div>

        <div className={styles.text}>
          <p className={styles.q}>
            Какие льготы регион предоставляет резидентам ОЭЗ?
          </p>

          <p className={styles.a}>
            Чтобы конкурировать с соседними регионами (Татарстаном, Ульяновской, Калужской областями), мы хотим обеспечить, как и у них, нулевые ставки по налогу на прибыль, имущество, землю и транспорт. ДПО «Пластик» и «Хома», когда будут реинвестировать средства в развитие производства и выпуск новых видов продукции, а они планируют это делать, также смогут получать льготы как резиденты ОЭЗ.
          </p>

          <p className={styles.q}>
            По планам корпорации, ОЭЗ должна быть создана в первом квартале 2020 года. Получится ли выдержать сроки?
          </p>

          <p className={styles.a}>
            Заявка сейчас проходит правовую экспертизу в Министерстве экономического развития РФ, планируется, что до конца декабря проект постановления о создании ОЭЗ будет вывешен на сайте правительства. Мы рассчитываем, что к концу марта мы получим постановление, подписанное председателем правительства РФ Дмитрием Медведевым.
          </p>
        </div>

        <div className={styles.left}>
          <AnimateHeight height={height} duration={700}>
            <div className={styles.q}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </div>
            <div className={styles.a}>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </div>
          </AnimateHeight>
        </div>

        <div className={styles.right}>
          <AnimateHeight height={height} duration={700}>
            <div className={styles.q}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate !
            </div>
            <div className={styles.a}>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit!
            </div>
          </AnimateHeight>
        </div>

        <div className={styles.full} onClick={handleScroll}>
          <div className={styles.arrow}>
            <svg viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 6L0 0L2.5 6L0 11.5L9.5 6Z" fill="white"/>
            </svg>
          </div>

          <div className={styles.more}>
            { height === 'auto' ? 'Скрыть интервью' : 'Читать полное интервью' }
          </div>
        </div>
      </div>
    </div>
  )
}
