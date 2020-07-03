import React, { useContext } from 'react'
import { Route, Link } from 'react-router-dom'
import { Context } from '../Context'

import Photo from './Images/Nikitin.jpg'
import Sidebar from './Sidebar'

import styles from './Interview.module.css'

export default function Interview2 () {
  const { setOverlay } = useContext(Context)

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <div className={styles.image} style={{ backgroundImage: `url(${Photo})` }} />

        <div className={styles.desc}>
          Глеб Никитин губернатор Нижегородской области
        </div>
      </div>

      <div className={styles.interview}>
        <div className={styles.with}>
          Интервью с губернатором Нижегородской области Глебом Никитиным
        </div>

        <div className={styles.text}>
          <p className={styles.q}>
            В конце мая премьер-министр РФ Михаил Мишустин подписал распоряжение о создании в
            Дзержинске особой экономической зоны (ОЭЗ) «Кулибин». Почему была выбрана именно эта
            площадка, сколько времени ушло на ее создание, с какими сложностями пришлось
            столкнуться? Во сколько обошелся региону процесс создания ОЭЗ и была ли оказана
            поддержка из федерального бюджета?
          </p>

          <p className={styles.a}>
            Поиск оптимальной площадки – длительный процесс, в который входит работа с экспертами
            и бизнес-сообществом. Нашей задачей было определить место, где инвесторам будет максимально
            комфортно. В результате выбрали промзону Дзержинска. На данный момент площадь
            ОЭЗ – более 72 га. Работа по подготовке заявки началась в январе 2019 года, а в
            октябре 2019 года заявка была направлена на рассмотрение в Минэкономразвития РФ.
            Учитывая аналогичный опыт других регионов и достаточно высокие требования со стороны
            федеральных органов власти к созданию таких преференциальных зон, это довольно сжатые сроки.
          </p>
        </div>

        <Link to="/interview/2" className={styles.full} onClick={() => setOverlay(true)}>
          <div className={styles.more}>
            Читать полное интервью

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 9">
              <path fill="#F9F6F1" d="M11.88 4.416L8.056 0.592L6.776 1.872L7.736 2.832L8.44 3.44L8.424 3.504L7.144 3.44H0.52V5.392H7.144L8.424 5.328L8.44 5.392L7.736 6L6.776 6.96L8.056 8.24L11.88 4.416Z"/>
            </svg>
          </div>
        </Link>
      </div>

      <Route
        path='/interview/2'
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
    </div>
  )
}

function InterviewTitle () {
  return (
    <div>
      «Резиденты ОЭЗ смогут начать реализацию проектов в сжатые сроки – вся необходимая инфраструктура есть»
    </div>
  )
}

function InterviewDesc () {
  return (
    <div>
      Губернатор Нижегородской области Глеб Никитин рассказывает, как решили создать особую экономическую зону «Кулибин» в Дзержинске, и почему, несмотря на предоставление инвесторам многолетних льгот по уплате налогов, регион выиграет, а не потеряет.
    </div>
  )
}

function InterviewText () {
  return (
    <div>
      <p className={styles.q}>
        Илья Сергеевич, ваша компания собирается реализовать в Нижнем Новгороде
        инвестиционный проект по производству химических соединений, используемых в
        микроэлектронике. Что именно планируется производить?
      </p>

      <p>
        Поиск оптимальной площадки – длительный процесс, в который входит работа с экспертами
        и бизнес-сообществом. Нашей задачей было определить место, где инвесторам будет максимально
        комфортно. В результате выбрали промзону Дзержинска. На данный момент площадь
        ОЭЗ – более 72 га. Работа по подготовке заявки началась в январе 2019 года, а в
        октябре 2019 года заявка была направлена на рассмотрение в Минэкономразвития РФ.
        Учитывая аналогичный опыт других регионов и достаточно высокие требования со стороны
        федеральных органов власти к созданию таких преференциальных зон, это довольно сжатые сроки.
      </p>

      <p>
        Рядом с площадкой расположена таможня, есть внушительный резерв мощностей, очень
        хорошая логистика. Отличным конкурентным преимуществом является кадровый потенциал
        Нижегородской агломерации (в нее входят Нижний Новгород, Дзержинск, Бор, Кстовский,
        Городецкий, Павловский, Балахнинский, Богородский, районы) и региона в целом.
        У нас живут очень талантливые люди, готовые работать в промышленности.
      </p>

      <p>
        Также есть перспектива для освоения территории рядом с ОЭЗ и создания там
        индустриального парка. Я не раз бывал в Дзержинске, знаю, насколько мощная
        там инфраструктура, и, конечно, мы должны использовать это преимущество. Важно отметить,
        что создание ОЭЗ «Кулибин» не потребовало привлечения бюджетных средств, ни федеральных,
        ни региональных, что бывает крайне редко. Все резиденты ОЭЗ оперативно смогут начать
        реализацию проектов, поскольку площадка имеет всю необходимую инфраструктуру, резерв
        энергетических мощностей.
      </p>

      <p className={styles.q}>
        Дзержинск – город химиков. Отразилась ли эта особенность на ОЭЗ? Будет ли эта территория
        специализироваться на привлечении компаний, работающих исключительно в химической отрасли?
      </p>

      <p>
        Действительно, одним из приоритетных направлений деятельности ОЭЗ «Кулибин» станут химия
        и фармацевтика. Эти направления не слишком развиты в существующих на сегодняшний день ОЭЗ
        промышленно-производственного типа, но имеют высокое социальное значение для России в целом.
        Именно поэтому территорией размещения ОЭЗ «Кулибин» был выбран Дзержинск – один из
        крупнейших центров химической промышленности России. Здесь есть кадры, компетенции,
        возможность создать новые кооперационные цепочки производителей. Но также мы ждем и проекты
        из других сфер: логистики, производства автокомпонентов, изделий из композитных материалов.
      </p>

      <p className={styles.q}>
        Вкладывались ли ресурсоснабжающие организации в инфраструктуру ОЭЗ? В какие сроки эти
        инвестиции должны окупиться?
      </p>

      <p>
        Таких инвестиций не потребуется. Территория Дзержинска была выбрана, в частности, и по
        этой причине. Все резиденты ОЭЗ смогут начать реализацию проектов в сжатые сроки,
        поскольку площадка имеет всю необходимую инфраструктуру и достаточный для будущих
        инвесторов резерв энергетических мощностей.
      </p>

      <p className={styles.q}>
        Кто уже стал резидентом ОЭЗ и сколько заявок находится на рассмотрении? Что это за компании?
        Есть ли интерес к «Кулибину» у зарубежных производителей?
      </p>

      <p>
        В корпорацию развития региона уже поступают заявки от инвесторов, желающих открыть
        предприятие на территории ОЭЗ «Кулибин». Сейчас у нас подписаны соглашения о намерениях с
        тремя потенциальными инвесторами на сумму более 6 млрд рублей: с двумя компаниями из сферы
        химии и одним фармацевтическим предприятием, которое, в частности, занимается разработкой
        противовирусных препаратов. Это российские компании. Но у нас есть лист ожидания, в котором
        присутствуют и иностранные производства. После проведения всех необходимых юридических
        процедур и согласования проектов экспертным советом с резидентами будут заключены соглашения
        о сотрудничестве при реализации инвестиционного проекта на территории ОЭЗ.
      </p>

      <p className={styles.q}>
        Что именно предлагает ОЭЗ инвесторам кроме налоговых льгот?
      </p>

      <p>
        Налоговые послабления – это, безусловно, один из основных критериев, по которым инвесторы
        выбирают особые экономические зоны. Но помимо льгот стоит учесть, как я говорил ранее, и
        наличие готовой инфраструктуры: инвестору не придется вкладывать собственные деньги в ее
        создание, в подведение коммуникаций. В распоряжении будущих резидентов – три
        электроподстанции со свободной мощностью 14 МВт, сети водоснабжения и водоотведения.
        Отмечу, что на территории ОЭЗ «Кулибин» есть как «зеленые» площадки, так и «коричневые», а
        значит, можно подобрать не только участок, но и готовое помещение под потребности проекта.
      </p>

      <p>
        У нас значительное преимущество в отношении логистики. В радиусе 500 км от места размещения
        ОЭЗ проживает около 43 млн человек. Это более 30% населения страны, и больше, чем в Москве
        и Санкт-Петербурге.
      </p>

      <p>
        В 2 км от ОЭЗ проходит федеральная трасса М-7, всего 4 км до железнодорожной станции
        «Игумново». Рядом расположен международный аэропорт Стригино, который имеет допуск на прием
        крупных грузовых воздушных судов. Благодаря речному порту, расположенному в Дзержинске, есть
        возможность транспортировать товары водным транспортом.
      </p>

      <p className={styles.q}>
        Ставка делается на привлечение мелких и средних компаний-резидентов или предпочтение будет
        отдаваться крупным предприятим? Какие требования предъявляются к желающим разместить свои
        производства в ОЭЗ?
      </p>

      <p>
        Деятельность особых экономических зон в данном направлении регулируется федеральным
        законодательством. Одним из условий для претендента на статус резидента ОЭЗ «Кулибин»,
        будь то коммерческая организация или индивидуальный предприниматель, является регистрация
        бизнеса на территории Дзержинска. Также для этого необходимо осуществлять или планировать
        промышленно-производственную, логистическую или технико-внедренческую деятельность.
      </p>

      <p>
        В соответствии с федеральным законом в ОЭЗ есть ограничения по минимальному объему
        инвестиций – 120 млн руб. при условии, что в первые три года реализации инвестпроекта
        должно быть вложено не менее 40 млн руб. Это одно из основных отличий для резидента,
        выбирающего между ОЭЗ и ТОСЭР, которые являются схожими между собой формами преференциальных
        территорий. Например, объем инвестиций в ТОСЭР «Володарск» и «Решетиха» должен составлять
        не менее 2,5 млн руб., в ТОСЭР «Саров» – не менее 5 млн руб., что делает эти площадки
        выгодными для субъектов МСП. Поэтому можно говорить о том, что ОЭЗ рассчитан на крупный бизнес.
      </p>

      <p className={styles.q}>
        Некоторые эксперты полагают, что ОЭЗ могут предприятия использовать для минимизации налогов
        вместо реального выпуска высокотехнологичной продукции. Как избежать такого развития событий?
      </p>

      <p>
        Конечно, в данном процессе должны максимально учитываться различные риски. Работа начинается
        на самых ранних этапах. Любой проект, а точнее его бизнес-план, должен пройти согласование
        в наблюдательном и экспертном советах. Это обязательная процедура, установленная федеральным
        законом. В состав наблюдательного совета войдут представители не только региональных, но и
        федеральных органов власти. Именно бизнес-план должен доказать эффективность проекта
        будущего резидента.
      </p>

      <p className={styles.q}>
        Для резидентов ОЭЗ налоговые ставки на прибыль в первые пять лет будут снижены с 20% до 2%,
        в последующие пять лет — до 5%, в дальнейшем они сохранятся на уровне 14,5%. Ставки по
        налогам на имущество, землю и транспортный налог будут нулевыми. В чем выгода региона от
        создания ОЭЗ или тех же ТОСЭР, если бюджет теряет на налоговых поступлениях?
      </p>

      <p>
        Выгода региона заключается в повышении собственной конкурентоспособности. У нас очень много
        преимуществ, но для кого-то важно именно наличие преференциальных зон. Считаю, что ОЭЗ нам
        не хватало, чтобы сформировать максимально полное предложение для инвесторов. Это и важный
        сигнал о том, что мы продолжаем работать над повышением инвестиционной привлекательности
        региона.
      </p>

      <p>
        Несмотря на значительные налоговые льготы, ОЭЗ «Кулибин» все равно принесет поступления
        в бюджеты всех уровней. Предполагается, что создание особой экономической зоны позволит
        создать порядка 2,4 тыс. новых рабочих мест к 2029 году. А выпадающие доходы регионального
        бюджета будут компенсированы гораздо раньше, чем у тех регионов, где в создание ОЭЗ
        привлекались бюджетные средства.
      </p>

      <p>
        Ожидается, что совокупный объем налоговых и таможенных отчислений компаний-резидентов в
        бюджеты разных уровней может превысить 5 млрд руб. к 2029 году.
      </p>

      <p className={styles.q}>
        Рядом с новой ОЭЗ находится площадка, на которой должен развиваться промышленный парк
        «Дзержинск–Восточный». Ранее говорилось, что эти два проекта планируется объединить.
        Каковы на сегодня перспективы комплексного развития ОЭЗ и промпарка?
      </p>

      <p>
        Как я уже говорил, у ОЭЗ есть потенциал для расширения. В непосредственной близости
        расположены свободные земли промышленности. Считаю возможным создание там индустриального
        парка, который станет второй очередью существующей ОЭЗ. На его территории могут действовать
        такие же условия, что и на основной площадке особой экономической зоны.
      </p>

      <p>
        В начале следующего года мы рассчитываем выполнить требования Правительства РФ по
        подготовке заявки на присоединение площадей будущего индустриального парка к действующей
        территории ОЭЗ «Кулибин».
      </p>
    </div>
  )
}
