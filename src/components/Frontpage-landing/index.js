import React from 'react'
import Link from 'gatsby-link'

import styles from "./index.module.css";
import nose from "./nose.svg";

const FrontpageLanding = () => (
  <section>
    <div className={styles.header}>
      <img src={nose} className={styles.headerImg}></img>
      <div className={styles.headerRight}>
        <h2 className={styles.subtitle}>19 juni 2018 - Oudemanhuispoort, Amsterdam</h2>
        <h1 className={styles.title}>Journalistiek in het post-truth tijdperk</h1>
        <div className={styles.ctaBlock}>
          <p className={styles.ctaText}>Bestel tickets - €135 (tot 15 mei)</p>
        </div>
        <div className={styles.ctaSupportBlock}>
          <p className={styles.ctaSupportText}>Eerste 15 freelancers - €82,50</p>
        </div>
        <div className={styles.ctaSupportBlock}>
          <p className={styles.ctaSupportText}>Studenten - €25</p>
        </div>
      </div>
    </div>
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </section>
)

export default FrontpageLanding
