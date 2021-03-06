import React, { useContext } from 'react'
import { Route, Link } from 'react-router-dom'
import { Context } from '../Context'

import Photo from './Images/Plastic.jpg'

import Sidebar from './Sidebar'

import styles from './InterviewSec.module.css'

export default function Interview4 () {
  const { setOverlay } = useContext(Context)

  return (
    <Link to="/interview/4" onClick={() => setOverlay(true)}>
      <div className={styles.photo}>
        <div className={styles.image} style={{ backgroundImage: `url(${Photo})` }} />
      </div>

      <div className={styles.with}>
        Интервью с компанией «Пластик»
      </div>

      <Route
        path='/interview/4'
        render={(props) =>
          <Sidebar
            {...props}
            image={Photo}
            title={<InterviewTitle />}
            desc={<InterviewDesc />}
            text={<InterviewText />}
          />
        }
      />
    </Link>
  )
}

function InterviewTitle () {
  return (
    <div>
      «Сейчас самое лучшее время для развития»
    </div>
  )
}

function InterviewDesc () {
  return (
    <div>
      Генеральный директор «ДПО “Пластик”» Юрий Караваев рассказывает о том, почему важно
      диверсифицировать бизнес и почему сейчас лучше всего инвестировать в запуск новых производств.
    </div>
  )
}

function InterviewText () {
  return (
    <div>
      <p className={styles.q}>
        Сейчас «ДПО “Пластик”» производит полимерную упаковочную пленку, полиэтиленовые викет-пакеты,
        упаковочную сетку, пластмассовые тары, полимерные профили и трубы, тальконаполненный
        полипропилен и изделия из стеклопластика. Можно ли выделить основное для предприятия
        производство по объему выпуска продукции или выручке от продаж?
      </p>

      <p>
        Основное производство у «ДПО “Пластик”» выделить нельзя. «Пластик» – уникальное предприятие с
        диверсифицированным производством. И если снижаются объемы выпуска продукции в одной
        отрасли по каким-либо рыночным причинам, то другие позволяют поддерживать стабильную
        работу предприятия. Например, в этом году так произошло с автопромом, у которого снизились
        объемы производства в период пандемии, выпуск гибкой и жесткой упаковки сбалансировал
        работу завода в этот момент. Такая диверсификация на «Пластике» была всегда, и мы ее
        поддерживаем, чтобы проходить непростые времена безболезненно.
      </p>

      <p className={styles.q}>
        Скажется ли пандемия коронавируса на производственных показателях и финансовых результатах
        предприятия в 2020 году?
      </p>

      <p>
        Прогнозы на 2020 год давать сложно, потому что, во-первых, у нас реализовывается несколько
        инвестиционных проектов, а во-вторых, потому что ГАЗ останавливал производство. Кроме того,
        на полтора месяца уменьшался объем заказов со стороны железной дороги, для которой мы
        производим запасные части. Кроме того, мы работаем как завод-смежник, выпуская продукцию
        для предприятий оборонно-промышленного комплекса в рамках государственного оборонного
        заказа, а как известно, программа перевооружения российской армии сворачивается, что
        также отражается на деятельности «Пластика»
      </p>

      <p className={styles.q}>
        В прошлом году «ДПО “Пластик”» запустило производство композитных труб. Какой сортамент
        труб выпускает предприятие сейчас, планируете ли вы его расширять?
      </p>

      <p>
        Сейчас завод выпускает высоконагруженные стеклопластиковые трубы, которые используются для
        замены действующих линий трубопроводов и прокладки новых, в том числе стальных водоводов
        высокого давления и теплотрасс. Эти трубы также применяются нефте- и газоперерабатывающими
        предприятиями. Основные преимущества нашей продукции – прочность, долговечность и легкий
        вес. И мы продолжаем разработки для расширения ассортимента трубной продукции, новую
        отправляем на испытания к потенциальным потребителям. Процесс согласования длительный:
        необходимо пройти государственную сертификацию и сертификацию у каждой компании. В рамках
        этого производства мы также ведем научно-исследовательские и опытно-конструкторские работы
        (НИОКР), чтобы наладить выпуск конических стеклопластиковых конструкций с большой
        прочностью. Их можно будет использовать как опоры для установки освещения, дорожных знаков,
        рекламных щитов, для системы видеонаблюдения и для оборудования сотовой связи, заменив
        металлические опоры.
      </p>

      <p className={styles.q}>
        Компания планировала создать композитный кластер. Что будет в него входить? Планируете ли
        вы развивать кластер только собственными силами или будете привлекать в него других
        производителей?
      </p>

      <p>
        В композитный кластер войдут предприятия, которые относятся к «ДПО “Пластик”» и существуют
        уже более 30 лет. В него также войдет новое производство высоконагруженных труб и
        композитных баллонов. Если появятся сторонние компании, ориентированные на выпуск
        продукции из композитных материалов, мы рассмотрим их предложения. В рамках кластера
        будет создан технопарк, который займется проведением НИОКР, поэтому на площадке
        открываются широкие перспективы для запуска новых производств. Я думаю, что от участия
        других производителей мы получим синергетический эффект, потому что на данный момент
        в России производится очень мало композитных изделий по сравнению с остальным миром и
        есть большой потенциал для развития этого рынка, на котором места хватит всем.
      </p>

      <p className={styles.q}>
        Недавно на базе «ДПО “Пластик”» была сформирована особая экономическая зона (ОЭЗ),
        получившая название «Кулибин». На какие преференции вы рассчитываете? Позволит ли
        получение статуса ОЭЗ реализовывать новые инвестиционные проекты?
      </p>

      <p>
        Действующие производства «ДПО “Пластик”» преференций не получат, они предполагаются для
        новых инвестиционных проектов. В рамках запуска производства полимерно-композитных газовых
        баллонов, а в перспективе начала производства пластиковых контейнеров больших объемов для
        утилизации твердых бытовых отходов мы подали заявки на участие в особой экономической зоне.
        Сейчас для новых проектов разработаны две финансово-экономические модели, одна из которых
        учитывает, что предприятие получит налоговые льготы как резидент «Кулибина», а вторая – что
        нам могут отказать. Отбор проектов для участия в ОЭЗ жесткий, мы должны четко
        соответствовать заданным критериям отбора, что проверяет специальная комиссия, но мы
        надеемся, что будем признаны резидентами ОЭЗ.
      </p>

      <p>
        Для ОЭЗ «Кулибин» определены профильные направления деятельности – химия, фармацевтика,
        переработка, но я знаю, что есть предприятия других отраслей, которые хотят войти.
        Полагаю, что корпорация развития будет рассматривать возможность расширить перечень
        основных направлений производства ОЭЗ, чтобы дать шанс другим предприятиям создать
        новые производства.
      </p>

      <p className={styles.q}>
        У вас большие инвестиционные планы, почему вы не корректируете их в связи с непростой
        экономической обстановкой?
      </p>

      <p>
        У нас большие планы по развитию, и я считаю, что с учетом инвестиционной политики,
        которую ведет руководство региона, сейчас самое лучшее время для вложений в запуск
        новых производств. Нас поддерживают правительство области, администрация Дзержинска,
        поэтому грех не воспользоваться этим. И непростая экономическая ситуация, напротив,
        заставляет шевелиться. Поэтому, на мой взгляд, сейчас самое лучшее время для развития.
      </p>
    </div>
  )
}
