import React from 'react'
import Link from 'gatsby-link'

import styles from "./index.module.css";

const dialog = (props) => (
  <section className={styles.container}>
    <p className={styles.text}>{props.children}</p>
  </section>
)

export default dialog
