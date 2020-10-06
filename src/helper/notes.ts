import fs from "fs"
import path from "path"

export type NotesList = { categoryName: string; notes: string[] }[]

export const getAllNotesCategories = (): string[] => {
  return fs.readdirSync(path.join(process.cwd(), "src/data/devnotes"))
}

export const getNotesFromCategory = (category: string): string[] => {
  return fs.readdirSync(
    path.join(process.cwd(), `src/data/devnotes/${category}`),
  )
}

export const getNotesList = (): NotesList => {
  const categoryList = getAllNotesCategories()

  const notesList = categoryList.map((categoryDir) => {
    return {
      categoryName: categoryDir,
      notes: getNotesFromCategory(categoryDir),
    }
  })

  return notesList
}

export const getNotesMarkdownList = (category: string, note: string) => {
  return fs.readdirSync(
    path.join(process.cwd(), `src/data/devnotes/${category}/${note}`),
  )
}

export const getNotesData = (category: string, note: string, md: string) => {
  return fs.readFileSync(
    path.join(process.cwd(), `src/data/devnotes/${category}/${note}/${md}`),
    "utf8",
  )
}
