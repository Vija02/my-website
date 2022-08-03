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
  return (
    <>
      <StandardHeader />

      <div className={styles.container}>
        <h1>{title}</h1>
        <p>{format(new Date(createdAt), "LLLL d, yyyy")}</p>
        <div className={styles.author}>
          <img src="https://avatars.githubusercontent.com/u/5815761?s=48&v=4" />
          <div>
            <span>Michael Salim</span>
            <a
              href="https://twitter.com/IAmMichaelSalim"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.handle}
            >
              @IAmMichaelSalim
            </a>
          </div>
        </div>

        <div className={styles.content}>{children}</div>

        <div className={styles.socials}>
          <span>SHARE THIS ARTICLE:</span>
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
