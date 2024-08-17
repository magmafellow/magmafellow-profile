import { FiHome } from 'react-icons/fi'
import { FaRegStickyNote } from 'react-icons/fa'
import { IoMdCodeWorking } from 'react-icons/io'
import { FaRegAddressCard } from 'react-icons/fa'
import { IoStatsChart } from "react-icons/io5";


export default function NavString() {
  return (
    <div className="fixed flex items-stretch gap-2 z-10 top-9 left-[50%] -translate-x-[50%]">
      <div className="overflow-hidden backdrop-blur-sm rounded-lg border border-slate-600">
        <div className='hover:bg-zinc-700 cursor-pointer text-zinc-300 flex gap-2 items-center h-full px-4'>
          <FaRegAddressCard />
        </div>
      </div>
      <div className="backdrop-blur-sm px-2 flex justify-evenly items-center w-72 rounded-lg border border-slate-600">
        <div
          className={`hover:bg-zinc-700 cursor-pointer text-zinc-300 flex gap-2 items-center h-full px-2 py-2 sm:px-3 sm:py-1.5 md:px-2 md:py-1`}
        >
          <FiHome />
          <span className="font-semibold">home</span>
        </div>
        <div
          className={`hover:bg-zinc-700 cursor-pointer text-zinc-300 flex gap-2 items-center h-full px-2 py-2 sm:px-3 sm:py-1.5 md:px-2 md:py-1`}
        >
          <FaRegStickyNote />
          <span className="font-semibold">blog</span>
        </div>
        <div
          className={`hover:bg-zinc-700 cursor-pointer text-zinc-300 flex gap-2 items-center h-full px-4 py-2 sm:px-3 sm:py-1.5 md:px-2 md:py-1`}
        >
          <IoMdCodeWorking />
          <span className="font-semibold">Projects</span>
        </div>
      </div>
      <div className="overflow-hidden backdrop-blur-sm rounded-lg border border-slate-600">
        <div className='hover:bg-zinc-700 cursor-pointer text-zinc-300 flex gap-2 items-center h-full px-4'>
          <IoStatsChart />
        </div>
      </div>
    </div>
  )
}
