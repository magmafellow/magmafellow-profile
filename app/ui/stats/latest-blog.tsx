import { truncatePhrase } from '@/app/lib/utils'
import styles from './latest-blogs.module.scss'
import Link from 'next/link'

export default function LatestBlog({
  id,
  title,
  minToRead,
}: {
  id: number
  title: string
  minToRead?: number | null
}) {
  return (
    <Link href={`/blog/${id}`} className={`${styles.latest_blogs_box_item}`}>
      <h3 className={`${styles.latest_blogs_box_item_title}`}>
        {truncatePhrase(title, 23)}
      </h3>
      <div className={`${styles.latest_blogs_box_item_readtime_box}`}>
        <span className={styles.latest_blogs_box_item_span1}>{minToRead ? minToRead : ' '}</span>
        <span className={styles.latest_blogs_box_item_span2}>{minToRead ? 'min' : ' '}</span>
      </div>
    </Link>
  )
}
