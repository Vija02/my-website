import Favicon from '../../../public/assets/svg/icon.svg'

import styles from './index.module.css'

export default () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.faviconContainer}>
          <Favicon className={styles.favicon} />
        </div>
      </div>
    </div>
  )
}