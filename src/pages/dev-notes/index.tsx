import React from "react"
import { GetStaticProps } from "next"

import Meta from "containers/Meta"
import DevNotes from "containers/DevNotes"

import { getNotesList } from "helper/notes"

export type NotesList = { categoryName: string; notes: string[] }[]

type PropTypes = {
  notesList: NotesList
}

function DevNotesIndex({ notesList }: PropTypes) {
  return (
    <>
      <Meta title="Dev Notes" />
      <DevNotes notesList={notesList} />
    </>
  )
}

export const getStaticProps: GetStaticProps<PropTypes> = async () => {
  const notesList = getNotesList()

  return { props: { notesList } }
}

export default DevNotesIndex
