import styles from './bio-box.module.scss'


export default function BioBox() {
  return (
    <div className={`${styles.bio_box}`}>
      <h2 className={`${styles.bio_box_title}`}>Bio</h2>
      <p className={`${styles.bio_box_text}`}>
        In IRL they call me alex. age of 19. I reside in Moscow, Russia. Enjoy
        coding and software engineering
      </p>
    </div>
  )
}
