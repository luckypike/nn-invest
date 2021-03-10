import React from 'react'
import { Route, Link } from 'react-router-dom'

import Sidebar from './Sidebar'

import Toser from './Images/toser_2.JPG'

import styles from './Sites.module.css'

export default function Sites () {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Зона предпринимательского роста
      </div>

      <div className={styles.toser_container}>
        <div className={styles.toser}>
          В этом году исполнилось 15 лет российским особым экономическим зонам (ОЭЗ). В 2005 году
          был подписан закон, который позволил наделять отдельные территории в регионах статусом
          ОЭЗ, а предприятиям и компаниям, которые размещают там производства, предоставлять
          налоговые льготы, освобождать от ряда обязательных платежей и пошлин. В Нижегородской
          области первая особая экономическая зона промышленно-производственного типа «Кулибин»
          появилась в мае 2020 года. 15-летний опыт создания и развития российских ОЭЗ позволяет
          делать благоприятный прогноз развития этой территории.
        </div>

        <Link to="/toser/2" className={styles.sites_link}>
          <div className={styles.more}>
            Подробнее о ОЭЗ

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 9">
              <path fill="#F9F6F1" d="M11.88 4.416L8.056 0.592L6.776 1.872L7.736 2.832L8.44 3.44L8.424 3.504L7.144 3.44H0.52V5.392H7.144L8.424 5.328L8.44 5.392L7.736 6L6.776 6.96L8.056 8.24L11.88 4.416Z"/>
            </svg>
          </div>
        </Link>
      </div>

      <Route
        path='/toser/2'
        render={(props) =>
          <Sidebar
            {...props}
            image={Toser}
            title={<ToserTitle />}
            desc={<ToserDesc />}
            text={<ToserText />}
          />
        }
      />
    </div>
  )
}

function ToserTitle () {
  return (
    <div>
      Зона предпринимательского роста
    </div>
  )
}

function ToserDesc () {
  return (
    <div>
      В этом году исполнилось 15 лет российским особым экономическим зонам (ОЭЗ). В 2005 году
      был подписан закон, который позволил наделять отдельные территории в регионах статусом
      ОЭЗ, а предприятиям и компаниям, которые размещают там производства, предоставлять
      налоговые льготы, освобождать от ряда обязательных платежей и пошлин. В Нижегородской
      области первая особая экономическая зона промышленно-производственного типа «Кулибин»
      появилась в мае 2020 года. 15-летний опыт создания и развития российских ОЭЗ позволяет
      делать благоприятный прогноз развития этой территории.
    </div>
  )
}

function ToserText () {
  return (
    <div>
      <h2>
        Как работают ОЭЗ в России
      </h2>

      <p>
        За 15 лет с момента издания закона «Об особых экономических зонах в Российской Федерации»
        в стране было создано 33 ОЭЗ. По данным Минэкономразвития РФ, сейчас в них работают 817
        компаний (70% из них – предприятия малого и среднего бизнеса), включая 144 резидента с
        участием иностранного капитала. За это время на предприятиях, работающих в ОЭЗ, было
        создано 40 тыс. рабочих мест.
      </p>

      <p>
        Инвестиции в создание новых компаний и производств на территории особых экономических зон
        суммарно превысили 1 трлн руб. Резиденты заработали более 967 млрд руб. и заплатили в
        бюджеты всех уровней 52,8 млрд руб. налогов. Кроме того, компании, зарегистрированные в
        ОЭЗ, перечислили 56 млрд руб. таможенных платежей и 26,35 млрд руб. страховых взносов.
      </p>

      <p>
        Несмотря на непростую экономическую ситуацию, которая в 2020 году сформировалась из-за
        пандемии коронавируса и введенных в связи с ней ограничений, в российских ОЭЗ не перестала
        действовать ни одна компания. Напротив, с начала года в ОЭЗ зарегистрировались
        три новых резидента, которые готовы инвестировать в свой бизнес более 35 млрд руб.
      </p>

      <p>
        В мае 2020 года первая особая экономическая зона «Кулибин» появилась в Нижегородской
        области на базе производственных мощностей АО «ДПО “Пластик”». Управляющей компанией
        назначено акционерное общество «Корпорация развития Нижегородской области».
      </p>

      <h2>
        Что такое ОЭЗ «Кулибин»
      </h2>

      <h3>
        Как найти
      </h3>

      <p>
        Особая экономическая зона промышленно-производственного типа «Кулибин» находится в
        городском округе Дзержинск Нижегородской области на производственной площадке АО
        «ДПО “Пластик”» (Игумновское шоссе, 15).
      </p>

      <p>
        В 2 км от ОЭЗ проходит федеральная трасса М-7, соединяющая Москву с Уралом. В 500 м
        располагается Дзержинский таможенный пост, в 4 км – железнодорожная станция «Игумново»,
        в 17 км – грузовой двор «Доскино» Горьковской железной дороги (филиал ОАО РЖД). До
        речного порта Дзержинска – 11 км.
      </p>

      <p>
        В 25 км находится аэропорт Стригино, полет из которого до Москвы занимает 50 минут, до
        Санкт-Петебурга – 1 час 40 минут. В 13 км расположен железнодорожный вокзал Дзержинска,
        в 25 км – железнодорожный вокзал Нижнего Новгорода. Скоростными железнодорожными поездами
        до Москвы можно добраться за 3 часа 35 минут, до Санкт-Петербурга за 8 часов 12 минут.
      </p>

      <p>
        Расположение ОЭЗ дает безграничные возможности для доставки продукции водным,
        автомобильным, железнодорожным и воздушным транспортом. Прямые рейсы за границу из
        аэропорта Стригино и удобные стыковки в Москве делают площадку доступной для
        специалистов и консультантов международного уровня, а также для зарубежных инвесторов.
      </p>

      <p>
        В радиусе 500 км численность населения составляет 43 млн человек (более 30% населения
          России), что превышает даже показатели Москвы и Санкт-Петербурга. До центра Нижнего
          Новгорода, где проживает 1,3 млн человек, от ОЭЗ «Кулибин» всего 40 км, до центра
          Дзержинска с населением 240 тыс. – 7,5 км. Расположение рядом с крупными промышленными
          предприятиями Дзержинска и Нижнего Новгорода, а также близость к Москве (400 км)
          открывают широкие рынки сбыта продукции.
      </p>

      <h3>
        Что предлагают инвестору
      </h3>

      <p>
        Общая площадь особой экономической зоны «Кулибин» – 72,3 га с перспективой расширения
        на 450 га дополнительно. Потенциальным инвесторам по желанию предоставляют зеленые и
        коричневые площадки. Территория полностью обеспечена инженерной инфраструктурой: для
        резидентов ОЭЗ существует возможность подключения к электроподстанциям, суммарная
        свободная мощность которых составляет 14 МВт, сетям водоснабжения, водоотведения
        и теплоснабжения.
      </p>

      <p>
        На территории ОЭЗ «Кулибин» планируется построить «Технопарк H2О». Цель проекта –
        привлечение стартапов в разработку инновационных, технико-внедренческих решений на стыке
        химии, экологии и IT-отрасли. Технопарк будет содержать все необходимое лабораторное
        оборудование для создания новых видов продукции. Площадь здания будущего технопарка
        составит более 9 тыс. кв. м. В нем будут расположены лабораторный комплекс химической и
        экологической направленностей, офисные помещения, капсульный отель, конференц-залы и
        коворкинг. Помещения могут сдаваться резидентам технопарка в аренду. Резидентам
        лабораторного технопарка могут быть предоставлены те же льготы, что и резидентам ОЭЗ ППТ
        «Кулибин».
      </p>

      <h3>Почему стоит выбрать ОЭЗ</h3>

      <p>
        С момента включения инвестора в список резидентов ОЭЗ он может претендовать на
        налоговые льготы. Для этого ему необходимо предоставить выписку из реестра резидентов в
        Федеральную налоговую службу, остальные процедуры ФНС проведет самостоятельно.
      </p>

      <p>
        В течение 49 лет для резидентов действует льготная ставка по налогу на прибыль (для
        региональной и федеральной составляющей):

        <ul>
          <li><strong>2%</strong> в первые пять лет (вместо 20%);</li>
          <li><strong>5%</strong> в следующие пять лет (с 6 по 10 год);</li>
          <li><strong>14,5%</strong> далее (с 11 по 49 год).</li>
        </ul>
      </p>

      <p>
        Кроме того, на территории ОЭЗ <strong>установлена ставка 0%</strong>:

        <ul>
          <li><strong>по налогу на имущество</strong> в первые 10 лет с месяца, следующего за
          месяцем постановки на учет указанного имущества (вместо 2,2%);</li>
          <li><strong>по налогу на землю</strong> в первые 5 лет с момента получения права
          собственности за земельный участок (вместо 1,5%, установленных для Дзержинска);</li>
          <li><strong>по транспортному налогу</strong> в первые 10 лет с месяца признания
          резидентом.</li>
        </ul>
      </p>

      <h3>Трудовые резервы</h3>

      <p>
        Найти специалистов разного профиля для будущих резидентов ОЭЗ не составит труда. Нижний
        Новгород славится своими вузами, особенно технического профиля. Нижегородский
        государственный технический университет им. Р. Е. Алексеева и Нижегородский государственный
        университет им. Н. И. Лобачевского, филиалы и институты которых расположены в Дзержинске,
        десятки лет готовят кадры для предприятий Нижегородской области, в том числе они ведут
        целевой набор студентов непосредственно под производство по договору с компаниями.
      </p>

      <p>
        В Нижнем Новгороде находится более 30 учреждений, которые дают среднее специальное
        образование (ссуз). В Дзержинске расположены два ссуза – Дзержинский химический техникум
        им. Красной Армии и Дзержинский технический колледж.
      </p>

      <p>
        Дзержинским политехническим институтом на химических предприятиях города АО
        ГосНИИ «Кристалл» и АО НИПОМ созданы кафедры, которые позволяют использовать в учебном
        процессе материальную базу предприятий и привлекать специалистов предприятий в качестве
        преподавателей.
      </p>

      <p>
        Кроме того, подготовкой 13 тыс. специалистов в год для промышленных предприятий занимаются
        32 ресурсных центра, созданных правительством региона. Один из них расположен в
        Дзержинском химическом техникуме им. Красной Армии и функционирует совместно с ФКП
        «Завод им. Я. М. Свердлова». Центр готовит специалистов-технологов для производства
        пиротехнических составов и органических веществ.
      </p>

      <h3>Как стать резидентом ОЭЗ</h3>

      <p>
        Чтобы стать резидентом ОЭЗ «Кулибин», для начала нужно выбрать площадку под будущее
        производство. Для этого инвестор может обратиться в АО «Корпорация развития Нижегородской
        области», которая предоставит варианты размещения, полностью соответствующие его запросам,
        и проведет переговоры с собственником участка.
      </p>

      <p>
        Коммерческая организация (или ИП), претендующая на получение статуса резидента ОЭЗ, должна
        быть зарегистрирована в Дзержинске. На территории ОЭЗ «Кулибин» предприниматели могут
        вести логистическую или промышленно-производственную деятельность, а также
        технико-внедренческую работу.
      </p>

      <p>
        Процедура получения статуса резидента также включает в себя подачу документов в
        министерство экономического развития и инвестиций Нижегородской области.
      </p>

      <p>
        В пакет документов входят:

        <ul>
          <li>заявка на заключение соглашения;</li>
          <li>бизнес-план;</li>
          <li>копии учредительных документов;</li>
          <li>свидетельства о регистрации юридического лица;</li>
          <li>свидетельства о постановке на учет в налоговом органе;</li>
        </ul>
      </p>

      <p>
        Чтобы стать резидентом, предпринимателю необходимо защитить бизнес-план перед экспертным
        советом ОЭЗ, а потом подписать соглашение с областным правительством и Корпорацией развития.
      </p>

      <p>
        Минимальный объем инвестиций в проект на территории ОЭЗ «Кулибин» составляет 120 млн руб.
        В первые три года реализации проекта в него должно быть вложено не менее 40 млн руб.
      </p>

      <p>
        Филиалы и представительства резидента можно открывать только на территории ОЭЗ. При этом
        компании, которые не являются резидентами особой экономической зоны, могут работать в ней.
        На территории ОЭЗ нельзя производить подакцизные товары (за исключением легковых
        автомобилей и мотоциклов) и добывать полезные ископаемые.
      </p>

      <h3>Перспективные резиденты ОЭЗ</h3>

      <p>
        На первом экспертном совете ОЭЗ «Кулибин», который состоится в IV квартале 2020 года,
        будут рассмотрены три заявки на получение статуса резидента.
      </p>

      <p>
        ООО «РТ – Композитные газовые баллоны» представит на совет проект по разработке
        высокопроизводительной технологии и организации автоматизированного производства
        полимерно-композитных газовых баллонов, в том числе для автомобильного транспорта и
        газозаправочных комплексов. Компания планирует вложить в производство 1,252 млрд руб. По
        результатам его реализации будет создано 179 рабочих мест.
      </p>

      <p>
        ООО «Хома Адгезив» претендует на получение статуса резидента с проектом по созданию
        производства водных клеев на основе сополимер-акриловых, поливинилацетатных и
        полиуретановых дисперсий. Общий объем инвестиций в проект составит 318 млн руб. Новое
        производство позволит создать в регионе 161 рабочее место.
      </p>

      <p>
        ООО «Пластматика» подала заявку на получение статуса резидента с проектом по созданию
        крупногабаритного литьевого производства изделий из пластмасс. Заявленный компанией объем
        инвестиций составляет 614 млн руб. На предприятии будет создано 144 новых рабочих мест.
      </p>
    </div>
  )
}