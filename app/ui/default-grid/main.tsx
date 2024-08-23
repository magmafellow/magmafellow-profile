import NavString from '../nav-string/nav-string'
import styles from './main.module.scss'

export default function DefaultGrid({ children }: { children: any }) {
  return (
    <div className={`${styles.outer_container}`}>
      <NavString />
      <div className={`${styles.grid}`}>{children}</div>
    </div>
  )
}
