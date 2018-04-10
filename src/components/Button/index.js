import React from 'react'

import styles from "./index.module.css";

const Button = (props) => (
  <div className={styles.container} data-color={props.color}>
    <p className={styles.text}>{props.text}</p>
  </div>
)

export default Button
