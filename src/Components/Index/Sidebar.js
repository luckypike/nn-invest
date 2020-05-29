import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Context } from '../Context'

import styles from './Sidebar.module.css'

Sidebar.propTypes = {
  title: PropTypes.object,
  desc: PropTypes.object,
  text: PropTypes.object,
  image: PropTypes.string
}

export default function Sidebar ({ title, desc, text, image }) {
  const { setOverlay } = useContext(Context)

  useEffect(() => {
    setOverlay(true)

    return function resetOverlay () {
      setOverlay(false)
    }
  })

  return (
    <div className={styles.root}>
      <Link to='/' className={styles.close} onClick={() => setOverlay(false)}>
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 1.5L14.5 14.5M14.5 1.5L1.5 14.5" stroke="white" strokeWidth="2"/>
        </svg>
      </Link>

      <div className={styles.content}>
        {image &&
          <div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
        }

        <div className={styles.group}>
          {title &&
            <div className={styles.title}>
              {title}
            </div>
          }

          {desc &&
            <div className={styles.desc}>
              {desc}
            </div>
          }

          {text &&
            <div className={styles.text}>
              {text}
            </div>
          }

          <Link to='/' className={styles.link}>
            <div className={styles.return}>
              Вернуться в проект

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 9">
                <path fill="#F9F6F1" d="M11.88 4.416L8.056 0.592L6.776 1.872L7.736 2.832L8.44 3.44L8.424 3.504L7.144 3.44H0.52V5.392H7.144L8.424 5.328L8.44 5.392L7.736 6L6.776 6.96L8.056 8.24L11.88 4.416Z"/>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
