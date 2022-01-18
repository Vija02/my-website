import matter from "gray-matter"
import { GetStaticProps } from "next"

import { getBlogDataFromSlug, getBlogsFileNames } from "helper/blog"

import Meta from "containers/Meta"
import BlogIndexPage from "containers/Blog/IndexPage"

type PropTypes = {
  data: {
    slug: string
    title: string
    description: string
    image: string
    createdAt: string
  }[]
}

export default function BlogIndex({ data }: PropTypes) {
  return (
    <>
      <Meta title="Blog" />
      <BlogIndexPage data={data} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const blogSlugs = getBlogsFileNames().map((blogFileName) =>
    blogFileName.replace(/\.mdx?$/, ""),
  )

  const data = blogSlugs
    .map((slug) => [slug, matter(getBlogDataFromSlug(slug))] as const)
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

  return {
    props: {
      data,
    },
  }
}
