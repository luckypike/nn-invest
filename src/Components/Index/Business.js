import React, { useEffect } from 'react'

import Mark from './Icons/mark.png'
import Mark2 from './Icons/mark2.png'

import styles from './Business.module.css'

export default function Business () {
  useEffect(() => {
    const { ymaps } = window

    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
        center: [56.2386, 43.1869],
        zoom: 12
      }, {
        searchControlProvider: 'yandex#search'
      })

      const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold; font-family: PT Serif; font-size: 20px; line-height: 24px; width: 340px; padding-top: 6px;">$[properties.iconContent]</div>'
      )

      const myPlacemarkWithContent = new ymaps.Placemark([56.21912877418261,43.1566856083934], {
        iconContent: 'Территория опережающего социально-экономического развития «Володарск»'
      }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: Mark,
        iconImageSize: [400, 200],
        iconImageOffset: [-400, -200],
        iconContentOffset: [10, 15],
        iconContentLayout: MyIconContentLayout
      })

      const myPlacemark = new ymaps.Placemark([56.2185962239186,43.2908707489971], {
        iconContent: 'Территория опережающего социально-экономического развития «Решетиха»'
      }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: Mark2,
        iconImageSize: [400, 200],
        iconImageOffset: [0, -200],
        iconContentOffset: [45, 15],
        iconContentLayout: MyIconContentLayout
      })

      myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent)

      myMap.geoObjects.events.add('click', function (e) {
        window.location.href = '#/toser/1'
      })
    })
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.map}>
        <div className={styles.placeholder} />

        <div className={styles.ymap} id="map"></div>
      </div>
    </div>
  )
}
