import React from "react"

import StandardHeader from "components/StandardHeader"
import Footer from "components/Footer"
import LineBreak from "components/LineBreak"

import MusicSvg from "assets/music.svg"

import styles from "./index.module.css"
import projectsStyles from "./projects.module.css"

export default () => {
  return (
    <>
      <StandardHeader />
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <img src={"/assets/img/OnlyMeBlob.png"} />
          <div className={styles.headerTextContainer}>
            <h2>
              I am a <span className={styles.color}>full stack freelancer</span>{" "}
              specialized with <u>React.js development</u>{" "}
            </h2>
            <h2>
              On the side I develop <u>Open-Source libraries</u> and{" "}
              <span className={styles.color}>Web services</span>{" "}
            </h2>
            <h3>
              <a href="#featured_projects">Explore my projects below</a>
            </h3>
          </div>
        </div>
        <LineBreak />
        <div className={styles.projectsHeader}>
          <h1 id="featured_projects">FEATURED PROJECTS</h1>
        </div>
        <div>
          <ProjectEntry
            title="CIMLOGIC"
            image="/assets/img/cimlogic-isometric.png"
            link="https://cimlogic.co.uk"
            description="MES & OEE system to drive manufacturing productivity. Curates data that is truly important"
          />
          <ProjectEntry
            title="MITUNES"
            image="/assets/img/mitunes-isometric.png"
            link="https://mitunes.tv"
            description="Secure e-commerce for iTunes codes and more. Auto redeem directly to your account"
          />
          <ProjectEntry
            title="INDONUFOOD"
            image="/assets/img/indonufood-isometric.png"
            link=""
            description="Business management software with employee management system built in"
          />
          <ProjectEntry
            title="OVERRISE"
            image="/assets/img/overrise-isometric.png"
            link="https://overrise.co.uk"
            description="Free and open source bible study tool. Read a random chapter every day"
          />
          <ProjectEntry
            title="BEYOND STARS"
            image="/assets/img/beyondstars-isometric.png"
            link=""
            description="A Visual novel puzzle playable teaser available in Play Store. Explore Alex's story and help him achieve his dream"
          />
        </div>
        <LineBreak />

        <div className={styles.musicContainer}>
          <MusicSvg />
          <div>
            <p>
              Outside software, I play <b>musical instruments</b> and{" "}
              <u>exploring cool things</u>
            </p>
            <p>
              I am exploring <b>electrical engineering</b> with the goal of
              making a <u>fully smart house</u>
            </p>
            <p>
              Contact me if you are excited to do something awesome together!
            </p>
          </div>
        </div>
      </div>

      <div className={styles.christianContainer}>
        <p>
          Most importantly, I believe in <b>Jesus Christ</b>. I believe he came
          to earth <u>2000 years ago</u> and sacrificed himself on the cross to
          pay the price of our sins.
        </p>
        <p>
          I believe Jesus was crucified and was{" "}
          <b>resurrected on the 3rd day</b>.{" "}
          <u>He is the way, the truth and the life</u>; and through him, we
          shall not perish but have eternal life.
        </p>
        <p>
          <i>
            “For God so loved the world that he gave his one and only Son, that
            whoever believes in him shall not perish but have eternal life.” -
            John 3:16 (NIV)
          </i>
        </p>
      </div>
      <Footer />
    </>
  )
}

type ProjectPropTypes = {
  title: string
  image: string
  link: string
  description: string
}

const ProjectEntry = ({
  title,
  image,
  link,
  description,
}: ProjectPropTypes) => {
  return (
    <div className={projectsStyles.projectEntry}>
      <img src={image} />
      <div>
        <div className={projectsStyles.projectHeader}>
          <h1>{title}</h1>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}
