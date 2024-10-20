import styles from './latest-blogs.module.scss'
import LatestBlog from './latest-blog'
import LatestBlogsWrapper from './latest-blogs-wrapper'
import { Suspense } from 'react'
import LatestBlogsWrapperSkeleton from './latest-blogs-wrapper-skeleton'

export default function LatestBlogsPlaceholder() {
  return (
    <div className={`${styles.latest_blogs}`}>
      <h2 className={`${styles.latest_blogs_title}`}>Latest blogs</h2>
      <div className={`${styles.latest_blogs_box}`}>
        <LatestBlogsWrapperSkeleton length={3} />
      </div>
    </div>
  )
}
