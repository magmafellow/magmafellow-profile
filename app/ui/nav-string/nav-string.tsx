import { FiHome } from 'react-icons/fi'
import { FaRegStickyNote } from 'react-icons/fa'
import { IoMdCodeWorking } from 'react-icons/io'
import { IoStatsChart } from 'react-icons/io5'
import styles from './nav-string.module.scss'
import Link from 'next/link'
import { Modal, ModalHire } from '../modal'
import { FaGithub, FaTelegramPlane } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import PersonalBtn from './personal-card-btn'
import PersonalStatsBtn from './personal-stats-btn'
import { Suspense } from 'react'
import { StatsWrapper, StatsWrapperSkeleton } from './stats-wrapper'
import ThemeToggle from '../toggle-theme-mode'

export default async function NavString() {
  return (
    <>
      <div className="fixed flex items-stretch gap-2 z-10 top-5 md:top-9 left-[50%] -translate-x-[50%]">
        <div
          className={`${styles.first_item} overflow-hidden backdrop-blur-sm rounded-lg border border-slate-600`}
        >
          <PersonalBtn id="personal-card" />
        </div>
        <div
          className={`${styles.container_middle} overflow-hidden backdrop-blur-sm flex justify-evenly items-center rounded-lg border border-slate-600`}
        >
          <Link
            href="/"
            className={`${styles.middle_item} hover:bg-zinc-300 dark:hover:bg-zinc-700 cursor-pointer text-zinc-300 flex gap-2 items-center h-full pl-4 pr-2 py-2 sm:pr-3 sm:pl-5 sm:py-1.5 md:pl-3 md:pr-2 md:py-1`}
          >
            <FiHome className='text-zinc-700 dark:text-zinc-300' />
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">home</span>
          </Link>
          <Link
            href="/blog"
            className={`${styles.middle_item} hover:bg-zinc-300 dark:hover:bg-zinc-700 cursor-pointer text-zinc-300 flex gap-2 items-center h-full px-2 py-2 sm:px-3 sm:py-1.5 md:px-2 md:py-1`}
          >
            <FaRegStickyNote className='text-zinc-700 dark:text-zinc-300' />
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">blog</span>
          </Link>
          <Link
            href="/projects"
            className={`${styles.middle_item} hover:bg-zinc-300 dark:hover:bg-zinc-700 cursor-pointer text-zinc-300 flex gap-2 items-center h-full pr-4 pl-2 py-2 sm:pl-3 sm:pr-5 sm:py-1.5 md:pr-3 md:pl-2 md:py-1`}
          >
            <IoMdCodeWorking className='text-zinc-700 dark:text-zinc-300' />
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">Projects</span>
          </Link>
        </div>
        <div
          className={`${styles.last_item} overflow-hidden backdrop-blur-sm rounded-lg border border-slate-600`}
        >
          <PersonalStatsBtn id="personal-stats" />
        </div>
      </div>
      <Modal
        className="w-[95%] pt-4 max-w-[500px] bg-[#e7e7e7] border-neutral-400 dark:bg-[#0f0f0f] border dark:border-neutral-600 z-[100]"
        id="personal-card"
      >
        <div className="flex justify-center mb-2 items-center">
          <img
            className="w-28 h-28 rounded-full"
            src="/carrot.jpg"
            alt="profile image"
          />
        </div>
        <h3 className="text-2xl text-stone-600 dark:text-neutral-300 mb-4 text-center font-bold">
          @magmafellow
        </h3>
        <div className="flex border-b pb-2 mb-1 border-neutral-600 items-center flex-col gap-4">
          <a
            className="group text-xl inline-flex gap-1 items-center"
            href="https://t.me/polrekost"
          >
            <FaTelegramPlane className="group-hover:rotate-12 group-hover:text-sky-400 transition" />
            <span className="group-hover:text-neutral-100">@polrekost</span>
            <span>(telegram)</span>
          </a>
          <a
            className="group text-xl inline-flex gap-2 items-center"
            href="mailto:magmafellow@gmail.com"
          >
            <IoMdMail className="group-hover:rotate-12 group-hover:text-red-400 transition" />
            <span className="group-hover:text-neutral-100">
              magmafellow@gmail.com
            </span>
          </a>
          <a
            className="group text-xl inline-flex gap-2 items-center"
            href="https://github.com/magmafellow"
          >
            <FaGithub className="group-hover:rotate-12 group-hover:text-emerald-400 transition" />
            <span className="group-hover:text-neutral-100">
              github.com/magmafellow
            </span>
          </a>
        </div>
        <div className="px-2 pb-2 border-b border-neutral-600">
          <h4 className="text-xl text-neutral-400 font-bold">Bio</h4>
          <p className="">
            In IRL they call me alex. age of 19. I reside in Moscow, Russia.
            Enjoy coding and software engineering
          </p>
        </div>
        <div className="flex gap-3 pl-2 py-4">
          <div className="flex items-center gap-0.5">
            <span>en</span>
            <span>-</span>
            <span className="text-neutral-400 font-bold">c2</span>
          </div>
          <div className="flex items-center gap-0.5">
            <span>ru</span>
            <span>-</span>
            <span className="text-neutral-400 font-bold">fluent</span>
          </div>
        </div>
        <ThemeToggle className='absolute top-3 left-3 text-4xl dark:hover:text-[#48cfad] hover:text-[#20a382] transition' />
      </Modal>
      <Modal
        className="w-[90%] pt-4 max-w-[500px] bg-[#e7e7e7] border-neutral-400 dark:bg-[#0f0f0f] border dark:border-neutral-600 z-[100]"
        id="personal-stats"
      >
        <div className="flex justify-center items-center mb-7">
          <IoStatsChart className="text-4xl" />
        </div>
        <Suspense fallback={<StatsWrapperSkeleton />}>
          <StatsWrapper />
        </Suspense>
      </Modal>
    </>
  )
}
