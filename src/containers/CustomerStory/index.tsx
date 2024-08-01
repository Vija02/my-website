import React from "react"

import StandardHeader from "components/StandardHeader"
import Footer from "components/Footer"

import styles from "./index.module.css"

type PropTypes = {
  title: string
  logoLink: string
  children: React.ReactNode
}

export default function CustomerStory({
  title,
  logoLink,
  children,
}: PropTypes) {
  return (
    <>
      <StandardHeader />

      <div className={styles.outside}>
        <div className={styles.container}>
          <h2>Customer Story</h2>
          <h1>{title}</h1>
          <div className={styles.partner}>
            <div className={styles.author}>
              <img src="https://avatars.githubusercontent.com/u/5815761?s=48&v=4" />
              <div>
                <span>Michael Salim</span>
                <a
                  href="https://twitter.com/IAmMichaelSalim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.handle}
                >
                  @IAmMichaelSalim
                </a>
              </div>
            </div>
            <span style={{ fontWeight: 200, fontSize: "1.4em" }}>x</span>
            <div className={styles.logo}>
              <img src={logoLink} alt="Logo" />
            </div>
          </div>

          <div className={styles.content}>{children}</div>

          <div className={styles.plugBox}>
            <div className={styles.plugBoxTop}>
              <img src={"/assets/img/OnlyMeBlob.png"} />
              <div>
                <p>
                  Michael is a full-stack developer and the founder of{" "}
                  <a href="https://recalllab.com">Recall</a> and{" "}
                  <a href="https://dbschemalibrary.com">DbSchemaLibrary</a>. He
                  loves to make things and occasionally write articles like
                  these.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
