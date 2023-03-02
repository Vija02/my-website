import Link from "next/link"

import styles from "./index.module.css"

export default function HomeDbSchemaLibraryIndex() {
  return (
    <div className={styles.container}>
      <div>
        <h1>
          Access
          <br /> <b>100+ database schema</b> with DbSchemaLibrary
        </h1>
        <p>
          Design your database with confidence. Find the best practice for
          everything you need.
        </p>
        <p>
          Learn from the mistakes of other companies. Get your database schema
          design right the first time.
        </p>
        <br />
        <br />
        <br />
        <Link href="https://dbschemalibrary.com?ref=personalhomepage" passHref>
          <a
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            Find our more {">"}
          </a>
        </Link>
      </div>
      <div className={styles.imgContainer}>
        <img
          className={styles.mainImg}
          src="/assets/img/dbschemalibrary-snap.png"
        />
      </div>
    </div>
  )
}
