import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

{/* Global CSS */}
import './index.css'
import './typography.css'

{/* Modular CSS */}
import styles from "./index.module.css";

const TemplateWrapper = ({ children }) => (
  <main className={styles.main} >
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <img className={styles.backgroundImg}></img>
    <div className={styles.body}>
      {children()}
    </div>
  </main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
