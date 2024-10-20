import AppearText from '../appear-text'
import ContactForm from './contact-form'
import styles from './main.module.scss'

export default function Contact() {
  return (
    <div className={`${styles.contact}`}>
      <h2 className={styles.contact_title}>
        <AppearText onBackEnterRestart={false} id='appear_contact'>Contact me</AppearText>
      </h2>
      <ContactForm />
    </div>
  )
}
