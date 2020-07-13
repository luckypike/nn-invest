import React, { useContext } from 'react'
import { Route, Link } from 'react-router-dom'

import { Context } from '../Context'
import Sidebar from './Sidebar'

import styles from './News.module.css'

export default function News () {
  const { setOverlay } = useContext(Context)

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        События
      </div>

      <div className={styles.news}>
        <Link to='/news/7' className={styles.news_item} onClick={() => setOverlay(true)}>
          <div className={styles.date}>
            9 июля 2020 г.
          </div>

          <div className={styles.text}>
            Глеб Никитин: «Вхождение Нижегородской области в топ-20 инвестиционного рейтинга — успех всего региона»
          </div>
        </Link>

        <Link to='/news/8' className={styles.news_item} onClick={() => setOverlay(true)}>
          <div className={styles.date}>
            8 июля 2020 г.
          </div>

          <div className={styles.text}>
            Совет по земельным отношениям наделил проект по строительству научно-исследовательского лабораторного комплекса соцстатусом
          </div>
        </Link>

        <Link to='/news/6' className={styles.news_item} onClick={() => setOverlay(true)}>
          <div className={styles.date}>
            24 июня 2020 г.
          </div>

          <div className={styles.text}>
            Группа компаний «Рост» вложит в реализацию проекта «Тепличный комбинат «Нижегородский» 5,1 млрд рублей
          </div>
        </Link>

        <Link to='/news/5' className={styles.news_item} onClick={() => setOverlay(true)}>
          <div className={styles.date}>
            25 мая 2020 г.
          </div>

          <div className={styles.text}>
            «Особая экономическая зона «Кулибин» создана в Нижегородской области», - Глеб Никитин
          </div>
        </Link>

        <Link to='/news/4' className={styles.news_item} onClick={() => setOverlay(true)}>
          <div className={styles.date}>
            10 мая 2020 г.
          </div>

          <div className={styles.text}>
            Корпорация развития сопровождает инвестпроект по строительству завода металлоизделий
          </div>
        </Link>

        <Link to='/news/3' className={styles.news_item} onClick={() => setOverlay(true)}>
          <div className={styles.date}>
            6 мая 2020 г.
          </div>

          <div className={styles.text}>
            «Несмотря на сложную экономическую ситуацию, инвесторы заинтересованы в реализации своих проектов в регионе», - Тимур Халитов
          </div>
        </Link>

        <Link to='/news/1' className={styles.news_item} onClick={() => setOverlay(true)}>
          <div className={styles.date}>
            10 апреля 2020 г.
          </div>

          <div className={styles.text}>
            Больше 7000 обращений бизнесменов поступило инвеступолномоченным за прошедшую неделю
          </div>
        </Link>

        <Link to='/news/2' className={styles.news_item} onClick={() => setOverlay(true)}>
          <div className={styles.date}>
            31 марта 2020 г.
          </div>

          <div className={styles.text}>
            Бизнес может обратиться за консультацией по мерам поддержки в связи с COVID-19 к инвеступолномоченным
          </div>
        </Link>
      </div>

      <Route
        path='/news/1'
        render={(props) =>
          <Sidebar
            {...props}
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
            title={<FairTitle />}
            desc={<FairDesc />}
            text={<FairText />}
          />
        }
      />

      <Route
        path='/news/3'
        render={(props) =>
          <Sidebar
            {...props}
            title={<CrisisTitle />}
            desc={<CrisisDesc />}
            text={<CrisisText />}
          />
        }
      />

      <Route
        path='/news/4'
        render={(props) =>
          <Sidebar
            {...props}
            title={<ForgingTitle />}
            text={<ForgingText />}
          />
        }
      />

      <Route
        path='/news/5'
        render={(props) =>
          <Sidebar
            {...props}
            title={<ZoneTitle />}
            text={<ZoneText />}
          />
        }
      />

      <Route
        path='/news/6'
        render={(props) =>
          <Sidebar
            {...props}
            title={<GrowthTitle />}
            text={<GrowthText />}
          />
        }
      />

      <Route
        path='/news/7'
        render={(props) =>
          <Sidebar
            {...props}
            title={<TopTitle />}
            text={<TopText />}
          />
        }
      />
    </div>
  )
}

function ZoneTitle () {
  return (
    <div>
      «Особая экономическая зона «Кулибин» создана в Нижегородской области», - Глеб Никитин
    </div>
  )
}

function ZoneText () {
  return (
    <div>
      <p>
        Особая экономическая зона (ОЭЗ) промышленно-производственного
        типа «Кулибин» в Дзержинске Нижегородской области одобрена
        правительством Российской Федерации. Постановление о ее создании
        подписал председатель Правительства Российской Федерации <strong>Михаил
        Мишустин</strong>. Об этом сообщил глава региона <strong>Глеб Никитин</strong>.
      </p>

      <p>
        Общая площадь ОЭЗ в Дзержинске, на территории промышленного
        предприятия АО «ДПО «Пластик»,превысит 72 га. Площадка имеет всю
        необходимую инфраструктуру, резерв энергетических мощностей, а также
        потенциал для увеличения территории особой экономической зоны еще на
        400 гектаров.
      </p>

      <p>
        «Это первая ОЭЗ в регионе. Теперь в области есть все основные
        российские особые экономические режимы, и мы можем на равных
        конкурировать с другими субъектами федерации за инвестиции. Создание
        ОЭЗ в Нижегородской конкурентоспособные условия ведения бизнеса по сравнению с регионами
        без нее. Так, преференциальные условия ОЭЗ «Кулибин» снизят для
        резидентов налоговые ставки на прибыль с 20% до 2% в первые 5 лет, до 5%
        - в следующие 5 лет и до 14,5% - в последующем, а также установят нулевые
        ставки по налогам на имущество, землю и транспортный налог.Заявка на
        создание особой экономической зоны была подготовлена Корпорацией
        развития региона, которая выступит ее управляющей компанией»,
        подчеркнул <strong>Глеб Никитин</strong>.
      </p>

      <p>
        Одним из приоритетных направлений деятельности станут химия и
        фармация. Именно поэтому территорией размещения ОЭЗ «Кулибин»
        выбран г.о.г.Дзержинск – один из крупнейших центров химической
        промышленности России.
      </p>

      <p>
        «У предприятий и научных организаций Дзержинска большой
        потенциал. Создание особой экономической зоны и развитие дзержинских
        индустриальных парков поможет его реализовать. Мы рассчитываем, что в
        ОЭЗ «Кулибин» появится не менее 15 новых производств, а это сотни
        дополнительных рабочих мест. Создание ОЭЗ также позволит расширить уже
        работающие в Дзержинске инновационные производства. Например,
        большие перспективы у технологий для рынка газомоторного топлива,
        созданных дзержинскими учеными дисперсий для строительной отрасли и
        других продуктов», - отметил первый заместитель губернатора
        Нижегородской области <strong>Евгений Люлин</strong>.
      </p>

      <p>
        «В Корпорацию уже поступают заявки от инвесторов, желающих
        открыть предприятие на территории ОЭЗ. Также на сегодняшний день у нас
        есть договоренности с тремя потенциальными инвесторами на сумму более 6
        млрд рублей. После проведения всех необходимых юридических процедур с
        ними будут заключены соглашения о сотрудничестве при реализации
        инвестиционного проекта на территории ОЭЗ», - отметил генеральный
        директор Корпорации развития Нижегородской области <strong>Тимур Халитов</strong>.
      </p>

      <p>
        Создание ОЭЗ в Нижегородской области будет способствовать
        реализации задач, поставленных президентом России <strong>Владимиром Путиным </strong>
        в рамках национальных проектов. В первую очередь это касается
        производства импортозамещающих и экспортно-ориентированных товаров,
        повышения производительности труда.
      </p>

      <p>
        Напомним, что для создания комфортных условий работы инвесторов по
        поручению <strong>Глеба Никитина</strong> в Нижегородской области созданы Корпорация
        развития, ТОСЭРы в Володарске и Решетихе, сформирован институт
        инвестиционных уполномоченных.
      </p>
    </div>
  )
}

function ForgingTitle () {
  return (
    <div>
      Корпорация развития сопровождает инвестпроект по строительству завода металлоизделий
    </div>
  )
}

function ForgingText () {
  return (
    <div>
      <p>
        Компания ООО «Первая ковка» планирует разместить на территории
        Нижегородской области завод по производству металлоизделий.
        Инвестиционный проект сопровождает Корпорация развития Нижегородской
        области.
      </p>

      <p>
        По словам генерального директора компании Елены Преображенской,
        завод будет специализироваться на производстве различных архитектурных
        элементов декора (балясин, перил, поручней, подставок, флюгеров и др.).
        Изготовление продукции будет осуществляться методом холодной обработки
        на станках итальянского производства.
      </p>

      <p>
        Планируемый объем выпуска составляет 1000 тонн металлоизделий в
        год. При полной загрузке проектируемое предприятие сможет выпускать
        примерно вдвое больший объем продукции.
      </p>

      <p>
        «Поставщиками сырья будут крупнооптовые коммерческие и торговые
        фирмы из России, Италии, стран ЕАЭС и Европейского Союза, а реализация
        готовой продукции будет проводиться на территории России и стран ЕАЭС,
        поэтому данный проект – один из ярких примеров, отвечающих направлениям
        нацпроекта «Международная кооперация и экспорт», – подчеркнул
        генеральный директор Корпорации развития Нижегородской области Тимур
        Халитов.
      </p>

      <p>
        Объем инвестиций в проект составит 50 млн рублей. К моменту ввода
        предприятия в эксплуатацию планируется создать 10 новых рабочих мест.
      </p>

      <p>
        Производство будет расположено в Нижнем Новгороде на ул.
        Коновалова. Компания планирует приступить к строительству во втором
        полугодии текущего года и завершить его в начале 2021 года.
      </p>
    </div>
  )
}

function CrisisTitle () {
  return (
    <div>
      «Несмотря на сложную экономическую ситуацию, инвесторы заинтересованы в реализации своих проектов в регионе», - Тимур Халитов
    </div>
  )
}

function CrisisDesc () {
  return (
    <div>
      Корпорация развития Нижегородской области на данный момент сопровождает 67 инвестпроектов. Об этом сообщил генеральный директор Корпорации Тимур Халитов.
    </div>
  )
}

function CrisisText () {
  return (
    <div>
      <p>
        Руководитель спецорганизации по привлечению инвестиций отметил, что, несмотря на сложную экономическую ситуацию, инвесторы заинтересованы в реализации своих проектов в регионе и не намерены от них отказываться. Те, кто уже подобрал земельный участок, оформляют необходимую разрешительную документацию, приступили к стадии проектирования или строительству.
      </p>

      <p>
        «Мы в постоянном контакте с инвесторами, это особенно важно в текущей ситуации. Безусловно, многие почувствовали на себе изменения, связанные с пандемией. У части предпринимателей в связи с эпидемией сроки реализации могут сдвинуться.  Сейчас сложно сказать на какой период, поскольку проблема не миновала. Но у инвесторов нет намерений затягивать реализацию. У тех, кто уже проанализировал текущее состояние дел, отсрочка не превышает 6 месяцев. Со своей стороны мы приложим все усилия и поможем инвесторам сократить сроки реализации проектов, решить возникшие проблемы, включая те, которые повлекла эпидемия коронавирусной инфекции», - подчеркнул <strong>Тимур Халитов</strong>.
      </p>

      <p>
        Генеральный директор Корпорации развития также отметил, что несмотря на сложную обстановку в стране и мире, в Корпорацию поступают запросы и от новых инвесторов, у которых реализация еще на стадии намерений. При этом для всех стараются подобрать максимально комфортные условия, чтобы бизнес любого уровня мог адаптироваться в новых реалиях.
      </p>

      <p>
        На сегодняшний день Корпорацией развития Нижегородской области ведётся работа по 67 инвестиционным проектам на сумму порядка 150 млрд рублей. Эти проекты предполагают создание более 7,5 тысяч новых рабочих мест.
      </p>

      <p>
        Напомним, инвесторы могут обратиться за консультацией к инвеступолномоченным, а также на горячую линию поддержки: 8 (800) 350-12-52.
      </p>
    </div>
  )
}

function StairsTitle () {
  return (
    <div>
      Больше 7000 обращений бизнесменов поступило инвеступолномоченным за прошедшую неделю
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
      Бизнес может обратиться за консультацией по мерам поддержки в связи с COVID-19 к инвеступолномоченным
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
        номер телефона: +7 951 911 7002, по которому в viber-чате представители
        бизнеса могут получить оперативную консультацию в условиях риска
        распространения коронавируса.
      </p>
    </div>
  )
}

function GrowthTitle () {
  return (
    <div>
      «Группа компаний «Рост» вложит в реализацию проекта «Тепличный комбинат «Нижегородский» 5,1 млрд рублей
    </div>
  )
}

function GrowthText () {
  return (
    <div>
      <p>
        Увеличить производство овощей закрытого грунта почти в два раза позволит строительство инновационного «Тепличного комбината «Нижегородский» в городе Бор. Объем инвестиций группы компаний «РОСТ» в проект – 5,1 млрд рублей. Реализация этого проекта позволит создать 250 новых рабочих мест.
      </p>

      <p>
        Строительство крупнейшего в регионе тепличного комплекса в г. Бор планируют завершить в конце этого года. Инвестиционный проект сопровождает Корпорация развития.
      </p>

      <p>
        Общая площадь «Тепличного комбината «Нижегородский» составит 17,3 га. В теплицах будет использоваться современная технология досветки и автоматизированный контроль микроклимата и роста растений, что обеспечит среднегодовую урожайность на уровне 70 кг/м2 для томатов и 140 кг/м2 для огурцов. Предполагаемый валовый сбор конечной продукции при выходе на полную мощность составит 14,1 тыс. тонн огурцов и 3,5 тыс. тонн томатов в год.
      </p>

      <p>
        «Мы обсудили с руководством предприятия перспективы расширения проекта. Инвестор рассмотрит возможность строительства еще одного крупного тепличного комплекса», - подчеркнул первый заместитель губернатора Нижегородской области Евгений Люлин.
      </p>

      <p>
        «Мы оказываем компании содействие в оформлении различной документации, чтобы ускорить строительство. Кроме того, инвестор подал заявку на присвоение проекту статуса приоритетного инвестиционного, что позволит получить ряд льгот», - сообщил генеральный директор Корпорации Тимур Халитов.
      </p>
    </div>
  )
}

function TopTitle () {
  return (
    <div>
      Глеб Никитин: «Вхождение Нижегородской области в топ-20 инвестиционного рейтинга — успех всего региона»
    </div>
  )
}

function TopText () {
  return (
    <div>
      <p>
        Нижегородская область вошла в топ-20 регионов национального инвестиционного рейтинга-2020. Регион поднялся на 39 позиций в сравнении с прошлым годом — на 18-е место. Об итогах рейтинга Президенту России Владимиру Путину рассказала глава АСИ Светлана Чупшева 9 июля 2020 года на заседании наблюдательного совета агентства.
      </p>

      <p>
        Как отметил губернатор Нижегородской области Глеб Никитин, вхождение в топ-20 инвестиционного рейтинга — успех всего региона.
      </p>

      <p>
        «Всего за год Нижегородской области удалось преодолеть в рейтинге почти 40 позиций и войти в двадцатку лучших. Этому предшествовала большая работа по улучшению инвестиционного климата. Для меня очень важно, что при формировании рейтинга учитываются абсолютно четкие и понятные критерии, совпадающие с мнением предпринимательского сообщества. Хочется поблагодарить команду Агентства стратегических инициатив за методическую поддержку, которая позволила нам принимать управленческие решения в интересах инвесторов», — сказал Глеб Никитин.
      </p>

      <p>
        «За прошедшее время было сделано очень много. Введен институт инвестиционных уполномоченных, созданы две ТОСЭР, упрощен ряд административных процедур. В этом году стартовало создание особой экономической зоны „Кулибин“. Я лично регулярно встречаюсь с предпринимательским сообществом, обсуждаю с ними острые темы. Инвестиционный рейтинг — важный сигнал для инвесторов о том, что в Нижегородской области можно и нужно работать», — добавил глава региона.
      </p>

      <p>
        Рейтинг оценивает усилия региональных управленческих команд по созданию благоприятных условий ведения бизнеса и рассчитывается на основе опросов предпринимателей. Он включает такие направления оценки, как скорость и легкость административных процедур (разрешения на строительство и регистрации права собственности), наличие и качество инфраструктуры и ресурсов, работа институтов для бизнеса и поддержка малого бизнеса.
      </p>

      <p>
        «В этом году половина регионов улучшили свой интегральный индекс по сравнению с прошлым годом, 31 из них демонстрируют устойчивый рост второй год подряд», — отметила генеральный директор АСИ Светлана Чупшева.
      </p>
    </div>
  )
}
