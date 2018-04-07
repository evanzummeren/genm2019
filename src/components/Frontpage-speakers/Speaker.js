import React from 'react'
import Link from 'gatsby-link'

import styles from "./speaker.module.css";

import keith from "./keith.png";


const SpeakerImg = () => (
  <div>
    <img src={keith} className={styles.image}></img>
  </div>
)

const Speaker = (props) => (
  <div className={styles.container}>
    { props.inverseImg && <SpeakerImg />}
    <div className={styles.block}>
      <h1 className={styles.title}>Keith Hammonds</h1>
      <h2 className={styles.subtitle}>Director Solutions Journalism Network</h2>
      <p className={styles.text}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    { !props.inverseImg && <SpeakerImg />}
  </div>
)

export default Speaker
