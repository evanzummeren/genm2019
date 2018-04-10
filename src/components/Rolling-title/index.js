import React from 'react'

import styles from "./index.module.css";

const RollingTitle = (props) => (
  <div className={styles.container}>
    <h1>{props.title}</h1>
  </div>
)

export default RollingTitle
