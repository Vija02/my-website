import React from "react"
import Link from "next/link"

import StandardHeader from "components/StandardHeader"
import Footer from "components/Footer"

import { SectionsData } from "pages/dev-notes/[category]/[notes]"

import styles from "./index.module.css"
import markdownStyles from "./markdown.module.css"

type PropTypes = {
  category: string
  notes: string
  sectionsData: SectionsData
}

export default ({ category, notes, sectionsData }: PropTypes) => {
  return (
    <>
      <StandardHeader />
      <div className={styles.container}>
        <Link href="/dev-notes">
          <a>{"< Back to list"}</a>
        </Link>
        <div className={styles.header}>
          <h1>{notes}</h1>
          <h2>{category}</h2>
        </div>
        <div className={styles.sectionContainer}>
          {sectionsData.map((section) => (
            <div>
              <div className={styles.sectionHeader}>{section.sectionName}</div>
              <div
                className={markdownStyles["markdown"]}
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          ))}
        </div>
        {sectionsData.length === 0 && (
          <div className={styles.empty}>
            <h2>Whoops, nothing here yet!</h2>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
