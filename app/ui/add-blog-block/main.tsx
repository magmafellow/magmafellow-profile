import Form from './form'
import styles from './main.module.scss'

export default function AddBlogBlock() {
  return (
    <div className={`${styles.add}`}>
      <h1 className={`${styles.add_page_title}`}>Create new blogpost</h1>
      <p className={`${styles.add_page_desc}`}>Blogpost constructor</p>
      <Form />
    </div>
  )
}
