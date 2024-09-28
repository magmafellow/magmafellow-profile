import ContactForm from './contact-form'
import styles from './main.module.scss'

export default function Contact() {
  return (
    <div className={`${styles.contact}`}>
      <h2 className={styles.contact_title}>Contact me</h2>
      <ContactForm />
    </div>
  )
}
