import React from "react"
import Link from 'next/link'

import styles from './index.module.css'

import Favicon from '../../../public/assets/svg/icon.svg'
import Linkedin from "assets/logo/linkedin-logo.svg"
import Github from "assets/logo/github-logo.svg"

export default () => {
  return (
    <>
      <div className={styles.heightPad} />
      <div className={styles.absoluteContainer}>
        <div className={styles.container}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/about-me"><a>About</a></Link>
          <Link href="/dev-notes"><a>Dev Notes</a></Link>
          <Link href="/contact-me"><a>Contact</a></Link>
          <div className={styles.socialMedia}>
            <a href="https://www.linkedin.com/in/michael-salim/" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="https://github.com/vija02/" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
          </div>
          <div className={styles.bottom}>
            <Favicon />
            <span className={styles.verse}>— John 3:16 —</span>
            <span>
              © {new Date().getFullYear()} Michael Salim
          </span>
          </div>
        </div>
      </div>
    </>
  )
}
