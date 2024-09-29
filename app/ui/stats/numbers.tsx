import getStats from '@/app/lib/actions/stats'
import styles from './main.module.scss'
import { getTotalProjectsNumber } from '@/app/lib/actions/projects'
import { getTotalBlogsNumber } from '@/app/lib/actions/blogs'
import getTotalAbroad from '@/app/lib/actions/abroad'

export default async function Numbers() {
  const totalProjects = await getTotalProjectsNumber()
  const totalAbroad = await getTotalAbroad()
  const totalBlogs = await getTotalBlogsNumber()
  
  return (
    <>
      <div className={`${styles.stats_number_box_item}`}>
        <span className={`${styles.stats_value}`}>{totalProjects}</span>
        <span className={`${styles.stats_label}`}>Projects</span>
      </div>
      <div className={`${styles.stats_number_box_item}`}>
        <span className={`${styles.stats_value}`}>{totalBlogs}</span>
        <span className={`${styles.stats_label}`}>Blogs</span>
      </div>
      <div className={`${styles.stats_number_box_item}`}>
        <span className={`${styles.stats_value}`}>{totalAbroad}</span>
        <span className={`${styles.stats_label}`}>Times abroad (^_*)</span>
      </div>
    </>
  )
}

export function NumbersSkeleton() {
  return (
    <>
      <div className={`${styles.stats_number_box_item}`}>
        <span className={`${styles.stats_value} ${styles.stats_value_skeleton} shim-carcass shim-effect animate an_fast`}></span>
        <span className={`${styles.stats_label}`}>Projects</span>
      </div>
      <div className={`${styles.stats_number_box_item}`}>
        <span className={`${styles.stats_value} ${styles.stats_value_skeleton} shim-carcass shim-effect animate an_fast`}></span>
        <span className={`${styles.stats_label}`}>Blogs</span>
      </div>
      <div className={`${styles.stats_number_box_item}`}>
        <span className={`${styles.stats_value} ${styles.stats_value_skeleton} shim-carcass shim-effect animate an_fast`}></span>
        <span className={`${styles.stats_label}`}>Times abroad :3</span>
      </div>
    </>
  )
}
