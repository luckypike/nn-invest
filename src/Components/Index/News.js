import React, { useContext } from 'react'
import { Route, Link } from 'react-router-dom'

import { Context } from '../Context'
import Sidebar from './Sidebar'
import Stairs from './Images/stairs.jpg'
import Fair from './Images/fair.jpg'

import styles from './News.module.css'

export default function News () {
  const { setOverlay } = useContext(Context)

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Новости
      </div>

      <div className={styles.news}>
        <Link to='/news/1' className={styles.news_item} onClick={setOverlay}>
          <div className={styles.image} style={{ backgroundImage: `url(${Stairs})` }} />

          <div className={styles.text}>
            Больше 7000 обращений от нижегородских предпринимателей поступило инвеступолномоченным за прошедшую неделю
          </div>

          <div className={styles.date}>
            10 апреля 2020 г.
          </div>
        </Link>

        <Link to='/news/2' className={styles.news_item} onClick={setOverlay}>
          <div className={styles.image} style={{ backgroundImage: `url(${Fair})` }} />

          <div className={styles.text}>
            Инвесторы смогут обратиться за консультацией по мерам поддержки, связанным с эпидемиологической обстановкой, к инвеступолномоченным или на горячую линию поддержки инвесторов
          </div>

          <div className={styles.date}>
            31 марта 2020 г.
          </div>
        </Link>
      </div>

      <Route
        path='/news/1'
        render={(props) =>
          <Sidebar
            {...props}
            image={Stairs}
            title={<StairsTitle />}
            desc={<StairsDesc />}
            text={<StairsText />}
          />
        }
      />

      <Route
        path='/news/2'
        render={(props) =>
          <Sidebar
            {...props}
            image={Fair}
            title={<FairTitle />}
            desc={<FairDesc />}
            text={<FairText />}
          />
        }
      />
    </div>
  )
}

function StairsTitle () {
  return (
    <div>
      Больше 7000 обращений от нижегородских предпринимателей поступило
      инвеступолномоченным за прошедшую неделю
    </div>
  )
}

function StairsDesc () {
  return (
    <div>
      Более 7000 обращений от предпринимателей поступило инвестиционным
      уполномоченным муниципалитетов Нижегородской области, а также на
      горячую линию поддержки инвесторов по вопросам, связанным с
      эпидемиологической обстановкой. Об этом сообщил генеральный директор
      Корпорации развития Нижегородской области Тимур Халитов.
    </div>
  )
}

function StairsText () {
  return (
    <div>
      <p>
        «Многие запросы касаются мер поддержки, среди которых предоставление
        налоговых каникул для предприятий и ИП и возможность участия в кредитных
        программах для выплаты зарплаты сотрудникам» - отметил <strong>Тимур Халитов</strong>
      </p>

      <p>
        «У бизнеса сейчас много вопросов. При этом большая часть вопросов именно к
        инвеступолномоченным, как к представителям муниципалитетов, касается
        получений подтверждений на право работать в нерабочие дни. В этой связи одна из
        основных задач на сегодня для получивших Подтверждение предпринимателей –
        строгое соблюдение п. 8 Указа Губернатора «О введении режима повышенной
        готовности», который включает особые условия допуска к работе», - подчеркнул
        губернатор Нижегородской области <strong>Глеб Никитин</strong>.
      </p>

      <p>
        Напомним, на всей территории региона разрешена работа организаций, которые
        не подпадают под действие Указа Президента РФ No 239, а также
        системообразующих предприятий, утвержденных на федеральном уровне и на
        уровне Нижегородской области и их контрагентов. Они должны будут получить
        подтверждение на право работать в нерабочие дни в региональных органах
        исполнительной власти.
      </p>
      <p>
        Также работать в нерабочие дни на всей территории региона могут
        организации, осуществляющие деятельность в таких сферах, как: сельское
        хозяйство, ремонт автотранспортных средств, пассажирские перевозки,
        производственные предприятия, осуществляющие деятельность на обособленной
        огороженной территории, при условии соблюдения работниками дистанции в 1,5
        метра. Подтверждения на право работать в нерабочие дни для этих организаций
        выдают органы местного самоуправления.
      </p>
    </div>
  )
}

function FairTitle () {
  return (
    <div>
      Инвесторы смогут обратиться за консультацией по мерам поддержки,
      связанным с эпидемиологической обстановкой, к
      инвеступолномоченным или на горячую линию поддержки инвесторов
    </div>
  )
}

function FairDesc () {
  return (
    <div>
      Инвесторы смогут обратиться за консультацией по мерам поддержки,
      связанным с эпидемиологической обстановкой, к инвеступолномоченным от
      муниципальных образований Нижегородской области.
    </div>
  )
}

function FairText () {
  return (
    <div>
      <p>
        Институт инвестиционных уполномоченных был сформирован в регионе
        по поручению губернатора <strong>Глеба Никитина</strong> в 2019 году. Координатором
        работы инвеступолномоченных выступает Корпорация развития
        Нижегородской области.
      </p>

      <p>
        Всего назначены 82 инвестиционных
        уполномоченных от ОМСУ, органов исполнительной власти,
        ресурсоснабжающих и инфраструктурных компаний региона. Большинство
        из них – 52 – представители муниципалитетов в должности не ниже
        заместителя главы администрации. Целью работы уполномоченных является
        организация эффективного содействия в реализации инвестпроектов на
        местах.
      </p>

      <p>
        <strong>Глеб Никитин</strong> подчеркнул, что в текущей ситуации особо важен
        прямой выход инвесторов на инвестиционных уполномоченных <em>(список
        инвеступолномоченных с контактами – в приложении)</em>.
      </p>

      <p>
        «У инвесторов, предпринимателей сейчас много вопросов, и они не
        должны оставаться с ними один на один. Прошу инвестиционных
        уполномоченных и ответственные органы максимально оперативно
        реагировать на запросы», - отметил губернатор.
      </p>

      <p>
        Кроме того, получить консультацию предприниматели могут,
        обратившись на <strong>горячую линию поддержки инвесторов</strong>: 8 (800) 350-12-52.
      </p>

      <p>
        «Специалисты Корпорации развития ответят на вопросы инвесторов и
        дадут все необходимые разъяснения по мерам поддержки, которые были
        приняты в условиях сложившейся эпидемиологической обстановки», -
        подчеркнул генеральный директор Корпорации развития Нижегородской
        области <strong>Тимур Халитов</strong>.
      </p>

      <p>
        Напомним, что в дистанционном режиме продолжает свою работу центр
        «Мой бизнес», открывшийся в рамках нацпроекта «Малое и среднее
        предпринимательство и поддержка индивидуальной предпринимательской
        инициативы». С 18 марта 2020 года на портале мойбизнес52.рф заработала
        отдельная кнопка: «Обращение, связанное с коронавирусом». Нижегородские
        предприниматели также могут сообщить о связанных с коронавирусом
        проблемах, позвонив по телефону горячей линии «Мой бизнес»:
        8−800−301−29−94. Кроме того, в регионе начал действовать дополнительный
        номер телефона: +7 951 911 7002, по которому в viber-чате представители
        бизнеса могут получить оперативную консультацию в условиях риска
        распространения коронавируса.
      </p>
    </div>
  )
}
