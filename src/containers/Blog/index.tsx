import { format } from "date-fns"
import React from "react"
import {
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share"

import StandardHeader from "components/StandardHeader"
import Footer from "components/Footer"

import styles from "./index.module.css"
import MailchimpEmbed from "./MailchimpEmbed"

type PropTypes = {
  title: string
  description: string
  createdAt: string
  children: React.ReactNode
}

export default function Blog({
  title,
  description,
  createdAt,
  children,
}: PropTypes) {
  const socials = (
    <>
      <LinkedinShareButton
        title={title}
        source="https://michaelsalim.co.uk"
        summary={description}
        url={global.window ? global.window.location.href : ""}
      >
        <LinkedinIcon size={32} bgStyle={{ fill: "transparent" }} />
      </LinkedinShareButton>
      <TwitterShareButton
        title={title}
        related={["IamMichaelSalim"]}
        url={global.window ? global.window.location.href : ""}
      >
        <TwitterIcon size={32} bgStyle={{ fill: "transparent" }} />
      </TwitterShareButton>
    </>
  )

  return (
    <>
      <StandardHeader />

      <div className={styles.container}>
        <h1>{title}</h1>
        <p>{format(new Date(createdAt), "LLLL d, yyyy")}</p>
        <div className={styles.socials}>{socials}</div>

        <div className={styles.content}>{children}</div>

        <div className={styles.socials2}>
          <span>SHARE THIS ARTICLE:</span>
          {socials}
        </div>

        <div className={styles.plugBox}>
          <div className={styles.plugBoxTop}>
            <img src={"/assets/img/OnlyMeBlob.png"} />
            <div>
              <p>
                Michael is a full-stack developer and the founder of{" "}
                <a href="https://recalllab.com">Recall</a>. He loves to make
                things and occasionally write articles like these.
              </p>
              <MailchimpEmbed />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
