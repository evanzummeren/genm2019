import React from 'react'

import styles from "./index.module.css";

const RollingTitle = (props) => {
  return (<div >
      <p className={styles.title}><span>DEBAT DEBAT DEBAT DEBAT DEBAT DEBAT DEBAT DEBAT DEBAT DEBAT DEBAT DEBAT </span></p>
  </div>)
}

export default RollingTitle
//
// {Array.apply(null, { length: 10 }).map((value, key) => {
//   return <h1 key={key}>{props.title}</h1>
// })}
