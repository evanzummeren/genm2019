import React from 'react'
import Img from "gatsby-image";

import styles from "./index.module.css";

const Card = (props) => {
  const data = props.data.node;
  return (<div className={styles.container}>
    <div className={styles.block}>
      <h1 className={styles.title}>{data.frontmatter.name}</h1>
      <h2 className={styles.subtitle}>{data.frontmatter.function}</h2>
      <div className={styles.text} dangerouslySetInnerHTML={{__html: data.html}}></div>
      <Img resolutions={data.frontmatter.featuredImage.childImageSharp.resolutions} />
    </div>
  </div>)
};

export default Card
