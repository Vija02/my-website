import fs from "fs"
import path from "path"

export const getBlogsFileNames = () => {
  return fs.readdirSync(path.join(process.cwd(), `src/data/blog`))
}

export const getBlogDataFromSlug = (slug: string) => {
  return fs.readFileSync(
    path.join(process.cwd(), `src/data/blog/${slug}.mdx`),
    "utf8",
  )
}
