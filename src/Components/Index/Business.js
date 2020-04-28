import React, { useEffect } from 'react'

import Mark from './Icons/mark.png'
import Mark2 from './Icons/mark2.png'
import Mark3 from './Icons/mark_right_white.png'
import Mark4 from './Icons/mark_left_white.png'

import styles from './Business.module.css'
import './bs.css'

export default function Business () {
  useEffect(() => {
    const { ymaps } = window

    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
        center: [56.2386, 43.1869],
        zoom: 10
      }, {
        searchControlProvider: 'yandex#search'
      })

      const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div id="mark" class="mark" style="color: #000000; font-weight: bold; font-family: PT Serif; font-size: 20px; line-height: 24px; width: 340px; padding-top: 6px;">$[properties.iconContent]</div>'
      )

      const MyIconContentLayout2 = ymaps.templateLayoutFactory.createClass(
        '<div id="mark2" class="mark" style="color: #000000; font-weight: bold; font-family: PT Serif; font-size: 20px; line-height: 24px; width: 340px; padding-top: 6px;">$[properties.iconContent]</div>'
      )

      const myPlacemarkWithContent = new ymaps.Placemark([56.213928920379715,43.201810725567974], {
        iconContent: 'Территория опережающего социально-экономического развития «Володарск»'
      }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: Mark4,
        iconImageSize: [400, 200],
        iconImageOffset: [-400, -200],
        iconContentOffset: [10, 15],
        iconContentLayout: MyIconContentLayout2
      })

      const myPlacemark = new ymaps.Placemark([56.213674834061024,43.25187868490581], {
        iconContent: 'Территория опережающего социально-экономического развития «Решетиха»'
      }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: Mark3,
        iconImageSize: [400, 200],
        iconImageOffset: [0, -200],
        iconContentOffset: [45, 15],
        iconContentLayout: MyIconContentLayout
      })

      myMap.behaviors.disable('scrollZoom')

      myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent)

      myMap.geoObjects.events.add('click', function (e) {
        window.location.href = '#/toser/1'
      })

      myMap.events.add('boundschange', function (e) {
        if (window.innerWidth < 424) {
          myMap.setCenter([56.21912877418261, 43.1566856083934])
        }
      })

      myPlacemark.events.add('mouseenter', function (e) {
        var mark = document.getElementById('mark')
        mark.classList.add('mark-hover')
        myPlacemark.options.set({
          iconImageHref: Mark2
        })
      })

      myPlacemark.events.add('mouseleave', function (e) {
        var mark = document.getElementById('mark')
        mark.classList.remove('mark-hover')
        myPlacemark.options.set({
          iconImageHref: Mark3
        })
      })

      myPlacemarkWithContent.events.add('mouseenter', function (e) {
        var mark = document.getElementById('mark2')
        mark.classList.add('mark-hover')
        myPlacemarkWithContent.options.set({
          iconImageHref: Mark
        })
      })

      myPlacemarkWithContent.events.add('mouseleave', function (e) {
        var mark = document.getElementById('mark2')
        mark.classList.remove('mark-hover')
        myPlacemarkWithContent.options.set({
          iconImageHref: Mark4
        })
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
