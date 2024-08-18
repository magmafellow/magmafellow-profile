import { truncatePhrase } from "@/app/lib/utils";
import { IoStatsChart } from "react-icons/io5";
import styles from './main.module.scss'
import LatestBlogs from "./latest-blogs";
import getStats from "@/app/lib/actions/stats";
import { Suspense } from "react";
import Numbers, { NumbersSkeleton } from "./numbers";

export default async function Stats() {
  
  return (
    <div className={`${styles.stats}`}>
      <div className={`${styles.stats_number_box}`}>
        <div className={`${styles.stats_number_box_item}`}>
          <IoStatsChart />
        </div>
        <Suspense fallback={<NumbersSkeleton></NumbersSkeleton>}>
          <Numbers />
        </Suspense>
      </div>
      <div className={`${styles.delimiter} ${styles.mb_16px}`}></div>
      <LatestBlogs />
    </div>
  )
}
