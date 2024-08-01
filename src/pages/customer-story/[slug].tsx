import matter from "gray-matter"
import {
  getCustomerStoriesFileNames,
  getCustomerStoryDataFromSlug,
} from "helper/customerStory"
import { GetStaticPaths, GetStaticProps } from "next"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import Meta from "containers/Meta"
import CustomerStory from "containers/CustomerStory"

type PropTypes = {
  title: string
  logoLink: string
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

export default function BlogData({ title, logoLink, source }: PropTypes) {
  return (
    <>
      <Meta title={title} />
      <CustomerStory title={title} logoLink={logoLink}>
        <MDXRemote {...source} components={components} />
      </CustomerStory>
    </>
  )
}

type RoutePropTypes = {
  slug: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as RoutePropTypes
  const {
    data: { title, logoLink },
    content,
  } = matter(getCustomerStoryDataFromSlug(slug))

  const mdxSource = await serialize(content)

  return {
    props: {
      title,
      logoLink: logoLink,
      source: mdxSource,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const customStoryFileNames = getCustomerStoriesFileNames()

  return {
    paths: customStoryFileNames.map((customStoryFileName) => {
      return {
        params: {
          slug: customStoryFileName.replace(/\.mdx?$/, ""),
        },
      }
    }),
    fallback: false,
  }
}
