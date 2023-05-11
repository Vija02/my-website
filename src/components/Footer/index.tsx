import React from "react"
import Link from "next/link"

import styles from "./index.module.css"

import Favicon from "../../../public/assets/svg/icon.svg"
import Linkedin from "assets/logo/linkedin-logo.svg"
import Github from "assets/logo/github-logo.svg"
import Twitter from "assets/logo/twitter-logo.svg"

export default () => {
  return (
    <>
      <div className={styles.heightPad} />
      <div className={styles.absoluteContainer}>
        <div className={styles.container}>
          <Link href="/">Home</Link>
          <Link href="/about-me">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/dev-notes">Dev Notes</Link>
          <Link href="/contact-me">Contact</Link>
          <div className={styles.socialMedia}>
            <a
              href="https://twitter.com/IamMichaelSalim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://www.linkedin.com/in/michael-salim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/vija02/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </div>
          <div className={styles.bottom}>
            <Favicon />
            <span className={styles.verse}>— John 3:16 —</span>
            <span>© {new Date().getFullYear()} Michael Salim</span>
          </div>
        </div>
      </div>
    </>
  )
}
