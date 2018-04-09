import React from 'react'
import Link from 'gatsby-link'

import styles from "./index.module.css";

const Card = (props) => {
  const data = props.caseStudy.node;
  return (<div>
    { data.frontmatter.name }
  </div>)
};

export default Card
