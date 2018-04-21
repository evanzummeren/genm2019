import React from 'react'
import classNames from 'classnames'
import Link from "gatsby-link"
import bowser from "bowser"

import logoSVG from "../images/logo.svg"
import logoPNG from "../images/logo.png"

import stylesGrid from "../pages/landingpage/grid.module.css"
import stylesHeader from "../pages/landingpage/header.module.css"
const styles = {
  ...stylesGrid,
  ...stylesHeader
}

export default function Template({data}) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div className={styles.screen}>
      <div
        className={styles.page}
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
        <header
          className={classNames(styles.grid, styles.header)}
          style={{
            flexGrow: 0
          }}>
          {bowser.msie ?
            <img className={styles.logo} src={logoPNG}/> :
            <img className={styles.logo} src={logoSVG}/>
          }
        </header>
        <div
          style={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2.4rem 2.4rem 9.6rem'
          }}
        >
          <h1 style={{margin: 0}}>{frontmatter.title}</h1>
          <h3>{frontmatter.date}</h3>
          <div
            style={{maxWidth: '50rem'}}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  )
};


// <header
//   className={classNames(styles.grid, styles.header)}
//   style={{
//     flexGrow: 0
//   }}>
//   <img className={styles.logo} src={logo}/>
// </header>


export const pageQuery = graphql`
  query MyOwnBlogThingy($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
