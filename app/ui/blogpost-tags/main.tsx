import styles from './main.module.scss'

export default function BlogpostTags() {
  return (
    <div className={`${styles.blogpost_tags}`}>
      <h2 className={`${styles.blogpost_tags_title}`}>Blogpost tags</h2>
      <div className={`${styles.blogpost_tags_box}`}>
        <div className={`${styles.blogpost_tags_item}`}>
          <span className={`${styles.blogpost_tags_box_label}`}>
            typescript
          </span>
          <span className={`${styles.blogpost_tags_box_value}`}>88</span>
        </div>
        <div className={`${styles.blogpost_tags_item}`}>
          <span className={`${styles.blogpost_tags_box_label}`}>css</span>
          <span className={`${styles.blogpost_tags_box_value}`}>17</span>
        </div>
        <div className={`${styles.blogpost_tags_item}`}>
          <span className={`${styles.blogpost_tags_box_label}`}>css grid</span>
          <span className={`${styles.blogpost_tags_box_value}`}>10</span>
        </div>
      </div>
    </div>
  )
}
