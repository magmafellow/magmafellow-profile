'use client'

import { FaRegAddressCard } from 'react-icons/fa'
import { ModalHire } from '../modal'
import styles from './nav-string.module.scss'

export default function PersonalBtn({ id }: { id: string }) {
  return (
    <div
      className={`${styles.first_btn} hover:bg-zinc-700 cursor-pointer text-zinc-300 flex gap-2 items-center h-full px-4`}
      onClick={() => ModalHire(id)}
    >
      <FaRegAddressCard />
    </div>
  )
}
