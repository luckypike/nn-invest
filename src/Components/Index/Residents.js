import React, { useEffect, useRef } from 'react'
import classNames from 'classnames'
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.css'

import Volkswagen from './Icons/volkswagen.svg'
import Solvay from './Icons/solvay.svg'
import Leoni from './Icons/leoni.svg'
import Unilin from './Icons/unilin.png'
import Wella from './Icons/wella.png'
import Magna from './Icons/magna.svg'
import Bpr from './Icons/bpr.png'
import Danieli from './Icons/danieli.svg'
import Liebherr from './Icons/liebherr.svg'
import Jungheinrich from './Icons/jungheinrich.svg'
import Heineken from './Icons/heineken.svg'
import Freudenberg from './Icons/freudenberg.svg'
import Daydo from './Icons/daydo.jpg'
import Ushin from './Icons/ushin.jpg'

import styles from './Residents.module.css'

export default function Residents () {
  const mount = useRef()

  useEffect(() => {
    const glide = new Glide(mount.current, {
      type: 'slider',
      autoplay: 3000,
      hoverpause: true,
      perView: 4,
      gap: 0,
      breakpoints: {
        1024: {
          perView: 3
        },
        600: {
          perView: 1
        }
      }
    })

    glide.mount()
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        Международные резиденты Нижегородской области
      </div>

      <div className={styles.slider}>
        <div className={classNames('glide')} ref={mount}>
          <div className={classNames('glide__track')} data-glide-el="track">
            <div className={classNames('glide__slides')}>
              <div className={classNames('glide__slide')}>
                <div className={styles.resident}>
                  <div className={styles.logo}>
                    <div className={styles.image}>
                      <img src={Volkswagen} alt="volkswagen" />
                    </div>
                  </div>

                  <div className={styles.title}>
                    Volkswagen Group Rus
                  </div>
                </div>
              </div>

              <div className={classNames('glide__slide')}>
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
              </div>

              <div className={classNames('glide__slide')}>
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
              </div>

              <div className={classNames('glide__slide')}>
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
              </div>

              <div className={classNames('glide__slide')}>
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
              </div>

              <div className={classNames('glide__slide')}>
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
              </div>

              <div className={classNames('glide__slide')}>
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
              </div>

              <div className={classNames('glide__slide')}>
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

              <div className={classNames('glide__slide')}>
                <div className={styles.resident}>
                  <div className={styles.logo}>
                    <div className={styles.image}>
                      <img src={Liebherr} alt="liebherr" />
                    </div>
                  </div>

                  <div className={styles.title}>
                    Liebherr
                  </div>
                </div>
              </div>

              <div className={classNames('glide__slide')}>
                <div className={styles.resident}>
                  <div className={styles.logo}>
                    <div className={styles.image}>
                      <img src={Ushin} alt="ushin" />
                    </div>
                  </div>

                  <div className={styles.title}>
                    U-shin
                  </div>
                </div>
              </div>

              <div className={classNames('glide__slide')}>
                <div className={styles.resident}>
                  <div className={styles.logo}>
                    <div className={styles.image}>
                      <img src={Jungheinrich} alt="jungheinrich" />
                    </div>
                  </div>

                  <div className={styles.title}>
                    Jungheinrich
                  </div>
                </div>
              </div>

              <div className={classNames('glide__slide')}>
                <div className={styles.resident}>
                  <div className={styles.logo}>
                    <div className={styles.image}>
                      <img src={Heineken} alt="heineken" />
                    </div>
                  </div>

                  <div className={styles.title}>
                    Heineken
                  </div>
                </div>
              </div>

              <div className={classNames('glide__slide')}>
                <div className={styles.resident}>
                  <div className={styles.logo}>
                    <div className={styles.image}>
                      <img src={Daydo} alt="daydo" />
                    </div>
                  </div>

                  <div className={styles.title}>
                    Daido Metal Rus
                  </div>
                </div>
              </div>

              <div className={classNames('glide__slide')}>
                <div className={styles.resident}>
                  <div className={styles.logo}>
                    <div className={styles.image}>
                      <img src={Freudenberg} alt="freudenberg" />
                    </div>
                  </div>

                  <div className={styles.title}>
                    Freudenberg Polytex
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
