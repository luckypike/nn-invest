import React, { useContext } from 'react'
import { Route, Link } from 'react-router-dom'
import { Context } from '../Context'

import Photo from './Images/Rost.jpg'

import Sidebar from './Sidebar'

import styles from './Interview.module.css'

export default function Interview3 () {
  const { setOverlay } = useContext(Context)

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <div className={styles.image} style={{ backgroundImage: `url(${Photo})` }} />

        <div className={styles.desc}>
          Директор по маркетингу группы компаний «Рост» Наталья Федосеева.
        </div>
      </div>

      <div className={styles.interview}>
        <div className={styles.with}>
          Интервью с компанией «Рост»
        </div>

        <div className={styles.text}>
          <p className={styles.q}>
            Наталья Владимировна, компания «Рост» реализует в Нижегородской области
            проект по созданию крупного тепличного комплекса для круглогодичного
            выращивания овощей. На каком этапе в настоящий момент находится проект?
            Когда должен состояться его запуск?
          </p>

          <p className={styles.a}>
            Проект находится на стадии строительства, которое мы планируем завершить до конца
            этого года.
          </p>
        </div>

        <Link to="/interview/3" className={styles.full} onClick={() => setOverlay(true)}>
          <div className={styles.more}>
            Читать полное интервью

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 9">
              <path fill="#F9F6F1" d="M11.88 4.416L8.056 0.592L6.776 1.872L7.736 2.832L8.44 3.44L8.424 3.504L7.144 3.44H0.52V5.392H7.144L8.424 5.328L8.44 5.392L7.736 6L6.776 6.96L8.056 8.24L11.88 4.416Z"/>
            </svg>
          </div>
        </Link>
      </div>

      <Route
        path='/interview/3'
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
      Свежесть круглый год
    </div>
  )
}

function InterviewDesc () {
  return (
    <div>
      О том, как выращивать в Нижегородской области вкусные и свежие овощи, которые могут
      составить конкуренцию импортным продуктам по цене и качеству, рассказывает директор
      по маркетингу группы компаний «Рост» Наталья Федосеева.
    </div>
  )
}

function InterviewText () {
  return (
    <div>
      <p className={styles.q}>
        Наталья Владимировна, компания «Рост» реализует в Нижегородской области
        проект по созданию крупного тепличного комплекса для круглогодичного
        выращивания овощей. На каком этапе в настоящий момент находится проект?
        Когда должен состояться его запуск?
      </p>

      <p>
        Проект находится на стадии строительства, которое мы планируем завершить до конца
        этого года.
      </p>

      <p className={styles.q}>
        Каков объем инвестиций в проект, сроки выхода на проектную мощность и сроки
        окупаемости?
      </p>

      <p>
        Общий объем инвестиций в проект составит более 5 млрд руб. Выход на полную
        проектную мощность планируется на второй год работы комбината с момента открытия.
        Сроки окупаемости проекта зависят от того, как сложится конъюнктура рынка. На старте
        проекта мы прогнозировали период окупаемости восемь лет.
      </p>

      <p className={styles.q}>
        Финансирование проекта ведется за счет собственных средств компании или
        привлекаются банковские кредиты?
      </p>

      <p>
        Финансирование проекта обеспечивается как собственными средствами компании, так и
        привлечением кредитов АО «Россельхозбанк».
      </p>

      <p className={styles.q}>
        Что именно будет включать в себя комплекс? То, что строится сейчас, – это весь
        проект или только первый этап? Что будет дальше, какие пути развития этого
        проекта предусматриваются?
      </p>

      <p>
        На текущем этапе дополнительные очереди в рамках этого комплекса мы не планируем.
        Наша задача ближайших лет – отладка на предприятии бизнес-процессов,
        обеспечивающих максимальную эффективность производства и логистики. Конечно, мы
        отслеживаем рыночные тенденции и при формировании благоприятных трендов
        рассмотрим и вопрос наращивания площадей.
      </p>

      <p className={styles.q}>
        Почему для реализации этого проекта выбрана именно Нижегородская область с ее
        достаточно сложным климатом с перепадами температур?
      </p>

      <p>
        Для нас приоритетными факторами в выборе места расположения производства являются
        близость к крупным центрам потребления и обеспеченность спроса предложением
        овощей, производимых в регионе. Негативное влияние климатических факторов
        нивелируется технологиями, применяющимися при производстве овощей в защищенном
        грунте с применением системы ассимиляции, а также адаптацией оборудования под
        особенности климата как на этапе проектирования, так и при настройке систем
        автоматизированного контроля за обеспечением микроклимата в теплицах во время
        работы.
      </p>

      <p className={styles.q}>
        Каковы предполагаемые рынки сбыта продукции? Какую долю рынка внутри
        региона планируется занять? Сможет ли выращиваемая в Нижегородской области
        продукция составить конкуренцию завозной? В чем будут ее преимущества?
      </p>

      <p>
        Качество овощей на полке определяется их уровнем свежести, внешним видом и
        вкусовыми свойствами. Располагая предприятиями в регионах сбыта, мы обеспечиваем
        самое короткое плечо доставки в регионах нашего присутствия. Кроме очевидного
        преимущества по уровню свежести, мы также гарантируем потребителям и лучший вкус,
        поскольку короткие сроки поставки позволяют снимать с ветки уже полностью зрелые
        овощи, получившие необходимый объем питательных веществ от растения, и выбирать
        более вкусные сорта без ограничений, связанных с необходимостью транспортировки на
        дальние расстояния.
      </p>

      <p>
        Эти преимущества наиболее актуальны в «домашнем» регионе предприятия. Поэтому
        приоритетные рынки сбыта – Нижегородская и соседние с ней области. Прогнозируемая
        доля ТК «Нижегородский» в производстве овощей защищенного грунта Приволжского
        федерального округа – 10%.
      </p>

      <p>
        Продукция, привезенная из дальних регионов и особенно импортируемая из южных стран,
        как правило, имеет себестоимость и полочную цену несколько ниже. Но ее выбор
        предполагает осознанный компромисс относительно требований по уровню качества и,
        зачастую, по затратам на списания. В регионах с развитым производством овощей мы
        видим, что предпочтения потребителей и розничных сетей склоняются в пользу местных
        овощей.
      </p>

      <p className={styles.q}>
        Какими мерами господдержки пользуется компания при реализации проекта?
      </p>

      <p>
        Государственная поддержка заключается в выделении льготного кредитования проекта.
      </p>

      <p className={styles.q}>
        Проект может быть признан приоритетным, заявка уже подана. Какие
        преимущества даст проекту этот статус?
      </p>

      <p>
        Статус приоритетного проекта даст возможность субсидирования части затрат на
        подведение инженерных коммуникаций к площадке строительства, льготы по налогу на
        имущество.
      </p>

      <p className={styles.q}>
        Сколько рабочих мест будет создано в результате реализации проекта? Где
        планируется брать кадры?
      </p>

      <p>
        Согласно проекту, после ввода в эксплуатацию ТК «Нижегородский» обеспечит рабочими
        местами 255 человек. Причем высокотехнологичное оборудование и сложные технологии
        выращивания предполагают привлечение высококвалифицированных рабочих кадров в
        том числе. В первую очередь мы привлекаем на работу жителей ближайших к
        предприятию населенных пунктов.
      </p>

      <p className={styles.q}>
        Какие технологии – иностранные или отечественные – будут использоваться при
        выращивании овощей? Насколько они современные и инновационные?
      </p>

      <p>
        Все наши тепличные комплексы построены с нуля, что позволяет закладывать в проект
        наиболее актуальные технологические решения. И максимально быстро выводить
        производство на уровень урожайности выше средней по рынку. ТК «Нижегородский»
        также будет оборудован современными технологическими системами, включая систему
        искусственной ассимиляции во всех производственных и рассадных блоках,
        автоматизированную систему управления климатом, собственный мощный энергоцентр с
        газогенерирующим оборудованием. Строительство теплиц осуществляется по
        голландским технологиям. При этом мы стараемся максимально использовать
        компоненты российского производства. Но только те, качество которых соответствует
        нашим требованиям. Доля отечественного оборудования и материалов в наших затратах
        составляет порядка 50%.
      </p>

      <p className={styles.q}>
        Круглогодичное выращивание овощей в условиях Нижегородской области может
        быть энергозатратно. Как выстраиваются отношения с поставщиками тепла, воды и
        электроэнергии? Предусматриваются ли какие-то льготы на энергоресурсы для
        такого проекта?
      </p>

      <p>
        Действительно, все производство защищенного грунта в условиях российского климата
        значительно более энергозатратно, чем в большинстве других стран. В Нижегородской
        области действует порядок предоставления субсидий на возмещение части затрат на
        приобретение тепличными предприятиями энергоносителей.
        Также мы инвестируем в установку газоперерабатывающего оборудования, которое
        позволяет производить электроэнергию из газа, снижая затраты на энергоносители.
      </p>
    </div>
  )
}
