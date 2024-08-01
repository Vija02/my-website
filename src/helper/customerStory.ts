import fs from "fs"
import path from "path"

export const getCustomerStoriesFileNames = () => {
  return fs.readdirSync(path.join(process.cwd(), `src/data/customer-story`))
}

export const getCustomerStoryDataFromSlug = (slug: string) => {
  return fs.readFileSync(
    path.join(process.cwd(), `src/data/customer-story/${slug}.mdx`),
    "utf8",
  )
}
