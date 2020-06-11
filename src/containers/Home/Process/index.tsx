import ProgrammingSvg from "assets/programming.svg"
import BulbSvg from "assets/bulb.svg"
import PresentationSvg from "assets/presentation.svg"
import CodeSvg from "assets/code.svg"

import styles from './index.module.css'

export default () => {
  return (
    <div className={styles.container}>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 0 }}>
        <div className={styles.bobAnim} style={{ animationDelay: '0.2s' }} >
          <BulbSvg className={`${styles.bobbingSvg} ${styles.bulbSvg}`} />
        </div>
        <div className={styles.bobAnim} style={{ animationDelay: '0.4s' }} >
          <PresentationSvg className={`${styles.bobbingSvg} ${styles.presentationSvg}`} />
        </div>
        <div className={styles.bobAnim} style={{ animationDelay: '0.8s' }} >
          <CodeSvg className={`${styles.bobbingSvg} ${styles.codeSvg}`} />
        </div>
      </div>
      <div className={styles.header}>
        <ProgrammingSvg className={styles.mainSvg} />
      </div>
      <div className={styles.processes}>
        <Block
          title="Discover"
          description="All project starts with an idea. Here we define your goals, needs and constraints. This will be the cornerstone of our decision and plans moving forward."
          SvgElem={BulbSvg}
        />
        <Block
          title="Design"
          description="A product will only be as good as its design. We carefully craft a plan that will create robust product in a satisfactory amount of time without compromises."
          SvgElem={PresentationSvg}
        />
        <Block
          title="Develop"
          description="With 7 years of experience building products, you can leave this task fully on me. No nonsense and straight to the point. Together, we can make your imagination reality."
          SvgElem={CodeSvg}
        />
      </div>
    </div>
  )
}

type BlockProps = {
  title: string
  description: string
  SvgElem: any
}

const Block = ({ title, description, SvgElem }: BlockProps) => {
  return (
    <div className={styles.blockContainer}>
      <div className={styles.blockTopContainer}>
        <h1>{title}</h1>
        <SvgElem />
      </div>
      <p>{description}</p>
    </div>
  )
}
