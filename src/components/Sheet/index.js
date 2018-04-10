import React from 'react'
import Img from "gatsby-image";

import styles from './index.module.css';

const Sheet = (props) => {
  const speakerData = props.speaker.node;
  return (<div className={styles.container}>
    <Img resolutions={speakerData.frontmatter.featuredImage.childImageSharp.resolutions} />
    <div className={styles.block}>
      <h1 className={styles.title}>{speakerData.frontmatter.name}</h1>
      <h2 className={styles.subtitle}>{speakerData.frontmatter.function}</h2>
      <div className={styles.text} dangerouslySetInnerHTML={{__html: speakerData.html}}></div>
    </div>
  </div>);
}

export default Sheet
