import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Youtube.module.css'

Frame.propTypes = {
  id: PropTypes.string
}

export default function Youtube () {
  return (
    <div className={styles.root}>
      <Frame id="gWvmd62bdHE" />
    </div>
  )
}

function Frame ({ id }) {
  const [active, setActive] = useState(false)

  return (
    <div className={classNames(styles.youtube, { [styles.active]: active })} onClick={() => setActive(true)} >
      {!active &&
        <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} />
      }

      {active &&
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          frameBorder="0"
          allowFullScreen
          allow="autoplay"
        />
      }
    </div>
  )
}
