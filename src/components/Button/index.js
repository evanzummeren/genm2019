import React from 'react'
import classNames from 'classnames'

import styles from "./index.module.css";

const Button = (props) => {
  console.log(props.alternative)
  console.log(props.alternative && styles.alternative)
  return (<div className={classNames(styles.container, props.alternative && styles.alternative)}>
    <p className={styles.text}>{props.text}</p>
  </div>)
}

export default Button
