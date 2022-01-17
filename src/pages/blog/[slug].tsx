import matter from "gray-matter"
import { getBlogDataFromSlug, getBlogsFileNames } from "helper/blog"
import { GetStaticPaths, GetStaticProps } from "next"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import Meta from "containers/Meta"
import Blog from "containers/Blog"

type PropTypes = {
  title: string
  description: string
  createdAt: string
  source: any
}

const components = {
  a: (props: any) => <a target="_blank" rel="noopener" {...props} />,
}

export default function BlogData({
  title,
  description,
  createdAt,
  source,
}: PropTypes) {
  return (
    <>
      <Meta title={title} description={description} />
      <Blog title={title} description={description} createdAt={createdAt}>
        <MDXRemote {...source} components={components} />
      </Blog>
    </>
  )
}

type RoutePropTypes = {
  slug: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as RoutePropTypes
  const {
    data: { title, description, createdAt },
    content,
  } = matter(getBlogDataFromSlug(slug))

  const mdxSource = await serialize(content)

  return {
    props: {
      title,
      description,
      createdAt: createdAt.toString(),
      source: mdxSource,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogFileNames = getBlogsFileNames()

  return {
    paths: blogFileNames.map((blogFileName) => {
      return {
        params: {
          slug: blogFileName.replace(/\.mdx?$/, ""),
        },
      }
    }),
    fallback: false,
  }
}
