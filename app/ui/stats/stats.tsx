import { truncatePhrase } from "@/app/lib/utils";
import { IoStatsChart } from "react-icons/io5";
import styles from './stats.module.scss'

export default function Stats() {
  return (
    <div className={`${styles.stats}`}>
      <div className={`${styles.stats_number_box}`}>
        <div className={`${styles.stats_number_box_item}`}>
          <IoStatsChart />
        </div>
        <div className={`${styles.stats_number_box_item}`}>
          <span className={`${styles.stats_value}`}>18</span>
          <span className={`${styles.stats_label}`}>Projects</span>
        </div>
        <div className={`${styles.stats_number_box_item}`}>
          <span className={`${styles.stats_value}`}>7</span>
          <span className={`${styles.stats_label}`}>Blogs</span>
        </div>
        <div className={`${styles.stats_number_box_item}`}>
          <span className={`${styles.stats_value}`}>3</span>
          <span className={`${styles.stats_label}`}>times abroad :3</span>
        </div>
      </div>
      <div className={`${styles.delimiter} ${styles.mb_16px}`}></div>
      <div className={`${styles.latest_blogs}`}>
        <h2 className={`${styles.latest_blogs_title}`}>Latest blogs</h2>
        <div className={`${styles.latest_blogs_box}`}>
          <div className={`${styles.latest_blogs_box_item}`}>
            <h3 className={`${styles.latest_blogs_box_item_title}`}>
              {truncatePhrase("Css variable's concept", 23)}
            </h3>
            <div className={`${styles.latest_blogs_box_item_readtime_box}`}>
              <span>15</span>
              <span>min</span>
            </div>
          </div>
          <div className={`${styles.latest_blogs_box_item}`}>
            <h3 className={`${styles.latest_blogs_box_item_title}`}>
              {truncatePhrase('New way to pass off Youtube block', 23)}
            </h3>
            <div className={`${styles.latest_blogs_box_item_readtime_box}`}>
              <span>5</span>
              <span>min</span>
            </div>
          </div>
          <div className={`${styles.latest_blogs_box_item}`}>
            <h3 className={`${styles.latest_blogs_box_item_title}`}>
              {truncatePhrase('Flexbox css', 23)}
            </h3>
            <div className={`${styles.latest_blogs_box_item_readtime_box}`}>
              <span>7</span>
              <span>min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
