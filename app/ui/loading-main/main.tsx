import styles from './main.module.scss'
import { VscLoading } from "react-icons/vsc";

export default function LoadingMain() {
  return (
    <div className={`${styles.loading}`}>
      <div className={`${styles.loading__iconWrapper}`}>
        <VscLoading className={`${styles.loading_iconWrapperIcon}`} />
      </div>
    </div>
  )
}