import React from "react"

import styles from "./index.module.css"

import Linkedin from "assets/logo/linkedin-logo.svg"
import Github from "assets/logo/github-logo.svg"

export default () => {
  return (
    <div className={styles.container}>
      <img src="/assets/img/headshot.jpg" alt="Head shot" />
      <div>
        <p className={styles.hireme}>Hire Me!</p>
        <p className={styles.subheading}>
          Available for a remote contract work
        </p>
        <p className={styles.content}>
          Michael is a full-stack developer and the founder of{" "}
          <a href="https://recalllab.com">Recall</a> and{" "}
          <a href="https://dbschemalibrary.com">DbSchemaLibrary</a>.
        </p>
        <p className={styles.content}>
          He primarily works with React codebases but is proficient in all
          aspects of the stack, including back-end development and system
          operations.
        </p>

        <div className={styles.cta}>
          <a href="mailto:hi@michaelsalim.co.uk">
            <button className={styles.primaryButton}>
              ✉️ Send me an email
            </button>
          </a>
          <a
            href="https://calendly.com/michael-salim/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>📞 Book a call</button>
          </a>
          <div className={styles.socials}>
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
        </div>
      </div>
    </div>
  )
}
