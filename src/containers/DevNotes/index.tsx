import React from "react"

import StandardHeader from "components/StandardHeader"
import Footer from "components/Footer"
import LineBreak from "components/LineBreak"

import NotesSvg from "assets/note_taking.svg"

import styles from "./index.module.css"

import { NotesList } from "pages/dev-notes"
import Link from "next/link"

type PropTypes = {
  notesList: NotesList
}

export default ({ notesList }: PropTypes) => {
  return (
    <>
      <StandardHeader />
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <NotesSvg />
          <div>
            <h1>Development Notes</h1>
            <h3>
              This page contains various development notes I collect for future
              references
            </h3>
            <h3>All of this is available as markdown on my website’s repo</h3>
          </div>
        </div>
        <LineBreak />
        <div className={styles.bottomContainer}>
          {notesList.map(({ categoryName, notes }, i) => (
            <div key={i}>
              <h1 key={categoryName}>{categoryName}</h1>
              {notes.map((x, j) => (
                <p key={i}>
                  <Link href={`/dev-notes/${categoryName}/${x}`}>
                    <a>{x}</a>
                  </Link>
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
