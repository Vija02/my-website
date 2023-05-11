import React from "react"
import Link from "next/link"

import Favicon from "../../../public/assets/svg/icon.svg"

import styles from "./index.module.css"

export default () => {
  return (
    <div className={styles.container}>
      <Link href="/" legacyBehavior>
        <a>
          <Favicon />
        </a>
      </Link>
    </div>
  )
}
