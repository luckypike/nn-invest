import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

import Header from './Header'
import Interview from './Index/Interview'
import Sites from './Index/Sites'
import Structure from './Index/Structure'
import Position from './Index/Position'
import Production from './Index/Production'
import Potential from './Index/Potential'
import News from './Index/News'

import styles from './App.module.css'

App.propTypes = {
  location: PropTypes.object
}

export default function App ({ location }) {
  const query = location.pathname

  useEffect(() => {
    if (query !== '/') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [query])

  if (!query) return null

  return (
    <div>
      <Header />

      <Link to='/' className={classNames(styles.overlay, { [styles.active]: query !== '/' })} />

      <div className={styles.root}>
        <div className={styles.intro}>
          <div className={styles.left}>
            В Нижегородской области сформирована широкая инфраструктура поддержки инвесторов. В нее, в том числе, входит Корпорация развития региона. Организация создана правительством области для привлечения инвестиций и дальнейшего сопровождения инвестпроектов предпринимателей. Начиная или развивая дело, инвестор может обратиться за помощью в Корпорацию развития. Среди ее задач — оказать поддержку бизнесмену на всех этапах реализации инвестиционного проекта — от знакомства с регионом до запуска предприятия.
          </div>

          <div className={styles.right}>
            Корпорация развития может предложить инвестору варианты размещения предприятия и подобрать площадку для строительства. Она оказывает содействие в подведении инженерной и коммунальной инфраструктуры. При необходимости Корпорация поможет с поиском соинвестора для проекта, а также предоставит информацию о мерах поддержки, которые оказывает региональное правительство бизнесу, подскажет, как привлечь дополнительное финансирование для проекта.
          </div>
        </div>

        <div className={styles.intro}>
          <div className={styles.left}>
            Работа с Корпорацией развития Нижегородской области делает процесс взаимодействия органов исполнительной власти и бизнеса четким и понятным. Инвестору не придется самому обращаться в другие инстанции для решения своих задач. К тому же она координирует работу института инвестиционных уполномоченных, в состав которого входят представители не только органов власти и муниципалитетов, но и ресурсоснабжающих организаций. Все это позволяет существенно упростить работу инвестора, в том числе снизить временные и финансовые затраты, а также максимально эффективно решать технические вопросы инвесторов.
          </div>

          <div className={styles.right}>
            Корпорация развития Нижегородской области является связующим звеном между бизнесом и властью. Здесь знают о возможностях региона, слышат потребности предпринимателей и готовы объединить стороны для реализации общей цели – экономического роста и развития.
          </div>
        </div>

        <div className={styles.interview}>
          <Interview location={location} />
        </div>

        <div className={styles.sites}>
          <Sites />
        </div>

        <div className={styles.structure}>
          <Structure />
        </div>

        <div className={styles.position}>
          <Position />
        </div>

        <div className={styles.production}>
          <Production />
        </div>

        <div className={styles.potential}>
          <Potential />
        </div>

        <div className={styles.news}>
          <News />
        </div>
      </div>
    </div>
  )
}
