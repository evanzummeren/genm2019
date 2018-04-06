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

const IndexPage = () => (
  <div>
    <FrontpageHeader />
    <FrontpageLanding />
    <FrontpageCta />
    <FrontpageSpeakers />
    <FrontpageCasestudies />
    <FrontpageDebat />
    <FrontpageLocation />
  </div>
)

export default IndexPage
