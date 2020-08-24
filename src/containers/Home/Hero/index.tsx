import React from "react"
import Link from "next/link"

import Canvas from './Canvas'

import ChevronDown from "assets/chevron-down.svg"
import Linkedin from "assets/logo/linkedin-logo.svg"
import Github from "assets/logo/github-logo.svg"

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
          <Link href="/about-me"><a>About</a></Link>
          <a>Blog</a>
          <a>Dev Notes</a>
          <Link href="/contact-me"><a>Contact</a></Link>
          <div className={styles.socialMedia}>
            <a href="https://www.linkedin.com/in/michael-salim/" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="https://github.com/vija02/" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.chevronContainer}>
        <ChevronDown />
      </div>
      <Canvas />
    </>
  )
}
