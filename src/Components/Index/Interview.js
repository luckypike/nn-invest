import React, { useContext } from 'react'
import { Route, Link } from 'react-router-dom'
import { Context } from '../Context'

import Photo from './Images/timur.jpg'
import Sidebar from './Sidebar'

import styles from './Interview.module.css'

export default function Interview () {
  const { setOverlay } = useContext(Context)

  return (
    <div className={styles.root}>
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

        <Link to="/interview/1" className={styles.full} onClick={setOverlay}>
          <div className={styles.arrow}>
            <svg viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 6L0 0L2.5 6L0 11.5L9.5 6Z" fill="white"/>
            </svg>
          </div>

          <div className={styles.more}>
            Читать полное интервью
          </div>
        </Link>
      </div>

      <Route
        path='/interview/1'
        render={(props) =>
          <Sidebar
            {...props}
            image={Photo}
            title={<InterviewTitle />}
            text={<InterviewText />}
          />
        }
      />
    </div>
  )
}

function InterviewTitle () {
  return (
    <div>
      Интервью с генеральным диретором Тимуром Халитовым
    </div>
  )
}

function InterviewText () {
  return (
    <div className={styles.container}>
      <p className={styles.q}>
        Тимур Чингизович, один из проектов, опубликованных в каталоге инвестиционных проектов Нижегородской области, —особая экономическая зона (ОЭЗ) промышленно-производственного типа «Кулибин» в Дзержинске. Расскажите об этом проекте?
      </p>

      <p className={styles.a}>
        Это участок площадью 72,3 га в районе Дзержинска — площадка АО «ДПО „Пластик“». Мы выбрали эту площадку, потому что видим потенциал развития территории за счет перспективного промышленного парка «Дзержинск-Восточный» и находящегося поблизости таможенного поста, что дает возможность использовать режим свободной таможенной зоны. Сейчас на площадке функционируют производства: завод «Пластик» и компания «Хома». В дальнейшем они станут резидентами ОЭЗ. Свободные площади, которые мы будем предлагать инвесторам, составляют 28 га. Некоторых будущих резидентов ОЭЗ мы подыскали, это химические и фармацевтические производства — традиционные для Дзержинска. На данный момент у нас законтрактовано порядка 6 млрд руб.
      </p>

      <div className={styles.container}>
        <p className={styles.q}>
          Какие льготы регион предоставляет резидентам ОЭЗ?
        </p>

        <p className={styles.a}>
          Чтобы конкурировать с соседними регионами (Татарстаном, Ульяновской, Калужской областями), мы хотим обеспечить, как и у них, нулевые ставки по налогу на прибыль, имущество, землю и транспорт. ДПО «Пластик» и «Хома», когда будут реинвестировать средства в развитие производства и выпуск новых видов продукции, а они планируют это делать, также смогут получать льготы как резиденты ОЭЗ.
        </p>
      </div>

      <div className={styles.container}>
        <p className={styles.q}>
          По планам корпорации, ОЭЗ должна быть создана в первом квартале 2020 года. Получится ли выдержать сроки?
        </p>

        <p className={styles.a}>
          Заявка сейчас проходит правовую экспертизу в Министерстве экономического развития РФ, планируется, что до конца декабря проект постановления о создании ОЭЗ будет вывешен на сайте правительства. Мы рассчитываем, что к концу марта мы получим постановление, подписанное председателем правительства РФ Дмитрием Медведевым.
        </p>
      </div>
    </div>
  )
}
