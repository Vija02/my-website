import Link from "next/link"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

import styles from "./index.module.css"

const options: any = {
  autoPlay: true,
  background: {
    color: {
      value: "#000000",
    },
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
    opacity: 1,
  },
  backgroundMask: {
    composite: "destination-out",
    cover: {
      color: {
        value: "#fff",
      },
      opacity: 1,
    },
    enable: false,
  },
  fullScreen: false,
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true,
    },
  },
  particles: {
    shape: {
      type: "line",
    },
    size: {
      random: {
        enable: false,
        minimumValue: 1,
      },
      value: 100,
      animation: {
        count: 0,
        enable: false,
        speed: 5,
        sync: false,
        destroy: "none",
        startValue: "random",
      },
    },
    stroke: {
      color: {
        value: "#707070",
      },
      width: 1,
    },
    rotate: {
      path: true,
    },
    color: {
      value: "#fff",
      animation: {
        h: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 20,
          sync: true,
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
      },
    },
    destroy: {
      mode: "none",
      split: {
        count: 1,
        factor: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 3,
        },
        rate: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: {
            min: 4,
            max: 9,
          },
        },
        sizeOffset: true,
      },
    },
    groups: {
      z5000: {
        number: {
          value: 70,
        },
        zIndex: {
          value: 50,
        },
      },
      z7500: {
        number: {
          value: 30,
        },
        zIndex: {
          value: 75,
        },
      },
      z2500: {
        number: {
          value: 50,
        },
        zIndex: {
          value: 25,
        },
      },
      z1000: {
        number: {
          value: 40,
        },
        zIndex: {
          value: 10,
        },
      },
    },
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        sync: false,
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001,
        },
        value: 0,
        sync: false,
      },
    },
    move: {
      angle: {
        offset: 0,
        value: 10,
      },
      center: {
        x: 50,
        y: 50,
        radius: 0,
      },
      decay: 0,
      distance: {},
      direction: "right",
      drift: 0,
      enable: true,
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
        options: {},
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: false,
      size: false,
      speed: 40,
      spin: {
        acceleration: 0,
        enable: false,
      },
      straight: false,
      trail: {
        fillColor: "#000",
        enable: true,
        length: 5,
      },
      vibrate: false,
      warp: false,
    },
    number: {
      limit: 10,
      value: 10,
    },
    opacity: {
      random: {
        enable: false,
        minimumValue: 0.1,
      },
      value: 1,
      animation: {
        count: 0,
        enable: false,
        speed: 3,
        sync: false,
        destroy: "none",
        startValue: "random",
        minimumValue: 0.1,
      },
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  style: {},
  themes: [],
  zLayers: 100,
}

export default function HomeRecallIndex() {
  const particlesInit = async (main: any) => {
    await loadFull(main)
  }

  return (
    <div className={styles.container}>
      <Particles
        id="recallparticles"
        className="tsparticles"
        init={particlesInit}
        options={options}
      />
      <div>
        <h1>
          Get your projects <u>done on time</u> with Recall
        </h1>
        <p>
          Planning and risk assessment is crucial to the success of a project.
          Use Recall now to plan effectively.
        </p>
        <br />
        <br />
        <br />
        <Link href="https://recalllab.com?ref=personalhomepage" passHref>
          <a
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            Find our more {">"}
          </a>
        </Link>
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.mainImg} src="/assets/img/recall-snap.png" />
      </div>
    </div>
  )
}
