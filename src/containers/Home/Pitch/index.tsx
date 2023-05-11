import Typed from "react-typed"
import Link from "next/link"

import BloggingSvg from "assets/blogging.svg"

import Button from "components/Button"

import styles from "./index.module.css"

export default () => {
  return (
    <div className={styles.container}>
      <div>
        <h1>
          I build{" "}
          <Typed
            strings={["websites", "apps", "games"]}
            typeSpeed={70}
            backSpeed={70}
            backDelay={2300}
            loop
            style={{ color: "#eb6558" }}
          />
        </h1>
        <h1>
          Get yours made <u>today</u>
        </h1>
        <p>
          Online presence is vital for aspiring businesses. Knock the doors of
          over <b>4.33 billion</b> internet users. It's not too late to start
          now.
        </p>
        <br />
        <br />
        <br />
        <Link href="/contact-me" legacyBehavior passHref>
          <Button>Contact Now</Button>
        </Link>
        <Link href="/about-me" className={styles.secondaryButton}>
          More about me
        </Link>
      </div>
      <BloggingSvg className={styles.mainSvg} />
    </div>
  )
}
