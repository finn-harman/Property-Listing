import React from 'react'
import classnames from 'classnames'
import styles from './styles.module.css'

function Hero({ miniHero }) {
  const classes = classnames(styles.hero, 'hero', 'mb-3', {
    'hero-sm': miniHero,
    [styles.miniHero]: miniHero,
    'hero-lg': !miniHero
  })

  return (
    <div className={classes}>
      <div className="hero-body text-center text-light">
        <h1>Scraye</h1>
        <p className="mb-0">The simple way to rent</p>
      </div>
    </div>
  )
}

export default Hero
