import React from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'

// Components
import Dialog from "../components/Dialog";
import Card from "../components/Card";
import Sheet from "../components/Sheet";
import Map from "../components/Map";
import Marquee from "../components/Marquee";
import Button from "../components/Button";

// Styles
import styles from "./index.module.css";

// Images
import logo from "./logo.svg";
import nose from "./nose.svg";

const IndexPage = ({data}) => {
  console.log(data);
  const generalData = data.general.edges[0].node;
  return (<main className={styles.main}>

      {/* Page header */}
      <section className={styles.block}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo}></img>
          <div className={styles.nav}>
            <h3 className={styles.navItem}>Sprekers</h3>
            <h3 className={styles.navItem}>Programma</h3>
            <h3 className={styles.navItem}>Tickets</h3>
            <h3 className={styles.navItem}>Over</h3>
          </div>
        </div>
      </section>

      {/* Landing */}
      <section className={styles.block}>
        <div className={styles.landing}>
          <img src={nose} className={styles.headerImg}></img>
          <div className={styles.headerRight}>
            <h2 className={styles.subtitle}>{generalData.frontmatter.dateLoc}</h2>
            <h1 className={styles.title}>{generalData.frontmatter.title}</h1>
            <Button text={generalData.frontmatter.button} color="purple"/>
            { generalData.frontmatter.details.map((detail, key) => {
              return (<div className={styles.detailBlock} key={key}>
                <p className={styles.detailText}>{detail}</p>
              </div>)
            })}
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: generalData.html }}></div>
      </section>

      {/* Speakers */}
      <section className={styles.block}>
        { data.speakers.edges.map((speaker, key) => {
          return <Sheet speaker={speaker} key={key}/>;
        })}
      </section>

      {/* CaseStudies */}
      <section className={styles.block}>
        <Marquee title="Case studies"/>
        <div className={styles.container}>
          { data.caseStudies.edges.map((caseStudy, key) => {
            return <Card data={caseStudy} key={key}/>;
          })}
        </div>
      </section>

      {/* Viewpoints */}
      <section className={styles.block}>
        <Marquee title="Debat"/>
        <div className={styles.container}>
          { data.viewpoints.edges.map((viewpoint, key) => {
            return <Card data={viewpoint} key={key}/>;
          })}
        </div>
      </section>

      <section className={styles.block}>
        <Map isMarkerShown location={{lat: 52.369438, lng: 4.89523}}/>
      </section>

      <Dialog>{generalData.frontmatter.dialog}</Dialog>
    </main>);
};

export default IndexPage

export const query = graphql`
  query indexQuery {
    general: allMarkdownRemark(
      filter: {id: {regex: "//home/general//"}}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            dateLoc
            button
            details
            dialog
          }
          html
        }
      }
    }
    speakers: allMarkdownRemark(
      filter: {id: {regex: "//home/speakers//"}},
      sort: { order: ASC, fields: [frontmatter___order]}
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            function
            featuredImage {
                childImageSharp {
                  resolutions(width: 300) {
                    ...GatsbyImageSharpResolutions
                  }
                }
              }
          }
          html
        }
      }
    }
    caseStudies: allMarkdownRemark(
      filter: {id: {regex: "//home/casestudies//"}},
      sort: { order: ASC, fields: [frontmatter___order]}
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            function
            featuredImage {
                childImageSharp {
                  resolutions(width: 200) {
                    ...GatsbyImageSharpResolutions
                  }
                }
              }
          }
          html
        }
      }
    }
    viewpoints: allMarkdownRemark(
      filter: {id: {regex: "//home/viewpoints//"}},
      sort: { order: ASC, fields: [frontmatter___order]}
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            function
            quote
            featuredImage {
                childImageSharp {
                  resolutions(width: 200) {
                    ...GatsbyImageSharpResolutions
                  }
                }
              }
          }
          html
        }
      }
    }
  }
`;
