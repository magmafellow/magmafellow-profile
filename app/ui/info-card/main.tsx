import Image from 'next/image'
import styles from './main.module.scss'
import Link from 'next/link'
import { FaGithub, FaTelegramPlane } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import MediaList from './media-list'
import BioBox from './bio-box'
import LanguageBox from './language'
import ThemeToggle from '../toggle-theme-mode'
import AppearInnerBox from '../appear-inner-box'

export default function InfoCard() {
  return (
    <div className={`${styles.info_card}`}>
      <div className={`${styles.info_card__img_box}`}>
        <Image
          width={80}
          height={80}
          alt="profile image"
          src="/carrot.jpg"
        ></Image>
        <span>@magmafellow</span>
      </div>
      <MediaList />
      <div className={`${styles.delimiter} ${styles.mb_10px}`}></div>
      <BioBox />
      <div className={`${styles.delimiter} ${styles.mb_10px}`}></div>
      <LanguageBox />
      <ThemeToggle className={styles.themeToggle} />
    </div>
  )
}
