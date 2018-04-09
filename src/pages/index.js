import React from 'react'
import Link from 'gatsby-link'

import styles from "./index.module.css";

// components
import Dialog from "../components/Dialog";
import Card from "../components/Card";
import Sheet from "../components/Sheet";

// blocks pretending to be components
import FrontpageHeader from "../components/Frontpage-header";
import FrontpageLanding from "../components/Frontpage-landing";
import FrontpageDebat from "../components/Frontpage-debat";
import FrontpageLocation from "../components/Frontpage-location";

const IndexPage = ({data}) => {
  console.log(data);
  return (<div>
      <FrontpageHeader />
      <FrontpageLanding />

      {/* Speakers */}
      <section>
        { data.speakers.edges.map((speaker, key) => {
          return <Sheet speaker={speaker} key={key}/>;
        })}
      </section>

      {/* CaseStudies */}
      <section>
        { data.caseStudies.edges.map((caseStudy, key) => {
          return <Card caseStudy={caseStudy} key={key}/>;
        })}
      </section>

      {/* Viewpoints */}
      <section>
        { data.viewpoints.edges.map((viewpoint, key) => {
          return <Card caseStudy={viewpoint} key={key}/>;
        })}
      </section>

      <FrontpageLocation />
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
                  resolutions(width: 400) {
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
                  resolutions(width: 400) {
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
                  resolutions(width: 400) {
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
