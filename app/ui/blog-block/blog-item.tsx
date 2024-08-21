import Link from 'next/link'
import styles from './main.module.scss'
import { IoIosCalendar } from 'react-icons/io'


export default function BlogItem() {
  return (
    <div className={`${styles.blog_item}`}>
      <h2 className={`${styles.blog_item_title}`}>
        <Link href="/blog/1">How to launch Next.js on phone</Link>
      </h2>
      <p className={`${styles.blog_item_bite}`}>
        Did you once want to check your running Next.js application on phone? I
        did but it was not easy to find the solution. So far how
        create-react-app provides this out-of-the-box in Next.js You might
        struggle a lot before you know how to to do so. In this article I talk
        about this thing
      </p>
      <div
        className={`${styles.delimiter} ${styles.mb_16px} ${styles.bg_dark}`}
      ></div>
      <div className={`${styles.blog_item_box_date_tags_btn}`}>
        <div className={`${styles.blog_item_box_date}`}>
          <IoIosCalendar />
          <div className={`${styles.blog_item_box_date_date}`}>
            17 Fri August
          </div>
        </div>
        <div className={`${styles.blog_item_box_tags}`}>
          <div className={`${styles.blog_item_box_tags_tag}`}>next.js</div>
          <div className={`${styles.blog_item_box_tags_tag}`}>tricks</div>
          <div className={`${styles.blog_item_box_tags_tag}`}>mobile</div>
        </div>
        <div className={`${styles.blog_item_box_btn}`}>
          <button className={`${styles.blog_item_box_btn_btn}`}>
            Check out
          </button>
        </div>
      </div>
    </div>
  )
}
