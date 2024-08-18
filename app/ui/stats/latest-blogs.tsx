import { truncatePhrase } from '@/app/lib/utils'
import styles from './latest-blogs.module.scss'

export default function LatestBlogs() {
  return (
    <div className={`${styles.latest_blogs}`}>
      <h2 className={`${styles.latest_blogs_title}`}>Latest blogs</h2>
      <div className={`${styles.latest_blogs_box}`}>
        <div className={`${styles.latest_blogs_box_item}`}>
          <h3 className={`${styles.latest_blogs_box_item_title}`}>
            {truncatePhrase("Css variable's concept", 23)}
          </h3>
          <div className={`${styles.latest_blogs_box_item_readtime_box}`}>
            <span>15</span>
            <span>min</span>
          </div>
        </div>
        <div className={`${styles.latest_blogs_box_item}`}>
          <h3 className={`${styles.latest_blogs_box_item_title}`}>
            {truncatePhrase('New way to pass off Youtube block', 23)}
          </h3>
          <div className={`${styles.latest_blogs_box_item_readtime_box}`}>
            <span>5</span>
            <span>min</span>
          </div>
        </div>
        <div className={`${styles.latest_blogs_box_item}`}>
          <h3 className={`${styles.latest_blogs_box_item_title}`}>
            {truncatePhrase('Flexbox css', 23)}
          </h3>
          <div className={`${styles.latest_blogs_box_item_readtime_box}`}>
            <span>7</span>
            <span>min</span>
          </div>
        </div>
      </div>
    </div>
  )
}
