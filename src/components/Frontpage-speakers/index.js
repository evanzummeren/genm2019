import React from 'react'
import Link from 'gatsby-link'

import styles from "./index.module.css";
import keith from "./keith.png";

const FrontpageSpeakers = () => (
  <section>
    <div className={styles.container}>
      <div className={styles.block}>
        <h1 className={styles.title}>Keith Hammonds</h1>
        <h2 className={styles.subtitle}>Director Solutions Journalism Network</h2>
        <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div>
        <img src={keith}></img>
      </div>
    </div>
  </section>
)

export default FrontpageSpeakers
