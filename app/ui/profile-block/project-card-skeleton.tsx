import styles from './projects.module.scss'

export default function ProjectCardSkeleton() {
  return (
    <div className={`${styles.projects_item}`}>
      <div className={`${styles.projects_imgBox}`}>
        {/* <img className={`${styles.projects_img_skeleton}`} src='/monkey-cymbals-gif.gif'/> */}
        <div className={`${styles.projects_img_skeleton}`}></div>
      </div>
      <div className={`${styles.projects_infoBox}`}>
        <h3 className={`${styles.projects_title} ${styles.projects_title_skeleton} shim-carcass shim-effect animate an_rapid`}></h3>
        <p className={`${styles.projects_description} ${styles.projects_description_skeleton} shim-carcass shim-effect animate an_fast`}>
          
        </p>
        <div className={`${styles.projects_tags_and_exploreBox}`}>
          <div className={`${styles.projects_tags}`}>
            <div className={`${styles.projects_tags_inner}`}>
              {[1, 2, 3, 4, 5].map((value) => (
                <div key={value} className={`${styles.projects_tags_item} ${styles.projects_tags_item_skeleton} shim-carcass shim-effect animate an_slow`}></div>
              ))}
            </div>
          </div>
          <div className={`${styles.projects_explore_and_timeBox}`}>
            <span className={`${styles.projects_exploreBtn} ${styles.projects_exploreBtn_skeleton}`}>
              &nbsp;
            </span>
            <div className={`${styles.projects_date} ${styles.projects_date_skeleton} shim-carcass shim-effect animate`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
