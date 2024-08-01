import Link from "next/link"
import { useRef, useState } from "react"
import useSize from "@react-hook/size"

import styles from "./index.module.css"

export default function HomeAboveAndBeyondIndex() {
  const target = useRef<HTMLDivElement>(null)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [width] = useSize(target)

  const totalCards = 2

  return (
    <div className={styles.outer}>
      <div className={styles.shapes}>
        <div className={styles.shape1} />
        <div className={styles.shape2} />
      </div>
      <div ref={target} className={styles.container}>
        <h2>ABOVE AND BEYOND</h2>
        <h1>Customer stories</h1>
        <p className={styles.subheading}>
          Times when I went above and beyond the expected work
        </p>

        <div className={styles.carousel}>
          <div className={styles.carouselButton}>
            <div
              className={carouselIndex > 0 ? styles.active : ""}
              onClick={() => {
                setCarouselIndex((x) => Math.max(x - 1, 0))
              }}
            >
              <span>➜</span>
            </div>
            <div
              className={carouselIndex < totalCards - 1 ? styles.active : ""}
              onClick={() => {
                setCarouselIndex((x) => Math.min(x + 1, totalCards - 1))
              }}
            >
              <span>➜</span>
            </div>
          </div>
          <div
            className={styles.carouselContainer}
            style={{
              transform: `translate3d(-${
                ((width * (width > 1000 ? 80 : 90)) / 100) * carouselIndex
              }px, 0px, 0px)`,
            }}
          >
            <div className={styles.card} role="group">
              <div>
                <div className={styles.topSection}>
                  <div className={styles.logo}>
                    <img
                      src="/assets/img/homepage/airfinity_logo_dark.svg"
                      alt="Logo"
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        margin: 0,
                        marginBottom: "4px",
                        fontSize: "1.2em",
                      }}
                    >
                      Load time reduction from
                    </p>
                    <h3 style={{ marginTop: 0 }}>28s {"->"} 1.8s</h3>
                  </div>
                </div>
                <div className={styles.bottomSection}>
                  <div>
                    <h4>Massive page & data optimization</h4>
                    <p>
                      Managing data volume and data silos slowed innovation In
                      pursuit of their data strategy to enhance time to market,
                      Block embarked on an active migration of their data
                      processing to the cloud.
                    </p>
                  </div>
                  <Link href="/customer-story/airfinity">
                    See the full story <span>➜</span>
                  </Link>
                </div>
              </div>
              <div>
                <img src="/assets/img/homepage/airfinity.jpg" alt="" />
              </div>
            </div>
            <div className={styles.card}>
              <div>
                <div className={styles.topSection}>
                  <div className={styles.logo}>
                    <img
                      src="/assets/img/homepage/mitunes_logo_dark.png"
                      alt="Logo"
                    />
                  </div>
                  <div>
                    <h3 style={{ marginTop: 0, marginBottom: "4px" }}>£3800</h3>
                    <p
                      style={{
                        margin: 0,
                        marginBottom: "24px",
                        fontSize: "1.2em",
                      }}
                    >
                      Assets recovered
                    </p>
                  </div>
                </div>
                <div className={styles.bottomSection}>
                  <div>
                    <h4>Lost assets uncovered through data analysis</h4>
                    <p>
                      Managing data volume and data silos slowed innovation In
                      pursuit of their data strategy to enhance time to market,
                      Block embarked on an active migration of their data
                      processing to the cloud.
                    </p>
                  </div>
                  {/* TODO: */}
                  {/* <Link href="/customer-story/mitunes">
                    See the full story <span>➜</span>
                  </Link> */}
                </div>
              </div>
              <div>
                <img src="/assets/img/homepage/mitunes.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
