import ExpTrack from './exp-track'
import styles from './main.module.scss'

export default function Experience() {
  return (
    <div className={`${styles.experience}`}>
      <h2 className={`${styles.experience_title}`}>Experience</h2>
      <p className={`${styles.experience_little}`}>Find out my programmer path.</p>
      <ExpTrack />
    </div>
  )
}
