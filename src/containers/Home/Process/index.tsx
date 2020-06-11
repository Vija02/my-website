import ProgrammingSvg from "assets/programming.svg"
import BulbSvg from "assets/bulb.svg"
import PresentationSvg from "assets/presentation.svg"
import CodeSvg from "assets/code.svg"

import styles from './index.module.css'

export default () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ProgrammingSvg style={{ width: 600, flex: 1 }} />
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
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
        <div className={styles.bobAnim} style={{ animationDelay: '0.2s' }} >
          <BulbSvg style={{ color: 'white', opacity: 0.06, position: 'absolute', transform: 'rotateZ(-40deg) scale(3.5)', top: 130, left: 180 }} />
        </div>
        <div className={styles.bobAnim} style={{ animationDelay: '0.4s' }} >
          <PresentationSvg style={{ color: 'white', opacity: 0.06, position: 'absolute', transform: 'rotateZ(-5deg) scale(3.5)', top: 600, left: 550 }} />
        </div>
        <div className={styles.bobAnim} style={{ animationDelay: '0.8s' }} >
          <CodeSvg style={{ color: 'white', opacity: 0.06, position: 'absolute', transform: 'rotateZ(40deg) scale(5)', top: 100, right: 180 }} />
        </div>
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
      <h1>{title}</h1>
      <SvgElem style={{ color: "white", width: 40, paddingLeft: 10, paddingTop: 15 }} />
      <p>{description}</p>
    </div>
  )
}
