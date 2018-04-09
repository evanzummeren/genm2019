import React from 'react'
import Img from "gatsby-image";

import styles from './index.module.css';

const SpeakerImg = (props) => {
  return (<div>
    <Img
      resolutions={props.img.childImageSharp.resolutions}
    />
  </div>);
}

const Sheet = (props) => {
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

export default Sheet
