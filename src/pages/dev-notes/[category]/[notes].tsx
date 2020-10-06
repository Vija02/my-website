import React from "react"
import { GetStaticPaths, GetStaticProps } from "next"
import matter from "gray-matter"
import remark from "remark"
import html from "remark-html"
// @ts-ignore
import highlight from "remark-highlight.js"
import hljs from "highlight.js/lib/core"

import Meta from "containers/Meta"
import DevNotesEntryComponent from "containers/DevNotes/EntryComponent"

import { getNotesMarkdownList, getNotesData, getNotesList } from "helper/notes"

import javascript from "highlight.js/lib/languages/javascript"
import typescript from "highlight.js/lib/languages/typescript"
import bash from "highlight.js/lib/languages/bash"
import css from "highlight.js/lib/languages/css"
hljs.registerLanguage("javascript", javascript)
hljs.registerLanguage("typescript", typescript)
hljs.registerLanguage("bash", bash)
hljs.registerLanguage("css", css)

export type SectionsData = {
  sectionName: string
  content: string
}[]

type PropTypes = {
  category: string
  notes: string
  sectionsData: SectionsData
}

function DevNotesEntry({ category, notes, sectionsData }: PropTypes) {
  return (
    <>
      <Meta title={`${notes} - ${category} | Dev Notes`} />
      <DevNotesEntryComponent
        category={category}
        notes={notes}
        sectionsData={sectionsData}
      />
    </>
  )
}

export default DevNotesEntry

export const getStaticPaths: GetStaticPaths = async () => {
  const notesList = getNotesList()

  const paths = notesList
    .map((category) => {
      return category.notes.map((note) => ({
        params: {
          category: category.categoryName,
          notes: note,
        },
      }))
    })
    .flat()

  return {
    paths,
    fallback: false,
  }
}

type RoutePropTypes = {
  category: string
  notes: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { category, notes } = params as RoutePropTypes

  const markdownFiles = getNotesMarkdownList(category, notes)

  let sectionsData = []

  for (const fileName of markdownFiles) {
    const { content } = matter(getNotesData(category, notes, fileName))
    const result = await remark().use(highlight).use(html).process(content)

    sectionsData.push({
      sectionName: fileName.replace(/.md/, "").replace(/_/g, " "),
      content: result.toString(),
    })
  }

  const props: PropTypes = {
    category,
    notes,
    sectionsData,
  }

  return { props }
}
