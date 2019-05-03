import React from 'react'
import classNames from 'classnames'

import Button from "../Button";

import styles from "./index.module.css";

const Dialog = (props) => (
  <section className={classNames(styles.container, (props.position == "top") && styles.positionTop)}>
    <h4 className={styles.text}>{props.text}</h4>
    {props.button && <Button text={props.button} alternative="true" link="http://www.expertisecentrumjournalistiek.nl/agenda/18-juni-grote-expertisedag-nieuwe-media-2019/"/>}
  </section>
)

export default Dialog
