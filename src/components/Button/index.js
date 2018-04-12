import React from 'react'
import classNames from 'classnames'

import styles from "./index.module.css";

const Button = (props) => {
  return (<a href="http://www.expertisecentrumjournalistiek.nl/agenda/19-juni-2018-de-grote-expertisedag-nieuwe-media/" className={classNames(styles.container, props.alternative && styles.alternative)}>
    <p className={styles.text}>{props.text}</p>
  </a>)
}

export default Button
