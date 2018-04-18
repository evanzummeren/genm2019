import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import bowser from 'bowser';

{/* Global CSS */}
import './index.css'
import './typography.css'

{/* Modular CSS */}
import styles from "./index.module.css";

import backgroundImg from "./dotgrid.svg";

const TemplateWrapper = ({ children }) => {
  console.log(bowser);
  return (<main className={styles.main} >
    <Helmet
      title="Expertisedag Nieuwe Media 2018"
      meta={[
        { name: 'description', content: 'Met trots presenteert het Expertisecentrum Journalistiek op dinsdag 19 juni 2018 voor de achtste achtereenvolgende keer: De Grote Expertisedag Nieuwe Media #8' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    Browser is {bowser.msie && "Internet explorer"}
    {bowser.msie && <div className={styles.browserCatch}><h1>Deze website ondersteund internet explorer niet. U wordt aangeraden uw browser te updaten</h1></div> }
    {children()}
  </main>
)}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
