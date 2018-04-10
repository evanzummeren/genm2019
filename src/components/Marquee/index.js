import React from 'react'

import styles from "./index.module.css";

const Marquee = (props) => {
  return (<div className={styles.container}>
      <p className={styles.title}>{Array.apply(null, { length: 30 }).map((value, key) => {
        return <span key={key}>{props.title} </span>
      })}</p>
  </div>)
}

export default Marquee
