import React from 'react'
import Img from "gatsby-image";

import styles from "./index.module.css";

import imgSmouter from "../../content/home/viewpoints/smouter.png";

const Card = (props) => {
  const data = props.data.node;
  console.log(data);
  let blurred = "";
  if (props.data.node.frontmatter.blur === true) { blurred = styles.blur }
  return (
  <div className={styles.card+ ' ' + blurred}>
    <div className={styles.titleWrapper}>
      <h2 className={styles.title}>{data.frontmatter.name}</h2>
      <h3 className={styles.subtitle}>{data.frontmatter.function}</h3>
    </div>
    <div>
      {data.frontmatter.featuredImage && (<div className={styles.profilePic}>
        <Img className={styles.profilePic} resolutions={data.frontmatter.featuredImage.childImageSharp.resolutions} />
      </div>)}
      <div className={styles.text} dangerouslySetInnerHTML={{__html: data.html}} />
      {data.frontmatter.quote && <h2>{data.frontmatter.quote}</h2>}
    </div>
  </div>)
};

export default Card
