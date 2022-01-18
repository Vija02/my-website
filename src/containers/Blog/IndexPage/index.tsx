import { format } from "date-fns"
import React from "react"

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

        {data.map((d) => (
          <div className={styles.card}>
            <img
              className={styles.coverImage}
              src={d.image}
              alt="Cover image"
            />
            <div>
              <a href={`/blog/${d.slug}`}>
                <h2>{d.title}</h2>
              </a>
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
