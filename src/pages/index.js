import React from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'
import Img from "gatsby-image";

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
  const headerData = data.general.edges[0].node;
  const footerData = data.general.edges[1].node;
  return (
    <div className={styles.centerer}>
      <div className={styles.page}>
        {/* Page header */}
        <header className={styles.grid}>
          <img src={logo} className={styles.logo}></img>
          <div className={styles.nav}>
            { headerData.frontmatter.navigation.map((navItem, key) => (
                <h3 className={styles.navItem} key={key}>{navItem}</h3>)
            )}
          </div>
        </header>

        {/* Landing */}
        <section className={styles.grid}>
          <img src={nose} className={styles.headerImg}></img>
          <div className={styles.headerRight}>
            <h2 className={styles.subtitle}>{headerData.frontmatter.dateLoc}</h2>
            <h1 className={styles.title}>{headerData.frontmatter.title}</h1>
            <Button text={headerData.frontmatter.button} color="purple"/>
            { headerData.frontmatter.details.map((detail, key) => {
              return (<div className={styles.detailBlock} key={key}>
                <p className={styles.detailText}>{detail}</p>
              </div>)
            })}
          </div>
          <div className={styles.landingText} dangerouslySetInnerHTML={{ __html: headerData.html }}></div>
        </section>

        {/* Speakers */}
        <section className={styles.block}>
          { data.speakers.edges.map((speaker, key) => {
            return (<Sheet speaker={speaker} key={key}/>);
          })}
        </section>

        {/* CaseStudies */}
        <section className={styles.grid}>
          <div className={styles.grid24}>
            <Marquee title="Case studies"/>
          </div>
          { data.caseStudies.edges.map((caseStudy, key) => {
            return (<div className={styles.grid6} key={key}>
              <Card data={caseStudy} key={key}/>
            </div>);
          })}
        </section>

        {/* Viewpoints */}
        <section className={styles.grid}>
          <div className={styles.grid24}>
            <Marquee title="Debat"/>
          </div>
          { data.viewpoints.edges.map((viewpoint, key) => {
            return (<div className={styles.grid6} key={key}>
              <Card data={viewpoint} key={key}/>;
            </div>);
          })}
        </section>

        {/* Location and costs */}
        <section className={classNames(styles.grid, styles.location)}>
          <div className={styles.map}>
            <Map isMarkerShown zoom={parseFloat(footerData.frontmatter.locationZoom)} location={{lat: parseFloat(footerData.frontmatter.location[0]), lng: Number(footerData.frontmatter.location[1])}}/>
          </div>
          <div className={styles.costs}>
            <div className={styles.grid12}>
              <Marquee title="Locatie & Kosten &"/>
            </div>
            <div dangerouslySetInnerHTML={{ __html: footerData.html }}></div>
          </div>
        </section>

      {/* Footer  */}
        <section className={classNames(styles.grid, styles.footer)}>
          <div className={styles.affiliates}>
            { footerData.frontmatter.logos.map((logo, key) => {
              return (<div className={styles.affiliateLogo} key={key}>
                <Img sizes={logo.childImageSharp.sizes} />
              </div>);
            })}
          </div>
          <div className={styles.footerInfo}>
            <p>{footerData.frontmatter.footerInfo}</p>
          </div>
        </section>
      </div>

      <div className={classNames(styles.centerer)}>
        <Dialog>{headerData.frontmatter.dialog}</Dialog>
      </div>

    </div>);
};

export default IndexPage

export const query = graphql`
  query indexQuery {
    general: allMarkdownRemark(
      filter: {id: {regex: "//home/general//"}},
      sort: { order: ASC, fields: [frontmatter___order]}
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            dateLoc
            button
            details
            navigation
            dialog
            marqueeTitle
            logos {
              childImageSharp {
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            footerInfo
            location
            locationZoom
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
                sizes(maxWidth: 800) {
                  ...GatsbyImageSharpSizes
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
