import styles from './main.module.scss'


export default function DefaultContainer({ children }: { children: any }) {
  return (
    <div className={`${styles.container}`}>
      {children}
    </div>
  )
}
