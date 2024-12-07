import matter from "gray-matter"
import { getBlogDataFromSlug, getBlogsFileNames } from "helper/blog"
import { GetStaticPaths, GetStaticProps } from "next"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import Meta from "containers/Meta"
import Blog from "containers/Blog"
import rehypeShiki from "@shikijs/rehype"

type PropTypes = {
  title: string
  description: string
  image: string
  createdAt: string
  source: any
}

const components = {
  a: (props: any) => <a target="_blank" rel="noopener" {...props} />,
  TableOfContents: ({
    items,
  }: {
    items: { anchor: string; text: string }[]
  }) => (
    <div className="blog-table-of-contents">
      <span>Table of Contents</span>
      {items.map((item) => (
        <li>
          <a href={`#${item.anchor}`}>{item.text}</a>
        </li>
      ))}
    </div>
  ),
  Video: ({ src }: { src: string }) => (
    <video autoPlay loop muted style={{ width: "100%" }}>
      <source src={src} type="video/mp4" />
      Your browser does not support HTML video.
    </video>
  ),
}

export default function BlogData({
  title,
  description,
  image,
  createdAt,
  source,
}: PropTypes) {
  return (
    <>
      <Meta
        title={title}
        description={description}
        bannerUrl={`https://michaelsalim.co.uk${image}`}
      />
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
    data: { title, description, image, createdAt },
    content,
  } = matter(getBlogDataFromSlug(slug))
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [[rehypeShiki, { theme: "one-dark-pro" }]],
    },
  })

  return {
    props: {
      title,
      description,
      image,
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
