import React from 'react'
import Button from "../Button";

import styles from "./index.module.css";

const dialog = (props) => (
  <section className={styles.container}>
    <span className={styles.text}>{props.children}</span>
    <Button text="Bestellen" alternative="true" />
  </section>
)

export default dialog
