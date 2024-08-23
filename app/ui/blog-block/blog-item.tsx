import Link from 'next/link'
import styles from './blog-item.module.scss'
import { IoIosCalendar } from 'react-icons/io'

export default function BlogItem({
  id,
  title,
  bite,
  date,
  tags,
}: {
  id: number,
  title: string,
  bite: string,
  date: string,
  tags: string[],
}) {
  return (
    <div className={`${styles.blog_item}`}>
      <h2 className={`${styles.blog_item_title}`}>
        <Link href="/blog/1">{title}</Link>
      </h2>
      <p className={`${styles.blog_item_bite}`}>
        {bite}
      </p>
      <div
        className={`${styles.delimiter} ${styles.mb_16px} ${styles.bg_dark}`}
      ></div>
      <div className={`${styles.blog_item_box_date_tags_btn}`}>
        <div className={`${styles.blog_item_box_date}`}>
          <IoIosCalendar />
          <div className={`${styles.blog_item_box_date_date}`}>
            {date}
          </div>
        </div>
        <div className={`${styles.blog_item_box_tags}`}>
          {tags.map((tagObj, index) => <div key={index} className={`${styles.blog_item_box_tags_tag}`}>{tagObj}</div> )}
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
