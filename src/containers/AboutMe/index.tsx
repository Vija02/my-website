import React from 'react'

import StandardHeader from 'components/StandardHeader'
import Footer from 'components/Footer'
import LineBreak from 'components/LineBreak'

import MusicSvg from 'assets/music.svg'

import styles from './index.module.css'
import projectsStyles from './projects.module.css'

export default () => {
  return (
    <>
      <StandardHeader />
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <img src={'/assets/img/OnlyMeBlob.png'} />
          <div className={styles.headerTextContainer}>
            <h2>I am a <span className={styles.color}>full stack freelancer</span> specialized with <u>React.js development</u> </h2>
            <h2>On the side I develop <u>Open-Source libraries</u> and <span className={styles.color}>Web services</span> </h2>
            <h3><u>Explore my projects below</u></h3>
          </div>
        </div>
        <LineBreak />
        <div className={styles.projectsHeader}>
          <h1>FEATURED PROJECTS</h1>
        </div>
        <div>
          <ProjectEntry
            title="CIMLOGIC"
            image="/assets/img/cimlogic-isometric.png"
            link="https://cimlogic.co.uk"
            description="MES & OEE system to drive manufacturing productivity"
          />
          <ProjectEntry
            title="MITUNES"
            image="/assets/img/mitunes-isometric.png"
            link="https://mitunes.tv"
            description="Secure e-commerce for iTunes codes and more"
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
            description="Free and open source bible study tool"
          />
          <ProjectEntry
            title="BEYOND STARS"
            image="/assets/img/beyondstars-isometric.png"
            link="https://michaelsalim.co.uk/stars"
            description="A Visual novel puzzle playable teaser available in Play Store"
          />
        </div>
        <LineBreak />

        <div className={styles.musicContainer}>
          <MusicSvg />
          <div>
            <p>Outside software, I play <b>musical instruments</b> and <b>exploring cool things</b></p>
            <p>I am exploring <b>electrical engineering</b> with the goal of making a <b>fully smart house</b></p>
            <p><b>Contact me</b> if you are excited to do something awesome together!</p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

type ProjectPropTypes = {
  title: string
  image: string
  link: string
  description: string
}

const ProjectEntry = ({ title, image, link, description }: ProjectPropTypes) => {
  return (
    <div className={projectsStyles.projectEntry}>
      <img src={image} />
      <div>
        <div className={projectsStyles.projectHeader}>
          <h1>{title}</h1>
          <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}