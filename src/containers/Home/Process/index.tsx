import AnalyseSVG from "assets/analyse.svg"
import DiscoverSVG from "assets/discover.svg"
import DesignSVG from "assets/design.svg"
import DevelopSVG from "assets/develop.svg"

import useWindowSize from "helper/useWindowSize"

import styles from './index.module.css'

export default () => {
  const { width } = useWindowSize()
  return (
    <>
      <div className={styles.container}>
        <div className={styles.body}>
          <h1 className={styles.title}>
            PROCESS
          </h1>
          <AnalyseSVG className={styles.mainSvg} />
          <div className={styles.processes}>
            <Block
              title="Discover"
              description="All project starts with an idea. Here we define your goals, needs and constraints. This will be the cornerstone of our decision and plans moving forward."
              SvgElem={DiscoverSVG}
            />
            <Block
              title="Design"
              description="A product will only be as good as its design. We carefully craft a plan that will create robust product in a satisfactory amount of time without compromises."
              SvgElem={() => <DesignSVG style={{ marginLeft: -70 }} />}
              left={width ? (width < 800) : false}
            />
            <Block
              title="Develop"
              description="With 7 years of experience building products, you can leave this task fully on me. No nonsense and straight to the point. Together, we can make your imagination reality."
              SvgElem={DevelopSVG}
            />
          </div>
        </div>
      </div>
    </>
  )
}

type BlockProps = {
  title: string
  description: string
  SvgElem: any
  left?: boolean
}

const Block = ({ title, description, SvgElem, left = true }: BlockProps) => {
  return (
    <div className={styles.blockContainer}>
      {left && <SvgElem />}
      <div className={styles.blockRightContainer}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {!left && <SvgElem />}
    </div>
  )
}
