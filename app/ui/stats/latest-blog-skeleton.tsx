import styles from './latest-blogs.module.scss'

export default function LatestBlogSkeleton() {
  return (
    <div className={`${styles.latest_blogs_box_item} ${styles.latest_blogs_box_item_skeleton}`}>
      <h3 className={`${styles.latest_blogs_box_item_title} ${styles.latest_blogs_box_item_title_skeleton} shim-carcass shim-effect animate`}>
      </h3>
      <div className={`${styles.latest_blogs_box_item_readtime_box} ${styles.latest_blogs_box_item_readtime_box_skeleton}`}>
        <span className={`${styles.latest_blogs_box_item_span1} ${styles.latest_blogs_box_item_span1_skeleton} shim-carcass shim-effect animate`}></span>
        <span className={`${styles.latest_blogs_box_item_span2} ${styles.latest_blogs_box_item_span2_skeleton} shim-carcass shim-effect animate`}></span>
      </div>
    </div>
  )
}