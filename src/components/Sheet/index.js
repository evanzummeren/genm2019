import React from 'react'
import Img from "gatsby-image";

import styles from './index.module.css';

const Sheet = (props) => {
  const speakerData = props.speaker.node;
  return (<div className={styles.container}>
    <div className={styles.imageWrapper}>
      <Img sizes={speakerData.frontmatter.featuredImage.childImageSharp.sizes} />
    </div>
    <div className={styles.contentWrapper}>
      <h2 className={styles.title}>{speakerData.frontmatter.name}</h2>
      <h3 className={styles.subtitle}>{speakerData.frontmatter.function}</h3>
      <div className={styles.columns}>
        <div
          className={styles.text}
          dangerouslySetInnerHTML={{__html: speakerData.html}}
        />
      </div>
    </div>
  </div>);
}

export default Sheet
