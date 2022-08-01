const matter = require("gray-matter")
const fs = require("fs")
const path = require("path")
const { Feed } = require("feed")

const getBlogsFileNames = () => {
  return fs.readdirSync(path.join(process.cwd(), `src/data/blog`))
}

const getBlogDataFromSlug = (slug) => {
  return fs.readFileSync(
    path.join(process.cwd(), `src/data/blog/${slug}.mdx`),
    "utf8",
  )
}

const feed = new Feed({
  title: "Michael Salim Blogs",
  description: "This is my personal blog posts",
  id: "https://michaelsalim.co.uk/blog/",
  link: "https://michaelsalim.co.uk/blog/",
  language: "en",
  favicon: "https://michaelsalim.co.uk/favicon/favicon-16x16.png",
  copyright: "All rights reserved 2022, Michael Salim",
  author: {
    name: "Michael Salim",
    email: "hi@michaelsalim.co.uk",
    link: "https://michaelsalim.co.uk",
  },
})

const blogSlugs = getBlogsFileNames().map((blogFileName) =>
  blogFileName.replace(/\.mdx?$/, ""),
)

const data = blogSlugs
  .map((slug) => [slug, matter(getBlogDataFromSlug(slug))])
  .map(
    ([
      slug,
      {
        data: { title, description, image, createdAt },
      },
    ]) => ({
      slug,
      title,
      description,
      image,
      createdAt: createdAt.toString(),
    }),
  )

data.sort((postB, postA) => new Date(postA.createdAt) - new Date(postB.createdAt)).forEach((post) => {
  feed.addItem({
    title: post.title,
    id: `https://michaelsalim.co.uk/blog/${post.slug}`,
    link: `https://michaelsalim.co.uk/blog/${post.slug}`,
    description: post.description,
    author: [
      {
        name: "Michael Salim",
        email: "hi@michaelsalim.co.uk",
        link: "https://michaelsalim.co.uk",
      },
    ],
    date: new Date(post.createdAt),
    image: `https://michaelsalim.co.uk${post.image}`,
  })
})

const xml = feed.rss2()

fs.writeFileSync(path.resolve(__dirname, "public") + "/feed.xml", xml)

