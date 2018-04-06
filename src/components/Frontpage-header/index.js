import React from 'react'
import Link from 'gatsby-link'

import styles from "./index.module.css";
import logo from "./logo.svg";

const FrontpageHeader = () => (
  <div className={styles.header}>
    <img src={logo} className={styles.logo}></img>
    <div className={styles.nav}>
      <h3 className={styles.navItem}>Sprekers</h3>
      <h3 className={styles.navItem}>Programma</h3>
      <h3 className={styles.navItem}>Tickets</h3>
      <h3 className={styles.navItem}>Over</h3>
    </div>
  </div>
)

export default FrontpageHeader
