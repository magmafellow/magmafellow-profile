'use client'

import { FaRegAddressCard } from 'react-icons/fa'
import { ModalHire } from '../modal'

export default function PersonalBtn({ id }: { id: string }) {
  return (
    <div
      className={`hover:bg-zinc-700 cursor-pointer text-zinc-300 flex gap-2 items-center h-full px-4`}
      onClick={() => ModalHire(id)}
    >
      <FaRegAddressCard />
    </div>
  )
}
