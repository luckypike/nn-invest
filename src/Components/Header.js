import React from 'react'

import styles from './Header.module.css'

export default function Header () {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        Как Корпорация развития Нижегородской области помогает бизнесу
      </div>
    </div>
  )
}
