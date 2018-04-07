import React from 'react'

import styles from './index.module.css';

import Speaker from './Speaker.js'
import speakers from './speakers.yaml';

const FrontpageSpeakers = () => (
  <section>
    { speakers.map((speaker, key) => {
      return <Speaker speaker={speaker} key={key}/>;
    })}
  </section>
)

export default FrontpageSpeakers
