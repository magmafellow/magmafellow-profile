import Link from 'next/link'
import styles from './blog-item.module.scss'
import { IoIosCalendar } from 'react-icons/io'
import { getTagsToBlog } from '@/app/lib/actions/blogs'

export default async function BlogItem({
  id,
  title,
  bite,
  content,
  date_created,
}: {
  id: number,
  title: string,
  bite: string,
  content: string,
  date_created: Date,
}) {
  // const tags = ['typescirpt', 'css']  // tags are got by id prop (id of blog)
  const tags = await getTagsToBlog(id, 99)
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
            {date_created.getDay()}
          </div>
        </div>
        <div className={`${styles.blog_item_box_tags}`}>
          {tags?.map((tagObj, index) => <div key={index} className={`${styles.blog_item_box_tags_tag}`}>{tagObj}</div> )}
        </div>
        <div className={`${styles.blog_item_box_btn}`}>
          <Link href='/blog/1' className={`${styles.blog_item_box_btn_btn}`}>
            Check out
          </Link>
        </div>
      </div>
    </div>
  )
}
