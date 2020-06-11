import React, { useCallback, useRef } from 'react'
import { Canvas } from 'react-three-fiber'

import Sparks from './Sparks'
import styles from './Canvas.module.css'

export default () => {
  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])
  // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  return (
    <Canvas
      className={styles.canvas}
      style={{ height: '100vh', position: "absolute", top: 0, right: 0 }}
      pixelRatio={1}
      // pixelRatio={Math.min(2, isMobile ? window.devicePixelRatio : 1)}
      camera={{ fov: 100, position: [0, 0, 80] }}
      onMouseMove={onMouseMove}
      gl={{ alpha: true }}
    >
      {/* <pointLight distance={100} intensity={400} color="white" /> */}
      <Sparks count={20} mouse={mouse} colors={['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']} />
    </Canvas>
  )
}
