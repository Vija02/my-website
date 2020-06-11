import React from "react"
import { WordCloud, Radar } from '@ant-design/charts'
import { RadarConfig } from '@ant-design/charts/lib/radar/index'
import { WordCloudConfig } from '@ant-design/charts/lib/wordCloud/index'

import radarData from 'data/skillRadar'
import wordCloudData from 'data/wordMap'
import useWindowSize from "helper/useWindowSize"

import styles from './index.module.css'

const wordCloudConfig: Partial<WordCloudConfig> = {
  wordStyle: {
    rotation: [-Math.PI / 2, Math.PI / 2],
    rotateRatio: 0.5,
    rotationSteps: 4,
    fontSize: [10, 60],
    color: (word, weight) => {
      const arr = [
        '#5B8FF9',
        '#5AD8A6',
        '#5D7092',
        '#F6BD16',
        '#E8684A',
        '#6DC8EC',
        '#9270CA',
        '#FF9D4D',
        '#269A99',
        '#FF99C3',
      ]
      return arr[Math.floor(Math.random() * (arr.length - 1))]
    },
    active: {
      shadowColor: '#333333',
      shadowBlur: 10,
    },
    gridSize: 8,
  },
  shape: 'square',
  shuffle: false,
  tooltip: { visible: false, items: [] },
  selected: -1,
}

const radarConfig: RadarConfig = {
  angleField: 'item',
  radiusField: 'score',
  seriesField: 'user',
  radiusAxis: {
    grid: {
      line: {
        type: 'line',
      },
    },
  },
  line: {
    visible: true,
    style: { stroke: '#5b8ff9' }
  },
  area: {
    style: { fill: '#5b8ff9' }
  },
  point: {
    visible: true,
    shape: 'circle',
    style: { fillOpacity: 0, stroke: '#5b8ff9' }
  },
  legend: {
    visible: true,
    position: 'bottom-center',
  },
  tooltip: { visible: false },
  color: ['lightblue'],
  forceFit: true
}


export default () => {
  const { width } = useWindowSize()

  let calcWidth = 0

  if (width) {
    if (width <= 1250) {
      calcWidth = width * 85 / 100
    } else {
      calcWidth = width ? width / 2 : 0
    }
  }

  return (
    <div className={styles.container}>
      <h1>Over 150 Technologies Used..</h1>
      <p>and counting more each day!</p>
      <div className={styles.skillsBody}>
        <div className={styles.wordCloudContainer}>
          <WordCloud
            {...wordCloudConfig}
            data={wordCloudData.map((x, i) => ({ id: i, word: x.name, weight: x.value }))}
            width={calcWidth}
            height={600}
          />
        </div>
        <div className={styles.skillRadarContainer}>
          <Radar
            {...radarConfig}
            data={radarData}
            width={calcWidth}
            height={600}
          />
        </div>
      </div>
    </div>
  )
}
