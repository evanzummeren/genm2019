import React from 'react'
import Button from "../Button";

import styles from "./index.module.css";

const dialog = (props) => (
  <section className={styles.container}>
    <p className={styles.text}>{props.children}</p>
    <Button text="Bestellen" color="yellow"/>
  </section>
)

export default dialog
