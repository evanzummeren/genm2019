import React from 'react'
import Img from "gatsby-image";

import styles from "./index.module.css";

const Card = (props) => {
  const data = props.data.node;
  return (
  <div className={styles.card}>
    <div className={styles.titleWrapper}>
      <h2 className={styles.title}>{data.frontmatter.name}</h2>
      <h3 className={styles.subtitle}>{data.frontmatter.function}</h3>
    </div>
    <div className={styles.text} dangerouslySetInnerHTML={{__html: data.html}}></div>
    {data.frontmatter.quote && <h2>{data.frontmatter.quote}</h2>}
    {data.frontmatter.featuredImage && <Img resolutions={data.frontmatter.featuredImage.childImageSharp.resolutions} />}
  </div>)
};

export default Card
