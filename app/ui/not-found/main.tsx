import Link from 'next/link';
import styles from './main.module.scss'
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className={`${styles.page}`}>
      <div className={`${styles.page_title}`}>404</div>
      <div className={`${styles.page_desc}`}>Page was not found. Maybe you got lost</div>
      <div className={`${styles.page_home}`}>
        <Link href='/' className={`${styles.page_home_btn}`}>
          <FaLongArrowAltLeft />
          <span>home</span>
        </Link>
      </div>
    </div>
  )
}