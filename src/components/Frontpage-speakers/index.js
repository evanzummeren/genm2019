import React from 'react'

import styles from './index.module.css';

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
      <h1 className={styles.title}>{props.speaker.node.frontmatter.name}</h1>
      <h2 className={styles.subtitle}>{props.speaker.node.frontmatter.function}</h2>
      <div className={styles.text} dangerouslySetInnerHTML={{__html: props.speaker.node.html}}></div>
    </div>
    { !props.speaker.inverseImg && <SpeakerImg />}
  </div>
)

const FrontpageSpeakers = (props) => {
  console.log(props.speakers)
  return <section>
    { props.speakers.map((speaker, key) => {
      return <Speaker speaker={speaker} key={key}/>;
    })}
  </section>}

export default FrontpageSpeakers
