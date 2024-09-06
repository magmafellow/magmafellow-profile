'use client'

import { IoStatsChart } from "react-icons/io5";
import { ModalHire } from "../modal";

export default function PersonalStatsBtn({ id }: { id: string }) {
  return (
    <div
      className={`hover:bg-zinc-300 dark:hover:bg-zinc-700 cursor-pointer text-zinc-700 dark:text-zinc-300 flex gap-2 items-center h-full px-4`}
      onClick={() => ModalHire(id)}
    >
      <IoStatsChart />
    </div>
  )
}
