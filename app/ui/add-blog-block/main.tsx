import Form from './form'
import styles from './main.module.scss'

export default function AddBlogBlock() {
  return (
    <div className={`${styles.add}`}>
      <h1 className={`${styles.add_page_title} -mb-1`}>Create new blogpost</h1>
      <p className={`${styles.add_page_desc} mb-2`}>Blogpost constructor</p>
      <Form />
    </div>
  )
}
