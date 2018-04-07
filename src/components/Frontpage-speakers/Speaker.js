import React from 'react'
import Link from 'gatsby-link'

import styles from './speaker.module.css';

import keith from './keith.png';

const SpeakerImg = () => (
  <div>
    <img src={keith} className={styles.image}></img>
  </div>
)

const Speaker = (props) => (
  <div className={styles.container}>
    { props.speaker.inverseImg && <SpeakerImg />}
    <div className={styles.block}>
      <h1 className={styles.title}>{props.speaker.name}</h1>
      <h2 className={styles.subtitle}>{props.speaker.function}</h2>
      <p className={styles.text}> {props.speaker.function}</p>
    </div>
    { !props.speaker.inverseImg && <SpeakerImg />}
  </div>
)

export default Speaker
