import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

{/* Global CSS */}
import './index.css'
import './typography.css'

{/* Modular CSS */}
import styles from "./index.module.css";

import backgroundImg from "./dotgrid.svg";

const TemplateWrapper = ({ children }) => (
  <main className={styles.main} >
    <Helmet
      title="Expertisedag Nieuwe Media 2018"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children()}
  </main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
