import styles from './form.module.scss'

export default function Form() {
  return (
    <form className={`${styles.form}`} action="">
      <div>
        <label htmlFor="title">title</label>
      </div>
      <div>
        <input type="text" id="title" name="title" />
      </div>

    </form>
  )
}
