import { IoIosCalendar } from 'react-icons/io'
import styles from './blog-item.module.scss'

export default function BlogItemSkeleton() {
  return (
    <div className={`${styles.blog_item}`}>
      <h2 className={`${styles.blog_item_title}`}>
        <span
          className={`${styles.blog_item_title_link} ${styles.blog_item_title_link_skeleton} shim-carcass shim-effect animate`}
        ></span>
      </h2>
      <p
        className={`${styles.blog_item_bite} ${styles.blog_item_bite_skeleton} shim-carcass shim-effect animate`}
      ></p>
      <div
        className={`${styles.delimiter} ${styles.mb_16px} ${styles.bg_dark} ${styles.bg_dark_skeleton}`}
      ></div>
      <div className={`${styles.blog_item_box_date_tags_btn}`}>
        <div
          className={`${styles.blog_item_box_date} ${styles.blog_item_box_date_skeleton}`}
        >
          <IoIosCalendar />
          <div
            className={`${styles.blog_item_box_date_date} ${styles.blog_item_box_date_date_skeleton} shim-carcass shim-effect animate`}
          ></div>
        </div>
        <div className={`${styles.blog_item_box_tags}`}>
          <div className={`${styles.blog_item_box_tags_tag} ${styles.blog_item_box_tags_tag_skeleton} shim-carcass shim-effect animate`}></div>
          <div className={`${styles.blog_item_box_tags_tag} ${styles.blog_item_box_tags_tag_skeleton} shim-carcass shim-effect animate`}></div>
          <div className={`${styles.blog_item_box_tags_tag} ${styles.blog_item_box_tags_tag_skeleton} shim-carcass shim-effect animate`}></div>
        </div>
        <div className={`${styles.blog_item_box_btn}`}>
          <button
            className={`${styles.blog_item_box_btn_btn} ${styles.blog_item_box_btn_btn_skeleton}`}
          ></button>
        </div>
      </div>
    </div>
  )
}
