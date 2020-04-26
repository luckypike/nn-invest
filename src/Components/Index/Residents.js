import React from 'react'

import Sw from './Icons/ws.svg'
import Solvay from './Icons/solvay.svg'
import Leoni from './Icons/leoni.svg'
import Unilin from './Icons/unilin.png'
import Wella from './Icons/wella.png'
import Magna from './Icons/magna.svg'
import Bpr from './Icons/bpr.png'
import Danieli from './Icons/danieli.svg'

import styles from './Residents.module.css'

export default function Residents () {
  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        Международные резиденты Нижегородской области
      </div>

      <div className={styles.resident}>
        <div className={styles.logo}>
          <div className={styles.image}>
            <img src={Sw} alt="sw" />
          </div>
        </div>

        <div className={styles.title}>
          Volkswagen Group Rus
        </div>
      </div>

      <div className={styles.resident}>
        <div className={styles.logo}>
          <div className={styles.image}>
            <img src={Solvay} alt="solvay" />
          </div>
        </div>

        <div className={styles.title}>
          Solvay
        </div>
      </div>

      <div className={styles.resident}>
        <div className={styles.logo}>
          <div className={styles.image}>
            <img src={Leoni} alt="leoni" />
          </div>
        </div>

        <div className={styles.title}>
          LLC Leoni Rus
        </div>
      </div>

      <div className={styles.resident}>
        <div className={styles.logo}>
          <div className={styles.image}>
            <img src={Unilin} alt="unilin" />
          </div>
        </div>

        <div className={styles.title}>
          Unilin
        </div>
      </div>

      <div className={styles.resident}>
        <div className={styles.logo}>
          <div className={styles.image}>
            <img src={Wella} alt="wella" />
          </div>
        </div>

        <div className={styles.title}>
          Wella
        </div>
      </div>

      <div className={styles.resident}>
        <div className={styles.logo}>
          <div className={styles.image}>
            <img src={Magna} alt="magna" />
          </div>
        </div>

        <div className={styles.title}>
          Magna Automotive rus
        </div>
      </div>

      <div className={styles.resident}>
        <div className={styles.logo}>
          <div className={styles.image}>
            <img src={Bpr} alt="bpr" />
          </div>
        </div>

        <div className={styles.title}>
          Boryszew Plastik Rus
        </div>
      </div>

      <div className={styles.resident}>
        <div className={styles.logo}>
          <div className={styles.image}>
            <img src={Danieli} alt="danieli" />
          </div>
        </div>

        <div className={styles.title}>
          Danieli Volga
        </div>
      </div>

      <div className={styles.resident}>
        <div className={styles.logo}>
          <div className={styles.image}>
            <img src={Wella} alt="wella" />
          </div>
        </div>

        <div className={styles.title}>
          Wella
        </div>
      </div>

      <div className={styles.resident}>
        <div className={styles.logo}>
          <div className={styles.image}>
            <img src={Magna} alt="magna" />
          </div>
        </div>

        <div className={styles.title}>
          Magna Automotive rus
        </div>
      </div>

      <div className={styles.resident}>
        <div className={styles.logo}>
          <div className={styles.image}>
            <img src={Bpr} alt="bpr" />
          </div>
        </div>

        <div className={styles.title}>
          Boryszew Plastik Rus
        </div>
      </div>

      <div className={styles.resident}>
        <div className={styles.logo}>
          <div className={styles.image}>
            <img src={Danieli} alt="danieli" />
          </div>
        </div>

        <div className={styles.title}>
          Danieli Volga
        </div>
      </div>
    </div>
  )
}
