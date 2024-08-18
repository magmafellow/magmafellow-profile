import { FiHome } from 'react-icons/fi'
import { FaRegStickyNote } from 'react-icons/fa'
import { IoMdCodeWorking } from 'react-icons/io'
import { FaRegAddressCard } from 'react-icons/fa'
import { IoStatsChart } from "react-icons/io5";
import styles from './nav-string.module.scss'


export default function NavString() {
  return (
    <div className="fixed flex items-stretch gap-2 z-10 top-9 left-[50%] -translate-x-[50%]">
      <div className={`${styles.first_item} overflow-hidden backdrop-blur-sm rounded-lg border border-slate-600`}>
        <div className={`hover:bg-zinc-700 cursor-pointer text-zinc-300 flex gap-2 items-center h-full px-4`}>
          <FaRegAddressCard />
        </div>
      </div>
      <div className={`${styles.container_middle} overflow-hidden backdrop-blur-sm flex justify-evenly items-center rounded-lg border border-slate-600`}>
        <div
          className={`${styles.middle_item} hover:bg-zinc-700 cursor-pointer text-zinc-300 flex gap-2 items-center h-full pl-4 pr-2 py-2 sm:pr-3 sm:pl-5 sm:py-1.5 md:pl-3 md:pr-2 md:py-1`}
        >
          <FiHome />
          <span className="font-semibold">home</span>
        </div>
        <div
          className={`${styles.middle_item} hover:bg-zinc-700 cursor-pointer text-zinc-300 flex gap-2 items-center h-full px-2 py-2 sm:px-3 sm:py-1.5 md:px-2 md:py-1`}
        >
          <FaRegStickyNote />
          <span className="font-semibold">blog</span>
        </div>
        <div
          className={`${styles.middle_item} hover:bg-zinc-700 cursor-pointer text-zinc-300 flex gap-2 items-center h-full pr-4 pl-2 py-2 sm:pl-3 sm:pr-5 sm:py-1.5 md:pr-3 md:pl-2 md:py-1`}
        >
          <IoMdCodeWorking />
          <span className="font-semibold">Projects</span>
        </div>
      </div>
      <div className={`${styles.last_item} overflow-hidden backdrop-blur-sm rounded-lg border border-slate-600`}>
        <div className={`hover:bg-zinc-700 cursor-pointer text-zinc-300 flex gap-2 items-center h-full px-4`}>
          <IoStatsChart />
        </div>
      </div>
    </div>
  )
}
