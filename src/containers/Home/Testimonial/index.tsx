import styles from "./index.module.css"

export default function HomeTestimonialIndex() {
  return (
    <div className={styles.container}>
      <div>
        <svg
          width="53"
          height="42"
          viewBox="0 0 53 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 41.398V29.6672C0 26.2937 0.625537 22.786 1.87661 19.1441C3.16559 15.4639 4.90951 11.9945 7.10837 8.73596C9.34514 5.4391 11.8473 2.65976 14.6148 0.397949L24.1685 6.66583C21.9317 10.0777 20.0551 13.6429 18.5386 17.3615C17.0601 21.0417 16.3398 25.1053 16.3777 29.5522V41.398H0ZM28.8315 41.398V29.6672C28.8315 26.2937 29.4571 22.786 30.7082 19.1441C31.9971 15.4639 33.7411 11.9945 35.9399 8.73596C38.1767 5.4391 40.6788 2.65976 43.4464 0.397949L53 6.66583C50.7632 10.0777 48.8866 13.6429 47.3702 17.3615C45.8916 21.0417 45.1713 25.1053 45.2092 29.5522V41.398H28.8315Z"
            fill="#eb6558"
          />
        </svg>
        <p>
          Michael is one of the best developers I’ve had the pleasure of
          working. He's able to bring an idea to life and explain the "why"
          along the way. His desire for iterative improvement is impressive, and
          his problem-solving ability is top-notch. He has the capacity to
          deliver world-class products and his great mentorship skills, make him
          a great team member!
        </p>
        <p className={styles.name}>Lawand Othman</p>
        <p className={styles.title}>Software Engineer</p>
        <div className={styles.logo}>
          <img
            src="/assets/img/customer-story/airfinity_white.svg"
            alt="Logo"
          />
        </div>
      </div>
      <img src="/assets/img/homepage/lawand.png" alt="Headshot" />
    </div>
  )
}
