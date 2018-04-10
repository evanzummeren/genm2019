import React from 'react'

import Marquee from 'marquee-react-dwyer';

import styles from "./index.module.css";

const RollingTitle = (props) => {
  return (<div className={styles.container}>
    <Marquee
        Size={"h1"}
        NumberOfOptions={"1"}
        Index0={"DEBAT DEBAT DEBAT DEBAT DEBAT DEBAT DEBAT DEBAT DEBAT DEBAT DEBAT DEBAT"}
        TimeToCross={"10000"}
        TimeToChange={"2000"}
        IsRandom={"true"}
        Color={"white"}
      />
  </div>)
}

export default RollingTitle
//
// {Array.apply(null, { length: 10 }).map((value, key) => {
//   return <h1 key={key}>{props.title}</h1>
// })}
