import React from 'react'

import styles from './index.module.css'

type PropTypes = {
	children: React.ReactNode
}

export default React.forwardRef(({ children, ...rest }: PropTypes, ref: any) => {
	return <a className={styles.button} {...rest} ref={ref}>{children}</a>
})
