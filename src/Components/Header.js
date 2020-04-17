import React from 'react'

import Poster from './Video/poster.jpg'
import Intro from './Video/intro.mp4'

import styles from './Header.module.css'

export default function Header () {
  return (
    <div className={styles.header}>
      <video playsInline autoPlay loop muted poster={Poster}>
        <source src={Intro} type="video/mp4" />
      </video>

      <div className={styles.title}>
        Как Корпорация развития Нижегородской области помогает бизнесу
      </div>
    </div>
  )
}
