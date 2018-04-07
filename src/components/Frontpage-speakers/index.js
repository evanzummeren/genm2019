import React from 'react'
import Img from "gatsby-image";

import styles from './index.module.css';

const SpeakerImg = (props) => {
  console.log(props.img)
  return (<div>
    <Img
      resolutions={props.img.childImageSharp.resolutions}
    />
  </div>);
}

const Speaker = (props) => {
  const speakerData = props.speaker.node;
  return (<div className={styles.container}>
    { props.speaker.node.frontmatter.inverseImg && <SpeakerImg img={speakerData.frontmatter.featuredImage}/>}
    <div className={styles.block}>
      <h1 className={styles.title}>{speakerData.frontmatter.name}</h1>
      <h2 className={styles.subtitle}>{speakerData.frontmatter.function}</h2>
      <div className={styles.text} dangerouslySetInnerHTML={{__html: speakerData.html}}></div>
    </div>
    { !props.speaker.node.frontmatter.inverseImg && <SpeakerImg img={speakerData.frontmatter.featuredImage}/>}
  </div>);
}

const FrontpageSpeakers = (props) => {
  return <section>
    { props.speakers.map((speaker, key) => {
      return <Speaker speaker={speaker} key={key}/>;
    })}
  </section>}

export default FrontpageSpeakers
