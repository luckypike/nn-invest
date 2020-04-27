import React from 'react'

import { YMaps, Map, Placemark } from 'react-yandex-maps'

import styles from './Business.module.css'

export default function Business () {
  return (
    <div className={styles.root}>
      <div className={styles.map}>
        <div className={styles.placeholder} />

        <YMaps>
          <Map className={styles.ymap} defaultState={{ center: [56.23863828307551,43.18698734516306], zoom: 12 }}>
            <Placemark
              // defaultGeometry={}
              options = {{
                iconLayout: 'default#image',
                // iconImageHref: Ballon,
                iconImageSize: [45, 50],
                iconImageOffset: [-20, -50]
              }}
            />
          </Map>
        </YMaps>
      </div>
    </div>
  )
}

function Ballon () {
  return(
    <div></div>
  )
}
