import React from 'react'

import styles from "./index.module.css";

const RollingTitle = (props) => {
  return (<div >
      <p className={styles.title}>{Array.apply(null, { length: 10 }).map((value, key) => {
        return <span key={key}>{props.title} </span>
      })}</p>
  </div>)
}

export default RollingTitle
