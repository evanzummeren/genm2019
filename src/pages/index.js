import React from 'react'
import Link from 'gatsby-link'

// Components
import Dialog from "../components/Dialog";
import Card from "../components/Card";
import Sheet from "../components/Sheet";
import Header from "../components/Header";
import Map from "../components/Map";

// Styles
import styles from "./index.module.css";

// Images
import nose from "./nose.svg";

const IndexPage = ({data}) => {
  console.log(data);
  const generalData = data.general.edges[0].node;
  return (<div>
      <Header />

      {/* Landing */}
      <section>
        <div className={styles.header}>
          <img src={nose} className={styles.headerImg}></img>
          <div className={styles.headerRight}>
            <h2 className={styles.subtitle}>{generalData.frontmatter.dateLoc}</h2>
            <h1 className={styles.title}>{generalData.frontmatter.title}</h1>
            <div className={styles.ctaBlock}>
              <p className={styles.ctaText}>{generalData.frontmatter.cta1}</p>
            </div>
            <div className={styles.ctaSupportBlock}>
              <p className={styles.ctaSupportText}>{generalData.frontmatter.cta2}</p>
            </div>
            <div className={styles.ctaSupportBlock}>
              <p className={styles.ctaSupportText}>{generalData.frontmatter.cta3}</p>
            </div>
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: generalData.html }}></div>
      </section>

      {/* Speakers */}
      <section>
        { data.speakers.edges.map((speaker, key) => {
          return <Sheet speaker={speaker} key={key}/>;
        })}
      </section>

      {/* CaseStudies */}
      <section className={styles.container}>
        { data.caseStudies.edges.map((caseStudy, key) => {
          return <Card data={caseStudy} key={key}/>;
        })}
      </section>

      {/* Viewpoints */}
      <section className={styles.container}>
        { data.viewpoints.edges.map((viewpoint, key) => {
          return <Card data={viewpoint} key={key}/>;
        })}
      </section>

      <section>
        <Map isMarkerShown location={{lat: 52.369438, lng: 4.89523}}/>
      </section>

      <Dialog>{generalData.frontmatter.dialog}</Dialog>
    </div>);
};

export default IndexPage

export const query = graphql`
  query indexQuery {
    general: allMarkdownRemark(filter: {id: {regex: "//home/general//"}}) {
      edges {
        node {
          id
          frontmatter {
            title
            dateLoc
            cta1
            cta2
            cta3
            dialog
          }
          html
        }
      }
    }
    speakers: allMarkdownRemark(filter: {id: {regex: "//home/speakers//"}}) {
      edges {
        node {
          id
          frontmatter {
            name
            function
            featuredImage {
                childImageSharp {
                  resolutions(width: 800) {
                    ...GatsbyImageSharpResolutions
                  }
                }
              }
            inverseImg
          }
          html
        }
      }
    }
    caseStudies: allMarkdownRemark(filter: {id: {regex: "//home/casestudies//"}}) {
      edges {
        node {
          id
          frontmatter {
            name
            function
            featuredImage {
                childImageSharp {
                  resolutions(width: 800) {
                    ...GatsbyImageSharpResolutions
                  }
                }
              }
            inverseImg
          }
          html
        }
      }
    }
    viewpoints: allMarkdownRemark(filter: {id: {regex: "//home/viewpoints//"}}) {
      edges {
        node {
          id
          frontmatter {
            name
            function
            featuredImage {
                childImageSharp {
                  resolutions(width: 800) {
                    ...GatsbyImageSharpResolutions
                  }
                }
              }
            inverseImg
          }
          html
        }
      }
    }
  }
`;
