import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { Context } from './Context'

import Header from './Header'
// import Interview from './Index/Interview'
import Leaders from './Index/Leaders'
import Sites from './Index/Sites'
import Structure from './Index/Structure'
import Position from './Index/Position'
import Production from './Index/Production'
import Potential from './Index/Potential'
import Residents from './Index/Residents'
import News from './Index/News'

import styles from './App.module.css'
import './App.css'

export default function App () {
  const [overlay, setOverlay] = useState(false)

  useEffect(() => {
    if (overlay) {
      document.documentElement.classList.add('active')
    } else {
      document.documentElement.classList.remove('active')
    }
  }, [overlay])

  return (
    <Context.Provider value={{
      setOverlay
    }}>
      <div>
        <Link to='/' className={classNames(styles.overlay, { [styles.active]: overlay })} onClick={() => setOverlay(false)} />

        <Header />

        <div className={styles.root}>
          <div className={styles.intro}>
            <div className={styles.title}>
              <h1>
                Как Корпорация развития Нижегородской области помогает инвесторам
              </h1>
            </div>

            <div className={styles.text}>
              <p>
                В Нижегородской области сформирована широкая инфраструктура поддержки инвесторов. В нее, в том числе, входит Корпорация развития региона.
              </p>

              <p>
                Организация создана правительством области для привлечения инвестиций и дальнейшего сопровождения инвестпроектов предпринимателей.
              </p>

              <p>
               Начиная или развивая дело, инвестор может обратиться за помощью в Корпорацию развития. Среди ее задач — оказать поддержку бизнесмену на всех этапах реализации инвестиционного проекта — от знакомства с регионом до запуска предприятия.
              </p>
            </div>

            <div className={styles.text}>
              <p>
                Работа с Корпорацией развития Нижегородской области делает процесс взаимодействия органов исполнительной власти и бизнеса четким и понятным. Инвестору не придется самому обращаться в другие инстанции для решения своих задач. К тому же она координирует работу института инвестиционных уполномоченных, в состав которого входят представители не только органов власти и муниципалитетов, но и ресурсоснабжающих организаций. Все это позволяет существенно упростить работу инвестора, в том числе снизить временные и финансовые затраты, а также максимально эффективно решать технические вопросы инвесторов.
              </p>
            </div>

            <div className={styles.text}>
              <p>
                Корпорация развития может предложить инвестору варианты размещения предприятия и подобрать площадку для строительства. Она оказывает содействие в подведении инженерной и коммунальной инфраструктуры. При необходимости Корпорация поможет с поиском соинвестора для проекта, а также предоставит информацию о мерах поддержки, которые оказывает региональное правительство бизнесу, подскажет, как привлечь дополнительное финансирование для проекта.
              </p>

              <p>
                Корпорация развития Нижегородской области является связующим звеном между бизнесом и властью. Здесь знают о возможностях региона, слышат потребности предпринимателей и готовы объединить стороны для реализации общей цели – экономического роста и развития.
              </p>
            </div>
          </div>

          {/* <div className={styles.interview}>
            <Interview />
          </div> */}

          <div className={styles.leaders}>
            <Leaders />
          </div>
        </div>

        <div className={styles.region}>
          <div className={styles.region_container}>
            <div style={{ maxWidth: '100rem', margin: '0 auto' }}>
              <div className={styles.production}>
                <Production />
              </div>

              <div className={styles.position}>
                <Position />
              </div>

              <div className={styles.potential}>
                <Potential />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.root}>
          <div className={styles.structure}>
            <Structure />
          </div>

          <div className={styles.residents}>
            <Residents />
          </div>

          <div className={styles.business}>
            <div className={styles.title}>
              Бизнес на особых условиях
            </div>
          </div>
        </div>

        <div className={styles.section} />

        <div className={styles.root}>
          <div className={styles.block}>
            01
          </div>

          <div className={styles.sites}>
            <Sites />
          </div>

          <div className={styles.news}>
            <News />
          </div>

          <div className={styles.footer}>
            <div className={styles.footer_button}>Оставить заявку</div>
            <div className={styles.footer_link}>
              Инвестиционный портал Нижегородской области <a href="https://nn-invest.com/">nn-invest.com</a>
            </div>
            <div className={styles.footer_phone}>
              <p>Горячая линия поддержки инвесторов</p>
              <p><a href="tel:8-800-350-12-52">8-800-350-12-52</a></p>
            </div>
          </div>
        </div>
      </div>
    </Context.Provider>
  )
}
