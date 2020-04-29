import React from 'react'
import { Route, Link } from 'react-router-dom'

import Sidebar from './Sidebar'

import Toser from './Images/toser.jpg'

import styles from './Sites.module.css'

export default function Sites () {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Нижегородские ТОСЭР расширяют возможности для предпринимателей
      </div>

      <div className={styles.text}>
        <div className={styles.left}>
          <div className={styles.pl}>
            <strong>
              Инженерная инфраструктура Решетихи:
            </strong>

            <ul>
              <li>
                Электроснабжение: 110/35/6 кВ мощностью 2х20 МВА
              </li>

              <li>
                Водоснабжение: 3,2 тыс. м<span>3</span>/сутки
              </li>

              <li>
                Водоотведение: имеется
              </li>

              <li>
                Теплоснабжение: газовая котельная мощностью 39 Гкал/ч
              </li>

              <li>
                Газоснабжение: 4,5 тыс. м<span>3</span>
              </li>
            </ul>
          </div>

          <div className={styles.pl}>
            <strong>
              Инженерная инфраструктура Володарска:
            </strong>

            <ul>
              <li>
                Электроснабжение: 110/35/10 кВ мощностью 2х25 МВА
              </li>

              <li>
                Водоснабжение: два водозабора суммарной мощностью 5 тыс. м<span>3</span>
              </li>

              <li>
                Водоотведение: централизованная канализационная система с биологическими очистными сооружениями проектной мощностью 5 тыс. м<span>3</span>
              </li>

              <li>
                Теплоснабжение: централизованное отопление общей мощностью 20,3 МВт
              </li>

              <li>
                Газоснабжение: газопровод диаметром 219 и 273 мм к ГРС в г. Володарске с давлением 5,5 МПа
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.toser}>
            Отсутствие налогов на землю и имущество, снижение ставки по налогу на прибыль и размера страховых взносов, кредиты на льготных условиях и готовая коммунальная инфраструктура. Такие условия работы ожидают участников территорий опережающего социального экономического развития (ТОСЭР) в Володарске и Решетихе. За последний год резидентами ТОСЭР стали четыре компании. Для привлечения новых инвесторов региональные власти добились расширения перечня отраслей, представители которых могут работать на особых условиях.
          </div>

          <Link to="/toser" className={styles.sites_link}>
            <div className={styles.more}>
              Подробнее о площадках

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 9">
                <path fill="#F9F6F1" d="M11.88 4.416L8.056 0.592L6.776 1.872L7.736 2.832L8.44 3.44L8.424 3.504L7.144 3.44H0.52V5.392H7.144L8.424 5.328L8.44 5.392L7.736 6L6.776 6.96L8.056 8.24L11.88 4.416Z"/>
              </svg>
            </div>
          </Link>
        </div>
      </div>

      <Route
        path='/toser'
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
      Нижегородские ТОСЭР расширяют возможности для предпринимателей
    </div>
  )
}

function ToserDesc () {
  return (
    <div>
      Отсутствие налогов на землю и имущество, снижение ставки по налогу на прибыль и размера страховых взносов, кредиты на льготных условиях и готовая коммунальная инфраструктура. Такие условия работы ожидают резидентов территорий опережающего социального экономического развития (ТОСЭР) в Володарске и Решетихе. За последний год ими стали четыре компании. Для привлечения новых инвесторов региональные власти добились расширения перечня отраслей, представители которых могут работать на особых условиях.
    </div>
  )
}

function ToserText () {
  return (
    <div>
      <h2>
        История вопроса
      </h2>

      <p>
        Традиционная специализация экономики Володарского района, где проживает более 35 тыс. работоспособного населения, – сельское хозяйство. Володарск и Решетиха – моногорода, 30% местных жителей работали на одном градообразующем предприятии. В 2016-2017 годах в районе сложилась непростая ситуация – прекратили работу крупные сельхозкомпании, встал вопрос о трудоустройстве местных жителей. Правительство Нижегородской области увидело выход из ситуации в организации территорий опережающего социально-экономического развития (ТОСЭР) в моногородах. Власти предположили, что это позволит привлечь в район инвесторов, открыть новые производства и создать рабочие места. Кроме того, организация ТОСЭР диверсифицирует экономику моногородов и сделает ее более устойчивой. Для Нижегородской области и для Володарского района новые инвесторы – это порядка тысячи новых рабочих мест и прямой бюджетный эффект. Федеральные власти разделяют позицию региональных. По данным Минэкономразвития РФ, ТОСЭР являются одним из наиболее эффективных инструментов привлечения инвестиций в экономику моногородов. Только за 2019 год в России количество резидентов ТОСЭР в моногородах увеличилось с 281 до 500. Уже 86 моногородов используют этот механизм развития. Благодаря организации ТОСЭР в моногородах России создано порядка 20 тыс. новых рабочих мест, привлечено в экономику почти 43 млрд руб.
      </p>

      <h2>
        Прогрессивный подход
      </h2>

      <p>
        С момента организации ТОСЭР прошел всего год, а их резидентами стали уже четыре компании. В Володарске в июне 2019 года ООО «Корпорация “Руслен-конопля”» начала строить завод по первичной и глубокой переработке льна. Инвестиции в проект составили 83,7 млн руб. На эти деньги компания возводит корпуса, закупает оборудование и запускает производство. Проектная мощность предприятия – более 1 тыс. тонн специально обработанной льняной соломы в год. Для реализации проекта компании выделили участок площадью 22 га: 2,2 га – для организации первичной переработки льна, 19,8 га – для строительства логистического комплекса, где будет храниться сырье и готовая продукция, и производства по глубокой переработке льна.
      </p>

      <p>
        По планам строительство производственной линии по первичной переработке льна займет 22 месяца, и столько же времени уйдет на организацию производства глубокой переработки. В качестве сырья планируется использовать как лен, выращенный «Корпорацией "Руслен-конопля"», так и другими нижегородскими сельхозпроизводителями, говорит исполнительный директор компании Сергей Потехин. Готовую продукцию планируется продавать внутри России и на экспорт: у компании заключены договоры на поставку продукции из льна с предприятиями из Китая и Белоруссии.
      </p>

      <p>
        Еще один проект ТОСЭР «Володарск» – производство минераловатных теплоизоляционных изделий. ООО «Гудшелл» будет выпускать промышленные материалы из принципиально нового высокотехнологичного материала, в основу которого положены базальтовые цилиндры. Продукцию компании можно использовать, в том числе как теплоизоляцию для трубопроводов. Инвестиции в проект составят 120 млн руб. Компания планирует выпускать по 30 тыс. куб. м изоляционных материалов в год.
      </p>

      <p>
        Проект ООО «Торговый Дом “Володарский”» стал первым резидентом ТОСЭР, чья деятельность связана с производством продуктов питания. Компания планирует построить современную сыроварню мощностью 200 т. в год, чтобы заместить импортные поставки твердых и мягких сыров. Объем инвестиций в проект оценивается в 20 млн руб.
      </p>

      <p>
        В ТОСЭР «Решетиха» ООО «Решетихинский инновационный центр» намерено выпускать противоградовые и затеняющие полотна для защиты фруктовых садов и виноградников от обильных осадков и чрезмерного ультрафиолетового облучения. Продукцию планируется поставлять в южные районы России, а также в Узбекистан, Азербайджан, Армению и  Грузию. Объем инвестиций в проект составит 87,5 млн руб. Пока это единственный резидент ТОСЭР, но поиск новых продолжается. В Минэкономразвития РФ направлен пакет документов, чтобы одобрить размещение в ТОСЭР Володарска и Решетихи еще по одному предприятию. Параллельно идет работа по расширению перечня предприятий, которые могут стать участниками ТОСЭР. Профильная комиссия Минэкономразвития РФ поддержала предложение Нижегородской области увеличить список видов экономической деятельности для Володарска и Решетихи. После их утверждения Правительством Российской Федерации резидентами территорий смогут стать производители одежды, красок и лаков, готовых металлических изделий и электрического оборудования. «Расширение видов экономической деятельности — одна из наболевших тем для моногородов. Это возможности по „входу“ в ТОР новых инвесторов, поэтому вопрос так важен. Сегодня одобрены решения о расширении ОКВЭД для 10 ТОР. Ожидаемый эффект — появление свыше 60 новых резидентов, а значит будут созданы новые рабочие места, привлечены дополнительные инвестиции. Это огромные возможности для каждого из моногородов», — говорит генеральный директор Фонда развития моногородов Ирина Макиева.
      </p>

      <h2>
        Льготы, бонусы и преференции
      </h2>

      <p>
        Володарский район географически находится в непосредственной близости от крупнейших индустриальных центров Нижегородской области – Нижнего Новгорода и Дзержинска. Его преимуществом является близость к крупным федеральным транспортным маршрутам: через территорию района проходит федеральная автотрасса М7 – основной транспортный маршрут, связывающий европейскую часть России с Сибирью и Дальним Востоком. Кроме того, по территории района проходит Горьковская железная дорога, два ее широтных направления связывают Москву с Нижним Новгородом, Кировом, Казанью и Екатеринбургом. Наличие таких крупных магистралей повышает транспортную доступность расположенных в ТОСЭР предприятий и открывает перед ними дополнительные логистические возможности.
      </p>

      <div className={styles.site}>
        <div className={styles.site_item}>
          <h3>Земельные участки - без проведения торгов</h3>
        </div>
        <div className={styles.site_item}>
          <h3>Нет налогов на землю и имущество 10 лет</h3>
        </div>
      </div>

      <p>
        Региональные власти предлагают резидентам ТОСЭР благоприятные условия и максимальную поддержку на всех этапах. Компании-резиденты получают доступ к готовой инженерно-коммунальной инфраструктуре. Так, Володарский район обладает развитой сетью газопроводов высокого и среднего давления и свободными мощностями промышленного электроснабжения. Развитая сеть пассажирских перевозок дает дополнительные возможности для обеспечения предприятий кадрами. Кроме того, в районе создана развитая социальная инфраструктура, включающая в себя школы и дошкольные учреждения, больницы, спортивные комплексы и стадионы.
      </p>

      <div className={styles.tax}>
        <div className={styles.tax_title}>
          <h3>Ставка по налогу на прибыль:</h3>
        </div>

        <div className={styles.tax_items}>
          <div className={styles.tax_item}>
            <div className={styles.nums}>
              5<span>%</span>
              <div className={styles.description}>первые пять лет</div>
            </div>
          </div>

          <div className={styles.tax_item}>
            <div className={styles.nums}>
              13<span>%</span>
              <div className={styles.description}>следующие пять лет</div>
            </div>
          </div>
        </div>
      </div>

      <p>
        Для резидентов ТОСЭР региональные власти сформировали базу площадей, пригодных для размещения новых производств различной направленности. Так, в ТОСЭР «Володарск» ждут инвесторов 15 земельных участков общей площадью 558 га. В ТОСЭР «Решетиха» инвесторы смогут разместить свои производства на 22,5 га имущественного комплекса АО «Сетка» (земельные участки и производственные помещения), а также на земельном участке 1,8 га по улице Новая.
      </p>

      <div className={styles.insurance}>
        <div className={styles.insurance_title}>
          <div className={styles.nums}>
            7,6<span>%</span>
          </div>

          <h3>Размеры страховых взносов</h3>
        </div>

        <div className={styles.insurance_container}>
          <div className={styles.nums}>
            6<span>%</span>
            <div className={styles.description}>пенсионное страхование</div>
          </div>

          <div className={styles.nums}>
            1,5<span>%</span>
            <div className={styles.description}>социальное страхование</div>
          </div>

          <div className={styles.nums}>
            0,1<span>%</span>
            <div className={styles.description}>медицинское страхование</div>
          </div>
        </div>
      </div>

      <p>
        Резиденты получают доступ к широкому спектру специальных программ по финансированию и субсидированию инвестиционных проектов. Средства предоставляют федеральные Фонд развития моногородов, Фонд развития промышленности, «МСП Банк» и областной Фонд развития промышленности и венчурных инвестиций. Кроме того, административные процедуры по получению земельных участков и присоединению к сетям максимально упрощены, и для резидентов ТОСЭР действует особый налоговый режим.
      </p>
    </div>
  )
}
