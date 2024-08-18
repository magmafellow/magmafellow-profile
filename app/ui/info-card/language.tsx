import styles from './language.module.scss'


export default function LanguageBox() {
  return (
    <div className={`${styles.language}`}>
      <ul className={`${styles.language_list}`}>
        <li className={`${styles.language_li}`}>
          <span className={`${styles.language_label}`}>en</span>
          <span className={`${styles.language_delim}`}>-</span>
          <span className={`${styles.language_value}`}>c2</span>
        </li>
        <li className={`${styles.language_li}`}>
          <span className={`${styles.language_label}`}>ru</span>
          <span className={`${styles.language_delim}`}>-</span>
          <span className={`${styles.language_value}`}>fluent</span>
        </li>
      </ul>
    </div>
  )
}
