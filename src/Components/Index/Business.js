import React from 'react'

import { YMaps, Map, Placemark } from 'react-yandex-maps'

import Mark from './Icons/mark.png'

import styles from './Business.module.css'

export default function Business () {
  return (
    <div className={styles.root}>
      <div className={styles.map}>
        <div className={styles.placeholder} />

        <YMaps>
          <Map className={styles.ymap} defaultState={{ center: [56.2386, 43.1869], zoom: 12 }}>
            <Placemark
              defaultGeometry={[56.2347, 43.2044]}
              options={{
                iconLayout: 'default#image',
                iconImageHref: Mark,
                iconImageSize: [396, 204],
                iconImageOffset: [-120, -140]
              }}
            />
          </Map>
        </YMaps>
      </div>
    </div>
  )
}
