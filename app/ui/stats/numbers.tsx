import getStats from '@/app/lib/actions/stats'
import styles from './main.module.scss'

export default async function Numbers() {
  const statsObj = await getStats()
  
  return (
    <>
      <div className={`${styles.stats_number_box_item}`}>
        <span className={`${styles.stats_value}`}>{statsObj.projects}</span>
        <span className={`${styles.stats_label}`}>Projects</span>
      </div>
      <div className={`${styles.stats_number_box_item}`}>
        <span className={`${styles.stats_value}`}>{statsObj.blogs}</span>
        <span className={`${styles.stats_label}`}>Blogs</span>
      </div>
      <div className={`${styles.stats_number_box_item}`}>
        <span className={`${styles.stats_value}`}>{statsObj.abroad}</span>
        <span className={`${styles.stats_label}`}>times abroad :3</span>
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
        <span className={`${styles.stats_label}`}>times abroad :3</span>
      </div>
    </>
  )
}
