import { truncatePhrase } from "@/app/lib/utils";
import { IoStatsChart } from "react-icons/io5";
import styles from './main.module.scss'
import LatestBlogs from "./latest-blogs";
import getStats from "@/app/lib/actions/stats";
import { Suspense } from "react";
import Numbers, { NumbersSkeleton } from "./numbers";
import LatestBlogsPlaceholder from "./latest-blogs-placeholder";

export default function StatsLoading() {
  
  return (
    <div className={`${styles.stats}`}>
      <div className={`${styles.stats_number_box}`}>
        <div className={`${styles.stats_number_box_item}`}>
          <IoStatsChart />
        </div>
        <NumbersSkeleton />
      </div>
      <div className={`${styles.delimiter} ${styles.mb_16px}`}></div>
      <LatestBlogsPlaceholder />
    </div>
  )
}
