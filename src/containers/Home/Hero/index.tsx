import React from "react"

import Canvas from './Canvas'

import ChevronDown from "assets/chevron-down.svg"

import styles from './index.module.css'

export default () => {
  return (
    <>
      <div className={styles.movingBgContainer}>
        <div className={styles.movingBg} />
      </div>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <h1>MICHAEL</h1>
          <h1>SALIM</h1>
          <h2>Full Stack Freelancer</h2>
          <h3>I make <u>your product</u> a reality.</h3>
          <h3>Simply <i>imagine</i> and consider it done.</h3>
        </div>
        <div className={styles.rightContainer}>
          <h4>About</h4>
          <h4>Blog</h4>
          <h4>Dev Notes</h4>
          <h4>Contact</h4>
        </div>
      </div>
      <Canvas />
      <div className={styles.chevronContainer}>
        <ChevronDown />
      </div>
    </>
  )
}
