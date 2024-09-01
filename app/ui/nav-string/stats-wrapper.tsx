import { getTotalBlogsNumber } from '@/app/lib/actions/blog'
import { getTotalProjectsNumber } from '@/app/lib/actions/projects'

export async function StatsWrapper() {
  const totalProjectsNumber = await getTotalProjectsNumber()
  const totalBlogsNumber = await getTotalBlogsNumber()

  return (
    <div className="flex flex-col gap-3 text-2xl">
      <div className="flex gap-2 pb-3 border-b border-neutral-600 items-center justify-center">
        <span className="text-neutral-400 font-medium">
          {totalProjectsNumber}
        </span>
        <span>Projects</span>
      </div>
      <div className="flex gap-2 pb-3 border-b border-neutral-600 items-center justify-center">
        <span className="text-neutral-400 font-medium">{totalBlogsNumber}</span>
        <span>Blogs</span>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <span className="text-neutral-400 font-medium">3</span>
        <span>Time abroad</span>
      </div>
    </div>
  )
}

export function StatsWrapperSkeleton() {
  return (
    <div className="flex flex-col gap-3 text-2xl">
      <div className="flex gap-2 pb-3 border-b border-neutral-600 items-center justify-center">
        <span className="bg-neutral-700 font-medium w-[1em] h-[1em] rounded-md shim-carcass shim-effect animate"></span>
        <span>Projects</span>
      </div>
      <div className="flex gap-2 pb-3 border-b border-neutral-600 items-center justify-center">
        <span className="bg-neutral-700 font-medium w-[1em] h-[1em] rounded-md shim-carcass shim-effect animate"></span>
        <span>Blogs</span>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <span className="bg-neutral-700 font-medium w-[1em] h-[1em] rounded-md shim-carcass shim-effect animate"></span>
        <span>Time abroad</span>
      </div>
    </div>
  )
}
