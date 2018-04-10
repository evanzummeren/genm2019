import React from 'react'
import Link from 'gatsby-link'

// Components
import Dialog from "../components/Dialog";
import Card from "../components/Card";
import Sheet from "../components/Sheet";
import Header from "../components/Header";

// Styles
import styles from "./index.module.css";

// Images
import nose from "./nose.svg";

const IndexPage = ({data}) => {
  console.log(data);
  return (<div>
      <Header />

      {/* Headerblock */}
      <section>
        <div className={styles.header}>
          <img src={nose} className={styles.headerImg}></img>
          <div className={styles.headerRight}>
            <h2 className={styles.subtitle}>19 juni 2018 - Oudemanhuispoort, Amsterdam</h2>
            <h1 className={styles.title}>Journalistiek in het post-truth tijdperk</h1>
            <div className={styles.ctaBlock}>
              <p className={styles.ctaText}>Bestel tickets - €135 (tot 15 mei)</p>
            </div>
            <div className={styles.ctaSupportBlock}>
              <p className={styles.ctaSupportText}>Eerste 15 freelancers - €82,50</p>
            </div>
            <div className={styles.ctaSupportBlock}>
              <p className={styles.ctaSupportText}>Studenten - €25</p>
            </div>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

      {/* Speakers */}
      <section>
        { data.speakers.edges.map((speaker, key) => {
          return <Sheet speaker={speaker} key={key}/>;
        })}
      </section>

      {/* CaseStudies */}
      <section>
        { data.caseStudies.edges.map((caseStudy, key) => {
          return <Card data={caseStudy} key={key}/>;
        })}
      </section>

      {/* Viewpoints */}
      <section>
        { data.viewpoints.edges.map((viewpoint, key) => {
          return <Card data={viewpoint} key={key}/>;
        })}
      </section>

      <Dialog>Tot 15 mei vroegboekkorting. Regulier - E135. Freelancers - E82,50. Studenten - E20</Dialog>
    </div>);
};

export default IndexPage

export const query = graphql`
  query indexQuery {
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
