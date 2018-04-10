import React from 'react'
import classNames from 'classnames'

import styles from "./index.module.css";

const Button = (props) => {
  return (<a href="http://nytconferences.com/" className={classNames(styles.container, props.alternative && styles.alternative)}>
    <p className={styles.text}>{props.text}</p>
  </a>)
}

export default Button
