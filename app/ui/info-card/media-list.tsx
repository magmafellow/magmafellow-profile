import styles from './media-list.module.scss'

import Link from "next/link";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function MediaList() {
  return (
    <ul className={`${styles.media_list}`}>
        <li className={`${styles.media_li}`}>
          <Link
            href="https://t.me/polrekost"
            className={`${styles.media_link}`}
          >
            <FaTelegramPlane className={`${styles.media_img}`} />
            <span className={`${styles.media_link_value}`}>polrekost</span>
          </Link>
        </li>
        <li className={`${styles.media_li}`}>
          <Link
            href="mailto:magmafellow@gmail.com"
            className={`${styles.media_link}`}
          >
            <IoMdMail className={`${styles.media_img}`} />
            <span className={`${styles.media_link_value}`}>
              magmafellow@gmail.com
            </span>
          </Link>
        </li>
        <li className={`${styles.media_li}`}>
          <Link
            href="https://github.com/magmafellow"
            className={`${styles.media_link}`}
          >
            <FaGithub className={`${styles.media_img}`} />
            <span className={`${styles.media_link_value}`}>
              github.com/magmafellow
            </span>
          </Link>
        </li>
      </ul>
  )
}