import React from 'react'
import Img from "gatsby-image";

import styles from './index.module.css';

const SpeakerImg = (props) => {
  return (<div>
    <img src={props.img.childImageSharp.responsiveSizes.src} className={styles.image}></img>
  </div>);
}

const Speaker = (props) => {
  // console.log(props.speaker)
  return (<div className={styles.container}>
    { props.speaker.node.frontmatter.inverseImg && <SpeakerImg img={props.speaker.node.frontmatter.featuredImage}/>}
    <div className={styles.block}>
      <h1 className={styles.title}>{props.speaker.node.frontmatter.name}</h1>
      <h2 className={styles.subtitle}>{props.speaker.node.frontmatter.function}</h2>
      <div className={styles.text} dangerouslySetInnerHTML={{__html: props.speaker.node.html}}></div>
    </div>
    { !props.speaker.node.frontmatter.inverseImg && <SpeakerImg img={props.speaker.node.frontmatter.featuredImage}/>}
  </div>);
}

const FrontpageSpeakers = (props) => {
  return <section>
    { props.speakers.map((speaker, key) => {
      return <Speaker speaker={speaker} key={key}/>;
    })}
  </section>}

export default FrontpageSpeakers
