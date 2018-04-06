import React from 'react'
import Link from 'gatsby-link'

import styles from "./index.module.css";

import FrontpageHeader from "../components/Frontpage-header";
import FrontpageLanding from "../components/Frontpage-landing";

const IndexPage = () => (
  <div>
    <FrontpageHeader />
    <FrontpageLanding />
    <section>
      {/* sprekers */}

    </section>
    <section>
      <div className="movingHeader"></div>
      {/* casestudies */}

    </section>
    <section>
      <div className="movingHeader"></div>
      {/* debat */}

    </section>
    <section>
      <div>  {/* gmaps */} </div>
      <div>  {/* foto? */} </div>
    </section>
  </div>
)

export default IndexPage
