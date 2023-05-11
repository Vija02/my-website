import { format } from "date-fns"
import React from "react"
import Link from "next/link"

import Footer from "components/Footer"
import StandardHeader from "components/StandardHeader"

import styles from "./index.module.css"

type PropTypes = {
  data: {
    slug: string
    title: string
    description: string
    image: string
    createdAt: string
  }[]
}

export default function BlogIndexPage({ data }: PropTypes) {
  return (
    <>
      <StandardHeader />

      <div className={styles.container}>
        <h1>Blog</h1>

        {data
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          )
          .map((d) => (
            <div className={styles.card}>
              <img
                className={styles.coverImage}
                src={d.image}
                alt="Cover image"
              />
              <div>
                <Link href={`/blog/${d.slug}`} legacyBehavior>
                  <a>
                    <h2>{d.title}</h2>
                  </a>
                </Link>
                <p className={styles.createdAtDate}>
                  {format(new Date(d.createdAt), "LLLL d, yyyy")}
                </p>
                <p>{d.description}</p>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </>
  )
}
