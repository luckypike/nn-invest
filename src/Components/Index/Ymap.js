import React, { useEffect } from 'react'

// import LeftMarkWhite from './Icons/left_mark_white.png'
// import LeftMark from './Icons/left_mark.png'
import RightMarkWhite from './Icons/right_mark_white.png'
import RightMark from './Icons/right_mark.png'
import LeftMarkWhiteBottom from './Icons/left_mark_white_bottom.png'
import LeftMarkBottom from './Icons/left_mark_bottom.png'

import styles from './Ymap.module.css'
import './Ymap.css'

export default function Ymap () {
  useEffect(() => {
    const { ymaps } = window

    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
        center: [56.2386, 43.1869],
        zoom: 10
      }, {
        searchControlProvider: 'yandex#search'
      })

      const VolodarskContent = ymaps.templateLayoutFactory.createClass(
        '<div id="volodarsk" style="color: #000; font-weight: bold; font-family: PT Serif; font-size: 16px; line-height: 24px; width: 200px">$[properties.iconContent]</div>'
      )

      const ReshetihaContent = ymaps.templateLayoutFactory.createClass(
        '<div id="reshetiha" style="color: #000; font-weight: bold; font-family: PT Serif; font-size: 16px; line-height: 24px; width: 200px">$[properties.iconContent]</div>'
      )
      const KylibinContent = ymaps.templateLayoutFactory.createClass(
        '<div id="kylibin" style="color: #000; font-weight: bold; font-family: PT Serif; font-size: 16px; line-height: 24px; width: 200px">$[properties.iconContent]</div>'
      )

      const Volodarsk = new ymaps.Placemark([56.2191, 43.1584], {
        iconContent: 'ТОСЭР «Володарск»'
      }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: RightMarkWhite,
        iconImageSize: [200, 100],
        iconImageOffset: [-200, -100],
        iconContentOffset: [-10, 18],
        iconContentLayout: VolodarskContent
      })

      const Reshetiha = new ymaps.Placemark([56.2224, 43.2909], {
        iconContent: 'ТОСЭР «Решетиха»'
      }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: LeftMarkWhiteBottom,
        iconImageSize: [200, 100],
        iconImageOffset: [-190, -20],
        iconContentOffset: [-5, 60],
        iconContentLayout: ReshetihaContent
      })

      const Kylibin = new ymaps.Placemark([56.2853, 43.6051], {
        iconContent: 'ОЭЗ «Кулибин»'
      }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: RightMarkWhite,
        iconImageSize: [200, 100],
        iconImageOffset: [-180, -90],
        iconContentOffset: [-5, 18],
        iconContentLayout: KylibinContent
      })

      myMap.behaviors.disable('scrollZoom')

      myMap.geoObjects
        .add(Reshetiha)
        .add(Volodarsk)
        .add(Kylibin)

      Volodarsk.events.add('click', function (e) {
        window.location.href = '#/toser'
      })

      Reshetiha.events.add('click', function (e) {
        window.location.href = '#/toser'
      })

      Kylibin.events.add('click', function (e) {
        window.location.href = '#/news/5'
      })

      // myMap.events.add('boundschange', function (e) {
      //   if (window.innerWidth < 426) {
      //     myMap.setZoom(8)
      //     myMap.controls.remove('zoomControl')
      //   } else {
      //     myMap.setZoom(10)
      //     myMap.controls.add('zoomControl')
      //   }
      // })

      Volodarsk.events.add('mouseenter', function (e) {
        var volodarsk = document.getElementById('volodarsk')
        volodarsk.classList.add('mark-hover')
        Volodarsk.options.set({
          iconImageHref: RightMark
        })
      })

      Volodarsk.events.add('mouseleave', function (e) {
        var mark = document.getElementById('volodarsk')
        mark.classList.remove('mark-hover')
        Volodarsk.options.set({
          iconImageHref: RightMarkWhite
        })
      })

      Reshetiha.events.add('mouseenter', function (e) {
        var reshetiha = document.getElementById('reshetiha')
        reshetiha.classList.add('mark-hover')
        Reshetiha.options.set({
          iconImageHref: LeftMarkBottom
        })
      })

      Reshetiha.events.add('mouseleave', function (e) {
        var reshetiha = document.getElementById('reshetiha')
        reshetiha.classList.remove('mark-hover')
        Reshetiha.options.set({
          iconImageHref: LeftMarkWhiteBottom
        })
      })

      Kylibin.events.add('mouseenter', function (e) {
        var kylibin = document.getElementById('kylibin')
        kylibin.classList.add('mark-hover')
        Kylibin.options.set({
          iconImageHref: RightMark
        })
      })

      Kylibin.events.add('mouseleave', function (e) {
        var kylibin = document.getElementById('kylibin')
        kylibin.classList.remove('mark-hover')
        Kylibin.options.set({
          iconImageHref: RightMarkWhite
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
