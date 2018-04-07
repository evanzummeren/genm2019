import React from 'react'
import Link from 'gatsby-link'

import styles from "./index.module.css";

import FrontpageHeader from "../components/Frontpage-header";
import FrontpageLanding from "../components/Frontpage-landing";
import FrontpageCta from "../components/Frontpage-cta";
import FrontpageSpeakers from "../components/Frontpage-speakers";
import FrontpageCasestudies from "../components/Frontpage-casestudies";
import FrontpageDebat from "../components/Frontpage-debat";
import FrontpageLocation from "../components/Frontpage-location";

const IndexPage = ({data}) => {
  return (<div>
      <FrontpageHeader />
      <FrontpageLanding />
      <FrontpageSpeakers speakers={data.speakers.edges}/>
      <FrontpageCasestudies />
      <FrontpageDebat />
      <FrontpageLocation />
      <FrontpageCta />
    </div>);
};

export default IndexPage

export const query = graphql`
  query speakers {
    speakers: allMarkdownRemark(filter: {id: {regex: "//home/speakers//"}}) {
      edges {
        node {
          id
          frontmatter {
            name
            function
            featuredImage {
                childImageSharp {
                  responsiveSizes(maxWidth: 400) {
                    src
                    srcSet
                    sizes
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
