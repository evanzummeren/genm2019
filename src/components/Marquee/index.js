import React from 'react'
import classNames from 'classnames'

import styles from "./index.module.css";

const Marquee = (props) => {
  return (<div className={styles.marquee}>
      <h1 className={classNames(styles.marqueeTitle, props.secundary && styles.marqueeTitleSecundary)}>
        {Array.apply(null,{length: 30}).map((value, key) => {
          return <span key={key}>{props.title} </span>
        })}
      </h1>
  </div>)
}

export default Marquee
